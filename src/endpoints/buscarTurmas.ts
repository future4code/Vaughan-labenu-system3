import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function buscarTurma(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
        //  if (!id && !nome) {
        //         throw new Error("É necessário informar o id ou o nome do docente.")
            // } else {
                let turma = await connection("Turma")
                .where("modulo", ">", "0")
                
                if (!turma) {
                    throw new Error("Turma não encontrado.")
                } else {
                    res.status(200).send(turma)
                }
            // }
    } catch (error:any) {
        if (error.message === "Turma não encontrado.") {
            res.status(400).send(error.sqlMessage || error.message)
        } else if (error.message) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}