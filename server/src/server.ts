import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors()); // Serve para comunicar o front-end com o back-end que estão em portas diferentes.
app.use(express.json());
app.use(routes);

app.listen(3333);