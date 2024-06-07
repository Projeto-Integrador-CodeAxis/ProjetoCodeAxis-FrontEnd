import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import Curso from "../../../models/Curso";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlert } from "../../../utils/ToastAlert";


function FormCurso() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    
    const [categoria, setCategoria] = useState<Categoria>({
      id: 0,
      categoria: '',

    });
  
    const [curso, setCurso] = useState<Curso>({} as Curso);
  
    async function buscarCursoPorId(id: string) {
      await buscar(`/cursos/${id}`, setCurso, {
        headers: { Authorization: token },
      });
    }
  
    async function buscarCategoriaPorId(id: string) {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: token },
      });
    }
  
    async function buscarCategorias() {
      await buscar('/categorias', setCategorias, {
        headers: { Authorization: token },
      });
    }
  
    useEffect(() => {
      if (token === '') {
        ToastAlert('Você precisa estar logado','erro');
        navigate('/');
      }
    }, [token]);
  
    useEffect(() => {
      buscarCategorias();
      if (id !== undefined) {
        buscarCursoPorId(id);
        console.log(categoria);
  
      }
    }, [id]);
  
    useEffect(() => {
      setCurso({
        ...curso,
        categoria: categoria,
      });
    }, [categoria]);
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setCurso({
        ...curso,
        [e.target.name]: e.target.value,
        categoria: categoria,
        usuario: usuario,
      });
    }
  
    function retornar() {
      navigate('/cursos');
    }
  
    async function gerarNovoCurso(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
  
      console.log({ curso });
  
      if (id != undefined) {
        try {
          await atualizar(`/cursos`, curso, setCurso, {
            headers: { Authorization: token },
          });
          ToastAlert('Curso atualizado com sucesso','sucesso');
          retornar();
        } catch (error: any) {
          if (error.toString().includes('401')) {
            ToastAlert('O token expirou, favor logar novamente','erro')
            handleLogout()
          } else {
            ToastAlert('Erro ao atualizar o curso','erro');
          }
        }
      } else {
        try {
          await cadastrar(`/cursos`, curso, setCurso, {
            headers: { Authorization: token },
          });
  
          ToastAlert('Curso cadastrado com sucesso','sucesso');
          retornar();
        } catch (error: any) {
          if (error.toString().includes('401')) {
            ToastAlert('O token expirou, favor logar novamente','erro')
            handleLogout()
          } else {
            ToastAlert('Erro ao cadastrar o curso','erro');
          }
        }
      }
    }
  
    const carregandoCategoria = categoria.categoria === '';
  
    return (
        <>
        <section className="container_cadastro flex flex-row text-white text h-screen w-screen">
            <div className="container_cadastro_textos flex flex-col gap-y-10 px-32 justify-center w-1/2">
                <div >
                    <h1 className="text-5xl font-semibold font-poppins text-left pl-2">{id !== undefined ? 'Editar Curso' : 'Cadastrar Curso'}</h1>
                </div>

                <div className="container_cadastro_textos-categorias flex flex-col text-xl gap-y-9 ">
                    <h2 className="font-poppins font-semibold">Cadastre novas categorias de cursos e amplie as oportunidades de aprendizado para nossos usuários.</h2>
                </div>
            </div>

            <div className="container_cadastro_form flex w-1/2 h-full justify-center items-center">
            
            <form className="container_cadastro_form-formulario text-black flex flex-col h-[600px] justify-center items-center 
            bg-celestial-blue w-3/5 rounded-2xl gap-y-0.5 box-border p-4 shadow-white py-10"
            onSubmit={gerarNovoCurso} >
                <h1 className="text-white font-poppins font-semibold text-2xl">
                    Insira seu curso:
                </h1>
                <div className="flex w-full justify-center">
                        <input
                            type="text"
                            name="titulo"
                            placeholder="Titulo"
                            required
                            className="w-[80%] h-[12%] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                            placeholder-font-poppins border-2 border-white shadow "
                            value={curso.titulo}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                  </div> 
                  <div className="flex w-full justify-center">
                        <input
                            type="text"
                            name="descricao"
                            placeholder="Descricao"
                            required
                            className="w-[80%] h-[12%] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                            placeholder-font-poppins border-2 border-white shadow "
                            value={curso.descricao}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                  </div> 
                  <div className="flex w-full justify-center">
                        <input
                            type="text"
                            name="autor"
                            placeholder="Autor"
                            required
                            className="w-[80%] h-[12%] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                            placeholder-font-poppins border-2 border-white shadow "
                            value={curso.autor}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                  </div> 
                  <div className="flex w-full justify-center">
                        <input
                            type="text"
                            name="link"
                            placeholder="Link"
                            required
                            className="w-[80%] h-[12%] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                            placeholder-font-poppins border-2 border-white shadow "
                            value={curso.link}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                  </div> 
                   <div className="flex w-full justify-center">
                        <input
                            type="number"
                            name="valor"
                            placeholder="Valor"
                            required
                            className="w-[80%] h-[12%] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                            placeholder-font-poppins border-2 border-white shadow "
                            value={curso.valor}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                  </div> 
                  <div className="flex w-full justify-center">
                        <input
                            type="text"
                            name="imagem"
                            placeholder="Imagem"
                            required
                            className="w-[80%] h-[12%] bg-white/75 rounded-lg p-4 placeholder-grey-600 
                            placeholder-font-poppins border-2 border-white shadow "
                            value={curso.imagem}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                  </div> 
                  <div className="flex flex-col gap-2 w-[80%] ">
                  <select
                          name="categoria" 
                          id="categoria" 
                          className='border p-2 border-slate-800 rounded-lg w-[100%] h-full bg-white/75
                            border-white shadow mb-8' 
                            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
                            <option value="" className="placeholder:text-grey-600" selected disabled>Selecione uma Categoria</option>
                            {categorias.map((categoria) => (
                            <>
                            <option value={categoria.id} >{categoria.categoria}</option>
                            </>
                        ))}
                        </select>
                  </div> 
                  <div className="container_formcategoria_buttons flex flex-row justify-center items-center gap-4 w-[70%]">
                  
                    <Link to="/cursos" className="w-1/2 rounded-lg
                                    border-2 border-white text-white font-poppins font-semibold
                                    hover:border-prussian-blue h-12 flex items-center justify-center"
                                    style={{ backgroundColor: "rgba(0, 46, 78, 0.5)" }}>
                                    Cancelar
                    </Link>
                            
                            <button disabled={carregandoCategoria} type='submit'
                                className="w-1/2 h-12 rounded-lg
                                border-2 border-white text-white font-poppins font-semibold
                                hover:border-prussian-blue justify-center items-center flex"
                                style={{ backgroundColor: "rgba(0, 46, 78, 0.5)" }}
                                >
                                <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                            </button>
                </div>
              </form>
           </div>
        </section>
      </>
    )
}
     
  export default FormCurso;
