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

/***/ "(app-pages-browser)/./src/contexts/cartSizeContext.js":
/*!*****************************************!*\
  !*** ./src/contexts/cartSizeContext.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cartSizeContext: function() { return /* binding */ cartSizeContext; },\n/* harmony export */   cartSizeProvider: function() { return /* binding */ cartSizeProvider; },\n/* harmony export */   useCartSizeContext: function() { return /* binding */ useCartSizeContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ cartSizeContext,useCartSizeContext,cartSizeProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst cartSizeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useCartSizeContext = ()=>{\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)();\n};\n_s(useCartSizeContext, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nconst cartSizeProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [productsList, setProductsList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cartSizeContext.Provider, {\n        value: {\n            cart,\n            setCart,\n            productsList,\n            setProductsList\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\contexts\\\\cartSizeContext.js\",\n        lineNumber: 13,\n        columnNumber: 12\n    }, undefined);\n};\n_s1(cartSizeProvider, \"e3mO4Y/gKhUW72ewOyjrwEwNcAU=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy9jYXJ0U2l6ZUNvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNEQ7QUFDckQsTUFBTUcsZ0NBQWdCSCxvREFBYUEsR0FBRztBQUV0QyxNQUFNSSxxQkFBbUI7O0lBQzVCLE1BQU1DLFVBQVFILGlEQUFVQTtBQUM1QixFQUFDO0dBRllFO0FBSU4sTUFBTUUsbUJBQWlCO1FBQUMsRUFBQ0MsUUFBUSxFQUFDOztJQUNyQyxNQUFNLENBQUNDLE1BQUtDLFFBQVEsR0FBQ1IsK0NBQVFBLENBQUMsRUFBRTtJQUNoQyxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFDViwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpELHFCQUFPLDhEQUFDRSxnQkFBZ0JTLFFBQVE7UUFBQ0MsT0FBTztZQUFDTDtZQUFLQztZQUFRQztZQUFhQztRQUFlO2tCQUFJSjs7Ozs7O0FBQzFGLEVBQUM7SUFMWUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL2NhcnRTaXplQ29udGV4dC5qcz8wZjVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCBjb25zdCBjYXJ0U2l6ZUNvbnRleHQ9Y3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnRTaXplQ29udGV4dD0oKT0+e1xyXG4gICAgY29uc3QgY29udGV4dD11c2VDb250ZXh0KClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcnRTaXplUHJvdmlkZXI9KHtjaGlsZHJlbn0pPT57XHJcbiAgICBjb25zdCBbY2FydCxzZXRDYXJ0XT11c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcHJvZHVjdHNMaXN0LCBzZXRQcm9kdWN0c0xpc3RdPXVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICByZXR1cm4gPGNhcnRTaXplQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2NhcnQsc2V0Q2FydCxwcm9kdWN0c0xpc3Qsc2V0UHJvZHVjdHNMaXN0fX0+e2NoaWxkcmVufTwvY2FydFNpemVDb250ZXh0LlByb3ZpZGVyPlxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJjYXJ0U2l6ZUNvbnRleHQiLCJ1c2VDYXJ0U2l6ZUNvbnRleHQiLCJjb250ZXh0IiwiY2FydFNpemVQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydCIsInNldENhcnQiLCJwcm9kdWN0c0xpc3QiLCJzZXRQcm9kdWN0c0xpc3QiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/cartSizeContext.js\n"));

/***/ })

});