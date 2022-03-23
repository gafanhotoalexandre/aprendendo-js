function showHour() {
    const date = new Date();

    return date.toLocaleTimeString('pt-br', {
        hour12: false
    });
}

const timer = setInterval(() => {
    console.log(showHour());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 4000);

setTimeout(() => {
    console.log('Olá, Mundo!');
}, 5000);
