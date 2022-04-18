import Head from 'next/head'
import FormInput from '../../../components/form-input/formInput'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'
import { HTML_SYMBOL } from '../../../lib/constants';

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
        const cssGenerate = `rotate(${formValues.rotate}deg) scale(${formValues.scale}) skew(${formValues.skew}deg) translate(${formValues.translateX}px, ${formValues.translateY}px)`;
        setCssGeneerate(cssGenerate);
        
        const copyValue = `transform: ${cssGenerate};\n` + 
        `-webkit-transform: ${cssGenerate};\n` +
        `-moz-transform: ${cssGenerate};` ;

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
            <header>
                <div className="container">
                    <h1>A Product of Nguyen Van Nam</h1>
                    <h3>Transform CSS Generator</h3>
                    <span className="link-back" onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className="container">
                <div className="item-container">
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
                <div className="item-container box">
                    <div className="item-preview" style={{
                        transform: cssGeneerate,
                    }}>
                        Transform css generator
                    </div>
                    <div className="item-code">
                        <textarea placeholder="css generator" rows="5" cols="20" ref={textArea}>
                        </textarea>
                        <div className="item-action">
                            <CopyToClipboard text={copyValue} onCopy={handleCopy}>
                                <button className="p-2">Copy</button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>A Transform CSS generator that helps you quickly generate transform CSS declarations for your website, including Rotate, Scale, Skew and Translate transformations. It comes with many options and it demonstrates instantly. </p>
                </div>
            </footer>

            <style jsx>{`
                .container {
                    max-width: 100rem;
                    min-height: 60vh;
                    margin: 1rem auto;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
                .item-container {
                    margin: .5rem;
                    padding: 1rem;
                    flex: 1;
                    border: .5px dotted #ccc;
                    background: #fff;
                }                

                .box {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                }

                .box .item-preview {
                    z-index: 99;
                }

                .box .item-preview {
                    flex: 1;
                    background: rgb(21, 140, 186);
                    width: 210px;
                    height: 210px;
                    min-height: 210px;
                    margin-top: 100px;
                    padding: 1em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    text-align: center;
                }

                .box .item-code {
                    flex: 1;
                    background: #ccc;
                    color: #333;
                    padding: .5rem;
                    font-size: 1em;
                    font-family: monospace;
                    height: 200px;
                    width: 100%;
                    margin: 50px 0;      
                    position: relative;            
                }

                .item-code .item-action {
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    justify-content: center;
                    align-items: center;
                    transition: all .3s ease-in-out;
                    display: none;
                }

                .item-code:hover .item-action {
                    display: flex;
                }

                .item-code textarea {
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    font-size: 1em;
                    font-family: monospace;
                    resize: none;
                }

                header > .container,
                footer > .container {
                    height: auto;
                    min-height: auto;
                    align-items: center;
                    margin-bottom: 0;
                    padding: 0 1rem;
                }

                header > .container h1, header > .container .link-back {
                    font-size: 1rem;
                    min-width: 20%;
                }

                .link-back {
                    cursor: pointer;
                    text-align: right;
                }
                
                @media (max-width: 763px) {
                    .container {
                        flex-direction: column;
                    }
                    .box .item-preview {
                        min-height: 150px!important;
                        height: 200px;
                        margin-top: 25px!important;
                    }
                }

            `}</style>
        </>
    )
}
