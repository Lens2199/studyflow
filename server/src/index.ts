import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from './db';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

pool.query('SELECT NOW()', (err, res) =>{
    if (err) {
        console.log('Database connection failed', err);
    } else {
        console.log('Database connected: ', res.rows[0]);
    }
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello Word!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});