module.exports = class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log(`${this.name} está fazendo au au`);
    }
}