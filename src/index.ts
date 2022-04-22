import { server, app } from "./app";
import { Turma } from "./class/Turma";
import { criarTurma } from "./endpoints/criarTurma";
import { Estudante } from "./class/Estudante";
import { mudarModulo } from "./endpoints/mudarModulo";
import { criarDocente } from "./endpoints/criarDocente";

// const newClass: CreateClass = new CreateClass
// let addClass = newClass.createClass

app.post("/class", criarTurma)

app.put("/class/:idTurma", mudarModulo)

app.post("/docente", criarDocente)