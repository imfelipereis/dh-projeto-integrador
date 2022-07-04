var express = require('express');
var router = express.Router();

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/upload/images/produtos");
    },
    filename: function(req, file, cb){
        cb(null, "upload_imagem_produto_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const AdministracaoController = require('../controllers/AdministracaoController');

router.get("/admin/produtos", AdministracaoController.produtos);
router.get("/admin/produtos/cadastrar", AdministracaoController.produtosCadastrar);
router.post("/admin/produtos/acaoCadastrar", upload.single('imagemProduto'), AdministracaoController.acaoCadastrar);
router.get("/admin/produtos/excluir/:idProduto", AdministracaoController.acaoExcluir);

module.exports = router;