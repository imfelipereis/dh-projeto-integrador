const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Produtos = sequelize.define("Produtos", {
        
        id_produtos: {
        type: DataTypes.INTEGER,
        primaryKey: true
        },

        nome_produto: DataTypes.STRING,
        geracao: DataTypes.STRING,
        cor: DataTypes.STRING,
        imagens: DataTypes.STRING,
        pedido_id: DataTypes.STRING,
        qtd_estoque: DataTypes.STRING,
        valor: DataTypes.STRING,
        
    }, 
        {
        tableName: "produtos",
        timestamps: false

    });

    return Produtos;
}
