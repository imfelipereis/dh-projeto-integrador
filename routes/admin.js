var express = require('express');
var router = express.Router();

const multer = require('multer');
const upload = multer({ dest: "upload" });

var AdministracaoController = require('../controllers/AdministracaoController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('dashboard', { title: 'Página Administrativa' });
});

router.get("/dashboard", AdministracaoController.dashboard);

router.get("/vendas", AdministracaoController.vendas);

router.get("/produtos", AdministracaoController.produtos);
router.get("/produtos/cadastrar", AdministracaoController.cadastrarProduto);
router.post("/acaoCadastrar", upload.single('imagem'), AdministracaoController.acaoCadastrar);
router.get("/editar/:idCarro?", AdministracaoController.editar);

router.get("/clientes", AdministracaoController.clientes);

module.exports = router;