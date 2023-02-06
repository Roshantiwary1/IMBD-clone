
import Results from '../components/Results';
import { useSearchParams } from 'next/navigation';
const API_KEY = process.env.API_KEY

export default async function Home({searchParams}) {

  const genre = searchParams.genre || "fetchTrending"


  const res = await fetch(`https://api.themoviedb.org/3/${genre==="fetchTopRated"?"movie/top_rated":"trending/all/week"}?api_key=${API_KEY}`);
  const data =await res.json();
  const result= data.results;
  return (
    <main>
  <Results result={result}/>    </main>
  )
}
