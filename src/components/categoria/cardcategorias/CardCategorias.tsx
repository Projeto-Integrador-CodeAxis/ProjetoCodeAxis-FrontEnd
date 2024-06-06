
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriasProps{
    categoria : Categoria
}
function CardCategorias({categoria}:CardCategoriasProps) {
    return (
        <div className='bg-light-gray flex flex-col rounded-2xl overflow-hidden justify-between shadow m-10 border -mt-[5px]'>
        <header className='bg-gradient-to-l from-prussian-blue to-cerulean py-2 px-6 bg-indigo-800 text-white font-semibold text-2xl flex flex-row gap-4'>Categoria
        <div className='flex items-center ml-[90px]'><Link to={`/editarcategoria/${categoria.id}`}>
            <img width="24" height="24" src="https://img.icons8.com/external-gradak-royyan-wijaya/24/FFFFFF/external-edit-gradak-writing-gradak-royyan-wijaya.png" alt="external-edit-gradak-writing-gradak-royyan-wijaya"/>
            </Link></div>
            <div className='flex items-center'><Link to={`/deletarcategoria/${categoria.id}`}>
            <img width="24" height="24" src="https://img.icons8.com/metro/26/FFFFFF/trash.png" alt="trash"/>
            </Link></div>
        </header>
        
        <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.categoria}</p>
        
        </div>
    )
}

export default CardCategorias;