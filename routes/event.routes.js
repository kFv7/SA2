import express from "express";

const event = express.Router();

event.get('/', (req,res) =>{
    res.send('Rota de Eventos!');
});

export default event;