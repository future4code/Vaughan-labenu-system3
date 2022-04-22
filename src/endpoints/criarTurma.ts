import { Request, Response } from "express";
import { Turma } from "../class/Turma";
import { connection } from "../data/connection";

export const criarTurma = async (req: Request, res: Response): Promise<void> => {
    try {

        const { nome, modulo } = req.body



        // if (!nome || !modulo) {
        //     throw new Error("Todos os campos devem ser preenchidos.")

        // } else {

            let novaTurma = new Turma(nome, modulo)

            await connection("Turma")
                .insert(novaTurma);

            res.status(201).send("Turma criada com muito sucesso.")
        // }

    } catch (error: any) {
        if (error.message === "Todos os campos devem ser preenchidos.") {
            res.status(400).send(error.sqlMessage || error.message)
        } else if (error.message) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
};