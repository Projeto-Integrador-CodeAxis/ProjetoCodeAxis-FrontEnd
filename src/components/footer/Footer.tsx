import { EnvelopeSimple, GithubLogo } from "@phosphor-icons/react";
import './Footer.css'

function Footer(){
    return(
        <>
            <div className="h-screen container_footer bg-transparent flex flex-col w-screen items-center justify-center py-2 space-y-2 text-white font-poppins">
                <div className="container_footer_textos text-center">
                    <h6 className="text-lg">2024 - CodeAxis | Copyright &copy;</h6>
                    <p>Entre em contato e conheça os nossos projetos</p>
                </div>
                <div className="container_footer_icon flex flex-space-x-1.5 gap-2">
                <a href="https://github.com/Projeto-Integrador-CodeAxis" target="_blank">
                    <GithubLogo className="container_footer_icon-icon transition-opacity duration-300 hover:opacity-75" size={32} color="#ffffff" alt="Logo GitHub" />
                </a>
                <a href="mailto:codeaxis3@gmail.com">
                    <EnvelopeSimple className="container_footer_icon-icon transition-opacity duration-300 hover:opacity-75" size={32} color="#ffffff" alt="Logo e-mail" />
                </a>
                </div>
            </div>
        
        </>
    );  
}
export default Footer;