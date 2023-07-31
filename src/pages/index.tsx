import Head from 'next/head'
import Layout from '../app/components/Layout/Layout'

export { getServerSideProps } from '../api/pages'

export default function HomePage({ title, tweets}: { title: string, tweets: any[]}): JSX.Element {
  console.log(tweets)
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title={title}>
        Hello
      </Layout>
    </>
  )
}
