'use strict';
module.exports = (sequelize, DataTypes) => {
  var burgers = sequelize.define('burgers', {
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
  }, {
    timestamps: false
  });
  burgers.associate = function(models) {
    // associations can be defined here
  };
  return burgers;
};