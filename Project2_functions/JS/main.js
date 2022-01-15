var europe = "Spain, Portugal, Amsterdam.";
var asia = "Thailand, India, Japan.";
var sAmerica = "Peru, Argentina, Chile.";

var sAmerica = sAmerica.fontcolor("blue");
var asia = asia.fontcolor("green");
var europe = europe.fontcolor("red");

function myFunction1() {
    var sentence = "Click the buttons to ";
    sentence += "see where we have trips planned!";
    document.getElementById('concatenate').innerHTML = sentence;
}

var add = addition(4,12);
document.getElementById("demo").innerHTML = add;

function addition(x,y) {
    return x + y;
}