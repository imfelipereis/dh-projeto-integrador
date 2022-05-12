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

//Arrumar esta rota
//router.get("/descricaoProduto", ProductsController.descricaoProduto);


router.get("/pagina-usuario", PoliticasController.painelUsuario);
router.get("/login", PoliticasController.login);
router.get("/carrinho", PoliticasController.carrinho);
router.get("/cadastro", PoliticasController.cadastro);
router.get("/procurar", PoliticasController.procurar);


//Adicinar rota descricaoProduto.

router.get('/descricaoProduto', PoliticasController.produto)

module.exports = router;