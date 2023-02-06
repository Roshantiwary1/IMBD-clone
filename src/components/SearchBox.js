"use client"

import { useState } from "react"
import {useRouter} from "next/navigation"
const SearchBox = () => {
    const [input , setInput] = useState("")
    const router = useRouter()
    const handleSubmit=(e)=>{
    e.preventDefault();
    if(!input) return;
    router.push(`/search/${input}`)
    }

  return (
    <form onSubmit={handleSubmit} className='flex max-w-6xl mx-auto justify-between items-center px-5'>
        <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder='search movie here...' className='w-full h-14 rounded-sm placeholder-gray-700 dark:placeholder-gray-400 outline-none bg-transparent placeholder:text-lg'/>
        <button type='submit' className='text-amber-600 text-lg'>search</button>
    </form>
  )
}

export default SearchBox
