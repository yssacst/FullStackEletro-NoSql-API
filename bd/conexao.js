const mongoose = require("mongoose");

function conexao(){
    mongoose.connect("mongodb://127.0.0.1:27017/fullstackeletro",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(()=>{
          console.log("Conectado")
      }).catch((erro)=>{
          console.log(`Erro: ${erro}`);
      })
}

module.exports=conexao()
