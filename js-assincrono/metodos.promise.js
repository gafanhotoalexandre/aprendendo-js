const rand = (min, max) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitForIt(message, time) {
    return new Promise((resolve, reject) => {
        if (typeof message !== 'string') {
            reject('BAD VALUE');
            return;
        }

        setTimeout(() => {
            resolve(message);
        }, time);
    })
}

// Promise.all() | Promise.race() | Promise.resolve() | Promise.reject()
const promises = [
    'Primeiro valor',
    waitForIt('Primeira Promise', 3),
    waitForIt('Segunda Promise', .5),
    waitForIt('Terceira Promise', 1),
    'Outro Valor'
];

Promise.all(promises)
    .then(value => console.log(value))
    .catch(error => console.log('Erro:', error));
