import Head from 'next/head'
import FormInput from '../../../components/form-input/formInput'
import FormGroupInput from '../../../components/form-input/formGroupInput'
import { useRef, useState, useMemo } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'
import styles from './css.module.css';
import cn from 'classnames'

export default function BorderCssGenerator() {
    const router = useRouter()
    const textArea = useRef(null);

    const [formValues, setValues] = useState({
        targetinvidualborder: false,
        borderwidth: 10,
        borderstyle: 'solid',
        bordercolor: '#ff6550',
        bordertopwidth: 10,
        bordertopstyle: 'solid',
        bordertopcolor: '#ff6550',
        borderrightwidth: 0,
        borderrightstyle: 'solid',
        borderrightcolor: '#ff6550',
        borderbottomwidth: 10,
        borderbottomstyle: 'solid',
        borderbottomcolor: '#ff6550',
        borderleftwidth: 0,
        borderleftstyle: 'solid',
        borderleftcolor: '#ff6550',
        background: '#ffffff',
        genbackground: true
    });

    const defautbg = 'rgb(21 140 186)';

    const [cssGeneerate, setCssGeneerate] = useState({
        borderAll: '10px solid #ff6550',
    });
    const [cssBackgroundColor, setCssBackgroundColor] = useState(defautbg);
    const [copyValue, setCopyValue] = useState(null);

    useEffect(() => {
        const cssGenerate = {
            borderAll: `${formValues.borderwidth}px ${formValues.borderstyle} ${formValues.bordercolor}`,
            borderTop: `${formValues.bordertopwidth}px ${formValues.bordertopstyle} ${formValues.bordertopcolor}`,
            borderRight: `${formValues.borderrightwidth}px ${formValues.borderrightstyle} ${formValues.borderrightcolor}`,
            borderBottom: `${formValues.borderbottomwidth}px ${formValues.borderbottomstyle} ${formValues.borderbottomcolor}`,
            borderLeft: `${formValues.borderleftwidth}px ${formValues.borderleftstyle} ${formValues.borderleftcolor}`,
        }
        setCssGeneerate(cssGenerate);

        const copyText = `${!formValues.targetinvidualborder ? `border: ${cssGenerate.borderAll};\n` :
            `border-top: ${cssGenerate.borderTop};\n` +
            `border-right: ${cssGenerate.borderRight};\n` +
            `border-bottom: ${cssGenerate.borderBottom};\n` +
            `border-left: ${cssGenerate.borderLeft};\n`}` +
            `${formValues.genbackground ? `background: ${cssBackgroundColor};` : ''}`;

        if (formValues['genbackground']) {
            setCssBackgroundColor(formValues['background']);
        } else {
            setCssBackgroundColor(defautbg);
        }

        textArea.current.value = copyText;
        setCopyValue(copyText);

    }, [formValues, cssBackgroundColor]);

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
            name: "borderwidth",
            type: "range",
            min: 0,
            max: 200,
            step: 1,
            label: "Border Width (all borders)",
            required: false,
            unit: 'px',
            hidden: false,
        },
        {
            id: 2,
            name: "targetinvidualborder",
            type: "checkbox",
            label: "Target invidual border",
        },
        {
            id: 3,
            name: "borderstyle",
            label: "Border Style",
            type: "select",
            options: JSON.parse(JSON.stringify(optionStyles)),
        },
        {
            id: 4,
            name: "bordercolor",
            type: "color",
            label: "Border Color",
        },
        {
            id: 5,
            name: "bordertopwidth",
            group: "Border Top",
            type: "number",
            col: 3,
            hidden: true,
            unit: 'px',
        },
        {
            id: 6,
            name: "bordertopstyle",
            group: "Border Top",
            type: "select",
            options: JSON.parse(JSON.stringify(optionStyles)),
            col: 3,
            hidden: true,
        },
        {
            id: 7,
            name: "bordertopcolor",
            group: "Border Top",
            type: "color",
            col: 3,
            hidden: true,
        },
        {
            id: 8,
            name: "borderrightwidth",
            group: "Border Right",
            type: "number",
            col: 3,
            hidden: true,
            unit: 'px',
        },
        {
            id: 9,
            name: "borderrightstyle",
            group: "Border Right",
            type: "select",
            options: JSON.parse(JSON.stringify(optionStyles)),
            col: 3,
            hidden: true,
        },
        {
            id: 10,
            name: "borderrightcolor",
            group: "Border Right",
            type: "color",
            col: 3,
            hidden: true,
        },
        {
            id: 11,
            name: "borderbottomwidth",
            group: "Border Bottom",
            type: "number",
            col: 3,
            hidden: true,
            unit: 'px',
        },
        {
            id: 12,
            name: "borderbottomstyle",
            group: "Border Bottom",
            type: "select",
            options: JSON.parse(JSON.stringify(optionStyles)),
            col: 3,
            hidden: true,
        },
        {
            id: 13,
            name: "borderbottomcolor",
            group: "Border Bottom",
            type: "color",
            col: 3,
            hidden: true,
        },
        {
            id: 14,
            name: "borderleftwidth",
            group: "Border Left",
            type: "number",
            col: 3,
            hidden: true,
            unit: 'px',
        },
        {
            id: 15,
            name: "borderleftstyle",
            group: "Border Left",
            type: "select",
            options: JSON.parse(JSON.stringify(optionStyles)),
            col: 3,
            hidden: true,
        },
        {
            id: 16,
            name: "borderleftcolor",
            group: "Border Left",
            type: "color",
            col: 3,
            hidden: true,
        },
        {
            id: 17,
            name: "background",
            type: "color",
            label: "Background Color",
        },
        {
            id: 18,
            name: "genbackground",
            type: "checkbox",
            label: "Include background color in generating code:",
        },
    ]);

    const handleCopy = (e) => {
    };

    const onChange = (e) => {
        if (e.target.type === "checkbox") {
            console.log(e.target.checked)
            if (e.target.name === "genbackground") {
                if (e.target.checked) {
                    setCssBackgroundColor(formValues['background']);
                } else {
                    setCssBackgroundColor(defautbg);
                }
            }
            if (e.target.name === 'targetinvidualborder') {
                setInputs(state => {
                    // all
                    const borderwidth = state.filter(x => x.id === 1);
                    borderwidth[0].hidden = e.target.checked;
                    const borderstyle = state.filter(x => x.id === 3);
                    borderstyle[0].hidden = e.target.checked;
                    const bordercolor = state.filter(x => x.id === 4);
                    bordercolor[0].hidden = e.target.checked;

                    // top
                    const bordertopwidth = state.filter(x => x.id === 5);
                    bordertopwidth[0].hidden = !e.target.checked;
                    const bordertopstyle = state.filter(x => x.id === 6);
                    bordertopstyle[0].hidden = !e.target.checked;
                    const bordertopcolor = state.filter(x => x.id === 7);
                    bordertopcolor[0].hidden = !e.target.checked;

                    // right
                    const borderrightwidth = state.filter(x => x.id === 8);
                    borderrightwidth[0].hidden = !e.target.checked;
                    const borderrightstyle = state.filter(x => x.id === 9);
                    borderrightstyle[0].hidden = !e.target.checked;
                    const borderrightcolor = state.filter(x => x.id === 10);
                    borderrightcolor[0].hidden = !e.target.checked;

                    // bottom
                    const borderbottomwidth = state.filter(x => x.id === 11);
                    borderbottomwidth[0].hidden = !e.target.checked;
                    const borderbottomstyle = state.filter(x => x.id === 12);
                    borderbottomstyle[0].hidden = !e.target.checked;
                    const borderbottomcolor = state.filter(x => x.id === 13);
                    borderbottomcolor[0].hidden = !e.target.checked;

                    // left
                    const borderleftwidth = state.filter(x => x.id === 14);
                    borderleftwidth[0].hidden = !e.target.checked;
                    const borderleftstyle = state.filter(x => x.id === 15);
                    borderleftstyle[0].hidden = !e.target.checked;
                    const borderleftcolor = state.filter(x => x.id === 16);
                    borderleftcolor[0].hidden = !e.target.checked;

                    return [...state];
                });
            }
            setValues({ ...formValues, [e.target.name]: !formValues[e.target.name] });
        }
        else {
            setValues({ ...formValues, [e.target.name]: e.target.value });
        }
    };

    // render components
    return (
        <>
            <Head>
                <title>Border CSS Generator</title>
                <meta name="description" content="Border CSS Generator CSS Generator tool - a product by nguyen van nam 0928351036" />
            </Head>
            <header className={styles.header}>
                <div className={cn([styles.container, 'container'])}>
                    <h1>A Product of Nguyen Van Nam</h1>
                    <h3>Border CSS Generator</h3>
                    <span className={styles['link-back']} onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className={cn([styles.container, 'container'])}>
                <div className={styles['item-container']}>
                    <form>
                        <h1>Border Options</h1>
                        <FormGroupInput label="Border Top" isShow={formValues.targetinvidualborder}>
                            <>                                
                                {
                                    inputs
                                        .filter(x => x.group === "Border Top")
                                        .map((input) => (
                                            <FormInput
                                                key={input.id}
                                                {...input}
                                                value={formValues[input.name]}
                                                onChange={onChange}
                                            />
                                        ))
                                }
                            </>
                        </FormGroupInput>

                        <FormGroupInput label="Border Right" isShow={formValues.targetinvidualborder}>
                            <>                                
                                {
                                    inputs
                                        .filter(x => x.group === "Border Right")
                                        .map((input) => (
                                            <FormInput
                                                key={input.id}
                                                {...input}
                                                value={formValues[input.name]}
                                                onChange={onChange}
                                            />
                                        ))
                                }
                            </>
                        </FormGroupInput>

                        <FormGroupInput label="Border Bottom" isShow={formValues.targetinvidualborder}>
                            <>                                
                                {
                                    inputs
                                        .filter(x => x.group === "Border Bottom")
                                        .map((input) => (
                                            <FormInput
                                                key={input.id}
                                                {...input}
                                                value={formValues[input.name]}
                                                onChange={onChange}
                                            />
                                        ))
                                }
                            </>
                        </FormGroupInput>

                        <FormGroupInput label="Border Left" isShow={formValues.targetinvidualborder}>
                            <>                                
                                {
                                    inputs
                                        .filter(x => x.group === "Border Left")
                                        .map((input) => (
                                            <FormInput
                                                key={input.id}
                                                {...input}
                                                value={formValues[input.name]}
                                                onChange={onChange}
                                            />
                                        ))
                                }
                            </>
                        </FormGroupInput>

                        {inputs
                            .filter(x => !x.group)
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
                    {formValues.targetinvidualborder ?
                        <div className={styles['item-preview']} style={{
                            borderWidth: `${formValues.bordertopwidth}px ${formValues.borderrightwidth}px ${formValues.borderbottomwidth}px ${formValues.borderleftwidth}px`,
                            borderStyle: `${formValues.bordertopstyle} ${formValues.borderrightstyle} ${formValues.borderbottomstyle} ${formValues.borderleftstyle}`,
                            borderColor: `${formValues.bordertopcolor} ${formValues.borderrightcolor} ${formValues.borderbottomcolor} ${formValues.borderleftcolor}`,
                            backgroundColor: cssBackgroundColor
                        }}>
                            Border CSS generator
                        </div>
                        :
                        <div className={styles['item-preview']} style={{
                            border: `${formValues.borderwidth}px ${formValues.borderstyle} ${formValues.bordercolor}`,
                            backgroundColor: cssBackgroundColor
                        }}>
                            Border CSS generator
                        </div>
                    }
                    
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
