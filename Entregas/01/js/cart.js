class Basket {
    constructor() {
        this.items = [];
        this.total = 0.00;
        this.subtotal = 0.00;
        this.discount = 0;
    }

    addProduct(product , qty) {
        // const prod = this.items.find(p => p.sku === product.sku);
        const index = this.items.findIndex(p => p.SKU === product.SKU);
        if (index >= 0) {
            this.items[index].qty += qty;   
        } else {
            product.qty = qty;
            this.items.push(product)   
        }
        this.total += (product.price * qty);
    }

    removeProduct(product) {
        const prod = this.items.find(p => p.SKU === product.SKU)
        if (prod.qty === 1) {
            this.items = this.items.filter(p => p.SKU != product.SKU);
        } else if (prod.qty > 1) {
            const index = this.items.findIndex(p => p.SKU === product.SKU);
            this.items[index].qty--;
        } else {
            alert("No se econtro producto a remover");
        }
    }

    showCart() {
        let cartStr = "";
        this.items.forEach((p, i) => {
            cartStr += `${i} - ${p.name} - cant: ${p.qty}\n`;
        });
        cartStr += `\n\nTotal: ${this.total}`;
        alert(cartStr);
    }
}