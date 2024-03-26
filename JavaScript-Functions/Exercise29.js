function getFunctionName(func) {
  if (typeof func === "function") {
    return func.name;
  } else {
    return null;
  }
}

function exampleFunction() {}

console.log(getFunctionName(exampleFunction));
