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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card.module.css */ \"(app-pages-browser)/./src/components/Card/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Card(param) {\n    let { item, cartObj } = param;\n    _s();\n    const { id, name, category, price, image } = item;\n    const handleClick = ()=>{\n        const updatedCart = [\n            ...cartObj.cart\n        ];\n        for(let i = 0; i < updatedCart.length; i++){\n            if (updatedCart[i].id === item.id) return;\n        }\n        updatedCart.push(item);\n        cartObj.setCart(updatedCart);\n    };\n    const { cartSize, setCartSize } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_2__.cartSizeContext);\n    setCartSize();\n    console.log(cartSize);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().productImg),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"http://bit.ly/2tMBBTd\",\n                    height: \"420\",\n                    width: \"327\",\n                    alt: \"Product\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().productInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().productText),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: category\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem doloremque ex ipsam voluptates vel eos recusandae consectetur hic harum, explicabo obcaecati dolores soluta. Molestias reiciendis nemo assumenda itaque iure.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().productPriceBtn),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().span),\n                                        children: price\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 14\n                                    }, this),\n                                    \"$\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                                onClick: handleClick,\n                                children: \"add to cart\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"KEJp+Yxog+XZ6wOy4Zq55pjMW5U=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBCO0FBQ2E7QUFDc0I7QUFDMUI7QUFFbkMsU0FBU0ksS0FBSyxLQUFjO1FBQWQsRUFBQ0MsSUFBSSxFQUFDQyxPQUFPLEVBQUMsR0FBZDs7SUFDWixNQUFNLEVBQUNDLEVBQUUsRUFBQ0MsSUFBSSxFQUFDQyxRQUFRLEVBQUNDLEtBQUssRUFBQ0MsS0FBSyxFQUFDLEdBQUNOO0lBQ3JDLE1BQU1PLGNBQVk7UUFDbEIsTUFBTUMsY0FBWTtlQUFJUCxRQUFRUSxJQUFJO1NBQUM7UUFFakMsSUFBSSxJQUFJQyxJQUFFLEdBQUVBLElBQUVGLFlBQVlHLE1BQU0sRUFBQ0QsSUFBSTtZQUNuQyxJQUFHRixXQUFXLENBQUNFLEVBQUUsQ0FBQ1IsRUFBRSxLQUFHRixLQUFLRSxFQUFFLEVBQUM7UUFDakM7UUFFQU0sWUFBWUksSUFBSSxDQUFDWjtRQUNqQkMsUUFBUVksT0FBTyxDQUFDTDtJQUNsQjtJQUVBLE1BQU0sRUFBQ00sUUFBUSxFQUFDQyxXQUFXLEVBQUMsR0FBQ2pCLGlEQUFVQSxDQUFDRCxzRUFBZUE7SUFDdkRrQjtJQUNBQyxRQUFRQyxHQUFHLENBQUNIO0lBRVoscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVd2QixpRUFBYzs7MEJBQzVCLDhEQUFDc0I7Z0JBQUlDLFdBQVd2QixvRUFBaUI7MEJBQy9CLDRFQUFDMEI7b0JBQUlDLEtBQUk7b0JBQXdCQyxRQUFPO29CQUFNQyxPQUFNO29CQUFNQyxLQUFJOzs7Ozs7Ozs7OzswQkFFaEUsOERBQUNSO2dCQUFJQyxXQUFXdkIscUVBQWtCOztrQ0FDaEMsOERBQUNzQjt3QkFBSUMsV0FBV3ZCLHFFQUFrQjs7MENBQ2hDLDhEQUFDaUM7MENBQUkxQjs7Ozs7OzBDQUNMLDhEQUFDMkI7MENBQUkxQjs7Ozs7OzBDQUNMLDhEQUFDMkI7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FJTCw4REFBQ2I7d0JBQUlDLFdBQVd2Qix5RUFBc0I7OzBDQUNwQyw4REFBQ21DOztrREFBRSw4REFBQ0U7d0NBQUtkLFdBQVd2Qiw4REFBVztrREFBR1M7Ozs7OztvQ0FBYTs7Ozs7OzswQ0FDL0MsOERBQUM2QjtnQ0FBT0MsTUFBTXZDLGdFQUFhO2dDQUFFd0MsU0FBUzdCOzBDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUQ7R0FyQ1NSO0tBQUFBO0FBdUNULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3g/Njk5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgY2FydFNpemVDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9jYXJ0U2l6ZUNvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ2FyZCh7aXRlbSxjYXJ0T2JqfSkge1xyXG4gIGNvbnN0IHtpZCxuYW1lLGNhdGVnb3J5LHByaWNlLGltYWdlfT1pdGVtO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrPSgpPT57XHJcbiAgY29uc3QgdXBkYXRlZENhcnQ9Wy4uLmNhcnRPYmouY2FydF07XHJcblxyXG4gICAgZm9yKGxldCBpPTA7aTx1cGRhdGVkQ2FydC5sZW5ndGg7aSsrKXtcclxuICAgICAgaWYodXBkYXRlZENhcnRbaV0uaWQ9PT1pdGVtLmlkKXJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVkQ2FydC5wdXNoKGl0ZW0pO1xyXG4gICAgY2FydE9iai5zZXRDYXJ0KHVwZGF0ZWRDYXJ0KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHtjYXJ0U2l6ZSxzZXRDYXJ0U2l6ZX09dXNlQ29udGV4dChjYXJ0U2l6ZUNvbnRleHQpO1xyXG4gIHNldENhcnRTaXplKCk7XHJcbiAgY29uc29sZS5sb2coY2FydFNpemUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW1nfT5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9iaXQubHkvMnRNQkJUZFwiIGhlaWdodD1cIjQyMFwiIHdpZHRoPVwiMzI3XCIgYWx0PVwiUHJvZHVjdFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJbmZvfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RUZXh0fT5cclxuICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxyXG4gICAgICAgICAgPGgyPntjYXRlZ29yeX08L2gyPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VtIHF1aWRlbSBkb2xvcmVtcXVlIGV4IGlwc2FtIHZvbHVwdGF0ZXMgdmVsIGVvcyByZWN1c2FuZGFlIGNvbnNlY3RldHVyIGhpYyBoYXJ1bSwgZXhwbGljYWJvIG9iY2FlY2F0aSBkb2xvcmVzIHNvbHV0YS4gTW9sZXN0aWFzIHJlaWNpZW5kaXMgbmVtbyBhc3N1bWVuZGEgaXRhcXVlIGl1cmUuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0UHJpY2VCdG59PlxyXG4gICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0+e3ByaWNlfTwvc3Bhbj4kPC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDbGlja30gPmFkZCB0byBjYXJ0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiY2FydFNpemVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNhcmQiLCJpdGVtIiwiY2FydE9iaiIsImlkIiwibmFtZSIsImNhdGVnb3J5IiwicHJpY2UiLCJpbWFnZSIsImhhbmRsZUNsaWNrIiwidXBkYXRlZENhcnQiLCJjYXJ0IiwiaSIsImxlbmd0aCIsInB1c2giLCJzZXRDYXJ0IiwiY2FydFNpemUiLCJzZXRDYXJ0U2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwicHJvZHVjdEltZyIsImltZyIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWx0IiwicHJvZHVjdEluZm8iLCJwcm9kdWN0VGV4dCIsImgxIiwiaDIiLCJwIiwicHJvZHVjdFByaWNlQnRuIiwic3BhbiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Card/Card.jsx\n"));

/***/ })

});