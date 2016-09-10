//Largest prime factor
//var target = 600851475143;
//
//for (var i = 2; i <= target; i++) {
//    if (target%i==0 && i <= target) {
//        console.log(i + " is a divisor");
//    }
//}

var isPrime = function(number) {
    count = 0;

    for (i = 2; i <= number; i++) {
        if (number%i === 0);
        count =+ 1;
    }
    if (count === 1) {
        return true;
    } else {
        return false;
    }
}


for (n = 2; n <= target; n++) {
    if (target%n === 0 && isPrime(n) === true) {
        console.log(n + " is a prime divisor")
    }
}
