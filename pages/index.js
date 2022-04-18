import Head from 'next/head'
import Link from "next/link";
import { LOGO_CMS, HOME_OG_IMAGE_URL, CMS_NAME } from '../lib/constants'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  fab,
  faTwitter as fabTwitter,
  faGithub as fabGithub
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = true;
config.autoA11y = true;
library.add(fab, fabTwitter, fabGithub)

const profileImage = HOME_OG_IMAGE_URL;
const siteTitle = 'Nguyen Van Nam - Web Developer';

export default function Home() {

  /**
   * 
   * @param {*} e the event 
   * @returns void
   * method https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
   * tips https://stackoverflow.com/questions/7944460/detect-safari-browser
   */
  const scrollToBlock = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const selectors = target.replace(/^\//, '');
    const targetBlock = document.querySelector(selectors);

    if (!targetBlock) { return; }
    // detect safari browser
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!isSafari) {
      targetBlock.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else {
      targetBlock.scrollIntoView()
    }
  }
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
          <div className={styles.topbar} id="top">
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
              <Link href="/#projects"><a onClick={scrollToBlock} className={styles.menu + ' mx-2'}>Project</a></Link>
              <Link href="/#skills"><a onClick={scrollToBlock} className={styles.menu + ' mx-2'}>Skill</a></Link>
              <Link href="/#contact"><a onClick={scrollToBlock} className={styles.menu + ' mx-2'}>Contact</a></Link>
              <Link href="/blog"><a className={styles.menu + ' mx-2'}>Blog</a></Link>
            </div>
          </div>
        </header>
        <div className={styles.about}>
          <div className="md:container md:mx-auto w-full md:w-1/2 py-8">
            <div className="flex flex-wrap justify-center items-center">
              <div className="p-4">
                <img src="/images/avatar.png" className={styles.avatar} alt="Nam Nguyen" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center">
              <div className="p-2">
                <h3 className="text-center text-4xl uppercase font-medium">Nguyen Van Nam</h3>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center">
              <div className="p-2">
                <h4 className="text-center text-2xl capitalize font-light">Web Developer</h4>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center text-xl">
              <a className="p-2 font-bold" href="mailto:nguyenvannam0411@gmail.com">nguyenvannam0411@gmail.com</a>
              <a className="p-2 font-bold" href="https://github.com/ngnam">github.com/ngnam</a>
            </div>
          </div>
        </div>
        <div className={styles.devStackReverse}>
          <div className="md:container md:mx-auto w-full md:w-1/2 p-2 py-8">
            <p className="text-xl text-center font-light">I focus on programming web applications and web APIs using .NET Core/NodeJS.</p>
            <p className="text-xl text-center font-light">For JavaScript web applications, I am usually using React, Redux and TypeScript for Angular.</p>
            <p className="text-xl text-center font-light">For server-side web applications, I am using especially ASP.NET Core MVC with the MSSQL Server.</p>
            <p className="text-xl text-center font-light">I am very interested in identity and access management (OpenID Connect &amp; OAuth 2 protocols).</p>
          </div>
        </div>
        <div className={styles.devStackSchema}>
          <div className="md:container md:mx-auto w-full md:w-1/2 p-2 py-8 text-xl">
            <div className="flex flex-wrap justify-center items-center md:hidden">
              <Link href="/resource">
                <a>
                  <img src="/images/devStackSchema-ver.png" className={styles.resourceImage} alt="Resource" />
                </a>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center items-center xs:hidden">
              <Link href="/resource">
                <a>
                  <img src="/images/devStackSchema-hz.png" className={styles.resourceImage} alt="Resource" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.WorkReverse}>
          
          <div className={styles.helperUse + ' xs:hidden'}>
            <span>let's hover mouse to a project</span>
          </div>
          <div className="md:container md:mx-auto w-full md:w-1/2 p-2 py-8" id="projects">
            <h3 className="text-center text-4xl font-medium">🚀 My open source projects</h3>

            {/* PROJECT 1 */}
            <div className="flex flex-wrap flex-col justify-center items-center pt-4">
              <h3 className="text-2xl capitalize font-light border-b-2 py-2">
                <Link href="/generator/css">
                  <a>CSS Generator Tool</a>
                </Link>
              </h3>
              <p className="text-xl text-center font-light py-2">
                A CSS generator that helps you demonstrate and quickly generate CSS declarations for your website. It comes with many useful generator tools with many options and they demonstrate instanly. Thus it also helps demonstrates many CSS properties in a visual understandable way. Please choose one of the tools above and then adjust the options accordingly. CSS declarations are just one click away
              </p>
            </div>

            {/* PROJECT 2 */}
            <div className="flex flex-wrap flex-col justify-center items-center pt-4">
              <h3 className="text-2xl capitalize font-light border-b-2 py-2">
                <Link href="https://github.com/WebDevN-F/webdev-with-reactjs/tree/reactjs-monday-crm-clone">
                  <a target="_blank">Monday CRM Clone App</a>
                </Link>
              </h3>
              <p className="text-xl text-center font-light py-2">
                This is an example React Monday CRM Clone application using a DataStax Astra DB free tier database.
              </p>
            </div>

            {/* PROJECT 3 */}
            <div className="flex flex-wrap flex-col justify-center items-center pt-4">
              <h3 className="text-2xl capitalize font-light border-b-2 py-2">
                <Link href="#!">
                  <a onClick={e => e.preventDefault()} className="flex justify-center items-center gap-1 py-2">
                    <FontAwesomeIcon icon="fa-brands fa-github" size="xs" className="w-14 h-14" />
                    <span className="">IdentityServer4.Admin UI-Angular-13</span>
                  </a>
                </Link>
              </h3>
              <p className="text-xl text-center font-light py-2">
                - The administration for the IdentityServer4 and Angular Application.
              </p>
              <p className="text-xl text-center font-light py-2">
                <Link href="https://github.com/skoruba/IdentityServer4.Admin"><a target="_blank">IdentityServer4.Admin</a></Link> - The administration for the IdentityServer4 and Asp.Net Core Identity
              </p>
              <p className="text-xl text-center font-light py-2">
                <Link href="https://identityserver.io/"><a target="_blank">IdentityServer4</a></Link> - It's an OpenID Connect and OAuth 2 framework.
              </p>
            </div>

            {/* PROJECT 4 */}
            <div className="flex flex-wrap flex-col justify-center items-center pt-4">
              <h3 className="text-2xl capitalize font-light py-2">
                <Link href="#!">
                  <a onClick={e => e.preventDefault()} className="flex justify-center items-center gap-1 py-2">
                    50 unique mini-projects to sharpen your HTML, CSS &amp; JavaScript skills
                  </a>
                </Link>
              </h3>
              <p className="text-xl text-center font-light py-2">
                This is mini projects for hands-on web development using HTML/CSS/JavaScript, Typescript, Angular, ReactJS, UI Framework, Redux, Figma.
              </p>
            </div>

            <a href="/#top" onClick={scrollToBlock} className="text-xl border-b-2 font-light py-2 mx-2 select-none cursor-pointer">to top</a>

          </div>
        </div>

        <div className={styles.skills}>
          <div className="md:container md:mx-auto w-full md:w-1/2 p-2 py-8 text-xl select-none" id="skills">
            <h3 className="text-center text-4xl font-medium">🛠️ Skills</h3>

            {/* PROJECT 1 */}
            <div className="flex flex-wrap flex-col justify-center items-center pt-4">
              <h3 className="text-2xl capitalize font-light border-b-2 py-2">
                Web Developer: 2017 – present
              </h3>
              <h3 className="text-2xl capitalize font-light border-b-2 py-2">
                Responsible for:
              </h3>
              <p className="text-xl text-center font-light py-2">
                - Developing web applications and web APIs (ASP.NET Core MVC, ASP.NET Web Forms, NodeJS, SharePoint 2010).
              </p>
              <p className="text-xl text-center font-light py-2">
                - Dev/Ops Lending Solution, Report collection System, None-Core.
              </p>
              <p className="text-xl text-center font-light py-2">
                - Unit and integration testing of Asp.Net Core MVC apps (xUnit, Selenium).
              </p>
              <p className="text-xl text-center font-light py-2">
                - Securing web applications/APIs and managing user identity (OAuth2, OpenID Connect).
              </p>
              <p className="text-xl text-center font-light py-2">
                - Persisting generated data (MS SQL Server, Oracle) - T-SQL, EF Core, Dapper.
              </p>
              <p className="text-xl text-center font-light py-2">
                - Development of browser clients (jQuery, jQuery UI, AngularJS, TypeScript for Angular, React and
                Redux).
              </p>
              <p className="text-xl text-center font-light py-2">
                - Building of real-time web services (SignalR).
              </p>

              <h3 className="text-2xl capitalize font-light border-b-2 py-2">
                Environment:
              </h3>
              <p className="text-xl text-center font-light py-2">
                - GIT – Bitbucket, Gitlab, JIRA.
              </p>
              <p className="text-xl text-center font-light py-2">
                - Continuous integrations - Appveyor, Heroku, Azure DevOps
              </p>
            </div>

            {/* PROJECT 2 */}
            <div className="flex flex-wrap flex-col justify-center items-center pt-4">
              <h3 className="text-2xl capitalize font-light border-b-2 py-2">
                Frontend Web Developer: 2014 - 2017
              </h3>
              <h3 className="text-2xl capitalize font-light border-b-2 py-2">
                Responsible for:
              </h3>
              <p className="text-xl text-center font-light py-2">
                - Developing web applications (ASP.NET Web MVC, ASP.NET Web Form, Bootstrap 3).
              </p>
              <p className="text-xl text-center font-light py-2">
                - Development of browser clients (jQuery, jQuery UI and AngularJS.
              </p>
            </div>

            <a href="/#top" onClick={scrollToBlock} className="text-xl border-b-2 font-light py-2 mx-2 select-none cursor-pointer">to top</a>

          </div>
        </div>

        <div className={styles.programmingEducation}>
          <div className="md:container md:mx-auto w-full md:w-1/2 p-2 py-8 text-xl select-none" id="programmingEducation">
            <h3 className="text-center text-4xl font-medium pb-4">📚 Programming Education</h3>

            {/* PROJECT 1 */}
            <div className="flex flex-wrap flex-col justify-center items-center pt-2">
              <h3 className="text-2xl capitalize font-light border-b-2">
                <Link href="https://docs.microsoft.com/en-us/learn/certifications/mcsa-web-applications-certification/">
                  <a className="flex justify-center items-center gap-1 py-2" target="_blank">
                    MCSA: Web Applications - 2018
                  </a>
                </Link>
              </h3>
              <p className="text-xl text-center font-light py-2">
                (Microsoft Certified Solutions Associate)
              </p>
            </div>

            {/* PROJECT 2 */}
            <div className="flex flex-wrap flex-col justify-center items-center pt-2">
              <h3 className="text-2xl capitalize font-light border-b-2">
                <Link href="https://www.freecodecamp.org/certification/ngnam/responsive-web-design">
                  <a className="flex justify-center items-center gap-1 py-2" target="_blank">
                    Responsive web design – (2019)
                  </a>
                </Link>
              </h3>
              <p className="text-xl text-center font-light py-2">
                (Freecodecamp Certified Solutions Web design)
              </p>
            </div>

            {/* PROJECT 3 */}
            <div className="flex flex-wrap flex-col justify-center items-center pt-2">
              <h3 className="text-2xl capitalize font-light border-b-2">
                <Link href="https://www.freecodecamp.org/certification/ngnam/back-end-development-and-apis">
                  <a className="flex justify-center items-center gap-1 py-2" target="_blank">
                    Back End Development and APIs Certification (2021)
                  </a>
                </Link>
              </h3>
              <p className="text-xl text-center font-light py-2">
                (Freecodecamp Certified Solutions Backend &amp; APIs)
              </p>
            </div>

            {/* PROJECT 4 */}
            <div className="flex flex-wrap flex-col justify-center items-center pt-2">
              <h3 className="text-2xl font-light text-center">
                My favorite web sites for learning the programming skills are <a href="https://egghead.io" className="border-b-2">egghead.io</a> and <a className="border-b-2" href="https://frontendmasters.com">Frontendmasters.com</a>.
              </h3>
            </div>

            <div className="flex flex-wrap flex-col justify-center items-center pt-2">
              
              <h3 className="text-2xl font-light text-center">Libraries Popular Daily.dev</h3>

              <ul className="text-xl font-light text-center">
                <li>
                  <p>
                    <a href="https://lexical.dev/docs/intro" target="_blank">
                      Lexical - An extensible text editor framework that does things differently.
                    </a>
                  </p>
                </li>
              </ul>

            </div>

          </div>
        </div>

        <div className={styles.oidcSchema}>
          <div className="md:container md:mx-auto w-full md:w-1/2 p-2 py-8 text-xl select-none" id="oidcSchema">
            <h3 className="text-center text-2xl font-medium pb-4">🔑 OpenID Connect &amp; OAuth 2 for Web Apps and Web APIs
            </h3>

            <div className="flex flex-wrap flex-col justify-center items-center pt-2">
              <img className="w-full" src="/images/oidc-web-flows3.jpg" alt="OpenID Connect &amp; OAuth 2 for Web Apps and Web APIs" />
            </div>

            <div className="flex flex-wrap flex-col justify-center items-center pt-2">
              <h3 className="text-2xl font-light text-center">
                Resources
              </h3>
              <p className="text-xs text-center font-light pt-2">
                Icons mainly - <a href="https://fontawesome.com" className="border-b-2">https://fontawesome.com</a>
              </p>
              <p className="text-xs text-center font-light pt-2">
                Besides the schemas contain the icons from these projects:
              </p>
              <p className="text-xs text-center font-light pt-2">
                <a href="https://oauth.net/2/" className="border-b-2">OAuth2</a> - <span>&nbsp;</span>
                <a href="https://openid.net/connect/" className="border-b-2">OpenID Connect</a> - <span>&nbsp;</span>
                <a href="https://reactjs.org/" className="border-b-2">ReactJS</a> - <span>&nbsp;</span>
                <a href="https://angular.io/" className="border-b-2">Angular</a> - <span>&nbsp;</span>
                <a href="https://www.microsoft.com/net/download" className="border-b-2">.NET Core</a> - <span>&nbsp;</span>
                <a href="https://skoruba.com/" className="border-b-2">skoruba.com</a>.
              </p>
            </div>

          </div>
        </div>

        <div className={styles.contact}>
          <div className="md:container md:mx-auto w-full md:w-1/2 p-2 py-8 text-xl select-none" id="contact">
            <h3 className="text-center text-2xl font-medium pb-4">📞 Contact</h3>
            <div className="flex flex-wrap flex-col justify-center items-center pt-2">
              <p className="text-xl text-center font-light pt-2">
                Email me: <a href="mailto:nguyenvannam0411@gmail.com">nguyenvannam0411@gmail.com</a>
              </p>
              <p className="text-xl text-center font-light pt-2">
                <a href="/images/NguyenVanNam_Resume_doc.pdf" download>My resume</a>
              </p>
              <p className="text-right w-full text-xl text-center font-light pt-2">
                <a href="/#top" onClick={scrollToBlock} className="text-sm border-b-2 font-light select-none cursor-pointer">to top</a>
              </p>
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
