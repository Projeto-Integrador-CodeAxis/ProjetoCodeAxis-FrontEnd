import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Curso{
    id: number;
    titulo: string;
    imagem: string;
    descricao: string;
    autor: string;
    link: string;
    valor: number;
    usuario?: Usuario | null;
    categoria?: Categoria | null;

}