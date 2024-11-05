// Sagar:Here we have to use the import because you use the type:"module" in the package json.
// From next please use the import in instead of teh require  according to tye es6
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authrouter from './routes/authrouter.js';
import './models/db.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.send('PONG');
});
// you can please make sure to the to make the routes proper
app.use('/auth', authrouter);
app.use('/products', authrouter); 

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
