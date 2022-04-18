import Head from 'next/head'
import FormInput from '../../../components/form-input/formInput'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'
import styles from './css.module.css';
import cn from 'classnames'

export default function TextShadowCssGenerator() {
    const router = useRouter()
    const textArea = useRef(null);

    const [formValues, setValues] = useState({
        hsl: 4,
        vsl: 4,
        blurradius: 2,
        sdc: '#000000',
        sdcrgbaCol: 'rgba(0,0,0,0.64)',
        sdo: 0.6
    });

    const [cssGeneerate, setCssGeneerate] = useState('4px 4px 2px rgba(0,0,0,0.64)');
    const [copyValue, setCopyValue] = useState(null);

    useEffect(() => {
        const cssGenerate = `${formValues['hsl']}px ${formValues['vsl']}px ${formValues['blurradius']}px ${formValues['sdcrgbaCol'] || 'rgba(0,0,0,0.64)'}`;
        setCssGeneerate(cssGenerate);

        const copyText = `text-shadow: ${cssGenerate}`;
        textArea.current.value = copyText;
        setCopyValue(copyText);
    }, [formValues])

    const inputs = [
        {
            id: 1,
            name: "hsl",
            type: "range",
            min: -200,
            max: 200,
            step: 1,
            label: "Horizontal Shadow Length",
            unit: 'px'
        },
        {
            id: 2,
            name: "vsl",
            type: "range",
            min: -200,
            max: 200,
            step: 1,
            label: "Vertical Shadow Length",
            unit: 'px'
        },
        {
            id: 3,
            name: "blurradius",
            type: "range",
            min: 0,
            max: 50,
            step: 1,
            label: "Blur Radius",
            unit: 'px'
        },
        {
            id: 4,
            name: "sdc",
            type: "color",
            placeholder: "Shadow Color",
            label: "Shadow Color",
        },
        {
            id: 5,
            name: "sdcrgbaCol",
            type: "Shadow Color RGBA",
        },
        {
            id: 6,
            name: "sdo",
            type: "range",
            min: 0.01,
            max: 0.99,
            step: 0.01,
            label: "Shadow Color Opacity",
        },
        
    ];

    const handleCopy = (e) => {
    };

    const onChange = (e) => {
        if (e.target.type === "color") {
            var opacity = formValues['sdo'];
            var color = e.target.value;
            var rgbaCol = 'rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + opacity + ')';
            setValues({ ...formValues, [e.target.name]: color, sdcrgbaCol: rgbaCol });
        } else if (e.target.name === 'sdo') {
            var color = formValues['sdc'];
            var opacity = e.target.value;
            var rgbaCol = 'rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + opacity + ')';
            setValues({ ...formValues, [e.target.name]: opacity, sdcrgbaCol: rgbaCol });
        }
        else {
            setValues({ ...formValues, [e.target.name]: e.target.value });
        }
    };
    return (
        <>
            <Head>
                <title>Text Shadow</title>
                <meta name="description" content="Text Shadow CSS Generator tool - a product by nguyen van nam 0928351036" />
            </Head>
            <header className={styles.header}>
                <div className={cn([styles["container"], 'container'])}>
                    <h1>A Product of Nguyen Van Nam</h1>
                    <h3>Text Shadow CSS Generator</h3>
                    <span className={styles["link-back"]} onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className={cn([styles["container"], 'container'])}>
                <div className={styles["item-container"]}>
                    <form>
                        <h1>Text Shadow Options</h1>
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
                       textShadow: cssGeneerate
                    }}>
                        This text is the preview text.
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
