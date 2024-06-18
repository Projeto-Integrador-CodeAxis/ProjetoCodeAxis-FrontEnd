import { ReactNode, useContext } from 'react'
import './Perfil.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


function Perfil () {

    const navigate = useNavigate()

    const { usuario} = useContext(AuthContext)

    let userTipe: ReactNode;

    if (usuario.roles === "admin") {
        
        
        userTipe = (

            <>
                <ul className = 'container_perfil_dados-lista'>

                <Link to='/cursos'>
                <li className = 'container_perfil_dados-lista-linha'>
                    Cursos
                </li>
                </Link>

                <Link to='/formcurso'>
                <li className = 'container_perfil_dados-lista-linha'>
                    Cadastrar Cursos
                </li>
                </Link>

                <Link to='/categorias'>
                <li className = 'container_perfil_dados-lista-linha'>
                    Categorias
                </li>
                </Link>

                <Link to='/formcategoria'>
                <li className = 'container_perfil_dados-lista-linha'>
                    Cadastrar Categorias
                </li>
                </Link>
            </ul>
            </>
        )
    }



    return (

        
        <section className = 'container_perfil'>

            <div className = 'container_perfil_dados'>

                <div>
                    <img className = 'w-40 h-40 rounded-full' src={usuario.foto} alt="Foto de perfil" />
                </div>

                <div>
                    <h1 className = 'font-poppins font-semibold text-3xl leading-[1.0]'>
                        {usuario.nome}
                    </h1>
                    <h1 className = 'font-poppins font-semibold text-3xl leading-[1.0]'>
                        {usuario.usuario}
                    </h1>
                </div>

                {userTipe}

            </div>

        </section>
    )
}

export default Perfil