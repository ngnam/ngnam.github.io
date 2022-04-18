import Head from 'next/head'
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { useRouter } from 'next/router'
import styles from './css.module.css';
import cn from 'classnames'

export default function CssCursorCssGenerator() {
    const router = useRouter()
    const textArea = useRef(null);

    const [cursorOption, setCursorOption] = useState('alias');
    const [cssGeneerate, setCssGeneerate] = useState(null);
    const [copyValue, setCopyValue] = useState(null);

    useEffect(() => {
        const cssGenerate = `${cursorOption}`;
        setCssGeneerate(cssGenerate);

        const copyText = `cursor: ${cssGenerate};`;
        textArea.current.value = copyText;
        setCopyValue(copyText);
    }, [cursorOption])

    const inputs = [
        "alias", "all-scroll", "auto", "cell", "context-menu", "col-resize", "copy", "crosshair", "default",
        "e-resize", "ew-resize", "grab", "grabbing", "help", "move", "n-resize", "ne-resize", "nesw-resize",
        "ns-resize", "nw-resize", "nwse-resize","no-drop", "none", "not-allowed","pointer","progress",
        "row-resize","s-resize","se-resize","sw-resize","text","vertical-text","w-resize","wait","zoom-in",
        "zoom-out","initial",
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
            <header className={styles.header}>
                <div className={cn([styles["container"], 'container'])}>
                    <h1>A Product of Nguyen Van Nam</h1>
                    <h3>CSS Cursor Demonstrator and Generator</h3>
                    <span className={styles["link-back"]} onClick={() => router.back()}>
                        <a><span>&#8592;</span> Back</a>
                    </span>
                </div>
            </header>
            <section className={cn([styles["container"], 'container'])}>
                <div className={styles["item-container"]}>
                    <h1>Cursor Options <small className={styles["text-helper"]}>(clicking or Hovering every option)</small></h1>
                    <div className={styles["list-options"]}>
                        {inputs.map((input) => {
                            return (
                                <div className={styles["item-option"]} key={input} style={{cursor: input}} onMouseOver={onChange}>
                                    { input }
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cn([styles["item-container"], styles.box])}>
                    <div className={styles["item-preview"]} style={{
                       cursor: cssGeneerate
                    }}>
                        {copyValue}
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
