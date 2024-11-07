// Sagar: Here we have to use the import because you use the type: "module" in the package json.
// From next, please use the import instead of require according to ES6
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authrouter from './routes/authrouter.js';
import './models/db.js';
import volunteerRoutes from './routes/volunteerRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.send('PONG');
});


app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Welcome</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f0f8ff;
                }
                h1 {
                font-size:5rem;
                    color: #ff4500;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
                }
            </style>
        </head>
        <body>
            <h1>server is staring </h1>
        </body>
        </html>
    `);
});


// you can please make sure to make the routes proper
app.use('/auth', authrouter);
app.use('/products', authrouter);
app.use('/volunteers', volunteerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    console.log(`http://localhost:${process.env.PORT}`)
});
