import { useContext, useEffect, useState } from 'react';
import Botao from '../../components/botao/Botao';
import './Home.css'
import { AuthContext } from '../../contexts/AuthContext';

function Home() {

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


const [logado, isLogado] = useState(false)

const {usuario} = useContext(AuthContext)

useEffect(() => {
    const usuarioLogado = () => {
        if (usuario.token) 
            isLogado(true);
        
    };

    usuarioLogado();
}, [usuario.token]);




    return (
        <main className="container_home grid grid-cols-2 text-white h-screen w-full ">
            <div className="container_home_textos flex flex-col gap-y-20 px-32 justify-center">
                <div className='container_home_textos-h1' >
                    <h1 className="text-6xl font-semibold font-poppins pb-20">Sua nova escola de tecnologia!</h1>
                </div>

                <div className={`container_navbar_botao flex justify-start text-lg gap-x-9 mt-[-120px] pt-10
                ${logado ? 'hidden' : 'flex'}`}>

                
                <Botao
                    texto="Entrar"
                    link="/login"
                    width={isMobile ? 100 : 200}
                    height={isMobile ? 30 : 50}
                    borderRadiusTopRight={25}
                    borderRadiusBottomRight={25}
                    borderRadiusTopLeft={25}
                    borderRadiusBottomLeft={0}/>

                <Botao
                    texto="Registrar"
                    link="/formcadastro"
                    width={isMobile ? 100 : 200}
                    height={isMobile ? 30 : 50}
                    borderRadiusTopRight={25}
                    borderRadiusBottomRight={0}
                    borderRadiusTopLeft={25}
                    borderRadiusBottomLeft={25}/>
                    
            </div>

                    <h2 className="font-poppins font-semibold text-xl mt-1 ">Promovendo inclusão digital através da educação.</h2>
                
            </div>

            <div className="container_home_fotos flex h-screen justify-center pr-[10%]">
                <div className="container_home_fotos-1 flex flex-col items-center justify-center w-1/3">
                    <img className="h-1/2" src="https://ik.imagekit.io/codeaxis/Home%20Page/3.png?updatedAt=1717597935180" alt="" />
                    <img className="h-1/2" src="https://ik.imagekit.io/codeaxis/Home%20Page/5.png?updatedAt=1717597936471" alt="" />
                </div>

                <div className="container_home_fotos-2 flex flex-col items-center justify-center w-1/3">
                    <img className="h-1/2" src="https://ik.imagekit.io/codeaxis/Home%20Page/2.png?updatedAt=1717599449387" alt="" />
                    <img className="h-1/2" src="https://ik.imagekit.io/codeaxis/Home%20Page/1.png?updatedAt=1717597852633" alt="" />
                </div>

                <div className="container_home_fotos-3 flex flex-col items-center justify-center w-1/3">
                    <img className="h-1/2" src="https://ik.imagekit.io/codeaxis/Home%20Page/6.png?updatedAt=1717597936824" alt="" />
                    <img className="h-1/2" src="https://ik.imagekit.io/codeaxis/Home%20Page/4.png?updatedAt=1717599615912" alt="" />
                </div>
            </div>
        </main>
    )
}

export default Home;
