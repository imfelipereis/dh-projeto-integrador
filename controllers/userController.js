const { validationResult } = require('express-validator');
const Usuarios = require('../models/User')
const bcrypt = require('bcrypt');
const { findUserByField } = require('../models/User');
const fs = require ('fs');
const { PassThrough } = require('stream');
const db = require ("../database/models/")


let findUserByEmail = function (email){
    let todosUsuarios = this.getUsers();
    let userFoundTeste = todosUsuarios.find( oneUser => oneUser.email === email );
    return userFoundTeste;
}

const controller = {
    register: (req, res) =>{
        return res.render("cadastrar")
    },

    profile:(req, res) => {
        return res.render("profile")
    },
    
    painelUsuario: (req, res) =>{
        return res.render("pagina-usuario")
    },

    usuarioLogin: (req, res) =>{
        res.render("pagina-usuario")
    },

    usuariosBd: (req, res) => {
        db.Usuarios.findAll().then((usuarios) => {
            res.render("listaUsuarios", {
                listaUsuarios: usuarios
            }) 
        })
    },

    insertUser: (req, res) => {
        res.send("Dados recebidos")
    },

    listaPedidos: (req, res) => {
        db.Pedidos.findAll().then((pedidos) => {
            res.render("listaPedidos", {
                listaPedidos: pedidos
            })
        })
    },

    showLogin: (req, res) =>{
        res.render("logar")
    },
 
    showRegister: (req, res) => {
        return res.render("cadastrar");
    },

    register: async (req, res) => {
        const {nome, email, senha, cpf, sobrenome, telefone, cep, logradouro, numero, complemento, bairro,} = req.body;

        await db.Usuarios.create({ nome: nome, email: email, senha: senha, sobrenome:sobrenome, cpf:cpf, telefone:telefone, cep:cep, logradouro:logradouro, numero:numero, complemento:complemento, bairro:bairro })
        res.redirect("/logar")

        },
        showLogar: (req, res) => {
            return res.render("logar");
        },

    login: async (req, res) => {
            try {
              const { email, senha } = req.body;
        
              const user = await Usuarios.findOne({
                where: {
                  email,
                }
              });
        
              if(!user) {
                return res.render('logar', { error: "E-mail/Senha estão incorretos ou não existe", old: req.body});
              }
        
              if(!bcrypt.compareSync(password, user.password)) {
                return res.render('logar', {error: "E-mail/Senha estão incorretos ou não existe"});
              }
        
              req.session.user = user;
        
              res.redirect('/index');
              
            } catch(error) {
              console.log(error);
              return res.render('logar', {error: "Sistema indisponível, tente novamente!", old: req.body})
            }
          },
        }
         

module.exports = controller;
