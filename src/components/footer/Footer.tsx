import { EnvelopeSimple, GithubLogo } from "@phosphor-icons/react";
import './Footer.css'

function Footer(){
    return(
        <>
            <div className="container_footer bg-transparent flex flex-col w-screen items-center justify-center py-2 space-y-2 text-white font-poppins ">
                <div className="container_footer_textos text-center">
                    <h6 className="text-lg">2024 - CodeAxis | Copyright &copy;</h6>
                    <p>Entre em contato e conheça os nossos projetos</p>
                </div>
                <div className="container_footer_icon flex flex-space-x-1.5 gap-2">
                    <GithubLogo className="container_footer_icon-icon transition-opacity duration-300 hover:opacity-75" size={32} color="#ffffff" alt="Logo GitHub" />
                    <EnvelopeSimple className="container_footer_icon-icon transition-opacity duration-300 hover:opacity-75" size={32} color="#ffffff" alt="Logo e-mail" />
                </div>
            </div>
        
        </>
    );  
}
export default Footer;