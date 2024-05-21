import React from 'react';

interface BotaoProps {
  texto: string;
  link: string;
}

const Botao: React.FC<BotaoProps> = ({ texto, link }) => {
  return (

    <>
    <div>
    <a href={link} className="text-white font-poppins font-medium bg-celestial-blue border border-celestial-blue px-4 py-2 hover:bg-prussian-blue hover:text-celestial-blue rounded-tr-3xl rounded-br-3xl rounded-bl-3xl">
      {texto}
    </a>
    </div>
    </>

  );
};

export default Botao;
