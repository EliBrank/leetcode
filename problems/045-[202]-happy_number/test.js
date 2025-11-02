const sumOfSquaredDigits = function(n) {
  let total = 0;
  while (n !== 0) {
    // Increment total by digit, squared
    total += (n % 10)**2
    n = Math.floor(n / 10);
  }

  return total;
}

console.log(sumOfSquaredDigits(102));
console.log(sumOfSquaredDigits(103));
console.log(sumOfSquaredDigits(45));
