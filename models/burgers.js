'use strict';
module.exports = (sequelize, DataTypes) => {
  var Burgers = sequelize.define('Burgers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {});
  Burgers.associate = function(models) {
    // associations can be defined here
  };
  return Burgers;
};