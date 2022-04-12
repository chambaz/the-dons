import Head from 'next/head'
import Nav from '../components/nav'

const Roadmap = () => {
  return (
    <>
      <Head>
        <title>The Dons</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-full text-lg bg-center bg-cover bg-dons-white font-dons-altona">
        <Nav />

        <div className="px-4 pt-24 pb-8 mx-auto 2xl:container 2xl:px-0">
          <div className="w-2/5">
            <h1 className="text-6xl font-dons-jungle">Roadmap</h1>
            <p className="mt-4 leading-relaxed">
              Consectetur aliquip aliquip commodo culpa non proident magna
              officia tempor in minim sint. Ex laborum do aliqua magna ad
              officia proident culpa et. Aliquip nulla cupidatat anim sunt
              mollit ea. Eu tempor mollit elit laboris enim ad.
            </p>
          </div>

          <img src="/img/roadmap.jpg" alt="The Roadmap" className="my-8" />
        </div>
      </div>
    </>
  )
}

export default Roadmap