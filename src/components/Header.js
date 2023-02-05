import React from 'react'
import MenuItems from './MenuItems'
import {AiFillHome} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons/bs"
import  Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
    <MenuItems title="HOME" address="/" Icon={AiFillHome}/>
    <MenuItems title="ABOUT" address="/about" Icon={BsFillInfoCircleFill}/>
      </div>
      <div className="">
      <Link href="/">
        <h2 className='text-2xl'>
        <span className='font-bold bg-amber-600 rounded-lg py-1 px-2 mr-1'>IMDB</span>
        <span className='text-xl hidden sm:inline'>Clone</span>
        </h2>
      </Link>
      </div>
    </div>
  )
}

export default Header
