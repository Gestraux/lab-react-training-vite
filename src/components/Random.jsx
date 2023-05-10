import React from 'react'

function Random(prop) {
  const random = Math.floor(
    Math.random() * (prop.max - prop.min) + prop.min
  )
    return (
    <div className= "id-card">
        {`Random value between ${prop.min} and ${prop.max} => ${random}`}
    </div>
  )
}

export default Random