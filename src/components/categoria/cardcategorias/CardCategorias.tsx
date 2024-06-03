
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriasProps{
    categoria : Categoria
}
function CardCategorias({categoria}:CardCategoriasProps) {
    return (
        <div className='bg-light-gray flex flex-col rounded-2xl overflow-hidden justify-between shadow'>
        <header className='bg-gradient-to-l from-prussian-blue to-cerulean py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>Categoria</header>
        <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.categoria}</p>
        <div className="flex">
            <Link to={`/editarcategoria/${categoria.id}`}className='text-white bg-cerulean w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2 hover:bg-celestial-blue'>
            <button>Editar</button>
            </Link>
            <Link to={`/deletarcategoria/${categoria.id}`} className='text-white bg-wine-red hover:bg-red-700 w-full flex items-center justify-center hover:bg-fire-brick'>
            <button>Deletar</button>
            </Link>
        </div>
        </div>
    )
}

export default CardCategorias;