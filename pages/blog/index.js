import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog page" />
      </Head>
      <article className={utilStyles.headingMd}>
        <h1 className="title">
         Blog
        </h1>
        <p>
          (This is a sample blog.)
        </p>
      </article>
    </Layout>
  )
}
