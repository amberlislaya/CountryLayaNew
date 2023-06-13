const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Activity", {
id: {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true,
  allowNull: false,
},
name:{
  type: DataTypes.STRING,
  allowNull: false,
  unique:true,
  validate: {
    isAlpha:{
      args:true,
      msg: "cannot containt numbers"
    }
  }
},
difficulty: {
  type: DataTypes.INTEGER,
  allowNull: false,
},
duration: {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
min: 1,
max: 24
}

},
season:{
  type: DataTypes.STRING, 
  allowNull: false,
},
},
  { frezeeTableName: true, timestamps: false } //FREZEE THE NAME
);
};