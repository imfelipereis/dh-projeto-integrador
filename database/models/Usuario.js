const { DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define("Usuarios", {
        
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        telefone: DataTypes.STRING,
        cep: DataTypes.STRING,
        logradouro: DataTypes.STRING,
        numero: DataTypes.STRING,
        complemento: DataTypes.STRING,
        bairro: DataTypes.STRING

    }, {
        tableName: "usuarios",
        timestamps: false

    });
    
    return Usuarios;

}