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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card.module.css */ \"(app-pages-browser)/./src/components/Card/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Card(param) {\n    let { item, cartObj } = param;\n    _s();\n    const { id, name, category, price, image } = item;\n    const handleClick = ()=>{\n        const updatedCart = [\n            ...cartObj.cart\n        ];\n        for(let i = 0; i < updatedCart.length; i++){\n            if (updatedCart[i].id === item.id) return;\n        }\n        updatedCart.push(item);\n        cartObj.setCart(updatedCart);\n    };\n    const { cartSize, setCartSize } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_2__.cartSizeContext);\n    setCartSize(cartObj.cart.length);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"photo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"description\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Classic Peace Lily\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Popular House Plant\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"$18\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Add to Cart\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"KEJp+Yxog+XZ6wOy4Zq55pjMW5U=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBCO0FBQ2E7QUFDc0I7QUFDMUI7QUFFbkMsU0FBU0ksS0FBSyxLQUFjO1FBQWQsRUFBQ0MsSUFBSSxFQUFDQyxPQUFPLEVBQUMsR0FBZDs7SUFDWixNQUFNLEVBQUNDLEVBQUUsRUFBQ0MsSUFBSSxFQUFDQyxRQUFRLEVBQUNDLEtBQUssRUFBQ0MsS0FBSyxFQUFDLEdBQUNOO0lBRXJDLE1BQU1PLGNBQVk7UUFDbEIsTUFBTUMsY0FBWTtlQUFJUCxRQUFRUSxJQUFJO1NBQUM7UUFFakMsSUFBSSxJQUFJQyxJQUFFLEdBQUVBLElBQUVGLFlBQVlHLE1BQU0sRUFBQ0QsSUFBSTtZQUNuQyxJQUFHRixXQUFXLENBQUNFLEVBQUUsQ0FBQ1IsRUFBRSxLQUFHRixLQUFLRSxFQUFFLEVBQUM7UUFDakM7UUFFQU0sWUFBWUksSUFBSSxDQUFDWjtRQUNqQkMsUUFBUVksT0FBTyxDQUFDTDtJQUNsQjtJQUVBLE1BQU0sRUFBQ00sUUFBUSxFQUFDQyxXQUFXLEVBQUMsR0FBQ2pCLGlEQUFVQSxDQUFDRCxzRUFBZUE7SUFDdkRrQixZQUFZZCxRQUFRUSxJQUFJLENBQUNFLE1BQU07SUFFL0IscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVdyQiw4REFBVzs7MEJBQzNCLDhEQUFDb0I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFJQyxLQUFJOzs7Ozs7Ozs7OzswQkFFWCw4REFBQ0o7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FBTzs7Ozs7O2tDQUNSLDhEQUFDQTtrQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWQ7R0EvQlN6QjtLQUFBQTtBQWlDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmQuanN4PzY5OTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IGNhcnRTaXplQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvY2FydFNpemVDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENhcmQoe2l0ZW0sY2FydE9ian0pIHtcclxuICBjb25zdCB7aWQsbmFtZSxjYXRlZ29yeSxwcmljZSxpbWFnZX09aXRlbTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2s9KCk9PntcclxuICBjb25zdCB1cGRhdGVkQ2FydD1bLi4uY2FydE9iai5jYXJ0XTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDtpPHVwZGF0ZWRDYXJ0Lmxlbmd0aDtpKyspe1xyXG4gICAgICBpZih1cGRhdGVkQ2FydFtpXS5pZD09PWl0ZW0uaWQpcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZWRDYXJ0LnB1c2goaXRlbSk7XHJcbiAgICBjYXJ0T2JqLnNldENhcnQodXBkYXRlZENhcnQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qge2NhcnRTaXplLHNldENhcnRTaXplfT11c2VDb250ZXh0KGNhcnRTaXplQ29udGV4dCk7XHJcbiAgc2V0Q2FydFNpemUoY2FydE9iai5jYXJ0Lmxlbmd0aCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwaG90b1wiPlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS8yMzZ4LzNiLzM2L2NhLzNiMzZjYTNhZmUwZmEwZmQ0OTg0YjllZWUyZTE1NGJiLmpwZ1wiLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICA8aDI+Q2xhc3NpYyBQZWFjZSBMaWx5PC9oMj5cclxuICAgICAgPGg0PlBvcHVsYXIgSG91c2UgUGxhbnQ8L2g0PlxyXG4gICAgICA8aDE+JDE4PC9oMT5cclxuICAgICAgPGJ1dHRvbj5BZGQgdG8gQ2FydDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uPlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiY2FydFNpemVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNhcmQiLCJpdGVtIiwiY2FydE9iaiIsImlkIiwibmFtZSIsImNhdGVnb3J5IiwicHJpY2UiLCJpbWFnZSIsImhhbmRsZUNsaWNrIiwidXBkYXRlZENhcnQiLCJjYXJ0IiwiaSIsImxlbmd0aCIsInB1c2giLCJzZXRDYXJ0IiwiY2FydFNpemUiLCJzZXRDYXJ0U2l6ZSIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJpbWciLCJzcmMiLCJoMiIsImg0IiwiaDEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Card/Card.jsx\n"));

/***/ })

});