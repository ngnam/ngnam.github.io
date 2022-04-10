import Head from 'next/head'
import Link from "next/link";
import { LOGO_CMS, HOME_OG_IMAGE_URL } from '../lib/constants'
import styles from './index.module.css'

const profileImage = HOME_OG_IMAGE_URL;
const siteTitle = 'Nguyen Van Nam - Web Developer - Resource';

export default function Resource() {

    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                <link rel="apple-touch-icon" sizes="512x512" href="/android-chrome-512x512.png" />
                <link rel="apple-touch-icon" sizes="192x192" href="/android-chrome-192x192.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="Nguyen Van Nam - Web Developer - Hà Nội - Việt Nam"
                />
                <meta
                    property="og:image"
                    content={profileImage}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <div className={styles.topbar}>
                    </div>
                    <div className="md:container md:mx-auto w-full md:w-1/2 p-2">
                        <div className="flex flex-wrap justify-center items-center">
                            <Link href="/">
                                <a className="flex flex-wrap justify-center items-center font-bold md:mr-auto w-full md:w-1/2">
                                    <img
                                        priority="true"
                                        src={LOGO_CMS}
                                        className={styles.logoImage}
                                        height={100}
                                        width={100}
                                        alt="NamNguyen's Dev Card"
                                    />
                                    <h3 className="ml-2 text-4xl">Nam Nguyen</h3>
                                </a>
                            </Link>
                        </div>
                    </div>
                </header>

                <div className={styles.resources}>
                    <div className="md:container md:mx-auto w-full md:w-1/2 p-2 py-8 text-xl select-none" id="resources">

                        <div className="flex flex-col w-full justify-between text-xl text-justify leading-8">
                            <h1 className="text-2xl font-medium pb-4">Resource
                            </h1>
                            <p>
                                This website uses content (like the icons etc.) from these projects:
                            </p>
                            <p>
                                <Link href="https://oauth.net/2/"><a className="border-b-2 border-neutral-700">OAuth2</a></Link> - "OAuth 2.0 is the industry-standard protocol for authorization."
                            </p>
                            <p>
                                <Link href="https://openid.net/connect/"><a className="border-b-2 border-neutral-700">OpenID Connect</a></Link> - "OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol. It allows Clients to verify the identity of the End-User based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner."
                            </p>
                            <p>
                                <Link href="https://identityserver4.readthedocs.io/en/latest/"><a className="border-b-2 border-neutral-700">IdentityServer</a></Link> - "IdentityServer4 is an OpenID Connect and OAuth 2.0 framework for ASP.NET Core."
                            </p>
                            <p>
                                <Link href="https://reactjs.org/"><a className="border-b-2 border-neutral-700">ReactJS</a></Link> - "A JavaScript library for building user interfaces."
                            </p>
                            <p>
                                <Link href="https://angular.io/"><a className="border-b-2 border-neutral-700">Angular</a></Link> - "Angular is a platform for building mobile and desktop web applications."
                            </p>
                            <p>
                                <Link href="https://www.microsoft.com/net/download"><a className="border-b-2 border-neutral-700">.NET Core</a></Link> - "ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications."
                            </p>
                            <p>
                                <Link href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads"><a className="border-b-2 border-neutral-700">MSSQL Server</a></Link>  - "Microsoft SQL Server is a relational database management system developed by Microsoft."
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.push}></div>
                <div className={styles.push}></div>
                <footer className={styles.footer}>
                    <div className="md:container md:mx-auto w-full md:w-1/2 py-2 text-xl select-none" id="footer">
                        <p className="text-sm text-center">
                            Nam Nguyen @ {new Date().getFullYear()} - <Link href="/privacy-policy">Privacy Policy</Link>
                        </p>
                    </div>
                </footer>

            </div>
        </>
    )
}
