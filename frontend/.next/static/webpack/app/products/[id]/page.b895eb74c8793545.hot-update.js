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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Navbar/Navbar */ \"(app-pages-browser)/./src/components/Navbar/Navbar.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction page() {\n    _s();\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { cart, setCart, productsList, setProductsList } = useContext(cartSizeContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const id = location.pathname.split(\"/\").pop();\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:5000/products/\".concat(id)).then((response)=>setItem(response.data[0])).catch((err)=>console.log(err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cartSizeContext.Provider, {\n            value: {\n                cart,\n                setCart,\n                productsList,\n                setProductsList\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n            lineNumber: 21,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(page, \"qql0hDkoIzO8r2rMMAjRZwgYRmA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNrRDtBQUN6QjtBQUM2QjtBQUd0RCxTQUFTSzs7SUFDUCxNQUFNLENBQUNDLE1BQUtDLFFBQVEsR0FBQ0wsK0NBQVFBLENBQUMsQ0FBQztJQUMvQixNQUFNLEVBQUNNLElBQUksRUFBQ0MsT0FBTyxFQUFDQyxZQUFZLEVBQUNDLGVBQWUsRUFBQyxHQUFDQyxXQUFXQztJQUU3RFosZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxLQUFLQyxTQUFTQyxRQUFRLENBQUNDLEtBQUssQ0FBQyxLQUFLQyxHQUFHO1FBQzNDZiw2Q0FBS0EsQ0FBQ2dCLEdBQUcsQ0FBQyxrQ0FBcUMsT0FBSEwsS0FDM0NNLElBQUksQ0FBQ0MsQ0FBQUEsV0FBVWQsUUFBUWMsU0FBU0MsSUFBSSxDQUFDLEVBQUUsR0FDdkNDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBS0MsUUFBUUMsR0FBRyxDQUFDRjtJQUUxQixHQUFFLEVBQUU7SUFFSixxQkFDRTtrQkFDQSw0RUFBQ1gsZ0JBQWdCYyxRQUFRO1lBQUNDLE9BQU87Z0JBQUNwQjtnQkFBS0M7Z0JBQVFDO2dCQUFhQztZQUFlOzs4QkFDM0UsOERBQUNQLGlFQUFNQTs7Ozs7OEJBQ1AsOERBQUN5Qjs7Ozs7Ozs7Ozs7O0FBTUw7R0F0QlN4QjtBQXdCVCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2R1Y3RzL1tpZF0vcGFnZS5qc3g/MTY1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIHBhZ2UoKSB7XHJcbiAgY29uc3QgW2l0ZW0sc2V0SXRlbV09dXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHtjYXJ0LHNldENhcnQscHJvZHVjdHNMaXN0LHNldFByb2R1Y3RzTGlzdH09dXNlQ29udGV4dChjYXJ0U2l6ZUNvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IGlkID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Byb2R1Y3RzLyR7aWR9YClcclxuICAgIC50aGVuKHJlc3BvbnNlPT5zZXRJdGVtKHJlc3BvbnNlLmRhdGFbMF0pKVxyXG4gICAgLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcclxuXHJcbiAgfSxbXSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxjYXJ0U2l6ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tjYXJ0LHNldENhcnQscHJvZHVjdHNMaXN0LHNldFByb2R1Y3RzTGlzdH19PlxyXG4gICAgPE5hdmJhciAvPlxyXG4gICAgPGRpdj5cclxuICAgICAgey8qY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkqL31cclxuICAgIDwvZGl2PlxyXG4gICAgPC9jYXJ0U2l6ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTmF2YmFyIiwicGFnZSIsIml0ZW0iLCJzZXRJdGVtIiwiY2FydCIsInNldENhcnQiLCJwcm9kdWN0c0xpc3QiLCJzZXRQcm9kdWN0c0xpc3QiLCJ1c2VDb250ZXh0IiwiY2FydFNpemVDb250ZXh0IiwiaWQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJwb3AiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/[id]/page.jsx\n"));

/***/ })

});