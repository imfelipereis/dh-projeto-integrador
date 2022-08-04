var express = require('express');
var router = express.Router();
const AdministracaoController = require('../controllers/AdministracaoController');

router.get("/admin/dashboard", AdministracaoController.dashboard);

router.post("/admin/produtos/excluir", AdministracaoController.excluir);



module.exports = router;    