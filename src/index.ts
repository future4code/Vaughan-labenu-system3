import { server, app } from "./app";
import { Turma } from "./class/Turma";
import { criarTurma } from "./endpoints/criarTurma";
import { Estudante } from "./class/Estudante";

// const newClass: CreateClass = new CreateClass
// let addClass = newClass.createClass

app.post("/class", criarTurma)
