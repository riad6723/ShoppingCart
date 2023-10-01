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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navbar.module.css */ \"(app-pages-browser)/./src/components/Navbar/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [searchKey, setSearchKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { cart, setProductsList } = (0,_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__.useCartSizeContext)();\n    const [newProductsList, setNewProductsList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [clicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSearch = (e)=>{\n        setSearchKey(e.target.value);\n        if (!e.target.value) {\n            setProductsList(newProductsList);\n            return;\n        }\n        const filteredItems = newProductsList.filter((item)=>item.name.toLowerCase().includes(e.target.value.toLowerCase()));\n        setProductsList(filteredItems);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000/\").then((response)=>setNewProductsList(response.data)).catch((err)=>console.log(err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                        children: \"Shopify\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    \"  \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/\",\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                                        children: \" Shop \"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 20\n                                    }, this),\n                                    \"  \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    \"  \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/\",\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                                        children: \" Contact \"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 20\n                                    }, this),\n                                    \"  \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().search),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"  search here...\",\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                            value: searchKey,\n                            onChange: (e)=>handleSearch(e)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/products\",\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faShoppingCart,\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().icon)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 59\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sup\", {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().sup),\n                                children: [\n                                    \" \",\n                                    cart.length,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 125\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            !clicked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faBars,\n                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().menueIcon),\n                onClick: ()=>setClicked(true)\n            }, void 0, false, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                lineNumber: 55,\n                columnNumber: 19\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"  \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faXmark,\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().menueIcon),\n                        onClick: ()=>setClicked(false)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().sidebar),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\",\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Shop\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 60\n                                    }, this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\",\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {}, void 0, false, {\n                                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 60\n                                    }, this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\",\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Shop\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 60\n                                    }, this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"JD+SOsoyn+jcPlzDnPCLUE/wqyU=\", false, function() {\n    return [\n        _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__.useCartSizeContext\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ2M7QUFDbUI7QUFDM0M7QUFDWjtBQUNIO0FBQ29DO0FBRTdELFNBQVNXOztJQUNMLE1BQU0sQ0FBQ0MsV0FBVUMsYUFBYSxHQUFDWCwrQ0FBUUE7SUFDdkMsTUFBTSxFQUFDWSxJQUFJLEVBQUNDLGVBQWUsRUFBQyxHQUFDTCw2RUFBa0JBO0lBQy9DLE1BQU0sQ0FBQ00saUJBQWlCQyxtQkFBbUIsR0FBQ2YsK0NBQVFBLENBQUMsRUFBRTtJQUN2RCxNQUFNLENBQUNnQixTQUFRQyxXQUFXLEdBQUNqQiwrQ0FBUUEsQ0FBQztJQUVwQyxNQUFNa0IsZUFBYSxDQUFDQztRQUNoQlIsYUFBYVEsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO1FBQzNCLElBQUcsQ0FBQ0YsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLEVBQUM7WUFDakJSLGdCQUFnQkM7WUFDaEI7UUFDRjtRQUVGLE1BQU1RLGdCQUFnQlIsZ0JBQWdCUyxNQUFNLENBQUMsQ0FBQ0MsT0FDOUNBLEtBQUtDLElBQUksQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNSLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDSyxXQUFXO1FBRTNEYixnQkFBZ0JTO0lBQ2xCO0lBRUF2QixnREFBU0EsQ0FBQztRQUNSUSw2Q0FBS0EsQ0FBQ3FCLEdBQUcsQ0FBQywwQkFDVEMsSUFBSSxDQUFDQyxDQUFBQSxXQUFVZixtQkFBbUJlLFNBQVNDLElBQUksR0FDL0NDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBS0MsUUFBUUMsR0FBRyxDQUFDRjtJQUMxQixHQUFFLEVBQUU7SUFFTixxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDQztnQkFBSUMsV0FBV2pDLCtEQUFVOztrQ0FFeEIsOERBQUMrQjt3QkFBSUUsV0FBV2pDLGlFQUFZO2tDQUFFOzs7Ozs7a0NBSTlCLDhEQUFDK0I7d0JBQUlFLFdBQVdqQyxnRUFBVzs7MENBQ3ZCLDhEQUFDb0M7O29DQUFJO2tEQUFFLDhEQUFDbkMsa0RBQUlBO3dDQUFDb0MsTUFBTzt3Q0FBS0osV0FBV2pDLGdFQUFXO2tEQUFFOzs7Ozs7b0NBQWE7Ozs7Ozs7MENBQzlELDhEQUFDb0M7O29DQUFJO2tEQUFFLDhEQUFDbkMsa0RBQUlBO3dDQUFDb0MsTUFBTzt3Q0FBSUosV0FBV2pDLGdFQUFXO2tEQUFFOzs7Ozs7b0NBQWdCOzs7Ozs7Ozs7Ozs7O2tDQUdwRSw4REFBQytCO3dCQUFJRSxXQUFXakMsa0VBQWE7a0NBQ3pCLDRFQUFDdUM7NEJBQU1DLE1BQUs7NEJBQU9DLGFBQVk7NEJBQW1CUixXQUFXakMsaUVBQVk7NEJBQUVnQixPQUFPWDs0QkFBV3FDLFVBQVU1QixDQUFBQSxJQUFHRCxhQUFhQzs7Ozs7Ozs7Ozs7a0NBRzNILDhEQUFDYixrREFBSUE7d0JBQUNvQyxNQUFNO3dCQUFhSixXQUFXakMsZ0VBQVc7OzRCQUFFOzBDQUFDLDhEQUFDSiwyRUFBZUE7Z0NBQUMrQyxNQUFNOUMsNkVBQWNBO2dDQUFFb0MsV0FBV2pDLGdFQUFXOzs7Ozs7NEJBQUk7MENBQUMsOERBQUM0QztnQ0FBSVgsV0FBV2pDLCtEQUFVOztvQ0FBRTtvQ0FBRU8sS0FBS3NDLE1BQU07b0NBQUM7Ozs7Ozs7NEJBQU87Ozs7Ozs7Ozs7Ozs7WUFHckssQ0FBQ2xDLHdCQUFTLDhEQUFDZiwyRUFBZUE7Z0JBQUMrQyxNQUFNN0MscUVBQU1BO2dCQUFFbUMsV0FBV2pDLHFFQUFnQjtnQkFBRStDLFNBQVMsSUFBSW5DLFdBQVc7Ozs7O3FDQUM5Rjs7b0JBQUU7a0NBQUUsOERBQUNoQiwyRUFBZUE7d0JBQUMrQyxNQUFNNUMsc0VBQU9BO3dCQUFFa0MsV0FBV2pDLHFFQUFnQjt3QkFBRStDLFNBQVMsSUFBSW5DLFdBQVc7Ozs7OztrQ0FDckYsOERBQUNtQjt3QkFBSUUsV0FBV2pDLG1FQUFjOzswQ0FDMUIsOERBQUNDLGtEQUFJQTtnQ0FBQ29DLE1BQU87Z0NBQUtKLFdBQVdqQyxnRUFBVzs7b0NBQUU7a0RBQUMsOERBQUNpRDtrREFBRzs7Ozs7O29DQUFTOzs7Ozs7OzBDQUN4RCw4REFBQ2hELGtEQUFJQTtnQ0FBQ29DLE1BQU87Z0NBQUtKLFdBQVdqQyxnRUFBVzs7b0NBQUU7a0RBQUMsOERBQUNpRDs7Ozs7b0NBQVE7Ozs7Ozs7MENBQ3BELDhEQUFDaEQsa0RBQUlBO2dDQUFDb0MsTUFBTztnQ0FBS0osV0FBV2pDLGdFQUFXOztvQ0FBRTtrREFBQyw4REFBQ2lEO2tEQUFHOzs7Ozs7b0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94RTtHQXpEUzdDOztRQUV3QkQseUVBQWtCQTs7O0tBRjFDQztBQTJEVCwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzeD9kNzBjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFTaG9wcGluZ0NhcnQsIGZhQmFycywgZmFYbWFyayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt1c2VDYXJ0U2l6ZUNvbnRleHR9IGZyb20gJ0AvY29udGV4dHMvY2FydFNpemVDb250ZXh0J1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgY29uc3QgW3NlYXJjaEtleSxzZXRTZWFyY2hLZXldPXVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCB7Y2FydCxzZXRQcm9kdWN0c0xpc3R9PXVzZUNhcnRTaXplQ29udGV4dCgpO1xyXG4gICAgY29uc3QgW25ld1Byb2R1Y3RzTGlzdCwgc2V0TmV3UHJvZHVjdHNMaXN0XT11c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2xpY2tlZCxzZXRDbGlja2VkXT11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoPShlKT0+e1xyXG4gICAgICAgIHNldFNlYXJjaEtleShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgaWYoIWUudGFyZ2V0LnZhbHVlKXtcclxuICAgICAgICAgIHNldFByb2R1Y3RzTGlzdChuZXdQcm9kdWN0c0xpc3QpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBuZXdQcm9kdWN0c0xpc3QuZmlsdGVyKChpdGVtKSA9PlxyXG4gICAgICBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICApXHJcbiAgICAgIHNldFByb2R1Y3RzTGlzdChmaWx0ZXJlZEl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvJylcclxuICAgICAgLnRoZW4ocmVzcG9uc2U9PnNldE5ld1Byb2R1Y3RzTGlzdChyZXNwb25zZS5kYXRhKSlcclxuICAgICAgLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcclxuICAgIH0sW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBTaG9waWZ5XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAgICAgIDxsaSA+ICA8TGluayBocmVmPXtgL2B9ICBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfT4gU2hvcCA8L0xpbms+ICA8L2xpPiAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGkgPiAgPExpbmsgaHJlZj17YC9gfSBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfT4gQ29udGFjdCA8L0xpbms+ICA8L2xpPiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9JyAgc2VhcmNoIGhlcmUuLi4nIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSB2YWx1ZT17c2VhcmNoS2V5fSBvbkNoYW5nZT17ZT0+aGFuZGxlU2VhcmNoKGUpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8TGluayBocmVmPXsnL3Byb2R1Y3RzJ30gY2xhc3NOYW1lPXtzdHlsZXMuTGlua30+IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0NhcnR9IGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+IDxzdXAgY2xhc3NOYW1lPXtzdHlsZXMuc3VwfT4ge2NhcnQubGVuZ3RofSA8L3N1cD4gPC9MaW5rPlxyXG4gICAgICA8L25hdj5cclxuICAgICAge1xyXG4gICAgICAgICFjbGlja2VkPyA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gY2xhc3NOYW1lPXtzdHlsZXMubWVudWVJY29ufSBvbkNsaWNrPXsoKT0+c2V0Q2xpY2tlZCh0cnVlKX0vPiA6XHJcbiAgICAgICAgPD4gIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFYbWFya30gY2xhc3NOYW1lPXtzdHlsZXMubWVudWVJY29ufSBvbkNsaWNrPXsoKT0+c2V0Q2xpY2tlZChmYWxzZSl9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfT4gXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2B9ICBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfT4gPGgxPlNob3A8L2gxPiA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2B9ICBjbGFzc05hbWU9e3N0eWxlcy5MaW5rfT4gPGgxPjwvaDE+IDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYH0gIGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9PiA8aDE+U2hvcDwvaDE+IDwvTGluaz4gXHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPC8+XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhU2hvcHBpbmdDYXJ0IiwiZmFCYXJzIiwiZmFYbWFyayIsInN0eWxlcyIsIkxpbmsiLCJheGlvcyIsInVzZUNhcnRTaXplQ29udGV4dCIsIk5hdmJhciIsInNlYXJjaEtleSIsInNldFNlYXJjaEtleSIsImNhcnQiLCJzZXRQcm9kdWN0c0xpc3QiLCJuZXdQcm9kdWN0c0xpc3QiLCJzZXROZXdQcm9kdWN0c0xpc3QiLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsImhhbmRsZVNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaXN0IiwibGkiLCJocmVmIiwic2VhcmNoIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImljb24iLCJzdXAiLCJsZW5ndGgiLCJtZW51ZUljb24iLCJvbkNsaWNrIiwic2lkZWJhciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar/Navbar.jsx\n"));

/***/ })

});