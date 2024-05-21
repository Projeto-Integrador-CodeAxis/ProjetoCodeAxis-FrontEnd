import { EnvelopeSimple, GithubLogo } from "@phosphor-icons/react";
import './Footer.css'

function Footer(){
    return(
        <>
            <div className="bg-transparent flex flex-col items-center justify-center py-2 space-y-2 text-white font-poppins">
                <div className="text-center">
                    <h6 className="text-lg">2024 - CodeAxis | Copyright &copy;</h6>
                    <p>Entre em contato e conheça os nossos projetos</p>
                </div>
                <div className="flex flex-space-x-1.5">
                    <GithubLogo size={32} color="#ffffff" alt="Logo GitHub" />
                    <EnvelopeSimple size={32} color="#ffffff" alt="Logo e-mail" />
                </div>
            </div>
        
        </>
    );  
}
export default Footer;