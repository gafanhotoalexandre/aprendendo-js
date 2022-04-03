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

waitForIt('Frase 1', rand(1, 3))
    .then(response => {
        console.log(response);
        return waitForIt('Frase 2', rand(1, 3));
    })
    .then(response => {
        console.log(response);
        return waitForIt('Frase 3', rand(1, 3));
    })
    .then(response => console.log(response))
    .catch(e => console.log('Erro:', e));

