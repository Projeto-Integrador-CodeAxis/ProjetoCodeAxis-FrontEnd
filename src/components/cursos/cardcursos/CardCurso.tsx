
import { Link } from 'react-router-dom'
import Curso from '../../../models/Curso'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

interface CardCursosProps{
    curso : Curso
}

function CardCursos({curso}:CardCursosProps) {

    const { adicionarCurso } = useContext(CartContext)
    
    return (
        
        <div className='bg-light-gray flex flex-col rounded-2xl overflow-hidden shadow m-10 border -mt-[5px]'>
            <header className='bg-gradient-to-l from-prussian-blue to-cerulean py-2 px-6 bg-indigo-800 text-white font-semibold text-2xl flex flex-row gap-4'>{curso.categoria?.categoria}
            <div className='flex items-center ml-[60px]'><Link to={`/editarcurso/${curso.id}`}>
            <img width="24" height="24" src="https://img.icons8.com/external-gradak-royyan-wijaya/24/FFFFFF/external-edit-gradak-writing-gradak-royyan-wijaya.png" alt="external-edit-gradak-writing-gradak-royyan-wijaya"/>
            </Link></div>
            <div className='flex items-center'><Link to={`/deletarcurso/${curso.id}`}>
            <img width="24" height="24" src="https://img.icons8.com/metro/26/FFFFFF/trash.png" alt="trash"/>
            </Link></div>
            </header>
            <div className='w-100'><img src={curso.imagem} className='h-full w-full shadow-xl object-cover' alt="Foto do Curso" /></div>
            <p className='py-4 text-3xl bg-slate-200 h-full flex items-center justify-center font-semibold font-poppins'>{curso.titulo}</p>
            <p className='px-6 text-2x bg-slate-200 h-full flex items-center justify-center text-justify font-poppins'>{curso.descricao}</p>
            <p className='pt-4 text-2x bg-slate-200 h-full flex items-center justify-center font-poppins font-semibold'>Autor: {curso.autor}</p>
            <div className="flex flex-wrap">
            <button className='w-full m-6 border-2 border-white rounded-2xl text-white bg-prussian-blue hover:bg-cerulean flex items-center justify-center py-2 shadow-xl '
            onClick={() => adicionarCurso(curso)}>Comprar Certificado</button>

      </div>
        </div>

        
        
    )
}

export default CardCursos;