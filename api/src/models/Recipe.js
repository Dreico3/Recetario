const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  /* ID: *
  Nombre *
  Resumen del plato *
  Puntuación
  Nivel de "comida saludable"
  Paso a paso */

  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    //nombre del creador
    sourceName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isUrl:true
      }
    },
    //nombre del plato
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //resumen del plato
    summary:{
      type:DataTypes.STRING(1234),
      allowNull:false
    },
    //puntuacion
    healthScore:{
      type: DataTypes.INTEGER,
    },
    analyzedInstructions:{
      type: DataTypes.ARRAY(DataTypes.STRING(1234))
    }    
  });
};
