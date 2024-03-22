function checkMultiples(num1, num2) {
  const num1MultipleOf7 = num1 % 7 === 0;
  const num1MultipleOf11 = num1 % 11 === 0;
  const num2MultipleOf7 = num2 % 7 === 0;
  const num2MultipleOf11 = num2 % 11 === 0;

  return (
    (num1MultipleOf7 || num1MultipleOf11) !==
    (num2MultipleOf7 || num2MultipleOf11)
  );
}
console.log(checkMultiples(14, 7));
console.log(checkMultiples(21, 22));
console.log(checkMultiples(22, 33));
console.log(checkMultiples(35, 49));
