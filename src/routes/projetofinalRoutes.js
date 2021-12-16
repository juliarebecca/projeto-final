const express = require("express"); //chamo pois eu preciso usar o router
const router = express.Router(); //para utilizar as rotas feitas no controller
const controller = require("../controller/projetoFinalController"); //pegar tudo dentro


router.get("/all", controller.getAll);
router.post("/criar", controller.criarCadastro);
router.put("/atualizar/:id", controller.atualizacaoCadastro);
router.delete("/deletar/:id", controller.deletarCadastro);

module.exports = router
