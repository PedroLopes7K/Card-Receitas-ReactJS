import React from 'react'
import './Home.css'
import Card from './Card.js'
import Footer from './Footer.js'

export default function Home() {
  return (
    <div className="contain">
      <div className="wrapper">
        <h1>Receitas Saudáveis</h1>
        <Card
          url="https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2021/01/receitas-de-salada-de-fruta-simples.jpg"
          name="Salada De Frutas"
          description="A salada de frutas é uma combinação de várias frutas que cria uma refeição saudável e rica em fibras. O consumo desse mix de frutas pode trazer uma série de benefícios para a saúde, além de ser saborosa e refrescante."
          receita="https://receitas.globo.com/salada-de-frutas-54c64bbd4d38851f3100003f.ghtml"
          link="/salada-frutas"
        />

        <Card
          url="https://coolicias.ao/wp-content/uploads/2019/11/Receita-Low-carb-de-Fil%C3%A9-de-Til%C3%A1pia-Grelhada-em-Cama-de-Legumes-Salteados-na-Manteiga.jpg"
          name="Tilápia Grelhada"
          description="Além do alto valor proteico, a tilápia tem uma quantidade significativa de ômega-3, gordura boa que diminui o risco de doenças cardíacas e cardiovasculares, reduz os processos inflamatórios, ajuda no desenvolvimento cerebral e regeneração de suas células."
          receita="https://www.tudoreceitas.com/receita-de-file-de-tilapia-grelhado-na-manteiga-8486.html"
          link="/tilapia"
        />

        <Card
          url="https://www.receiteria.com.br/wp-content/uploads/receitas-de-nhoque-de-batata-doce.jpg"
          name="Nhoque De Batata-Doce"
          description="O nhoque de batata-doce é uma opção de prato saudável e incrível, já que pode ser preparado de diferentes maneiras e incrementado com molhos e acompanhamentos variados."
          receita="https://cybercook.com.br/receitas/massas/receita-de-nhoque-de-batata-doce-791"
          link="/nhoque"
        />
      </div>
      <Footer />
    </div>
  )
}
