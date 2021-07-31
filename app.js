import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';

import { router as bookRoute } from './routes/book.js';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bookRoute);

export default app;
