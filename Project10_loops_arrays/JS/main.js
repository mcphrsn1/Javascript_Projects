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

let x = myFunction(4, 3); 
document.getElementById("returned").innerHTML = x;

function myFunction(a, b) {
  return a * b;   
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("demo2").innerHTML = text;

let text2 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text2 += "The number is " + i + "<br>";
}
document.getElementById("demo3").innerHTML = text2;