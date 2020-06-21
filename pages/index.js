import Head from 'next/head'
import Layout, { siteTitle } from '_components/layout'
import utilStyles from '_styles/utils.module.css'
import { getSortedPastData } from '_lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>I'm a pretty software engineer and a translator (English/Mandarin/Malay/Japanese)!</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}/>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPastData()
  return {
    props: {
      allPostsData
    }
  }
}
