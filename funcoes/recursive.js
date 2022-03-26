function recursive(value) {
    if (value > 10000) return;
    console.log(value);
    value++;
    recursive(value);
}

recursive(1);