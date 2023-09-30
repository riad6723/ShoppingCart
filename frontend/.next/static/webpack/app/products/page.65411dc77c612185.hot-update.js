"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./src/app/products/page.jsx":
/*!***********************************!*\
  !*** ./src/app/products/page.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card/Card */ \"(app-pages-browser)/./src/components/Card/Card.jsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/products/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Navbar/Navbar */ \"(app-pages-browser)/./src/components/Navbar/Navbar.jsx\");\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Products() {\n    _s();\n    var _s1 = $RefreshSig$();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_s1(()=>{\n        _s1();\n        const { cart, setCart, productsList: productsList1, setProductsList } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)();\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:5000/\").then((response)=>{\n            setProductsList(response.data);\n        }).catch((err)=>console.log(err));\n        const storedJsonString = localStorage.getItem(\"cart\");\n        if (storedJsonString) {\n            const localCart = JSON.parse(storedJsonString);\n            setCart(localCart);\n        } else {\n            localStorage.setItem(\"cart\", JSON.stringify([]));\n            setCart([]);\n        }\n    }, \"I5zI/Uj/898gHcEEGBGSXy1kdE0=\"), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().home),\n        children: productsList.map((item, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"  \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/products/\".concat(item.id),\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().link),\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                item: item\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\page.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 99\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 38\n                    }, this),\n                    \"  \"\n                ]\n            }, index, true, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\page.jsx\",\n                lineNumber: 33,\n                columnNumber: 19\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\page.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUM7QUFDSDtBQUNpQjtBQUNSO0FBQ2E7QUFDaEM7QUFDSDtBQUVWLFNBQVNTOzs7SUFFdEJOLGdEQUFTQSxLQUFDOztRQUNSLE1BQU0sRUFBQ08sSUFBSSxFQUFDQyxPQUFPLEVBQUNDLGNBQUFBLGFBQVksRUFBQ0MsZUFBZSxFQUFDLEdBQUNYLGlEQUFVQTtRQUM1RE0sNkNBQUtBLENBQUNNLEdBQUcsQ0FBQywwQkFDVEMsSUFBSSxDQUFDQyxDQUFBQTtZQUFXSCxnQkFBZ0JHLFNBQVNDLElBQUk7UUFBQyxHQUM5Q0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFLQyxRQUFRQyxHQUFHLENBQUNGO1FBRXhCLE1BQU1HLG1CQUFpQkMsYUFBYUMsT0FBTyxDQUFDO1FBQzVDLElBQUdGLGtCQUFpQjtZQUNsQixNQUFNRyxZQUFVQyxLQUFLQyxLQUFLLENBQUNMO1lBQzNCWCxRQUFRYztRQUNWLE9BQ0k7WUFDRkYsYUFBYUssT0FBTyxDQUFDLFFBQU9GLEtBQUtHLFNBQVMsQ0FBQyxFQUFFO1lBQzdDbEIsUUFBUSxFQUFFO1FBQ1o7SUFDRixvQ0FBRSxFQUFFO0lBRUoscUJBRUUsOERBQUNtQjtRQUFLQyxXQUFXOUIsOERBQVc7a0JBQ3ZCVyxhQUFhcUIsR0FBRyxDQUFDLENBQUNDLE1BQUtDO1lBQ3RCLHFCQUFRLDhEQUFDQzs7b0JBQWdCO2tDQUFFLDhEQUFDN0Isa0RBQUlBO3dCQUFDOEIsTUFBTSxhQUFxQixPQUFSSCxLQUFLSSxFQUFFO3dCQUFJUCxXQUFXOUIsOERBQVc7OzRCQUFFOzBDQUFDLDhEQUFDRCw2REFBSUE7Z0NBQUNrQyxNQUFNQTs7Ozs7OzRCQUFROzs7Ozs7O29CQUFROztlQUFsR0M7Ozs7O1FBQ25COzs7Ozs7QUFHVDtHQTNCd0IxQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2R1Y3RzL3BhZ2UuanN4P2EyZTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IENhcmQgZnJvbSAnQC9jb21wb25lbnRzL0NhcmQvQ2FyZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdmJhci9OYXZiYXInXHJcbmltcG9ydCB7IGNhcnRTaXplQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRzL2NhcnRTaXplQ29udGV4dFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zdCB7Y2FydCxzZXRDYXJ0LHByb2R1Y3RzTGlzdCxzZXRQcm9kdWN0c0xpc3R9PXVzZUNvbnRleHQoKVxyXG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvJylcclxuICAgIC50aGVuKHJlc3BvbnNlPT57c2V0UHJvZHVjdHNMaXN0KHJlc3BvbnNlLmRhdGEpfSlcclxuICAgIC5jYXRjaChlcnI9PmNvbnNvbGUubG9nKGVycikpXHJcblxyXG4gICAgY29uc3Qgc3RvcmVkSnNvblN0cmluZz1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpO1xyXG4gICAgaWYoc3RvcmVkSnNvblN0cmluZyl7XHJcbiAgICAgIGNvbnN0IGxvY2FsQ2FydD1KU09OLnBhcnNlKHN0b3JlZEpzb25TdHJpbmcpO1xyXG4gICAgICBzZXRDYXJ0KGxvY2FsQ2FydCk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsSlNPTi5zdHJpbmdpZnkoW10pKTtcclxuICAgICAgc2V0Q2FydChbXSk7XHJcbiAgICB9XHJcbiAgfSxbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5ob21lfT5cclxuICAgICAgICB7cHJvZHVjdHNMaXN0Lm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgIHJldHVybiAgPGRpdiBrZXk9e2luZGV4fT4gIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtpdGVtLmlkfWB9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PiA8Q2FyZCBpdGVtPXtpdGVtfSAvPiA8L0xpbms+ICA8L2Rpdj4gIFxyXG4gICAgICAgICB9KX1cclxuICAgIDwvbWFpbj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJzdHlsZXMiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXZiYXIiLCJjYXJ0U2l6ZUNvbnRleHQiLCJMaW5rIiwiYXhpb3MiLCJQcm9kdWN0cyIsImNhcnQiLCJzZXRDYXJ0IiwicHJvZHVjdHNMaXN0Iiwic2V0UHJvZHVjdHNMaXN0IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0b3JlZEpzb25TdHJpbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxDYXJ0IiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm1haW4iLCJjbGFzc05hbWUiLCJob21lIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGl2IiwiaHJlZiIsImlkIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/page.jsx\n"));

/***/ })

});