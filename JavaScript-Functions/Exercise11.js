function findSecondLowestAndGreatest(numbers) {
  numbers.sort((a, b) => a - b);

  let secondLowestNumber = numbers[1];
  let secondGreatesNumber = numbers[numbers.length - 2];

  return [secondLowestNumber, secondGreatesNumber];
}
// const numbers = [1, 2, 3, 4, 5];
// const [secondLowest, secondGreatest] = findSecondLowestAndGreatest(numbers);
// console.log("Second Lowest:", secondLowest);
// console.log("Second Greatest:", secondGreatest);
console.log(findSecondLowestAndGreatest([1, 2, 3, 4, 5]));
