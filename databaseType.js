const sequelize = require("./databaseS");
const { DataTypes } = require("sequelize");

// <----------------------------------ТИПЫ В БД---------------------------------------->
// указываем данные из таблицы

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    material: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "test_product",
    // автоматически создаст нам created_at, updated_at
    timestamps: false,
  }
);

console.log(typeof Product);
module.exports = Product;






