// src/models/Query.ts

import mongoose, { Document, Schema } from 'mongoose';

export interface Query extends Document {
    queryText: string;
    createdAt: Date;
}

const querySchema: Schema = new Schema({
    queryText: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<Query>('Query', querySchema);
