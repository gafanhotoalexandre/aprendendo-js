class RemoteControll {
    constructor(television) {
        this.television = television;
        this.volume = 0;
    }

    turnUpVolume() {
        if (this.volume >= 100) return;
        this.volume++;
    }
    turnDownVolume() {
        if (this.volume <= 0) return;
        this.volume--;
    }

    static changeBattery() {
        console.log('Trocando bateria');
    }
}

const controll = new RemoteControll('Philips');
console.log(controll);
controll.volume = 100;
console.log(controll);
