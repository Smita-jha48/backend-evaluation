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
      company.belongsTo(models.sector, {
        foreignKey: 'sectorId'
      });
      company.hasMany(models.tag,{
        foreignKey:'company_id'
      });
      // define association here
    }
  }
  company.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    ceo: DataTypes.STRING,
    sectorId: DataTypes.INTEGER,
    score: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'company',
  });
  return company;
};