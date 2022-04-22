import { Usuario } from "./Usuario";

export enum ESPECIALIDADE_DOCENTE {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}
export class Docente {
  public id: string;
  public nome: string;
  public email: string;
  public data_nasc: Date;
  public turma_id: string;
  // public especialidades: ESPECIALIDADE_DOCENTE[];
  constructor(
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id: string,
    // especialidades: ESPECIALIDADE_DOCENTE[]
  ) {
    this.id = String(Date.now());
    this.nome = nome;
    this.email = email;
    this.data_nasc = data_nasc;
    this.turma_id = turma_id;
    // this.especialidades = especialidades;
  }
};
// Anderson
// Criar docente - Feito
// Buscar todas as pessoas docentes - Feito

// Gabi
// Mudar docente de turma - Feito