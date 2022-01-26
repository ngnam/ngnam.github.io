import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function Home() {
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
          I'm 30 and I am a web developer living in Ha Noi, Viet Nam. <br />
          I'm also a musician and my hobbies are cinema, technology, and magic. <br />
          Who thinks he’s funny. he's loves my family and my friends. <br />
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </article>
    </Layout>
  )
}
