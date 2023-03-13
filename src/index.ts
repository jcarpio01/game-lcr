import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser';

import config from './config';

import LCR from "./lcr";
import {createGamesTableIfNotExists} from "./querys";

const app: Application = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// hello world endpoint
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

// lcr game endpoint
app.post('/lcr', (req: Request, res: Response) => {
    const {numPlayers, rolls} = req.body;

    const results = LCR(numPlayers, rolls);

    res.status(200).json(results);
});

createGamesTableIfNotExists().then(() => {
    app.listen(config.app.port, () => {
        console.log(`Server is listening on port ${config.app.port}`);
    });
}).catch((err) => {
    console.error('Error creating games table', err);
});