import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <button onClick={props.btnModal} className="btn">
      {/* <a href="#">VER MAIS</a> */}
      {props.nameBtn}
    </button>
  )
}
