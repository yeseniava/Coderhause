//ingresar numeros hasta que el usuario ingrese una x  y meterlos en un arreglo
//validar numeros
//ordenar numeros de mayor a menor
//sumar todos los numeros ingresados y sacar la media


function ingresarNumeros(numero){
    let numeros = [] ;
    while(input = parseInt(prompt("ingresa solo numeros numeros, presiona cualquier tecla para salir"))){
        numeros.push(input); 

    }
    return numeros;
}

function ordenar(numeros){
 numeros.sort( (next, prev) => {
        return prev - next;
    });
}

function suma(numeros){
    let sum = 0;
    for (let i = 0; i < numeros.length; i++) {
        sum += numeros[i];
    }
    return sum;
}

function promedio(numeros){
    let prom = suma(numeros) / numeros.length;
    return prom;
}


misNumeros = ingresarNumeros();
console.log("mi arreglo " +misNumeros);
ordenar(misNumeros);
console.log("mi arreglo ordenado " +misNumeros);
console.log("suma de mi arreglo  " +suma(misNumeros));
console.log("promedio de mi arreglo " +promedio(misNumeros));
