const { DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    const Pedidos = sequelize.define("Pedidos", {
        id_cliente: DataTypes.STRING,
        status: DataTypes.STRING,
        total: DataTypes.STRING,
        data_pedido: DataTypes.STRING,
        data_modificacao: DataTypes.STRING,
        end_entrega: DataTypes.STRING,
        produtos_id: DataTypes.STRING,
        forma_pagamento: DataTypes.STRING,
        tipo_entrega: DataTypes.STRING,
        usuarios_id: DataTypes.STRING,
        codigo_rastreio: DataTypes.STRING

        }, {
            tableName: "pedidos",
            timestamps: false

        });

        return Pedidos;


}