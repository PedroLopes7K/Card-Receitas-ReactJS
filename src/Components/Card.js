import React, { useState } from 'react'
import './Card.css'
import Modal from 'react-modal'
import Button from './Button.js'

Modal.setAppElement('#root')

export default function Card(props) {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'solid 4px rgb(26, 2, 48)',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <img src={props.url} />
        <h2>{props.name}</h2>
        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>
      <Button btnModal={openModal} className="button" nameBtn={'VER MAIS'} />
      {/* <button onClick={openModal}>VER MAIS</button> */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        // className="modal"
      >
        <h2 className="titleModal"> Receita {props.name}</h2>
        <p className="paragrafo">Ficou com àgua na boca?</p>

        <span>
          Para aprender a fazer essa receita deliciosa acesse o link abaixo:
        </span>
        <br />
        <a href={props.receita} target="_blank" rel="noreferrer">
          &gt; Receita {props.name}
        </a>
        <br />
        {/* <button className="btn" onClick={closeModal}>
          CLOSE
        </button> */}
        <Button btnModal={closeModal} nameBtn={'CLOSE'} />
      </Modal>
    </div>
  )
}
