import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function Blog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Blog - Web Development Tips</title>
        <meta name="description" content="Blog - Web Development Tips" />
      </Head>
      <article>
        <h1 className={utilStyles.headingMd}>
         Blog title
        </h1>
        <p className={utilStyles.headingMdDescription}>
          (This is a sample blog.)
        </p>

        {/* <div className={utilStyles.headingMdContent}>
          <p>Hello world</p>
        </div> */}

      </article>
    </Layout>
  )
}
