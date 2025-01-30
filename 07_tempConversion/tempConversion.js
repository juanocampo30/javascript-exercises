const convertToCelsius = function(gradosF) {
  let conversion = (gradosF - 32) * (5/9);
  let redondeo = +conversion.toFixed(1);
  let resultado= redondeo;
  return resultado;
};

const convertToFahrenheit = function(gradosC) {
  let conversion = (gradosC * (9/5)) + 32;
  let redondeo = +conversion.toFixed(1);
  let resultado= redondeo;
  return resultado;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
