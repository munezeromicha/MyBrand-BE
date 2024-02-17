import express, { Router } from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { config } from './config/configDB';
import Logging from './library/Logging';

const router = express();

/* Let me connect to mongo */

mongoose.connect(config.mongo.url, {retryWrites: true, w: 'majority'})
.then(()=> {
 Logging.info('DataBase Connected')
}).catch(error => {
    Logging.warn('Unable to connect')
    Logging.error('Error Occurred')
});


/** start to build  after connecting the database!*/

