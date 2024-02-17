import { Request, Response } from 'express';
import Joi from 'joi';
import Query from '../models/Query';

const querySchema = Joi.object({
    queryText: Joi.string().required()
});

export const addQuery = async (req: Request, res: Response) => {
    try {
        const { error } = querySchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { queryText } = req.body;
        const query = new Query({
            queryText
        });

        const savedQuery = await query.save();

        res.status(201).json(savedQuery);
    } catch (error) {
        // res.status(500).json({ error: err.message });
        console.log(error)
    }
};

export const getAllQueries = async (req: Request, res: Response) => {
    try {
        // Fetch all queries
        const queries = await Query.find();

        res.json(queries);
    } catch (error) {
        // res.status(500).json({ error: err.message });
        console.log(error)
    }
};
