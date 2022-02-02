function my_Function() {
    var part_1 = "Congratulations! ";
    var part_2 = "You transformed the ";
    var part_3 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("concatenate").innerHTML = whole_sentence.toUpperCase();
}

function my_Function2() {
    var sent = "This a sentence about sliced text";
    var sliced_sent = sent.slice(22,33);
    document.getElementById("slice").innerHTML = sliced_sent;
}

let searching = "Try to find the work 'find'.";
console.log(searching.search("find"));

function my_Function3() {
    var X = 777;
    document.getElementById("demo").innerHTML = X.toString();
}
function my_Function4() {
    var X = 777.297423947;
    document.getElementById("demo2").innerHTML = X.toPrecision(3);
    document.getElementById("demo3").innerHTML = X.toFixed();
}
function my_Function5() {
    const fruits = ["Banana", " Orange", " Apple", " Mango"];
    const myArray = fruits.valueOf();
    document.getElementById("values").innerHTML = myArray;
}
