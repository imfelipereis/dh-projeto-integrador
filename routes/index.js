var express = require('express');
var router = express.Router();
// var CarrinhoControler = require('../controllers/CarrinhoController');
var PoliticasController = require('../controllers/PoliticasController');
const userController = require('../controllers/userController');
const AdministracaoController = require('../controllers/AdministracaoController');
const path = require("path");
const {check} = require("express-validator");
const {body} = require("express-validator");
const multer = require("multer")


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Programa AirPods Para Sempre' });
});


//AREA DO LOGIN E CADASTRO
const validations = [
  
  check('name').notEmpty().withMessage("Coloque o nome por gentileza"),
  check('email').notEmpty().withMessage("Coloque o email por gentileza"), 
  check('psw').notEmpty().withMessage("Coloque a senha por gentileza"),

];

//ROUTER PARA LOGIN E  CADASTRO

//Formulario de registro
router.get('/cadastro', userController.register);

//Processar o registro
router.post('/acaoCadastro', userController.processRegister);






// Área do Carrinho

// router.get('/:item', CarrinhoControler.addItem);
// router.get('/:item', CarrinhoControler.removerItem);

// Área do Footer

router.get("/", PoliticasController.index);
router.get("/sobre-nos", PoliticasController.sobreNos);
router.get("/termos-e-condicoes", PoliticasController.termosECondicoes);
router.get("/politica-de-privacidade", PoliticasController.politicaDePrivacidade);
router.get("/entrega-produtos", PoliticasController.entregaProdutos);

//Arrumar esta rota
//router.get("/descricaoProduto", ProductsController.descricaoProduto);


router.get("/login", PoliticasController.login);
router.get("/carrinho", PoliticasController.carrinho);

router.get("/procurar", PoliticasController.procurar);
router.get("/finalizacaoPedido", PoliticasController.finalizacao)



//Adicinar rota descricaoProduto.



module.exports = router;