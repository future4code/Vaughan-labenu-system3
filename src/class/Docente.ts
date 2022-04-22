import { Usuario } from "./Usuario";

export enum TEACHER_SPECIALTY {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}

export class Teacher extends Usuario {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public dataNascimento: string,
    public turmaId: string,
    public especialidades: TEACHER_SPECIALTY[]
  ) {
    super(id, nome, email, dataNascimento, turmaId)
  }
};

// Anderson
// Criar docente
// Buscar todas as pessoas docentes

// Gabi
// Mudar docente de turma