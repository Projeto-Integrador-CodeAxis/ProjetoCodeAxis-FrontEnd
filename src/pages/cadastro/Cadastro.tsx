import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function Cadastro(){
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [confirmaSenha, setConfirmaSenha] = useState<string>('');
    const [usuario,setUsuario] = useState<Usuario>({
        id: 0,
        nome:'',
        usuario:'',
        senha:'',
        foto:'',
    })
    useEffect(()=>{
        if(usuario.id !== 0){
            retornar();
        }
    },[usuario]);

    function atualizarEstado(e:ChangeEvent<HTMLInputElement>){
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    function retornar(){
        navigate('/login')
    }

    function handleConfirmaSenha(e:ChangeEvent<HTMLInputElement>){
        setConfirmaSenha(e.target.value);
    }

     async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {

        e.preventDefault();
    
        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
    
          setIsLoading(true)
    
          try {
    
            await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
            alert('Usuário cadastrado com sucesso!');
    
          } catch (error) {
            alert('Erro ao cadastrar o usuário!')
          }
    
        } else {
          alert("Dados estão inconsistentes! Verifique os dados do usuário.");
          setUsuario({ ...usuario, senha: '' });
          setConfirmaSenha('');
        }
    
        setIsLoading(false)
      }

    
    return (
        <>
            <section className="flex flex-row text-white text h-screen w-screen">
            <div className="flex flex-col gap-y-32 px-32 justify-center w-2/3">
                <div >
                    <h1 className="text-6xl font-semibold font-poppins text-center">Sua nova escola de tecnologia!</h1>
                </div>

                <div className="flex  gap-x-9 justify-center">
                <button className="rounded-tl-full rounded-tr-full rounded-br-full flex justify-center items-center gap-3 p-2  w-60 h-16 bg-black text-white">Fazer Login</button>
                    <button className="rounded-tl-full rounded-tr-full rounded-bl-full flex justify-center items-center gap-3 p-2 w-60 bg-custom-blue text-white">Pagina inicial</button>
                </div>

                <div className="flex flex-col text-xl gap-y-9 pl-[5%]">
                    <h2 className="font-poppins font-semibold">Nossas Categorias:</h2>
                    <p className="font-sans">JavaScript</p>
                </div>
            </div>

            <div className="flex h-screen w-1/2 justify-center items-center">
                
                <form className="text-black flex flex-col justify-center items-center bg-celestial-blue min-w-96 w-3/5 h-2/3 rounded-2xl gap-y-6" onSubmit={cadastrarNovoUsuario}>
                <h1 className="text-white font-poppins font-semibold text-2xl mb-6">
                    Preencha seus dados:
                  </h1>
                    <div className="flex w-full justify-center">
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            value={usuario.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="w-[80%] h-[55px] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                            placeholder-font-poppins border-2 border-white shadow "
                        />
                    </div> 

                    <div className="flex w-full justify-center">
                        <input
                            id="foto"
                            type="text"
                            name="foto"
                            placeholder="foto.com.br"
                            value={usuario.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="w-[80%] h-[55px] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                            placeholder-font-poppins border-2 border-white shadow "
                        />
                    </div> 

                    <div className="flex w-full justify-center">
                        <input
                            id="usuario"
                            type="text"
                            name="usuario"
                            placeholder="usuario@email.com"
                            value={usuario.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="w-[80%] h-[55px] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                            placeholder-font-poppins border-2 border-white shadow "
                        />
                    </div>

                    <div className="flex w-full justify-center">
                        <input
                            id="senha"
                            type="password"
                            name="senha"
                            placeholder="********"
                            value={usuario.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="w-[80%] h-[55px] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                            placeholder-font-poppins border-2 border-white shadow "
                        />
                    </div> 
                    
                    <div className="flex w-full justify-center">
                        <input
                            id="confirmarSenha"
                            type="password"
                            name="confirmarSenha"
                            placeholder="********"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmaSenha(e)}
                            value={confirmaSenha}
                            className="w-[80%] h-[55px] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                            placeholder-font-poppins border-2 border-white shadow "
                        />
                    </div>

                    <div className="flex flex-row justify-center items-center gap-4 w-[70%]">
                            
                            <button onClick={retornar} className="w-[330px] rounded-lg
                                border-2 border-white text-white font-poppins font-semibold
                                hover:border-prussian-blue h-12"
                                style={{ backgroundColor: "rgba(0, 46, 78, 0.5)" }}>Cancelar</button>
                            <button
                                type='submit'
                                className="w-[330px] h-12 rounded-lg
                                border-2 border-white text-white font-poppins font-semibold
                                hover:border-prussian-blue justify-center items-center flex"
                                style={{ backgroundColor: "rgba(0, 46, 78, 0.5)" }}
                                >
                                {isLoading ? <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                /> :
                                    <span>Cadastrar</span>
                                }
                            </button>
                    </div>

                </form>
            </div>
        </section>
        </>
    )

}
export default Cadastro;


