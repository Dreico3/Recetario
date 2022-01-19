const {DataTypes}=require("sequelize");

module.exports=(sequelize)=>{
    sequelize.define('diet',{
        nombre:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        descripcion: DataTypes.STRING(1234),
    })
}