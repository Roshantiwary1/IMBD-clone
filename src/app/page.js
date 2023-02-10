
import Results from '../components/Results';

export default async function Home({searchParams}) {

  const genre = searchParams.genre || "fetchTrending"
  

  const res = await fetch(`https://api.themoviedb.org/3/${genre==="fetchTopRated"?"movie/top_rated":"trending/all/week"}?api_key=5dc2347f57ee0146e493090dcf36ef21`,{next:{revalidate:100000}});
  const data =await res.json();
  const result= data?.results;
  return (
    <main>
  <Results result={result}/>    </main>
  )
}
