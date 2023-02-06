""
import React from 'react'

function Results({result}) {
    console.log(result)    
  return (
    <div>
      {result.map((result)=>(<div key={result.id}>

      </div>))}
    </div>
  )
}

export default Results
