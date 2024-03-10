import { Router } from "express"
import { recoverEmail } from "../controllers/recoverEmail"


const router = Router()

router.post('/send-email', recoverEmail)

export default router;

