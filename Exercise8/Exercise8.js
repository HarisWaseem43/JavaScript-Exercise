function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let guessNumber = parseInt(document.getElementById("guessNumber").value);
  const correctResult = document.getElementById("correctNumber");

  if (guessNumber === randomNumber) {
    correctResult.textContent = "Good Work!";
  } else {
    correctResult.textContent = `Not Matched! The Correct Number was ${randomNumber}`;
  }
}

guessNumber();
