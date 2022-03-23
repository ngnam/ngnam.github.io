import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function Hello() {
  return (
    <Layout>
      <Head>
        <title>Hello world</title>
        <meta name="description" content="Hello world page" />
      </Head>
      <article>
        <h1 className={utilStyles.headingMd}>
          Blog title
        </h1>
        <p className={utilStyles.headingMdDescription}>
          (This is a sample blog.)
        </p>

        <div className="article-content">
          <p>Hello world</p>
        </div>
      </article>
    </Layout>
  )
}
