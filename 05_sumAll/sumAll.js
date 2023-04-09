const sumAll = function(min, max) {
  if (min < 0 || max < 0) return "ERROR";
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  
  if (min > max) {
    const backwards = min;
    min = max;
    max = backwards;
  }

  let finalSum = 0;
  for (let i = min; i < max + 1; i++) {
    finalSum += 1;
  }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;