const reverseString = function(cadena) {
    let inversion = cadena.split("").reverse().join("");
    console.log(inversion);
    return inversion;
 };

// Do not edit below this line
module.exports = reverseString;
