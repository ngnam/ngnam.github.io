import Head from 'next/head'
import FormInput from '../../../components/form-input/formInput'
import FormGroupInput from '../../../components/form-input/formGroupInput'
import { useRef, useState, useMemo } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'

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
        setCssGeneerate({
            borderAll: `${formValues.borderwidth}px ${formValues.borderstyle} ${formValues.bordercolor}`,
            borderRadius: `${formValues.borderradiustopleft}px ${formValues.borderradiustopright}px ${formValues.borderradiusbottomright}px ${formValues.borderradiusbottomleft}px`,
        });

        const copyText = `border: ${cssGeneerate.borderAll};\n` +
        `border-radius: ${cssGeneerate.borderRadius};\n` +
        `-webkit-border-radius: ${cssGeneerate.borderRadius};\n` +
        `-moz-border-radius: ${cssGeneerate.borderRadius};\n`

        let test = copyText;

        if (formValues['genbackground']) {
            setCssBackgroundColor(formValues['background']);
            test += `background: ${formValues['background']};`
        } else {
            test = copyText;
            setCssBackgroundColor(defautbg);
        }

        textArea.current.value = test;
        setCopyValue(test);

    }, [formValues, 
        cssGeneerate.borderAll, 
        cssGeneerate.borderRadius, 
        cssBackgroundColor
    ]);

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
            <header>
                <div className="container">
                    <h1>A Product of Nguyen Van Nam</h1>
                    <h3>Border Radius CSS Generator</h3>
                    <span className="link-back" onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className="container">
                <div className="item-container">
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
                
                <div className="item-container box">
                    <div className="item-preview" style={{
                        border: `${formValues.borderwidth}px ${formValues.borderstyle} ${formValues.bordercolor}`,
                        borderRadius: `${cssGeneerate.borderRadius}`,
                        backgroundColor: cssBackgroundColor
                    }}>
                        Border Radius generator
                    </div>
                    
                    <div className="item-code">
                        <textarea placeholder="css generator" rows="5" cols="20" ref={textArea}>
                        </textarea>
                        <div className="item-action">
                            <CopyToClipboard text={copyValue} onCopy={handleCopy}>
                                <button>Copy</button>
                            </CopyToClipboard>
                        </div>
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
                    width: 250px;
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
                    min-width: 20%;
                }

                .link-back {
                    cursor: pointer;
                    text-align: right;
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
                    }
                }
               
            `}</style>
        </>
    )
}
