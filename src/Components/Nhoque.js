import React from 'react'
import './Pages.css'

import { Link } from 'react-router-dom'

export default function Nhoque() {
  return (
    <div className="container1">
      <div className="container2">
        <Link id="link" to={'/'}>
          VOLTAR
        </Link>

        <h2 class="titulo1">Receita Nhoque De Batata Doce</h2>

        <img src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-nhoque-de-batata-doce.jpg" />

        <h2 class="titulo2"> Ingredientes</h2>
        <ul id="Ingredientes">
          <li>Batata-Doce: 500 gramas</li>
          <li>2 Ovos</li>
          <li>1 Xícara de chá de farinha de trigo.</li>
        </ul>

        <h2 class="titulo2"> Modo de preparo</h2>
        <ul id="Preparo">
          <li>
            Em uma tigela, amasse as batatas com um espremedor, junte os ovos e
            a farinha, mexendo até formar uma massa homogênea.
          </li>
          <li>Faça os rolos com a massa, corte em tamanhos desejados.</li>
          <li>
            Cozinha em água fervente abundante até subirem e coloque-os em água
            fria rapidamente.
          </li>
          <li>Cubra com o molho de sua preferência e sirva.</li>
        </ul>
      </div>
    </div>
  )
}
