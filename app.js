const express = require("express");

const app = express();

app.get("/favicon.ico", (req, res) => res.sendStatus(204));
// For handling the favicon.ico in multiple ways you can check this stackoverflow question:
// https://stackoverflow.com/questions/35408729/express-js-prevent-get-favicon-ico
// app.use((req, res, next) => {
//   if (req.originalUrl && req.originalUrl.split("/").pop().includes('favicon')) {
//     return res.sendStatus(204);
//   }
//   return next();
// });

app.use("/", (req, res, next) => {
  console.log("This always runs!");
  next();
});

app.use((req, res, next) => {
  console.log("This always runs too!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In 'add-product' middleware!");
  res.send("<h1>The 'Add Product' Page!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In 'hello from express' middleware!");
  res.send("<h1>Hello from express!</h1>");
});

app.listen(3000); // This do the same as the next 2 lines:
// const server = http.createServer(app);
// server.listen(3000);
