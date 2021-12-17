const express = require("express"); //chamo pois eu preciso usar o router
const router = express.Router(); //para utilizar as rotas feitas no controller
const controller = require("../controller/projetoFinalController"); //pegar tudo dentro


router.get("/", (req, res) => {
    res.status(200).send({
        title: "Projeto Final - Para Mães",
        version: "1.0.0",
        message: "Bem vindas ao meu site para mães!"
    })
} )
router.get("/all", controller.getAll);
router.post("/criar", controller.criarCadastro);
router.put("/atualizar/:id", controller.atualizacaoCadastro);
router.delete("/deletar/:id", controller.deletarCadastro);
router.get("/todos/:id", controller.buscarId);
module.exports = router
