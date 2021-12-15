const express = require("express"); //chamo pois eu preciso usar o router
const router = express.Router(); //para utilizar as rotas feitas no controller
const controller = require("../controller/projetoFinalController"); //pegar tudo dentro


router.get("/all", controller.getAll);
router.post("/criar", controller.criarCadastro);

module.exports = router
