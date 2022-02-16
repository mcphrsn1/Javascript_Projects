function myFunction() {
    var activity_output;
    var Activity = document.getElementById()
}

function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var canvas = document.getElementById("ID_Name");
var ctx = canvas.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(500,250);
ctx.stroke();
ctx.moveTo(0,250);
ctx.lineTo(500,0);
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "red");
grd.addColorStop(.2, "orange");
grd.addColorStop(.4, "yellow");
grd.addColorStop(.6, "green");
grd.addColorStop(.8, "blue");
grd.addColorStop(1, "purple");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250);
