import { useContext } from "react"
import { CartContext } from "../../../contexts/CartContext"
import Curso from "../../../models/Curso"

interface CardCursosProps {
    item: Curso
}

function CardCart({ item }: CardCursosProps) {

    const { removerCurso } = useContext(CartContext)

    return (
        <div className='flex flex-col rounded-lg overflow-hidden justify-between bg-white'>
            <div className='py-4'>

                <img src={item.imagem} className='mt-1 h-40 max-w-75 mx-auto' alt={item.titulo} />

                <div className='p-4'>
                    <p className='text-sm text-center uppercase'>{item.titulo}</p>
                    <h3 className='text-xl text-center font-bold uppercase'>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(item.valor)}
                    </h3>
                    <p className='text-sm italic text-center'>Categoria: {item.categoria?.categoria} </p>
                </div>
            </div>
            <div className="flex flex-wrap">
                <button className='m-1 w-full border rounded-xl text-white bg-gradient-to-l from-prussian-blue to-cerulean hover:bg-white
                                   flex items-center justify-center py-2'
                    onClick={() => removerCurso(item.id)}>
                    Remover
                </button>
            </div>
        </div >
    )
}

export default CardCart