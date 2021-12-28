
const numRandom = Math.floor(Math.random()*11);
console.log (numRandom);
let numero = obtenerNumero();

    while(numero != numRandom) { 
        if(numero < numRandom){
            numero = obtenerNumero("Error intenta con un numero mayor del 1 al 10");
        }else{
            numero = obtenerNumero("Error intenta con un numero menor del 1 al 10");
        }
    }
    alert("adivinaste el numero felicidades");

function obtenerNumero(mensaje = "Adivina un numero del 1 al 10"){
    let num;
    while(isNaN(num)){
        num = parseInt( prompt(mensaje));
     }
     return num;
}


