console.log("Hello World");

var start = new Date();
var starttime = start.getTime();

function stopTime(){
  var stop = new Date();
  var stoptime = stop.getTime();
  console.log(stop);
  var difftime = ((stoptime-starttime)/2);

  var myAlert = alert("You have been on the page for: " + (difftime/600).toFixed(3) + " seconds");
  console.log(myAlert)
}
