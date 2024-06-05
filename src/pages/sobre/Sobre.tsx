import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import './Sobre.css'
function Sobre(){
    return(
        <>
        <div className=" flex justify-center items-center min-h-[60vh] ml-40">
            <div className="container grid grid-cols-2 text-white">
                <div className="max-w-7xl flex flex-col  gap-4 justify-center py-2 text-left ">
                    <h2 className="text-5xl font-bold p-5 ">Organização</h2>
                    <ul className="list-disc">
                        <li className="text-2xl text-left p-2">Missão: Prover acesso à educação de qualidade capacitando pessoas para um futuro profissional promissor.</li>
                        <li className="text-2xl text-left p-2">Visão: Desenvolver um projeto que faça a diferença, onde impacta positivamente a vida das pessoas.</li>
                        <li className="text-2xl text-left p-2">Valores: Inclusão, inovação, acessibilidade, equidade, e sustentabilidade.</li>
                    </ul>

                    <div className="flex justify-around gap-4"> 
                    </div>
                </div> 

                <div className="max-w-7xl flex  flex-col items-center justify-center">
                    <img src="https://ik.imagekit.io/codeaxis/Home%20Page/educacao-de-qualidade.png?updatedAt=1716310266131" 
                    alt="Imagem da pagina home"
                    className="border-solid w-2/3" />
                </div>
            </div>
       </div>
       <div className=" flex justify-center min-h-[0vh]">
        <div className="container border-solid align-middle text-white ">
            <div className=" flex flex-col items-center gap-4 justify-center py-6 ">
                <h2 className=" text-5xl font-bold ">Quem somos</h2>
                <p className="text-xl text-center my-5 mb-20">O CodeAxis é uma plataforma de e-commerce dedicada a oferecer cursos de tecnologia para pessoas de <br />baixa renda ou em situação de risco social. 
                Este projeto visa proporcionar uma educação de qualidade, <br />alinhada ao Objetivo de Desenvolvimento Sustentável 4 - Educação de Qualidade - da ONU. </p>
                <div className="flex justify-around gap-4">
            </div>
            </div> 
            
        </div>
       </div>

       <div className="flex justify-center min-h-[0vh]">
        <div className=" container grid grid-cols-3 flex-row align-middle text-white justify-items-center mt-20  ">

                <div className='flex items-center mb-40'>
                    <div className='flex flex-col items-center bg-celestial-blue w-96 rounded-2xl shadow'>
                        <div className='mt-[-120px]'>
                        <img src="https://avatars.githubusercontent.com/u/136142475?v=4"
                        alt=""
                        className="rounded-full w-48 border-white border-4" />
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-bold text-2xl'>Adriel Modesto Martineli</h1>
                            
                        </div>
                        <div className='flex p-4 gap-2'>
                            <a href="https://www.linkedin.com/in/adriel-martineli-57a0551b7/" target='_blank'>
                            <LinkedinLogo size={40} />
                            </a>
                            <a href="https://github.com/AdrielMartineli" target='_blank'>
                            <GithubLogo size={40} />
                        </a>
                        </div>
                    </div>
                </div>
                
                <div className='flex items-center mb-40'>
                    <div className='flex flex-col items-center bg-celestial-blue w-96 rounded-2xl shadow'>
                        <div className='mt-[-120px]'>
                        <img src="https://avatars.githubusercontent.com/u/162627715?v=4"
                        alt=""
                        className="rounded-full w-48 border-white border-4" />
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-bold text-2xl'>Ana Clara De Alencar</h1>
                            
                        </div>
                        <div className='flex p-4 gap-2'>
                            <a href="https://www.linkedin.com/in/anaclara-de-alencar/" target='_blank'>
                            <LinkedinLogo size={40} />
                            </a>
                            <a href="https://github.com/anaclaraalencar" target='_blank'>
                            <GithubLogo size={40} />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className='flex items-center mb-40'>
                    <div className='flex flex-col items-center bg-celestial-blue w-96 rounded-2xl shadow'>
                        <div className='mt-[-120px]'>
                        <img src="https://avatars.githubusercontent.com/u/162219194?v=4"
                        alt=""
                        className="rounded-full w-48 border-white border-4" />
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-bold text-2xl'>André Luiz Nascimento Pinto</h1>
                            
                        </div>
                        <div className='flex p-4 gap-2'>
                            <a href="https://www.linkedin.com/in/https://www.linkedin.com/in/andrenas95//" target='_blank'>
                            <LinkedinLogo size={40} />
                            </a>
                            <a href="https://github.com/andrenas95" target='_blank'>
                            <GithubLogo size={40} />
                            </a>
                        </div>
                    </div>
                </div>
            
                <div className='flex items-center mb-40'>
                    <div className='flex flex-col items-center bg-celestial-blue w-96 rounded-2xl shadow'>
                        <div className='mt-[-120px]'>
                        <img src="https://avatars.githubusercontent.com/u/131809585?v=4"
                        alt=""
                        className="rounded-full w-48 border-white border-4" />
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-bold text-2xl'>Daniele Campos Ferreira</h1>
                            
                        </div>
                        <div className='flex p-4 gap-2'>
                            <a href="https://www.linkedin.com/in/daniele-campos-ferreira/" target='_blank'>
                            <LinkedinLogo size={40} />
                            </a>
                            <a href="https://github.com/daniele0118" target='_blank'>
                            <GithubLogo size={40} />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className='flex items-center mb-40'>
                    <div className='flex flex-col items-center bg-celestial-blue w-96 rounded-2xl shadow'>
                        <div className='mt-[-120px]'>
                        <img src="https://avatars.githubusercontent.com/u/121838715?v=4"
                        alt=""
                        className="rounded-full w-48 border-white border-4" />
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-bold text-2xl'>Igor Fernandes Quaresma</h1>
                            
                        </div>
                        <div className='flex p-4 gap-2'>
                            <a href="https://www.linkedin.com/in/ifernandesq/" target='_blank'>
                            <LinkedinLogo size={40} />
                            </a>
                            <a href="https://github.com/IgorFernandesQuaresma" target='_blank'>
                            <GithubLogo size={40} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex items-center mb-40'>
                    <div className='flex flex-col items-center bg-celestial-blue w-96 rounded-2xl shadow'>
                        <div className='mt-[-120px]'>
                        <img src="https://avatars.githubusercontent.com/u/120491040?v=4"
                        alt=""
                        className="rounded-full w-48 border-white border-4" />
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-bold text-2xl'>Jessica Costa Ignácio</h1>
                            
                        </div>
                        <div className='flex p-4 gap-2'>
                            <a href="https://www.linkedin.com/in/jessicaignacio/" target='_blank'>
                            <LinkedinLogo size={40} />
                            </a>
                            <a href="https://github.com/eijess" target='_blank'>
                            <GithubLogo size={40} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex items-center mb-40'>
                    <div className='flex flex-col items-center bg-celestial-blue w-96 rounded-2xl shadow'>
                        <div className='mt-[-120px]'>
                        <img src="https://avatars.githubusercontent.com/u/117844737?v=4"
                        alt=""
                        className="rounded-full w-48 border-white border-4" />
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-bold text-2xl'>Jhulieny Bucci</h1>
                            
                        </div>
                        <div className='flex p-4 gap-2'>
                            <a href="https://www.linkedin.com/in/jhulieny-bucci-72ba55232/" target='_blank'>
                            <LinkedinLogo size={40} />
                            </a>
                            <a href="https://github.com/JhulienyB" target='_blank'>
                            <GithubLogo size={40} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex items-center mb-40'>
                    <div className='flex flex-col items-center bg-celestial-blue w-96 rounded-2xl shadow'>
                        <div className='mt-[-120px]'>
                        <img src="https://avatars.githubusercontent.com/u/149630140?v=4"
                        alt=""
                        className="rounded-full w-48 border-white border-4" />
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-bold text-2xl text-center'>Michel Cavalcante</h1>
                            
                        </div>
                        <div className='flex p-4 gap-2'>
                            <a href="https://www.linkedin.com/in/dev-cavalcante/" target='_blank'>
                            <LinkedinLogo size={40} />
                            </a>
                            <a href="https://github.com/mcavalcantedesouza" target='_blank'>
                            <GithubLogo size={40} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex items-center mb-40'>
                    <div className='flex flex-col items-center bg-celestial-blue w-96 rounded-2xl shadow'>
                        <div className='mt-[-120px]'>
                        <img src="https://avatars.githubusercontent.com/u/162521119?v=4"
                        alt=""
                        className="rounded-full w-48 border-white border-4" />
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-bold text-2xl text-center'>Mariah Caroline P. G. Oliveira</h1>
                            
                        </div>
                        <div className='flex p-4 gap-2'>
                            <a href="https://www.linkedin.com/in/a-mariah-garcia/" target='_blank'>
                            <LinkedinLogo size={40} />
                            </a>
                            <a href="https://github.com/Mariahcpgo" target='_blank'>
                            <GithubLogo size={40} />
                            </a>
                        </div>
                    </div>
                </div>            
        </div>
       </div>
        </>
    );
}
export default Sobre;