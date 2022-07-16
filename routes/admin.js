const path = require("path");

const express = require("express");

// You use rootDir here because you can't get an absolute path to the 
// folder of the app.js file if you use path.join(__dirname, "views", "add-product.html") directly here
// You could use path.join(__dirname, '..', "views", "add-product.html")
const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
