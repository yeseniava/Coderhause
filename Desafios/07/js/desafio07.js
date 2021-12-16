
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

    constructor( name, price) {
        this.name = name;
        this.price = price ? price : this.suggestedPrice()
    }

    suggestedPrice(){
        return this.cost * 3;
    }

    getPrice() {
        return this.price - (this.price * (this.discount/100))
    }

    printProductDetails() {
        console.log( "Nombre: " + this.name.toUpperCase() +  "\n" + "Precio Sugerido: "+ this.price );
    }

}

let myProducts = [];
showMenu();


function showMenu(){
    let option = prompt("Elige la opcion deseada \n1.- Agregar productos\n2.-Mostrar Productos\n3.-Mostrar ordenados por nombre \n4.-Mostrar ordenados por precio\n5.-Buscar producto");
    option = parseInt(option);
    switch(option){
        case 1:
            addProduct();
            break;
        case 2:
            printProducts();         
            break;
        case 3:
            orderByName();         
            break;
        case 4:
            orderByPrice();         
            break;
        case 5:
            search();         
            break;
        // TO-DO: Add more menu options   
    }
}

function addProduct(){
    let temProd = new Product(prompt("Nombre del producto"), getNumber(), 0);
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


function orderByName(){

    myProducts.sort((a, b) =>{
        if ( a.name < b.name ){
            return -1;
          }
          if ( a.name > b.name ){
            return 1;
          }
          return 0;
    });
    printProducts();
 
}

function orderByPrice(){

    myProducts.sort( (next, prev) => {
        return prev.price - next.price;
    });
    printProducts();
 
}

function search(){
    searchProduct = prompt("Nombre del producto a buscar");
    const find = myProducts.find(producto => producto.name === searchProduct); //Encuentra "Ema"
    console.log(find);
   
}