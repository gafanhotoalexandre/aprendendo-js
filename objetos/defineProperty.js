function Product(name, price, inStock) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'inStock', {
        enumerable: true,// key
        value: inStock,// value
        writable: false,// change value
        configurable: false// permission to delete key
    });
}

const p1 = new Product('Camiseta', 20, 3);

console.log(p1);
