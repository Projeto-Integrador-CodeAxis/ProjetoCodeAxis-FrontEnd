import { useState, useContext, useEffect } from "react"
import { ThreeDots } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar } from "../../../services/Service"
import Categoria from "../../../models/Categoria"
import CardCategorias from "../cardcategorias/CardCategorias"
import { ToastAlert } from "../../../utils/ToastAlert";

function ListaCategorias() {

    const navigate = useNavigate()

    const [categorias, setTemas] = useState<Categoria[]>([])

    const {usuario, handleLogout} = useContext(AuthContext)
    const token = usuario.token

    async function buscarCategorias() {
        try{
            await buscar(`/categorias`, setTemas,{
                headers: {Authorization: token}
            })
        } catch (error: any){
            if(error.toString().includes('401')){
                ToastAlert('O token expirou!','erro')
                handleLogout()
            }
        }
        
    }

    useEffect(() => {
        if (token === ''){
            ToastAlert('Você precisa estar logado!','erro')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
        

        <div className="flex justify-center w-full my-4"> 
        {categorias.length === 0 && (
            <ThreeDots 
            visible={true}
            height="80"
            width="80"
            ariaLabel="three-dots-loading"
            wrapperClass="three-dots-wrapper mx-auto"
            color="#1e9bebff"
        />
        )}

</div>
        
            <div className="flex justify-center w-full my-4 h-full">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
                        <>
                            {categorias.map((categoria) => (
                                <>
                                    <CardCategorias key={categoria.id} categoria={categoria} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ListaCategorias;