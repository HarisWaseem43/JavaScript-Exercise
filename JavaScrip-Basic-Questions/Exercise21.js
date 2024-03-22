function addingPY(str) {
  if (str.startsWith("Py")) {
    return str;
  } else {
    return "Py" + str;
  }
}
console.log(addingPY("Jonathon"));
console.log(addingPY("Deadpool"));
console.log(addingPY("Python"));
