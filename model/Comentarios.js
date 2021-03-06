const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comentarios = new Schema({

    id_comentario: {
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
        default:Date.now(),
        required: true,
      },
});

mongoose.model("comentarios", Comentarios);