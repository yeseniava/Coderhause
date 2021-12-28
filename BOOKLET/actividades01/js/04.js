/**Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.
Notas actividad 4
Usamos prompt() para solicitar datos al usuario. Es posible solicitar y asignar valores a distintas variables de forma consecutiva. 
*/
const nombres = [];
for(i = 1 ; i<= 5; i++ ){
    let nombre = prompt("Ingresa el nombre " + i);
    nombres.push(nombre);
}
alert(nombres);

