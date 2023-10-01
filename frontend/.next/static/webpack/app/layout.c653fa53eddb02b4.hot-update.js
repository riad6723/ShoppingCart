"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/Navbar/Navbar.jsx":
/*!******************************************!*\
  !*** ./src/components/Navbar/Navbar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navbar.module.css */ \"(app-pages-browser)/./src/components/Navbar/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [searchKey, setSearchKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { cart, setProductsList } = (0,_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__.useCartSizeContext)();\n    const [newProductsList, setNewProductsList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSearch = (e)=>{\n        setSearchKey(e.target.value);\n        if (!e.target.value) {\n            setProductsList(newProductsList);\n            return;\n        }\n        const filteredItems = newProductsList.filter((item)=>item.name.toLowerCase().includes(e.target.value.toLowerCase()));\n        setProductsList(filteredItems);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000/\").then((response)=>setNewProductsList(response.data)).catch((err)=>console.log(err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                        children: \"Shopify\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    \"  \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/\",\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                                        children: \" Shop \"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 20\n                                    }, this),\n                                    \"  \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    \"  \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/\",\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                                        children: \" Contact \"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 20\n                                    }, this),\n                                    \"  \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().search),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"  search here...\",\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                            value: searchKey,\n                            onChange: (e)=>handleSearch(e)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/products\",\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faShoppingCart,\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().icon)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 59\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sup\", {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().sup),\n                                children: [\n                                    \" \",\n                                    cart.length,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 125\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: \" lore \"\n            }, void 0, false, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"FXOkWavUYSjNMcQWFs9MHBo6dBo=\", false, function() {\n    return [\n        _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__.useCartSizeContext\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ2M7QUFDVTtBQUNsQztBQUNaO0FBQ0g7QUFDb0M7QUFFN0QsU0FBU1U7O0lBQ0wsTUFBTSxDQUFDQyxXQUFVQyxhQUFhLEdBQUNWLCtDQUFRQTtJQUN2QyxNQUFNLEVBQUNXLElBQUksRUFBQ0MsZUFBZSxFQUFDLEdBQUNMLDZFQUFrQkE7SUFDL0MsTUFBTSxDQUFDTSxpQkFBaUJDLG1CQUFtQixHQUFDZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZELE1BQU1lLGVBQWEsQ0FBQ0M7UUFDaEJOLGFBQWFNLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztRQUMzQixJQUFHLENBQUNGLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFDO1lBQ2pCTixnQkFBZ0JDO1lBQ2hCO1FBQ0Y7UUFFRixNQUFNTSxnQkFBZ0JOLGdCQUFnQk8sTUFBTSxDQUFDLENBQUNDLE9BQzlDQSxLQUFLQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDUixFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0ssV0FBVztRQUUzRFgsZ0JBQWdCTztJQUNsQjtJQUVBcEIsZ0RBQVNBLENBQUM7UUFDUk8sNkNBQUtBLENBQUNtQixHQUFHLENBQUMsMEJBQ1RDLElBQUksQ0FBQ0MsQ0FBQUEsV0FBVWIsbUJBQW1CYSxTQUFTQyxJQUFJLEdBQy9DQyxLQUFLLENBQUNDLENBQUFBLE1BQUtDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDMUIsR0FBRSxFQUFFO0lBRU4scUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ0M7Z0JBQUlDLFdBQVcvQiwrREFBVTs7a0NBRXhCLDhEQUFDNkI7d0JBQUlFLFdBQVcvQixpRUFBWTtrQ0FBRTs7Ozs7O2tDQUk5Qiw4REFBQzZCO3dCQUFJRSxXQUFXL0IsZ0VBQVc7OzBDQUN2Qiw4REFBQ2tDOztvQ0FBSTtrREFBRSw4REFBQ2pDLGtEQUFJQTt3Q0FBQ2tDLE1BQU87d0NBQUtKLFdBQVcvQixnRUFBVztrREFBRTs7Ozs7O29DQUFhOzs7Ozs7OzBDQUM5RCw4REFBQ2tDOztvQ0FBSTtrREFBRSw4REFBQ2pDLGtEQUFJQTt3Q0FBQ2tDLE1BQU87d0NBQUlKLFdBQVcvQixnRUFBVztrREFBRTs7Ozs7O29DQUFnQjs7Ozs7Ozs7Ozs7OztrQ0FHcEUsOERBQUM2Qjt3QkFBSUUsV0FBVy9CLGtFQUFhO2tDQUN6Qiw0RUFBQ3FDOzRCQUFNQyxNQUFLOzRCQUFPQyxhQUFZOzRCQUFtQlIsV0FBVy9CLGlFQUFZOzRCQUFFYyxPQUFPVDs0QkFBV21DLFVBQVU1QixDQUFBQSxJQUFHRCxhQUFhQzs7Ozs7Ozs7Ozs7a0NBRzNILDhEQUFDWCxrREFBSUE7d0JBQUNrQyxNQUFNO3dCQUFhSixXQUFXL0IsZ0VBQVc7OzRCQUFFOzBDQUFDLDhEQUFDSCwyRUFBZUE7Z0NBQUM0QyxNQUFNM0MsNkVBQWNBO2dDQUFFaUMsV0FBVy9CLGdFQUFXOzs7Ozs7NEJBQUk7MENBQUMsOERBQUMwQztnQ0FBSVgsV0FBVy9CLCtEQUFVOztvQ0FBRTtvQ0FBRU8sS0FBS29DLE1BQU07b0NBQUM7Ozs7Ozs7NEJBQU87Ozs7Ozs7Ozs7Ozs7MEJBRXZLLDhEQUFDZDtnQkFBS0UsV0FBVTswQkFBRzs7Ozs7Ozs7Ozs7O0FBR3pCO0dBOUNTM0I7O1FBRXdCRCx5RUFBa0JBOzs7S0FGMUNDO0FBZ0RULCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4P2Q3MGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVNob3BwaW5nQ2FydCwgZmFCYXJzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge3VzZUNhcnRTaXplQ29udGV4dH0gZnJvbSAnQC9jb250ZXh0cy9jYXJ0U2l6ZUNvbnRleHQnXHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgICBjb25zdCBbc2VhcmNoS2V5LHNldFNlYXJjaEtleV09dXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IHtjYXJ0LHNldFByb2R1Y3RzTGlzdH09dXNlQ2FydFNpemVDb250ZXh0KCk7XHJcbiAgICBjb25zdCBbbmV3UHJvZHVjdHNMaXN0LCBzZXROZXdQcm9kdWN0c0xpc3RdPXVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWFyY2g9KGUpPT57XHJcbiAgICAgICAgc2V0U2VhcmNoS2V5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBpZighZS50YXJnZXQudmFsdWUpe1xyXG4gICAgICAgICAgc2V0UHJvZHVjdHNMaXN0KG5ld1Byb2R1Y3RzTGlzdCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IG5ld1Byb2R1Y3RzTGlzdC5maWx0ZXIoKGl0ZW0pID0+XHJcbiAgICAgIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIClcclxuICAgICAgc2V0UHJvZHVjdHNMaXN0KGZpbHRlcmVkSXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nKVxyXG4gICAgICAudGhlbihyZXNwb25zZT0+c2V0TmV3UHJvZHVjdHNMaXN0KHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAuY2F0Y2goZXJyPT5jb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIFNob3BpZnlcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cclxuICAgICAgICAgICAgPGxpID4gIDxMaW5rIGhyZWY9e2AvYH0gIGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9PiBTaG9wIDwvTGluaz4gIDwvbGk+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDxsaSA+ICA8TGluayBocmVmPXtgL2B9IGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9PiBDb250YWN0IDwvTGluaz4gIDwvbGk+ICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nICBzZWFyY2ggaGVyZS4uLicgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHZhbHVlPXtzZWFyY2hLZXl9IG9uQ2hhbmdlPXtlPT5oYW5kbGVTZWFyY2goZSl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9eycvcHJvZHVjdHMnfSBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfT4gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNob3BwaW5nQ2FydH0gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz4gPHN1cCBjbGFzc05hbWU9e3N0eWxlcy5zdXB9PiB7Y2FydC5sZW5ndGh9IDwvc3VwPiA8L0xpbms+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8ZGl2ICBjbGFzc05hbWU9Jyc+IGxvcmUgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhU2hvcHBpbmdDYXJ0IiwiZmFCYXJzIiwic3R5bGVzIiwiTGluayIsImF4aW9zIiwidXNlQ2FydFNpemVDb250ZXh0IiwiTmF2YmFyIiwic2VhcmNoS2V5Iiwic2V0U2VhcmNoS2V5IiwiY2FydCIsInNldFByb2R1Y3RzTGlzdCIsIm5ld1Byb2R1Y3RzTGlzdCIsInNldE5ld1Byb2R1Y3RzTGlzdCIsImhhbmRsZVNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaXN0IiwibGkiLCJocmVmIiwic2VhcmNoIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImljb24iLCJzdXAiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar/Navbar.jsx\n"));

/***/ })

});