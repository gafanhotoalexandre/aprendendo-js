const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const writer = require('./modules/Write');

const people = [
    { name: 'Alexandre' },
    { name: 'Verônica' },
    { name: 'Guilherme' },
    { name: 'Marina' },
];

const json = JSON.stringify(people, '', 2);
writer(filePath, json);
