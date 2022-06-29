const { DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define("Usuarios", {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        data_nascimento: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        telefone: DataTypes.STRING,
        situacao_usuario: DataTypes.STRING,
        usuario_adm: DataTypes.STRING
    }, {
        tableName: "usuarios",
        timestamps: false

    });
    
    return Usuarios;

}