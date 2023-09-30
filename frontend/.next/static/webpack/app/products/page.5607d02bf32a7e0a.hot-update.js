"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./src/app/products/page.jsx":
/*!***********************************!*\
  !*** ./src/app/products/page.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card/Card */ \"(app-pages-browser)/./src/components/Card/Card.jsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/products/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Products() {\n    _s();\n    var _s1 = $RefreshSig$();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_s1(()=>{\n        _s1();\n        const { cart, setCart, productsList: productsList1, setProductsList } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_3__.cartSizeContext);\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000/\").then((response)=>{\n            setProductsList(response.data);\n        }).catch((err)=>console.log(err));\n        const storedJsonString = localStorage.getItem(\"cart\");\n        if (storedJsonString) {\n            const localCart = JSON.parse(storedJsonString);\n            setCart(localCart);\n        } else {\n            localStorage.setItem(\"cart\", JSON.stringify([]));\n            setCart([]);\n        }\n    }, \"I5zI/Uj/898gHcEEGBGSXy1kdE0=\"), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().home),\n        children: productsList.map((item, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"  \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/products/\".concat(item.id),\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_6___default().link),\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                item: item\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\page.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 99\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\page.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 38\n                    }, this),\n                    \"  \"\n                ]\n            }, index, true, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 19\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\page.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN5QztBQUNIO0FBQ2lCO0FBQ0s7QUFDaEM7QUFDSDtBQUVWLFNBQVNROzs7SUFFdEJMLGdEQUFTQSxLQUFDOztRQUNSLE1BQU0sRUFBQ00sSUFBSSxFQUFDQyxPQUFPLEVBQUNDLGNBQUFBLGFBQVksRUFBQ0MsZUFBZSxFQUFDLEdBQUNWLGlEQUFVQSxDQUFDRyxzRUFBZUE7UUFDNUVFLDZDQUFLQSxDQUFDTSxHQUFHLENBQUMsMEJBQ1RDLElBQUksQ0FBQ0MsQ0FBQUE7WUFBV0gsZ0JBQWdCRyxTQUFTQyxJQUFJO1FBQUMsR0FDOUNDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBS0MsUUFBUUMsR0FBRyxDQUFDRjtRQUV4QixNQUFNRyxtQkFBaUJDLGFBQWFDLE9BQU8sQ0FBQztRQUM1QyxJQUFHRixrQkFBaUI7WUFDbEIsTUFBTUcsWUFBVUMsS0FBS0MsS0FBSyxDQUFDTDtZQUMzQlgsUUFBUWM7UUFDVixPQUNJO1lBQ0ZGLGFBQWFLLE9BQU8sQ0FBQyxRQUFPRixLQUFLRyxTQUFTLENBQUMsRUFBRTtZQUM3Q2xCLFFBQVEsRUFBRTtRQUNaO0lBQ0Ysb0NBQUUsRUFBRTtJQUVKLHFCQUVFLDhEQUFDbUI7UUFBS0MsV0FBVzdCLDhEQUFXO2tCQUN2QlUsYUFBYXFCLEdBQUcsQ0FBQyxDQUFDQyxNQUFLQztZQUN0QixxQkFBUSw4REFBQ0M7O29CQUFnQjtrQ0FBRSw4REFBQzdCLGtEQUFJQTt3QkFBQzhCLE1BQU0sYUFBcUIsT0FBUkgsS0FBS0ksRUFBRTt3QkFBSVAsV0FBVzdCLDhEQUFXOzs0QkFBRTswQ0FBQyw4REFBQ0QsNkRBQUlBO2dDQUFDaUMsTUFBTUE7Ozs7Ozs0QkFBUTs7Ozs7OztvQkFBUTs7ZUFBbEdDOzs7OztRQUNuQjs7Ozs7O0FBR1Q7R0EzQndCMUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9kdWN0cy9wYWdlLmpzeD9hMmU3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9DYXJkL0NhcmQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjYXJ0U2l6ZUNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0cy9jYXJ0U2l6ZUNvbnRleHRcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKSB7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3Qge2NhcnQsc2V0Q2FydCxwcm9kdWN0c0xpc3Qsc2V0UHJvZHVjdHNMaXN0fT11c2VDb250ZXh0KGNhcnRTaXplQ29udGV4dCk7XHJcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nKVxyXG4gICAgLnRoZW4ocmVzcG9uc2U9PntzZXRQcm9kdWN0c0xpc3QocmVzcG9uc2UuZGF0YSl9KVxyXG4gICAgLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcclxuXHJcbiAgICBjb25zdCBzdG9yZWRKc29uU3RyaW5nPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0Jyk7XHJcbiAgICBpZihzdG9yZWRKc29uU3RyaW5nKXtcclxuICAgICAgY29uc3QgbG9jYWxDYXJ0PUpTT04ucGFyc2Uoc3RvcmVkSnNvblN0cmluZyk7XHJcbiAgICAgIHNldENhcnQobG9jYWxDYXJ0KTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JyxKU09OLnN0cmluZ2lmeShbXSkpO1xyXG4gICAgICBzZXRDYXJ0KFtdKTtcclxuICAgIH1cclxuICB9LFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmhvbWV9PlxyXG4gICAgICAgIHtwcm9kdWN0c0xpc3QubWFwKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgcmV0dXJuICA8ZGl2IGtleT17aW5kZXh9PiAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke2l0ZW0uaWR9YH0gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+IDxDYXJkIGl0ZW09e2l0ZW19IC8+IDwvTGluaz4gIDwvZGl2PiAgXHJcbiAgICAgICAgIH0pfVxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlcyIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNhcnRTaXplQ29udGV4dCIsIkxpbmsiLCJheGlvcyIsIlByb2R1Y3RzIiwiY2FydCIsInNldENhcnQiLCJwcm9kdWN0c0xpc3QiLCJzZXRQcm9kdWN0c0xpc3QiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3RvcmVkSnNvblN0cmluZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2NhbENhcnQiLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibWFpbiIsImNsYXNzTmFtZSIsImhvbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkaXYiLCJocmVmIiwiaWQiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/page.jsx\n"));

/***/ })

});