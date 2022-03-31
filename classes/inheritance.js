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
    
}
