function rotateString() {
  let word = "w3resources";
  let emptyWord = "";

  let len = word.length;
  let breakWord = len - 1;

  for (var i = 0; i < len; i++) {
    let storedWords = word[breakWord];
    // console.log(storedWords);
    word = word.slice(0, -1);
    // console.log(word);
    word = storedWords + word;
    console.log(word);
  }
}

console.log(rotateString());
