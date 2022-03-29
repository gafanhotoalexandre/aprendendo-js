function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function (percentage) {
    this.price = this.price * (1 - (percentage / 100));
}
Product.prototype.addition = function (percentage) {
    this.price = this.price * (1 + (percentage / 100));
}

const p1 = new Product('Camiseta', 100);

const p2 = {
    name: 'Caneca',
    price: 12
};

Object.setPrototypeOf(p2, Product.prototype);
p2.discount(100);

console.log(p2);

/*
const objA = {
    keyA: 'A',
    // __proto__: Object.prototype
};

const objB = {
    keyB: 'B',
    // __proto__: objA
};
Object.setPrototypeOf(objB, objA);

const objC = {
    keyC: 'C',
    // __proto__: objB
};
Object.setPrototypeOf(objC, objB);

console.log(objA.keyA);
console.log(objB.keyA);
console.log(objC.keyB);
*/
