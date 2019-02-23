//Dependencies
var path = require("path");

//Routes
module.exports = function (app) {
    //GET Route to display survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //Catch-all Route
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};