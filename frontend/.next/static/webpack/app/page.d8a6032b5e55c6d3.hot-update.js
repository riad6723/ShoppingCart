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

/***/ "(app-pages-browser)/./src/components/Navbar/Navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navbar.module.css */ \"(app-pages-browser)/./src/components/Navbar/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [searchKey, setSearchKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [searchResult, setSearchResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { cart, filteredList, setFList } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__.cartSizeContext);\n    //const [productsList, setProductsList]=useState([]);\n    const handleSearch = (e)=>{\n        setSearchKey(e.target.value);\n        if (!e.target.value) {\n            setProductsList([]);\n            return;\n        }\n        const filteredItems = productsList.filter((item)=>item.name.toLowerCase().includes(e.target.value.toLowerCase()));\n        setProductsList(filteredItems);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000/\").then((response)=>setProductsList(response.data)).catch((err)=>console.log(err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                    children: \"Shopify\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"  \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\",\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                                    children: \" Shop \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 20\n                                }, this),\n                                \"  \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"  \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\",\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                                    children: \" Contact \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 20\n                                }, this),\n                                \"  \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().search),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"  search here...\",\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                        value: searchKey,\n                        onChange: (e)=>handleSearch(e)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/products\",\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faShoppingCart,\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().icon)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 59\n                        }, this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sup\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().sup),\n                            children: [\n                                \" \",\n                                cart.length,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 125\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"6f6WW9G+lBSeuo0FB/c3VJIqXtU=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ2M7QUFDRTtBQUMxQjtBQUNaO0FBQ007QUFDMEI7QUFDbkM7QUFFekIsU0FBU1U7O0lBQ0wsTUFBTSxDQUFDQyxXQUFVQyxhQUFhLEdBQUNWLCtDQUFRQTtJQUN2QyxNQUFNLENBQUNXLGNBQWFDLGdCQUFnQixHQUFDWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2hELE1BQU0sRUFBQ2EsSUFBSSxFQUFDQyxZQUFZLEVBQUNDLFFBQVEsRUFBQyxHQUFDVixpREFBVUEsQ0FBQ0Msc0VBQWVBO0lBQzdELHFEQUFxRDtJQUVyRCxNQUFNVSxlQUFhLENBQUNDO1FBQ2hCUCxhQUFhTyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFDM0IsSUFBRyxDQUFDRixFQUFFQyxNQUFNLENBQUNDLEtBQUssRUFBQztZQUNqQkMsZ0JBQWdCLEVBQUU7WUFDbEI7UUFDRjtRQUVGLE1BQU1DLGdCQUFnQkMsYUFBYUMsTUFBTSxDQUFDLENBQUNDLE9BQzNDQSxLQUFLQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDVixFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQ08sV0FBVztRQUUzRE4sZ0JBQWdCQztJQUNsQjtJQUVBdEIsZ0RBQVNBLENBQUM7UUFDUlEsNkNBQUtBLENBQUNxQixHQUFHLENBQUMsMEJBQ1RDLElBQUksQ0FBQ0MsQ0FBQUEsV0FBVVYsZ0JBQWdCVSxTQUFTQyxJQUFJLEdBQzVDQyxLQUFLLENBQUNDLENBQUFBLE1BQUtDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDMUIsR0FBRSxFQUFFO0lBRU4scUJBQ0UsOERBQUNHO2tCQUNDLDRFQUFDQztZQUFJQyxXQUFXbkMsK0RBQVU7OzhCQUV4Qiw4REFBQ2lDO29CQUFJRSxXQUFXbkMsaUVBQVk7OEJBQUU7Ozs7Ozs4QkFJOUIsOERBQUNpQztvQkFBSUUsV0FBV25DLGdFQUFXOztzQ0FDdkIsOERBQUNzQzs7Z0NBQUk7OENBQUUsOERBQUNyQyxrREFBSUE7b0NBQUNzQyxNQUFPO29DQUFLSixXQUFXbkMsZ0VBQVc7OENBQUU7Ozs7OztnQ0FBYTs7Ozs7OztzQ0FDOUQsOERBQUNzQzs7Z0NBQUk7OENBQUUsOERBQUNyQyxrREFBSUE7b0NBQUNzQyxNQUFPO29DQUFJSixXQUFXbkMsZ0VBQVc7OENBQUU7Ozs7OztnQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7OEJBR3BFLDhEQUFDaUM7b0JBQUlFLFdBQVduQyxrRUFBYTs4QkFDekIsNEVBQUN5Qzt3QkFBTUMsTUFBSzt3QkFBT0MsYUFBWTt3QkFBbUJSLFdBQVduQyxpRUFBWTt3QkFBRWdCLE9BQU9WO3dCQUFXc0MsVUFBVTlCLENBQUFBLElBQUdELGFBQWFDOzs7Ozs7Ozs7Ozs4QkFPM0gsOERBQUNiLGtEQUFJQTtvQkFBQ3NDLE1BQU07b0JBQWFKLFdBQVduQyxnRUFBVzs7d0JBQUU7c0NBQUMsOERBQUNGLDJFQUFlQTs0QkFBQytDLE1BQU05Qyw2RUFBY0E7NEJBQUVvQyxXQUFXbkMsZ0VBQVc7Ozs7Ozt3QkFBSTtzQ0FBQyw4REFBQzhDOzRCQUFJWCxXQUFXbkMsK0RBQVU7O2dDQUFFO2dDQUFFVSxLQUFLcUMsTUFBTTtnQ0FBQzs7Ozs7Ozt3QkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdLO0dBbERTMUM7S0FBQUE7QUFvRFQsK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3g/ZDcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU2hvcHBpbmdDYXJ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjYXJ0U2l6ZUNvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL2NhcnRTaXplQ29udGV4dCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgY29uc3QgW3NlYXJjaEtleSxzZXRTZWFyY2hLZXldPXVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbc2VhcmNoUmVzdWx0LHNldFNlYXJjaFJlc3VsdF09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qge2NhcnQsZmlsdGVyZWRMaXN0LHNldEZMaXN0fT11c2VDb250ZXh0KGNhcnRTaXplQ29udGV4dCk7XHJcbiAgICAvL2NvbnN0IFtwcm9kdWN0c0xpc3QsIHNldFByb2R1Y3RzTGlzdF09dXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaD0oZSk9PntcclxuICAgICAgICBzZXRTZWFyY2hLZXkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGlmKCFlLnRhcmdldC52YWx1ZSl7XHJcbiAgICAgICAgICBzZXRQcm9kdWN0c0xpc3QoW10pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBwcm9kdWN0c0xpc3QuZmlsdGVyKChpdGVtKSA9PlxyXG4gICAgICBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICApXHJcbiAgICAgIHNldFByb2R1Y3RzTGlzdChmaWx0ZXJlZEl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvJylcclxuICAgICAgLnRoZW4ocmVzcG9uc2U9PnNldFByb2R1Y3RzTGlzdChyZXNwb25zZS5kYXRhKSlcclxuICAgICAgLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcclxuICAgIH0sW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBTaG9waWZ5XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAgICAgIDxsaSA+ICA8TGluayBocmVmPXtgL2B9ICBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfT4gU2hvcCA8L0xpbms+ICA8L2xpPiAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGkgPiAgPExpbmsgaHJlZj17YC9gfSBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfT4gQ29udGFjdCA8L0xpbms+ICA8L2xpPiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9JyAgc2VhcmNoIGhlcmUuLi4nIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB2YWx1ZT17c2VhcmNoS2V5fSBvbkNoYW5nZT17ZT0+aGFuZGxlU2VhcmNoKGUpfSAvPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLy9zZWFyY2hSZXN1bHQgJiYgc2VhcmNoUmVzdWx0Lmxlbmd0aCA/IHNlYXJjaFJlc3VsdC5tYXAoKGl0ZW0saW5kZXgpPT57cmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fSBvbkNsaWNrPXtlPT5oYW5kbGVTZWFyY2goZSl9PntpdGVtLm5hbWV9PC9kaXY+fSkgOiA8PjwvPiBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9kdWN0cyd9IGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9PiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdDYXJ0fSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPiA8c3VwIGNsYXNzTmFtZT17c3R5bGVzLnN1cH0+IHtjYXJ0Lmxlbmd0aH0gPC9zdXA+IDwvTGluaz5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhU2hvcHBpbmdDYXJ0Iiwic3R5bGVzIiwiTGluayIsInVzZUNvbnRleHQiLCJjYXJ0U2l6ZUNvbnRleHQiLCJheGlvcyIsIk5hdmJhciIsInNlYXJjaEtleSIsInNldFNlYXJjaEtleSIsInNlYXJjaFJlc3VsdCIsInNldFNlYXJjaFJlc3VsdCIsImNhcnQiLCJmaWx0ZXJlZExpc3QiLCJzZXRGTGlzdCIsImhhbmRsZVNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFByb2R1Y3RzTGlzdCIsImZpbHRlcmVkSXRlbXMiLCJwcm9kdWN0c0xpc3QiLCJmaWx0ZXIiLCJpdGVtIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaXN0IiwibGkiLCJocmVmIiwic2VhcmNoIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImljb24iLCJzdXAiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar/Navbar.jsx\n"));

/***/ })

});