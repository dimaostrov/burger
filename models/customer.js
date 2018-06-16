'use strict';
module.exports = (sequelize, DataTypes) => {
  var customers = sequelize.define('customers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    timestamps: false
  });
  customers.associate = function(models) {
    // associations can be defined here
    customers.hasMany(models.burgers);
  };

  
  return customers;
};