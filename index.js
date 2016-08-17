// var fs = require("fs");
// console.log("Starting");
//
// fs.exists("sample.txt", function(fileok){
//   if(fileok)fs.readFile("sample.txt", function(error, data) {
//     console.log("Contents: " + data);
//   });
//   else console.log("file not found");
// });
// console.log("Carry on executing");
var fs = require("fs");
//this si requiring a built in module
var files = require("./files");
// tell node this is a custom node
//automatically stores value and returns out
var request = require("request");
var url = "http://www.cnn.com/";
request(url, function(err,response, body){
  console.log("body length:  ", body.length);
});
//
//
// fs.readFile("sample.txt","utf8", function(err,data){
//
//   console.log("this is the stuff: ", data)
// });
//

// PART 2

var whenread = function(err,data){
  if(err){
    console.log("couldn't read file");
    return;
    // leave function now!
    // or
    // return console.log("couldn't read file");

  }
  console.log(files);
  console.log("file contains:  " , data);
};

files.read("sample.txt", whenread)
//
// fs.readFile("sample.txt","utf8", whenread);
