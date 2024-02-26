import { Router } from "express";

import { createQuery, getQueries, getQuery, deleteQuery, updateQuery} from "../controllers/queriesController";

const router = Router();

router.post("/query", createQuery)
router.get("/query", getQueries)
router.get("/query/:id",getQuery)
router.patch("/query/:id",updateQuery)
router.delete("/query/:id",deleteQuery)

export default router;