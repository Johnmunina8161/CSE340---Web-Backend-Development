const express = require('express');
const router = express.Router();

// Static Routes
// Set up "public" folder / subfolders for static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/images"));

module.exports = router;



