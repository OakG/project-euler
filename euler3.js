//Largest prime factor

var num1 = prompt("Number");
var lim1 = 2000000;
for (var i = 0; i < lim1; i++) {
    if (num1%i==0) {
        console.log(i + "is a divisor");
    }
}
