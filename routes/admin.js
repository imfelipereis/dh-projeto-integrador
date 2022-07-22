var express = require('express');
var router = express.Router();
const AdministracaoController = require('../controllers/AdministracaoController');

router.get("/admin/dashboard", AdministracaoController.dashboard);

router.get('/logar', AdministracaoController.logar);
router.post('/logarAcao', AdministracaoController.logarAcao);

module.exports = router;    