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

/***/ "(app-pages-browser)/./src/components/Card/Card.jsx":
/*!**************************************!*\
  !*** ./src/components/Card/Card.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.module.css */ \"(app-pages-browser)/./src/components/Card/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction Card(param) {\n    let { item, cart } = param;\n    const { id, name, category, price, image } = item;\n    const handleClick = ()=>{\n        const updatedCart = [\n            ...cart.cart\n        ];\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().productImg),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"http://bit.ly/2tMBBTd\",\n                    height: \"420\",\n                    width: \"327\",\n                    alt: \"Product\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().productInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().productText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: category\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem doloremque ex ipsam voluptates vel eos recusandae consectetur hic harum, explicabo obcaecati dolores soluta. Molestias reiciendis nemo assumenda itaque iure.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().productPriceBtn),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().span),\n                                        children: price\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 14\n                                    }, this),\n                                    \"$\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: (_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                                onClick: handleClick,\n                                children: \"add to cart\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUMwQjtBQUNhO0FBRXZDLFNBQVNFLEtBQUssS0FBVztRQUFYLEVBQUNDLElBQUksRUFBQ0MsSUFBSSxFQUFDLEdBQVg7SUFDWixNQUFNLEVBQUNDLEVBQUUsRUFBQ0MsSUFBSSxFQUFDQyxRQUFRLEVBQUNDLEtBQUssRUFBQ0MsS0FBSyxFQUFDLEdBQUNOO0lBQ3JDLE1BQU1PLGNBQVk7UUFDaEIsTUFBTUMsY0FBWTtlQUFJUCxLQUFLQSxJQUFJO1NBQUM7SUFDbEM7SUFDQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBV1osaUVBQWM7OzBCQUM1Qiw4REFBQ1c7Z0JBQUlDLFdBQVdaLG9FQUFpQjswQkFDL0IsNEVBQUNlO29CQUFJQyxLQUFJO29CQUF3QkMsUUFBTztvQkFBTUMsT0FBTTtvQkFBTUMsS0FBSTs7Ozs7Ozs7Ozs7MEJBRWhFLDhEQUFDUjtnQkFBSUMsV0FBV1oscUVBQWtCOztrQ0FDaEMsOERBQUNXO3dCQUFJQyxXQUFXWixxRUFBa0I7OzBDQUNoQyw4REFBQ3NCOzBDQUFJakI7Ozs7OzswQ0FDTCw4REFBQ2tCOzBDQUFJakI7Ozs7OzswQ0FDTCw4REFBQ2tCOzBDQUFFOzs7Ozs7Ozs7Ozs7a0NBSUwsOERBQUNiO3dCQUFJQyxXQUFXWix5RUFBc0I7OzBDQUNwQyw4REFBQ3dCOztrREFBRSw4REFBQ0U7d0NBQUtkLFdBQVdaLDhEQUFXO2tEQUFHTzs7Ozs7O29DQUFhOzs7Ozs7OzBDQUMvQyw4REFBQ29CO2dDQUFPQyxNQUFNNUIsZ0VBQWE7Z0NBQUU2QixTQUFTcEI7MENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5RDtLQXpCU1I7QUEyQlQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzeD82OTk3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gQ2FyZCh7aXRlbSxjYXJ0fSkge1xyXG4gIGNvbnN0IHtpZCxuYW1lLGNhdGVnb3J5LHByaWNlLGltYWdlfT1pdGVtO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrPSgpPT57XHJcbiAgICBjb25zdCB1cGRhdGVkQ2FydD1bLi4uY2FydC5jYXJ0XTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltZ30+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vYml0Lmx5LzJ0TUJCVGRcIiBoZWlnaHQ9XCI0MjBcIiB3aWR0aD1cIjMyN1wiIGFsdD1cIlByb2R1Y3RcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW5mb30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0VGV4dH0+XHJcbiAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cclxuICAgICAgICAgIDxoMj57Y2F0ZWdvcnl9PC9oMj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bSBxdWlkZW0gZG9sb3JlbXF1ZSBleCBpcHNhbSB2b2x1cHRhdGVzIHZlbCBlb3MgcmVjdXNhbmRhZSBjb25zZWN0ZXR1ciBoaWMgaGFydW0sIGV4cGxpY2FibyBvYmNhZWNhdGkgZG9sb3JlcyBzb2x1dGEuIE1vbGVzdGlhcyByZWljaWVuZGlzIG5lbW8gYXNzdW1lbmRhIGl0YXF1ZSBpdXJlLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdFByaWNlQnRufT5cclxuICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW59PntwcmljZX08L3NwYW4+JDwvcD5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2xpY2t9ID5hZGQgdG8gY2FydDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkNhcmQiLCJpdGVtIiwiY2FydCIsImlkIiwibmFtZSIsImNhdGVnb3J5IiwicHJpY2UiLCJpbWFnZSIsImhhbmRsZUNsaWNrIiwidXBkYXRlZENhcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwicHJvZHVjdEltZyIsImltZyIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWx0IiwicHJvZHVjdEluZm8iLCJwcm9kdWN0VGV4dCIsImgxIiwiaDIiLCJwIiwicHJvZHVjdFByaWNlQnRuIiwic3BhbiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Card/Card.jsx\n"));

/***/ })

});