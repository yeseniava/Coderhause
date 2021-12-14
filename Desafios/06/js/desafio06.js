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
class Product {

    constructor(SKU, name, description = "", cost = 0, price) {
        this.SKU = SKU;
        this.name = name;
        this.description = description
        this.cost = cost;
        this.price = price ? price : this.suggestedPrice()
    }

    suggestedPrice(){
        return this.cost * 3;
    }

    setDiscount(percentage){
        this.discount = percentage
    }

    getPrice() {
        return this.price - (this.price * (this.discount/100))
    }

    printProductDetails() {
        console.log("SKU: " + this.SKU.toUpperCase() + "\n" + "Nombre: " + this.name.toUpperCase() + "\n" +  "Descripcion: " 
        + this.description.toUpperCase() + "\n" + "Costo: " + this.cost + "\n" + "Precio Sugerido: "+ this.price );
    }
}

let myProducts = [];
showMenu();


function showMenu(){
    let option = prompt("Elige la opcion deseada \n1.- Agregar productos\n2.-Mostrar Productos");
    option = parseInt(option);
    switch(option){
        case 1:
            addProduct();
            break;
        case 2:
            printProducts();         
            break;
        // TO-DO: Add more menu options   
    }
}

function addProduct(){
    let temProd = new Product(prompt("sku del producto"), prompt("Nombre del producto"),
    prompt("Descripción del producto"), getNumber(), 0);
        myProducts.push(temProd);
        showMenu();

}

function getNumber(msg = "Costo del producto solo numeros"){
    let num;
    while(isNaN(num)){
        num = parseInt( prompt(msg));
     }
     return num;
}

function printProducts(){
    myProducts.forEach(producto => {
        producto.printProductDetails();
    });
}

