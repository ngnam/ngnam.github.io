import Head from 'next/head'
import FormInput from '../../../components/form-input/formInput'
import { useRef, useState, useMemo } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'
import styles from './css.module.css';
import cn from 'classnames'

export default function MultipleColumnGenerator() {
    const router = useRouter()
    const textArea = useRef(null);

    const [formValues, setValues] = useState({
        columnCounts: 1,
        columnGaps: 15,
        columnRuleStyle: 'solid',
        columnRuleWidth: 2,
        columnRuleColor: '#000000',
    });

    const [cssGeneerate, setCssGeneerate] = useState({
        columnCount: '1',
        columnGap: '15px',
        columnRule: '2px solid #000000',
    });

    const [copyValue, setCopyValue] = useState(null);

    useEffect(() => {
        const cssGenerate = {};
        cssGenerate.columnCount = formValues.columnCounts;
        cssGenerate.columnGap = formValues.columnGaps + 'px';
        cssGenerate.columnRule = formValues.columnRuleWidth + 'px ' + formValues.columnRuleStyle + ' ' + formValues.columnRuleColor;

        setCssGeneerate(cssGenerate);

        const copyText = 
            `column-count: ${cssGenerate.columnCount};\n` + 
            `-webkit-column-count: ${cssGenerate.columnCount};\n` + 
            `-moz-column-count: ${cssGenerate.columnCount};\n` + 
            `column-gap: ${cssGenerate.columnGap};\n` +
            `-webkit-column-gap: ${cssGenerate.columnGap};\n` +
            `-moz-column-gap: ${cssGenerate.columnGap};\n` +
            `column-rule: ${cssGenerate.columnRule};\n`;
            `-webkit-column-rule: ${cssGenerate.columnRule};\n`;
            `-moz-column-rule: ${cssGenerate.columnRule};\n`;

        textArea.current.value = copyText;
        setCopyValue(copyText);

    }, [formValues]);

    const optionStyles = [
        { label: 'Dotted', value: 'dotted' },
        { label: 'Dashed', value: 'dashed' },
        { label: 'Solid', value: 'solid' },
        { label: 'Double', value: 'double' },
        { label: 'Groove', value: 'groove' },
        { label: 'ridge', value: 'ridge' },
        { label: 'Inset', value: 'inset' },
        { label: 'Outset', value: 'outset' },
        { label: 'None', value: 'none' },
        { label: 'Hidden', value: 'hidden' },
    ]

    const [inputs, setInputs] = useState([
        {
            id: 1,
            name: "columnCounts",
            type: "range",
            min: 1,
            max: 5,
            step: 1,
            label: "Column Counts",
        },
        {
            id: 2,
            name: "columnGaps",
            type: "range",
            min: 0,
            max: 50,
            step: 1,
            label: "Column Gaps",
            unit: 'px',
        },
        {
            id: 3,
            name: "columnRuleStyle",
            label: "Column Rule Style",
            type: "select",
            options: JSON.parse(JSON.stringify(optionStyles)),
        },
        {
            id: 4,
            name: "columnRuleWidth",
            type: "range",
            min: 1,
            max: 20,
            step: 1,
            label: "Column Rule Width",
            unit: 'px',
        },
        {
            id: 5,
            name: "columnRuleColor",
            type: "color",
            label: "Column Rule Color",
        }
    ]);

    const handleCopy = (e) => {
    };

    const onChange = (e) => {
        setValues({ ...formValues, [e.target.name]: e.target.value });
    };

    // render components
    return (
        <>
            <Head>
                <title>Multiple Columns CSS Generator</title>
                <meta name="description" content="Multiple Columns CSS Generator tool - a product by nguyen van nam 0928351036" />
            </Head>
            <header className={styles.header}>
                <div className={cn([styles.container, 'container'])}>
                    <h1>A Product of Nguyen Van Nam</h1>
                    <h3>Multiple Columns CSS Generator</h3>
                    <span className={styles["link-back"]} onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className={cn([styles.container, 'container'])}>
                <div className={styles["item-container"]} style={{flex: '0 1 25%'}}>
                    <form>
                        <h1>Border Radius Options</h1>

                        {inputs
                            .map((input) => (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    value={formValues[input.name]}
                                    onChange={onChange}
                                />
                            ))}
                    </form>
                </div>
                
                <div className={cn([styles['item-container'], styles.box])}>
                    <div id="multiple-column-css-generator-demo" style={{
                        columnCount: `${cssGeneerate.columnCount}`,
                        columnGap: `${cssGeneerate.columnGap}`,
                        columnRule: `${cssGeneerate.columnRule}`,
                        minHeight: '300px',
                        maxHeight: '300px',
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptate tenetur quia eos exercitationem omnis sunt non laborum provident! Magni dolore accusantium quibusdam voluptatibus sint commodi quaerat? Error, repudiandae atque?
                        Soluta id quaerat nisi illo sapiente. Porro possimus animi est tempora suscipit ad ducimus. Sint, optio rerum fuga eligendi ex illo animi? Commodi aperiam voluptatem, quae quibusdam rem veritatis ipsam.
                        Quos eaque, officiis unde ea quia explicabo quaerat aliquam molestiae perferendis provident libero eum natus exercitationem eos excepturi harum mollitia, vitae cumque sapiente expedita. Velit deleniti perferendis ab similique dolore.
                        Neque reiciendis corrupti qui ad harum magnam et cupiditate eveniet labore doloremque quaerat culpa fugit laudantium, suscipit id in sit eius nam cum quasi iusto voluptas! Unde nihil explicabo molestiae.
                        Veniam eos nesciunt, dolor, tempore soluta, quaerat illo cupiditate quam optio quos cumque ut quisquam ipsum? Aspernatur ex nobis autem optio, laboriosam dicta sint tenetur ullam quam quisquam id alias.
                        Perspiciatis modi praesentium aliquid harum. Et eos mollitia eaque ea voluptatibus quis explicabo natus iure repellat fuga facere alias, voluptas id dignissimos commodi dolor voluptates. Delectus vel laborum omnis cumque.
                        Nostrum consequatur quisquam culpa omnis reprehenderit necessitatibus! Eum odio voluptate ut cumque accusamus fugit animi aliquid esse laboriosam vero autem officiis tempora est debitis, aliquam obcaecati dolores ad culpa nesciunt!
                        Harum, hic! Totam id deleniti, veniam ipsum nesciunt quia numquam recusandae alias? Blanditiis vitae enim suscipit deserunt, commodi, molestias exercitationem nostrum quo non cumque numquam dolorem eaque tempore omnis quasi?
                        Minus magnam incidunt consectetur nihil accusamus reprehenderit nam omnis repudiandae fugit quo, sequi est doloremque, quia veritatis vitae ad. Natus repudiandae repellat veniam at ipsa voluptatum, rem quos eius sunt.
                        Ipsam quasi, officia aut veritatis ab tempore assumenda. Inventore odio, dignissimos sit incidunt ad reiciendis placeat aut vel esse ipsum a voluptate illum natus accusantium, laboriosam, rerum numquam dolores suscipit.
                    </div>
                    
                    <div className={styles["item-code"]}>
                        <textarea placeholder="css generator" rows="5" cols="20" ref={textArea}>
                        </textarea>
                        <div className={styles["item-action"]}>
                            <CopyToClipboard text={copyValue} onCopy={handleCopy}>
                                <button className="p-2">Copy</button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
