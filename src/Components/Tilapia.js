import React from 'react'
import './Pages.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Salada() {
  return (
    <div className="container1">
      <div className="container2">
        <Link id="link" to={'/'}>
          VOLTAR
        </Link>

        <h2 class="titulo1">Receita de Tilápia Grelhada</h2>

        <img src="https://coolicias.ao/wp-content/uploads/2019/11/Receita-Low-carb-de-Fil%C3%A9-de-Til%C3%A1pia-Grelhada-em-Cama-de-Legumes-Salteados-na-Manteiga.jpg" />

        {/* <hr></hr> */}

        <h2 class="titulo2"> Ingredientes</h2>
        <ul id="Ingredientes">
          <li>4 filés de tilápia</li>
          <li>1 colher de chá de manteiga</li>
          <li>1 limão</li>
          <li>1 colher de chá de orégano</li>
          <li>1 cpitada de pimenta do reino</li>
          <li>1 pitada de sal</li>
        </ul>

        {/* <hr></hr> */}

        <h2 class="titulo2"> Modo de preparo</h2>
        <ul id="Preparo">
          <li>
            {' '}
            Tempere os filés de tilápia com suco de limão, sal, pimenta e
            oréganos.
          </li>
          <li>
            Leve ao fogo uma frigideira ou grelha com a manteiga e espere
            derreter. Depois espalhe a manteiga por toda a frigideira com a
            ajuda de um papel absorvente ou pincel de cozinha. Coloque os filés
            de tilápia e deixe cozinhar por 5 minutos de cada lado.
          </li>
          <li>
            Lembre que é importante não cozinhar demasiado os filés de peixe
            para que eles não fiquem ressequidos e sem sabor.
          </li>
          <li>
            Sirva seu filé de peixe grelhado em seguida, se quiser regando com
            mais um pouco de suco de limão.
          </li>
          <li>Acrescente o fermento em pó e pulse o liquidificador 3 vezes.</li>
          <li>Despeje essa massa na forma e leve ao forno médio.</li>
          <li>Deixe assar por, aproximadamente, 40 minutos.</li>
          <li>Espere esfriar totalmente para desenformar.</li>
        </ul>
      </div>
    </div>
  )
}
