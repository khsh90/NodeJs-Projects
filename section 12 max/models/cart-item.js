const Sequelize = require("sequelize").Sequelize;
const sequelize = require("../util/database");

const CartItem = sequelize.define("cartItem", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  quantity: Sequelize.INTEGER,
});

module.exports=CartItem;
