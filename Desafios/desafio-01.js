
function imprimir (datoa, datob, datoc, datod){
    return alert("Hola tu nombre es:" + datoa + " tu apellido es:" + datob +"tienes" + datoc +"de edad. tu papa fue padre a los : "+ (datoc-datod) );
}
let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
let edad =parseInt( prompt("ingresa tu edad"));
let edadPapa = parseInt(prompt("Que edad tiene tu papa"));

imprimir(nombre,apellido,edad,edadPapa);