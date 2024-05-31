const path = require('path');

const express = require('express');

// You use rootDir here because you can't get an absolute path to the
// folder of the app.js file if you use path.join(__dirname, "views", "shop.html") directly here
// You could use path.join(__dirname, '..', "views", "shop.html")
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
