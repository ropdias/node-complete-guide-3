const express = require("express");

const app = express();

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

// app.use((req, res, next) => {
//   console.log("Middleware 1");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Middleware 2");
//   next();
// });

// app.use((req, res, next) => {
//   res.send('<h1>Finished</h1');
// });

app.use("/users", (req, res, next) => {
  res.send("<h1>Users Page !</h1");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Initial Page !</h1");
});

app.listen(3000);
