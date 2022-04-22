import { Request, Response } from "express";
import { Docente } from "../class/Docente";
import { connection } from "../data/connection";

export const criarDocente = async (req: Request, res: Response): Promise<any> => {
    try {
        const {nome, email, data_nasc, turma_id  } = req.body

        if (!nome || !email || !data_nasc || !turma_id) {
            throw new Error("Todos os campos devem ser preenchidos.")
        } else {
            let novoDocente = new Docente(nome, email, data_nasc, turma_id)
            await connection("Docente")
                .insert(novoDocente);
            res.status(201).send("Docente criada com sucesso.")
        }
    } catch (error: any) {
        if (error.message === "Todos os campos devem ser preenchidos.") {
            res.status(400).send(error.sqlMessage || error.message)
        } else if (error.message) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
};