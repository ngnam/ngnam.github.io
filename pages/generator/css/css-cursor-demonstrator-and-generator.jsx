import Head from 'next/head'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'

export default function CssCursorCssGenerator() {
    const router = useRouter()
    const textArea = useRef(null);

    const [cursorOption, setCursorOption] = useState('alias');
    const [cssGeneerate, setCssGeneerate] = useState('alias');
    const [copyValue, setCopyValue] = useState(null);

    useEffect(() => {
        setCssGeneerate(`${cursorOption}`);
        const test = `cursor: ${cursorOption};`;
        textArea.current.value = test;
        setCopyValue(test);
    }, [cssGeneerate, cursorOption])

    const inputs = [
        "alias", "all-scroll", "auto", "cell", "context-menu", "col-resize", "copy", "crosshair", "default",
        "e-resize", "ew-resize", "grab", "grabbing", "help", "move", "n-resize", "ne-resize", "nesw-resize",
        "ns-resize", "nw-resize", "nwse-resize",
        "no-drop", "none", "not-allowed",
        "pointer",
        "progress",
        "row-resize",
        "s-resize",
        "se-resize",
        "sw-resize",
        "text",
        "vertical-text",
        "w-resize",
        "wait",
        "zoom-in",
        "zoom-out",
        "initial",
    ];

    const handleCopy = (e) => {
    };

    const onChange = (e) => {
        setCursorOption(e.target.innerText);
    };
    return (
        <>
            <Head>
                <title>CSS Cursor Demonstrator and Generator</title>
                <meta name="description" content="CSS Cursor Demonstrator and Generator< - a product by nguyen van nam 0928351036" />
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
                    <h1>Cursor Options <small className="text-helper">(clicking or Hovering every option)</small></h1>
                    <div className="list-options">
                        {inputs.map((input) => {
                            return (
                                <div className="item-option" key={input} style={{cursor: input}} onMouseOver={onChange}>
                                    { input }
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="item-container box">
                    <div className="item-preview" style={{
                       cursor: cssGeneerate
                    }}>
                        {copyValue}
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
                    font-size: 1.5em;
                    font-weight: 600;
                    text-align: center;
                    color: red;
                    background: #ffffff;
                    border: 3px solid #ccc;
                    border-radius: 10px;
                    box-shadow: 2px 2px 2px #ccc;
                    max-height: 100px;
                    line-height: 100px;
                    margin: 50px auto;
                    overflow: visible;
                    padding: 0.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
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
                }

                .link-back {
                    cursor: pointer;
                }

                footer {
                    max-width: 100rem;
                    margin: 1rem;
                }

                .list-options {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    max-height: 450px;
                    overflow: auto;
                }

                .item-option {
                    flex: 1;
                    margin: .5rem;
                    padding: .5rem;
                    border: .5px dotted #ccc;
                    background: #fff;
                    text-align: center;
                    font-size: 1em;
                    font-family: monospace;
                    font-weight: 600;
                    transition: all .5s;
                    transition: all .5s;
                    height: 50px;
                    min-width: 12rem;
                    max-width: 12rem;
                }

                .item-option:hover {
                    background: #94e6ff;
                    color: red;
                    border: 1px solid #11a683;
                }

                .text-helper {
                    color: gray;
                    font-size: 0.8em;
                }

                @media (max-width: 600px) {
                    .container {
                        flex-direction: column;
                    }
                    .box .item-preview {
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
                        height: 150px!important;
                        max-height: 150px!important;
                        margin-top: 25px!important;
                    }
                }
               
            `}</style>
        </>
    )
}
