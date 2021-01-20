var num = 19;

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return 'Not a prime number!';
        }
    }
    return 'Your number is a Prime Number';
}
var result = isPrime(127);
console.log(result);