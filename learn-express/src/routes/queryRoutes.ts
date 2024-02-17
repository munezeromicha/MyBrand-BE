import express from 'express';
import { addQuery, getAllQueries } from '../controllers/queryController';

const router = express.Router();

router.post('blogs/:id/queries', addQuery);
router.get('blogs/:id/queries', getAllQueries);

export default router;
