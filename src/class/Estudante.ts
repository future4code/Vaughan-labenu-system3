// export enum LISTA_HOBBIES {
//   FUTEBOL = "FUTEBOL",
//   FUTSAL = "FUTSAL",
//   NATACAO = "NATACAO",
//   CORRIDA = "CORRIDA",
//   CICLISMO = "CICLISMO",
//   LEITURA = "LEITURA",
//   MUSICA = "MUSICA",
//   TECNOLOGIA = "TECNOLOGIA",

// }

export class Estudante {
  public id: string;
  public nome: string;
  public email: string;
  public data_nasc: string;
  public turma_id: string;
 // public hobbies: string;

  constructor(
    
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
   // hobbies: string
  ) {
    this.id = String(Date.now());
    this.nome = nome;
    this.email = email;
    this.data_nasc = data_nasc;
    this.turma_id = turma_id;
    //this.hobbies = hobbies;

  }

  public pegarIdade(): number {
    const [ano, mes, dia] = this.data_nasc.split("-");
    const data_nasc = new Date(Number(ano), Number(mes), Number(dia));
    const idade = new Date().getFullYear() - data_nasc.getFullYear();
    return idade;
  }
};

//super(nome, email, dataNascimento, turmaId, hobbies)

//Endpoints

// Adri

// Criar estudante - Feito (Anderson e Gabi)
// Buscar estudantes através do nome - Feito parcialmente, precisa especificar a busca por "nome" (Anderson)
// Gabi
// Mudar estudante de turma - Feito