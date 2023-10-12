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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass List {\n    constructor() {\n        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n\n    }\n\n    getTasks () {\n        return this.tasks;\n    }\n\n    addTask (taskName) {\n        this.tasks.push({name: taskName, checked: false});\n        // localStorage.setItem('tasks', JSON.stringify(this.tasks));\n    }\n\n    removeTask (indexToRemove) {\n        this.tasks.splice(indexToRemove, 1);\n        \n    }\n    \n    setAllTasks (tasks) {\n        this.tasks = tasks; \n    }\n\n    removeChecked (taskIndex) {\n        this.tasks[taskIndex].checked = false;\n    }\n\n    addChecked (taskIndex) {\n        this.tasks[taskIndex].checked = true;\n    }\n}\n\nconst DefaultList = new List();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultList);\n\n//# sourceURL=webpack://todo-list-rewritten/./src/list.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ \"./src/list.js\");\n\n\nconst taskInput = document.querySelector('#input-box');\nconst addTaskBttn = document.querySelector('#add-task-bttn');\nconst listContainer = document.querySelector('#list-container');\nconst deleteIcon = document.querySelector('.delete-icon');\n\nclass UI {\n    static loadPage() {\n        UI.loadTasks();\n    }\n\n    static loadTasks () {\n        const tasks = _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTasks();\n        for (let i = 0; i < tasks.length; i++) {\n            const taskRow = document.createElement('div');\n            taskRow.classList.add('task-row');\n            const listItem = document.createElement('li');\n            listItem.textContent = tasks[i].name;\n            listItem.setAttribute('task-index', i);\n            if (tasks[i].checked === true) {\n                listItem.classList.add('checked');\n            }\n            \n            const deleteIcon = document.createElement('img');\n            deleteIcon.setAttribute('src', './images/delete-task.svg');\n            deleteIcon.setAttribute('task-index', i);\n            deleteIcon.classList.add('delete-icon');\n            \n            taskRow.append(listItem, deleteIcon);\n            listContainer.appendChild(taskRow);\n        }\n        // DefaultList.getTasks().forEach((element) => {\n        //     console.log(element);\n        //     const taskRow = document.createElement('div');\n        //     taskRow.classList.add('task-row');\n        //     taskRow.setAttribute('data', )\n        //     const listItem = document.createElement('li');\n        //     listItem.textContent = element;\n            \n        //     const deleteIcon = document.createElement('img');\n        //     deleteIcon.setAttribute('src', './images/delete-task.svg');\n        //     deleteIcon.classList.add('delete-icon');\n            \n        //     taskRow.append(listItem, deleteIcon);\n        //     listContainer.appendChild(taskRow);\n            \n        // })\n    }\n\n    static updatePage () {\n        listContainer.textContent = '';\n        localStorage.setItem('tasks', JSON.stringify(_list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTasks()));\n        UI.loadTasks();\n    }\n\n    static addTask (taskName) {\n        _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(taskName);\n        UI.updatePage();\n    }\n\n    static removeTask (taskIndex) {\n        _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeTask(taskIndex);\n        UI.updatePage();\n    }\n}\n\n\n//Event Listeners\n\n//Adding a task\nfunction addTask () {\n    if (taskInput.value === '') {\n        return\n    } else {\n        UI.addTask (taskInput.value);\n        taskInput.value = '';\n        taskInput.focus();\n    }\n}\n\naddTaskBttn.addEventListener('click', () => {\n    addTask();\n})\n\n//Adding enter key function for adding tasks\ndocument.addEventListener('keypress', (event) => {\n    if (event.key === 'Enter') {\n        addTask();\n    }\n})\n\n//Deleting a task\nlistContainer.addEventListener('click', (event) => {\n    if (event.target.classList.contains('delete-icon')) {\n        const indexToRemove = event.target.getAttribute('task-index');\n        UI.removeTask(indexToRemove);\n    }\n})\n\n//Checking off a task\nlistContainer.addEventListener('click', (event) => {\n    const taskIndex = event.target.getAttribute('task-index');\n    if (event.target.localName === 'li') {\n        if (event.target.classList.contains('checked')) {\n            event.target.classList.remove('checked');\n            _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeChecked(taskIndex);\n            UI.updatePage();\n        } else {\n            event.target.classList.add('checked');\n            _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addChecked(taskIndex);\n            UI.updatePage();\n        }\n    }\n})\n\n\n\n\n\n//# sourceURL=webpack://todo-list-rewritten/./src/ui.js?");

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