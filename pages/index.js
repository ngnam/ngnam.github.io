import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import Link from "next/link";

export default function Home() {
  const myBirthDay = 1991;
  return (
    <Layout home={true}>
      <Head>
        <title>ReWrite Blog Software Development</title>
      </Head>
      <article className={utilStyles.headingMd}>
        <h1 className="title">
          Nguyen Van Nam <small>- Owner for <Link href="/blog">Blog</Link> </small>
        </h1>
        <p>[Sr. FullStack Software Development]</p>
        <p>
          I'm {new Date().getFullYear()-myBirthDay} years old and I'm working web developer, I living in Ha Noi, Viet Nam. <br />
          I'm also a musician and my hobbies are cinema, technology, and magic. <br />
          Who thinks he’s funny. he's loves my family and my friends. <br />
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
