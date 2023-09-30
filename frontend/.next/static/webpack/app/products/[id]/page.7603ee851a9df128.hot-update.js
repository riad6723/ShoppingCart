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

/***/ "(app-pages-browser)/./src/components/Navbar/Navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navbar.module.css */ \"(app-pages-browser)/./src/components/Navbar/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [searchKey, setSearchKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { cart, setProductsList } = _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__.useCartSizeContext;\n    const [newProductsList, setNewProductsList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSearch = (e)=>{\n        setSearchKey(e.target.value);\n        if (!e.target.value) {\n            setProductsList(newProductsList);\n            return;\n        }\n        const filteredItems = newProductsList.filter((item)=>item.name.toLowerCase().includes(e.target.value.toLowerCase()));\n        setProductsList(filteredItems);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000/\").then((response)=>setNewProductsList(response.data)).catch((err)=>console.log(err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                    children: \"Shopify\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"  \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\",\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                                    children: \" Shop \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 20\n                                }, this),\n                                \"  \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"  \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\",\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                                    children: \" Contact \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 20\n                                }, this),\n                                \"  \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().search),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"  search here...\",\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                        value: searchKey,\n                        onChange: (e)=>handleSearch(e)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/products\",\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faShoppingCart,\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().icon)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 59\n                        }, this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sup\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().sup),\n                            children: [\n                                \" \",\n                                cart.length,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 125\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"twPSnDszh+JRo4UxP5DdZhWcGwk=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ2M7QUFDRTtBQUMxQjtBQUNaO0FBQ007QUFDMEI7QUFDbkM7QUFDb0M7QUFFN0QsU0FBU1c7O0lBQ0wsTUFBTSxDQUFDQyxXQUFVQyxhQUFhLEdBQUNYLCtDQUFRQTtJQUN2QyxNQUFNLEVBQUNZLElBQUksRUFBQ0MsZUFBZSxFQUFDLEdBQUNMLHlFQUFrQkE7SUFDL0MsTUFBTSxDQUFDTSxpQkFBaUJDLG1CQUFtQixHQUFDZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZELE1BQU1nQixlQUFhLENBQUNDO1FBQ2hCTixhQUFhTSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFDM0IsSUFBRyxDQUFDRixFQUFFQyxNQUFNLENBQUNDLEtBQUssRUFBQztZQUNqQk4sZ0JBQWdCQztZQUNoQjtRQUNGO1FBRUYsTUFBTU0sZ0JBQWdCTixnQkFBZ0JPLE1BQU0sQ0FBQyxDQUFDQyxPQUM5Q0EsS0FBS0MsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLENBQUNLLFdBQVc7UUFFM0RYLGdCQUFnQk87SUFDbEI7SUFFQXJCLGdEQUFTQSxDQUFDO1FBQ1JRLDZDQUFLQSxDQUFDbUIsR0FBRyxDQUFDLDBCQUNUQyxJQUFJLENBQUNDLENBQUFBLFdBQVViLG1CQUFtQmEsU0FBU0MsSUFBSSxHQUMvQ0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFLQyxRQUFRQyxHQUFHLENBQUNGO0lBQzFCLEdBQUUsRUFBRTtJQUVOLHFCQUNFLDhEQUFDRztrQkFDQyw0RUFBQ0M7WUFBSUMsV0FBV2pDLCtEQUFVOzs4QkFFeEIsOERBQUMrQjtvQkFBSUUsV0FBV2pDLGlFQUFZOzhCQUFFOzs7Ozs7OEJBSTlCLDhEQUFDK0I7b0JBQUlFLFdBQVdqQyxnRUFBVzs7c0NBQ3ZCLDhEQUFDb0M7O2dDQUFJOzhDQUFFLDhEQUFDbkMsa0RBQUlBO29DQUFDb0MsTUFBTztvQ0FBS0osV0FBV2pDLGdFQUFXOzhDQUFFOzs7Ozs7Z0NBQWE7Ozs7Ozs7c0NBQzlELDhEQUFDb0M7O2dDQUFJOzhDQUFFLDhEQUFDbkMsa0RBQUlBO29DQUFDb0MsTUFBTztvQ0FBSUosV0FBV2pDLGdFQUFXOzhDQUFFOzs7Ozs7Z0NBQWdCOzs7Ozs7Ozs7Ozs7OzhCQUdwRSw4REFBQytCO29CQUFJRSxXQUFXakMsa0VBQWE7OEJBQ3pCLDRFQUFDdUM7d0JBQU1DLE1BQUs7d0JBQU9DLGFBQVk7d0JBQW1CUixXQUFXakMsaUVBQVk7d0JBQUVnQixPQUFPVDt3QkFBV21DLFVBQVU1QixDQUFBQSxJQUFHRCxhQUFhQzs7Ozs7Ozs7Ozs7OEJBRzNILDhEQUFDYixrREFBSUE7b0JBQUNvQyxNQUFNO29CQUFhSixXQUFXakMsZ0VBQVc7O3dCQUFFO3NDQUFDLDhEQUFDRiwyRUFBZUE7NEJBQUM2QyxNQUFNNUMsNkVBQWNBOzRCQUFFa0MsV0FBV2pDLGdFQUFXOzs7Ozs7d0JBQUk7c0NBQUMsOERBQUM0Qzs0QkFBSVgsV0FBV2pDLCtEQUFVOztnQ0FBRTtnQ0FBRVMsS0FBS29DLE1BQU07Z0NBQUM7Ozs7Ozs7d0JBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk3SztHQTdDU3ZDO0tBQUFBO0FBK0NULCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4P2Q3MGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVNob3BwaW5nQ2FydCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY2FydFNpemVDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9jYXJ0U2l6ZUNvbnRleHQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt1c2VDYXJ0U2l6ZUNvbnRleHR9IGZyb20gJ0AvY29udGV4dHMvY2FydFNpemVDb250ZXh0J1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgY29uc3QgW3NlYXJjaEtleSxzZXRTZWFyY2hLZXldPXVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCB7Y2FydCxzZXRQcm9kdWN0c0xpc3R9PXVzZUNhcnRTaXplQ29udGV4dFxyXG4gICAgY29uc3QgW25ld1Byb2R1Y3RzTGlzdCwgc2V0TmV3UHJvZHVjdHNMaXN0XT11c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoPShlKT0+e1xyXG4gICAgICAgIHNldFNlYXJjaEtleShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgaWYoIWUudGFyZ2V0LnZhbHVlKXtcclxuICAgICAgICAgIHNldFByb2R1Y3RzTGlzdChuZXdQcm9kdWN0c0xpc3QpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBuZXdQcm9kdWN0c0xpc3QuZmlsdGVyKChpdGVtKSA9PlxyXG4gICAgICBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICApXHJcbiAgICAgIHNldFByb2R1Y3RzTGlzdChmaWx0ZXJlZEl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvJylcclxuICAgICAgLnRoZW4ocmVzcG9uc2U9PnNldE5ld1Byb2R1Y3RzTGlzdChyZXNwb25zZS5kYXRhKSlcclxuICAgICAgLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcclxuICAgIH0sW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBTaG9waWZ5XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAgICAgIDxsaSA+ICA8TGluayBocmVmPXtgL2B9ICBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfT4gU2hvcCA8L0xpbms+ICA8L2xpPiAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGkgPiAgPExpbmsgaHJlZj17YC9gfSBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfT4gQ29udGFjdCA8L0xpbms+ICA8L2xpPiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9JyAgc2VhcmNoIGhlcmUuLi4nIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB2YWx1ZT17c2VhcmNoS2V5fSBvbkNoYW5nZT17ZT0+aGFuZGxlU2VhcmNoKGUpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8TGluayBocmVmPXsnL3Byb2R1Y3RzJ30gY2xhc3NOYW1lPXtzdHlsZXMuTGlua30+IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0NhcnR9IGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+IDxzdXAgY2xhc3NOYW1lPXtzdHlsZXMuc3VwfT4ge2NhcnQubGVuZ3RofSA8L3N1cD4gPC9MaW5rPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFTaG9wcGluZ0NhcnQiLCJzdHlsZXMiLCJMaW5rIiwidXNlQ29udGV4dCIsImNhcnRTaXplQ29udGV4dCIsImF4aW9zIiwidXNlQ2FydFNpemVDb250ZXh0IiwiTmF2YmFyIiwic2VhcmNoS2V5Iiwic2V0U2VhcmNoS2V5IiwiY2FydCIsInNldFByb2R1Y3RzTGlzdCIsIm5ld1Byb2R1Y3RzTGlzdCIsInNldE5ld1Byb2R1Y3RzTGlzdCIsImhhbmRsZVNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaXN0IiwibGkiLCJocmVmIiwic2VhcmNoIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImljb24iLCJzdXAiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar/Navbar.jsx\n"));

/***/ })

});