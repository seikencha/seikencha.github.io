import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { SeikenchaAppBar } from '../components/molecules/SeikenchaAppBar'

const Home: NextPage = () => {
  return (

    <>
      <Head>
        <title>正弦鍵盤茶屋 Official Website</title>
        <meta name="description" content="和と憂いを紡ぐ正弦鍵盤茶屋の公式サイトです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SeikenchaAppBar />
        <h1 >
          正弦鍵盤茶屋の公式サイトです
        </h1>
      </main>

      <footer>
        正弦鍵盤茶屋2022,co.ltd
      </footer>
    </>
  )
}

export default Home
