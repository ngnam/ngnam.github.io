import styles from './formGroupInput.module.css';
import React, { Children } from "react";

const FormGroupInput = ({ children, label, isShow, ...props }) => {
    const child = Children.only(children);
    const { inline } = props;
    return (
        isShow &&
            <div className={styles.formGroupInput}>
                {!inline && <label className={styles.label}>{label || ''}</label>}
                <div className={styles.formGroupInputContainer}>
                    {inline && <label className={styles.label}>{label || ''}</label>}
                    {React.cloneElement(child)}
                </div>
            </div>
    )
}

export default FormGroupInput;