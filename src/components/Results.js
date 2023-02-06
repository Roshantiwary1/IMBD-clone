import Card from "./Card"

function Results({result}) {
      
  return (
    <div className="max-w-6xl mx-auto py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5">
      {result.map((result)=>(<Card key={result.id} result={result}/>))}
    </div>
  )
}

export default Results
