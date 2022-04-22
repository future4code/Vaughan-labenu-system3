// export interface User {
//     id: string;
//     name: string;
//     email: string;
//   }

export class Usuario {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public dataNascimento: string,
    public turmaId: string
  ) {}
}