import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.controller.js";

const router = Router()

router.get('/', getAllUsers)
router.get('/:uid', getUser)
router.post('/', createUser)
router.delete('/:uid', deleteUser)
router.put('/:uid', updateUser)

export default router;