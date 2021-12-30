/*
Proyecto ecommerce apparel
*/

const basket = new Basket();
setMenuEvents();
let storeProducts = getProducts();
function setMenuEvents() {
    let addProductLink = document.getElementById("addproduct");
    addProductLink.addEventListener("click", function(event) {
        event.preventDefault();
        //Hide other elements
        let e1 = document.getElementById("showProductsList");
        e1.style.display = 'none'; 
        //Show selected element
        let element = document.getElementById("addProductForm");
        element.style.display = 'block';
    });
    let showProductLink = document.getElementById("showProduct");
    showProductLink.addEventListener("click", function(event) {
        event.preventDefault();
        printProducts();
        //Hide other elements
        let e1 = document.getElementById("addProductForm");
        e1.style.display = 'none'; 
        //Show selected element
        let element = document.getElementById("showProductsList");
        element.style.display = 'block';
    });
}

// function showMenu(){
//     let option = prompt(`Elige la opcion deseada 
//     \n1.- Agregar producto a tienda
//     \n2.- Mostrar Productos de tienda
//     \n3.- Agregar 1 Producto a carrito por sku
//     \n4.- Remover 1 a Producto en carrito por sku
//     \n5.- Mostrar Carrito`);
//     option = parseInt(option);
//     let sku = "";
//     switch(option){
//         case 1:
//             addProduct();
//             break;
//         case 2:
//             alert(printableProducts());         
//             break;
//         case 3:
//             sku = prompt("Ingresa el sku del producto a agregar\n\n" + printableProducts());
//             prod = storeProducts.find(p => p.SKU == sku);
//             if (prod) {
//                 basket.addProduct(prod, 1);
//             } else {
//                 alert("no se encontro un producto con el sku: " + sku)
//             }
//             break;
//         case 4:
//             sku = prompt("Ingresa el sku del producto a agregar\n\n" + printableProducts());
//             prod = storeProducts.find(p => p.SKU == sku);
//             if (prod) {
//                 basket.removeProduct(prod);
//             } else {
//                 alert("no se encontro un producto con el sku: " + sku)
//             }
//             break;
//         case 5:
//             basket.showCart();
//             break;
//         // TO-DO: Add more menu options   
//     }
//     showMenu();
// }

function addProduct(e) {
    e.preventDefault();
    let temProd = new Product(e.target.sku.value, e.target.name.value,
    e.target.description.value, e.target.cost.value, e.target.price.value);
    storeProducts.push(temProd);
    e.target.sku.value = "";
    e.target.name.value = "";
    e.target.description.value = "";
    e.target.cost.value = "";
    e.target.price.value = "";

    saveProducts(storeProducts);

    sendToast("Producto Agregado", new Date().toLocaleString(), temProd.name + " agregado correctamente!");
  }

  function printProducts(){
    let list = document.getElementById("products");
    list.innerHTML = "";
    storeProducts.forEach(
        (product) => {
            let li = document.createElement("li");
            li.append(product.getProductDetails());
            list.appendChild(li);
        }
    );

  }

