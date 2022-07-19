var express = require('express');
var router = express.Router();

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/uploads/images/vendas");
    },
    filename: function(req, file, cb){
        cb(null, "upload_imagem_venda_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const VendasController = require('../controllers/VendasController');

router.get("/admin/vendas", VendasController.vendas);
router.get("/admin/vendas/cadastrar", VendasController.vendasCadastrar);
router.post("/admin/vendas/acaoCadastrar", upload.single('imagemVenda'), VendasController.acaoCadastrar);
router.get("/admin/vendas/excluir/:idVenda", VendasController.acaoExcluir);

module.exports = router;