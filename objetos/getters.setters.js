function Product(name, price, inStock) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'inStock', {
        enumerable: true,
        configurable: true,
        get: function () {
            return inStock;
        },
        set: function (value) {
            if (typeof value !== 'number') {
                throw new TypeError('Bad value');
            }
            inStock = value;
        },
    });
}

function createProduct(name) {
    return {
        get name() {
            return name;
        },
        set name(value) {
            value = value.replace('coisa.', '');
            name = value;
        }
    };
}

// const p1 = new Product('Camiseta', 25, 3);
// p1.inStock = '2';
// console.log(p1.inStock);

const p2 = createProduct('Camiseta');
p2.name = 'Blusa coisa.';
console.log(p2.name);
