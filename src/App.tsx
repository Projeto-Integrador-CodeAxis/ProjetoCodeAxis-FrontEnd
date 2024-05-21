import { useState } from 'react'
import './App.css'
import './index.css'
import Sobre from './pages/sobre/Sobre'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <div className='gradient h-screen w-screen'>
      <BrowserRouter>
        <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
