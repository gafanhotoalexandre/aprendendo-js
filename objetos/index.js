function User(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}

const p1 = new User('Alexandre', 'Lima');
p1.fullName = function () {
    return `${this.name} ${this.lastname}`;
};

console.log(p1.fullName());
