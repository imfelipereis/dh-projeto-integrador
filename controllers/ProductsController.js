const listaProdutos = [
    {
     "id": 1,
     "name": "Fone Airpods 1",
     "cor": "Prata",
     "img": "/produtos/produto-1.png",
     "preco": "300,00",
    },

    {
     "id": 2,
     "name": "Fone Airpods 1",
     "cor": "Azul",
     "img": "/produtos/produto-1.png",
     "preco": "300,00",
    },

    {
    "id": 3,
     "name": "Fone Airpods 2",
     "cor": "Prata",
     "img": "/produtos/produto-2.png",
     "preco": "350,00",
    },

    {
    "id": 4,
     "name": "Fone Airpods 2",
     "cor": "Azul",
     "img": "/produtos/produto-2.png",
     "preco": "350,00",
    },

    {
    "id": 5,
    "name": "Fone Airpods 3",
    "cor": "Prata",
    "img": "/produtos/produto-3.png",
    "preco": "400,00",
    },

    {
    "id": 6,
    "name": "Fone Airpods 3",
    "cor": "Azul",
    "img": "/produtos/produto-3.png",
    "preco": "400,00",
    },

    {
    "id": 7,
    "name": "Fone Airpods 4",
    "cor": "Prata",
    "img": "/produtos/produto-4.png",
    "preco": "500,00",
    },

    {
    "id": 8,
    "name": "Fone Airpods 4",
    "cor": "Azul",
    "img": "/produtos/produto-4.png",
    "preco": "500,00",
    }
]

var express = require('express');
var router = express.Router();
const db = require("../database/models");


let produtos = [];

const ProductsController = {

    produtos: (req, res) => {
        res.render("admin/produtos", {
            produtos: produtos
        });
    },

    produtosCadastrar: (req, res) => {
        res.render("admin/produtosCadastrar");
    },

    acaoCadastrar: (req, res) => {

        const id_produtos = req.body.id_produtos;
        const nome_produto = req.body.nome_produto;
        const geracao = req.body.geracao;
        const cor = req.body.cor;
        const valor = req.body.valor;
        const qtd_estoque = req.body.qtd_estoque;
        const descricao = req.body.descricao;
        const imagens = req.body.imagens;

        const objProduto = {
            id_produtos: id_produtos,
            nome_produto: nome_produto,
            geracao: geracao,
            cor: cor,
            valor: valor,
            qtd_estoque: qtd_estoque,
            descricao: descricao,
            imagens: imagens
        }

        produtos.push(objProduto);

        res.redirect("/admin/produtos");
    },

    acaoEditar: (req, res) => {
        
    },

    acaoExcluir: (req, res) => {
        produtos = produtos.filter((produto) => produto.id_produtos != req.params['idProduto']);

        res.redirect("/admin/produtos");
    },

    descricaoProduto: (req,res) => {
        let info = { 
            titulo: 'Descrição do Produto',
        };
        return res.render("descricaoProduto", info)
    },
    detalheProduto: (req, res) => {
        let produto = listaProdutos.find(produto => produto.id == req.params.id)
        res.render("descricaoProduto", {produto: produto})
    },

    produtosBd: (req, res) => {
        db.Produtos.findAll().then((produtos) => {
            res.render("listaProdutos", {
                listaProdutos: produtos
            }) 
        })
    }
}

module.exports = ProductsController;