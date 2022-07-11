const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.use(adminRoutes); // This will import all the routes in the admin.js in here. The middleware order still matters.
app.use(shopRoutes);

app.listen(3000);
