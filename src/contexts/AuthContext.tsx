import { ReactNode, createContext, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service";
import { ToastAlert } from "../utils/ToastAlert";


interface AuthContextProps{
    usuario: UsuarioLogin;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    isLoading: boolean;
}

interface AuthProviderProps{
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({children}: AuthProviderProps){

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        foto: '',
        usuario: '',
        senha: '',
        roles: '',
        token: ''
    });

  

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(userLogin: UsuarioLogin ){
        setIsLoading(true);

        try{

            await login(`/usuarios/logar`, userLogin, setUsuario)
            ToastAlert("Usuário autenticado com sucesso!",'sucesso');
            setIsLoading(false);
        
            
        }catch(error){
            ToastAlert("Dados do Usuário inconsistentes!",'erro');
            setIsLoading(false);

        }
        
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            foto: '',
            usuario: '',
            senha: '',
            roles: '',
            token: ''
        })
    }

    return(
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
    
}