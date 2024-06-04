import { ArrowDown } from '@phosphor-icons/react';
import { useContext, useEffect, useState } from 'react';
import Curso from '../../models/Curso';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar } from '../../services/Service';
import { useNavigate } from 'react-router-dom';
import Categoria from '../../models/Categoria';

interface AccordionState {
    [key: string]: boolean;
}


function Aulas() {
    const [isOpen, setIsOpen] = useState<AccordionState>({});
    const toggleAccordion = (item: string) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [item]: !prevState[item],
        }));
    };

    const navigate = useNavigate();

    const [cursos, setCursos] = useState<Curso[]>([]);

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);

    const token = usuario.token;

    async function buscarPostagens() {
        try {
            await buscar('/cursos', setCursos, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()
    }, [cursos.length])

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length]) 


const setSrc = (link: string) => {
        const iframe = document.querySelector<HTMLIFrameElement>("#frame");
        if (iframe) {
            iframe.src = link;

            console.log(iframe.src)
        }
    };

    return (

        
    <div className='flex flex-row h-full container_aulas'>

    <div className='container_aulas__navmenu w-1/3 p-14' id="accordion-collapse" data-accordion="collapse">

    {categorias.map((categorias) => (

            
            <div key={categorias.id}>
                  <h2 id={`accordion-collapse-heading-${categorias.id}`} className="box-border bg-celestial-blue">
                    <button
                        type="button"
                        className="flex items-center justify-between 
                        w-full p-5 font-medium rtl:text-right text-gray-500 border 
                        border-b-0 border-white"
                        data-accordion-target={`#accordion-collapse-body-${categorias.id}`}
                                aria-expanded={isOpen[`item${categorias.id}`]}
                                aria-controls={`accordion-collapse-body-${categorias.id}`}
                                onClick={() => toggleAccordion(`item${categorias.id}`)}
                    >
                        <span className="text-white">{categorias.categoria}</span>
                        <ArrowDown className={`text-white w-10 h-6 shrink-0 transition-transform ${isOpen[`item${categorias.id}`] ? 'rotate-180' : ''}`} size={32} />
                    </button>
                </h2>

                <div
                            id={`accordion-collapse-body-${categorias.id}`}
                            className={`${isOpen[`item${categorias.id}`] ? '' : 'hidden'}`}
                            aria-labelledby={`accordion-collapse-heading-${categorias.id}`}>
                            {cursos.filter((curso) => curso.categoria?.id === categorias.id).map((curso) => (
                                <button onClick={() => setSrc(curso.link)} key={curso.id} className="bg-prussian-blue w-full hover:bg-black p-5 border border-white rounded-none">
                                    <span className="text-white mb-2">{curso.titulo}</span>
                                </button>
                            ))}
                        </div>

                
            </div>
))}
        
    </div>

        <div className='container_aulas__iframe flex justify-center w-[900px] h-[500px] 
        p-14 bg-celestial-blue rounded-xl'>
        <iframe id='frame' className='w-full' src="" frameBorder="0" allowFullScreen></iframe>
        </div>
    </div>
    );
}

export default Aulas;

