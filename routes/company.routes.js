import express from "express";

const company = express.Router();

company.get('/', (req,res) => {
    res.send('Rota das Empresas!');
});

export default company;