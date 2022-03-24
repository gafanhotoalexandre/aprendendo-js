document.addEventListener('click', (event) => {
    const el = event.target;

    if (el.id === 'submitTask') {
        alert('Clicou!');
    }
});