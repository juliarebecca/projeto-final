const mongoose = require("mongoose"); //para conectar com o banco de dados

//criação de um objeto   
const perguntasSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    perguntas: {
        type: String,
        required: true
    },
    apelido: {
        type: String,
        required: true
   
    },
    idade: {
        type: Number,
        required: true
    },

    idadeDaCrianca:{
        type: Number,
    },
    generoDaCrianca:{
        type: String,
    },

    respostas: {
        type: Array
    }

}, { timestamps: true })

const Perguntas = mongoose.model("Perguntas", perguntasSchema);

module.exports = Perguntas

