"use client"
import React, { useEffect } from 'react';

function Error({error, reset}) {

   useEffect(()=>{
    console.log(error)
    
   },[error]);

  return ( 
    <div className='text-center my-10'>
      <h1>Something went wrong</h1>
      <button onClick={()=>reset()}>Try Again</button>
    </div>
  )
}

export default Error
