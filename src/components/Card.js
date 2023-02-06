import Link from 'next/link'
import React from 'react'
import  Image  from 'next/image';
import {FiThumbsUp} from "react-icons/fi"
const Card = ({result}) => {
  return (
    <div className=" group cursor-pointer p-3 hover:shadow-slate-400 shadow-md rounded-lg border-slate-400 m-2 transition-shadow border hover:shadow-md duration-300">
      <Link href={`/movie/${result.id}`}>
        <Image width="500" height="300" src={`https://image.tmdb.org/t/p/original/${result?.backdrop_path || result.poster_path}`} alt="image" className='rounded-t-lg group-hover:opacity-75 transition-all duration-200 max-w-full h-auto'  placeholder='blur' blurDataURL='/spinner.svg.svg'></Image>
     <div className='p-2'>
      <p className='line-clamp-2 text-md'>{result.overview}</p>
      <h2 className="font-bold truncate tex-lg my-1">{result.title || result.name}</h2>
      <p className='flex items-center space-x-2'>{result.release_date || result.first_air_date} <FiThumbsUp className='h-6 ml-4 mr-1'/> {result.vote_count}</p>
     </div>

      </Link>
    </div>
  )
}

export default Card
