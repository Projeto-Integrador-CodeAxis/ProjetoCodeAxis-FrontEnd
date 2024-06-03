import { useState, useContext, ChangeEvent, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import Categoria from "../../models/Categoria"
import { atualizar, buscar, cadastrar } from "../../services/Service"
import { RotatingLines } from "react-loader-spinner"



function FormCategoria() {


    const navigate = useNavigate()
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token
    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                //alert('O token expirou!')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate('/categorias')
    }


    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {

            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: {'Authorization': token }
                });
                alert('Categoria atualizada com sucesso!');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                   // alert('O token Expirou!')
                    handleLogout()
                } else {
                    alert('Erro ao atualizar a Categoria!')
                    
                }
            }

        }else {

            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': token }
                });
                alert('Categoria cadastrada com sucesso!');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    //alert('O token Expirou!')
                    handleLogout()
                } else {
                    alert(`Erro ao atualizar a Categoria! ` )
                }
            }

        }

        setIsLoading(false)
        retornar()
        
    }

    console.log(JSON.stringify(categoria))
    console.log(token)
   
    const carregandoCategoria = categoria.categoria === '';
    

    return (
        <>
        
        <section className="container_cadastro flex flex-row text-white text h-screen w-screen">
            <div className="container_cadastro_textos flex flex-col gap-y-10 px-32 justify-center w-1/2">
                <div >
                    <h1 className="text-6xl font-semibold font-poppins text-center">{id !== undefined ? 'Editar Categoria' : 'Cadastrar Categoria'}</h1>
                </div>

                
                <div className="container_cadastro_textos-categorias flex flex-col text-xl gap-y-9 pl-[5%]">
                    <h2 className="font-poppins font-semibold">Nossas Categorias:</h2>
                    <p className="font-sans">JavaScript</p>
                </div>
            </div>

            <div className="container_cadastro_form flex h-screen w-1/2 justify-center items-center">
            
            
            <form className="container_cadastro_form-formulario text-black flex flex-col justify-center items-center 
            bg-celestial-blue w-3/5
            rounded-2xl gap-y-8 box-border p-4 shadow-white"
            onSubmit={gerarNovaCategoria} >
                <h1 className="text-white font-poppins font-semibold text-2xl mb-6">
                    Insira sua Categoria:
                </h1>
                    <div className="flex w-full justify-center">
                        <input
                            id="categoria"
                            type="text"
                            name="categoria"
                            placeholder="Categoria"
                            className="w-[80%] h-[55px] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                            placeholder-font-poppins border-2 border-white shadow "
                            value={categoria.categoria}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div> 

                    

                    <div className="flex flex-row justify-center items-center gap-4 w-[70%]">
                            
                            <Link to='/categorias'>
                                <button className="w-[330px] rounded-lg
                                    border-2 border-white text-white font-poppins font-semibold
                                    hover:border-prussian-blue h-12"
                                    style={{ backgroundColor: "rgba(0, 46, 78, 0.5)" }}>Cancelar</button>
                            </Link>
                            <button
                                type='submit'
                                className="w-[330px] h-12 rounded-lg
                                border-2 border-white text-white font-poppins font-semibold
                                hover:border-prussian-blue justify-center items-center flex"
                                disabled = {carregandoCategoria}
                                style={{ backgroundColor: "rgba(0, 46, 78, 0.5)" }}
                                >
                            {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }

                        
                            </button>
                    </div>
            
            </form>
            
            </div>
        </section>
        </>
    )

}
export default FormCategoria;


