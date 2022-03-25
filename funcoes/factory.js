function createPerson(name, lastname, height, weight) {
    return {
        name, lastname, height, weight,
        talk(subject = 'nada') {
            return `${this.name} está falando sobre ${subject}.`;
        },
        getImc() {
            const imc = this.weight / (this.height ** 2);
            return imc.toFixed(2);
        },
        get fullName() {
            return `${this.name} ${this.lastname}`;
        },
        set fullName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.lastname = value.join(' ');
        }
    }
}

const p1 = createPerson('Alexandre', 'Martins', 1.62, 56);
console.log(p1.getImc());
console.log(p1.talk('anime'));
console.log(p1.fullName);

p1.fullName = 'Verônica Vieira Alves';
console.log(p1.fullName);


const p2 = createPerson('Júnior', 'Miranda', 1.55, 110);
console.log(p2.getImc());
