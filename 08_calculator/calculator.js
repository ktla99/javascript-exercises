const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a, b) {
	let finalSum = 0;
  for(let i = a; i < b + 1; i++){
    finalSum += 1;
  };
  return finalSum;
};

const multiply = function(a, b) {
  return a * b
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
