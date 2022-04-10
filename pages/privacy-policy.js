import Head from 'next/head'
import Link from "next/link";
import { LOGO_CMS, HOME_OG_IMAGE_URL } from '../lib/constants'
import styles from './index.module.css'

const profileImage = HOME_OG_IMAGE_URL;
const siteTitle = 'Nguyen Van Nam - Web Developer - Privacy Policy';

export default function PrivacyPolicy() {

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

                <div className={styles.privacyPolicy}>
                    <div className="md:container md:mx-auto w-full md:w-1/2 p-2 py-8 text-xl select-none" id="oidcSchema">

                        <div className="flex flex-col w-full justify-between text-sm text-justify">
                            <h1 className="text-2xl font-medium pb-4">Privacy Policy
                            </h1>

                            <p>This is the Cookie Policy for Nguyen Van Nam - Web Developer, accessible from https://ngnam.github.io</p>

                            <p><strong>What Are Cookies</strong></p>

                            <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>

                            <p><strong>How We Use Cookies</strong></p>

                            <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

                            <p><strong>Disabling Cookies</strong></p>

                            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies. This Cookies Policy was created with the help of the <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">Cookies Policy Generator from CookiePolicyGenerator.com</a>.</p>
                            <p><strong>The Cookies We Set</strong></p>

                            <ul>

                                <li>
                                    <p>Email newsletters related cookies</p>
                                    <p>This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.</p>
                                </li>

                                <li>
                                    <p>Forms related cookies</p>
                                    <p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>
                                </li>

                                <li>
                                    <p>Site preferences cookies</p>
                                    <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
                                </li>

                            </ul>

                            <p><strong>Third Party Cookies</strong></p>

                            <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>

                            <ul>

                                <li>
                                    <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
                                    <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>
                                </li>

                                <li>
                                    <p>Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.</p>
                                </li>

                            </ul>

                            <p><strong>More Information</strong></p>

                            <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>

                            <p>For more general information on cookies, please read <a href="https://www.generateprivacypolicy.com/#cookies">"Cookies" article from the Privacy Policy Generator</a>.</p>

                            <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>

                            <ul>
                                <li>Email: nguyenvannam0411@gmail.com</li>
                            </ul>

                        </div>
                    </div>
                </div>

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
