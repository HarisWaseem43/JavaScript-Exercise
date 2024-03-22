const computrFactors = (numbers) => {
  if (numbers <= 0) {
    return " Invalid Number";
  }

  let factor = [];

  for (let i = 0; i < Math.sqrt(numbers); i++) {
    if (numbers % i === 0) {
      factor.push(i);
    }
    if (numbers !== Math.sqrt(numbers)) {
      factor.push(numbers / i);
    }
  }
//   factor.sort((a, b) => a - b);
  return factor;
};
console.log(computrFactors(4));
console.log(computrFactors(10));
console.log(computrFactors(17));
console.log(computrFactors(9));
console.log(computrFactors(-5));
