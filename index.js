const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "home_shop",
});

// вывод нашей БД
connection.query("SELECT * FROM product;", (err, result) => {
  if (err) {
    throw err;
  }
  console.log(result);
});

// // вывод БД с фильтром через placeholder
// connection.query(
//   "SELECT * FROM test_product WHERE `price` > ?",
//   [990],
//   (err, results) => {
//     console.log(results);
//   }
// );

// // добавление новой строки в БД
// var post = {name: "Котик", price: 4990, city: "Новгород" };
// var query = connection.query(
//   "INSERT INTO test_product SET ?",
//   post,
//   function (error, results, fields) {
//     if (error) throw error;
//   }
// );
// console.log(query.sql); 
