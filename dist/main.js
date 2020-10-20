/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// working on child elements 
// factory functions boyo

const NewProject = (projectName, description, due, priority, notes) => {
    let projOuter = document.createElement('div');
    let projBase = document.createElement('div');
    let projectNameDiv = document.createElement('div');

    let dueDiv = document.createElement('div');
    let priorityDiv = document.createElement('div');
    let projBaseChild = document.createElement('div');
    let showChildSwitch = false;
    let minimizeExpand = document.createElement("div");
    let removeToDo = document.createElement('span');
    const showChildren = () => {
        projOuter.appendChild(projBaseChild);
        minimizeExpand.textContent = "-";
        showChildSwitch = true;
    }

    const hideChildren = () => {  
        projOuter.removeChild(projBaseChild);
        minimizeExpand.textContent = "+";
        showChildSwitch = false;
    }
    const createChildElement = (parent, labelText, child) => {
        let container = document.createElement('div');
        container.className = "project-child";
        let labelElement = document.createElement('div');
        let childElement = document.createElement('div');

        labelElement.textContent = labelText;
        childElement.textContent = child;

        container.appendChild(labelElement);
        container.appendChild(childElement);  
        parent.appendChild(container);
    }
    // I realize how silly this is
    const removeParent = (e) => {
        let outerParent = e.target.parentNode.parentNode;
        
        outerParent.parentNode.removeChild(outerParent);
        
    }
    removeToDo.textContent = "X"
    removeToDo.className = "removeToDo"
    minimizeExpand.className = "minimizeExpand";
    projBase.className = "project-base";
    projBaseChild.className = "project-child-container";

    minimizeExpand.textContent = "+";
    projectNameDiv.textContent = projectName;

    dueDiv.textContent = due;
    priorityDiv.textContent = priority;
    
    // projectNameDiv.addEventListener('click')
    projBase.appendChild(minimizeExpand);
    projBase.appendChild(projectNameDiv);
    projBase.appendChild(dueDiv);
    projBase.appendChild(priorityDiv);
    projBase.appendChild(removeToDo);
    createChildElement(projBaseChild, "Description: ", description)
    createChildElement(projBaseChild, "Notes", "+");
    projOuter.appendChild(projBase);
    // projOuter.appendChild(projBaseChild);
    removeToDo.addEventListener('click', removeParent);
    minimizeExpand.addEventListener('click', function () {
        if(showChildSwitch == false){
            showChildren()
        }   else hideChildren();
        
    })
    return projOuter
      
}
/* harmony default export */ __webpack_exports__["default"] = (NewProject);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");



/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/button.js");

const domController = (() => {
    const modalBtn = document.querySelector("#new-project-btn");
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector("#close-btn");
    const project = document.getElementById("project");
    const description = document.getElementById('description');
    const due = document.getElementById('duedate');
    const priority = document.getElementById('priority');
    const submitButton = document.getElementById('submitButton');
    const contentContainer = document.getElementById('projects-container');
    const newProjectModal = (() => {
        let showModal = () => {
            modal.style.display = "flex";
        }
        let hideModal = () => {
            modal.style.display = "none";
        }
        modalBtn.addEventListener('click', showModal);
        
        submitButton.addEventListener('click', function() {
            contentContainer.appendChild(Object(_button__WEBPACK_IMPORTED_MODULE_0__["default"])(project.value, description.value, due.value, priority.value, notes.value))
            modal.style.display = "none";
        })
        closeBtn.addEventListener('click', hideModal);
        
        window.onclick = function(e) {
            if(e.target == modal) {
                modal.style.display = "none"
            }
        }
    })()
    contentContainer.appendChild(Object(_button__WEBPACK_IMPORTED_MODULE_0__["default"])('Finish ToDo', "JS practice", 'whenever Baby', 'Priority: High', "Notes"));
})()


/* harmony default export */ __webpack_exports__["default"] = (domController);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULEtBQUs7QUFDTDs7QUFFQTtBQUNlLHlFOzs7Ozs7Ozs7Ozs7QUM3RWY7QUFBQTtBQUFvQzs7Ozs7Ozs7Ozs7OztBQ0FwQztBQUFBO0FBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5Qyx1REFBVTtBQUNuRDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlDQUFpQyx1REFBVTtBQUMzQyxDQUFDOzs7QUFHYyw0RUFBYSxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIHdvcmtpbmcgb24gY2hpbGQgZWxlbWVudHMgXG4vLyBmYWN0b3J5IGZ1bmN0aW9ucyBib3lvXG5cbmNvbnN0IE5ld1Byb2plY3QgPSAocHJvamVjdE5hbWUsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICAgIGxldCBwcm9qT3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcHJvakJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcHJvamVjdE5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBkdWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgcHJvakJhc2VDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBzaG93Q2hpbGRTd2l0Y2ggPSBmYWxzZTtcbiAgICBsZXQgbWluaW1pemVFeHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCByZW1vdmVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHNob3dDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgICAgcHJvak91dGVyLmFwcGVuZENoaWxkKHByb2pCYXNlQ2hpbGQpO1xuICAgICAgICBtaW5pbWl6ZUV4cGFuZC50ZXh0Q29udGVudCA9IFwiLVwiO1xuICAgICAgICBzaG93Q2hpbGRTd2l0Y2ggPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGhpZGVDaGlsZHJlbiA9ICgpID0+IHsgIFxuICAgICAgICBwcm9qT3V0ZXIucmVtb3ZlQ2hpbGQocHJvakJhc2VDaGlsZCk7XG4gICAgICAgIG1pbmltaXplRXhwYW5kLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgICAgIHNob3dDaGlsZFN3aXRjaCA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVDaGlsZEVsZW1lbnQgPSAocGFyZW50LCBsYWJlbFRleHQsIGNoaWxkKSA9PiB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwicHJvamVjdC1jaGlsZFwiO1xuICAgICAgICBsZXQgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBjaGlsZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBsYWJlbEVsZW1lbnQudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gICAgICAgIGNoaWxkRWxlbWVudC50ZXh0Q29udGVudCA9IGNoaWxkO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGRFbGVtZW50KTsgIFxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG4gICAgLy8gSSByZWFsaXplIGhvdyBzaWxseSB0aGlzIGlzXG4gICAgY29uc3QgcmVtb3ZlUGFyZW50ID0gKGUpID0+IHtcbiAgICAgICAgbGV0IG91dGVyUGFyZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBcbiAgICAgICAgb3V0ZXJQYXJlbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlclBhcmVudCk7XG4gICAgICAgIFxuICAgIH1cbiAgICByZW1vdmVUb0RvLnRleHRDb250ZW50ID0gXCJYXCJcbiAgICByZW1vdmVUb0RvLmNsYXNzTmFtZSA9IFwicmVtb3ZlVG9Eb1wiXG4gICAgbWluaW1pemVFeHBhbmQuY2xhc3NOYW1lID0gXCJtaW5pbWl6ZUV4cGFuZFwiO1xuICAgIHByb2pCYXNlLmNsYXNzTmFtZSA9IFwicHJvamVjdC1iYXNlXCI7XG4gICAgcHJvakJhc2VDaGlsZC5jbGFzc05hbWUgPSBcInByb2plY3QtY2hpbGQtY29udGFpbmVyXCI7XG5cbiAgICBtaW5pbWl6ZUV4cGFuZC50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIHByb2plY3ROYW1lRGl2LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG5cbiAgICBkdWVEaXYudGV4dENvbnRlbnQgPSBkdWU7XG4gICAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSBwcmlvcml0eTtcbiAgICBcbiAgICAvLyBwcm9qZWN0TmFtZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycpXG4gICAgcHJvakJhc2UuYXBwZW5kQ2hpbGQobWluaW1pemVFeHBhbmQpO1xuICAgIHByb2pCYXNlLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRGl2KTtcbiAgICBwcm9qQmFzZS5hcHBlbmRDaGlsZChkdWVEaXYpO1xuICAgIHByb2pCYXNlLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcbiAgICBwcm9qQmFzZS5hcHBlbmRDaGlsZChyZW1vdmVUb0RvKTtcbiAgICBjcmVhdGVDaGlsZEVsZW1lbnQocHJvakJhc2VDaGlsZCwgXCJEZXNjcmlwdGlvbjogXCIsIGRlc2NyaXB0aW9uKVxuICAgIGNyZWF0ZUNoaWxkRWxlbWVudChwcm9qQmFzZUNoaWxkLCBcIk5vdGVzXCIsIFwiK1wiKTtcbiAgICBwcm9qT3V0ZXIuYXBwZW5kQ2hpbGQocHJvakJhc2UpO1xuICAgIC8vIHByb2pPdXRlci5hcHBlbmRDaGlsZChwcm9qQmFzZUNoaWxkKTtcbiAgICByZW1vdmVUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlUGFyZW50KTtcbiAgICBtaW5pbWl6ZUV4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoc2hvd0NoaWxkU3dpdGNoID09IGZhbHNlKXtcbiAgICAgICAgICAgIHNob3dDaGlsZHJlbigpXG4gICAgICAgIH0gICBlbHNlIGhpZGVDaGlsZHJlbigpO1xuICAgICAgICBcbiAgICB9KVxuICAgIHJldHVybiBwcm9qT3V0ZXJcbiAgICAgIFxufVxuZXhwb3J0IGRlZmF1bHQgTmV3UHJvamVjdCIsImltcG9ydCBkb21Db250cm9sbGVyIGZyb20gJy4vbW9kYWwnO1xuIiwiaW1wb3J0IE5ld1Byb2plY3QgZnJvbSAnLi9idXR0b24nXG5jb25zdCBkb21Db250cm9sbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBtb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtYnRuXCIpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtYnRuXCIpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jyk7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEJ1dHRvbicpO1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbmV3UHJvamVjdE1vZGFsID0gKCgpID0+IHtcbiAgICAgICAgbGV0IHNob3dNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaGlkZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIG1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01vZGFsKTtcbiAgICAgICAgXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChOZXdQcm9qZWN0KHByb2plY3QudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWUudmFsdWUsIHByaW9yaXR5LnZhbHVlLCBub3Rlcy52YWx1ZSkpXG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU1vZGFsKTtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoZS50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pKClcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKE5ld1Byb2plY3QoJ0ZpbmlzaCBUb0RvJywgXCJKUyBwcmFjdGljZVwiLCAnd2hlbmV2ZXIgQmFieScsICdQcmlvcml0eTogSGlnaCcsIFwiTm90ZXNcIikpO1xufSkoKVxuXG5cbmV4cG9ydCBkZWZhdWx0IGRvbUNvbnRyb2xsZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==