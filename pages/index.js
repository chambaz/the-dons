import Head from 'next/head'
import Nav from '../components/nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Dons</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen bg-center bg-cover bg-dons-white">
        <Nav />
      </div>
    </>
  )
}
