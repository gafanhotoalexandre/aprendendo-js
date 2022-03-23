function getHour(date) {
    if (date && ! (date instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (! date) {
        date = new Date();
    }

    return date.toLocaleTimeString('pt-br', { hour12: false });
}

try {
    const date = new Date('2002-02-05 20:50:00');
    const hour = getHour(date);
    console.log(hour);
} catch (error) {
    console.log('Log do erro: ', error);
} finally {
    console.log('Sempre executado.');
}