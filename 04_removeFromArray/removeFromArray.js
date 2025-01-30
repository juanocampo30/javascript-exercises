const removeFromArray = function (arreglo, quitar) {

    function eliminarNombre(nombre){
       return !nombre.includes(quitar);
    }
 
    let nuevoArreglo = arreglo.filter(eliminarNombre);
 
    console.log(nuevoArreglo);
 
    return nuevoArreglo;
 };

// Do not edit below this line
module.exports = removeFromArray;
