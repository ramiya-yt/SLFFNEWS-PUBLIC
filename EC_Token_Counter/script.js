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

// For Hyperbook

export function hyper_getRandomNumber(numValue2) {
  var newProbabilities = [22, 22, 22, 22, 12]; // Change probabilities to newProbabilities
  var arr2 = [];

  for (var i2 = 0; i2 < numValue2; i2++) { // Change variable name to numValue2
    arr2.push(hyper_getRandomNumberValue(newProbabilities)); // Change function name to hyper_getRandomNumberValue and probabilities to newProbabilities
  }

  return arr2;
}

function hyper_getRandomNumberValue(newProbabilities) { // Change function name to hyper_getRandomNumberValue
  var sum2 = newProbabilities.reduce(function (acc2, val2) {
    return acc2 + val2;
  }, 0);
  var rand2 = Math.random() * sum2;
  for (var i2 = 0; i2 < newProbabilities.length; i2++) { // Change variable name to newProbabilities
    rand2 -= newProbabilities[i2];
    if (rand2 <= 0) {
      return i2 === 0 ? 3 : i2 === 1 ? 4 : i2 === 2 ? 5 : i2 === 3 ? 6 : 10; // Change index values
    }
  }
}



