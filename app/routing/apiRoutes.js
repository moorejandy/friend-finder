var path = require('path');

var friends = require("../data/friends");



module.exports = function (app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

    app.post("/api/friends", function(req,res){
        var newFriend = req.body;
        var userScores = newFriend.scores;
        var bestMatch = {
            name: "",
            photo: "",
            difference: Infinity
        };
        var totalDifference;

//Loop through all friends in friends.js, nested loop to check for absolute differences, if total difference is less than equal to best
//match.difference reset best match object to current friend 

for (var i =0; i < friends.length; i++){
    var totalDifference = 0;
    var currentFriend = friends[i];
    console.log(currentFriend.name);

    for (var j = 0; j < currentFriend.scores.length; j++) {
        currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(currentUserScore - currentFriendScore);
    }

    if (totalDifference <= bestMatch.difference){
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.difference = totalDifference;

    }
}

res.json(bestMatch);

    })

}