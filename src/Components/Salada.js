import React from 'react'
import './Pages.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function Salada() {
  return (
    <div className="container1">
      <div className="container2">
        <Link id="link" to={'/'}>
          VOLTAR
        </Link>

        <h2 class="titulo1">Receita Salada De Frutas</h2>

        <img src="https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2021/01/receitas-de-salada-de-fruta-simples.jpg" />

        <h2 class="titulo2"> Ingredientes</h2>
        <ul id="Ingredientes">
          <li>4 Maçãs</li>
          <li>4 Bananas</li>
          <li>1 limão</li>
          <li>3 Laranjas</li>
          <li>15 Uvas cortadas sem caroço</li>
          <li> 1 Mamão</li>
          <li> 4 Peras</li>
          <li> 6 Morangos</li>
          <li> 1 Lata de leite condensado</li>
        </ul>

        <h2 class="titulo2"> Modo de preparo</h2>
        <ul id="Preparo">
          <li>Corte as frutas em pedaços pequenos</li>
          <li>
            Coloque em uma tigela, acrescente o leite condensado e misture.
          </li>
          <li>Leve a geladeira por 30 minutos.</li>
          <li>Sirva em seguida.</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
