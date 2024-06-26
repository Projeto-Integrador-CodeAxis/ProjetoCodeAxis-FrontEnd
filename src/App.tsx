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
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'
import FormCategoria from './pages/categoria/formCategoria'
import ListarCurso from './components/cursos/listarcursos/ListarCurso'
import FormCurso from './components/cursos/formcursos/FormCurso'
import DeletarCurso from './components/cursos/deletarcursos/DeletarCurso'
import Aulas from './pages/aulas/Aulas'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { CartProvider } from './contexts/CartContext'
import Cart from './components/carrinho/cardcart/Cart'
import Perfil from './pages/perfil/Perfil'

function App() {

  return (
    <>
      <div className='gradient h-screen w-screen'>
    
        <AuthProvider>
        <ToastContainer/>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/" element={<Home />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/formcadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/formcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/cursos" element={<ListarCurso />} />
            <Route path="/formcurso" element={<FormCurso />} />
            <Route path="/editarcurso/:id" element={<FormCurso />} />
            <Route path="/deletarcurso/:id" element={<DeletarCurso />} />
            <Route path="/aulas" element={<Aulas />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/perfil" element={<Perfil />} />
            </Routes>
            <Footer />
          </BrowserRouter>
          </CartProvider>
        </AuthProvider>
      </div>
    </>
  )
}

export default App;