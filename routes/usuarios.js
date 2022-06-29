const express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');



const uploadFile = require('../middlewares/multerMiddleware')
const validations = require('../middlewares/validadaRegisterMiddleware')



//Formulário do registo
router.get('/cadastrar', userController.register);

//Processar o registro
router.post('/acaoCadastrar', uploadFile.single('avatar'), validations, userController.processRegister);

//Formulario Login
router.get('/logar', userController.login);

//Processamento Login
router.post('/acaoLogar', userController.loginProcess);

router.get('/profile', userController.profile);

//pagina usuario
router.get("/pagina-usuario", userController.painelUsuario);

router.post('/usuarioLogin',userController.usuarioLogin);



//Banco de dados

router.get("/usuarios", userController.usuariosBd);
router.post("/usuarios/insertuser", userController.insertUser);



module.exports = router;



