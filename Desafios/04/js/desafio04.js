/*
Proyecto ecommerce apparel
Guardar productos en arreglos 
nombre
sku
descripcion
costo

costo sugerir venta al publico 
sugerir precio al publico teniendo ganancias de un 200%
optativo a cambiar 

Modulo de descuentos
ingresar sku del producto y aplicar decuento guardar e impromor ficha tecnica del producto

*/

let misProductos = [];
mostrarMenu();



function mostrarMenu(){
    let opcion = prompt("Elige la opcion deseada \n1.- Agregar productos\n2.-Mostrar Productos");
    opcion = parseInt(opcion);
    switch(opcion){
        case 1:
            addProduct();
            break;
        case 2:
            imprimirProductos();         
            break;
        // TO-DO: Agregar mas opciones al menú     
    }
}

function addProduct(){
    let producto = new Object();
        producto.sku = prompt("sku del producto");
        producto.name = prompt("Nombre del producto");
        producto.description = prompt("Descripción del producto");
        producto.costo = obtenerNumero(); 
        precioSugerido(producto);
        misProductos.push(producto);
        mostrarMenu();

}

function obtenerNumero(mensaje = "Costo del producto solo numeros"){
    let num;
    while(isNaN(num)){
        num = parseInt( prompt(mensaje));
     }
     return num;
}

function precioSugerido(prod){
    prod.precio = prod.costo * 3;
}

function imprimirProductos(){
    misProductos.forEach(producto => {
        console.log("SKU: " + producto.sku + "\n" + "Nombre: " + producto.name + "\n" +  "Descripcion: " 
        + producto.description + "\n" + "Costo: " + producto.costo + "\n" + "Precio Sugerido: "+ producto.precio );
    });
}