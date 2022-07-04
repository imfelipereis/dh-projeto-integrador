var express = require('express');
var router = express.Router();

let produtos = [];

const AdministracaoController = {
    produtos: (req, res) => {
        res.render("admin/produtos", {
            produtos: produtos
        });
    },

    produtosCadastrar: (req, res) => {
        res.render("admin/produtosCadastrar");
    },

    acaoCadastrar: (req, res) => {

        const id = req.body.id;
        const nome = req.body.nome;
        const preco = req.body.preco;
        const descricao = req.body.descricao;
        const imagem = req.file.filename;

        const objProduto = {
            id: id,
            nome: nome,
            preco: preco,
            descricao: descricao,
            imagem: imagem
        }

        produtos.push(objProduto);

        res.redirect("/admin/produtos");
    },

    acaoEditar: (req, res) => {
        
    },

    acaoExcluir: (req, res) => {
        produtos = produtos.filter((produto) => produto.id != req.params.idProduto);

        res.redirect("/admin/produtos");
    }

}

module.exports = AdministracaoController;