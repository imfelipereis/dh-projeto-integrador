var express = require('express');
var router = express.Router();

let vendas = [];

const VendasController = {
    vendas: (req, res) => {
        res.render("admin/vendas", {
            vendas: vendas
        });
    },

    vendasCadastrar: (req, res) => {
        res.render("admin/vendasCadastrar");
    },

    acaoCadastrar: (req, res) => {

        const id = req.body.id;
        const nome = req.body.nome;
        const preco = req.body.preco;
        const descricao = req.body.descricao;
        const imagem = req.file.filename;

        const objVenda = {
            id: id,
            nome: nome,
            preco: preco,
            descricao: descricao,
            imagem: imagem
        }

        vendas.push(objVenda);

        res.redirect("/admin/vendas");
    },

    acaoEditar: (req, res) => {
        
    },

    acaoExcluir: (req, res) => {
        vendas = vendas.filter((venda) => venda.id != req.params.idVenda);

        res.redirect("/admin/vendas");
    }

}

module.exports = VendasController;