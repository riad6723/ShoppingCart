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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card/Card */ \"(app-pages-browser)/./src/components/Card/Card.jsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var _s1 = $RefreshSig$();\n    //const [cart,setCart]=useState([]);\n    //const [productsList, setProductsList]=useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_s1(()=>{\n        _s1();\n        const { productsList: productsList1, setProductsList } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_3__.cartSizeContext);\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000/\").then((response)=>{\n            setProductsList(response.data);\n        }).catch((err)=>console.log(err));\n        const storedJsonString = localStorage.getItem(\"cart\");\n        if (storedJsonString) {\n            const localCart = JSON.parse(storedJsonString);\n            setCart(localCart);\n        } else {\n            localStorage.setItem(\"cart\", JSON.stringify([]));\n            setCart([]);\n        }\n    }, \"SLBzCUpCQ31i+mswTCAcWEpO3dw=\"), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().home),\n            children: productsList.map((item, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"  \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/products/\".concat(item.id),\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().link),\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    item: item\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 99\n                                }, this),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 35,\n                            columnNumber: 38\n                        }, this),\n                        \"  \"\n                    ]\n                }, index, true, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 35,\n                    columnNumber: 19\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n            lineNumber: 33,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ0g7QUFDaUI7QUFDSztBQUNoQztBQUNIO0FBRVYsU0FBU1E7OztJQUN0QixvQ0FBb0M7SUFDcEMscURBQXFEO0lBRXJETixnREFBU0EsS0FBQzs7UUFDUixNQUFNLEVBQUNPLGNBQUFBLGFBQVksRUFBQ0MsZUFBZSxFQUFDLEdBQUNOLGlEQUFVQSxDQUFDQyxzRUFBZUE7UUFDL0RFLDZDQUFLQSxDQUFDSSxHQUFHLENBQUMsMEJBQ1RDLElBQUksQ0FBQ0MsQ0FBQUE7WUFBV0gsZ0JBQWdCRyxTQUFTQyxJQUFJO1FBQUMsR0FDOUNDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBS0MsUUFBUUMsR0FBRyxDQUFDRjtRQUV4QixNQUFNRyxtQkFBaUJDLGFBQWFDLE9BQU8sQ0FBQztRQUM1QyxJQUFHRixrQkFBaUI7WUFDbEIsTUFBTUcsWUFBVUMsS0FBS0MsS0FBSyxDQUFDTDtZQUMzQk0sUUFBUUg7UUFDVixPQUNJO1lBQ0ZGLGFBQWFNLE9BQU8sQ0FBQyxRQUFPSCxLQUFLSSxTQUFTLENBQUMsRUFBRTtZQUM3Q0YsUUFBUSxFQUFFO1FBQ1o7SUFDRixvQ0FBRSxFQUFFO0lBRUoscUJBQ0U7a0JBRUEsNEVBQUNHO1lBQUtDLFdBQVc1Qiw4REFBVztzQkFDdkJRLGFBQWFzQixHQUFHLENBQUMsQ0FBQ0MsTUFBS0M7Z0JBQ3RCLHFCQUFRLDhEQUFDQzs7d0JBQWdCO3NDQUFFLDhEQUFDNUIsa0RBQUlBOzRCQUFDNkIsTUFBTSxhQUFxQixPQUFSSCxLQUFLSSxFQUFFOzRCQUFJUCxXQUFXNUIsOERBQVc7O2dDQUFFOzhDQUFDLDhEQUFDRCw2REFBSUE7b0NBQUNnQyxNQUFNQTs7Ozs7O2dDQUFROzs7Ozs7O3dCQUFROzttQkFBbEdDOzs7OztZQUNuQjs7Ozs7OztBQUtUO0dBaEN3QnpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0NhcmQvQ2FyZFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjYXJ0U2l6ZUNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0cy9jYXJ0U2l6ZUNvbnRleHRcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vY29uc3QgW2NhcnQsc2V0Q2FydF09dXNlU3RhdGUoW10pO1xuICAvL2NvbnN0IFtwcm9kdWN0c0xpc3QsIHNldFByb2R1Y3RzTGlzdF09dXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IHtwcm9kdWN0c0xpc3Qsc2V0UHJvZHVjdHNMaXN0fT11c2VDb250ZXh0KGNhcnRTaXplQ29udGV4dCk7XG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvJylcbiAgICAudGhlbihyZXNwb25zZT0+e3NldFByb2R1Y3RzTGlzdChyZXNwb25zZS5kYXRhKX0pXG4gICAgLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcblxuICAgIGNvbnN0IHN0b3JlZEpzb25TdHJpbmc9bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKTtcbiAgICBpZihzdG9yZWRKc29uU3RyaW5nKXtcbiAgICAgIGNvbnN0IGxvY2FsQ2FydD1KU09OLnBhcnNlKHN0b3JlZEpzb25TdHJpbmcpO1xuICAgICAgc2V0Q2FydChsb2NhbENhcnQpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgICBzZXRDYXJ0KFtdKTtcbiAgICB9XG4gIH0sW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuaG9tZX0+XG4gICAgICAgIHtwcm9kdWN0c0xpc3QubWFwKChpdGVtLGluZGV4KT0+e1xuICAgICAgICAgIHJldHVybiAgPGRpdiBrZXk9e2luZGV4fT4gIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtpdGVtLmlkfWB9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PiA8Q2FyZCBpdGVtPXtpdGVtfSAvPiA8L0xpbms+ICA8L2Rpdj4gIFxuICAgICAgICAgfSl9XG4gICAgPC9tYWluPlxuXG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJDYXJkIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiY2FydFNpemVDb250ZXh0IiwiTGluayIsImF4aW9zIiwiSG9tZSIsInByb2R1Y3RzTGlzdCIsInNldFByb2R1Y3RzTGlzdCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZWRKc29uU3RyaW5nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsQ2FydCIsIkpTT04iLCJwYXJzZSIsInNldENhcnQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibWFpbiIsImNsYXNzTmFtZSIsImhvbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkaXYiLCJocmVmIiwiaWQiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});