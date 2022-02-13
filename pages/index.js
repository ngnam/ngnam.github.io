import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function Home() {
  const myOld = 1991;
  return (
    <Layout home={true}>
      <Head>
        <title>Nguyen Van Nam - 0928351036</title>
      </Head>
      <article className={utilStyles.headingMd}>
        <h1 className="title">
         NGUYEN VAN NAM
        </h1>
        <p>[JS FullStack Web Developer - Software Development]</p>
        <p>
          I'm {new Date().getFullYear()-myOld} years old and I'm working web developer, I living in Ha Noi, Viet Nam. <br />
          I'm also a musician and my hobbies are cinema, technology, and magic. <br />
          Who thinks he’s funny. he's loves my family and my friends. <br />
        </p>
        <p>
          (This is a my portfolio - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn" target="_blank">our Next.js tutorial</a>.)
        </p>
        <p>
          <a href="https://roadmap.sh/react" target="_blank">
            React Developer 
            <small> Everything that is there to learn about React and the ecosystem in 2022.
            </small>
          </a>
        </p>
      </article>
    </Layout>
  )
}
