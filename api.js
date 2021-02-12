require("./model/Produtos");
require("./model/Comentarios");
require("./bd/conexao");

const mongoose = require("mongoose");
const Produtos = mongoose.model("produtos");
const Comentarios = mongoose.model("comentarios");

const express = require("express");
const app=express();
const cors=require('cors'); 
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', async (req, res) => {// pega todos produtos
    const produtosResponse = await Produtos.find();
    const produtosJson = await produtosResponse;
  
    res.json(produtosJson);
  });

app.get('/comentarios', async (req, res) => {// pega todos comentários
    const comentariosResponse = await Comentarios.find();
    const comentariosJson = await comentariosResponse;
  
    res.json(comentariosJson);
  });

app.post('/comentario/:nome/:msg', (req,res)=>{// Cadastra novo comentário
    new Comentarios({
        nome:  req.params.nome,
        msg:   req.params.msg
    })
    .save()
    .then(x => {
        res.status(200).send({ mesage: "Comentario cadastrado com sucesso!'" });
    }).catch(e => {
        res.status(400).send({
            message: '[ERRO] Falha durante cadastro!',
            data: e
        });
    });
    res.sendStatus(200);
});

app.use(function( req, res, next) {
    res.status(404).end("Opsss... Pagina nao encontrada");
})

app.listen(5001,()=>{
    console.log("Servidor Node Ativo em http://localhost:5001");
});