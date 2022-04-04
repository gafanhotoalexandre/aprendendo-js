const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();// null, pois estamos trabalhando com GET
    
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    })
};

document.addEventListener('click', event => {
    const el = event.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault();
        loadPage(el);
    }
});

async function loadPage(el) {
    const href = el.getAttribute('href')

    const objConfig = {
        method: 'GET',
        url: href,
    };
    
    try{
        const response = await request(objConfig);
        loadResult(response);
    } catch (error) {
        console.log('Erro:', error);
    }
}

function loadResult(response) {
    const result = document.querySelector('#result');
    result.innerHTML = response;
}
