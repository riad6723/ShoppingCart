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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card.module.css */ \"(app-pages-browser)/./src/components/Card/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Card(param) {\n    let { item, cartObj } = param;\n    _s();\n    const { id, name, category, price, image } = item;\n    const { cartSize, setCartSize } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_2__.cartSizeContext);\n    const handleAddClick = (e)=>{\n        e.preventDefault();\n        //const updatedCart=[...cartObj.cart];\n        //const updatedCart=[...cartSize];\n        for(let i = 0; i < updatedCart.length; i++){\n            if (updatedCart[i].id === item.id) return;\n        }\n        updatedCart.push(item);\n        setCartSize(updatedCart);\n    //updatedCart.push(item);\n    //cartObj.setCart(updatedCart);\n    };\n    const handleRemoveClick = (e)=>{\n        e.preventDefault();\n        const updatedCart1 = [\n            ...cartObj.cart\n        ];\n        for(let i = 0; i < updatedCart1.length; i++){\n            if (updatedCart1[i].id === item.id) {\n                updatedCart1.splice(i, 1);\n                cartObj.setCart(updatedCart1);\n                return;\n            }\n        }\n    };\n    //const {cartSize,setCartSize}=useContext(cartSizeContext);\n    //setCartSize(cartObj.cart.length);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().photo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: category\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"$\",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: (e)=>handleAddClick(e),\n                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().addButton),\n                        children: \"Add to Cart\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: (e)=>handleRemoveClick(e),\n                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().removeButton),\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"KEJp+Yxog+XZ6wOy4Zq55pjMW5U=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBCO0FBQ2E7QUFDc0I7QUFDMUI7QUFFbkMsU0FBU0ksS0FBSyxLQUFjO1FBQWQsRUFBQ0MsSUFBSSxFQUFDQyxPQUFPLEVBQUMsR0FBZDs7SUFDWixNQUFNLEVBQUNDLEVBQUUsRUFBQ0MsSUFBSSxFQUFDQyxRQUFRLEVBQUNDLEtBQUssRUFBQ0MsS0FBSyxFQUFDLEdBQUNOO0lBQ3JDLE1BQU0sRUFBQ08sUUFBUSxFQUFDQyxXQUFXLEVBQUMsR0FBQ1YsaURBQVVBLENBQUNELHNFQUFlQTtJQUV2RCxNQUFNWSxpQkFBZSxDQUFDQztRQUN0QkEsRUFBRUMsY0FBYztRQUNoQixzQ0FBc0M7UUFDdEMsa0NBQWtDO1FBRWhDLElBQUksSUFBSUMsSUFBRSxHQUFFQSxJQUFFQyxZQUFZQyxNQUFNLEVBQUNGLElBQUk7WUFDbkMsSUFBR0MsV0FBVyxDQUFDRCxFQUFFLENBQUNWLEVBQUUsS0FBR0YsS0FBS0UsRUFBRSxFQUFDO1FBQ2pDO1FBRUFXLFlBQVlFLElBQUksQ0FBQ2Y7UUFDakJRLFlBQVlLO0lBRVoseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUNqQztJQUVBLE1BQU1HLG9CQUFrQixDQUFDTjtRQUN2QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNRSxlQUFZO2VBQUlaLFFBQVFnQixJQUFJO1NBQUM7UUFFakMsSUFBSSxJQUFJTCxJQUFFLEdBQUVBLElBQUVDLGFBQVlDLE1BQU0sRUFBQ0YsSUFBSTtZQUNuQyxJQUFHQyxZQUFXLENBQUNELEVBQUUsQ0FBQ1YsRUFBRSxLQUFHRixLQUFLRSxFQUFFLEVBQUM7Z0JBQzdCVyxhQUFZSyxNQUFNLENBQUNOLEdBQUU7Z0JBQ3JCWCxRQUFRa0IsT0FBTyxDQUFDTjtnQkFDaEI7WUFDRjtRQUNGO0lBQ0Y7SUFFRiwyREFBMkQ7SUFDM0QsbUNBQW1DO0lBRW5DLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFXekIsOERBQVc7OzBCQUMzQiw4REFBQ3dCO2dCQUFJQyxXQUFXekIsK0RBQVk7MEJBQzFCLDRFQUFDNEI7b0JBQUlDLEtBQUk7Ozs7Ozs7Ozs7OzBCQUVYLDhEQUFDTDtnQkFBSUMsV0FBV3pCLHFFQUFrQjs7a0NBQ2hDLDhEQUFDK0I7a0NBQUl4Qjs7Ozs7O2tDQUNMLDhEQUFDeUI7a0NBQUl4Qjs7Ozs7O2tDQUNMLDhEQUFDeUI7OzRCQUFHOzRCQUFFeEI7Ozs7Ozs7a0NBQ04sOERBQUN5Qjt3QkFBT0MsU0FBU3JCLENBQUFBLElBQUdELGVBQWVDO3dCQUFJVyxXQUFXekIsbUVBQWdCO2tDQUFFOzs7Ozs7a0NBQ3BFLDhEQUFDa0M7d0JBQU9DLFNBQVNyQixDQUFBQSxJQUFHTSxrQkFBa0JOO3dCQUFJVyxXQUFXekIsc0VBQW1CO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEY7R0FsRFNHO0tBQUFBO0FBb0RULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3g/Njk5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgY2FydFNpemVDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9jYXJ0U2l6ZUNvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ2FyZCh7aXRlbSxjYXJ0T2JqfSkge1xyXG4gIGNvbnN0IHtpZCxuYW1lLGNhdGVnb3J5LHByaWNlLGltYWdlfT1pdGVtO1xyXG4gIGNvbnN0IHtjYXJ0U2l6ZSxzZXRDYXJ0U2l6ZX09dXNlQ29udGV4dChjYXJ0U2l6ZUNvbnRleHQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRDbGljaz0oZSk9PntcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy9jb25zdCB1cGRhdGVkQ2FydD1bLi4uY2FydE9iai5jYXJ0XTtcclxuICAvL2NvbnN0IHVwZGF0ZWRDYXJ0PVsuLi5jYXJ0U2l6ZV07XHJcblxyXG4gICAgZm9yKGxldCBpPTA7aTx1cGRhdGVkQ2FydC5sZW5ndGg7aSsrKXtcclxuICAgICAgaWYodXBkYXRlZENhcnRbaV0uaWQ9PT1pdGVtLmlkKXJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVkQ2FydC5wdXNoKGl0ZW0pO1xyXG4gICAgc2V0Q2FydFNpemUodXBkYXRlZENhcnQpO1xyXG5cclxuICAgIC8vdXBkYXRlZENhcnQucHVzaChpdGVtKTtcclxuICAgIC8vY2FydE9iai5zZXRDYXJ0KHVwZGF0ZWRDYXJ0KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUNsaWNrPShlKT0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdXBkYXRlZENhcnQ9Wy4uLmNhcnRPYmouY2FydF07XHJcbiAgXHJcbiAgICAgIGZvcihsZXQgaT0wO2k8dXBkYXRlZENhcnQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgaWYodXBkYXRlZENhcnRbaV0uaWQ9PT1pdGVtLmlkKXtcclxuICAgICAgICAgIHVwZGF0ZWRDYXJ0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgY2FydE9iai5zZXRDYXJ0KHVwZGF0ZWRDYXJ0KTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgLy9jb25zdCB7Y2FydFNpemUsc2V0Q2FydFNpemV9PXVzZUNvbnRleHQoY2FydFNpemVDb250ZXh0KTtcclxuICAvL3NldENhcnRTaXplKGNhcnRPYmouY2FydC5sZW5ndGgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99PlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS8yMzZ4LzNiLzM2L2NhLzNiMzZjYTNhZmUwZmEwZmQ0OTg0YjllZWUyZTE1NGJiLmpwZ1wiLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgIDxoMj57bmFtZX08L2gyPlxyXG4gICAgICA8aDQ+e2NhdGVnb3J5fTwvaDQ+XHJcbiAgICAgIDxoMT4ke3ByaWNlfTwvaDE+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17ZT0+aGFuZGxlQWRkQ2xpY2soZSl9IGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn0+QWRkIHRvIENhcnQ8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlPT5oYW5kbGVSZW1vdmVDbGljayhlKX0gY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlQnV0dG9ufT5SZW1vdmU8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImNhcnRTaXplQ29udGV4dCIsInVzZUNvbnRleHQiLCJDYXJkIiwiaXRlbSIsImNhcnRPYmoiLCJpZCIsIm5hbWUiLCJjYXRlZ29yeSIsInByaWNlIiwiaW1hZ2UiLCJjYXJ0U2l6ZSIsInNldENhcnRTaXplIiwiaGFuZGxlQWRkQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJpIiwidXBkYXRlZENhcnQiLCJsZW5ndGgiLCJwdXNoIiwiaGFuZGxlUmVtb3ZlQ2xpY2siLCJjYXJ0Iiwic3BsaWNlIiwic2V0Q2FydCIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJwaG90byIsImltZyIsInNyYyIsImRlc2NyaXB0aW9uIiwiaDIiLCJoNCIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImFkZEJ1dHRvbiIsInJlbW92ZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Card/Card.jsx\n"));

/***/ })

});