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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product.module.css */ \"(app-pages-browser)/./src/app/products/[id]/Product.module.css\");\n/* harmony import */ var _Product_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Product_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Product() {\n    _s();\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const id = location.pathname.split(\"/\").pop();\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:5000/products/\".concat(id)).then((response)=>setItem(response.data[0])).catch((err)=>console.log(err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().product),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().productCard),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg\",\n                        className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().productImage)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().productName)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().productCategory)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_Product_module_css__WEBPACK_IMPORTED_MODULE_3___default().productDescription),\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\products\\\\[id]\\\\page.jsx\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Product, \"+DkSdkBEFD9kWWumE0326S9Z+Ic=\");\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDa0Q7QUFDekI7QUFDZ0I7QUFHekMsU0FBU0s7O0lBQ1AsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUNMLCtDQUFRQSxDQUFDLENBQUM7SUFFL0JELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sS0FBS0MsU0FBU0MsUUFBUSxDQUFDQyxLQUFLLENBQUMsS0FBS0MsR0FBRztRQUMzQ1QsNkNBQUtBLENBQUNVLEdBQUcsQ0FBQyxrQ0FBcUMsT0FBSEwsS0FDM0NNLElBQUksQ0FBQ0MsQ0FBQUEsV0FBVVIsUUFBUVEsU0FBU0MsSUFBSSxDQUFDLEVBQUUsR0FDdkNDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBS0MsUUFBUUMsR0FBRyxDQUFDRjtJQUUxQixHQUFFLEVBQUU7SUFFSixxQkFDRTtrQkFDQSw0RUFBQ0c7WUFBSUMsV0FBV2xCLG9FQUFjO3NCQUM5Qiw0RUFBQ2lCO2dCQUFJQyxXQUFXbEIsd0VBQWtCOztrQ0FDaEMsOERBQUNxQjt3QkFBSUMsS0FBSTt3QkFBMEZKLFdBQVdsQix5RUFBbUI7Ozs7OztrQ0FDakksOERBQUN3Qjt3QkFBR04sV0FBV2xCLHdFQUFrQjs7Ozs7O2tDQUNqQyw4REFBQzBCO3dCQUFFUixXQUFXbEIsNEVBQXNCOzs7Ozs7a0NBQ3BDLDhEQUFDMEI7d0JBQUVSLFdBQVdsQiwrRUFBeUI7a0NBQUc2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hEO0dBdkJTNUI7S0FBQUE7QUF5QlQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9kdWN0cy9baWRdL3BhZ2UuanN4PzE2NTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJvZHVjdC5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3QoKSB7XHJcbiAgY29uc3QgW2l0ZW0sc2V0SXRlbV09dXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IGlkID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcclxuICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Byb2R1Y3RzLyR7aWR9YClcclxuICAgIC50aGVuKHJlc3BvbnNlPT5zZXRJdGVtKHJlc3BvbnNlLmRhdGFbMF0pKVxyXG4gICAgLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcclxuXHJcbiAgfSxbXSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RDYXJkfT5cclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vMjM2eC8zYi8zNi9jYS8zYjM2Y2EzYWZlMGZhMGZkNDk4NGI5ZWVlMmUxNTRiYi5qcGdcIiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW1hZ2V9IC8+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0TmFtZX0+e308L2gyPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0Q2F0ZWdvcnl9Pnt9PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0RGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJzdHlsZXMiLCJQcm9kdWN0IiwiaXRlbSIsInNldEl0ZW0iLCJpZCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsInBvcCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9kdWN0IiwicHJvZHVjdENhcmQiLCJpbWciLCJzcmMiLCJwcm9kdWN0SW1hZ2UiLCJoMiIsInByb2R1Y3ROYW1lIiwicCIsInByb2R1Y3RDYXRlZ29yeSIsInByb2R1Y3REZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/[id]/page.jsx\n"));

/***/ })

});