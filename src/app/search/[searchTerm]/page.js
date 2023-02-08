import Results from "../../../components/Results";


const page = async({params}) => {
  const searchTerm = params.searchTerm
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}`)

  const data = await res.json();
  const result = data.results;
  return (
    <div>
      {result && result.length===0 && <h1 className="text-center pt-6">No Result Found</h1>} 

      {result && <Results result={result}/>}
    </div>
  )
}

export default page
