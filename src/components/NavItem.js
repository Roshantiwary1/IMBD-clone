"use client"
import React from 'react'
import Link from 'next/link';
import {useSearchParams} from "next/navigation"
function NavItem({title,param}) {
 const searchParams = useSearchParams()
 const genre = searchParams.get("genre")
 console.log(param)
  return (
    <div>
     <Link className={`m-4 hover:text-amber-600 font-semibold p-2 ${genre===param && "underline underline-offset-8 decoration-4 decoration-amber-500"}`} href={`/?genre=${param}`}>
        {title}
     </Link>
    </div>
  )
}

export default NavItem
