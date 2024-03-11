import { Router } from "express";
import { checkAdmin, checkAuthenticated } from "../middleware/adminAuthorize";
import { createQuery, getQueries, getQuery, deleteQuery, updateQuery} from "../controllers/queriesController";

const router = Router();

router.post("/query", createQuery)
router.get("/query",checkAuthenticated,checkAdmin,getQueries)
router.patch("/query/:id",updateQuery)
router.delete("/query/:id",checkAuthenticated,checkAdmin,deleteQuery)

export default router;