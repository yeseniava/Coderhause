/*
Proyecto ecommerce apparel
*/
let storeProducts = [];
const basket = new Basket();
//showMenu();

function showMenu(){
    let option = prompt(`Elige la opcion deseada 
    \n1.- Agregar producto a tienda
    \n2.- Mostrar Productos de tienda
    \n3.- Agregar 1 Producto a carrito por sku
    \n4.- Remover 1 a Producto en carrito por sku
    \n5.- Mostrar Carrito`);
    option = parseInt(option);
    let sku = "";
    switch(option){
        case 1:
            addProduct();
            break;
        case 2:
            alert(printableProducts());         
            break;
        case 3:
            sku = prompt("Ingresa el sku del producto a agregar\n\n" + printableProducts());
            prod = storeProducts.find(p => p.SKU == sku);
            if (prod) {
                basket.addProduct(prod, 1);
            } else {
                alert("no se encontro un producto con el sku: " + sku)
            }
            break;
        case 4:
            sku = prompt("Ingresa el sku del producto a agregar\n\n" + printableProducts());
            prod = storeProducts.find(p => p.SKU == sku);
            if (prod) {
                basket.removeProduct(prod);
            } else {
                alert("no se encontro un producto con el sku: " + sku)
            }
            break;
        case 5:
            basket.showCart();
            break;
        // TO-DO: Add more menu options   
    }
    showMenu();
}

function addProduct(){
    let temProd = new Product(prompt("sku del producto"), prompt("Nombre del producto"),
    prompt("Descripción del producto"), getNumber(), 0);
        storeProducts.push(temProd);
}

function getNumber(msg = "Costo del producto solo numeros"){
    let num;
    while(isNaN(num)){
        num = parseInt( prompt(msg));
     }
     return num;
}

function printableProducts(){
    str = "";
    storeProducts.forEach(producto => {
        str += producto.getProductDetails() + "\n ---------------- \n\n";
    });
    return str;
}

function mostrar(){
    let element = document.getElementById("mostrar");
    element.style.display = 'block'; 
}