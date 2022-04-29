var express = require('express');
var router = express.Router();
// var CarrinhoControler = require('../controllers/CarrinhoController');
var PoliticasController = require('../controllers/PoliticasController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Programa AirPods Para Sempre' });
});

// Área dos Produtos



// Área do Carrinho

// router.get('/:item', CarrinhoControler.addItem);
// router.get('/:item', CarrinhoControler.removerItem);

// Área do Footer

router.get("/", PoliticasController.index);
router.get("/sobre-nos", PoliticasController.sobreNos);
router.get("/termos-e-condicoes", PoliticasController.termosECondicoes);
router.get("/politica-de-privacidade", PoliticasController.politicaDePrivacidade);
router.get("/entrega-produtos", PoliticasController.entregaProdutos);

router.get('/descricaoProduto',(req,res) => {
  res.render('descricaoProduto')
})

router.get('/login',(req,res) =>{
  res.render('login')
})

router.get('/carrinho',(req,res) =>{
  res.render('carrinho')
})

router.get('/cadastro',(req,res) =>{
  res.render('cadastro')
})

module.exports = router;