class User {
    constructor(name) {
        this.name = name;
        this.online = false;
    }

    goOnline() {
        this.online = true;
    }
    goOffline() {
        this.online = false;
    }
}

class Student extends User {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    salutation() {
        return `Olá, eu me chamo ${this.name} e estou no curso de ${this.course}`;
    }
}

const ale = new Student('Alexandre', 'ADS');
ale.goOnline();
console.log(ale.online);
