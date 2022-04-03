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
            resolve(message.toUpperCase() + ' - Passei na promise');
        }, time);
    });
}

const execute = async () => {
    try {
        const phrase1 = await waitForIt('Primeira frase', rand(1, 3));
        console.log(phrase1);

        const phrase2 = await waitForIt('Segunda frase', rand(1, 3));
        console.log(phrase2);

        const phrase3 = await waitForIt('Terceira frase', rand(1, 3));
        console.log(phrase3);
    } catch (error) {
        console.log('Erro:', error);
    }
}
execute();

/**
 * Promises
 * 
 * pending -> pendente
 * fulfilled -> resolvida
 * rejected -> rejeitada
 */
