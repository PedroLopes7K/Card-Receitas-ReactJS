import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import App from './App.js'
import Salada from './Components/Salada.js'
import Home from './Components/Home.js'
import Tilapia from './Components/Tilapia.js'
import Nhoque from './Components/Nhoque.js'
import Footer from './Components/Footer.js'
const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/salada-frutas" element={<Salada />} />
        <Route path="/tilapia" element={<Tilapia />} />
        <Route path="/nhoque" element={<Nhoque />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
