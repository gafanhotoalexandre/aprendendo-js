function Person(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}

Person.prototype.fullName = function () {
    return `${this.name} ${this.lastname}`;
};

const p1 = new Person('Alexandre', 'Lima');
const p2 = new Person('Verônica', 'Alves');

console.dir(p1);
console.dir(p2);
