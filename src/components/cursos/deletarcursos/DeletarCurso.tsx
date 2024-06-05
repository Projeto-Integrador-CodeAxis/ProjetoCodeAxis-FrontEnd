import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { buscar, deletar } from '../../../services/Service'
import { AuthContext } from '../../../contexts/AuthContext'
import Curso from '../../../models/Curso'

function DeletarCurso() {
    const [curso, setCurso] = useState<Curso>({} as Curso)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/cursos/${id}`, setCurso, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/cursos")
    }

    async function deletarCurso() {
        try {
            await deletar(`/cursos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Curso deletado com sucesso')

        } catch (error) {
            alert('Erro ao deletar Curso')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 h-5/6 mx-auto'>
            <h1 className='text-4xl text-center my-4 text-white'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4 text-white'>Você tem certeza de que deseja deletar a categoria a seguir?</p>

            <div className='bg-light-gray border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='bg-gradient-to-l from-prussian-blue to-cerulean py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>Curso</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{curso.titulo}</p>
                <div className="flex">
                    <button className='bg-cerulean text-white bg-red-400 hover:bg-red-600 w-full py-2 hover:bg-celestial-blue' onClick={retornar}>Não</button>
                    <button className='text-white bg-wine-red w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center hover:bg-fire-brick' onClick={deletarCurso}>
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCurso;






























