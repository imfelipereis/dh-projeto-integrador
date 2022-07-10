var express = require('express');
var router = express.Router();

let clientes = [];

const ClientesController = {
    clientes: (req, res) => {
        res.render("admin/clientes", {
            clientes: clientes
        });
    },

    clientesCadastrar: (req, res) => {
        res.render("admin/clientesCadastrar");
    },

    acaoCadastrar: (req, res) => {

        const id = req.body.id;
        const nome = req.body.nome;
        const sobrenome = req.body.sobrenome;
        const cpf = req.body.cpf;
        const data_nascimento = req.body.data_nascimento;
        const email = req.body.email;
        const telefone = req.body.telefone;
        const situacao_usuario = req.body.situacao_usuario;
        const tipo_cliente = req.body.tipo_cliente;

        const cep = req.body.cep;
        const logradouro = req.body.logradouro;
        const numero = req.body.numero;
        const complemento = req.body.complemento;
        const ponto_referencia = req.body.ponto_referencia;
        const bairro = req.body.bairro;
        const cidade = req.body.cidade;
        const estado = req.body.estado;

        const objCliente = {
            id: id,
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            data_nascimento: data_nascimento,
            email: email,
            telefone: telefone,
            situacao_usuario: situacao_usuario,
            tipo_cliente: tipo_cliente,

            cep: cep,
            logradouro: logradouro,
            numero: numero,
            complemento: complemento,
            ponto_referencia: ponto_referencia,
            bairro: bairro,
            cidade: cidade,
            estado: estado
        }

        clientes.push(objCliente);

        res.redirect("/admin/clientes");
    },

    acaoEditar: (req, res) => {

    },

    acaoExcluir: (req, res) => {
        clientes = clientes.filter((cliente) => cliente.id != req.params.idCliente);

        res.redirect("/admin/clientes");
    },
}

module.exports = ClientesController;