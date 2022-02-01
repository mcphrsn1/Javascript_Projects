function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trailhawk", 2019, "Black and White");
var Anthony = new Vehicle("Subaru", "Crosstrek", 2018, "Gray");

function my_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Anthony drives a " + Anthony.Vehicle_Color + "-colored " + Anthony.Vehicle_Model
    + " manufactured in " + Anthony.Vehicle_Year + "."
}