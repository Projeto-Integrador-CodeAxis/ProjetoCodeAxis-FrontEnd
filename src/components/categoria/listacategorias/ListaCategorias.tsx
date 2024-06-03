import { useState, useContext, useEffect } from "react"
import { DNA } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar } from "../../../services/Service"
import Categoria from "../../../models/Categoria"
import CardCategorias from "../cardcategorias/CardCategorias"

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
                alert('O token expirou!')
                handleLogout()
            }
        }
        
    }

    useEffect(() => {
        if (token === ''){
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
        {/* Substituir spinner */}
        {categorias.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
        
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