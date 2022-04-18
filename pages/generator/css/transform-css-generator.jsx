import Head from 'next/head'
import FormInput from '../../../components/form-input/formInput'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'
import { HTML_SYMBOL } from '../../../lib/constants';
import styles from './css.module.css';
import cn from 'classnames'

export default function TransformCssGenerator() {
    const router = useRouter()
    const textArea = useRef(null);

    const [formValues, setValues] = useState({
        rotate: 0,
        scale: 1,
        skew: 0,
        translateX: 0,
        translateY: 0
    });

    const [cssGeneerate, setCssGeneerate] = useState(null);
    const [copyValue, setCopyValue] = useState(null);

    useEffect(() => {
        // rotate(24deg) scale(0.8) skew(-173deg) translate(-149px,-84px);
        let cssGenerate = 
            `${parseInt(formValues.rotate) === 0 ? '' : `rotate(${formValues.rotate}deg) `}` + 
            `${parseFloat(formValues.scale) === 1 ? '' : `scale(${formValues.scale}) `}` + 
            `${parseInt(formValues.skew) === 0 ? '' : `skew(${formValues.skew}deg) `}` + 
            `${parseInt(formValues.translateX) === 0 && parseInt(formValues.translateY) === 0 ? '' : `translate(${formValues.translateX}px, ${formValues.translateY}px)`}`;

        const checkDefault = cssGenerate !== null && cssGenerate !== '';
        if (checkDefault) {
            cssGenerate = cssGenerate.trimEnd();
        }

        setCssGeneerate(cssGenerate);
        
        const copyValue = 
        `${checkDefault ? `transform: ${cssGenerate};\n` : ''}` + 
        `${checkDefault ? `-webkit-transform: ${cssGenerate};\n` : ''}` + 
        `${checkDefault ? `-moz-transform: ${cssGenerate};\n` : ''}`;

        textArea.current.value = copyValue;
        setCopyValue(copyValue);
    }, [formValues])

    const inputs = [
        {
            id: 1,
            name: "rotate",
            type: "range",
            min: 0,
            max: 360,
            step: 1,
            label: "Rotate",
            unit: HTML_SYMBOL.degreeSign
        },
        {
            id: 2,
            name: "scale",
            type: "range",
            min: 0.1,
            max: 2,
            step: 0.1,
            label: "Scale",
        },
        {
            id: 3,
            name: "skew",
            type: "range",
            min: -180,
            max: 180,
            step: 1,
            label: "Skew",
            unit: HTML_SYMBOL.degreeSign
        },
        {
            id: 4,
            name: "translateX",
            type: "range",
            min: -200,
            max: 200,
            step: 1,
            label: "Translate X",
            unit: 'px'
        },
        {
            id: 5,
            name: "translateY",
            type: "range",
            min: -200,
            max: 200,
            step: 1,
            label: "Translate Y",
            unit: 'px'
        },
    ];

    const handleCopy = (e) => {
    };

    const onChange = (e) => {
        setValues({ ...formValues, [e.target.name]: e.target.value });
    };
    return (
        <>
            <Head>
                <title>Transform CSS Generator</title>
                <meta name="description" content="Box Shadow CSS Generator tool - a product by nguyen van nam 0928351036" />
            </Head>
            <header className={styles.header}>
                <div className={cn([styles["container"], 'container'])}>
                    <h1>A Product of Nguyen Van Nam</h1>
                    <h3>Transform CSS Generator</h3>
                    <span className={styles["link-back"]} onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className={cn([styles["container"], 'container'])}>
                <div className={styles["item-container"]}>
                    <form>
                        <h1 className="mb-2">Transform Options</h1>
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
                        transform: cssGeneerate,
                        width: '300px',
                        minHeight: '300px',
                        maxHeight: '300px'
                    }}>
                        Transform css generator
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

            <footer className={styles.footer}>
                <div className={cn([styles["container"], 'container'])}>
                    <p>A Transform CSS generator that helps you quickly generate transform CSS declarations for your website, including Rotate, Scale, Skew and Translate transformations. It comes with many options and it demonstrates instantly. </p>
                </div>
            </footer>

        </>
    )
}
