const elements = [
    { tag: 'p', text: 'Um texto qualquer' },
    { tag: 'div', text: 'Um texto em uma div qualquer' },
    { tag: 'section', text: 'O HTML semântico é melhor' },
    { tag: 'footer', text: 'Um rodapé não se escreve com foot' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i];
    let createdTag = document.createElement(tag);
    let createdText = document.createTextNode(text)

    createdTag.appendChild(createdText);
    div.appendChild(createdTag);
}

container.appendChild(div);