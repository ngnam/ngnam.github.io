import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import Link from "next/link";

export default function Home() {
  const myBirthDay = 1991;
  return (
    <Layout home={true}>
      <Head>
        <title>Web Development Tips</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingMd}>
          Web Development Tips: go from junior to web developer
        </h1>
        <p>
          Hey there 👋 I'm Nguyen Van Nam, a Junior web developer with 6+ years of experience, and I'll write articles for web developer with bite-sized dev tips.
        </p>
      </article>
    </Layout>
  )
}
