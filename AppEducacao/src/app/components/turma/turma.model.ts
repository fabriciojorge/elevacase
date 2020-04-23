import { Escola } from '../escola/escola.model';

export interface Turma {
    idTurma?: number
    codTurma: string
    anoLetivo: string
    disciplina: string
    nomeProfessor: string
    turno: string
    escola: Escola
}