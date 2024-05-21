import { GithubLogo } from "@phosphor-icons/react";
import "./Contatos.css";

function Contatos() {
  return (
    <>
      <div className="flex flex-row min-h-screen px-36">
        <div className="flex flex-col justify-center align-center w-1/2 ">
          <h1 className="text-white font-poppins font-semibold text-6xl">
            Nos contate!
          </h1>
          <p className="text-white font-sans font-light text-xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            asperiores deleniti, explicabo ullam, ratione blanditiis similique,
            nobis laborum sunt pariatur deserunt! Saepe error dolor expedita
            dignissimos illum natus dolorum commodi.
          </p>

        <div className="flex flex-row justify-start align-center mt-5 
        gap-2 border border-white w-1/3 text-center rounded-lg">


        <GithubLogo className='text-white' size={60} weight="thin" />
        <h1 className="text-white font-poppins font-semibold 
        text-sm p-2 text-center">Respositorio</h1>

        </div>
        </div>

        
        <div className="min-h-screen flex items-center justify-center p-4 ml-60">
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
