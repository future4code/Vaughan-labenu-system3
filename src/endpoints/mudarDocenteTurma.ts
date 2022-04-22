import { Request, Response } from "express"
import { connection } from "../data/connection"

export const mudarDocenteTurma = async (req: Request, res: Response):Promise<any> => {
    try {
        const { turmaId } = req.body
        const { id } = req.params
        const docente = await connection("Docente")

        const procurarDocente = docente.find((docente) => docente.id === id)

        if (!procurarDocente) {
            throw new Error("Docente não encontrado.")
        } else {
            await connection("Docente")
                .update({
                    turma_id: turmaId
                })
                .where({
                    'id': id
                })

            res.status(200).send("Turma do docente modificada com sucesso.")
        }

    } catch (error: any) {
        switch (error.message) {
            case "Docente não encontrado.":
                res.status(400).send(error.message)
                break
            default:
                res.status(400).send(error.sqlMessage || error.message)
        }
    }
}