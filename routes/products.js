var express = require('express');
var router = express.Router();
// var CarrinhoControler = require('../controllers/CarrinhoController');
var PoliticasController = require('../controllers/PoliticasController');
const userController = require('../controllers/userController');
const path = require("path");
const {check} = require("express-validator");
const {body} = require("express-validator");
const multer = require("multer");
const ProductsController = require('../controllers/ProductsController');



router.get('/descricaoProduto', ProductsController.descricaoProduto)

router.get('/descricaoProduto/:id', ProductsController.detalheProduto)


module.exports = router;
