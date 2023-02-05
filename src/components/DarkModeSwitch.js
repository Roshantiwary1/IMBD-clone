"use client"
import {MdLightMode} from "react-icons/md"
import { BsFillMoonFill } from "react-icons/bs"
import  {useTheme}  from 'next-themes';
import { useEffect, useState } from "react";

function DarkModeSwitch() {

    const [mounted,setMounted]=useState(false)
        
    const {systemTheme,theme,setTheme} = useTheme();
    
    const currentTheme = theme==="system"?systemTheme:theme

    useEffect(()=>{setMounted(true)},[])
  return (
    <>
    
    {mounted && currentTheme==="light"?<BsFillMoonFill className="text-xl cursor-pointer hover:text-amber-600" onClick={()=>setTheme("dark")}/>: <MdLightMode className="text-xl cursor-pointer hover:text-amber-600" onClick={()=>setTheme("light")}/>}
    
    </>
  )
}

export default DarkModeSwitch
