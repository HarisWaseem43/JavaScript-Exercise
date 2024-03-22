const startsWith = (str) => {
  if (str.startsWith("Los") || str.startsWith("New")) {
    return str;
  } else {
    return " ";
  }
};
console.log(startsWith("NewYork"));
console.log(startsWith("Losangeles"));
console.log(startsWith("America"));
