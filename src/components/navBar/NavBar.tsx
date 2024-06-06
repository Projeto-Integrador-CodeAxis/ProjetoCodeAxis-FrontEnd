import './NavBar.css'
import { ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Burguer } from '../burger/burguerMenu';
import { ToastAlert } from '../../utils/ToastAlert';


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

// logica para o botão sair aparecer apenas quando logado
  const navigate = useNavigate()

    const {usuario, handleLogout} = useContext(AuthContext)
        
    let menuLogado: ReactNode

    if (usuario.token !=="" ){
        menuLogado =(   
          <>
          <Link to='/cursos'>
            <li> 
              <p className="container_navbar_conteudo-link text-lg">Cursos</p>
            </li>
            </Link>

            <Link to='/formcurso'>
            <li> 
              <p className="container_navbar_conteudo-link text-lg">Cadastrar Cursos</p>
            </li>
            </Link>

          <Link to = './formcategoria'>
            <li>
              <p className="container_navbar_conteudo-link text-lg">Nova categoria</p>
            </li>
            </Link>

          <Link to = './categorias'>
            <li>
              <p className="container_navbar_conteudo-link text-lg">Categorias</p>
            </li>
            </Link>

            <Link to = './aulas'>
            <li>
              <p className="container_navbar_conteudo-link text-lg">Aulas</p>
            </li>
            </Link>

            <li>
              <a onClick={logout} href="/" className="container_navbar_conteudo-link text-lg">Sair</a>
            </li>

            </>
        )
    }

    function logout() {

      handleLogout()
      ToastAlert('Usuario desconectado com sucesso','sucesso');
      navigate("/")
    }


    return (
      <>
      <div className='container_navbar w-auto text-white flex justify-around items-center p-6  box-border '>
            <div className='container_navbar-logo flex justify-center align-center w-18 pr-4'>
              <img id='logo' src="https://ik.imagekit.io/codeaxis/Home%20Page/Logo_20Mariah_20(1).png_updatedAt=1717679560993?updatedAt=1717679606461" 
                        alt="Logo" className="w-full h-16 object-cover"/>
            </div>

          <Burguer onClick={toggleMenu} />
          <ul id='itens_menu' className={`container_navbar_conteudo w-full justify-start gap-6 items-center text-lg
            ${isMobile ? (menuVisivel ? 'flex' : 'hidden') : 'flex'}`}>  

        <Link to = './'>
            <li>
              <p  className='container_navbar_conteudo-link text-2xl'>CodeAxis</p>
            </li>
            </Link>

            <Link to = './sobre'>
            <li>
              <p  className="container_navbar_conteudo-link text-lg">Sobre</p>
            </li>
            </Link>

            <Link to = './contatos'>
            <li>
              <p className="container_navbar_conteudo-link text-lg">Contato</p>
            </li>
            </Link>

            {menuLogado}
            
          </ul>
              
              
        </div>
      </>
    )
  } 
  
  export default Navbar;