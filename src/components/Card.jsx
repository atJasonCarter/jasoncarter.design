import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ item }) {
  return (
    <Link to={`/item/${item.id}`} className="card">
      <div className="card-image" style={{ backgroundImage: `url(${item.imageUrl})` }}>
        <div className="name-tag">{item.name} <span className="company">{item.divider} {item.Date}</span></div>
       
    
        </div>
         <div className="overlay">
          
          <p>{item.description}</p>
      </div>
    </Link>
  )
}