const sumAll = function(a,b) {
    let suma = 0;
    for (i = a; i <= b; i++){
        console.log(`${suma} ` + "+" + ` ${i}` + ' es igual a')
        suma = suma + i;
        console.log(suma);
    }
 };

// Do not edit below this line
module.exports = sumAll;
