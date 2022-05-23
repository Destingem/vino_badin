"use strict";
(() => {
var exports = {};
exports.id = 971;
exports.ids = [971];
exports.modules = {

/***/ 1011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    const url = req.body.url;
    console.log("calling url", url);
    request.get(url, (error, res, body)=>{
        if (error) {
            console.error(error);
            return response.status(200).json({
                "content": "error"
            });
        }
        return response.status(200).json(JSON.parse(body));
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1011));
module.exports = __webpack_exports__;

})();