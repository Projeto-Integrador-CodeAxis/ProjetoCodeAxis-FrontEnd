import './App.css'
import './index.css'
import Sobre from './pages/sobre/Sobre'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/pages/footer/Footer'
import Navbar from "./components/navBar/NavBar";

function App() {

  return (
    <>
      <div className='gradient h-screen w-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
      </BrowserRouter>
      
      </div>
    </>
  )
}

export default App
