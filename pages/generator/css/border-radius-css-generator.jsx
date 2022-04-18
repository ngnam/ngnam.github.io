import Head from 'next/head'
import FormInput from '../../../components/form-input/formInput'
import { useRef, useState, useMemo } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'
import styles from './css.module.css';
import cn from 'classnames'

export default function BorderRadiusCssGenerator() {
    const router = useRouter()
    const textArea = useRef(null);

    const [formValues, setValues] = useState({
        borderradius: 10,
        borderradiustopleft: 10,
        borderradiustopright: 10,
        borderradiusbottomright: 10,
        borderradiusbottomleft: 10,
        borderwidth: 5,
        borderstyle: 'solid',
        bordercolor: '#ff6550',
        background: '#ffffff',
        genbackground: true
    });

    const defautbg = 'rgb(21 140 186)';

    const [cssGeneerate, setCssGeneerate] = useState({
        borderAll: '5px solid #ff6550',
    });
    const [cssBackgroundColor, setCssBackgroundColor] = useState(defautbg);
    const [copyValue, setCopyValue] = useState(null);

    useEffect(() => {
        const cssGenerate = {
            borderAll: `${formValues.borderwidth}px ${formValues.borderstyle} ${formValues.bordercolor}`,
            borderRadius: `${formValues.borderradiustopleft}px ${formValues.borderradiustopright}px ${formValues.borderradiusbottomright}px ${formValues.borderradiusbottomleft}px`,
        };

        setCssGeneerate({...cssGenerate});

        const copyText = `border: ${cssGenerate.borderAll};\n` +
        `border-radius: ${cssGenerate.borderRadius};\n` +
        `-webkit-border-radius: ${cssGenerate.borderRadius};\n` +
        `-moz-border-radius: ${cssGenerate.borderRadius};\n` +
        `-ms-border-radius: ${cssGenerate.borderRadius};\n` +
        `-o-border-radius: ${cssGenerate.borderRadius};\n` +
        `${formValues.genbackground ? `background: ${formValues.background};` : ''}`;

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
            name: "borderradius",
            type: "range",
            min: 0,
            max: 200,
            step: 1,
            label: "All Corners Radius",
            unit: 'px',
        },
        {
            id: 2,
            name: "borderradiustopleft",
            type: "range",
            min: 0,
            max: 200,
            step: 1,
            label: "Top Left Radius",
            unit: 'px',
        },
        {
            id: 3,
            name: "borderradiustopright",
            type: "range",
            min: 0,
            max: 200,
            step: 1,
            label: "Top Right Radius",
            unit: 'px',
        },
        {
            id: 4,
            name: "borderradiusbottomright",
            type: "range",
            min: 0,
            max: 200,
            step: 1,
            label: "Bottom Right Radius",
            unit: 'px',
        },
        {
            id: 5,
            name: "borderradiusbottomleft",
            type: "range",
            min: 0,
            max: 200,
            step: 1,
            label: "Bottom Left Radius",
            unit: 'px',
        },
        {
            id: 6,
            name: "borderwidth",
            type: "range",
            min: 0,
            max: 200,
            step: 1,
            label: "Border Width",
            required: false,
            unit: 'px',
        },
        {
            id: 7,
            name: "borderstyle",
            label: "Border Style",
            type: "select",
            options: JSON.parse(JSON.stringify(optionStyles)),
        },
        {
            id: 8,
            name: "bordercolor",
            type: "color",
            label: "Border Color",
        },
        {
            id: 9,
            name: "background",
            type: "color",
            label: "Background Color",
        },
        {
            id: 10,
            name: "genbackground",
            type: "checkbox",
            label: "Include background color in generating code:",
        },
    ]);

    const handleCopy = (e) => {
    };

    const onChange = (e) => {
        if (e.target.type === "checkbox") {
            if (e.target.name === "genbackground") {
                if (e.target.checked) {
                    setCssBackgroundColor(formValues['background']);
                } else {
                    setCssBackgroundColor(defautbg);
                }
            }
            setValues({ ...formValues, [e.target.name]: !formValues[e.target.name] });
        }
        else {
            if (e.target.name === 'borderradius') {
                setValues({ ...formValues, 
                    [e.target.name]: e.target.value,
                    borderradiustopleft: e.target.value,
                    borderradiustopright: e.target.value,
                    borderradiusbottomright: e.target.value,
                    borderradiusbottomleft: e.target.value,
                });
            } else {
                setValues({ ...formValues, [e.target.name]: e.target.value });
            }
        }
    };

    // render components
    return (
        <>
            <Head>
                <title>Border Radius CSS Generator</title>
                <meta name="description" content="Border Radius CSS Generator CSS Generator tool - a product by nguyen van nam 0928351036" />
            </Head>
            <header className={styles.header}>
                <div className={cn([styles.container, 'container'])}>
                    <h1>A Product of Nguyen Van Nam</h1>
                    <h3>Border Radius CSS Generator</h3>
                    <span className={styles["link-back"]} onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className={cn([styles.container, 'container'])}>
                <div className={styles["item-container"]}>
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
                    <div className={styles["item-preview"]} style={{
                        border: `${cssGeneerate.borderAll}`,
                        borderRadius: `${cssGeneerate.borderRadius}`,
                        backgroundColor: cssBackgroundColor
                    }}>
                        Border Radius generator
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
