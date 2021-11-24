
let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
let edad = obtenerNumero("ingresa tu edad");
let a =obtenerNumero();
let b = obtenerNumero ();

imprimir(nombre,apellido,edad,a,b);


function imprimir (datoa, datob, datoc,a,b ){

    alert("Hola tu nombre es: " + datoa + " tu apellido es: " + datob +" tienes " + datoc +" de edad, la suma de los numeros más tu edad es " +(datoc+a+b));

}
function obtenerNumero(mensaje = "ingresa un numero"){
    let num;
    while(isNaN(num)){
        num = parseInt( prompt(mensaje));
     }
     return num;
}




