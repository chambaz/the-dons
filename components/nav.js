import { useState, useRef, useEffect } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import Link from 'next/link'

const Nav = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const mobileMenuRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      setShowNav(true)
    }, 1000)
  })

  return (
    <>
      <nav className="container relative z-50 flex items-center px-4 py-4 mx-auto text-2xl md:px-0">
        <Link href="/" passHref>
          <a
            className="transition duration-500"
            style={{ opacity: showNav ? 1 : 0 }}>
            <img
              src="/img/dons-logo.svg"
              alt="The Dons"
              width="60px"
              height="60px"
            />
          </a>
        </Link>

        {mobileMenuOpen && (
          <IoClose
            onClick={() => {
              setMobileMenuOpen(false)
            }}
            className="ml-auto text-4xl cursor-pointer lg:hidden text-dons-black"
            style={{ transform: 'translateY(2px)' }}
          />
        )}

        {!mobileMenuOpen && (
          <HiMenuAlt1
            onClick={() => {
              setMobileMenuOpen(true)
            }}
            className="ml-auto text-4xl cursor-pointer lg:hidden text-dons-black"
            style={{ transform: 'translateY(2px)' }}
          />
        )}

        <ul
          className="items-center hidden ml-auto transition duration-500 opacity-0 lg:flex"
          style={{ opacity: showNav ? 1 : 0, 'transition-delay': '.5s' }}>
          <li>
            <Link href="/roadmap" passHref>
              <a
                className={`pb-1 transition border-b-2 text-dons-black hover:border-dons-red ${
                  props.active === 'roadmap'
                    ? 'border-dons-blue'
                    : 'border-transparent'
                }`}>
                Roadmap
              </a>
            </Link>
          </li>
          <li className="ml-10">
            <a
              className="pb-1 transition border-b-2 border-transparent text-dons-black hover:border-dons-red"
              href="https://howrare.xyz/thedons"
              target="_blank"
              rel="noreferrer">
              Rarity
            </a>
          </li>
          <li className="ml-10">
            <a
              className="pb-1 transition border-b-2 border-transparent text-dons-black cursor-emoji"
              href="#">
              Staking
            </a>
          </li>
          <li className="ml-10">
            <a
              className="pb-1 transition border-b-2 border-transparent text-dons-black cursor-emoji"
              href="#">
              Raffles
            </a>
          </li>
          <li className="ml-10">
            <a
              className="pb-1 transition border-b-2 border-transparent text-dons-black cursor-emoji"
              href="#">
              Shop
            </a>
          </li>
        </ul>
        <ul
          className="items-center hidden ml-20 duration-500 lg:flex"
          style={{
            transform: 'translateY(-2px)',
            opacity: showNav ? 1 : 0,
            'transition-delay': '.5s',
          }}>
          <li>
            <a
              href="https://paras.id/collection/nft.thedons.near"
              target="_blank"
              rel="noreferrer"
              className="flex items-center transition cursor-pointer text-dons-black hover:text-dons-red">
              <svg
                className="cursor-pointer"
                viewBox="0 0 80 19"
                width="70px"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27.8185 18.223L27.4999 17.0833C27.4018 17.1649 27.2956 17.2426 27.1812 17.3161C26.1355 18.0269 24.6813 18.3823 22.8185 18.3823C21.0538 18.3823 19.6486 18.0636 18.6029 17.4264C17.5571 16.7891 17.0342 15.6168 17.0342 13.9092C17.0342 12.3079 17.5653 11.1723 18.6274 10.5024C19.6976 9.83247 21.3561 9.4975 23.6028 9.4975H27.218V9.05633C27.218 8.10045 26.9647 7.41826 26.4582 7.00977C25.9517 6.59311 25.2736 6.38477 24.4239 6.38477C23.6559 6.38477 23.0023 6.5686 22.4631 6.93624C21.9239 7.30389 21.589 7.88803 21.4582 8.68868L17.3406 7.53673C17.5857 6.20504 18.3128 5.20831 19.522 4.54655C20.7393 3.88479 22.3079 3.5539 24.2278 3.5539C27.0056 3.5539 28.9051 4.12988 29.9263 5.28184C30.9476 6.43379 31.4582 8.07186 31.4582 10.196V18.223H27.8185ZM27.218 13.897V11.9852H24.4852C23.276 11.9852 22.4468 12.1364 21.9974 12.4387C21.5563 12.741 21.3357 13.2107 21.3357 13.848C21.3357 14.4771 21.5358 14.9509 21.9362 15.2695C22.3365 15.58 22.9778 15.7352 23.8602 15.7352C24.8324 15.7352 25.633 15.5514 26.2621 15.1838C26.8994 14.8161 27.218 14.3872 27.218 13.897Z"
                  fill="currentColor"></path>
                <path
                  d="M43.0744 10.8823C43.0744 9.06041 42.8661 7.87169 42.4494 7.31614C42.0409 6.75242 41.4691 6.47056 40.7338 6.47056C39.8841 6.47056 39.206 6.76876 38.6995 7.36516C38.2746 7.87169 38.0295 8.43542 37.9642 9.05633V18.223H33.7485V3.68871H37.7803L37.8661 5.08576C37.907 5.04491 37.9478 5.00815 37.9887 4.97547C39.0916 4.03593 40.5377 3.56616 42.3269 3.56616C44.2632 3.56616 45.5744 4.16256 46.2607 5.35537C46.947 6.54 47.2901 8.38231 47.2901 10.8823H43.0744Z"
                  fill="currentColor"></path>
                <path
                  d="M59.9157 18.223L59.597 17.0833C59.499 17.1649 59.3928 17.2426 59.2784 17.3161C58.2327 18.0269 56.7784 18.3823 54.9157 18.3823C53.151 18.3823 51.7458 18.0636 50.7 17.4264C49.6543 16.7891 49.1314 15.6168 49.1314 13.9092C49.1314 12.3079 49.6624 11.1723 50.7245 10.5024C51.7948 9.83247 53.4533 9.4975 55.7 9.4975H59.3152V9.05633C59.3152 8.10045 59.0619 7.41826 58.5554 7.00977C58.0488 6.59311 57.3707 6.38477 56.5211 6.38477C55.7531 6.38477 55.0995 6.5686 54.5603 6.93624C54.0211 7.30389 53.6861 7.88803 53.5554 8.68868L49.4378 7.53673C49.6829 6.20504 50.41 5.20831 51.6191 4.54655C52.8364 3.88479 54.4051 3.5539 56.325 3.5539C59.1028 3.5539 61.0023 4.12988 62.0235 5.28184C63.0447 6.43379 63.5553 8.07186 63.5553 10.196V18.223H59.9157ZM59.3152 13.897V11.9852H56.5823C55.3732 11.9852 54.5439 12.1364 54.0946 12.4387C53.6534 12.741 53.4328 13.2107 53.4328 13.848C53.4328 14.4771 53.633 14.9509 54.0333 15.2695C54.4337 15.58 55.075 15.7352 55.9573 15.7352C56.9296 15.7352 57.7302 15.5514 58.3593 15.1838C58.9965 14.8161 59.3152 14.3872 59.3152 13.897Z"
                  fill="currentColor"></path>
                <path
                  d="M72.9902 18.3455C71.0131 18.3455 69.3914 18.0514 68.1251 17.4632C66.8587 16.8667 66.0376 15.8823 65.6618 14.5097L69.3628 13.1617C69.5262 14.0277 69.9347 14.6445 70.5883 15.0122C71.25 15.3717 72.0262 15.5514 72.9167 15.5514C73.8481 15.5514 74.567 15.4248 75.0736 15.1715C75.5801 14.9182 75.8334 14.5547 75.8334 14.0808C75.8334 13.4844 75.527 13.0963 74.9142 12.9166C74.3097 12.7287 73.317 12.5326 71.9363 12.3284C69.7059 12.0343 68.121 11.589 67.1814 10.9926C66.2419 10.3962 65.7721 9.3627 65.7721 7.89212C65.7721 6.38886 66.4176 5.29409 67.7084 4.60782C69.0074 3.92155 70.7231 3.57841 72.8554 3.57841C74.9224 3.57841 76.5074 3.87253 77.6103 4.46076C78.7214 5.04083 79.4445 5.98445 79.7794 7.29163L76.2133 8.61516C76.0417 7.83084 75.6618 7.25895 75.0736 6.89948C74.4935 6.53183 73.7296 6.34801 72.7819 6.34801C71.8832 6.34801 71.1806 6.4869 70.6741 6.76467C70.1757 7.04245 69.9265 7.40193 69.9265 7.8431C69.9265 8.41499 70.2492 8.77855 70.8947 8.93378C71.5482 9.08901 72.5327 9.26058 73.8481 9.44848C75.9886 9.72626 77.549 10.1715 78.5294 10.7843C79.5098 11.3888 80 12.4101 80 13.848C80 15.4738 79.3668 16.6298 78.1005 17.3161C76.8423 18.0024 75.1389 18.3455 72.9902 18.3455Z"
                  fill="currentColor"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.45097 18.3823L0 0L10.3553 1.83823C10.7955 1.95407 11.2031 2.0472 11.5784 2.13296C12.9897 2.45543 13.9444 2.67359 14.4607 3.60292C15.1143 4.77122 15.4411 6.20912 15.4411 7.91663C15.4411 9.63231 15.1143 11.0743 14.4607 12.2426C13.8071 13.4109 12.4387 13.995 10.3553 13.995H5.87007L6.72791 18.3823H2.45097ZM3.799 3.799L9.3876 4.78089C9.62517 4.84277 9.84513 4.89252 10.0477 4.93832C10.8093 5.11057 11.3246 5.2271 11.6032 5.72351C11.9559 6.34755 12.1323 7.11561 12.1323 8.02767C12.1323 8.9441 11.9559 9.71434 11.6032 10.3384C11.2505 10.9624 10.5119 11.2745 9.3876 11.2745H6.8347L5.29625 11.1519L3.799 3.799Z"
                  fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li className="ml-6">
            <a
              href="https://twitter.com/TheDonsProject"
              target="_blank"
              rel="noreferrer"
              className="flex items-center transition cursor-pointer text-dons-black hover:text-dons-red">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22.27 18.23"
                width="27px"
                height="27px">
                <path
                  fill="currentColor"
                  d="M21.76,2.1c-.35,.16-.71,.29-1.08,.39,.44-.49,.77-1.07,.97-1.7,.05-.14,0-.3-.12-.39-.12-.09-.28-.1-.41-.03-.78,.46-1.62,.8-2.51,.99-.89-.87-2.1-1.36-3.35-1.36-2.64,0-4.78,2.14-4.78,4.78,0,.21,.01,.41,.04,.62-3.27-.29-6.31-1.89-8.4-4.46-.07-.09-.19-.14-.31-.13-.12,0-.22,.08-.28,.18-.42,.73-.65,1.56-.65,2.4,0,1.15,.41,2.24,1.14,3.1-.22-.08-.44-.17-.64-.29-.11-.06-.24-.06-.35,0-.11,.06-.18,.18-.18,.3,0,.02,0,.04,0,.06,0,1.72,.93,3.27,2.34,4.11-.12-.01-.24-.03-.36-.05-.12-.02-.25,.02-.34,.11-.08,.09-.11,.23-.07,.35,.52,1.63,1.87,2.84,3.5,3.2-1.35,.85-2.9,1.29-4.52,1.29-.34,0-.68-.02-1.01-.06-.17-.02-.32,.08-.38,.24-.06,.16,0,.33,.14,.42,2.08,1.34,4.5,2.04,6.97,2.04,4.87,0,7.91-2.29,9.61-4.22,2.12-2.4,3.33-5.58,3.33-8.72,0-.13,0-.26,0-.4,.83-.63,1.55-1.39,2.14-2.27,.09-.13,.08-.31-.02-.43-.1-.12-.27-.16-.42-.1Z"
                />
              </svg>
            </a>
          </li>
          <li className="ml-6">
            <a
              href="https://discord.gg/CsPAhxm988"
              target="_blank"
              rel="noreferrer"
              className="flex items-center transition cursor-pointer text-dons-black hover:text-dons-red">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23.28 17.74"
                width="27px"
                height="27px">
                <path
                  fill="currentColor"
                  d="M19.71,1.47C18.22,.79,16.63,.29,14.97,0c-.03,0-.06,0-.08,.04-.2,.36-.43,.84-.59,1.21-1.79-.27-3.57-.27-5.32,0-.16-.38-.39-.85-.6-1.21-.02-.03-.05-.04-.08-.04-1.66,.29-3.25,.79-4.74,1.47-.01,0-.02,.01-.03,.03C.52,6.01-.31,10.4,.1,14.75c0,.02,.01,.04,.03,.05,1.99,1.46,3.92,2.35,5.81,2.94,.03,0,.06,0,.08-.03,.45-.61,.85-1.26,1.19-1.93,.02-.04,0-.09-.04-.1-.63-.24-1.24-.53-1.82-.87-.05-.03-.05-.09,0-.12,.12-.09,.24-.19,.36-.28,.02-.02,.05-.02,.08-.01,3.81,1.74,7.93,1.74,11.7,0,.02-.01,.05,0,.08,0,.12,.1,.24,.19,.36,.28,.04,.03,.04,.1,0,.12-.58,.34-1.18,.63-1.82,.86-.04,.02-.06,.06-.04,.1,.35,.68,.75,1.32,1.19,1.93,.02,.03,.05,.04,.08,.03,1.9-.59,3.83-1.48,5.82-2.94,.02-.01,.03-.03,.03-.05,.49-5.02-.81-9.38-3.44-13.25,0-.01-.02-.02-.03-.03ZM7.78,12.1c-1.15,0-2.09-1.05-2.09-2.35s.93-2.35,2.09-2.35,2.11,1.06,2.09,2.35c0,1.29-.93,2.35-2.09,2.35Zm7.74,0c-1.15,0-2.09-1.05-2.09-2.35s.93-2.35,2.09-2.35,2.11,1.06,2.09,2.35c0,1.29-.92,2.35-2.09,2.35Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <div
        ref={mobileMenuRef}
        className="fixed top-0 z-40 w-screen h-full bg-dons-white"
        style={{ display: mobileMenuOpen ? 'block' : 'none' }}>
        <nav className="flex flex-col items-center justify-center w-full h-full">
          <ul className="flex flex-col items-center justify-center text-lg font-dons-altona text-lotus-red">
            <li className="my-4 text-2xl">
              <Link href="/roadmap" passHref>
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block transition border-b-2 border-transparent cursor-pointer ${
                    props.active === 'roadmap'
                      ? 'border-dons-blue'
                      : 'border-transparent'
                  }`}>
                  Roadmap
                </a>
              </Link>
            </li>
            <li className="my-4 text-2xl">
              <a
                href="https://howrare.xyz/thedons"
                target="_blank"
                rel="noreferrer"
                className="block transition border-b-2 border-transparent cursor-pointer">
                Rarity
              </a>
            </li>
            <li className="my-4 text-2xl">
              <a
                href="#"
                className="block transition border-b-2 border-transparent cursor-help">
                Staking <span className="text-sm">(coming soon)</span>
              </a>
            </li>
            <li className="my-4 text-2xl">
              <a
                href="#"
                className="block transition border-b-2 border-transparent cursor-help">
                Raffles <span className="text-sm">(coming soon)</span>
              </a>
            </li>
            <li className="my-4 text-2xl">
              <a
                href="#"
                className="block transition border-b-2 border-transparent cursor-help">
                Shop <span className="text-sm">(coming soon)</span>
              </a>
            </li>
          </ul>
          <ul className="flex flex-row items-center justify-center mt-10 font-normal font-lotus-theboldfont text-lotus-red">
            <li className="mx-2">
              <a
                href="https://paras.id/collection/nft.thedons.near"
                target="_blank"
                rel="noreferrer"
                className="flex items-center transition cursor-pointer text-lotus-red hover:text-lotus-red-light">
                <svg
                  className="cursor-pointer"
                  viewBox="0 0 80 19"
                  width="70px"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M27.8185 18.223L27.4999 17.0833C27.4018 17.1649 27.2956 17.2426 27.1812 17.3161C26.1355 18.0269 24.6813 18.3823 22.8185 18.3823C21.0538 18.3823 19.6486 18.0636 18.6029 17.4264C17.5571 16.7891 17.0342 15.6168 17.0342 13.9092C17.0342 12.3079 17.5653 11.1723 18.6274 10.5024C19.6976 9.83247 21.3561 9.4975 23.6028 9.4975H27.218V9.05633C27.218 8.10045 26.9647 7.41826 26.4582 7.00977C25.9517 6.59311 25.2736 6.38477 24.4239 6.38477C23.6559 6.38477 23.0023 6.5686 22.4631 6.93624C21.9239 7.30389 21.589 7.88803 21.4582 8.68868L17.3406 7.53673C17.5857 6.20504 18.3128 5.20831 19.522 4.54655C20.7393 3.88479 22.3079 3.5539 24.2278 3.5539C27.0056 3.5539 28.9051 4.12988 29.9263 5.28184C30.9476 6.43379 31.4582 8.07186 31.4582 10.196V18.223H27.8185ZM27.218 13.897V11.9852H24.4852C23.276 11.9852 22.4468 12.1364 21.9974 12.4387C21.5563 12.741 21.3357 13.2107 21.3357 13.848C21.3357 14.4771 21.5358 14.9509 21.9362 15.2695C22.3365 15.58 22.9778 15.7352 23.8602 15.7352C24.8324 15.7352 25.633 15.5514 26.2621 15.1838C26.8994 14.8161 27.218 14.3872 27.218 13.897Z"
                    fill="currentColor"></path>
                  <path
                    d="M43.0744 10.8823C43.0744 9.06041 42.8661 7.87169 42.4494 7.31614C42.0409 6.75242 41.4691 6.47056 40.7338 6.47056C39.8841 6.47056 39.206 6.76876 38.6995 7.36516C38.2746 7.87169 38.0295 8.43542 37.9642 9.05633V18.223H33.7485V3.68871H37.7803L37.8661 5.08576C37.907 5.04491 37.9478 5.00815 37.9887 4.97547C39.0916 4.03593 40.5377 3.56616 42.3269 3.56616C44.2632 3.56616 45.5744 4.16256 46.2607 5.35537C46.947 6.54 47.2901 8.38231 47.2901 10.8823H43.0744Z"
                    fill="currentColor"></path>
                  <path
                    d="M59.9157 18.223L59.597 17.0833C59.499 17.1649 59.3928 17.2426 59.2784 17.3161C58.2327 18.0269 56.7784 18.3823 54.9157 18.3823C53.151 18.3823 51.7458 18.0636 50.7 17.4264C49.6543 16.7891 49.1314 15.6168 49.1314 13.9092C49.1314 12.3079 49.6624 11.1723 50.7245 10.5024C51.7948 9.83247 53.4533 9.4975 55.7 9.4975H59.3152V9.05633C59.3152 8.10045 59.0619 7.41826 58.5554 7.00977C58.0488 6.59311 57.3707 6.38477 56.5211 6.38477C55.7531 6.38477 55.0995 6.5686 54.5603 6.93624C54.0211 7.30389 53.6861 7.88803 53.5554 8.68868L49.4378 7.53673C49.6829 6.20504 50.41 5.20831 51.6191 4.54655C52.8364 3.88479 54.4051 3.5539 56.325 3.5539C59.1028 3.5539 61.0023 4.12988 62.0235 5.28184C63.0447 6.43379 63.5553 8.07186 63.5553 10.196V18.223H59.9157ZM59.3152 13.897V11.9852H56.5823C55.3732 11.9852 54.5439 12.1364 54.0946 12.4387C53.6534 12.741 53.4328 13.2107 53.4328 13.848C53.4328 14.4771 53.633 14.9509 54.0333 15.2695C54.4337 15.58 55.075 15.7352 55.9573 15.7352C56.9296 15.7352 57.7302 15.5514 58.3593 15.1838C58.9965 14.8161 59.3152 14.3872 59.3152 13.897Z"
                    fill="currentColor"></path>
                  <path
                    d="M72.9902 18.3455C71.0131 18.3455 69.3914 18.0514 68.1251 17.4632C66.8587 16.8667 66.0376 15.8823 65.6618 14.5097L69.3628 13.1617C69.5262 14.0277 69.9347 14.6445 70.5883 15.0122C71.25 15.3717 72.0262 15.5514 72.9167 15.5514C73.8481 15.5514 74.567 15.4248 75.0736 15.1715C75.5801 14.9182 75.8334 14.5547 75.8334 14.0808C75.8334 13.4844 75.527 13.0963 74.9142 12.9166C74.3097 12.7287 73.317 12.5326 71.9363 12.3284C69.7059 12.0343 68.121 11.589 67.1814 10.9926C66.2419 10.3962 65.7721 9.3627 65.7721 7.89212C65.7721 6.38886 66.4176 5.29409 67.7084 4.60782C69.0074 3.92155 70.7231 3.57841 72.8554 3.57841C74.9224 3.57841 76.5074 3.87253 77.6103 4.46076C78.7214 5.04083 79.4445 5.98445 79.7794 7.29163L76.2133 8.61516C76.0417 7.83084 75.6618 7.25895 75.0736 6.89948C74.4935 6.53183 73.7296 6.34801 72.7819 6.34801C71.8832 6.34801 71.1806 6.4869 70.6741 6.76467C70.1757 7.04245 69.9265 7.40193 69.9265 7.8431C69.9265 8.41499 70.2492 8.77855 70.8947 8.93378C71.5482 9.08901 72.5327 9.26058 73.8481 9.44848C75.9886 9.72626 77.549 10.1715 78.5294 10.7843C79.5098 11.3888 80 12.4101 80 13.848C80 15.4738 79.3668 16.6298 78.1005 17.3161C76.8423 18.0024 75.1389 18.3455 72.9902 18.3455Z"
                    fill="currentColor"></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.45097 18.3823L0 0L10.3553 1.83823C10.7955 1.95407 11.2031 2.0472 11.5784 2.13296C12.9897 2.45543 13.9444 2.67359 14.4607 3.60292C15.1143 4.77122 15.4411 6.20912 15.4411 7.91663C15.4411 9.63231 15.1143 11.0743 14.4607 12.2426C13.8071 13.4109 12.4387 13.995 10.3553 13.995H5.87007L6.72791 18.3823H2.45097ZM3.799 3.799L9.3876 4.78089C9.62517 4.84277 9.84513 4.89252 10.0477 4.93832C10.8093 5.11057 11.3246 5.2271 11.6032 5.72351C11.9559 6.34755 12.1323 7.11561 12.1323 8.02767C12.1323 8.9441 11.9559 9.71434 11.6032 10.3384C11.2505 10.9624 10.5119 11.2745 9.3876 11.2745H6.8347L5.29625 11.1519L3.799 3.799Z"
                    fill="currentColor"></path>
                </svg>
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://twitter.com/TheDonsProject"
                target="_blank"
                rel="noreferrer"
                className="flex items-center transition cursor-pointer text-lotus-red hover:text-lotus-red-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22.27 18.23"
                  width="23px"
                  height="23px">
                  <path
                    fill="currentColor"
                    d="M21.76,2.1c-.35,.16-.71,.29-1.08,.39,.44-.49,.77-1.07,.97-1.7,.05-.14,0-.3-.12-.39-.12-.09-.28-.1-.41-.03-.78,.46-1.62,.8-2.51,.99-.89-.87-2.1-1.36-3.35-1.36-2.64,0-4.78,2.14-4.78,4.78,0,.21,.01,.41,.04,.62-3.27-.29-6.31-1.89-8.4-4.46-.07-.09-.19-.14-.31-.13-.12,0-.22,.08-.28,.18-.42,.73-.65,1.56-.65,2.4,0,1.15,.41,2.24,1.14,3.1-.22-.08-.44-.17-.64-.29-.11-.06-.24-.06-.35,0-.11,.06-.18,.18-.18,.3,0,.02,0,.04,0,.06,0,1.72,.93,3.27,2.34,4.11-.12-.01-.24-.03-.36-.05-.12-.02-.25,.02-.34,.11-.08,.09-.11,.23-.07,.35,.52,1.63,1.87,2.84,3.5,3.2-1.35,.85-2.9,1.29-4.52,1.29-.34,0-.68-.02-1.01-.06-.17-.02-.32,.08-.38,.24-.06,.16,0,.33,.14,.42,2.08,1.34,4.5,2.04,6.97,2.04,4.87,0,7.91-2.29,9.61-4.22,2.12-2.4,3.33-5.58,3.33-8.72,0-.13,0-.26,0-.4,.83-.63,1.55-1.39,2.14-2.27,.09-.13,.08-.31-.02-.43-.1-.12-.27-.16-.42-.1Z"
                  />
                </svg>
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://discord.gg/CsPAhxm988"
                target="_blank"
                rel="noreferrer"
                className="flex items-center transition cursor-pointer text-lotus-red hover:text-lotus-red-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 23.28 17.74"
                  width="23px"
                  height="23px">
                  <path
                    fill="currentColor"
                    d="M19.71,1.47C18.22,.79,16.63,.29,14.97,0c-.03,0-.06,0-.08,.04-.2,.36-.43,.84-.59,1.21-1.79-.27-3.57-.27-5.32,0-.16-.38-.39-.85-.6-1.21-.02-.03-.05-.04-.08-.04-1.66,.29-3.25,.79-4.74,1.47-.01,0-.02,.01-.03,.03C.52,6.01-.31,10.4,.1,14.75c0,.02,.01,.04,.03,.05,1.99,1.46,3.92,2.35,5.81,2.94,.03,0,.06,0,.08-.03,.45-.61,.85-1.26,1.19-1.93,.02-.04,0-.09-.04-.1-.63-.24-1.24-.53-1.82-.87-.05-.03-.05-.09,0-.12,.12-.09,.24-.19,.36-.28,.02-.02,.05-.02,.08-.01,3.81,1.74,7.93,1.74,11.7,0,.02-.01,.05,0,.08,0,.12,.1,.24,.19,.36,.28,.04,.03,.04,.1,0,.12-.58,.34-1.18,.63-1.82,.86-.04,.02-.06,.06-.04,.1,.35,.68,.75,1.32,1.19,1.93,.02,.03,.05,.04,.08,.03,1.9-.59,3.83-1.48,5.82-2.94,.02-.01,.03-.03,.03-.05,.49-5.02-.81-9.38-3.44-13.25,0-.01-.02-.02-.03-.03ZM7.78,12.1c-1.15,0-2.09-1.05-2.09-2.35s.93-2.35,2.09-2.35,2.11,1.06,2.09,2.35c0,1.29-.93,2.35-2.09,2.35Zm7.74,0c-1.15,0-2.09-1.05-2.09-2.35s.93-2.35,2.09-2.35,2.11,1.06,2.09,2.35c0,1.29-.92,2.35-2.09,2.35Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Nav
