import { Transfer } from "../models/transfer.model.js"

export const transferAll = async (req, res) => {
    const transfer = await Transfer.findAll()
    return res.json(transfer)
}

export const transferMont = async (req, res) => {
    const { origen, destino, valor } = req.body
    const response = await Transfer.create(origen, destino, valor)
    if (!response.ok) {
        return res.status(500).json(response)
    }
    return res.json(response)
}