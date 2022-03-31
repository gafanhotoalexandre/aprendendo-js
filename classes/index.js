class User {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
    set fullName(value) {
        value = value.split(' ');
        this.name = value.shift();
        this.lastname = value.join(' ');
    }


}

const u = new User('Alexandre', 'Martins');
u.fullName = 'Guilherme Vitorino Martins de Lima';
console.log(u.fullName);
