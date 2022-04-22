import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function buscarDocentes(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
        //  if (!id && !nome) {
        //         throw new Error("É necessário informar o id ou o nome do docente.")
            // } else {
                let docentes = await connection("Docente")
                
                if (!docentes) {
                    throw new Error("Docente não encontrado.")
                } else {
                    res.status(200).send(docentes)
                }
            // }
    } catch (error:any) {
        if (error.message === "Docente não encontrado.") {
            res.status(400).send(error.sqlMessage || error.message)
        } else if (error.message) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}