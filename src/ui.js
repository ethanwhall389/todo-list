import DefaultVenture from './ventures.js';
import List from './list.js';

const taskInput = document.querySelector('#input-box');
const addTaskBttn = document.querySelector('#add-task-bttn');
const listContainer = document.querySelector('#list-container');
const deleteIcon = document.querySelector('.delete-icon');
const ventureSelector = document.querySelector('.select-box');

export default class UI {
    static loadPage() {
        List.addVenture('Test Venture');
        const ventureIndex = List.findVentureIndex('Demo Venture');
        UI.loadTasks(ventureIndex);
    }

    
    static loadTasks (ventureIndex) {

        const ventureTasks = List.getTasks(ventureIndex);

        for (let i = 0; i < ventureTasks.length; i++) {
            const taskRow = document.createElement('div');
            taskRow.classList.add('task-row');
            const listItem = document.createElement('li');
            listItem.textContent = ventureTasks[i].name;
            listItem.setAttribute('task-index', i);
            if (ventureTasks[i].checked === true) {
                listItem.classList.add('checked');
            }
            
            const deleteIcon = document.createElement('img');
            deleteIcon.setAttribute('src', './images/delete-task.svg');
            deleteIcon.setAttribute('task-index', i);
            deleteIcon.classList.add('delete-icon');
            
            taskRow.append(listItem, deleteIcon);
            listContainer.appendChild(taskRow);
        }
       
    }

    static loadVenture (ventureName) {
        const ventureIndex = List.findVentureIndex(ventureName);
        UI.updatePage(ventureIndex);
    }


    static updatePage (ventureIndex) {
        listContainer.textContent = '';
        localStorage.setItem('tasks', JSON.stringify(DefaultVenture.getTasks()));
        UI.loadTasks(ventureIndex);
    }

    static getSelectedVentureIndex () {
        const name = ventureSelector.value;
        return List.findVentureIndex(name);
    }

    static addTask (taskName) {
        const CurrentVentureIndex = UI.getSelectedVentureIndex();
        List.addTask(CurrentVentureIndex, taskName);
        UI.updatePage(CurrentVentureIndex);
    }

    static removeTask (taskIndex) {
        DefaultVenture.removeTask(taskIndex);
        UI.updatePage();
    }

    static addVenture (ventureName) {
        List.addVenture(ventureName);
        const newOption = document.createElement('option');
        newOption.setAttribute('value', ventureName);
        newOption.textContent = ventureName;
        ventureSelector.appendChild(newOption);
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
            DefaultVenture.removeChecked(taskIndex);
            UI.updatePage();
        } else {
            event.target.classList.add('checked');
            DefaultVenture.addChecked(taskIndex);
            UI.updatePage();
        }
    }
})


//Adding a venture
ventureSelector.addEventListener('change', () => {
    if (ventureSelector.value === 'Create New Venture') {
        const newVentureName = prompt("What would you like your venture called?");
        UI.addVenture(newVentureName);
    }
    console.log(ventureSelector.value);
    UI.loadVenture(ventureSelector.value);
})


