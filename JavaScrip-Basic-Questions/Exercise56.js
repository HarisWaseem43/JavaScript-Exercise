n1 = 80;
n2 = 6;

var divide = Math.round(n1 / n2).toString(),
  result = divide.split("");

if (divide >= 1000) {
  for (var i = divide.length - 3; i > 0; i -= 3) {
    result.splice(i, 0, ",");
  }
  result;
}
console.log(result);
