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
      <article className={utilStyles.headingMd}>
        <h1 className="title">
            Hello world
        </h1>
        <p>
          (This is a sample Hello world.)
        </p>
      </article>
    </Layout>
  )
}
