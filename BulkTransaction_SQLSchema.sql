-- ============================================================
-- BULK TRANSACTION REPORT - SQL SERVER DATASOURCE
-- Generated for DevExpress XtraReport
-- ============================================================

-- ============================================================
-- 1. TABLE: BulkTransactionHeader (header info from JSON root)
-- ============================================================
CREATE TABLE [dbo].[BulkTransactionHeader] (
    [Id]                INT             IDENTITY(1,1) PRIMARY KEY,
    [GCMS_REF_NO]       NVARCHAR(50)    NOT NULL,
    [RH2H_REF_NO]       NVARCHAR(50)    NULL,
    [UNIT_CODE]         NVARCHAR(20)    NULL,
    [CUSTOMER_NAME]     NVARCHAR(200)   NULL,
    [APPLICANT_NAME]    NVARCHAR(200)   NULL,
    [PAYMENT_METHOD]    NVARCHAR(200)   NULL,
    [VALUE_DATE]        DATETIME        NULL,
    [DEBIT_ACCOUNT_NO]  NVARCHAR(50)    NULL,
    [NUMBER_OF_TRANS]   NVARCHAR(50)    NULL,
    [CCY]               NVARCHAR(10)    NULL,
    [AMOUNT]            NVARCHAR(50)    NULL,   -- store as string (formatted)
    [BATCH_AMOUNT]      NVARCHAR(50)    NULL,
    [REMARKS]           NVARCHAR(500)   NULL,
    [CREATED_AT]        DATETIME        DEFAULT GETDATE()
);
GO

-- ============================================================
-- 2. TABLE: BulkTransactionDetail (from JSON details array)
-- ============================================================
CREATE TABLE [dbo].[BulkTransactionDetail] (
    [Id]                INT             IDENTITY(1,1) PRIMARY KEY,
    [HeaderId]          INT             NOT NULL,
    [No]                INT             NOT NULL,
    [BEN_ACCOUNT_NO]    NVARCHAR(50)    NULL,
    [BEN_NAME]          NVARCHAR(200)   NULL,
    [BEN_BANK_NAME]     NVARCHAR(200)   NULL,
    [CCY]               NVARCHAR(10)    NULL,
    [AMOUNT]            DECIMAL(18,2)   NULL,
    [CHARGE_ACCOUNT]    NVARCHAR(50)    NULL,
    [BANK_CHARGE]       NVARCHAR(20)    NULL,
    [REMITTANCE_INFO]   NVARCHAR(500)   NULL,
    [RH2H_TRANS_REF]    NVARCHAR(50)    NULL,
    CONSTRAINT [FK_Detail_Header] FOREIGN KEY ([HeaderId])
        REFERENCES [dbo].[BulkTransactionHeader]([Id])
);
GO

-- ============================================================
-- 3. STORED PROCEDURE: sp_GetBulkTransactionReport
--    Returns header + detail (Master-Detail for XtraReport)
-- ============================================================
CREATE OR ALTER PROCEDURE [dbo].[sp_GetBulkTransactionReport]
    @GCMS_REF_NO NVARCHAR(50) = NULL
AS
BEGIN
    SET NOCOUNT ON;

    -- ---- Result Set 1: Header --------------------------------
    SELECT
        h.[Id]                  AS [HeaderId],
        h.[GCMS_REF_NO],
        h.[RH2H_REF_NO],
        h.[UNIT_CODE],
        h.[CUSTOMER_NAME],
        h.[APPLICANT_NAME],
        h.[PAYMENT_METHOD],
        CONVERT(NVARCHAR(20), h.[VALUE_DATE], 103) AS [VALUE_DATE],   -- dd/MM/yyyy
        h.[DEBIT_ACCOUNT_NO],
        h.[NUMBER_OF_TRANS],
        h.[CCY],
        h.[AMOUNT],
        h.[BATCH_AMOUNT],
        h.[REMARKS]
    FROM [dbo].[BulkTransactionHeader] h
    WHERE (@GCMS_REF_NO IS NULL OR h.[GCMS_REF_NO] = @GCMS_REF_NO);

    -- ---- Result Set 2: Detail --------------------------------
    SELECT
        d.[Id]              AS [DetailId],
        d.[HeaderId],
        d.[No],
        d.[BEN_ACCOUNT_NO],
        d.[BEN_NAME],
        d.[BEN_BANK_NAME],
        d.[CCY],
        d.[AMOUNT],
        d.[CHARGE_ACCOUNT],
        d.[BANK_CHARGE],
        d.[REMITTANCE_INFO],
        d.[RH2H_TRANS_REF]
    FROM [dbo].[BulkTransactionDetail] d
    INNER JOIN [dbo].[BulkTransactionHeader] h ON d.[HeaderId] = h.[Id]
    WHERE (@GCMS_REF_NO IS NULL OR h.[GCMS_REF_NO] = @GCMS_REF_NO)
    ORDER BY d.[HeaderId], d.[No];
END
GO

-- ============================================================
-- 4. STORED PROCEDURE: sp_ImportBulkTransactionFromJSON
--    Import trực tiếp từ JSON string vào 2 bảng
-- ============================================================
CREATE OR ALTER PROCEDURE [dbo].[sp_ImportBulkTransactionFromJSON]
    @JsonData NVARCHAR(MAX)
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        BEGIN TRANSACTION;

        DECLARE @HeaderId INT;

        -- Insert header
        INSERT INTO [dbo].[BulkTransactionHeader]
            ([GCMS_REF_NO],[RH2H_REF_NO],[UNIT_CODE],[CUSTOMER_NAME],
             [APPLICANT_NAME],[PAYMENT_METHOD],[VALUE_DATE],[DEBIT_ACCOUNT_NO],
             [NUMBER_OF_TRANS],[CCY],[AMOUNT],[BATCH_AMOUNT],[REMARKS])
        SELECT
            JSON_VALUE(@JsonData, '$.GCMS_REF_NO'),
            JSON_VALUE(@JsonData, '$.RH2H_REF_NO'),
            JSON_VALUE(@JsonData, '$.UNIT_CODE'),
            JSON_VALUE(@JsonData, '$.CUSTOMER_NAME'),
            JSON_VALUE(@JsonData, '$.APPLICANT_NAME'),
            JSON_VALUE(@JsonData, '$.PAYMENT_METHOD'),
            TRY_CONVERT(DATETIME, JSON_VALUE(@JsonData, '$.VALUE_DATE'), 101),
            JSON_VALUE(@JsonData, '$.DEBIT_ACCOUNT_NO'),
            JSON_VALUE(@JsonData, '$.NUMBER_OF_TRANS'),
            JSON_VALUE(@JsonData, '$.CCY'),
            JSON_VALUE(@JsonData, '$.AMOUNT'),
            JSON_VALUE(@JsonData, '$.BATCH_AMOUNT'),
            JSON_VALUE(@JsonData, '$.REMARKS');

        SET @HeaderId = SCOPE_IDENTITY();

        -- Insert details
        INSERT INTO [dbo].[BulkTransactionDetail]
            ([HeaderId],[No],[BEN_ACCOUNT_NO],[BEN_NAME],[BEN_BANK_NAME],
             [CCY],[AMOUNT],[CHARGE_ACCOUNT],[BANK_CHARGE],[REMITTANCE_INFO],[RH2H_TRANS_REF])
        SELECT
            @HeaderId,
            CAST(JSON_VALUE(d.[value], '$.No')              AS INT),
            JSON_VALUE(d.[value], '$.BEN_ACCOUNT_NO'),
            JSON_VALUE(d.[value], '$.BEN_NAME'),
            JSON_VALUE(d.[value], '$.BEN_BANK_NAME'),
            JSON_VALUE(d.[value], '$.CCY'),
            TRY_CAST(JSON_VALUE(d.[value], '$.AMOUNT')      AS DECIMAL(18,2)),
            JSON_VALUE(d.[value], '$.CHARGE_ACCOUNT'),
            JSON_VALUE(d.[value], '$.BANK_CHARGE'),
            JSON_VALUE(d.[value], '$.REMITTANCE_INFO'),
            JSON_VALUE(d.[value], '$.RH2H_TRANS_REF')
        FROM OPENJSON(@JsonData, '$.details') d;

        COMMIT TRANSACTION;
        SELECT @HeaderId AS [NewHeaderId], 'SUCCESS' AS [Status];
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        SELECT ERROR_MESSAGE() AS [ErrorMessage], 'FAILED' AS [Status];
    END CATCH
END
GO

-- ============================================================
-- 5. VIEW: vw_BulkTransactionFlat  (optional - flat view for simple report)
-- ============================================================
CREATE OR ALTER VIEW [dbo].[vw_BulkTransactionFlat] AS
SELECT
    h.[GCMS_REF_NO],
    h.[RH2H_REF_NO],
    h.[CUSTOMER_NAME],
    h.[APPLICANT_NAME],
    h.[PAYMENT_METHOD],
    h.[VALUE_DATE],
    h.[DEBIT_ACCOUNT_NO],
    h.[NUMBER_OF_TRANS],
    h.[CCY]             AS [HEADER_CCY],
    h.[AMOUNT]          AS [HEADER_AMOUNT],
    h.[BATCH_AMOUNT],
    h.[REMARKS],
    d.[No],
    d.[BEN_ACCOUNT_NO],
    d.[BEN_NAME],
    d.[BEN_BANK_NAME],
    d.[CCY]             AS [DETAIL_CCY],
    d.[AMOUNT]          AS [DETAIL_AMOUNT],
    d.[CHARGE_ACCOUNT],
    d.[BANK_CHARGE],
    d.[REMITTANCE_INFO],
    d.[RH2H_TRANS_REF]
FROM [dbo].[BulkTransactionHeader] h
INNER JOIN [dbo].[BulkTransactionDetail] d ON d.[HeaderId] = h.[Id];
GO
