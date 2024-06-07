import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { buscar, deletar } from '../../../services/Service'
import { AuthContext } from '../../../contexts/AuthContext'
import Curso from '../../../models/Curso'
import { ToastAlert } from '../../../utils/ToastAlert'

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
                ToastAlert('O token expirou, favor logar novamente','info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlert('Você precisa estar logado','erro')
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

            ToastAlert('Curso deletado com sucesso','sucesso')

        } catch (error) {
            ToastAlert('Erro ao deletar Curso','erro')
        }

        retornar()
    }
    return (
        
        <div className='container w-1/3 h-5/6 mx-auto'>
            <h1 className='text-4xl font-semibold font-poppins text-center my-4 text-white'>Deletar Curso</h1>

            <p className='text-center mb-4 p-2 text-white'>Você tem certeza de que deseja deletar o curso?</p>

            <div className='bg-light-gray flex flex-col rounded-2xl overflow-hidden justify-between shadow mx-10 border mb-6 -mt-[5px]'>
                <header className='bg-gradient-to-l from-prussian-blue to-cerulean py-2 px-6 bg-indigo-800 text-white font-semibold text-2xl flex flex-row gap-4'>Curso</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{curso.titulo}</p> 
                </div>

                <div className="flex gap-4 justify-center">
                    <button className='w-1/3 rounded-lg border-2 border-celestial-blue text-white font-poppins font-semibold  bg-cerulean hover:border-white hover:bg-celestial-blue h-12 flex items-center justify-center' 
                       onClick={retornar}>Não</button>
                    <button className='w-1/3 rounded-lg border-2 border-red text-white font-poppins font-semibold bg-wine-red hover:border-white text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center hover:bg-fire-brick' 
                       onClick={deletarCurso}>Deletar</button>
                </div>
            
        </div>
    )
}

export default DeletarCurso;






























