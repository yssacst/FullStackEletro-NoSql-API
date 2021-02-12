const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Produtos = new Schema({
    id_produto: {
        type: Number,
        required: true,
      },
    descricao:{
        type: String,
        required: true,
      },
    preco:{
        type: Number,
        required: true,
      },
    preco_venda:{
        type: Number,
        required: true,
      },
    nome_imagem:{
        type: String,
        required: true,
      },
});

mongoose.model("produtos", Produtos);