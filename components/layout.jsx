import Head from 'next/head'
// import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from "./navlink";
import { LOGO_CMS, HOME_OG_IMAGE_URL, CMS_NAME } from '../lib/constants'

const siteTitle = CMS_NAME
const profileImage = HOME_OG_IMAGE_URL;

export default function Layout({ children, home }) {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <meta name="viewport" content="width=device-width" />
                    <link rel="apple-touch-icon" sizes="512x512" href="/android-chrome-512x512.png" />
                    <link rel="apple-touch-icon" sizes="192x192" href="/android-chrome-192x192.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                    <meta name="viewport" content="width=device-width, initial-scale" />
                    <meta
                        name="description"
                        content={siteTitle}
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
                                src={LOGO_CMS}
                                className={styles.profileImage + ' ' + utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt="NamNguyen's Dev Card"
                            />
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <img
                                        priority="true"
                                        src={LOGO_CMS}
                                        className={styles.profileImage + ' ' + utilStyles.borderCircle}
                                        height={144}
                                        width={144}
                                        alt="NamNguyen's Dev Card"
                                    />
                                </a>
                            </Link>
                        </>
                    )}
                    <ul className={styles.menu}>
                        <li><Link href="/blog" activeClassName={styles.menu_li_active}><a>Blog</a></Link></li>
                        <li><Link href="/generator/css" activeClassName={styles.menu_li_active}><a>CSS generator Tools</a></Link></li>
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
                    <h3>Made with ❤️ Nam Nguyen Van</h3>
                    <div className={styles.footer_about}>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                        <a href="https://github.com/ngnam" target="_blank">GitHub</a>
                        <a href="https://codepen.io/ngnam" target="_blank">CodePen</a>
                        <a href="#">Twitter</a>
                    </div>
                    <p>&copy; {new Date().getFullYear().toString()}</p>
                </footer>
            </div>
        </>
    )
}