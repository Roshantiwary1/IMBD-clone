import Image from "next/image";

async function page({params}) {

    const movieId =params.id;
    const res =  await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5dc2347f57ee0146e493090dcf36ef21`)
    const movie = await res.json()
  return (
    <div className="w-full">
     <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
     <Image width="500" height="300" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie.poster_path}`} alt="image" className="rounded-lg"  placeholder='blur' blurDataURL='/spinner.svg.svg'></Image>

     <div className="p-2">
        <h1 className="text-lg mb-3 font-bold">{movie.name || movie.title}</h1>
        <p className="text-lg mb-3"><span className="font-bold mr-1">Overview : </span>{movie.overview}</p>
        <p className="text-lg mb-3"><span className="font-bold mr-1">Release Date : </span>{movie.release_date || movie.first_air_date}</p>
        <p className="text-lg mb-3"><span className="font-bold mr-1">Rating : </span>{ movie.vote_average}</p>
     </div>
     </div>
    </div>
  )
}

export default page