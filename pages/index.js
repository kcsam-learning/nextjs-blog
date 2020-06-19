import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>I'm a versatile software engineer and a translator (English/Mandarin/Malay/Japanese)!</p>
      </section>
    </Layout>
  )
}
