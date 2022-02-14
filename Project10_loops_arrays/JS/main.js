function Call_Loop() {
    var text = "This is the number:";
    var x = 1;
    while (x < 10) {
        text += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = text;
}
function messageLength() {
    var message = "this is a secret message";
    document.getElementById("demo").innerHTML = "The length of the secret message is " + message.length + " characters long.";
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function plant_pics() {
    var Plant_picture = [];
    Plant_picture[0] = "lack of water";
    Plant_picture[1] = "lack of nutrients";
    Plant_picture[2] = "lack of sunlight";
    Plant_picture[3] = "too much water";
    Plant_picture[4] = "too much sun";
    Plant_picture[5] = "too much fertilizer";
    document.getElementById('plants').innerHTML = "Judging by the picture, it looks like this plant is suffering from " + Plant_picture[4] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900"
    document.getElementById('Constant').innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

let X = 23;
console.log(X);