const express = require("express");
const app = express();
const port = 3000;

app.get("/hello/hehe", (req, res) => {
  return res.json({ firsName: "Home", lastName: "Work" });
});``

app.get("/hello/:name", (request, response) => {
  request.params.name;
  return response.json({ message: `Hello, ${request.params.name}` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
