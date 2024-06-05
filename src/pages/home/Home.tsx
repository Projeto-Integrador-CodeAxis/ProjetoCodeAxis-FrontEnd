import { useEffect, useState } from 'react';
import Botao from '../../components/botao/Botao';
import './Home.css'



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

console.log("é mobile" + isMobile);


    return (
        <main className="container_home grid grid-cols-2 text-white text h-screen ">
            <div className="container_home_textos flex flex-col gap-y-20 px-32 justify-center">
                <div className='container_home_textos-h1' >
                    <h1 className="text-6xl font-semibold font-poppins pb-20">Sua nova escola de tecnologia!</h1>
                </div>

                <div className='container_navbar_botao flex justify-start text-lg gap-x-9 mt-[-120px] pt-10'>
                
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

                <div className="container_home_textos-categorias flex flex-col text-xl mt-1 ">
                    <h2 className="font-poppins font-semibold ">Promovendo inclusão digital através da educação.</h2>
                </div>
            </div>

            <div className="container_home_fotos flex  overflow-hidden h-screen justify-end mr-[150px]">
                <div className="container_home_fotos-1 flex flex-col items-center gap-y-4">
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%201.png?updatedAt=1716308378516" alt="" />
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%206.png?updatedAt=1716308378584" alt="" />
                </div>

                <div className="container_home_fotos-2 flex flex-col items-center justify-end gap-y-[26px]">
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%202.png?updatedAt=1716308378682" alt="" />
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%203.png?updatedAt=1716308378886" alt="" />
                </div>

                <div className="container_home_fotos-3 flex flex-col items-center gap-y-[24px]">
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%204.png?updatedAt=1716308378509" alt="" />
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%205.png?updatedAt=1716308378518" alt="" />
                </div>
            </div>
        </main>
    )
}

export default Home;