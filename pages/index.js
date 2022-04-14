import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => {
  const [showDon, setShowDon] = useState(false)
  const don = useRef()
  const [mousePos, setMousePos] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setShowDon(true)
    }, 500)
  }, [])

  const onMove = (e) => {
    setMousePos({
      x: e.pageX - window.innerWidth / 2,
      y: e.pageY - window.innerHeight / 2,
    })

    console.log(mousePos)
  }

  const scale = (number, inMin, inMax, outMin, outMax) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  }

  return (
    <>
      <Head>
        <title>The Dons - Ecosystem Builders</title>
        <meta
          name="description"
          content="Building the foundations for the NEAR NFT ecosystem."
        />
        <meta property="og:title" content="The Dons - Ecosystem Builders" />
        <meta
          name="og:description"
          content="Building the foundations for the NEAR NFT ecosystem."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lotusgang.com/" />
        <meta
          property="og:image"
          content="https://the-dons.vercel.app/img/bg.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nytimes" />
        <meta name="twitter:creator" content="@SarahMaslinNir" />
        <meta name="twitter:title" content="The Dons - Ecosystem Builders" />
        <meta
          name="twitter:description"
          content="Building the foundations for the NEAR NFT ecosystem."
        />
        <meta
          name="twitter:image"
          content="https://the-dons.vercel.app/img/bg.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8fe6f1" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div
        onMouseMove={onMove}
        className="w-screen h-screen text-xl bg-center bg-cover bg-dons-white font-dons-altona text-dons-black main-bg">
        <Nav />
        <img
          className="fixed hidden object-contain w-screen h-screen opacity-0 lg:block"
          ref={don}
          style={{
            opacity: showDon ? 1 : 0,
            transform: `translate(${(mousePos.x / 20) * -1}px, ${
              (mousePos.y / 20) * -1
            }px)`,
          }}
          src="/img/don.png"
        />
      </div>
    </>
  )
}

export default Home
