import { Router } from "express";
import { transferAll, transferMont } from "../controllers/transfer.constroller.js";

const router = Router()

router.get('/', transferAll)
router.post('/', transferMont)

export default router