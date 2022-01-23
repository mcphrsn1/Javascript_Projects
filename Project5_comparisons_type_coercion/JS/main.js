window.alert(typeof "ALERT"); //This is an example of "typeof". It actually prints "string".

document.write("10" + 5); //This is type coersion

document.write(2E310);

function my_function() {
    document.getElementById('demo').innerHTML = 0/0;
}

function my_function2() {
    document.getElementById('demo2').innerHTML = isNaN("Is this a number?");
}

function my_function3() {
    document.getElementById('demo3').innerHTML = isNaN(405);
}

function my_function4() {
    document.getElementById('demo4').innerHTML = 10 > 4;
}

console.log(2 + 2);
console.log(4 < 2);
console.log(10 == 4);

A = 7
B = 7
console.log(A === B);

a = "7"
b = 27
console.log(a === b);

c = "27"
d = 27
console.log(c === d);

C = 9
D = 10
console.log(C === D);

function AND_boolean() {
    document.getElementById('demo5').innerHTML = 4 > 2 && 4 > 3;
}

function OR_boolean() {
    document.getElementById('demo6').innerHTML = 4 > 2 || 4 > 3;
}

function not_Function() {
    document.getElementById('not').innerHTML = !(4 > 3);
}