import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Request-with', 'Content-Type', 'Accept']
}));

app.use(express.json());

export default app;
