const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.use("/add-product", (req, res, next) => {
  console.log("In 'add-product' middleware!");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("In 'hello from express' middleware!");
  res.send("<h1>Hello from express!</h1>");
});

app.listen(3000);
