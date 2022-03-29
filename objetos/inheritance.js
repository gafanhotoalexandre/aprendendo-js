// Product -> addition and discount
// Camiseta => color | Caneca => material
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.addition = function (percentage) {
    this.price = this.price * (1 + (percentage / 100));
}
Product.prototype.discount = function (percentage) {
    this.price = this.price * (1 - (percentage / 100));
}

function Camiseta(name, price, color) {
    Product.call(this, name, price);
    this.color = color;
}
Camiseta.prototype = Object.create(Product.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(name, price, material, inStock) {
    Product.call(this, name, price);
    this.matetial = material;

    Object.defineProperty(this, 'inStock', {
        enumerable: true,
        configurable: false,
        get: function () {
            return inStock;
        },
        set: function (value) {
            if (typeof value !== 'number') return;
            inStock = value;
        }
    });
}
Caneca.prototype = Object.create(Product.prototype);
Caneca.prototype.constructor = Caneca;

const c1 = new Camiseta('Regata', 7.5, 'Azul');
c1.addition(10);
console.log(c1);

const c2 = new Caneca('Caneca', 12, 'Plástico', 5);
console.log(c2);
