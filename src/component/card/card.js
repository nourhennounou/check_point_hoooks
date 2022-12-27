import React from 'react'

export default function Card({description,posterUrl}) {
  return (
    <div className="card" style={{width: '18rem'}}>
  <img src={posterUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">{description}</p>
  </div>
</div>

  )
}
