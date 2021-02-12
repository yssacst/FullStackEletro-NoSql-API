const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Categorias = new Schema({

    id_categoria: {
        type: Number,
        required: true,
      },
      nome:{
        type: String,
        required: true,
      },
      chave:{
        type: String,
        required: true,
      },
      qtd:{
        type: Number,
        required: true,
      },
});

mongoose.model("categorias", Categorias);