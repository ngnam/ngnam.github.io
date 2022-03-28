import Head from 'next/head'
// import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from "./navlink";

const name = 'ngnam.github.io'
export const siteTitle = 'A portfolio website for Full-stack Software development'

export default function Layout({ children, home }) {
    
    const profileImage = '/images/girl-g06b208c73_1920.jpg';
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
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
                                src="https://api.daily.dev/devcards/0f93178ba5f1475d86b6618afbd2296e.png?r=s65"
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
                                        src="https://api.daily.dev/devcards/0f93178ba5f1475d86b6618afbd2296e.png?r=s65"
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
                        {/* <li><Link href="/blog/hello" activeClassName={styles.menu_li_active}><a>Hello</a></Link></li> */}
                        <li><Link href="/blog" activeClassName={styles.menu_li_active}><a>Blog</a></Link></li>
                        {/* <li><Link href="/authors/me" activeClassName={styles.menu_li_active}><a>Profile</a></Link></li> */}
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
                        <a href="#">About</a>
                        <a href="#">GitHub</a>
                        <a href="#">CodePen</a>
                        <a href="#">Twitter</a>
                    </div>
                    <p>&copy; {new Date().getFullYear().toString()}</p>
                </footer>
            </div>
        </>
    )
}