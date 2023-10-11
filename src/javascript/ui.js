import List from './list.js';

export default class UI {
    static loadPage() {
        UI.loadTasks();
    }

    static loadTasks () {
        console.log('Tasks: ' + JSON.stringify(List.getTasks()))
    }
}


const taskInput = document.querySelector('#input-box');
const addTaskBttn = document.querySelector('#add-task-bttn');