const { validationResult } = require('express-validator');
const User = require('../models/User')
const bcrypt = require('bcrypt');
const { findUserByField } = require('../models/User');
const fs = require ('fs')
const db = require("../database/models")



// module.exports = pedidosController;