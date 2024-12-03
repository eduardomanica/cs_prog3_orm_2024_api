import express from 'express';
import routes from './routes';
import './database/connect'

import 'reflect-metadata';


const app = express();
app.use(express.json());
//npm install cors@2.8.5
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
app.use(routes); // depois da definição do parser via json.


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, XRequested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    next();
});
app.listen(3000, () => console.log('Server started at http:/localhost: 3000'));
