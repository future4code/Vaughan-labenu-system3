import { Usuario } from "./Usuario";

export class Estudante extends Usuario {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public dataNascimento: string,
    public turmaId: string,
    public hobbies: string
  ) {
    super(id, nome, email, dataNascimento, turmaId)
  }

  public pegarIdade(): number {
    const [ano, mes, dia] = this.dataNascimento.split("-");
    const dataNascimento = new Date(Number(ano) , Number(mes), Number(dia) );
    const idade = new Date().getFullYear() - dataNascimento.getFullYear();
    return idade;
  }
};

//Endpoints

// Adri

// Criar estudante
// Buscar estudantes através do nome

// Gabi
// Mudar estudante de turma