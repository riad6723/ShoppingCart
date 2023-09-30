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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card.module.css */ \"(app-pages-browser)/./src/components/Card/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Card(param) {\n    let { item } = param;\n    _s();\n    const { id, name, category, price, image } = item;\n    const { cart, setCart } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_2__.cartSizeContext);\n    const handleAddClick = (e)=>{\n        e.preventDefault();\n        const updatedCart = [\n            ...cart\n        ];\n        for(let i = 0; i < updatedCart.length; i++){\n            if (updatedCart[i].id === item.id) return;\n        }\n        updatedCart.push(item);\n        localStorage.setItem(\"cart\", updatedCart);\n        setCart(updatedCart);\n    };\n    const handleRemoveClick = (e)=>{\n        e.preventDefault();\n        const updatedCart = [\n            ...cart\n        ];\n        for(let i = 0; i < updatedCart.length; i++){\n            if (updatedCart[i].id === item.id) {\n                updatedCart.splice(i, 1);\n                setCart(updatedCart);\n                return;\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().photo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: category\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"$\",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: (e)=>handleAddClick(e),\n                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().addButton),\n                        children: \"Add to Cart\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: (e)=>handleRemoveClick(e),\n                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_3___default().removeButton),\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Card\\\\Card.jsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"+qfrD8MZs1AwvVTVbiOs9djHR2c=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBCO0FBQ2E7QUFDc0I7QUFDMUI7QUFFbkMsU0FBU0ksS0FBSyxLQUFNO1FBQU4sRUFBQ0MsSUFBSSxFQUFDLEdBQU47O0lBQ1osTUFBTSxFQUFDQyxFQUFFLEVBQUNDLElBQUksRUFBQ0MsUUFBUSxFQUFDQyxLQUFLLEVBQUNDLEtBQUssRUFBQyxHQUFDTDtJQUNyQyxNQUFNLEVBQUNNLElBQUksRUFBQ0MsT0FBTyxFQUFDLEdBQUNULGlEQUFVQSxDQUFDRCxzRUFBZUE7SUFFL0MsTUFBTVcsaUJBQWUsQ0FBQ0M7UUFDdEJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsY0FBWTtlQUFJTDtTQUFLO1FBRXpCLElBQUksSUFBSU0sSUFBRSxHQUFFQSxJQUFFRCxZQUFZRSxNQUFNLEVBQUNELElBQUk7WUFDbkMsSUFBR0QsV0FBVyxDQUFDQyxFQUFFLENBQUNYLEVBQUUsS0FBR0QsS0FBS0MsRUFBRSxFQUFDO1FBQ2pDO1FBRUFVLFlBQVlHLElBQUksQ0FBQ2Q7UUFDakJlLGFBQWFDLE9BQU8sQ0FBQyxRQUFPTDtRQUM1QkosUUFBUUk7SUFFVjtJQUVBLE1BQU1NLG9CQUFrQixDQUFDUjtRQUN2QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxjQUFZO2VBQUlMO1NBQUs7UUFFekIsSUFBSSxJQUFJTSxJQUFFLEdBQUVBLElBQUVELFlBQVlFLE1BQU0sRUFBQ0QsSUFBSTtZQUNuQyxJQUFHRCxXQUFXLENBQUNDLEVBQUUsQ0FBQ1gsRUFBRSxLQUFHRCxLQUFLQyxFQUFFLEVBQUM7Z0JBQzdCVSxZQUFZTyxNQUFNLENBQUNOLEdBQUU7Z0JBQ3JCTCxRQUFRSTtnQkFDUjtZQUNGO1FBQ0Y7SUFDRjtJQUVGLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFXeEIsOERBQVc7OzBCQUMzQiw4REFBQ3VCO2dCQUFJQyxXQUFXeEIsK0RBQVk7MEJBQzFCLDRFQUFDMkI7b0JBQUlDLEtBQUk7Ozs7Ozs7Ozs7OzBCQUVYLDhEQUFDTDtnQkFBSUMsV0FBV3hCLHFFQUFrQjs7a0NBQ2hDLDhEQUFDOEI7a0NBQUl4Qjs7Ozs7O2tDQUNMLDhEQUFDeUI7a0NBQUl4Qjs7Ozs7O2tDQUNMLDhEQUFDeUI7OzRCQUFHOzRCQUFFeEI7Ozs7Ozs7a0NBQ04sOERBQUN5Qjt3QkFBT0MsU0FBU3JCLENBQUFBLElBQUdELGVBQWVDO3dCQUFJVyxXQUFXeEIsbUVBQWdCO2tDQUFFOzs7Ozs7a0NBQ3BFLDhEQUFDaUM7d0JBQU9DLFNBQVNyQixDQUFBQSxJQUFHUSxrQkFBa0JSO3dCQUFJVyxXQUFXeEIsc0VBQW1CO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEY7R0E3Q1NHO0tBQUFBO0FBK0NULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmQvQ2FyZC5qc3g/Njk5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgY2FydFNpemVDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9jYXJ0U2l6ZUNvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ2FyZCh7aXRlbX0pIHtcclxuICBjb25zdCB7aWQsbmFtZSxjYXRlZ29yeSxwcmljZSxpbWFnZX09aXRlbTtcclxuICBjb25zdCB7Y2FydCxzZXRDYXJ0fT11c2VDb250ZXh0KGNhcnRTaXplQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZENsaWNrPShlKT0+e1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB1cGRhdGVkQ2FydD1bLi4uY2FydF07XHJcblxyXG4gICAgZm9yKGxldCBpPTA7aTx1cGRhdGVkQ2FydC5sZW5ndGg7aSsrKXtcclxuICAgICAgaWYodXBkYXRlZENhcnRbaV0uaWQ9PT1pdGVtLmlkKXJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVkQ2FydC5wdXNoKGl0ZW0pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLHVwZGF0ZWRDYXJ0KTtcclxuICAgIHNldENhcnQodXBkYXRlZENhcnQpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVDbGljaz0oZSk9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHVwZGF0ZWRDYXJ0PVsuLi5jYXJ0XTtcclxuICBcclxuICAgICAgZm9yKGxldCBpPTA7aTx1cGRhdGVkQ2FydC5sZW5ndGg7aSsrKXtcclxuICAgICAgICBpZih1cGRhdGVkQ2FydFtpXS5pZD09PWl0ZW0uaWQpe1xyXG4gICAgICAgICAgdXBkYXRlZENhcnQuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICBzZXRDYXJ0KHVwZGF0ZWRDYXJ0KTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfT5cclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vMjM2eC8zYi8zNi9jYS8zYjM2Y2EzYWZlMGZhMGZkNDk4NGI5ZWVlMmUxNTRiYi5qcGdcIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICA8aDI+e25hbWV9PC9oMj5cclxuICAgICAgPGg0PntjYXRlZ29yeX08L2g0PlxyXG4gICAgICA8aDE+JHtwcmljZX08L2gxPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2U9PmhhbmRsZUFkZENsaWNrKGUpfSBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259PkFkZCB0byBDYXJ0PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17ZT0+aGFuZGxlUmVtb3ZlQ2xpY2soZSl9IGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZUJ1dHRvbn0+UmVtb3ZlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJjYXJ0U2l6ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2FyZCIsIml0ZW0iLCJpZCIsIm5hbWUiLCJjYXRlZ29yeSIsInByaWNlIiwiaW1hZ2UiLCJjYXJ0Iiwic2V0Q2FydCIsImhhbmRsZUFkZENsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlZENhcnQiLCJpIiwibGVuZ3RoIiwicHVzaCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJoYW5kbGVSZW1vdmVDbGljayIsInNwbGljZSIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJwaG90byIsImltZyIsInNyYyIsImRlc2NyaXB0aW9uIiwiaDIiLCJoNCIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImFkZEJ1dHRvbiIsInJlbW92ZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Card/Card.jsx\n"));

/***/ })

});