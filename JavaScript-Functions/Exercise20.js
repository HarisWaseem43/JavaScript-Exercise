function generateRandomID(length) {
  const characterList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterList.length);
    id += characterList[randomIndex];
  }
  return id;
}

const length = 10;
const randomID = generateRandomID(length);
console.log(randomID);
