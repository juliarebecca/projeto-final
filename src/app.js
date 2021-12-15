require("dotenv-safe").config();
const express = require("express"); //faz a ligação http, crud
const cors = require("cors"); //não dar conflito de API
const db = require("./database/mongoConfig"); //chama a lógica da conexão

const app = express(); //ele que chama o express
app.use(cors());
app.use(express.json());


const projetoRoutes = require ("./routes/projetofinalRoutes");

app.use("/", projetoRoutes);

db.connect()

module.exports = app
