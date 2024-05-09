import { nanoid } from "nanoid"
import { User } from "../models/user.model.js"

export const getAllUsers = async (req, res) => {
    console.log(req.query)
    const users = await User.findAll()
    console.log(users)
    res.send('Hello world!')
}

export const getUser = (req, res) => {
    console.log(req.params)
    res.send('Hello world!')
}

export const createUser = async (req, res) => {
    const { email } = req.body
    const uid = nanoid()
    const newUser = await User.create(uid, email)
    res.json(newUser)
}

export const deleteUser = (req, res) => {
    console.log(req.params)
    res.send('Hello world!')
}

export const updateUser = (req, res) => {
    console.log(req.params)
    console.log(req.body)
    res.send('Hello world!')
}