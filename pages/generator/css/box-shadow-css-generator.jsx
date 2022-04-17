import Head from 'next/head'
import FormInput from '../../../components/form-input/formInput'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'

export default function BoxShadowCssGenerator() {
    const router = useRouter()
    const textArea = useRef(null);

    const [formValues, setValues] = useState({
        hsl: 10,
        vsl: 10,
        blurradius: 5,
        spreadradius: 0,
        sdc: '#000000',
        sdcrgbaCol: '',
        sdo: 0.75,
        inset: false,
    });

    const [cssGeneerate, setCssGeneerate] = useState('10px 10px 5px 3px rgba(0,0,0,0.75)');
    const [copyValue, setCopyValue] = useState(null);

    useEffect(() => {
        setCssGeneerate(`${formValues['hsl']}px ${formValues['vsl']}px ${formValues['blurradius']}px ${formValues['spreadradius']}px ${formValues['sdcrgbaCol'] || 'rgba(0,0,0,0.7)'}${formValues['inset'] ? ' inset' : ''}`);
        const test = `box-shadow: ${cssGeneerate}; \n-webkit-box-shadow: ${cssGeneerate};\n-moz-box-shadow: ${cssGeneerate};\n-o-box-shadow: ${cssGeneerate};`
        textArea.current.value = test;
        setCopyValue(test);
    }, [formValues, cssGeneerate])

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
            max: 400,
            step: 1,
            label: "Blur Radius",
            unit: 'px'
        },
        {
            id: 4,
            name: "spreadradius",
            type: "range",
            min: -200,
            max: 200,
            step: 1,
            label: "Spread Radius",
            unit: 'px'
        },
        {
            id: 5,
            name: "sdc",
            type: "color",
            placeholder: "Shadow Color",
            label: "Shadow Color",
        },
        {
            id: 6,
            name: "sdcrgbaCol",
            type: "colorPreview",
        },
        {
            id: 7,
            name: "sdo",
            type: "range",
            min: 0,
            max: 1,
            step: 0.01,
            label: "Shadow Color Opacity",
        },
        {
            id: 8,
            name: "inset",
            type: "checkbox",
            label: "Inset"
        }
        
    ];

    const handleCopy = (e) => {
    };

    const onChange = (e) => {
        if (e.target.type === "checkbox") {
            console.log(e.target.checked)
            setValues({ ...formValues, [e.target.name]: !formValues[e.target.name] });
        } 
        else if (e.target.type === "color") {
            var opacity = formValues['sdo'];
            var color = e.target.value;
            var rgbaCol = 'rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + opacity + ')';
            // console.log(rgbaCol)
            setValues({ ...formValues, [e.target.name]: color, sdcrgbaCol: rgbaCol });
        } else if (e.target.name === 'sdo') {
            var color = formValues['sdc'];
            var opacity = e.target.value;
            var rgbaCol = 'rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + opacity + ')';
            // console.log(rgbaCol)
            setValues({ ...formValues, [e.target.name]: opacity, sdcrgbaCol: rgbaCol });
        }
        else {
            setValues({ ...formValues, [e.target.name]: e.target.value });
        }
    };
    return (
        <>
            <Head>
                <title>Box Shadow</title>
                <meta name="description" content="Box Shadow CSS Generator tool - a product by nguyen van nam 0928351036" />
            </Head>
            <header>
                <div className="container">
                    <h1>A Product of Nguyen Van Nam</h1>
                    <h3>Box Shadow</h3>
                    <span className="link-back" onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className="container">
                <div className="item-container">
                    <form>
                        <h1>Box Shadow Options</h1>
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
                        boxShadow: cssGeneerate,
                    }}>
                        css generator
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
                    color: #fff;
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
