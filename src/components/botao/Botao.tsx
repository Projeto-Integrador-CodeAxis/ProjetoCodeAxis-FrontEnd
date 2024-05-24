import React from 'react';

interface BotaoProps {
  texto: string;
  link: string;
  width: number
  height: number
  borderTop:number
  borderLeft:number
  borderRight:number
  borderBotton:number
}

const Botao: React.FC<BotaoProps> = ({ texto, link, width, height, borderBotton, borderLeft, borderRight, borderTop}) => {
  return (

    <>
    
    <a href={link} className={`text-white font-poppins font-medium 
      bg-celestial-blue border border-celestial-blue 
      hover:bg-prussian-blue hover:text-celestial-blue 
      rounded-tr-3xl rounded-br-3xl rounded-tl-3xl 
      flex justify-center items-center text-center 
      transition duration-500`}
      style={{ width: `${width}px`, height:`${height}px`, borderTop:`${borderTop}px`, borderRight:`${borderRight}px`, borderLeft:`${borderLeft}px`, borderBottom:`${borderBotton}px` }}>
      {texto}
    </a>
    
    </>

  );
};

export default Botao;
