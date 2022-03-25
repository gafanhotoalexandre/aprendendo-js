// IIFE - Immediately invoked function expression
(function (age, weight, height) {

    const surname = 'Martins';
    function createName(name) {
        return `${name} ${surname}`;
    }

    function speakName() {
        console.log(createName('Alexandre'));
    }

    speakName();
    console.log(age, weight, height);
})(20, 56, 1.62);

