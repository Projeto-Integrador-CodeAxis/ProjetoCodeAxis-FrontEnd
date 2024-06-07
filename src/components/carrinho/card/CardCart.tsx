import { Pencil, Trash } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import Curso from "../../../models/Curso"
import { useContext } from "react"
import { CartContext } from "../../../contexts/CartContext"

interface CardCursoProps {
  curso: Curso
}

function CardCursos({ curso }: CardCursoProps) {

  const { removerCurso } = useContext(CartContext)
  
  return (
    <div className='flex flex-col rounded-lg overflow-hidden justify-between bg-white my-2'>
       <div className='py-4'>

        <img src={curso.imagem} className='mt-1 h-44 max-w-75 mx-auto' alt={curso.titulo} />

        <div className='p-2'>
          <p className='text-sm text-center uppercase'>{curso.titulo}</p>
          <h3 className='text-xl text-center font-bold uppercase'>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(curso.valor)}
          </h3>
          <p className='text-sm italic text-center'>Categoria: {curso.categoria?.categoria}</p>
        </div>
      <div className="flex flex-wrap px-4">
        <button className='m-1 w-full border-2 border-cerulean rounded-3xl text-white bg-prussian-blue hover:bg-cerulean flex items-center justify-center py-2 shadow-xl'
          onClick={() => removerCurso(curso.id)}>
          Remover
        </button>
      </div>
    </div >
    </div>
  )
}

export default CardCursos