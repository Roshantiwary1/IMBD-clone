
function Results({result}) {
      
  return (
    <div>
      {result.map((result)=>(<div key={result.id}>

      </div>))}
    </div>
  )
}

export default Results
