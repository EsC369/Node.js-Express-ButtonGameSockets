$(document).ready(function (){
  var socket = io(); 

  socket.on("update_counter", function (data) { 
    $("#counter").text(data.counter);
  });

  $("#epic_button").click(function(){
    socket.emit("button_pressed");
  });

  $("#reset_button").click(function(){
    socket.emit("reset_count");
  });

});
