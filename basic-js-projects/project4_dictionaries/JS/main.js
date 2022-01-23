
// This is a simple dictionary / KVP function
function my_dictionary() {
    var Wine = {
        Varietal: "Pinot Noir",
        Year: "2014",
        Color: "Ruby",
        Notes: "Charcoal, Strawberry, Pencil Shavings",
        Viscosity: "Light"
    };
    delete Wine.Varietal;
    document.getElementById("Dictionary").innerHTML = Wine.Varietal;
}