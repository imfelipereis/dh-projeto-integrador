
module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("Admin", {

        id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
        nome: { type: DataTypes.STRING(200), allowNull: true },
        email: { type: DataTypes.STRING(75), allowNull: true, unique: true },
        senha: { type: DataTypes.STRING(100), allowNull: true },
        
    }, {
        tableName: 'admin',
        Timestamps: true,
        paranoid: true
    })
    return Admin;
}    

