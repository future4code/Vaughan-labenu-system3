import { app } from "./app";
import { criarTurma } from "./endpoints/criarTurma";
import { mudarModulo } from "./endpoints/mudarModulo";
import { criarDocente } from "./endpoints/criarDocente";
import buscarDocentes from "./endpoints/buscarDocentes";
import { mudarDocenteTurma } from "./endpoints/mudarDocenteTurma";
import { criarEstudante } from "./endpoints/criarEstudante";
import buscarTurma from "./endpoints/buscarTurmas";
import buscarEstudantes from "./endpoints/buscarEstudantes";

// const newClass: CreateClass = new CreateClass
// let addClass = newClass.createClass

app.post("/class", criarTurma)

app.put("/class/:idTurma", mudarModulo)

app.get("/class", buscarTurma)

app.post("/docente", criarDocente)

app.get("/docente", buscarDocentes)

app.put("/docente/:id", mudarDocenteTurma)

app.post("/estudante", criarEstudante)

app.get("/estudante", buscarEstudantes)

