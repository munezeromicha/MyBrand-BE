import { Router } from "express";
import { checkAdmin, checkAuthenticated } from "../middleware/adminAuthorize";
import { createQuery, getQueries, getQuery, deleteQuery, updateQuery} from "../controllers/queriesController";

const router = Router();

router.post("/query", createQuery)
router.get("/query", checkAuthenticated,checkAdmin,getQueries)
router.get("/query/:id",checkAuthenticated,checkAdmin,getQuery)
router.patch("/query/:id",checkAuthenticated,checkAdmin,updateQuery)
router.delete("/query/:id",checkAuthenticated,checkAdmin,deleteQuery)

export default router;