'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      company.associate = function(models) {
        company.hasMany(models.tags, {
          foreignKey: 'company_id',
        });
      };
      company.associate = function(models){
        company.hasMany(models.performance,{
          foreignKey: 'company_id',
        });
      };
      // define association here
    }
  }
  company.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    ceo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'company',
  });
  return company;
};