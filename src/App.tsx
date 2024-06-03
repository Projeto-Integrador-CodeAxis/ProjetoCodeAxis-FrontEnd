import './App.css'
import './index.css'
import Sobre from './pages/sobre/Sobre'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from "./components/navBar/NavBar";
import Contatos from './pages/contatos/Contatos'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import { AuthProvider } from './contexts/AuthContext'
import { Burguer } from './components/burger/burguerMenu'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'

function App() {

  return (
    <>
      <div className='gradient h-screen w-screen'>
    
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/" element={<Home />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/formcadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/hamburguer" element={<Burguer />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/formcategoria" element={<FormCategoria />} />

            </Routes>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
