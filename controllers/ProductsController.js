const listaProdutos = [
    {
     "id": 1,
     "name": "Fone Airpods 1",
     "cor": "Prata",
     "img": "/produtos/produto-1.png",
     "preco": "300,00",
    },

    {
     "id": 2,
     "name": "Fone Airpods 1",
     "cor": "Azul",
     "img": "/produtos/produto-1.png",
     "preco": "300,00",
    },

    {
    "id": 3,
     "name": "Fone Airpods 2",
     "cor": "Prata",
     "img": "/produtos/produto-2.png",
     "preco": "350,00",
    },

    {
    "id": 4,
     "name": "Fone Airpods 2",
     "cor": "Azul",
     "img": "/produtos/produto-2.png",
     "preco": "350,00",
    },

    {
    "id": 5,
    "name": "Fone Airpods 3",
    "cor": "Prata",
    "img": "/produtos/produto-3.png",
    "preco": "400,00",
    },

    {
    "id": 6,
    "name": "Fone Airpods 3",
    "cor": "Azul",
    "img": "/produtos/produto-3.png",
    "preco": "400,00",
    },

    {
    "id": 7,
    "name": "Fone Airpods 4",
    "cor": "Prata",
    "img": "/produtos/produto-4.png",
    "preco": "500,00",
    },

    {
    "id": 8,
    "name": "Fone Airpods 4",
    "cor": "Azul",
    "img": "/produtos/produto-4.png",
    "preco": "500,00",
    }
]

const ProductsController = {
    descricaoProduto: (req,res) => {
        let info = { 
            titulo: 'Descrição do Produto',
        };
        return res.render("descricaoProduto", info)
    },
    detalheProduto: (req, res) => {
        let produto = listaProdutos.find(produto => produto.id == req.params.id)
        res.render("descricaoProduto", {produto: produto})
    },
}


module.exports = ProductsController;