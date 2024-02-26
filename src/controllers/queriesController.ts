import { Request, Response} from 'express';
import Query from '../models/queriesModel';

const createQuery = async (req: Request, res: Response) => {
    try {
        const { name, email , query} = req.body;
        // const Queries = await Query.create({
        //     name: req.body.name,
        //     email: req.body.email,
        //     query: req.body.query
        // });
        // return res.status(201).json(Queries); 

        const newQueries = new Query({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });
        await newQueries.save();
        res.status(201).json( newQueries);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const getQueries = async (req: Request, res: Response)=> {
    try {
        const Queries= await Query.find();
        res.status(200).json(Queries);
    } catch (error) {
        res.status(404).json('The Queries were not found');
    }
};

const getQuery = async (req: Request, res: Response)=>{
    try {
        const query= await Query.findById(req.params.id);
        if (query) {
            res.status(200).json(query);
        } else {
            res.status(404).json('That query Not exist');
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateQuery = async (req: Request, res: Response)=>{
    try {
        const query= await Query.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        if (query) {
            await query.save();
           return res.status(201).json('Updated');
        } else {
            res.status(404).json('Not Updated');
        }
    } catch (error) {
        res.status(400).json('Not updated');
    }
};

const deleteQuery = async (req: Request, res: Response)=>{
    try {
        await Query.findByIdAndDelete(req.params.id);
        res.status(200).json('Query deleted');
    } catch (error) {
        res.status(404).json('Query not found');
    }
};

export  {createQuery,getQueries,getQuery,updateQuery,deleteQuery}