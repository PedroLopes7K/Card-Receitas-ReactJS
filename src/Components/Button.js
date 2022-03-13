import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <button onClick={props.abrir} className="btn">
      {/* <a href="#">VER MAIS</a> */}
      VER MAIS
    </button>
  )
}
