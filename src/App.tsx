import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contatos from './pages/pg_contatos/Contatos'

function App() {

  return (
    <>
            <BrowserRouter>
                
                <Routes>
                    <Route path="/" element={<Contatos />} />
                </Routes>
                
            </BrowserRouter>
    </>
  )
}

export default App
