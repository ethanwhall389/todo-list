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
        this.ventures = [{ventureName: 'Demo Venture', tasks: [{name: 'Task01', checked: false}]}];
    }

    getVentures () {
        return this.ventures;
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
}

export default new List();