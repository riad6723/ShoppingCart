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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card/Card */ \"(app-pages-browser)/./src/components/Card/Card.jsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar/Navbar */ \"(app-pages-browser)/./src/components/Navbar/Navbar.jsx\");\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [productsList, setProductsList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:5000/\").then((response)=>{\n            setProductsList(response.data);\n        }).catch((err)=>console.log(err));\n        const storedJsonString = localStorage.getItem(\"cart\");\n        if (storedJsonString) {\n            const localCart = JSON.parse(storedJsonString);\n            setCart(localCart);\n        } else {\n            localStorage.setItem(\"cart\", JSON.stringify([]));\n            setCart([]);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__.cartSizeContext.Provider, {\n            value: {\n                cart,\n                setCart,\n                productsList,\n                setProductsList\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 33,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().home),\n                    children: productsList.map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"  \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/products/\".concat(item.id),\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().link),\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            item: item\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 99\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 38\n                                }, this),\n                                \"  \"\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 37,\n                            columnNumber: 19\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 35,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\app\\\\page.js\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"gowyGCMod7QmYt3o4dtwHYDD3kg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUN5QztBQUNIO0FBQ0s7QUFDSztBQUNZO0FBQ2hDO0FBQ0g7QUFFVixTQUFTUTs7SUFDdEIsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUNQLCtDQUFRQSxDQUFDLEVBQUU7SUFDaEMsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBQ1QsK0NBQVFBLENBQUMsRUFBRTtJQUVqREQsZ0RBQVNBLENBQUM7UUFDUkssNkNBQUtBLENBQUNNLEdBQUcsQ0FBQywwQkFDVEMsSUFBSSxDQUFDQyxDQUFBQTtZQUFXSCxnQkFBZ0JHLFNBQVNDLElBQUk7UUFBQyxHQUM5Q0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFLQyxRQUFRQyxHQUFHLENBQUNGO1FBRXhCLE1BQU1HLG1CQUFpQkMsYUFBYUMsT0FBTyxDQUFDO1FBQzVDLElBQUdGLGtCQUFpQjtZQUNsQixNQUFNRyxZQUFVQyxLQUFLQyxLQUFLLENBQUNMO1lBQzNCWCxRQUFRYztRQUNWLE9BQ0k7WUFDRkYsYUFBYUssT0FBTyxDQUFDLFFBQU9GLEtBQUtHLFNBQVMsQ0FBQyxFQUFFO1lBQzdDbEIsUUFBUSxFQUFFO1FBQ1o7SUFDRixHQUFFLEVBQUU7SUFFSixxQkFDRTtrQkFDQSw0RUFBQ0wsc0VBQWVBLENBQUN3QixRQUFRO1lBQUNDLE9BQU87Z0JBQUNyQjtnQkFBS0M7Z0JBQVFDO2dCQUFhQztZQUFlOzs4QkFDM0UsOERBQUNSLGlFQUFNQTs7Ozs7OEJBRVAsOERBQUMyQjtvQkFBS0MsV0FBVy9CLDhEQUFXOzhCQUN2QlUsYUFBYXVCLEdBQUcsQ0FBQyxDQUFDQyxNQUFLQzt3QkFDdEIscUJBQVEsOERBQUNDOztnQ0FBZ0I7OENBQUUsOERBQUMvQixrREFBSUE7b0NBQUNnQyxNQUFNLGFBQXFCLE9BQVJILEtBQUtJLEVBQUU7b0NBQUlQLFdBQVcvQiw4REFBVzs7d0NBQUU7c0RBQUMsOERBQUNELDZEQUFJQTs0Q0FBQ21DLE1BQU1BOzs7Ozs7d0NBQVE7Ozs7Ozs7Z0NBQVE7OzJCQUFsR0M7Ozs7O29CQUNuQjs7Ozs7Ozs7Ozs7OztBQUtUO0dBakN3QjVCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0NhcmQvQ2FyZFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcidcbmltcG9ydCB7IGNhcnRTaXplQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRzL2NhcnRTaXplQ29udGV4dFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NhcnQsc2V0Q2FydF09dXNlU3RhdGUoW10pO1xuICBjb25zdCBbcHJvZHVjdHNMaXN0LCBzZXRQcm9kdWN0c0xpc3RdPXVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nKVxuICAgIC50aGVuKHJlc3BvbnNlPT57c2V0UHJvZHVjdHNMaXN0KHJlc3BvbnNlLmRhdGEpfSlcbiAgICAuY2F0Y2goZXJyPT5jb25zb2xlLmxvZyhlcnIpKVxuXG4gICAgY29uc3Qgc3RvcmVkSnNvblN0cmluZz1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpO1xuICAgIGlmKHN0b3JlZEpzb25TdHJpbmcpe1xuICAgICAgY29uc3QgbG9jYWxDYXJ0PUpTT04ucGFyc2Uoc3RvcmVkSnNvblN0cmluZyk7XG4gICAgICBzZXRDYXJ0KGxvY2FsQ2FydCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICAgIHNldENhcnQoW10pO1xuICAgIH1cbiAgfSxbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGNhcnRTaXplQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2NhcnQsc2V0Q2FydCxwcm9kdWN0c0xpc3Qsc2V0UHJvZHVjdHNMaXN0fX0+XG4gICAgPE5hdmJhciAvPlxuXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuaG9tZX0+XG4gICAgICAgIHtwcm9kdWN0c0xpc3QubWFwKChpdGVtLGluZGV4KT0+e1xuICAgICAgICAgIHJldHVybiAgPGRpdiBrZXk9e2luZGV4fT4gIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtpdGVtLmlkfWB9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PiA8Q2FyZCBpdGVtPXtpdGVtfSAvPiA8L0xpbms+ICA8L2Rpdj4gIFxuICAgICAgICAgfSl9XG4gICAgPC9tYWluPlxuICAgIDwvY2FydFNpemVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2YmFyIiwiY2FydFNpemVDb250ZXh0IiwiTGluayIsImF4aW9zIiwiSG9tZSIsImNhcnQiLCJzZXRDYXJ0IiwicHJvZHVjdHNMaXN0Iiwic2V0UHJvZHVjdHNMaXN0IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0b3JlZEpzb25TdHJpbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxDYXJ0IiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIlByb3ZpZGVyIiwidmFsdWUiLCJtYWluIiwiY2xhc3NOYW1lIiwiaG9tZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRpdiIsImhyZWYiLCJpZCIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});