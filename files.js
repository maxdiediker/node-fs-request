//files.js
fs = require("fs");
console.log("hellow from files.js");

var read = function(filename, callback) {
  fs.readFile(filename, "utf8", function(err,data){
    if(err) return callback(err);
    data = data + ".....";
    callback(null,data);
  });
};



module.exports = {
  read: read
};
