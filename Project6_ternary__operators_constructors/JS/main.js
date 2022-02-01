function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//This is how ternary operators work..

function age_Function() {
    var Age, can_vote;
    Age = document.getElementById("age").value;
    can_vote = (Age >= 18) ? "You are old enough":"You are too young";
    document.getElementById("voter").innerHTML = can_vote + " to vote.";
}

function Hike(Location, Season, Difficulty, Review) {
    this.Hike_Location = Location;
    this.Hike_Season = Season;
    this.Hike_Difficulty = Difficulty;
    this.Hike_Review = Review;
}

var Portland = new Hike("Devil's Rest", "Fall", 4, "A lot of switchbacks but the view is great!" );

function my_Function() {
    document.getElementById("New_and_This").innerHTML = Portland.Hike_Location + " hike near Portand is best completed in the "
    + Portland.Hike_Season + ". I would rate the difficulty as a " + Portland.Hike_Difficulty;
}

function Person(first, last, age, eyeColor) {
    this.fName = first;
    this.lName = last;
    this.Age = age;
    this.eyecolor = eyeColor;
}

var myWife = new Person("Lindsay", "Fleck", 26, "green");

function my_Function2() {
    document.getElementById("practice").innerHTML = "My wife's name is " + myWife.fName + " " + myWife.lName + " and she is " +
    myWife.Age + " years old with beautiful " + myWife.eyecolor + " eyes.";
}

function Nested_Function() {
    document.getElementById("practice2").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}