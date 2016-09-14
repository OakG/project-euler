//Largest prime factor
//var target = 600851475143;
//struggled a bit, had to make a simple function to make it easier.

var target = 600851475143;
var highest = 0;

var primeCheck = function(number) {
    for (i = 2; i < number; i++) {
        if (number%i === 0) {
            return false;
        }
    }
    return number > 1;
}


for (n = 2; n <= target; n++) {
    if (target%n === 0 && primeCheck(n) === true) {
        console.log(n + " is a prime divisor")
        if (n > highest) {
            highest = n;
        }
    }
}
console.log(highest + " is the biggest divisor.")
