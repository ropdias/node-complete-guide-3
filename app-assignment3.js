const path = require("path");

const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/users", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "assignment3-users.html"));
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "assignment3-home.html"));
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "assignment3-404.html"));
});

app.listen(3000);
