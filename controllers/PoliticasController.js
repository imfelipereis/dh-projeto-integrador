const PoliticasController = {
    index: (req, res) => {
        let info = {
            titulo: 'Programa AirPod Para Sempre',
        };
        return res.render("index", info);
    },

    sobreNos: (req, res) => {
        let info = {
            titulo: 'Sobre Nós',
        };
        return res.render("sobre-nos", info)
    },

    termosECondicoes: (req, res) => {
        let info = {
            titulo: 'Termos e Condições',
        };
        return res.render("termos-e-condicoes", info)
    },

    politicaDePrivacidade: (req, res) => {
        let info = {
            titulo: 'Política de Privacidade',
        };
        return res.render("politica-de-privacidade", info)
    },
    
    entregaProdutos: (req, res) => {
        let info = {
            titulo: 'Entrega dos Produtos',
        };
        return res.render("entrega-produtos", info)
    }
}

module.exports = PoliticasController;