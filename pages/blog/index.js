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
      <article>
        <h1 className={utilStyles.headingMd}>
         Blog title
        </h1>
        <p className={utilStyles.headingMdDescription}>
          (This is a sample blog.)
        </p>

        <div className={utilStyles.headingMdContent}>
          <p>Hello world</p>
        </div>

      </article>
    </Layout>
  )
}
