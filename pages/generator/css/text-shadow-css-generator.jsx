import Head from 'next/head'
import FormInput from '../../../components/form-input/formInput'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'

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
        setCssGeneerate(`${formValues['hsl']}px ${formValues['vsl']}px ${formValues['blurradius']}px ${formValues['sdcrgbaCol'] || 'rgba(0,0,0,0.64)'}`);
        const test = `text-shadow: ${formValues['hsl']}px ${formValues['vsl']}px ${formValues['blurradius']}px ${formValues['sdcrgbaCol'] || 'rgba(0,0,0,0.64)'};`;
        textArea.current.value = test;
        setCopyValue(test);
    }, [cssGeneerate, formValues])

    const inputs = [
        {
            id: 1,
            name: "hsl",
            type: "range",
            min: -200,
            max: 200,
            step: 1,
            label: "Horizontal Shadow Length",
            required: false,
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
            <header>
                <div className="container">
                    <h1>A Product of Nguyen Van Nam</h1>
                    <h3>Text Shadow CSS Generator</h3>
                    <span className="link-back" onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className="container">
                <div className="item-container">
                    <form>
                        <h1>Text Shadow Options</h1>
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
                       textShadow: cssGeneerate
                    }}>
                        This text is the preview text.
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
                    font-family: Helvetica, Arial, sans-serif;
                    font-size: 2em;
                    font-weight: 600;
                    text-align: center;
                    color: red;
                    background: #ffffff;
                    border: 3px solid #ccc;
                    border-radius: 10px;
                    box-shadow: 2px 2px 2px #ccc;
                    width: 100%;
                    max-height: 100px;
                    line-height: 100px;
                    margin: 50px auto;
                    overflow: visible;
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

                footer {
                    max-width: 100rem;
                    margin: 1rem;
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
