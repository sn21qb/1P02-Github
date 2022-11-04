/A Function to printout Hurrah! when called

document.write("hello");

function pushMe(){
	document.getElementById("output").innerHTML = "Hurrah!";
	document.getElementById("button").addEventListener("click", pushMe);
}
