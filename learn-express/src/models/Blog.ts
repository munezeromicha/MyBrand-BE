import mongoose, { Schema, model, Document } from "mongoose";
import { IPost } from '../Types/postTypes';

// Define the schema for the main post
const Post = new Schema<IPost>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
})


export default model<IPost>('Post', Post);






// In Mongoose, Schema and Document play key roles in defining the structure of data and representing individual instances of data, respectively.

// Schema: The Schema class in Mongoose is used to define the structure of documents within a collection. It allows you to specify the fields, their types, default values, validators, and other options for the documents in the collection. Essentially, a schema is a blueprint that defines the shape of documents that can be stored in the MongoDB collection.

// Document: A Document in Mongoose represents an instance of a schema. It is an object that contains data conforming to the structure defined by the schema. Each document corresponds to a single record in the MongoDB collection. Documents have properties and methods provided by Mongoose for interacting with the data, such as saving, updating, and deleting.