import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yusuke Kaga Portfolio</title>
      </Head>

      <h1>Let's build portfolio</h1>
    </div>
  )
}
