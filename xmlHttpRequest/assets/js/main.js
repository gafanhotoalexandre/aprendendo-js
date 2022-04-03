const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();// null, pois estamos trabalhando com GET

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    });
};

document.addEventListener('click', event => {
    const el = event.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault();
        loadPage(el);
    }
});

function loadPage(el) {
    const href = el.getAttribute('href')

    request({
        method: 'GET',
        url: href,
        success(response) {
            loadResult(response);
        },
        error(errorText) {
            console.log(errorText)
        }
    });
}

function loadResult(response) {
    const result = document.querySelector('#result');
    result.innerHTML = response;
}
