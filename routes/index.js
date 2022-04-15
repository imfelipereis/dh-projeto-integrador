var express = require('express');
var router = express.Router();
var CarrinhoControler = require('../controllers/CarrinhoController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// Área dos Produtos



// Área do Carrinho

router.get('/:item', CarrinhoControler.addItem);
router.get('/:item', CarrinhoControler.removerItem);

// Área do Footer

router.get('/sobre-nos', (req, res) => {
  res.render("sobre-nos");
})

router.get('/termos-e-condicoes', (req, res) => {
  res.render("termos-e-condicoes");
})

router.get('/politica-de-privacidade', (req, res) => {
  res.render("politica-de-privacidade");
})

router.get('/entrega-produtos', (req, res) => {
  res.render("entrega-produtos");
})

module.exports = router;