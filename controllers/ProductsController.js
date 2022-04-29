const ProductsController = {
    descricaoProduto: (req,res) => {
        let info = { 
            titulo: 'Descrição do Produto',
        };
        return res.render("descricaoProduto", info)
    },

} 