export function getRandomNumber(numValue) {
  var probabilities = [33, 32, 30, 5]; // Probability is 33, 32, 30% for 3, 4, and 5, and 5% for 10
  var arr = [];

  for (var i = 0; i < numValue; i++) {
    arr.push(getRandomNumberValue(probabilities)); // Push random number 3, 4, 5, or 10 to the array
  }

  return arr;
}

function getRandomNumberValue(probabilities) {
  var sum = probabilities.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  var rand = Math.random() * sum;
  for (var i = 0; i < probabilities.length; i++) {
    rand -= probabilities[i];
    if (rand <= 0) {
      return i === 0 ? 3 : i === 1 ? 4 : i === 2 ? 5 : 10; // Map index to the corresponding value (3, 4, 5, or 10)
    }
  }
}
