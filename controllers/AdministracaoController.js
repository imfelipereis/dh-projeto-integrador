var express = require('express');
var router = express.Router();
const db = require ("../database/models/")
const bcrypt = require("bcryptjs");

const AdministracaoController = {
    dashboard: (req, res) => {
        let info = {
            titulo: 'Página Administrativa',
        };
        return res.render("admin/dashboard", info);
    },

    // vendas: (req, res) => {
    //     let info = {
    //         titulo: 'Vendas',
    //     };
    //     return res.render("vendas", info);
    // },

    cadastrarVenda: (req, res) => {
        let info = {
            titulo: 'Cadastrar Nova Venda',
        };
        return res.render("cadastrar-venda", info);
    },

    acaoCadastrarVenda: (req, res) => {
        
        const id = req.body.id;
        const image = req.body.image;
        const nome = req.body.nome;
        const geracao = req.body.geracao;
        const preco = req.body.preco;
        const estoque = req.body.estoque;
        const descricao = req.body.descricao;

        const objVenda = {
            id: id,
            image: image,
            nome: nome,
            geracao: geracao,
            preco: preco,
            estoque: estoque,
            descricao: descricao
        }

        vendas.push(objVenda);

        res.redirect("/vendas");
    },

    editarVenda: (req, res) => {
        let info = {
            titulo: 'Editar Vende',
        };
        return res.render("editar-venda", info)
    },

    produtos: (req, res) => {
        let info = {
            titulo: 'Produtos',
        };

        res.render("produtos", info, {
            produtos: produtos
        });

    },

    cadastrarProduto: (req, res) => {
        let info = {
            titulo: 'Cadastrar Novo Produto',
        };
        return res.render("admin/produtosCadastrar", info);
    },

    acaoCadastrar: async (req, res) => {
        
        const id = req.body.id;
        const image = req.body.image;
        const nome = req.body.nome;
        const geracao = req.body.geracao;
        const preco = req.body.preco;
        const estoque = req.body.estoque;
        const descricao = req.body.descricao;

        const objProduto = {
            id: id,
            image: image,
            nome: nome,
            geracao: geracao,
            preco: preco,
            estoque: estoque,
            descricao: descricao
        }
        produtos.push(objProduto);
        
        await db.Produtos.create({image: image, nome: nome, geracao:geracao, preco:preco, estoque:estoque, descricao:descricao}) 
        

        res.redirect("/produtos");
    },

    editar: (req, res) => {
        let info = {
            titulo: 'Editar Produto',
        };
        return res.render("editar", info);
    },

    // clientes: (req, res) => {
    //     let info = {
    //         titulo: 'Clientes',
    //     };
    //     return res.render("clientes", info)
    // }
    logar: (req, res) =>{
       res.render("logar")
    },

    excluir: async (req, res) => {
        const id = req.body.id;
        db.Produtos.destroy({
            where: {id: id}
        })
    }
}

module.exports = AdministracaoController;