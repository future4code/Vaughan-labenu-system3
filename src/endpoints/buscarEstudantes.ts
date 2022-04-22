import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function buscarEstudantes(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
        //  if (!id && !nome) {
        //         throw new Error("É necessário informar o nome do estudante.")
            // } else {
                let estudantes = await connection("Estudante")
                
                if (!estudantes) {
                    throw new Error("Estudante não encontrado.")
                } else {
                    res.status(200).send(estudantes)
                }
            // }
    } catch (error:any) {
        if (error.message === "Estudante não encontrado.") {
            res.status(400).send(error.sqlMessage || error.message)
        } else if (error.message) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}