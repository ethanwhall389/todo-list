import DefaultList from './list.js';

const taskInput = document.querySelector('#input-box');
const addTaskBttn = document.querySelector('#add-task-bttn');
const listContainer = document.querySelector('#list-container');
const deleteIcon = document.querySelector('.delete-icon');

export default class UI {
    static loadPage() {
        UI.loadTasks();
    }

    static loadTasks () {
        const tasks = DefaultList.getTasks();
        for (let i = 0; i < tasks.length; i++) {
            const taskRow = document.createElement('div');
            taskRow.classList.add('task-row');
            const listItem = document.createElement('li');
            listItem.textContent = tasks[i].name;
            listItem.setAttribute('task-index', i);
            if (tasks[i].checked === true) {
                listItem.classList.add('checked');
            }
            
            const deleteIcon = document.createElement('img');
            deleteIcon.setAttribute('src', './images/delete-task.svg');
            deleteIcon.setAttribute('task-index', i);
            deleteIcon.classList.add('delete-icon');
            
            taskRow.append(listItem, deleteIcon);
            listContainer.appendChild(taskRow);
        }
        // DefaultList.getTasks().forEach((element) => {
        //     console.log(element);
        //     const taskRow = document.createElement('div');
        //     taskRow.classList.add('task-row');
        //     taskRow.setAttribute('data', )
        //     const listItem = document.createElement('li');
        //     listItem.textContent = element;
            
        //     const deleteIcon = document.createElement('img');
        //     deleteIcon.setAttribute('src', './images/delete-task.svg');
        //     deleteIcon.classList.add('delete-icon');
            
        //     taskRow.append(listItem, deleteIcon);
        //     listContainer.appendChild(taskRow);
            
        // })
    }

    static updatePage () {
        listContainer.textContent = '';
        localStorage.setItem('tasks', JSON.stringify(DefaultList.getTasks()));
        UI.loadTasks();
    }

    static addTask (taskName) {
        DefaultList.addTask(taskName);
        UI.updatePage();
    }

    static removeTask (taskIndex) {
        DefaultList.removeTask(taskIndex);
        UI.updatePage();
    }
}


//Event Listeners

//Adding a task
function addTask () {
    if (taskInput.value === '') {
        return
    } else {
        UI.addTask (taskInput.value);
        taskInput.value = '';
        taskInput.focus();
    }
}

addTaskBttn.addEventListener('click', () => {
    addTask();
})

//Adding enter key function for adding tasks
document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
})

//Deleting a task
listContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-icon')) {
        const indexToRemove = event.target.getAttribute('task-index');
        UI.removeTask(indexToRemove);
    }
})

//Checking off a task
listContainer.addEventListener('click', (event) => {
    const taskIndex = event.target.getAttribute('task-index');
    if (event.target.localName === 'li') {
        if (event.target.classList.contains('checked')) {
            event.target.classList.remove('checked');
            DefaultList.removeChecked(taskIndex);
            UI.updatePage();
        } else {
            event.target.classList.add('checked');
            DefaultList.addChecked(taskIndex);
            UI.updatePage();
        }
    }
})



