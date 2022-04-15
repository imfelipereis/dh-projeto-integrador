const CarrinhoController = {
    addItem: function(req, res) {
        res.send('Item Adicionado');
    },
    removerItem: function(req, res) {
        res.send('Item removido');
    }
}

module.exports = CarrinhoController;