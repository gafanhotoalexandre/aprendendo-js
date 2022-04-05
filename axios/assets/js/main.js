async function request() {
    // fetch('./assets/pessoas.json')
    //     .then(response => response.json())
    //     .then(json => loadPageElements(json));
    // axios('./assets/pessoas.json')
    //     .then(response => loadPageElements(response.data));
    const response = await axios('./assets/pessoas.json');
    loadPageElements(response.data);
    
    function cleanData() {
        const table = document.querySelector('table');
        if (table) table.remove();
    }

    function loadPageElements(data) {
        cleanData();
        const table = document.createElement('table');
        for (let person of data) {
            const tr = document.createElement('tr');
            
            let td = document.createElement('td');
            td.innerText = person.nome;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerText = person.idade;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerText = person.email;
            tr.appendChild(td);

            table.appendChild(tr);
        }
        const result = document.querySelector('#result');
        result.appendChild(table);
    }
}

document.querySelector('#main-btn').addEventListener('click', request);
