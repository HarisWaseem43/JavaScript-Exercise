function replaceWithNextCharacter(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= "a" && char <= "z") {
      result += String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
    } else if (char >= "A" && char <= "Z") {
      result += String.fromCharCode(((char.charCodeAt(0) - 65 + 1) % 26) + 65);
    } else {
      result += char;
    }
  }
  return result;
}

console.log(replaceWithNextCharacter("Hello World"));
console.log(replaceWithNextCharacter("Programmers Force"));
