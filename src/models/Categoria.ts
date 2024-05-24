import Curso from "./Curso";

export default interface Categoria{
    id: number;
    categoria: string;
    curso?: Curso | null;
}