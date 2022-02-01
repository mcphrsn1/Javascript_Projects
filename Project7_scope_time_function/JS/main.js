function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById('greeting').innerHTML = "It's not six o'clock yet.";
    }
}

function age_Wall() {
    Age = document.getElementById('age').value;
    if (Age < 18) {
        document.getElementById('demo').innerHTML = "You are too young.";

    }
    else {
        document.getElementById('demo').innerHTML = "You are old enough.";
    }
}

var X = 10
function addition() {
    document.getElementById("practice").innerHTML = X + 5;
}

function subtraction() {
    var Y = 10;
    document.getElementById("practice2").innerHTML = Y - 5;
}