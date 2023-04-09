const convertToCelsius = function(temp1) {
  let celsius = (temp1 - 32)/1.8;
  let rounded1 = Math.round(celsius * 10) / 10;
  return rounded1;
};

const convertToFahrenheit = function(temp2) {
  let fahrenheit = (temp2 * 1.8) + 32;
  let rounded2 = Math.round(fahrenheit * 10) / 10;
  return rounded2;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};