const sequelize = require("./databaseS");

// <------------------------------ПРОВЕРКА ПОДКЛЮЧЕНИЯ К БД----------------------------------->
// проверяем подключились ли мы к БД

;(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
