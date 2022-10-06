import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-6'>
        <h1 className="font-bold text-3xl">Home</h1>
      </main>
    </div>
  )
}

export default Home
