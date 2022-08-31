import express from 'express';
import dotenv from 'dotenv';

dotenv.config({path: '.config/config.env'});

const server = express();
const port = process.env.PORT || 5000;

server.get('/', (req, res) => {res.send('.:.:.:.:.:.:')});
server.listen(port, console.log("Servidor rodando em na porta " + port + ".:.:.:."));