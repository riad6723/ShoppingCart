"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/[id]/page",{

/***/ "(app-pages-browser)/./src/app/products/[id]/page.jsx":
/*!****************************************!*\
  !*** ./src/app/products/[id]/page.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Navbar/Navbar */ \"(app-pages-browser)/./src/components/Navbar/Navbar.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Produc() {\n    _s();\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const id = location.pathname.split(\"/\").pop();\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:5000/products/\".concat(id)).then((response)=>setItem(response.data[0])).catch((err)=>console.log(err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Produc, \"+DkSdkBEFD9kWWumE0326S9Z+Ic=\");\n_c = Produc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\nvar _c;\n$RefreshReg$(_c, \"Produc\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNrRDtBQUN6QjtBQUM2QjtBQUd0RCxTQUFTSzs7SUFDUCxNQUFNLENBQUNDLE1BQUtDLFFBQVEsR0FBQ0wsK0NBQVFBLENBQUMsQ0FBQztJQUUvQkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxLQUFLQyxTQUFTQyxRQUFRLENBQUNDLEtBQUssQ0FBQyxLQUFLQyxHQUFHO1FBQzNDVCw2Q0FBS0EsQ0FBQ1UsR0FBRyxDQUFDLGtDQUFxQyxPQUFITCxLQUMzQ00sSUFBSSxDQUFDQyxDQUFBQSxXQUFVUixRQUFRUSxTQUFTQyxJQUFJLENBQUMsRUFBRSxHQUN2Q0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFLQyxRQUFRQyxHQUFHLENBQUNGO0lBRTFCLEdBQUUsRUFBRTtJQUVKLHFCQUNFO2tCQUNBLDRFQUFDRzs7Ozs7O0FBS0w7R0FsQlNoQjtLQUFBQTtBQW9CVCwrREFBZWlCLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9kdWN0cy9baWRdL3BhZ2UuanN4PzE2NTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcidcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9kdWMoKSB7XHJcbiAgY29uc3QgW2l0ZW0sc2V0SXRlbV09dXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IGlkID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Byb2R1Y3RzLyR7aWR9YClcclxuICAgIC50aGVuKHJlc3BvbnNlPT5zZXRJdGVtKHJlc3BvbnNlLmRhdGFbMF0pKVxyXG4gICAgLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcclxuXHJcbiAgfSxbXSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpKi99XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJOYXZiYXIiLCJQcm9kdWMiLCJpdGVtIiwic2V0SXRlbSIsImlkIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0IiwicG9wIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/[id]/page.jsx\n"));

/***/ })

});