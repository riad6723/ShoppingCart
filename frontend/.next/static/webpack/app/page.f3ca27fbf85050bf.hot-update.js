"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card/Card */ \"(app-pages-browser)/./src/components/Card/Card.jsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data */ \"(app-pages-browser)/./data.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar/Navbar */ \"(app-pages-browser)/./src/components/Navbar/Navbar.jsx\");\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [cartSize, setCartSize] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    use;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_5__.cartSizeContext.Provider, {\n            value: {\n                cartSize,\n                setCartSize\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 19,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().home),\n                    children: _data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"  \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    href: \"/products/\".concat(item.id),\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().link),\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            item: item,\n                                            cartObj: {\n                                                cart,\n                                                setCart\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 99\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 38\n                                }, this),\n                                \"  \"\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 23,\n                            columnNumber: 19\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 21,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n            lineNumber: 18,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"vVORTQSXscPWr9iTQTnzSpVlkFo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUN5QztBQUNIO0FBQ0Q7QUFDTTtBQUNLO0FBQ1k7QUFDaEM7QUFFYixTQUFTUTs7SUFDdEIsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUNOLCtDQUFRQSxDQUFDLEVBQUU7SUFDaEMsTUFBTSxDQUFDTyxVQUFTQyxZQUFZLEdBQUNSLCtDQUFRQSxDQUFDO0lBRXRDUztJQUVBLHFCQUNFO2tCQUNBLDRFQUFDUCxzRUFBZUEsQ0FBQ1EsUUFBUTtZQUFDQyxPQUFPO2dCQUFDSjtnQkFBU0M7WUFBVzs7OEJBQ3RELDhEQUFDUCxpRUFBTUE7Ozs7OzhCQUVQLDhEQUFDVztvQkFBS0MsV0FBV2hCLDhEQUFXOzhCQUN2QkMsNkNBQVlBLENBQUNpQixHQUFHLENBQUMsQ0FBQ0MsTUFBS0M7d0JBQ3RCLHFCQUFRLDhEQUFDQzs7Z0NBQWdCOzhDQUFFLDhEQUFDZixrREFBSUE7b0NBQUNnQixNQUFNLGFBQXFCLE9BQVJILEtBQUtJLEVBQUU7b0NBQUlQLFdBQVdoQiw4REFBVzs7d0NBQUU7c0RBQUMsOERBQUNELDZEQUFJQTs0Q0FBQ29CLE1BQU1BOzRDQUFNTSxTQUFTO2dEQUFDakI7Z0RBQUtDOzRDQUFPOzs7Ozs7d0NBQUs7Ozs7Ozs7Z0NBQVE7OzJCQUEzSFc7Ozs7O29CQUNuQjs7Ozs7Ozs7Ozs7OztBQUtUO0dBbkJ3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZC9DYXJkXCJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnXG5pbXBvcnQgZ3JvY2VyeUl0ZW1zIGZyb20gXCIuLi8uLi9kYXRhXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXInXG5pbXBvcnQgeyBjYXJ0U2l6ZUNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0cy9jYXJ0U2l6ZUNvbnRleHRcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjYXJ0LHNldENhcnRdPXVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NhcnRTaXplLHNldENhcnRTaXplXT11c2VTdGF0ZSgwKTtcblxuICB1c2VcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGNhcnRTaXplQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2NhcnRTaXplLHNldENhcnRTaXplfX0+XG4gICAgPE5hdmJhciAvPlxuXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuaG9tZX0+XG4gICAgICAgIHtncm9jZXJ5SXRlbXMubWFwKChpdGVtLGluZGV4KT0+e1xuICAgICAgICAgIHJldHVybiAgPGRpdiBrZXk9e2luZGV4fT4gIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtpdGVtLmlkfWB9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PiA8Q2FyZCBpdGVtPXtpdGVtfSBjYXJ0T2JqPXt7Y2FydCxzZXRDYXJ0fX0gLz4gPC9MaW5rPiAgPC9kaXY+ICBcbiAgICAgICAgIH0pfVxuICAgIDwvbWFpbj5cbiAgICA8L2NhcnRTaXplQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJzdHlsZXMiLCJncm9jZXJ5SXRlbXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdmJhciIsImNhcnRTaXplQ29udGV4dCIsIkxpbmsiLCJIb21lIiwiY2FydCIsInNldENhcnQiLCJjYXJ0U2l6ZSIsInNldENhcnRTaXplIiwidXNlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIm1haW4iLCJjbGFzc05hbWUiLCJob21lIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGl2IiwiaHJlZiIsImlkIiwibGluayIsImNhcnRPYmoiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});