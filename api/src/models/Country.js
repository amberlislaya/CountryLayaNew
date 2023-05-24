const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
  type: DataTypes.UUID,
  primaryKey: true,
  defaultValue: DataTypes.UUIDV4,
  allowNull: true,
},
name: {
  type: DataTypes.STRING,
  allowNull: false,
},
image: {
 type: DataTypes.STRING,
 allowNull: false,
},
continent: {
type: DataTypes.STRING,
allowNull: false,
},
capital: {
  type: DataTypes.STRING,
  allowNull: false,
},
subregion: {
  type: DataTypes.STRING,
  allowNull: false,
},
area: {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  allowNull: false,
},
population: {
  type: DataTypes.INTEGER,
  allowNull: false,
},
created: {
  type: DataTypes.BOOLEAN,
  defaultValue:true,
}
},
   { frezeeTableName: true, timestamps: false }
);
};
