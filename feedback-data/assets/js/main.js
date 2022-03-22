const h1 = document.querySelector('.container h1');
const date = new Date();
h1.innerHTML = date.toLocaleString('pt-br', { dateStyle: 'full', timeStyle: 'short' });
