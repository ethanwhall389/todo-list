// class Venture {
//     constructor (ventureName) {
//         this.ventureName = ventureName,
//         this.tasks = [];
//     }

//     getVentureName () {
//         return this.ventureName;
//     }

//     getVentureTasks () {
//         return this.tasks;
//     }
// }
import { Venture } from "./ventures";


class List {
    constructor () {
        this.ventures = [];
    }

    setVentures (ventures) {
        this.ventures = ventures;
    }

    getVentures () {
        return this.ventures;
    }

    getVentureName (index) {
        return this.ventures[index].ventureName;
    }

    getTasks (ventureIndex) {
        return this.ventures[ventureIndex].tasks;
    }

    addTask (ventureIndex, taskName) {
        // const tasks = List.getTasks(ventureIndex);
        // tasks.push({name: taskName, checked: false});
        this.ventures[ventureIndex].tasks.push({name: taskName, checked: false});
    }

    removeTask (ventureIndex, indexToRemove) {
        this.ventures[ventureIndex].tasks.splice(indexToRemove, 1);
    }

    findVentureIndex (ventureName) {
        const ventures = this.ventures;
        for (let i = 0; i < ventures.length; i++) {
            if (ventures[i].ventureName === ventureName) {
                return i;
            }
        }
    }

    addVenture (ventureName) {
        this.ventures.push(new Venture(ventureName));
    }

    removeChecked (ventureIndex, taskIndex) {
        this.ventures[ventureIndex].tasks[taskIndex].checked = false;
    }
    
    addChecked (ventureIndex, taskIndex) {
        this.ventures[ventureIndex].tasks[taskIndex].checked = true;
    }
}

export default new List();