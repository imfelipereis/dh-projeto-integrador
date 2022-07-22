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
        const valor = req.body.valor;
        const qtdEstoque = req.body.qtdEstoque;
        const descricao = req.body.descricao;

        const objVenda = {
            id: id,
            image: image,
            nome: nome,
            geracao: geracao,
            valor: valor,
            qtdEstoque: qtdEstoque,
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
        return res.render("cadastrar-produto", info);
    },

    acaoCadastrar: (req, res) => {
        
        const id = req.body.id;
        const image = req.body.image;
        const nome = req.body.nome;
        const geracao = req.body.geracao;
        const valor = req.body.valor;
        const qtdEstoque = req.body.qtdEstoque;
        const descricao = req.body.descricao;

        const objProduto = {
            id: id,
            image: image,
            nome: nome,
            geracao: geracao,
            valor: valor,
            qtdEstoque: qtdEstoque,
            descricao: descricao
        }

        produtos.push(objProduto);

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

    cadastrarCliente: (req, res) => {
        let info = {
            titulo: 'Cadastrar Novo Cliente',
        };
        return res.render("cadastrar-cliente", info);
    },

    acaoCadastrarCliente: (req, res) => {
        
        const id = req.body.id;
        const image = req.body.image;
        const nome = req.body.nome;
        const geracao = req.body.geracao;
        const valor = req.body.valor;
        const qtdEstoque = req.body.qtdEstoque;
        const descricao = req.body.descricao;

        const objCliente = {
            id: id,
            image: image,
            nome: nome,
            geracao: geracao,
            valor: valor,
            qtdEstoque: qtdEstoque,
            descricao: descricao
        }

        clientes.push(objCliente);

        res.redirect("/clientes");
    },

    editarCliente: (req, res) => {
        let info = {
            titulo: 'Editar Cliente',
        };
        return res.render("editar-cliente", info)
    },

    usuariosBd: (req, res) => {
        db.Usuarios.findAll().then((usuarios) => {
            res.render("listaUsuarios", {
                listaUsuarios: usuarios
            }) 
        })
    },

    logar: (req, res) =>{
       res.render("logar")
    },

    logarAcao: async function (req, res){
        const { email, senha } = req.body;

        const usuarioEncontrado = await db.Admin.findOne({where: {email: email} })

        if ( usuarioEncontrado == null) {
            res.render("logar", {error: ["    Usuario ou senha invalidos"] });
            return
        }
        if (!bcrypt.compareSync(senha, usuarioEncontrado.senha)){
            res.render("logar", {error: ["    Usuario ou senha inválidos"] });
            return;
        }

        req.session.email = usuarioEncontrado.email;
        req.session.nome = usuarioEncontrado.nome;

        res.redirect("admin/dashboard")
        
    }
}

module.exports = AdministracaoController;