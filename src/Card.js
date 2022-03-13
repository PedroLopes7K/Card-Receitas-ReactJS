import React from 'react'
import Button from './Button'
import './Card.css'

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.url} />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <Button />
    </div>
  )
}
