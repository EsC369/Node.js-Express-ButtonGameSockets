var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

// Listening:
var server = app.listen(1337, function(){
  console.log("Running in localhost at port 1337");
});
const io = require('socket.io').listen(server);

// Variable for counter
var counter = 0;

// Socket Setup:
io.on("connection", function(socket){
  console.log("made socket connection", socket.id)  
  socket.emit("update_counter", {counter: counter}); // Counter is the dictionary for counter
  socket.on("button_pressed", function(data){
    counter++;
    io.emit("update_counter", {counter: counter});
  });
  socket.on("reset_count", function(data){
    counter = 0;
    io.emit("update_counter", {counter: counter});
  });
}); 