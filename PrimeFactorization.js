number = 25;
let factors = [],
    divisor = 2;

while (number > 2) {
    if (number % divisor == 0) {
        factors.push(divisor);
        number = number / divisor;
    }
    else {
        divisor++;
    }
}
console.log("The factors of 25 are:")
console.log(factors);