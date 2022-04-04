document.addEventListener('click', event => {
    const el = event.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault();
        loadPage(el);
    }
});

async function loadPage(el) {
    try {
        const href = el.getAttribute('href')
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('MEU ERRO 404');

        const html = await response.text();
        loadResult(html);
    } catch (error) {
        console.error(error);
    }
}

function loadResult(response) {
    const result = document.querySelector('#result');
    result.innerHTML = response;
}



