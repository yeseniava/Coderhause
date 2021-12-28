/**Declarar variables para representar la información de un carnet de conducir.
Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.
Notas actividad 3
Definir la cantidad de variables y el valor de cada una, según se prefiera. La cadena asignada a carnet debería contener al menos el nombre, la dirección, y el país de la persona dueña del carnet.
 */

let id = "B4U89RE243";
let nombre = "BART";
let apellido = "SIMPSON";
let domicilio = "742 EVERGREEN TERR"
let ciudad = "SPRINGFIELD";
let pais = "USA";
let birthdate = "02-11-70";
let sex = "M";
let altura = "1.50 m";
let colorOjos = "NEGROS";
let espacio = " ";
let salto =  "\n" ;
let carnet = "ID" + espacio + id+ salto+
             "Nombre"+ espacio + nombre + espacio + apellido+ salto+
             "domicilio" + espacio + domicilio + espacio + ciudad + espacio + pais + salto +
             "Cumpleaños" + espacio + birthdate + salto +
             "Sexo" + espacio + "estarura" + espacio + "color de ojos" + salto +
             espacio + sex + espacio + espacio + espacio + espacio + altura + espacio +  espacio +  espacio + colorOjos;

console.log(carnet);