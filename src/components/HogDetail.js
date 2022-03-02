import React from 'react'

function HogDetail({hog: {greased, weight, "highest medal achieved": medal}}) {



  return (
    <div className="description">
        <strong>{greased ? "so greasy" : "squeaky clean"}</strong> 
        <p>Highest medal achieved: <strong>{medal}</strong></p>
        <p>Weight: <strong>{weight}</strong></p>
    </div>
  )
}

export default HogDetail