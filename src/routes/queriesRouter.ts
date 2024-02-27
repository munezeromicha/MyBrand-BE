import { Router } from "express";
import { checkAdmin, checkAuthenticated } from "../middleware/adminAuthorize";
import { createQuery, getQueries, getQuery, deleteQuery, updateQuery} from "../controllers/queriesController";

const router = Router();

router.post("/query", createQuery)
router.get("/query", getQueries)
router.get("/query/:id",checkAdmin, checkAuthenticated,getQuery)
router.patch("/query/:id",checkAdmin, checkAuthenticated,updateQuery)
router.delete("/query/:id",deleteQuery)

export default router;