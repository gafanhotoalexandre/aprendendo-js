function getZeroHour(seconds) {
    const date = new Date(seconds * 1000);
    const hour = date.toLocaleTimeString('pt-br', { hour12: false, timeZone: 'UTC' });
    
    return hour;
}

const watch = document.querySelector('#watch');
const init = document.querySelector('#init');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');
let seconds = 0;
let timer;

function startWatch() {
    clearInterval(timer);
    timer = setInterval(() => {
        seconds++;
        watch.innerHTML = getZeroHour(seconds);
    }, 1000);
}

init.addEventListener('click', () => {
    watch.classList.remove('pause');
    
    startWatch();
});

pause.addEventListener('click', () => {
    watch.classList.add('pause');

    clearInterval(timer);
});

reset.addEventListener('click', () => {
    watch.classList.remove('pause');

    clearInterval(timer);
    watch.innerHTML = '00:00:00';
    seconds = 0;
});