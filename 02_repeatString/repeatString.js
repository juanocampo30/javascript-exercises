const repeatString = function(string, number) {
    let acumulacion = '';
    for(i = 0; i < number; i++) {
     acumulacion = acumulacion + string;
    }
    return acumulacion;
 };

// Do not edit below this line
module.exports = repeatString;
