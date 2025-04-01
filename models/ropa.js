'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ropa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     models.ropa.belongsToMany(models.color, {
      through: 'coloresxropa',
      foreignKey: 'ropa_id'
     })
    }
  }
  ropa.init({
    nombre: DataTypes.STRING,
    tipo: DataTypes.STRING,
    talla: DataTypes.STRING,
    precio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ropa',
    tableName: 'ropa'
  });
  return ropa;
};