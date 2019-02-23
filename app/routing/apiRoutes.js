
var friendsData = require("../data/friends");
var userData = require("../data/userdata")

//Routes
module.exports = function(app) {
//GET Route to JSON of all possible friends
app.get("/api/friends", function(req, res) {
    res.json(friendsData);
});
//POST Route for incoming survey results and compatibility logic
app.post("/api/friends", function(req, res) {
    userData.push(req.body);
    res.json(userData);
});
}