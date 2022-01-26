import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function Me() {
  return (
    <Layout>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profile page" />
      </Head>
      <article className={utilStyles.headingMd}>
        <h1 className="title">
            Profile me
        </h1>
        <p>
          (This is a sample Profile.)
        </p>
      </article>
    </Layout>
  )
}
