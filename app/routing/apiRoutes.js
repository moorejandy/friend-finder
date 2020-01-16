var friends = require("../data/friends");







module.exports = function (app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

    app.post("/api/friends", function(req,res){
        var newFriend = req.body;
        var scores = newFriend.scores;
        var bestMatch = {
            name: "",
            photo: "",
            difference: Infinity
        };
        var totalDifference;

//Loop through all friends in friends.js, nested loop to check for absolute differences, if total difference is less than equal to best
//match.difference reset best match object to current friend 



//res.json(bestMatch);

    })

}