import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { config } from './config';
import Server from './routes';

const app: Application = express();
const server: Server = new Server(app);

mongoose.connect(config.MONGO_URL)
    .then( () => {
      console.log('Connected to database')
    })
    .catch( () =>{
        console.log('Error in connected database')
    });

    app.get('/', (req: Request, res: Response, next: NextFunction) => {
       res.send("Hello TypeScript");
    });

app.listen(5001, () => { console.log('Server listen') });