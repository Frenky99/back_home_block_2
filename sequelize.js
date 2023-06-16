const { Sequelize, DataTypes } = require("sequelize");

// <------------------------------------------------------------------------------------------------------->
// задаем параметры БД, к которой необходимо подключится
const sequelize = new Sequelize("home_shop", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// <------------------------------------------------------------------------------------------------------->
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

// <------------------------------------------------------------------------------------------------------->
(async () => {
  try {
    await Product.sync({
      // alter(булево) означает при синхронизации с нашей таблице, если то что мы прописали выше не совпадает с нашей БД или ее вообще не существует,
      // то он будет изменена, если выставлено true
      alter: true,
      // forse означает принудительную перезапись таблицы, когда мы работает с таблицей в которой уже есть данные,
      // значение выставляется в false или вообще не указывается
      force: false,
    });
    // <------------------------------------------------------------------------------------------------------->
    // удаляем строку из таблицы
    const product = await Product.findByPk(5);
    product.destroy();
    // <------------------------------------------------------------------------------------------------------->
    // // обновляем одну строку в нашей таблице, обязательно save
    // const product = await Product.findOne({
    //   where: {
    //     city: "Волгоград",
    //   },
    // });
    // product.city = "Тула";
    // product.save();
    // console.log(product);
    // <------------------------------------------------------------------------------------------------------->
    // // проверяет есть ли такой id в нашей БД, если есть выведет в консоль true, если нет, то выдаст Not found!
    // const product = await Product.findByPk(5);
    // if (product === null) {
    //   console.log("Not found!");
    // } else {
    //   console.log(product instanceof Product);
    // }
    // <------------------------------------------------------------------------------------------------------->
    // // выводим значение с определенным фильтром, findOne выведет только первую совпадающуюся запись
    // const products = await Product.findAll({
    //   where: {
    //     city: "Волгоград",
    //   },
    // });
    // console.log(products);
    // <------------------------------------------------------------------------------------------------------->
    // // добавление новой строки в таблицу и вывод ее id
    // const product = await Product.create({
    //   name: "Крокодил",
    //   material: "пластик",
    //   price: '390'
    // });
    // console.log("Product's auto-generated ID:", product.id);
  } catch (error) {
    console.error(error);
  }
})();

// <------------------------------------------------------------------------------------------------------->
// // проверяем подключились ли мы к БД
// ;(async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();
