import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import CardCart from "./CardCart";


function Cart() {

    const navigate = useNavigate();
    
    const { items, limparCart } = useContext(CartContext)
    
    return (
        <div className="
                bg-gray-200 
                flex 
                flex-col
                justify-center
                mb-10">

            <h1 className="text-center my-4 text-white text-4xl font-semibold font-poppins">
                Carrinho de Compras
            </h1>
            <h2 className="text-2xl text-center my-4 text-white font-poppins">
                { items.length === 0 ? 'O Carrinho está vazio!' : ''}
            </h2>
            <div className='container mx-20 grid grid-cols-1 
                            md:grid-cols-2 lg:grid-cols-5 gap-6 font-poppins items-center'>
                {
                    items.map(curso => (
                        <CardCart key={curso.id} curso={curso} />
                    ))
                }
            </div>

            <button className="text-black rounded text-slate-100 bg-white w-1/4 py-2 mx-auto mt-10 flex 
            justify-center font-poppins shadow "
                type="submit" 
                disabled={items.length === 0 ? true : false}
                onClick={limparCart}>
                Finalizar Compra
            </button>
        </div>
    )
}

export default Cart