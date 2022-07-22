const express = require('express');
const pedidosController = require('../controllers/pedidosController');
var router = express.Router();
const userController = require('../controllers/userController');



const uploadFile = require('../middlewares/multerMiddleware')
const validations = require('../middlewares/validadaRegisterMiddleware')



//Formulário do registo
router.get('/cadastrar', userController.register);

//Processar o registro
router.post('/acaoCadastrar', uploadFile.single('avatar'), validations, userController.processRegister);

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



