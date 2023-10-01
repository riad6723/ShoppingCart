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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product.module.css */ \"(app-pages-browser)/./src/app/products/[id]/Product.module.css\");\n/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Product() {\n    _s();\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const id = location.pathname.split(\"/\").pop();\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:5000/products/\".concat(id)).then((response)=>setItem(response.data[0])).catch((err)=>console.log(err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().product),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().productCard),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg\",\n                            className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().productImage)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().details),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().productName),\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h\", {\n                                className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().productCategory),\n                                children: item.category\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().productDescription),\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Product, \"+DkSdkBEFD9kWWumE0326S9Z+Ic=\");\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDa0Q7QUFDekI7QUFDZ0I7QUFHekMsU0FBU0s7O0lBQ1AsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUNMLCtDQUFRQSxDQUFDLENBQUM7SUFFL0JELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sS0FBS0MsU0FBU0MsUUFBUSxDQUFDQyxLQUFLLENBQUMsS0FBS0MsR0FBRztRQUMzQ1QsNkNBQUtBLENBQUNVLEdBQUcsQ0FBQyxrQ0FBcUMsT0FBSEwsS0FDM0NNLElBQUksQ0FBQ0MsQ0FBQUEsV0FBVVIsUUFBUVEsU0FBU0MsSUFBSSxDQUFDLEVBQUUsR0FDdkNDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBS0MsUUFBUUMsR0FBRyxDQUFDRjtJQUUxQixHQUFFLEVBQUU7SUFFSixxQkFDRTtrQkFDQSw0RUFBQ0c7WUFBSUMsV0FBV2xCLG9FQUFjO3NCQUM5Qiw0RUFBQ2lCO2dCQUFJQyxXQUFXbEIsd0VBQWtCOztrQ0FDaEMsOERBQUNpQjt3QkFBSUMsV0FBV2xCLDJFQUFxQjtrQ0FDbkMsNEVBQUNzQjs0QkFBSUMsS0FBSTs0QkFBMkZMLFdBQVdsQix5RUFBbUI7Ozs7Ozs7Ozs7O2tDQUVwSSw4REFBQ2lCO3dCQUFJQyxXQUFXbEIsb0VBQWM7OzBDQUM1Qiw4REFBQzBCO2dDQUFHUixXQUFXbEIsd0VBQWtCOzBDQUFHRSxLQUFLMEIsSUFBSTs7Ozs7OzBDQUM3Qyw4REFBQ0M7Z0NBQUVYLFdBQVdsQiw0RUFBc0I7MENBQUdFLEtBQUs2QixRQUFROzs7Ozs7MENBQ3BELDhEQUFDQztnQ0FBRWQsV0FBV2xCLCtFQUF5QjswQ0FBR0UsS0FBS2dDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRTtHQTNCU2pDO0tBQUFBO0FBNkJULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZHVjdHMvW2lkXS9wYWdlLmpzeD8xNjU4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Byb2R1Y3QubW9kdWxlLmNzcydcclxuXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KCkge1xyXG4gIGNvbnN0IFtpdGVtLHNldEl0ZW1dPXVzZVN0YXRlKHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zdCBpZCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9wcm9kdWN0cy8ke2lkfWApXHJcbiAgICAudGhlbihyZXNwb25zZT0+c2V0SXRlbShyZXNwb25zZS5kYXRhWzBdKSlcclxuICAgIC5jYXRjaChlcnI9PmNvbnNvbGUubG9nKGVycikpXHJcblxyXG4gIH0sW10pXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3R9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0Q2FyZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzIzNngvM2IvMzYvY2EvM2IzNmNhM2FmZTBmYTBmZDQ5ODRiOWVlZTJlMTU0YmIuanBnXCIgIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJbWFnZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3ROYW1lfT57aXRlbS5uYW1lfTwvaDI+XHJcbiAgICAgICAgPGggY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdENhdGVnb3J5fT57aXRlbS5jYXRlZ29yeX08L2g+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdERlc2NyaXB0aW9ufT57aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwic3R5bGVzIiwiUHJvZHVjdCIsIml0ZW0iLCJzZXRJdGVtIiwiaWQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJwb3AiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZHVjdCIsInByb2R1Y3RDYXJkIiwiaW1hZ2VDb250YWluZXIiLCJpbWciLCJzcmMiLCJwcm9kdWN0SW1hZ2UiLCJkZXRhaWxzIiwiaDIiLCJwcm9kdWN0TmFtZSIsIm5hbWUiLCJoIiwicHJvZHVjdENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJwIiwicHJvZHVjdERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/[id]/page.jsx\n"));

/***/ })

});