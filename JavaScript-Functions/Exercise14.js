function countCoins(amount, coins) {
  let result = [];
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    let maxCoin = Math.floor(amount / coin);

    for (let j = 0; j < maxCoin; j++) {
      result.push(coin);
    }
    amount -= maxCoin * coin;

    if (amount === 0) {
      break;
    }
  }
  return result;
}
console.log(countCoins(46, [25, 10, 5, 2, 1]));
console.log(countCoins(16, [25, 10, 5, 2, 1]));
console.log(countCoins(0, [25, 10, 5, 2, 1]));
