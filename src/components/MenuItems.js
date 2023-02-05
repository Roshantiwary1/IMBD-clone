import Link from 'next/link'
import React from 'react'

const MenuItems = ({title,address,Icon}) => {
  return (
    <div className='md:inline-flex'>
      <Link className='mx-4  hover:text-amber-600 flex items-center my-2' href={address}>
            <Icon className="text-xl mr-0.5"/> 
            <p className='hidden md:inline text-sm'>{title}</p>
            </Link>
    </div>
  )
}

export default MenuItems
