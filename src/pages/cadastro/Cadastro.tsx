import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Botao from "../../components/botao/Botao";
import "./Cadastro.css"
import { ToastAlert } from "../../utils/ToastAlert"

function Cadastro(){

    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 500px)").matches);

    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.matchMedia("(max-width: 500px)").matches);
    };

      // Adiciona o event listener para mudanças no tamanho da tela
    window.addEventListener('resize', handleResize);

      // Chama handleResize para verificar o tamanho da tela inicialmente
    handleResize();

      // Limpa o event listener quando o componente é desmontado
    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);

    // até aqui eraa logica do botão


    
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [confirmaSenha, setConfirmaSenha] = useState<string>('');
    const [usuario,setUsuario] = useState<Usuario>({
        id: 0,
        nome:'',
        usuario:'',
        senha:'',
        roles: '',
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
            ToastAlert('Usuário cadastrado com sucesso!','sucesso');
    
          } catch (error) {
            ToastAlert('Erro ao cadastrar o usuário!','erro')
          }
    
        } else {
            ToastAlert("Dados estão inconsistentes! Verifique os dados do usuário.",'info');
          setUsuario({ ...usuario, senha: '' });
          setConfirmaSenha('');
        }
    
        setIsLoading(false)
      }

    
    return (
        <>
        <section className="container_cadastro flex flex-row text-white text h-screen w-screen">
            <div className="container_cadastro_textos flex flex-col gap-y-10 px-32 justify-center w-1/2">
                <div >
                    <h1 className="text-6xl font-semibold font-poppins text-center">Sua nova escola de tecnologia!</h1>
                </div>

                <div className="flex gap-x-9 justify-center">
                <Botao
                    texto={isMobile ? "Login" : "Fazer Login"}
                    link="/login"
                    width={isMobile ? 100 : 200}
                    height={isMobile ? 30 : 50}
                    borderRadiusTopRight={25}
                    borderRadiusBottomRight={25}
                    borderRadiusTopLeft={25}
                    borderRadiusBottomLeft={0}/>
                <Botao
                    texto={isMobile ? "Inicio" : "Pagina Inicial"}
                    link="/"
                    width={isMobile ? 100 : 200}
                    height={isMobile ? 30 : 50}
                    borderRadiusTopRight={25}
                    borderRadiusBottomRight={0}
                    borderRadiusTopLeft={25}
                    borderRadiusBottomLeft={25}/>
                </div>

                <div className="container_cadastro_textos-categorias flex flex-col text-xl gap-y-9 pl-[5%]">
                    <h2 className="font-poppins font-semibold">Nossas Categorias:</h2>
                    <p className="font-sans">JavaScript</p>
                </div>
            </div>

            <div className="container_cadastro_form flex h-screen w-1/2 justify-center items-center">
            
            
            <form className="container_cadastro_form-formulario text-black flex flex-col justify-center items-center 
            bg-celestial-blue w-3/5
            rounded-2xl gap-y-8 box-border p-4 shadow-white" onSubmit={cadastrarNovoUsuario}>
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


