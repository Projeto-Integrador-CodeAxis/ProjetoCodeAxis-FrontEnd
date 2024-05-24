import './App.css'
import './index.css'
import Sobre from './pages/sobre/Sobre'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from "./components/navBar/NavBar";
import Contatos from './pages/contatos/Contatos'
import Cadastro from './pages/cadastro/Cadastro'

function App() {

  return (
    <>
      <div className='gradient h-screen w-screen'>
        
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/" element={<Home />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/FormCadastro" element={<Cadastro />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      
      </div>
    </>
  )
}

export default App
