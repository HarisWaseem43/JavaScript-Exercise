function concatenateString(str1, str2) {
  if (str1.length1 === str2.length) {
    return str1 + str2;
  } else if (str1.length > str2.length) {
    return str1.slice(0, str2.length) + str2;
  } else {
    return str1 + str2.slice(0, str1.length);
  }
}
console.log(concatenateString("Programmers", "Force"));
console.log(concatenateString("Developer", "Studiosss"));
console.log(concatenateString("JavaScript", "is"));
