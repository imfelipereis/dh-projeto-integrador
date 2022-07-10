var express = require('express');
var router = express.Router();

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/uploads/images/clientes");
    },
    filename: function(req, file, cb){
        cb(null, "upload_imagem_cliente_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const ClientesController = require('../controllers/ClientesController');

router.get("/admin/clientes", ClientesController.clientes);
router.get("/admin/clientes/cadastrar", ClientesController.clientesCadastrar);
router.post("/admin/clientes/acaoCadastrar", upload.single('imagemCliente'), ClientesController.acaoCadastrar);
router.get("/admin/clientes/excluir/:idCliente", ClientesController.acaoExcluir);

module.exports = router;