var Sequelize = require('sequelize')

var currency = sequelize.define(
  'currency',
  {
    id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    name: Sequelize.TEXT,
    symbol: Sequelize.TEXT,
    indian_price: Sequelize.FLOAT,
    status: Sequelize.ENUM('Active', 'Inactive'),
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

module.exports = currency