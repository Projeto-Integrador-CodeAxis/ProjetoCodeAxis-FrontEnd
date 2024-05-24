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

const Botao: React.FC<BotaoProps> = ({ texto, link, width, height, 
  borderRadiusTopRight,
  borderRadiusBottomRight,
  borderRadiusTopLeft,
  borderRadiusBottomLeft }) => {
  return (

    <>
    
    <a href={link} className={`text-white font-poppins font-medium 
      bg-celestial-blue border border-celestial-blue 
      hover:bg-prussian-blue hover:text-celestial-blue 
      flex justify-center items-center text-center 
      transition duration-500`}

      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderTopRightRadius: `${borderRadiusTopRight}px`,
        borderBottomRightRadius: `${borderRadiusBottomRight}px`,
        borderTopLeftRadius: `${borderRadiusTopLeft}px`,
        borderBottomLeftRadius: `${borderRadiusBottomLeft}px`
      }}
    >
      {texto}
    </a>
    
    </>

  );
};

export default Botao;