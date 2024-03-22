function findNearestNum(num1, num2) {
  let num3 = 100 - num1;
  let num4 = 100 - num2;

  if (num3 > num4) {
    return `${num3} is nearest to 100`;
  } else {
    return `${num4} is nearest to 100`;
  }
}

console.log(findNearestNum(20, 50));
console.log(findNearestNum(60, 30));
console.log(findNearestNum(10, 30));
