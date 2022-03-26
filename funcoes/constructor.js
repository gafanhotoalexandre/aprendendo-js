// Função Construtora -> function Pessoa() {} | new Pessoa()

function Pessoa(name, lastname) {
    const ID = 3814;

    this.name = name;
    this.lastname = lastname;

    this.greeting = function () {
        return `Olá, meu nome é ${this.name}! É um prazer lhe conhecer!`;
    };

    this.fullName = function() {
        return `${this.name} ${this.lastname}`;
    }
}

const p1 = new Pessoa('Alexandre', 'Martins');
const p2 = new Pessoa('Verônica', 'Alves');

console.log(p1.name, p2.name);
console.log(p1.greeting(), p2.greeting());
console.log(p1.fullName());
