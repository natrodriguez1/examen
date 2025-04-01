'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class colorxropa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  colorxropa.init({
    colores_id: DataTypes.INTEGER,
    ropa_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'colorxropa',
    tableName: 'coloresxropa'
  });
  return colorxropa;
};