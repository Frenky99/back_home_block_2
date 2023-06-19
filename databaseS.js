const { Sequelize } = require("sequelize");

// <-------------------------------ПОДКЛЮЧЕНИЕ К БД----------------------------------------->
// задаем параметры БД, к которой необходимо подключится
const sequelize = new Sequelize("home_shop", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
