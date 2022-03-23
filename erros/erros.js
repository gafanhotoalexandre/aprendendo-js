function sum(x, y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw new Error('x e y devem ser números!');
    }
    return x + y;
}

try {
    console.log(sum(1, '2'));
} catch (e) {
    console.log(e);
}