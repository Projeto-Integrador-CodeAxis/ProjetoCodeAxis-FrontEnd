import './NavBar.css'

import Botao from "../botao/Botao"
import { List } from '@phosphor-icons/react'
import { ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Burguer } from '../burger/burguerMenu';


function Navbar() {

  const [menuVisivel, setMenuVisivel] = useState(false); 

  const toggleMenu = () => {
    setMenuVisivel(!menuVisivel); 
  };

  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 500px)").matches);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 500px)").matches);
    };

    // Adiciona o event listener para mudanças no tamanho da tela
    window.addEventListener('resize', handleResize);

    // Chama handleResize para verificar o tamanho da tela inicialmente
    handleResize();

    // Limpa o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log("é mobile" + isMobile);

// logica para o botão sair aparecer apenas quando logado
  const navigate = useNavigate()

    const {usuario, handleLogout} = useContext(AuthContext)
        
    let botaoSair: ReactNode

    if (usuario.token !=="" ){
        botaoSair =(   <li>
              <a onClick={logout} href="/" className="container_navbar_conteudo-link text-lg">Sair</a>
            </li>
        )
    }

    function logout() {

      handleLogout()
      alert("Usuario desconectado com sucesso")
      navigate("/") 
    }


    return (
      <>
      <div className='container_navbar w-full text-white flex justify-around items-center py-2'>
            <div className='container_navbar-logo flex justify-center align-center'>
              <img id='logo' src="https://ik.imagekit.io/4kqnwi1lux/Generation/ariah%20garcia%20(100%20x%2090%20px)%20(1).png?updatedAt=1716306994973" 
                        alt="Logo" className="w-full h-full object-cover"/>
            </div>

          <Burguer />
          <List id='burguer' size={32} className='mb-4' onClick={toggleMenu}  />
          <ul id='itens_menu' className={`container_navbar_conteudo w-1/3 justify-start gap-6 items-center text-lg ml-[-300px]
            ${isMobile ? (menuVisivel ? 'flex' : 'hidden') : 'flex'}`}>  
            <li>
              <a href="/" className='container_navbar_conteudo-link text-2xl'>CodeAxis</a>
            </li>

            <li>
              <a href="/sobre" className="container_navbar_conteudo-link text-lg">Sobre</a>
            </li>

            <li>
              <a href="/contatos" className="container_navbar_conteudo-link text-lg">Contato</a>
            </li>

            {botaoSair}
            
          </ul>
              
              <div className='container_navbar_botao flex justify-end text-lg'>
                
                <Botao
                    texto="Entrar"
                    link="/login"
                    width={isMobile ? 100 : 200}
                    height={isMobile ? 30 : 50}
                    borderRadiusTopRight={25}
                    borderRadiusBottomRight={25}
                    borderRadiusTopLeft={25}
                    borderRadiusBottomLeft={0}/>
              </div>
        </div>
      </>
    )
  } 
  
  export default Navbar