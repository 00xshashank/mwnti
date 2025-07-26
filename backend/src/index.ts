import express from 'express';
import cors from 'cors';

import {
    CreateQuizParams
} from './types';
import { 
    connectDb,
    createQuiz
 } from './redis';

const app = express();

app.use(cors());
app.use(express.json());

connectDb();

app.post('/check', (request, response) => {

})

app.post('/create', (request, response) => {
    const data = request as unknown as CreateQuizParams;
    createQuiz(data);
})