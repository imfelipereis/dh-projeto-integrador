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
    },

    painelUsuario: (req, res) => {
        let info = {
            titulo: 'Painel do Usuario',
        };
        return res.render("pagina-usuario", info)
    },

    login: (req, res) => {
        let info = {
            titulo: 'Login',
        };
        return res.render("login", info)
    },

    carrinho: (req, res) => {
        let info = {
            titulo: 'Carrinho',
        };
        return res.render("carrinho", info)
    },

    cadastro: (req, res) => {
        let info = {
            titulo: 'Cadastro',
        };
        return res.render("cadastro", info)
    },

    procurar: (req, res) => {
        let info = {
            titulo: 'Procurar',
        };
        return res.render("procurar", info)

    },

}

module.exports = PoliticasController;