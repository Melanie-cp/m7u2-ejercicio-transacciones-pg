import { pool } from "../database/connection.js"

const findAll = async () => {
    return 'users...'
}

const create = async (uid, email) => {
    const query = {
        text: "INSERT INTO USERS (uid, email) VALUES ($1, $2) RETURNING *",
        values: [uid, email]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const User = {
    findAll,
    create
}