const rand = (min, max) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitForIt(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof message !== 'string') {
                reject('BAD VALUE');
                return;
            }
            resolve(message);
        }, time);
    })
}

// Promise.all() | Promise.race() | Promise.resolve() | Promise.reject()
/*
const promises = [
    // 'Primeiro valor',
    waitForIt('Primeira Promise', rand(1, 3)),
    waitForIt('Segunda Promise', rand(1, 3)),
    waitForIt('Terceira Promise', rand(1, 3)),
    waitForIt(100, rand(1, 3))
    // 'Outro Valor'
];

Promise.race(promises)
    .then(value => console.log(value))
    .catch(error => console.log('Erro:', error));
*/

function downloadPage() {
    const inCache = true;

    if (inCache) {
        return Promise.reject('Apresentando página em cache');
    } else {
        return waitForIt('Baixei a página e a apresentei', 3000);
    }
}

downloadPage()
    .then(data => console.log(data))
    .catch(error => console.log('Erro:', error));
