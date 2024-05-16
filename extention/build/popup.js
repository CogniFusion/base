/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
// Add event listener to the button
// const { AutoModelForCausalLM, AutoTokenizer } = require('@transformers/core');
// const { Configuration, OpenAIApi } = require('openai');

const button = document.getElementById("open");
const generate = document.getElementById("generate");
const description = document.getElementById("description");
const outputElement = document.getElementById('result');
if (button) {
    button.addEventListener("click", function () {
        window.open("http://localhost:3000", "_blank");
    });
}
if (generate) {
    generate.addEventListener("click", function () {
        console.log("Message received from content script:", description.value);
        const userInput = description.value;
        const message = {
            action: 'generate',
            text: userInput,
        }
        chrome.runtime.sendMessage(message, (response) => {
            console.log(response);
            // if (answer) {
            // console.log(answer);
            if (response) {
                let answer = response[0]?.generated_text
                outputElement.innerText = answer.substring(0, answer.length)
            }
        });
    })
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7O0FDTkE7QUFDQSxXQUFXLHNDQUFzQztBQUNqRCxXQUFXLDJCQUEyQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db2duaUZ1c2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Db2duaUZ1c2lvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0NvZ25pRnVzaW9uLy4vc3JjL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGJ1dHRvblxuLy8gY29uc3QgeyBBdXRvTW9kZWxGb3JDYXVzYWxMTSwgQXV0b1Rva2VuaXplciB9ID0gcmVxdWlyZSgnQHRyYW5zZm9ybWVycy9jb3JlJyk7XG4vLyBjb25zdCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9ID0gcmVxdWlyZSgnb3BlbmFpJyk7XG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3BlblwiKTtcbmNvbnN0IGdlbmVyYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5lcmF0ZVwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbmNvbnN0IG91dHB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jyk7XG5pZiAoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsIFwiX2JsYW5rXCIpO1xuICAgIH0pO1xufVxuaWYgKGdlbmVyYXRlKSB7XG4gICAgZ2VuZXJhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWdlIHJlY2VpdmVkIGZyb20gY29udGVudCBzY3JpcHQ6XCIsIGRlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICAgICAgY29uc3QgdXNlcklucHV0ID0gZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdnZW5lcmF0ZScsXG4gICAgICAgICAgICB0ZXh0OiB1c2VySW5wdXQsXG4gICAgICAgIH1cbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAvLyBpZiAoYW5zd2VyKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbnN3ZXIpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFuc3dlciA9IHJlc3BvbnNlWzBdPy5nZW5lcmF0ZWRfdGV4dFxuICAgICAgICAgICAgICAgIG91dHB1dEVsZW1lbnQuaW5uZXJUZXh0ID0gYW5zd2VyLnN1YnN0cmluZygwLCBhbnN3ZXIubGVuZ3RoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9