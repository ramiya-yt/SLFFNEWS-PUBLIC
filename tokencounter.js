x={};

function getRandomNumber(probabilities) {
  var sum = probabilities.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  var rand = Math.random() * sum;
  for (var i = 0; i < probabilities.length; i++) {
    rand -= probabilities[i];
    if (rand <= 0) {
      return i + 3; // starting 3 (3-10 numbers)
    }
  }
}

var probabilities = [25, 25, 25, 5, 5, 5, 5, 5]; // Probability is token 3,4,5 is 25% and 6,7,8,9,10 is 5%
var arr = [];

let y = document.getElementById('num').value;
for (var i = 0; i < y; i++) {
  arr.push(getRandomNumber(probabilities)); //
}

const sum = arr.reduce((x, b) => x + b);

console.log(arr); // Example output: [6, 5, 4, 7, 6, 5, 4, 5, 3, 5]


//------------Don't use this------------
function getvalue(a) {
	document.getElementById("demo2").innerHTML = "x " + document.getElementById('num').value;
      let box_count = document.getElementById('num').value;
      return x = box_count; 
    }
// --------------------------------

document.getElementById("demo1").innerHTML = "x " + arr + " = "+ sum;


document.getElementById("box1").innerHTML = arr.sort(function(a, b){return a - b});

document.getElementById("total_output").innerHTML ="= "+sum+" ";

let xs = document.getElementById('num').value;
document.getElementById("total_diamond").innerHTML ="= "+xs*50+" ";
document.getElementById("token_range").innerHTML =xs*3+"-"+xs*10;
