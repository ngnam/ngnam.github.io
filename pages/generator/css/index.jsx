import Head from 'next/head'
import Link from 'next/link'

export default function Css() {
    return (
        <>
            <Head>
                <title>CSS Generator tool</title>
                <meta name="description" content="CSS Generator tool" />
            </Head>
            <header className="header">
                <div className="container">
                    <h1 className="title">CSS Generator Tool</h1>
                </div>
            </header>

            <section className="category">
                <div className="container">
                    <div className="item_category">
                        <Link href="/generator/css/box-shadow-css-generator">
                            <a>Box Shadow</a>
                        </Link>
                    </div>
                    <div className="item_category">
                        <Link href="/generator/css/text-shadow-css-generator">
                            <a>Text Shadow</a>
                        </Link>
                    </div>
                    <div className="item_category">
                        <a>Gradient</a>
                    </div>
                    <div className="item_category">
                        <Link href="/generator/css/css-cursor-demonstrator-and-generator">
                            <a>CSS Cursor</a>
                        </Link>
                    </div>
                    <div className="item_category">
                        <a>CSS Border</a>
                    </div>
                    <div className="item_category">
                        <a>CSS Border radius</a>
                    </div>
                    <div className="item_category">
                        <a>Transform</a>
                    </div>
                    <div className="item_category">
                        <a>RGBA & HEX</a>
                    </div>
                    <div className="item_category">
                        <a>Filter</a>
                    </div>
                    <div className="item_category">
                        <a>GRID</a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .header {
                    background-color: #fff;
                    height: 60px;     
                    box-shadow: 1px 3px 1px -3px rgb(0 0 0 / 75%);               
                    -webkit-box-shadow: 1px 3px 1px -3px rgb(0 0 0 / 75%);               
                    -moz-box-shadow: 1px 3px 1px -3px rgb(0 0 0 / 75%);               
                }
                .container {
                    max-width: 100rem;
                    height: 100%;
                    margin: 0 auto;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .category {
                    margin-top: .5rem;
                }
                .item_category {
                    width: calc(100%/5);
                    height: 100px;
                    background: blue;
                    margin: 0.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }
                .item_category > a {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    color: #fff;
                }
            `}</style>
        </>
    )
}
