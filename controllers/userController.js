var express = require('express');
var router = express.Router();

var PoliticasController = require('../controllers/PoliticasController');
const User = require('../Models/User');
const fs = require ("fs");
const res = require('express/lib/response');
const {validationResult} = require('express-validator');

const userController = {
register: (req,res) => {
    return res.render("cadastro")
},
processRegister: (req,res) => {
    const resultValidations = validationResult(req);

    if(resultValidations.errors.length > 0){
        return res.render("cadastro", {
            errors: resultValidations.mapped(),
        });

     }
     return res.send("Ok, as validações passaram")
},

}
module.exports = userController;