'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tag.belongsTo(models.company, {
        foreignKey: 'company_id'
      });
    }
  }
  tag.init({
    company_id: DataTypes.STRING,
    tag_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tag',
  });
  return tag;
};