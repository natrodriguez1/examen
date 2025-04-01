'use strict';
const {
  Model
} = require('sequelize');
const Color = require('../models').color;
const Ropa = require('../models').ropa;
module.exports = (sequelize, DataTypes) => {
  class color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.color.belongsToMany(models.ropa, {
        through: 'coloresxropa',
        foreignKey: 'colores_id'
      })
    }
  }
  color.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'color',
    tableName: 'colores'
  });
  return color;
};