function add(){
    var num1 = document.getElementById("basicText1").value;
    var num2 = document.getElementById("basicText2").value;
    var equal = parseInt(num1) + parseInt(num2)
    console.log(equal)
    document.getElementById("output").innerHTML= equal;
}

function minus(){
    var num1 = document.getElementById("basicText1").value;
    var num2 = document.getElementById("basicText2").value;
    var equal = parseInt(num1) - parseInt(num2)
    console.log(equal)
    document.getElementById("output").innerHTML= equal;
}

function divide(){
    var num1 = document.getElementById("basicText1").value;
    var num2 = document.getElementById("basicText2").value;
    var equal = parseInt(num1) / parseInt(num2)
    console.log(equal)
    document.getElementById("output").innerHTML= equal;
}

function multi(){
    var num1 = document.getElementById("basicText1").value;
    var num2 = document.getElementById("basicText2").value;
    var equal = parseInt(num1) * parseInt(num2)
    console.log(equal)
    document.getElementById("output").innerHTML= equal;
}
