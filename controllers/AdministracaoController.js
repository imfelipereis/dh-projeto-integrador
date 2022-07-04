var express = require('express');
var router = express.Router();

const AdministracaoController = {
    dashboard: (req, res) => {
        res.render("admin/dashboard");
    }
}

module.exports = AdministracaoController;