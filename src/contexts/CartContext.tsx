import { createContext, ReactNode, useState } from "react";
import Curso from "../models/Curso";
//import { ToastAlerta } from "../utils/ToastAlerta";

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

    // Estado que armazenará os Cursos do Carrinho
    const [items, setItems] = useState<Curso[]>([])

    // Estadoque retorna o número de itens do Carrinho
    const quantidadeItems = items.length

    // Função para adicionar Cursos no Carrinho
    function adicionarCurso(curso: Curso) {
        const indice = items.find(items => items.id === curso.id)
        if(indice !== undefined){
            //ToastAlerta('Este Curso já foi Adicionado!', 'info')
        }else{
            setItems(state => [...state, curso])
            //ToastAlerta('Curso Adicionado!', 'sucesso')
        }
    }

    // Função para Remover um curso especifico do Carrinho
    function removerCurso(cursoId: number) {
        const indice = items.findIndex(items => items.id === cursoId)
        let novoCart = [...items]

        if(indice >= 0){
            novoCart.splice(indice, 1)
            setItems(novoCart)
        }

    }

    // Função para Limpar o Carrinho
    function limparCart() {
        //ToastAlerta('Compra Efetuada com Sucesso', 'sucesso')
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