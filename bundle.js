/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _ui_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadPage())\n\n\n// functions\n// add new task\n// delete task\n\n\n// modules\n    // UI\n        //Handle any kind of displaying to the ui.\n    // task-handling\n        //Adding tasks, deleting tasks\n    // List\n        //Create the instances of the list and give their editable properties.\n\n//# sourceURL=webpack://todo-list-rewritten/./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ventures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ventures */ \"./src/ventures.js\");\n// class Venture {\n//     constructor (ventureName) {\n//         this.ventureName = ventureName,\n//         this.tasks = [];\n//     }\n\n//     getVentureName () {\n//         return this.ventureName;\n//     }\n\n//     getVentureTasks () {\n//         return this.tasks;\n//     }\n// }\n\n\n\nclass List {\n    constructor () {\n        this.ventures = [];\n    }\n\n    setVentures (ventures) {\n        this.ventures = ventures;\n    }\n\n    getVentures () {\n        return this.ventures;\n    }\n\n    getVentureName (index) {\n        return this.ventures[index].ventureName;\n    }\n\n    getTasks (ventureIndex) {\n        return this.ventures[ventureIndex].tasks;\n    }\n\n    addTask (ventureIndex, taskName) {\n        // const tasks = List.getTasks(ventureIndex);\n        // tasks.push({name: taskName, checked: false});\n        this.ventures[ventureIndex].tasks.push({name: taskName, checked: false});\n    }\n\n    removeTask (ventureIndex, indexToRemove) {\n        this.ventures[ventureIndex].tasks.splice(indexToRemove, 1);\n    }\n\n    findVentureIndex (ventureName) {\n        const ventures = this.ventures;\n        for (let i = 0; i < ventures.length; i++) {\n            if (ventures[i].ventureName === ventureName) {\n                return i;\n            }\n        }\n    }\n\n    addVenture (ventureName) {\n        this.ventures.push(new _ventures__WEBPACK_IMPORTED_MODULE_0__.Venture(ventureName));\n    }\n\n    removeChecked (ventureIndex, taskIndex) {\n        this.ventures[ventureIndex].tasks[taskIndex].checked = false;\n    }\n    \n    addChecked (ventureIndex, taskIndex) {\n        this.ventures[ventureIndex].tasks[taskIndex].checked = true;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new List());\n\n//# sourceURL=webpack://todo-list-rewritten/./src/list.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ \"./src/list.js\");\n\n\n\nconst taskInput = document.querySelector('#input-box');\nconst addTaskBttn = document.querySelector('#add-task-bttn');\nconst listContainer = document.querySelector('#list-container');\nconst deleteIcon = document.querySelector('.delete-icon');\nconst ventureSelector = document.querySelector('.select-box');\nconst ventureOptions = document.querySelector('.dynamic-options');\nconst modalContainer = document.querySelector('.modal-container');\nconst newVentureInput = document.querySelector('#venture-input-box');\nconst addVentureBttn = document.querySelector('#add-venture-bttn');\n\nlet currentSelectedVenture;\n\nclass UI {\n    static loadPage() {\n        if (localStorage.length > 0) {\n            _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setVentures(JSON.parse(localStorage.getItem('ventures')));\n            UI.loadVenture(JSON.parse(localStorage.getItem('selectedVenture')));\n        } else {\n            UI.addVenture('Demo Venture');\n            UI.addTask('Wash clothes');\n            UI.addTask('Take shower');\n            UI.addTask('Read book');\n        }\n    }\n\n    \n    static loadTasks (ventureIndex) {\n\n        const ventureTasks = _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTasks(ventureIndex);\n\n\n        if (ventureTasks.length >= 1) {\n            for (let i = 0; i < ventureTasks.length; i++) {\n                const taskRow = document.createElement('div');\n                taskRow.classList.add('task-row');\n                const listItem = document.createElement('li');\n                listItem.textContent = ventureTasks[i].name;\n                listItem.setAttribute('task-index', i);\n                if (ventureTasks[i].checked === true) {\n                    listItem.classList.add('checked');\n                }\n                \n                const deleteIcon = document.createElement('img');\n                deleteIcon.setAttribute('src', './images/delete-task.svg');\n                deleteIcon.setAttribute('task-index', i);\n                deleteIcon.classList.add('delete-icon');\n                \n                taskRow.append(listItem, deleteIcon);\n                listContainer.appendChild(taskRow);\n            }\n        } else {\n            const noTasksMessage = document.createElement('p');\n            const currentVentureName = _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getVentureName(ventureIndex);\n            noTasksMessage.textContent = `${currentVentureName} has no tasks`;\n            listContainer.appendChild(noTasksMessage);\n        }\n\n       \n    }\n\n    static loadVenture (ventureName) {\n        const ventureIndex = _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findVentureIndex(ventureName);\n        UI.updatePage(ventureIndex);\n        ventureSelector.value = ventureName;\n        currentSelectedVenture = ventureName;\n        localStorage.setItem('selectedVenture', JSON.stringify(currentSelectedVenture));\n\n    }\n\n\n    static updatePage (ventureIndex) {\n        listContainer.textContent = '';\n        localStorage.setItem('ventures', JSON.stringify(_list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getVentures()));\n        UI.loadTasks(ventureIndex);\n        UI.loadVentureList();\n    }\n\n    static loadVentureList () {\n        ventureSelector.textContent = '';\n\n        const createVentureOption = document.createElement('option');\n        createVentureOption.value = 'Create New Venture';\n        createVentureOption.setAttribute('id', 'create-venture-option');\n        createVentureOption.textContent = '+ Create New Venture';\n        ventureSelector.appendChild(createVentureOption);\n\n        const venturesArray = _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getVentures();\n        venturesArray.forEach( (venture) => {\n            const ventureName = venture.ventureName;\n            \n            const newOption = document.createElement('option');\n            newOption.setAttribute('value', ventureName);\n            newOption.textContent = ventureName;\n            ventureSelector.appendChild(newOption);\n\n        })\n\n        ventureSelector.value = currentSelectedVenture;\n    }\n\n    static getSelectedVentureIndex () {\n        const name = ventureSelector.value;\n        return _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findVentureIndex(name);\n    }\n\n    static addTask (taskName) {\n        const currentVentureIndex = UI.getSelectedVentureIndex();\n        _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(currentVentureIndex, taskName);\n        UI.updatePage(currentVentureIndex);\n    }\n\n    static removeTask (taskIndex) {\n        const currentVentureIndex = UI.getSelectedVentureIndex();\n        _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeTask(currentVentureIndex, taskIndex);\n        UI.updatePage(currentVentureIndex);\n    }\n\n    static addVenture (ventureName) {\n        _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addVenture(ventureName);\n        UI.loadVenture(ventureName);\n    }\n\n    static displayModal () {\n        modalContainer.style.display = 'block';\n    }\n\n    static hideModal () {\n        modalContainer.style.display = 'none';\n    }\n}\n\n\n//Event Listeners\n\n//Adding a task\nfunction addTask () {\n    if (taskInput.value === '') {\n        return\n    } else {\n        UI.addTask (taskInput.value);\n        taskInput.value = '';\n        taskInput.focus();\n    }\n}\n\naddTaskBttn.addEventListener('click', () => {\n    addTask();\n})\n\n//Adding enter key function for adding tasks\ndocument.addEventListener('keypress', (event) => {\n    if (event.key === 'Enter') {\n        addTask();\n    }\n})\n\n//Deleting a task\nlistContainer.addEventListener('click', (event) => {\n    if (event.target.classList.contains('delete-icon')) {\n        const indexToRemove = event.target.getAttribute('task-index');\n        UI.removeTask(indexToRemove);\n    }\n})\n\n//Checking off a task\nlistContainer.addEventListener('click', (event) => {\n    const taskIndex = event.target.getAttribute('task-index');\n    const ventureIndex = UI.getSelectedVentureIndex();\n    if (event.target.localName === 'li') {\n        if (event.target.classList.contains('checked')) {\n            event.target.classList.remove('checked');\n            _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeChecked(ventureIndex, taskIndex);\n            UI.updatePage(ventureIndex);\n        } else {\n            event.target.classList.add('checked');\n            _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addChecked(ventureIndex, taskIndex);\n            UI.updatePage(ventureIndex);\n        }\n    }\n})\n\n\n//Adding a venture\nventureSelector.addEventListener('change', () => {\n    if (ventureSelector.value === 'Create New Venture') {\n        // const newVentureName = prompt(\"What would you like your venture called?\");\n        UI.displayModal();\n        ventureSelector.value = currentSelectedVenture;\n    } else {\n        UI.loadVenture(ventureSelector.value);\n    }\n})\n\naddVentureBttn.addEventListener('click', () => {\n    console.log('add venture bttn clicked');\n    if (newVentureInput.value !== '') {\n        UI.addVenture(newVentureInput.value);\n        UI.hideModal();\n    } else {\n        return\n    }\n})\n\n// //Close modal by clicking outside it.\n// modalContainer.addEventListener('click', (event) => {\n//     UI.hideModal();\n// });\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list-rewritten/./src/ui.js?");

/***/ }),

/***/ "./src/ventures.js":
/*!*************************!*\
  !*** ./src/ventures.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Venture: () => (/* binding */ Venture)\n/* harmony export */ });\nclass Venture {\n    constructor(ventureName) {\n        this.ventureName = ventureName,\n        this.tasks = [];\n\n    }\n}\n\n\n//# sourceURL=webpack://todo-list-rewritten/./src/ventures.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;