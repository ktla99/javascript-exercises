const sumAll = function(min, max) {
  if (min < 0 && max < 0) return "ERROR";
  if (!isNaN(min) || !isNaN(max)) return "ERROR";
  let finalSum = "";
  const backwards = min;
  min = max;
  max = backwards;
  if(let i = min; i < max + 1; i++) {
    finalSum += backwards;
  }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;