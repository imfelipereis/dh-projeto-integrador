const express = require('express');
const pedidosController = require('../controllers/pedidosController');
var router = express.Router();
const userController = require('../controllers/userController');



const uploadFile = require('../middlewares/multerMiddleware')
const validations = require('../middlewares/validadaRegisterMiddleware')





//Formulario Login


//Processamento Login
router.get('/profile', userController.profile);

//pagina usuario
router.get("/pagina-usuario", userController.painelUsuario);

router.post('/usuarioLogin',userController.usuarioLogin);



//Banco de dados

router.get("/usuarios", userController.usuariosBd);
router.post("/usuarios/insertuser", userController.insertUser);

router.get("/pedidos", userController.listaPedidos);


module.exports = router;



//Registrar e logar Usuário
router.get("/cadastrar", userController.showRegister);
router.post("/cadastrar", userController.register);

router.get("/logar", userController.showLogar);
router.post("/logar", userController.login);
