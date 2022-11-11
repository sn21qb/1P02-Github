console.log("Hello World");

var start = new Date();
var starttime = start.getTime();

function stopTime(){
  var stop = new Date();
  var stoptime = stop.getTime();
  console.log(stop);
  var difftime = (stoptime-starttime);
  var myAlert = alert("You have been on the page for:" + difftime);
  console.log(myAlert)
}
