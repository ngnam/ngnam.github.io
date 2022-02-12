import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function Me() {
  return (
    <>
      <Layout>
        <Head>
          <title>Profile</title>
          <meta name="description" content="Profile page" />
        </Head>
        <article className={utilStyles.headingMd}>
          <h1 className="title">
            Certification
          </h1>
          <ul className="list-item">
            <li style={{backgroundImage: "url('/images/responsive-web-design-frontend-fcc.png')"}}>
              <a target="_blank" href="https://freecodecamp.org/certification/ngnam/responsive-web-design">Responsive Web Design - freecodecamp</a>
            </li>
            <li style={{backgroundImage: "url('/images/responsive-web-design-frontend-fcc.png')"}}>
              <a target="_blank" href="https://freecodecamp.org/certification/ngnam/responsive-web-design">Responsive Web Design - freecodecamp</a>
            </li>
            <li style={{backgroundImage: "url('/images/responsive-web-design-frontend-fcc.png')"}}>
              <a target="_blank" href="https://freecodecamp.org/certification/ngnam/responsive-web-design">Responsive Web Design - freecodecamp</a>
            </li>
          </ul>
        </article>
      </Layout>
      <style jsx>{`
        .list-item {
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin: 0;
          padding: 0;
        }
        .list-item li {
          margin-bottom: 10px;
          padding: 1rem;
          flex: 1 auto;
          max-width: 50%;
          text-align: center;
          min-height: 350px;
          background: #fff;
          display: flex;
          align-item: center;
          flex-direction: column;
          background-position-x: center;
          background-position-y: 50px;
          background-repeat: no-repeat;
          background-size: 70% 80%;
          background-color: #fff;
          transition: all 0.5s ease-in-out;
        }
        .list-item li:hover { 
          background-size: 100% 100%;
        }
        @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
          .list-item {
            flex-direction: column;
          }
        }
      `}
      </style>
    </>
  )
}
