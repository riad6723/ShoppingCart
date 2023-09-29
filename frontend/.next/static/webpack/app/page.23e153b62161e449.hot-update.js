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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card.module.css */ \"(app-pages-browser)/./src/components/Card/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction Card(param) {\n    let { item, cartObj } = param;\n    const { id, name, category, price, image } = item;\n    const handleClick = ()=>{\n        const updatedCart = [\n            ...cartObj.cart\n        ];\n        for(let i = 0; i < updatedCart.length; i++){\n            if (updatedCart[i].id === item.id) return;\n        }\n        updatedCart.push(item);\n        cartObj.setCart(updatedCart);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().productImg),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"http://bit.ly/2tMBBTd\",\n                    height: \"420\",\n                    width: \"327\",\n                    alt: \"Product\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().productInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().productText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: category\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem doloremque ex ipsam voluptates vel eos recusandae consectetur hic harum, explicabo obcaecati dolores soluta. Molestias reiciendis nemo assumenda itaque iure.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().productPriceBtn),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().span),\n                                        children: price\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 14\n                                    }, this),\n                                    \"$\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                                onClick: handleClick,\n                                children: \"add to cart\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDMEI7QUFDYTtBQUNzQjtBQUMxQjtBQUVuQyxTQUFTSSxLQUFLLEtBQWM7UUFBZCxFQUFDQyxJQUFJLEVBQUNDLE9BQU8sRUFBQyxHQUFkO0lBQ1osTUFBTSxFQUFDQyxFQUFFLEVBQUNDLElBQUksRUFBQ0MsUUFBUSxFQUFDQyxLQUFLLEVBQUNDLEtBQUssRUFBQyxHQUFDTjtJQUNyQyxNQUFNTyxjQUFZO1FBRWxCLE1BQU1DLGNBQVk7ZUFBSVAsUUFBUVEsSUFBSTtTQUFDO1FBRWpDLElBQUksSUFBSUMsSUFBRSxHQUFFQSxJQUFFRixZQUFZRyxNQUFNLEVBQUNELElBQUk7WUFDbkMsSUFBR0YsV0FBVyxDQUFDRSxFQUFFLENBQUNSLEVBQUUsS0FBR0YsS0FBS0UsRUFBRSxFQUFDO1FBQ2pDO1FBRUFNLFlBQVlJLElBQUksQ0FBQ1o7UUFDakJDLFFBQVFZLE9BQU8sQ0FBQ0w7SUFDbEI7SUFDQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBV25CLGlFQUFjOzswQkFDNUIsOERBQUNrQjtnQkFBSUMsV0FBV25CLG9FQUFpQjswQkFDL0IsNEVBQUNzQjtvQkFBSUMsS0FBSTtvQkFBd0JDLFFBQU87b0JBQU1DLE9BQU07b0JBQU1DLEtBQUk7Ozs7Ozs7Ozs7OzBCQUVoRSw4REFBQ1I7Z0JBQUlDLFdBQVduQixxRUFBa0I7O2tDQUNoQyw4REFBQ2tCO3dCQUFJQyxXQUFXbkIscUVBQWtCOzswQ0FDaEMsOERBQUM2QjswQ0FBSXRCOzs7Ozs7MENBQ0wsOERBQUN1QjswQ0FBSXRCOzs7Ozs7MENBQ0wsOERBQUN1QjswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUlMLDhEQUFDYjt3QkFBSUMsV0FBV25CLHlFQUFzQjs7MENBQ3BDLDhEQUFDK0I7O2tEQUFFLDhEQUFDRTt3Q0FBS2QsV0FBV25CLDhEQUFXO2tEQUFHUzs7Ozs7O29DQUFhOzs7Ozs7OzBDQUMvQyw4REFBQ3lCO2dDQUFPQyxNQUFNbkMsZ0VBQWE7Z0NBQUVvQyxTQUFTekI7MENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5RDtLQWpDU1I7QUFtQ1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzeD82OTk3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBjYXJ0U2l6ZUNvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL2NhcnRTaXplQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBDYXJkKHtpdGVtLGNhcnRPYmp9KSB7XHJcbiAgY29uc3Qge2lkLG5hbWUsY2F0ZWdvcnkscHJpY2UsaW1hZ2V9PWl0ZW07XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2s9KCk9PntcclxuXHJcbiAgY29uc3QgdXBkYXRlZENhcnQ9Wy4uLmNhcnRPYmouY2FydF07XHJcblxyXG4gICAgZm9yKGxldCBpPTA7aTx1cGRhdGVkQ2FydC5sZW5ndGg7aSsrKXtcclxuICAgICAgaWYodXBkYXRlZENhcnRbaV0uaWQ9PT1pdGVtLmlkKXJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVkQ2FydC5wdXNoKGl0ZW0pO1xyXG4gICAgY2FydE9iai5zZXRDYXJ0KHVwZGF0ZWRDYXJ0KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltZ30+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vYml0Lmx5LzJ0TUJCVGRcIiBoZWlnaHQ9XCI0MjBcIiB3aWR0aD1cIjMyN1wiIGFsdD1cIlByb2R1Y3RcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW5mb30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0VGV4dH0+XHJcbiAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cclxuICAgICAgICAgIDxoMj57Y2F0ZWdvcnl9PC9oMj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bSBxdWlkZW0gZG9sb3JlbXF1ZSBleCBpcHNhbSB2b2x1cHRhdGVzIHZlbCBlb3MgcmVjdXNhbmRhZSBjb25zZWN0ZXR1ciBoaWMgaGFydW0sIGV4cGxpY2FibyBvYmNhZWNhdGkgZG9sb3JlcyBzb2x1dGEuIE1vbGVzdGlhcyByZWljaWVuZGlzIG5lbW8gYXNzdW1lbmRhIGl0YXF1ZSBpdXJlLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdFByaWNlQnRufT5cclxuICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW59PntwcmljZX08L3NwYW4+JDwvcD5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2xpY2t9ID5hZGQgdG8gY2FydDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImNhcnRTaXplQ29udGV4dCIsInVzZUNvbnRleHQiLCJDYXJkIiwiaXRlbSIsImNhcnRPYmoiLCJpZCIsIm5hbWUiLCJjYXRlZ29yeSIsInByaWNlIiwiaW1hZ2UiLCJoYW5kbGVDbGljayIsInVwZGF0ZWRDYXJ0IiwiY2FydCIsImkiLCJsZW5ndGgiLCJwdXNoIiwic2V0Q2FydCIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJwcm9kdWN0SW1nIiwiaW1nIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiLCJwcm9kdWN0SW5mbyIsInByb2R1Y3RUZXh0IiwiaDEiLCJoMiIsInAiLCJwcm9kdWN0UHJpY2VCdG4iLCJzcGFuIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Card/Card.jsx\n"));

/***/ })

});