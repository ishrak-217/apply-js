function factorial(num) {
    var i = 1;
    var fact = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
}
var result = factorial(7);
console.log(result);