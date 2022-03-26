function* generatorOne() {
    yield 'Valor 1';

    yield 'Segundo valor';

    yield 'Valor número 3';
}

const g1 = generatorOne();
for (let value of g1) {
    console.log(value);
}
