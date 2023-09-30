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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card/Card */ \"(app-pages-browser)/./src/components/Card/Card.jsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/Navbar */ \"(app-pages-browser)/./src/components/Navbar/Navbar.jsx\");\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [productsList, setProductsList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:5000/\").then((response)=>{\n            setProductsList(response.data);\n        }).catch((err)=>console.log(err));\n        const storedJsonString = localStorage.getItem(\"cart\");\n        if (storedJsonString) {\n            const localCart = JSON.parse(storedJsonString);\n            setCart(localCart);\n        } else {\n            localStorage.setItem(\"cart\", JSON.stringify([]));\n            setCart([]);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__.cartSizeContext.Provider, {\n            value: {\n                cart,\n                setCart,\n                productsList,\n                setProductsList\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    cart: cart,\n                    setCart: setCart,\n                    productsList: productsList,\n                    setProductsList: true\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 33,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().home),\n                    children: productsList.map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"  \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/products/\".concat(item.id),\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().link),\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            item: item\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 99\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 38\n                                }, this),\n                                \"  \"\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 37,\n                            columnNumber: 19\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 35,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"gowyGCMod7QmYt3o4dtwHYDD3kg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUN5QztBQUNIO0FBQ0s7QUFDSztBQUNZO0FBQ2hDO0FBQ0g7QUFFVixTQUFTUTs7SUFDdEIsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUNQLCtDQUFRQSxDQUFDLEVBQUU7SUFDaEMsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBQ1QsK0NBQVFBLENBQUMsRUFBRTtJQUVqREQsZ0RBQVNBLENBQUM7UUFDUkssNkNBQUtBLENBQUNNLEdBQUcsQ0FBQywwQkFDVEMsSUFBSSxDQUFDQyxDQUFBQTtZQUFXSCxnQkFBZ0JHLFNBQVNDLElBQUk7UUFBQyxHQUM5Q0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFLQyxRQUFRQyxHQUFHLENBQUNGO1FBRXhCLE1BQU1HLG1CQUFpQkMsYUFBYUMsT0FBTyxDQUFDO1FBQzVDLElBQUdGLGtCQUFpQjtZQUNsQixNQUFNRyxZQUFVQyxLQUFLQyxLQUFLLENBQUNMO1lBQzNCWCxRQUFRYztRQUNWLE9BQ0k7WUFDRkYsYUFBYUssT0FBTyxDQUFDLFFBQU9GLEtBQUtHLFNBQVMsQ0FBQyxFQUFFO1lBQzdDbEIsUUFBUSxFQUFFO1FBQ1o7SUFDRixHQUFFLEVBQUU7SUFFSixxQkFDRTtrQkFDQSw0RUFBQ0wsc0VBQWVBLENBQUN3QixRQUFRO1lBQUNDLE9BQU87Z0JBQUNyQjtnQkFBS0M7Z0JBQVFDO2dCQUFhQztZQUFlOzs4QkFDM0UsOERBQUNSLGlFQUFNQTtvQkFBQ0ssTUFBTUE7b0JBQU1DLFNBQVNBO29CQUFTQyxjQUFjQTtvQkFBY0MsZUFBZTs7Ozs7OzhCQUVqRiw4REFBQ21CO29CQUFLQyxXQUFXL0IsOERBQVc7OEJBQ3ZCVSxhQUFhdUIsR0FBRyxDQUFDLENBQUNDLE1BQUtDO3dCQUN0QixxQkFBUSw4REFBQ0M7O2dDQUFnQjs4Q0FBRSw4REFBQy9CLGtEQUFJQTtvQ0FBQ2dDLE1BQU0sYUFBcUIsT0FBUkgsS0FBS0ksRUFBRTtvQ0FBSVAsV0FBVy9CLDhEQUFXOzt3Q0FBRTtzREFBQyw4REFBQ0QsNkRBQUlBOzRDQUFDbUMsTUFBTUE7Ozs7Ozt3Q0FBUTs7Ozs7OztnQ0FBUTs7MkJBQWxHQzs7Ozs7b0JBQ25COzs7Ozs7Ozs7Ozs7O0FBS1Q7R0FqQ3dCNUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZC9DYXJkXCJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJ1xuaW1wb3J0IHsgY2FydFNpemVDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dHMvY2FydFNpemVDb250ZXh0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY2FydCxzZXRDYXJ0XT11c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwcm9kdWN0c0xpc3QsIHNldFByb2R1Y3RzTGlzdF09dXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwLycpXG4gICAgLnRoZW4ocmVzcG9uc2U9PntzZXRQcm9kdWN0c0xpc3QocmVzcG9uc2UuZGF0YSl9KVxuICAgIC5jYXRjaChlcnI9PmNvbnNvbGUubG9nKGVycikpXG5cbiAgICBjb25zdCBzdG9yZWRKc29uU3RyaW5nPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0Jyk7XG4gICAgaWYoc3RvcmVkSnNvblN0cmluZyl7XG4gICAgICBjb25zdCBsb2NhbENhcnQ9SlNPTi5wYXJzZShzdG9yZWRKc29uU3RyaW5nKTtcbiAgICAgIHNldENhcnQobG9jYWxDYXJ0KTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JyxKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgICAgc2V0Q2FydChbXSk7XG4gICAgfVxuICB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8Y2FydFNpemVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7Y2FydCxzZXRDYXJ0LHByb2R1Y3RzTGlzdCxzZXRQcm9kdWN0c0xpc3R9fT5cbiAgICA8TmF2YmFyIGNhcnQ9e2NhcnR9IHNldENhcnQ9e3NldENhcnR9IHByb2R1Y3RzTGlzdD17cHJvZHVjdHNMaXN0fSBzZXRQcm9kdWN0c0xpc3QgLz5cblxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmhvbWV9PlxuICAgICAgICB7cHJvZHVjdHNMaXN0Lm1hcCgoaXRlbSxpbmRleCk9PntcbiAgICAgICAgICByZXR1cm4gIDxkaXYga2V5PXtpbmRleH0+ICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7aXRlbS5pZH1gfSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT4gPENhcmQgaXRlbT17aXRlbX0gLz4gPC9MaW5rPiAgPC9kaXY+ICBcbiAgICAgICAgIH0pfVxuICAgIDwvbWFpbj5cbiAgICA8L2NhcnRTaXplQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdmJhciIsImNhcnRTaXplQ29udGV4dCIsIkxpbmsiLCJheGlvcyIsIkhvbWUiLCJjYXJ0Iiwic2V0Q2FydCIsInByb2R1Y3RzTGlzdCIsInNldFByb2R1Y3RzTGlzdCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZWRKc29uU3RyaW5nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsQ2FydCIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJQcm92aWRlciIsInZhbHVlIiwibWFpbiIsImNsYXNzTmFtZSIsImhvbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkaXYiLCJocmVmIiwiaWQiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});