const express = require("express");
const bodyParser = require("body-parser");
//const router = require("./Components/Messages/network");
const router = require("./Network/routes");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);
router(app);

app.use("/app", express.static("public"));
app.listen(3000);
console.log("La aplicación está escuchando en http://localhost:3000");
