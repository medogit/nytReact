// Require our dependecies
var express = require("express");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");

// Set up a default port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 3000;
mongoose.Promise = bluebird;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/", routes);



// if (process.env.MONGODB_URI) {
//   mongoose = mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose = mongoose.connect("mongodb://localhost/articlesApp");
// }


// var db = mongoose.connection;

// db.on("error", function(err) {
//   console.log(`Mongoose Error: ${err}`);
// });
// ===============================================================================================================

// const MONGODB_URI: mongodb://heroku_7mzq89w2:clits952ovo1c33bsntc8hp97v@ds121014.mlab.com:21014/heroku_7mzq89w2
// var db = process.env.MONGODB_URI || "mongodb://localhost/articlesApp";

mongoose.connect("mongodb://heroku_d8wws4p4:dn8e9bih6cbqa9bk9g4b1tqn6m@ds127564.mlab.com:27564/heroku_d8wws4p4");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});


// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});
