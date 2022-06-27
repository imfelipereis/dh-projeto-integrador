var express = require('express');
var router = express.Router();

const AdministracaoController = {
    dashboard: (req, res) => {
        let info = {
            titulo: 'Página Administrativa',
        };
        return res.render("dashboard", info);
    },

    vendas: (req, res) => {
        let info = {
            titulo: 'Vendas',
        };
        return res.render("vendas", info);
    },

    produtos: (req, res) => {
        let info = {
            titulo: 'Produtos',
        };
        return res.render("produtos", info);
    },

    cadastrarProduto: (req, res) => {
        let info = {
            titulo: 'Cadastrar Novo Produto',
        };
        return res.render("cadastrar-produto", info);
    },

    acaoCadastrar: (req, res) => {
        
        const nome = req.body.nome;
        const geracao = req.body.geracao;
        const valor = req.body.valor;
        const qtdEstoque = req.body.qtdEstoque;
        const descricao = req.body.descricao;

    },

    editar: (req, res) => {
        let info = {
            titulo: 'Editar Produto',
        };
        return res.render("editar", info);
    },

    clientes: (req, res) => {
        let info = {
            titulo: 'Clientes',
        };
        return res.render("clientes", info)
    }

}

module.exports = AdministracaoController;