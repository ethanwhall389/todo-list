export default class List {
    constructor() {
        this.tasks = ['test01', 'test02', 'test03'];

    }

    static getTasks () {
        return this.tasks;
    }

    addTask (task) {
        this.tasks.push(task);
    }

    removeTask (indexToRemove) {
        this.tasks.splice(indexToRemove, 1);
    }
    
    setAllTasks (tasks) {
        this.tasks = tasks; 
    }
}