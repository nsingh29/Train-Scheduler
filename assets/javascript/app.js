

$(document).ready(function(){
// initialize database

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAdya4XVdR7HIlXogL9PkRxjzGPJA9bkUM",
    authDomain: "trainscheduler-ac14c.firebaseapp.com",
    databaseURL: "https://trainscheduler-ac14c.firebaseio.com",
    projectId: "trainscheduler-ac14c",
    storageBucket: "trainscheduler-ac14c.appspot.com",
    messagingSenderId: "185738946478"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var name;
var destination;
var frequency = 0;
var firstTrain;


// storing data in database

$("#add-train").on("click", function() {
    event.preventDefault();
    name = $("#Train-Name").val().trim();
    destination = $("#Destination").val().trim();
    firstTrain = $("#First-Train-Name").val().trim();
    frequency = $("#Frequency").val().trim();

    // pushing data
        database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    $("form")[0].reset();
})