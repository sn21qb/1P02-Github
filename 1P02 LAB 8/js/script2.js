//Sets the initial colours of the three elements on page load

document.getElementById("blue").style.color = "#0000FF";
document.getElementById("green").style.color = "#00FF00";
document.getElementById("red").style.color = "#FF0000";


//A function to change colours of elements when called
function mix(){

	var first = "#0000FF";
	var second = "#00FF00";
	var third = "#FF0000";

	document.getElementById("blue").style.color = first;
	document.getElementById("green").style.color = second;
	document.getElementById("red").style.color = third;

}
