const fs = require("fs");
const path = require("path");
const axios = require("axios");
const http = require("http");

(async () => {
  // мы через axios и метод get получаем удаленную запись
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/albums"
  );

  //  // мы записали данные с json в наш файлик
  //   fs.writeFile(
  //     path.resolve(__dirname, "albums.json"),
  //     JSON.stringify(data),
  //     "utf-8",
  //     (err) => {
  //       if (err) {
  //         throw err;
  //       }
  //       console.log("Успешная запись");
  //     }
  //   );
  //   })();

  http
    .createServer((request, response) => {
      response.setHeader("Content-Type", "text/html; charset=utf-8;");

      if (request.url === "/home" || request.url === "/") {
        // рабочий вариант, считывает data // response.write(JSON.stringify(data)); 
        

        fs.readFile(
          path.resolve(__dirname, "albums.json"),
          "utf-8",
          (err, data) => {
            if (!err) {
              // страница существует, здесь не хочет считывать data, проблема в области видимости?
              response.write(JSON.stringify(data));
              // response.end();
              // console.log(JSON.stringify(data));
            } else {
              // страница не найдена
              console.log("ошибка");
            }
          }
        );

        // странички с инфой
        //  https://www.mousedc.ru/learning/485-routing-nodejs/
        // https://nodejs.org/api/fs.html#fsreadfilepath-options-callback

        // fs.readFile(
        //   (path.resolve(__dirname, "albums.json")),
        //   // JSON.stringify(data),
        //   // "albums.json",
        //   "utf-8",
        //   (err, data) => {
        //     if (err) {
        //       // console.log('ошибка');
        //       // return;
        //       throw err;
        //     }
        //     response.write(JSON.stringify(data));
        //   }
        // );

        // преобразовать в fs.readFile
      } else if (request.url == "/about") {
        response.write("<h2>About</h2>");
      } else if (request.url == "/contact") {
        response.write("<h2>Contacts</h2>");
      } else {
        response.write("<h2>Not found</h2>");
      }
      response.end();
    })
    .listen(3000);
})();
