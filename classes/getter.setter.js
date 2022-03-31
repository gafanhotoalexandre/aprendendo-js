const _speed = Symbol('speed');
class Vehicle {
    constructor(name, speed) {
        this.name = name;
        this[_speed] = speed;
    }

    get speed() {
        return this[_speed];
    }
    set speed(value) {
        if (typeof value !== 'number' || value > 100 || value < 0) return;
        this[_speed] = value;
    }

    speedUp() {
        if (this[_speed] >= 100) return;
        this[_speed]++;
    }
    brake() {
        if (this[_speed] <= 0) return;
        this[_speed]--;
    }
}

const fusca = new Vehicle('Fusca', 50);

for (let i = 0; i <= 100; i++) {
    fusca.brake();
}

console.log(fusca.speed);
