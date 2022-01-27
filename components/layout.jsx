import Head from 'next/head'
// import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from "./navlink";

const name = 'My Portfolio'
export const siteTitle = 'A personal website for nguyen van nam using Next.js'

export default function Layout({ children, home }) {
    const profileImage = '/images/11207864.jfif';
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale" />
                <meta
                    name="description"
                    content="a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={profileImage}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />

                <title>{siteTitle}</title>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            priority="true"
                            src={profileImage}
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img
                                    priority="true"
                                    src={profileImage}
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
                <ul className={styles.menu}>
                    <li><Link href="/blog/hello" activeClassName={styles.menu_li_active}><a>Hello</a></Link></li>
                    <li><Link href="/blog" activeClassName={styles.menu_li_active}><a>Blog</a></Link></li>
                    <li><Link href="/authors/me" activeClassName={styles.menu_li_active}><a>Profile</a></Link></li>
                </ul>
            </header>
            <main className={styles.main}>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear().toString()}</p>
            </footer>
        </div>
    )
}