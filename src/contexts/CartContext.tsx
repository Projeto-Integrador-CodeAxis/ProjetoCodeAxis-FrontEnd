import { createContext, ReactNode, useState } from "react";
import Curso from "../models/Curso";
import { ToastAlert } from "../utils/ToastAlert";

interface CartContextProps {
    adicionarCurso: (curso: Curso) => void
    removerCurso: (cursoId: number) => void
    limparCart: () => void
    items: Curso[]
    quantidadeItems: number
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {

    const [items, setItems] = useState<Curso[]>([])

    const quantidadeItems = items.length

    function adicionarCurso(curso: Curso) {
        const indice = items.find(items => items.id === curso.id)
        if(indice !== undefined){
            ToastAlert('Este Curso já foi Adicionado!', 'info')
        }else{
            setItems(state => [...state, curso])
            ToastAlert('Curso Adicionado!', 'sucesso')
        }
    }

    function removerCurso(cursoId: number) {
        const indice = items.findIndex(items => items.id === cursoId)
        let novoCart = [...items]

        if(indice >= 0){
            novoCart.splice(indice, 1)
            setItems(novoCart)
        }

    }

    function limparCart() {
        ToastAlert('Compra Efetuada com Sucesso', 'sucesso')
        setItems([])
    }

    return (
        <CartContext.Provider 
            value={{ adicionarCurso, removerCurso, limparCart, items, quantidadeItems }}
        >
            {children}
        </CartContext.Provider>
    )
}