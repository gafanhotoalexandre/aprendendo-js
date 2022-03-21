function zeroLeft(number) {
    return number >= 10 ? number : `0${number}`;
}

function dateFormatter(date) {
    const day = zeroLeft(date.getDate());
    const month = zeroLeft(date.getMonth()) + 1;
    const year = zeroLeft(date.getFullYear());
    const hour = zeroLeft(date.getHours());
    const minutes = zeroLeft(date.getMinutes());
    const seconds = zeroLeft(date.getSeconds());

    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
}

const brazilDate = dateFormatter(new Date());
console.log(brazilDate);