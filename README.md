# Friend-Finder

## Homework 13

This a web application that simulates a friend finder. Fill out a 10 question survey, and let our algorithm
match you with you new best friend.

# Link to App

[Click Here](https://floating-sands-45439.herokuapp.com/)

# Instructions

* Create separate files for routing, views, and server logic.
* Require express and path npm packages in the server.js file.
* Create two html files - home page and survey
* Include two routes in hmtlRoutes.js file:
    -A GET Route to /survey that displays survey page
    -A default catch-all routes that leads to home page
* apiRoutes.js file to include two routes
    -A GET Route with url /api/friends to disply a JSON fo all possible friends
    -A POST Routes /api/friends. Handles incoming survey and runs compatibility logic.
* Save new user data into friends.js as an array of objects with namem, photo, and survey scores for each friend.

# Tech Utilized

* JavaScript
* node.js
* Express.js
* Bootstrap
* jQuery
* HTML
