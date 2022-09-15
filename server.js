import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import bodyParse from 'body-parser';

dotenv.config({path: '.config/config.env'});

const server = express();
const port = process.env.PORT || 5000;

server.get('/', (req, res) => {res.send('.:.:.:.:.:.:')});
server.listen(port, console.log("Servidor rodando em na porta " + port + ".:.:.:."));

server.use(bodyParse.urlencoded({ extended: true}));
server.use(bodyParse.json());
server.use(router);