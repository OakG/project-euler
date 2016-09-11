// Even Fibonacci numbers
var first = 1;var second = 2; //first numbers in sequence
var placeholder = 0; //next number in sequence
var result = 0;

var limit = 4000000; //highest number in sequence

while (placeholder < limit) {
    placeholder = first + second;
    first = second;
    second = placeholder;
    if (first % 2 === 0) {
        result =+ first;
    }
}
console.log(result);
