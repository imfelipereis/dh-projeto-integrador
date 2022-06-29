var express = require('express');
var router = express.Router();

const multer = require('multer');
const upload = multer({ dest: "upload" });

const vendas = [];
const produtos = [];
const clientes = [];

var AdministracaoController = require('../controllers/AdministracaoController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('dashboard', { title: 'Página Administrativa' });
});

router.get("/dashboard", AdministracaoController.dashboard);

// Área da Página de Vendas

router.get("/vendas", (req, res) => {
  res.render("vendas", {
    vendas: vendas
  });
});

router.get("/vendas/cadastrar", AdministracaoController.cadastrarVenda);
router.post("/acaoCadastrarVenda", AdministracaoController.acaoCadastrarVenda);
router.get("/editar/:idVenda?", AdministracaoController.editarVenda);


// Área da Página de Produtos

// Ao tentar inserir esse processo no AdministracaoController apresenta erro,
// Então teve que trazer também o const produtos = []
// router.get("/produtos", AdministracaoController.produtos);

router.get("/produtos", (req, res) => {
  res.render("produtos", {
    produtos: produtos
  });
});

router.get("/produtos/cadastrar", AdministracaoController.cadastrarProduto);
router.post("/acaoCadastrar", upload.single('imagem'), AdministracaoController.acaoCadastrar);
router.get("/editar/:idCarro?", AdministracaoController.editar);

// Área da Página de Clientes

router.get("/clientes", (req, res) => {
  res.render("clientes", {
    clientes: clientes
  });
});

router.get("/clientes/cadastrar", AdministracaoController.cadastrarCliente);
router.post("/acaoCadastrarCliente", AdministracaoController.acaoCadastrarCliente);
router.get("/editar/:idCliente?", AdministracaoController.editarCliente);

module.exports = router;