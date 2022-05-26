"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/photo";
exports.ids = ["pages/api/photo"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/photo.js":
/*!****************************!*\
  !*** ./pages/api/photo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    console.log(req.query.adress);\n    const imageBuffer = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(req.query.adress);\n    const url = req.body.url;\n    res.setHeader(\"Content-Type\", \"image/jpg\");\n    res.send(imageBuffer);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGhvdG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUI7QUFDSTtBQUNSLFNBQVNFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUM7SUFHdkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUNJLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFFOUIsTUFBTUMsV0FBVyxHQUFHVCxzREFBZSxDQUFDRyxHQUFHLENBQUNJLEtBQUssQ0FBQ0MsTUFBTSxDQUFDO0lBQ25ELE1BQU1HLEdBQUcsR0FBR1IsR0FBRyxDQUFDUyxJQUFJLENBQUNELEdBQUc7SUFDMUJQLEdBQUcsQ0FBQ1MsU0FBUyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUM7SUFDMUNULEdBQUcsQ0FBQ1UsSUFBSSxDQUFDTCxXQUFXLENBQUM7Q0FDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aW5vX2JhZGluLy4vcGFnZXMvYXBpL3Bob3RvLmpzP2E3MzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcclxuXHJcbiAgICBcclxuICBjb25zb2xlLmxvZyhyZXEucXVlcnkuYWRyZXNzKTtcclxuIFxyXG4gIGNvbnN0IGltYWdlQnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKHJlcS5xdWVyeS5hZHJlc3MpXHJcbiAgICBjb25zdCB1cmwgPSByZXEuYm9keS51cmw7XHJcbiAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2ltYWdlL2pwZycpXHJcbiAgcmVzLnNlbmQoaW1hZ2VCdWZmZXIpXHJcbn0iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImFkcmVzcyIsImltYWdlQnVmZmVyIiwicmVhZEZpbGVTeW5jIiwidXJsIiwiYm9keSIsInNldEhlYWRlciIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/photo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/photo.js"));
module.exports = __webpack_exports__;

})();