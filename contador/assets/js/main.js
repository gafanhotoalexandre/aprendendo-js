function watch() {
    // get the seconds, format 00:00:00
    function getZeroHour(seconds) {
        const date = new Date(seconds * 1000);
        const hour = date.toLocaleTimeString('pt-br', { hour12: false, timeZone: 'UTC' });
        
        return hour;
    }

    const watch = document.querySelector('#watch');
    let seconds = 0;
    let timer;

    document.addEventListener('click', (event) => {
        const el = event.target;
        
        if (el.id === 'init') {
            watch.classList.remove('pause');    
            startWatch();
        }

        if (el.id === 'pause') {
            watch.classList.add('pause');
            clearInterval(timer);
        }

        if (el.id === 'reset') {
            watch.classList.remove('pause');
            clearInterval(timer);

            watch.innerHTML = '00:00:00';
            seconds = 0;
        }
    });

    // starting
    function startWatch() {
        clearInterval(timer);
        timer = setInterval(() => {
            seconds++;
            watch.innerHTML = getZeroHour(seconds);
        }, 1000);
    }
}
watch();
