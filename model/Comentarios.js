const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comentarios = new Schema({

    id_contato: {
        type: Number,
        required: false,
      },
      nome:{
        type: String,
        required: true,
      },
      msg:{
        type: String,
        required: true,
      },
      data_cadastro:{
        type: Date,
        required: false,
      },
});

mongoose.model("comentarios", Comentarios);