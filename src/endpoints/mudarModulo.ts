import { Request, Response } from "express";
import { connection } from "../data/connection";

export const mudarModulo = async (req: Request, res: Response) => {
    try {
        const { modulo } = req.body
        const { idTurma } = req.params

        const turma = await connection("Turma")

        const procurarTurma = turma.find((turma) => turma.id === idTurma)

        if (!procurarTurma) {
            throw new Error("Não foi possível encontrar essa turma.")
        } else {
            await connection("Turma")
                .update({
                    modulo
                })
                .where({ 'id': idTurma })

            res.status(200).send("Modulo modificado com sucesso.")
        }

    } catch (error: any) {

        switch (error.message) {
            case "Não foi possível encontrar essa turma.":
                res.status(400).send(error.message)
                break
            default:
                res.status(400).send(error.sqlMessage || error.message)
        }

    }
}