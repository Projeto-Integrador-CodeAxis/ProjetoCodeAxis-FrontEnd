import './NavBar.css'
import { ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Burguer } from '../burger/burguerMenu';
import { ShoppingCart, SignOut } from '@phosphor-icons/react';
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

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //responsividade

  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)
        
  let menuLogado: ReactNode

  if (usuario.token !== "") {
    menuLogado = (
      
        <>
        
        <Link to='/aulas'>
          <li>
            <p className="container_navbar_conteudo-link text-lg">Aulas</p>
          </li>
        </Link>

        <Link to='/perfil'>
          <li>
            <p className="container_navbar_conteudo-link text-lg">Perfil</p>
          </li>
        </Link>

        <Link to='/cart'>
            <li>
              <p className="container_navbar_conteudo-link text-lg"><ShoppingCart size={25} weight='bold' /></p>
            </li>
          </Link>

          <li>
          <a onClick={logout} href="/" className="container_navbar_conteudo-link text-lg"><SignOut size={32} color="#f7f7f7" /></a>
          </li>
        
          </>
    
    )
  }


  function logout() {
    handleLogout()
    ToastAlert('Usuario desconectado com sucesso', 'sucesso');
    navigate("/")
  }

  return (
    <>
      <div className='container_navbar w-full text-white flex justify-around items-center p-2 px-8  box-border '>
        <Link to='./'>
          <div className='container_navbar-logo flex justify-center align-center w-18 pr-4'>
            <img id='logo' src="https://ik.imagekit.io/codeaxis/Home%20Page/Logo_20Mariah_20(1).png_updatedAt=1717679560993?updatedAt=1717679606461"
                alt="Logo" className="w-full h-16 object-cover" />
          </div>
        </Link>

        <Burguer onClick={toggleMenu} />
        <ul id='itens_menu' className={`container_navbar_conteudo w-full justify-start gap-6 items-center text-lg
          ${isMobile ? (menuVisivel ? 'flex' : 'hidden') : 'flex'}`}>  

          <Link to='./'>
            <li>
              <p className='container_navbar_conteudo-link text-2xl'>CodeAxis</p>
            </li>
          </Link>

          <Link to='/sobre'>
          <li>
            <p className="container_navbar_conteudo-link text-lg">Sobre</p>
          </li>
        </Link>

        <Link to='/contatos'>
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
