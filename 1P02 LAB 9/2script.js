

function promptUp() {
    var fieldOutput = prompt("What is your age?"); //users input
    var todayFullDate = new Date(); //creates a new date
    var year = document.getElementById("num").innerHTML = fieldOutput; //assign users input to var year
    var todayYear = todayFullDate.getFullYear();
    var birth =  parseInt(todayYear) - parseInt(year)

    if (fieldOutput != null) {
      document.getElementById("output").innerHTML = birth;
      }
}