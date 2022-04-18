import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react';

export default function Css() {
    const router = useRouter()
    const itemCategories = React.useMemo(() => {
        return [
            { id: 1, title: 'Box Shadow', url: '/generator/css/box-shadow-css-generator' },
            { id: 2, title: 'Text Shadow', url: '/generator/css/text-shadow-css-generator' },
            { id: 3, title: 'CSS Cursor', url: '/generator/css/css-cursor-demonstrator-and-generator' },
            { id: 4, title: 'Border CSS Generator', url: '/generator/css/border-css-generator' },
            { id: 5, title: 'Border Radius', url: '/generator/css/border-radius-css-generator' },
            { id: 6, title: 'Gradient', url: '/generator/css/gradient-css-generator' },
            { id: 7, title: 'Transform', url: '/generator/css/transform-css-generator' },
            { id: 8, title: 'RGBA & HEX', url: '/generator/css/rgba-and-hex-color-generator' },
            { id: 9, title: 'Filter', url: '/generator/css/filter-css-generator' },
            { id: 10, title: 'Multiple column', url: '/generator/css/multiple-column-generator' }
        ]
    })
    return (
        <>
            <Head>
                <title>CSS Generator tool</title>
                <meta name="description" content="CSS Generator tool" />
            </Head>
            <header className="header bg-white">
                <div className="md:container md:mx-auto w-full md:w-1/2 p-2">
                    <div className="flex justify-between items-center">
                        <h1 className="md:text-2xl font-medium">CSS Generator Tool</h1>
                        <span className="link-back" onClick={() => router.back()}>
                            <a><span>&#8592;</span> Back</a>
                        </span>
                    </div>
                </div>
            </header>

            <section className="category md:mt-2">
                <div className="md:container md:mx-auto w-full md:w-1/2 p-2">
                    <div className="flex flex-wrap justify-between items-center" style={{gap: '.5em'}}>
                        {
                            itemCategories && itemCategories.map((category) => (
                                <div className="item_category" key={category.id}>
                                    <Link href={category.url}>
                                        <a>
                                            {category.title}
                                            {category.url.indexOf('#') > -1 ? <small style={{ backgroundColor: 'yellow', color: '#333' }}>I'm working</small> : ''}
                                        </a>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <style jsx>{`
                .item_category {
                    flex: 1 0 auto;
                    width: calc(100%/4 - 1.5em);
                    height: 100px;
                    background: #01B0F1;
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
                .link-back {
                    margin-left: 20vw;
                    cursor: pointer;
                }
                @media (max-width: 763px) {
                    .item_category {
                        width: calc(100%/3);
                    }
                }
            `}</style>
        </>
    )
}
