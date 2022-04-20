import { User } from "./User";


export class Student implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public birthDate: string,
    public hobbies: string
  ) {}

  public getAge(): number {
    const [year, month, day] = this.birthDate.split("-");
    const birthDate = new Date(Number(year) , Number(month), Number(day) );
    const age = new Date().getFullYear() - birthDate.getFullYear();
    return age;
  }
      
  
  
}