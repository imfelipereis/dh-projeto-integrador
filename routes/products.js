var express = require('express');
var router = express.Router();
// var CarrinhoControler = require('../controllers/CarrinhoController');
var PoliticasController = require('../controllers/PoliticasController');
const userController = require('../controllers/userController');

const multer = require("multer");
const path = require("path");

const {check} = require("express-validator");
const {body} = require("express-validator");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/upload/images/produtos");
    },
    filename: function(req, file, cb){
        cb(null, "upload_imagem_produto_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const ProductsController = require('../controllers/ProductsController');
const AdministracaoController = require('../controllers/AdministracaoController');

router.get("/admin/produtos", ProductsController.produtos);
router.get("/admin/produtos/cadastrar", AdministracaoController.cadastrarProduto);
router.post("/admin/produtos/acaoCadastrar", upload.single('imagemProduto'), ProductsController.acaoCadastrar);
router.get("/admin/produtos/excluir/:idProduto", ProductsController.acaoExcluir);

router.get('/descricaoProduto', ProductsController.descricaoProduto)
router.get('/descricaoProduto/:id', ProductsController.detalheProduto)


router.get('/produtos', ProductsController.produtosBd)

router.get('/carrinho', ProductsController.verCarrinho)
router.post("/carrinho", ProductsController.carrinho)



module.exports = router;