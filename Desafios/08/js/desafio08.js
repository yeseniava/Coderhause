
function ingresarNombres(nombres){
    let nombre = [] ;
    while(input = prompt("ingresa solo nombres de mascotas")){
        nombre.push(input); 

    }
    return nombre;
}

function letras(nombres){
    const lengths = nombres.map(nombre => nombre.length);
    return lengths;
}

function ordenar(nombres){
    ordn = nombres.sort();
    return ordn;
   }
mascotas = ingresarNombres();
console.log("mis mascotas " +mascotas);
letrasArray = letras(mascotas);
console.log("mis mascotas letras " +letrasArray);
ord = ordenar(mascotas);
console.log("mis mascotas ordenadas" +ord);