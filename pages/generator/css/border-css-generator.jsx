import Head from 'next/head'
import FormInput from '../../../components/form-input/formInput'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'

export default function BorderCssGenerator() {
    const router = useRouter()
    const textArea = useRef(null);

    const [formValues, setValues] = useState({
        borderwidth: 18,
        targetinvidualborder: false,
        borderstyle: 'outset',
        bordercolor: '#ff6550',
        background: '#ffffff',
        genbackground: false
    });

    const defautbg = 'rgb(21 140 186)';

    const [cssGeneerate, setCssGeneerate] = useState('18px solid #ff6550');
    const [cssBackgroundColor, setCssBackgroundColor] = useState(defautbg);
    const [copyValue, setCopyValue] = useState(null);

    useEffect(() => {        
        setCssGeneerate(`${formValues['borderwidth']}px ${formValues['borderstyle']} ${formValues['bordercolor']}`);
        let test = `border: ${cssGeneerate};`
        if (formValues['genbackground']) {
            setCssBackgroundColor(formValues['background']);
            test += `\nbackground: ${formValues['background']};`
        } else {
            test = `border: ${cssGeneerate};`
            setCssBackgroundColor(defautbg);
        }
        textArea.current.value = test;
        setCopyValue(test);
    }, [cssGeneerate, formValues])

    const inputs = [
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
            options: [
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
        },
        {
            id: 4,
            name: "bordercolor",
            type: "color",
            label: "Border Color",
        },
        {
            id: 5,
            name: "background",
            type: "color",
            label: "Background Color",
        },
        {
            id: 6,
            name: "genbackground",
            type: "checkbox",
            label: "Include background color in generating code:",
        },
    ];

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
            setValues({ ...formValues, [e.target.name]: !formValues[e.target.name] });
        }
        else if (e.target.type === "select") {
            console.log(e.target.value)
        }
        else {
            setValues({ ...formValues, [e.target.name]: e.target.value });
        }
    };
    return (
        <>
            <Head>
                <title>Border CSS Generator</title>
                <meta name="description" content="Border CSS Generator CSS Generator tool - a product by nguyen van nam 0928351036" />
            </Head>
            <header>
                <div className="container">
                    <h1>A Product of Nguyen Van Nam</h1>
                    <span className="link-back" onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className="container">
                <div className="item-container">
                    <form>
                        <h1>Border CSS Generator</h1>
                        {inputs.map((input) => (
                            input.type === 'checkbox' ?
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    checked={formValues[input.name]}
                                    onChange={onChange}
                                />
                                :
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
                        border: cssGeneerate,
                        backgroundColor: cssBackgroundColor
                    }}>
                        Border CSS generator
                    </div>
                    <div className="item-code">
                        <textarea placeholder="css generator" rows="5" cols="20" ref={textArea}>
                        </textarea>
                    </div>
                    <div className="item-action">
                        <CopyToClipboard text={copyValue} onCopy={handleCopy}>
                            <button>Copy</button>
                        </CopyToClipboard>
                    </div>
                </div>
            </section>

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
                    flex: 1;
                    background: rgb(21, 140, 186);
                    width: 500px;
                    height: 250px;
                    max-height: 250px;
                    margin-top: 50px;
                    padding: 1em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #333;
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
                }

                .item-code textarea {
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    font-size: 1em;
                    font-family: monospace;
                    resize: none;
                }

                footer {
                    max-width: 100rem;
                    margin: 1rem;
                }

                header > .container {
                    height: auto;
                    min-height: auto;
                    align-items: center;
                    margin-bottom: 0;
                    padding: 0 1rem;
                }

                header > .container h1, header > .container .link-back {
                    font-size: 1rem;
                }

                .link-back {
                    cursor: pointer;
                }

                @media (max-width: 600px) {
                    .container {
                        flex-direction: column;
                    }
                    .box .item-preview {
                        width: 50vh!important;
                        height: 150px!important;
                        max-height: 150px!important;
                        margin-top: 25px!important;
                    }
                }

                @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
                    .container {
                        flex-direction: column;
                    }
                    .box .item-preview {
                        width: 50vh!important;
                        height: 150px!important;
                        max-height: 150px!important;
                        margin-top: 25px!important;
                    }import { Link } from 'next/link';

                }
               
            `}</style>
        </>
    )
}
