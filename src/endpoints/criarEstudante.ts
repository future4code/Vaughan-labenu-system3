import { Request, Response } from "express";
import { Estudante } from "../class/Estudante";
import { connection } from "../data/connection";

export const criarEstudante = async (req: Request, res: Response): Promise<any> => {
    try {
        const {nome, email, data_nasc, turma_id } = req.body

        // if (!nome || !email || !data_nasc || !turma_id ) {
        //     throw new Error("Todos os campos devem ser preenchidos.")
        // } else {
            let novoEstudante = new Estudante(nome, email, data_nasc, turma_id)
            await connection("Estudante")
                .insert(novoEstudante);
            res.status(201).send("Estudante criado com sucesso.")
      //  }
    } catch (error: any) {
        if (error.message === "Todos os campos devem ser preenchidos.") {
            res.status(400).send(error.sqlMessage || error.message)
        } else if (error.message) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
};