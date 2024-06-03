import "./Contatos.css";
import Botao from "../../components/botao/Botao";
import { useEffect, useState } from "react";

function Contatos() {

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


  
  return (
    <>
      <div className="flex flex-row min-h-screen px-36 min-w-screen">

        <div className="flex flex-col justify-center item-center w-2/3 p-6">
          <h1 className="text-white font-poppins font-semibold text-6xl">
            Nos contate!
          </h1>
          <p className="text-white font-sans font-light text-xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            asperiores deleniti, explicabo ullam, ratione blanditiis similique,
            nobis laborum sunt pariatur deserunt! Saepe error dolor expedita
            dignissimos illum natus dolorum commodi.
          </p>
 

                <Botao  
                    texto={'Repositorio'}
                    link="https://github.com/Projeto-Integrador-CodeAxis"
                    width={isMobile ? 100 : 200}
                    height={isMobile ? 30 : 50}
                    borderRadiusTopRight={25}
                    borderRadiusBottomRight={25}
                    borderRadiusTopLeft={25}
                    borderRadiusBottomLeft={0}/>
        
        </div>

        
        <div className="min-h-screen flex items-center justify-center p-4 w-1/2">
          <form className=" bg-celestial-blue flex flex-col justify-center 
          items-center p-8 widht-450 height-550 rounded-3xl shadow-white">
            <div className="mb-8">
              <label
                htmlFor="nome"
                className="block text-sm font-sans font-medium text-white"
              ></label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                required
                className="w-[330px] h-[55px] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                      placeholder-font-poppins border-2 border-white shadow "
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="usuario"
                className="block text-sm font-sans font-medium text-white"
              ></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email"
                required
                className="w-[330px] h-[55px] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                      placeholder-font-poppins border-2 border-white shadow "
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="senha"
                className="block text-sm font-sans font-medium text-white"
              ></label>
              <input
                type="texto"
                id="assunto"
                name="teto"
                placeholder="Digite o assunto"
                required
                className="w-[330px] h-[55px] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                      placeholder-font-poppins border-2 border-white shadow "
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="confirmar-senha"
                className="block text-sm font-sans font-medium text-white"
              ></label>
              <input
                type="texto"
                id="Mensagem"
                name="Mensagem"
                placeholder="Digite sua mensagem"
                required
                className="w-[330px] h-[55px] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                      placeholder-font-poppins border-2 border-white shadow "
              />
            </div>

            <div className="">
              <button
                type="submit"
                className="w-[330px] h-[35px] rounded-lg
                    border-2 border-white text-white font-poppins font-semibold
                    hover:border-prussian-blue"
                    style={{ backgroundColor: 'rgba(0, 46, 78, 0.5)' }}
              >
                Enviar
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default Contatos;
