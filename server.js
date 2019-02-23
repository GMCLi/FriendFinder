//Dependencies
var express = require("express");
var path = require("path");

//Express Configuration
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Initiate Server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});