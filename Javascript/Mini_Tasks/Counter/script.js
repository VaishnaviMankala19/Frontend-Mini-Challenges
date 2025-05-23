var num = document.getElementById("number");
var output = document.getElementById("display");
var incbtn = document.getElementById("inc");
var decbtn = document.getElementById("dec"); 
var resize = document.getElementById("reset");

incbtn.onclick = function increment(){
    incValue = parseInt(output.textContent) + parseInt(num.value);
    output.textContent = incValue;
}

decbtn.onclick = function decrement(){
    decValue = parseInt(output.textContent) - parseInt(num.value);
    output.textContent = decValue;
}

resize.onclick = function reset(){
    output.textContent = 0;
}