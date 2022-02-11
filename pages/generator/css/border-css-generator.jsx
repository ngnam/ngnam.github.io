import Head from 'next/head'
import FormInput from '../../../components/form-input/formInput'
import { useRef, useState, useMemo } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'

export default function BorderCssGenerator() {
    const router = useRouter()
    const textArea = useRef(null);

    const [formValues, setValues] = useState({
        targetinvidualborder: false,
        borderwidth: 10,
        borderstyle: 'solid',
        bordercolor: '#ff6550',
        bordertop: {
            width: 10,
            style: 'solid',
            color: '#ff6550',
        },
        borderright: {
            width: 0,
            style: 'solid',
            color: '#ff6550',
        },
        borderbottom: {
            width: 10,
            style: 'solid',
            color: '#ff6550',
        },
        borderleft: {
            width: 0,
            style: 'solid',
            color: '#ff6550',
        },
        background: '#ffffff',
        genbackground: false
    });

    const defautbg = 'rgb(21 140 186)';

    const [cssGeneerate, setCssGeneerate] = useState('18px solid #ff6550');
    const [cssBackgroundColor, setCssBackgroundColor] = useState(defautbg);
    const [copyValue, setCopyValue] = useState(null);

    useEffect(() => {
        if (!formValues.targetinvidualborder) {
            setCssGeneerate(`${formValues['borderwidth']}px ${formValues['borderstyle']} ${formValues['bordercolor']}`);
        } else {
            setCssGeneerate(`none`);
        }
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
            options: optionStyles
        },
        {
            id: 4,
            name: "bordercolor",
            type: "color",
            label: "Border Color",
        },
        {
            id: 5,
            name: "bordertop",
            type: "custom",
            col: 3,
            label: "Border Top",
            hidden: true,
            fields: {
                width: {
                    type: "range",
                    min: 0,
                    max: 200,
                    step: 1,
                    unit: 'px',
                },
                style: {
                    type: "select",
                    options: optionStyles
                },
                color: {
                    type: "color",
                }
            }
        },
        {
            id: 6,
            name: "borderright",
            label: "Border Right",
            required: false,
            hidden: true,
            type: "custom",
            col: 3,
            fields: {
                width: {
                    type: "range",
                    min: 0,
                    max: 200,
                    step: 1,
                    unit: 'px',
                },
                style: {
                    type: "select",
                    options: optionStyles
                },
                color: {
                    type: "color",
                }
            }
        },
        {
            id: 7,
            name: "borderbottom",
            label: "Border Bottom",
            required: false,
            hidden: true,
            type: "custom",
            col: 3,
            fields: {
                width: {
                    type: "range",
                    min: 0,
                    max: 200,
                    step: 1,
                    unit: 'px',
                },
                style: {
                    type: "select",
                    options: optionStyles
                },
                color: {
                    type: "color",
                }
            }
        },
        {
            id: 8,
            name: "borderleft",
            label: "Border Left",
            required: false,
            hidden: true,
            type: "custom",
            col: 3,
            fields: {
                width: {
                    type: "range",
                    min: 0,
                    max: 200,
                    step: 1,
                    unit: 'px',
                },
                style: {
                    type: "select",
                    options: optionStyles
                },
                color: {
                    type: "color",
                }
            }
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
                    const borderwidth = state.filter(x => x.id === 1);
                    borderwidth[0].hidden = e.target.checked;
                    const borderstyle = state.filter(x => x.id === 3);
                    borderstyle[0].hidden = e.target.checked;
                    const bordercolor = state.filter(x => x.id === 4);
                    bordercolor[0].hidden = e.target.checked;
                    const bordertop = state.filter(x => x.id === 5);
                    bordertop[0].hidden = !e.target.checked;
                    const borderright = state.filter(x => x.id === 6);
                    borderright[0].hidden = !e.target.checked;
                    const borderbottom = state.filter(x => x.id === 7);
                    borderbottom[0].hidden = !e.target.checked;
                    const borderleft = state.filter(x => x.id === 8);
                    borderleft[0].hidden = !e.target.checked;

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
            <header>
                <div className="container">
                    <h1>A Product of Nguyen Van Nam</h1>
                    <h3>Border CSS Generator</h3>
                    <span className="link-back" onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className="container">
                <div className="item-container">
                    <form>
                        <h1>Border Options</h1>
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
                    }import { Link } from 'next/link';

                }
               
            `}</style>
        </>
    )
}
