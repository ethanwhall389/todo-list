import List from './list.js';

const taskInput = document.querySelector('#input-box');
const addTaskBttn = document.querySelector('#add-task-bttn');
const listContainer = document.querySelector('#list-container');
const deleteIcon = document.querySelector('.delete-icon');
const ventureSelector = document.querySelector('.select-box');
const modalContainer = document.querySelector('.modal-container');
const newVentureInput = document.querySelector('#venture-input-box');
const addVentureBttn = document.querySelector('#add-venture-bttn');

let currentSelectedVenture;

export default class UI {
    static loadPage() {
        if (localStorage.length > 0) {
            List.setVentures(JSON.parse(localStorage.getItem('ventures')));
            UI.loadVenture(localStorage.getItem('selectedVenture'));
        } else {
            List.addVenture('Demo Venture');
            UI.addVenture('Demo Venture');
            UI.addTask('Wash clothes');
            UI.addTask('Take shower');
            UI.addTask('Read book');
        }
    }

    
    static loadTasks (ventureIndex) {

        const ventureTasks = List.getTasks(ventureIndex);


        if (ventureTasks.length >= 1) {
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
        } else {
            const noTasksMessage = document.createElement('p');
            const currentVentureName = List.getVentureName(ventureIndex);
            noTasksMessage.textContent = `${currentVentureName} has no tasks`;
            listContainer.appendChild(noTasksMessage);
        }

       
    }

    static loadVenture (ventureName) {
        const ventureIndex = List.findVentureIndex(ventureName);
        UI.updatePage(ventureIndex);
        ventureSelector.value = ventureName;
        currentSelectedVenture = ventureName;
        localStorage.setItem('selectedVenture', currentSelectedVenture);

    }


    static updatePage (ventureIndex) {
        listContainer.textContent = '';
        localStorage.setItem('ventures', JSON.stringify(List.getVentures()));
        UI.loadTasks(ventureIndex);
    }

    static getSelectedVentureIndex () {
        const name = ventureSelector.value;
        return List.findVentureIndex(name);
    }

    static addTask (taskName) {
        const currentVentureIndex = UI.getSelectedVentureIndex();
        List.addTask(currentVentureIndex, taskName);
        UI.updatePage(currentVentureIndex);
    }

    static removeTask (taskIndex) {
        const currentVentureIndex = UI.getSelectedVentureIndex();
        List.removeTask(currentVentureIndex, taskIndex);
        UI.updatePage(currentVentureIndex);
    }

    static addVenture (ventureName) {
        List.addVenture(ventureName);
        const newOption = document.createElement('option');
        
        newOption.setAttribute('value', ventureName);
        newOption.textContent = ventureName;
        ventureSelector.appendChild(newOption);

        UI.loadVenture(ventureName);
    }

    static displayModal () {
        modalContainer.style.display = 'block';
    }

    static hideModal () {
        modalContainer.style.display = 'none';
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
    const ventureIndex = UI.getSelectedVentureIndex();
    if (event.target.localName === 'li') {
        if (event.target.classList.contains('checked')) {
            event.target.classList.remove('checked');
            List.removeChecked(ventureIndex, taskIndex);
            UI.updatePage(ventureIndex);
        } else {
            event.target.classList.add('checked');
            List.addChecked(ventureIndex, taskIndex);
            UI.updatePage(ventureIndex);
        }
    }
})


//Adding a venture
ventureSelector.addEventListener('change', () => {
    if (ventureSelector.value === 'Create New Venture') {
        // const newVentureName = prompt("What would you like your venture called?");
        UI.displayModal();
        ventureSelector.value = currentSelectedVenture;
    } else {
        UI.loadVenture(ventureSelector.value);
    }
})

addVentureBttn.addEventListener('click', () => {
    console.log('add venture bttn clicked');
    if (newVentureInput.value !== '') {
        UI.addVenture(newVentureInput.value);
        UI.hideModal();
    } else {
        return
    }
})

// //Close modal by clicking outside it.
// modalContainer.addEventListener('click', (event) => {
//     UI.hideModal();
// });





