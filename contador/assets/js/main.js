const watch = document.querySelector('#watch');
const init = document.querySelector('#init');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

init.addEventListener('click', () => {
    watch.classList.remove('pause');
    watch.innerHTML = 'iniciando...';
});

pause.addEventListener('click', () => {
    watch.classList.add('pause');
    watch.innerHTML = 'pausando...';
});

reset.addEventListener('click', () => {
    watch.classList.remove('pause');
    watch.innerHTML = 'resetando...';
});