const convertToCelsius = function(fahrenheit) {
  const celcius_to_fahrenheit = (fahrenheit - 32) * (5/9);
  rounded_off_fahrenheit = Math.round((celcius_to_fahrenheit * 10)) / 10;
  return rounded_off_fahrenheit;
};

const convertToFahrenheit = function(celcius) {
  const fahrenheit_to_celcius = (celcius * (9/5)) + 32;
  rounded_off_celcius = Math.round((fahrenheit_to_celcius * 10)) / 10;
  return rounded_off_celcius;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
