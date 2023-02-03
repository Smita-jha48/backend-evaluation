'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class performance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      performance.associate = function(models) {
        performance.belongsTo(models.company, {
          foreignKey: 'company_id'
        });
      };
      
    }
  }
  performance.init({
    company_id: DataTypes.INTEGER,
    key: DataTypes.STRING,
    value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'performance',
  });
  return performance;
};