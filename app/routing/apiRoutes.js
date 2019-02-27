
var friendsData = require("../data/friends");


//Routes
module.exports = function (app) {
    //GET Route to JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    //POST Route for incoming survey results and compatibility logic
    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);
        //Place user input into variable userData
        var userData = req.body;

        console.log(userData);
        //For loop the user's scores and parse integer
        for (var i = 0; i < userData.scores.length; i++) {
            userData.scores[i] = parseInt(userData.scores[i]);
        }
        //The friend is the one with the minimal difference
        var bestFriendIndex = 0;
        var minDiff = 27;

        for (var i = 0; i < friendsData; i++) {
            var totalDiff = 0;
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                var Diff = Math.abs(userData.scores[j] - friendsData[i].scores[j]);
                totalDiff += Diff;
            }
        }

        if (totalDiff < minDiff) {
            bestFriendIndex = i;
            minDiff = totalDiff;
        }


        friendsData.push(userData);

        res.json(friendsData[bestFriendIndex]);



    });
};


//Take user scores and push each score to separate arrays (q1, q2, q3...)
//Each array will be compared to each character's individual score (q1, q2, q3...)
//The most matches will be the friend