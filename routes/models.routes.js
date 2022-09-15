import express from "express";

const models = express.Router();

models.get('/', (req,res) => {
    res.send('Rota de Usuário!');
});

export default models;