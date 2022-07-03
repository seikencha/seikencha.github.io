import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>正弦鍵盤茶屋 Official Website</title>
        <meta name="description" content="和と憂いを紡ぐ正弦鍵盤茶屋の公式サイトです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 >
          正弦鍵盤茶屋
        </h1>
        <h1 >
          <Link href="/profile">自己紹介</Link>
        </h1>
        <h1 >
          <Link href="/discography">過去作品</Link>
        </h1>
        <h1>
          <a href="https://seikencha.booth.pm">購入する</a>
        </h1>
        <h1>
          <a href="https://twitter.com/seikencha">Twitter</a>
        </h1>
        <h1>
          <a href="https://www.youtube.com/channel/UCA9jmCbUl9sN4YNVl__W1VA/videos">Youtube</a>
        </h1>
      </main>

      <footer>
        正弦鍵盤茶屋2022,co.ltd
      </footer>
    </div >
  )
}

export default Home
