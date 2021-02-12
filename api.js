require("./model/Produtos");
require("./model/Comentarios");
require("./model/Categorias");
require("./bd/conexao");

const mongoose = require("mongoose");
const Produtos = mongoose.model("produtos");
const Comentarios = mongoose.model("comentarios");
const Categorias = mongoose.model("categorias");

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

  app.get('/categorias', async (req, res) => {// pega todos comentários
    const categoriaResponse = await Categorias.find();
    const categoriaJson = await categoriaResponse;
  
    res.json(categoriaJson);

    req.header('Access-Control-Allow-Origin:*');
    req.header('Content-type: application/json');
  });
  
  app.get('/categorias/:tipo', async (req, res) => {// pega todos comentários
    const tipo = req.params.tipo;
    const categoriaResponse = await Categorias.find({'chave': tipo});
    const categoriaJson = await categoriaResponse;
  
    res.json(categoriaJson);

    req.header('Access-Control-Allow-Origin:*');
    req.header('Content-type: application/json');
  });

app.post('/comentario', async (req,res, next)=>{// Cadastra novo comentário
    res.header('Access-Control-Allow-Origin:*');
    res.header('Content-type: application/json');

    const comentario = new Comentarios({
        nome:  req.body.nome,
        msg:   req.body.msg
    });
    comentario.save()
});

app.use(function( req, res, next) {
    res.status(404).end("Opsss... Pagina nao encontrada");
})

app.listen(5002,()=>{
    console.log("Servidor Node Ativo em http://localhost:5002");
});