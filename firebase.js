const firebase = require("firebase");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAMuoNurlrPHsen5KsflAbI89ytIi2QH8U",
  authDomain: "plankcalculator.firebaseapp.com",
  databaseURL: "https://plankcalculator.firebaseio.com",
  projectId: "plankcalculator",
  storageBucket: "plankcalculator.appspot.com",
  messagingSenderId: "132463565656"
};
firebase.initializeApp(config);

var database = firebase.database();
//var storage = firebase.storage();

module.exports = {database: database, storage: null}
