const inputTask = document.querySelector('#input-task');
const btnTask = document.querySelector('#btn-task');
const tasks = document.querySelector('#tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

function createButton() {
    const deleteButton = document.createElement('button')
    return deleteButton;
}

function createDeleteButton(li) {
    li.innerText += ' ';
    
    const deleteButton = createButton();
    deleteButton.innerText = 'Apagar';

    // setting class attribute delete
    deleteButton.setAttribute('class', 'delete');
    li.appendChild(deleteButton);
}

function createTask(task) {
    const li = createLi();
    li.innerText = task;
    tasks.appendChild(li);
    clearInput();
    createDeleteButton(li);

    saveTasks();
}

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

btnTask.addEventListener('click', () => {
    if (! inputTask.value.trim()) return;
    createTask(inputTask.value);
})

inputTask.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        if (! inputTask.value.trim()) return;
        createTask(inputTask.value);
    }
});

document.addEventListener('click', (event) => {
    const el = event.target;

    if (el.classList.contains('delete')) {
        el.parentElement.remove();
        saveTasks();
    }
});


function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const tasksList = [];

    for (let task of liTasks) {
        let textTask = task.innerText;
        textTask = textTask.replace('Apagar', '').trim();
         
        tasksList.push(textTask);
    }

    const tasksJson = JSON.stringify(tasksList);
    localStorage.setItem('tasks', tasksJson);
}

function getSavedTasks() {
    const tasksJson = localStorage.getItem('tasks');
    const tasksList = JSON.parse(tasksJson);

    for (let task of tasksList) {
        createTask(task);
    }
}
getSavedTasks();
