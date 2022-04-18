import Head from 'next/head'
import FormInput from '../../../components/form-input/formInput'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'
import { HTML_SYMBOL } from '../../../lib/constants';
import styles from './css.module.css';
import cn from 'classnames'

export default function RgbaAndHexColorGenerator() {
    const router = useRouter()
    const textArea1 = useRef(null);
    const textArea2 = useRef(null);
    const textArea3 = useRef(null);

    const [formValues, setValues] = useState({
        red: 255,
        green: 101,
        blue: 80,
        opacity: 0.4,
        hexValue: '#FF65B0'
    });

    const [cssGeneerate, setCssGeneerate] = useState({
        rgba: 'rgba(255,101,80,0.4)',
        rgb: 'rgb(255,101,80)'
    });
    const [copyValue1, setCopyValue1] = useState(null);
    const [copyValue2, setCopyValue2] = useState(null);
    const [copyValue3, setCopyValue3] = useState(null);

    useEffect(() => {
        // rgb, rgba, hex value

        let cssGenerate = {};
        cssGenerate['rgba'] = `rgba(${formValues['red']},${formValues['green']},${formValues['blue']},${formValues['opacity']})`;
        cssGenerate['rgb'] = `rgb(${formValues['red']},${formValues['green']},${formValues['blue']})`;
        cssGenerate['hexcode'] = HexCode(cssGenerate['rgb'])

        setCssGeneerate(cssGenerate);

        const copyText1 = `background: ${cssGenerate['rgba']}`;
        const copyText2 = `background: ${cssGenerate['rgb']}`;
        const copyText3 = `background: ${cssGenerate['hexcode']}`;

        textArea1.current.value = copyText1;
        textArea2.current.value = copyText2;
        textArea3.current.value = copyText3;

        setCopyValue1(copyText1);
        setCopyValue2(copyText2);
        setCopyValue3(copyText3);

    }, [formValues])

    const inputs = [
        {
            id: 1,
            name: "red",
            type: "range",
            min: 0,
            max: 255,
            step: 1,
            label: "Red",
            required: false,
            editable: 'true',
        },
        {
            id: 2,
            name: "green",
            type: "range",
            min: 0,
            max: 255,
            step: 1,
            label: "Green",
            editable: 'true',
        },
        {
            id: 3,
            name: "blue",
            type: "range",
            min: 0,
            max: 255,
            step: 1,
            label: "Blue",
            editable: 'true',
        },
        {
            id: 4,
            name: "opacity",
            type: "range",
            min: 0,
            max: 1,
            step: 0.01,
            label: "Opacity (Alpha)",
            unit: 'px',
            editable: 'true'
        },
        {
            id: 5,
            name: "hexValue",
            type: "color",
            label: "Hex value",
        },
    ];

    const handleCopy = (e) => {
    };

    const HexCode = (color) => {
        const rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
        const hex = `#${((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1)}`;
        
        return hex;
    }

    const onChange = (e) => {
        const el = e.target || e;
        const name = el.name;

        if ((el.type === 'range' || el.type === 'number') && isNaN(parseFloat(el.value)) && el.value === '') {
            setValues({ ...formValues, [name]: 0 });
            return;
        }

        if (el.type === 'range' || el.type === 'number') {
            let value = parseFloat(el.value);

            const field = inputs.filter(item => item.name === name)[0];

            if (field) {
                let max = field.max
                let min = field.min
                if (value > max) value = max;
                if (value < min) value = min;
            }

            setValues({ ...formValues, [name]: value, hexValue: HexCode(`rgba(${formValues['red']},${formValues['green']},${formValues['blue']},${formValues['opacity']})`) });
        } else {
            var color = el.value;
            var red = parseInt(color.slice(-6, -4), 16);
            var green = parseInt(color.slice(-4, -2), 16);
            var blue = parseInt(color.slice(-2), 16);
            var opacity = 1;
            if (color.length === 9) {
                opacity = parseInt(color.slice(1, 3), 16) / 255;
            }
            console.log(color, red, green, blue, opacity)
            setValues({ ...formValues, [name]: el.value, red: red, green: green, blue: blue, opacity: opacity });
        }
    };
    return (
        <>
            <Head>
                <title>RGBA and Hex Color Converter</title>
                <meta name="description" content="RGBA and Hex Color Converter Hex to RGBA and RGBA to Hex - a product by nguyen van nam 0928351036" />
            </Head>
            <header className={styles.header}>
                <div className={cn([styles["container"], 'container'])}>
                    <h1>A Product of Nguyen Van Nam</h1>
                    <h3>RGBA and Hex Color Converter</h3>
                    <span className={styles["link-back"]} onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className={cn([styles["container"], 'container'])}>
                <div className={styles["item-container"]}>
                    <form>
                        <h1 className="mb-2">RGBA or Hex Options</h1>
                        {inputs.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={formValues[input.name]}
                                onChange={onChange}
                            />
                        ))}
                    </form>
                </div>
                <div className={cn([styles["item-container"], styles.box])}>
                    <div className={styles["item-preview"]} style={{
                        background: cssGeneerate.rgba,
                        width: '100%',
                        minHeight: '150px',
                        maxHeight: '150px'
                    }}>
                        RGBA
                    </div>
                    <div className={styles["item-preview"]} style={{
                        background: cssGeneerate.rgb,
                        width: '100%',
                        minHeight: '150px',
                        maxHeight: '150px'
                    }}>
                        RGB
                    </div>
                    <div className={styles["item-code"]} style={{marginTop: '30px', marginBottom: 0}}>
                        <textarea placeholder="css generator" rows="1" cols="10" ref={textArea1}>
                        </textarea>
                        <div className={styles["item-action"]}>
                            <CopyToClipboard text={copyValue1} onCopy={handleCopy}>
                                <button className="p-2">Copy</button>
                            </CopyToClipboard>
                        </div>
                    </div>

                    <div className={styles["item-code"]} style={{marginTop: '30px', marginBottom: 0}}>
                        <textarea placeholder="css generator" rows="1" cols="10" ref={textArea2}>
                        </textarea>
                        <div className={styles["item-action"]}>
                            <CopyToClipboard text={copyValue2} onCopy={handleCopy}>
                                <button className="p-2">Copy</button>
                            </CopyToClipboard>
                        </div>
                    </div>

                    <div className={styles["item-code"]} style={{marginTop: '30px', marginBottom: 0}}>
                        <textarea placeholder="css generator" rows="1" cols="10" ref={textArea3}>
                        </textarea>
                        <div className={styles["item-action"]}>
                            <CopyToClipboard text={copyValue3} onCopy={handleCopy}>
                                <button className="p-2">Copy</button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={cn([styles["container"], 'container'])}>
                    <p>A RGBA and Hex Color CSS generator that helps you quickly convert and generate RGBA and Hex Color CSS declarations for your website.</p>
                </div>
            </footer>

        </>
    )
}
