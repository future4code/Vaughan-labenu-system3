import { Request, Response } from "express";
import { connection } from "../data/connection";

export const mudarEstudanteTurma = async (req: Request, res: Response) => {
    try {
        const { turmaId } = req.body
        const {id} = req.params

        const estudante = await connection("Estudante")

        const procurarEstudante = estudante.find((estudante) => estudante.id === id)

        if (!procurarEstudante) {
            throw new Error("Estudante não encontrado.")
        } else {
            await connection("Estudante")
                .update({
                    turma_id: turmaId
                })
                .where({
                    id: id
                })

            res.status(200).send("Turma do estudante modificada com sucesso.")
        }

    } catch (error: any) {
        switch (error.message) {
            case "Estudante não encontrado.":
                res.status(400).send(error.message)
                break
            default:
                res.status(400).send(error.sqlMessage || error.message)
        }
    }
}