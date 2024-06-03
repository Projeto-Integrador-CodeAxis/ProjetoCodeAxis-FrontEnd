import {useNavigate } from "react-router-dom"
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import Botao from "../../components/botao/Botao";
import './Login.css'
import { RotatingLines } from "react-loader-spinner";


function Login(){

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

  // até aqui e aa logica do botão



  const navigate = useNavigate()

  const {usuario, handleLogin, isLoading} = useContext(AuthContext)

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin> (
    {} as UsuarioLogin)

  useEffect(() => {
    if(usuario.token !== ''){
        navigate("/")
    }
}, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
      setUsuarioLogin({
          ...usuarioLogin,
          [e.target.name]: e.target.value
      })
  }

  function login(e: ChangeEvent<HTMLFormElement>){
      e.preventDefault()
      handleLogin(usuarioLogin)
  }

console.log(JSON.stringify(usuarioLogin.usuario))



        return (
          <>
            <div className="container_login flex flex-row px-36 h-full ">
              <div className="container_login_textos flex flex-col justify-center item-center w-2/3 p-6">
                <h1 className="text-white font-poppins font-semibold text-6xl mb-6">
                  Sua nova escola de tecnologia!
                </h1>

                <p className="text-white font-sans font-light text-xl mb-8">
                  Plataforma de cursos desenvolvida pelo grupo 01 para fins de
                  termino de Bootcamp Generation Brasil
                </p>

                <Botao
                    texto={'Login'}
                    link="/login"
                    width={isMobile ? 100 : 200}
                    height={isMobile ? 30 : 50}
                    borderRadiusTopRight={25}
                    borderRadiusBottomRight={25}
                    borderRadiusTopLeft={25}
                    borderRadiusBottomLeft={0}/>
              </div>

              <div className="container_login_form flex items-center justify-center p-4 w-1/2">
                <form
                  className="container_login_form-forulario bg-celestial-blue flex flex-col justify-center 
                  items-center p-8 rounded-3xl shadow-white"
                  onSubmit={login}>
                  <h1 className="text-white font-poppins font-semibold text-2xl mb-6">
                    Preencha seus dados:
                  </h1>

                  <div className="mb-8">
                    <label
                      htmlFor="usuario"
                      className="block text-sm font-sans font-medium text-white">
                      </label>
                    <input
                      type="text"
                      id="usuario"
                      name="usuario"
                      placeholder="Digite seu email"
                      required
                      className="w-[330px] h-[55px] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                              placeholder-font-poppins border-2 border-white shadow "
                      value={usuarioLogin.usuario}
                      onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="block text-sm font-sans font-medium text-white">
                      </label>
                    <input
                      type="password"
                      id="senha"
                      name="senha"
                      placeholder="Digite sua senha"
                      required
                      className="w-[330px] h-[55px] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                              placeholder-font-poppins border-2 border-white shadow "
                      value={usuarioLogin.senha}
                      onChange={(e:ChangeEvent<HTMLInputElement>) =>
                        atualizarEstado(e)}
                    />
                  </div>

                  <div className="">
                  <button
                      type="submit"
                      className="w-[330px] h-[50px] rounded-lg
                            border-2 border-white text-white font-poppins font-semibold
                            hover:border-prussian-blue flex items-center justify-center"
                      style={{ backgroundColor: "rgba(0, 46, 78, 0.5)" }}>

                                {isLoading ? <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="20"
                                    visible={true}
                                /> :
                                    <span>Entrar</span>
                                }
                        
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        );
    }

    export default Login
