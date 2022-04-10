const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');

const writer = require('./modules/Write');
const reader = require('./modules/Read');

/*
const people = [
    { name: 'Alexandre' },
    { name: 'Verônica' },
    { name: 'Guilherme' },
    { name: 'Marina' },
];

const json = JSON.stringify(people, '', 2);
writer(filePath, json);
*/

async function readFile(filePath) {
    const data = await reader(filePath);
    dataRender(data);
}

function dataRender(data) {
    data = JSON.parse(data);
    data.forEach(person => console.log(person.name));
}

readFile(filePath);

