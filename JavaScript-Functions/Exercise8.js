const primeNumber = (num, divisor = 2) => {
  if (num <= 1) {
    return false;
  }
  if (divisor === num) {
    return true;
  }
  if (num % divisor === 0) {
    return false;
  }
  return primeNumber(num, divisor + 1);
};
const number = 13;
console.log(`${number} is prime: ${primeNumber(number)}`);
const number2 = 15;
console.log(`${number2} is prime: ${primeNumber(number2)}`);
