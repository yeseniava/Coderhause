class Product {

    constructor(SKU, name, description = "", cost = 0, price) {
        this.SKU = SKU;
        this.name = name;
        this.description = description
        this.cost = cost;
        this.price = price ? price : this.suggestedPrice()
        this.qty = 0;
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

    getProductDetails() {
        return "SKU: " + this.SKU + "\n" + "Nombre: " + this.name.toUpperCase() + "\n" +  "Descripcion: " 
        + this.description.toUpperCase() + "\n" + "Costo: " + this.cost + "\n" + "Precio Sugerido: "+ this.price;
    }
}