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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navbar.module.css */ \"(app-pages-browser)/./src/components/Navbar/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [searchKey, setSearchKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { cart, setProductsList } = (0,_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__.useCartSizeContext)();\n    const [newProductsList, setNewProductsList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [clicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleSearch = (e)=>{\n        setSearchKey(e.target.value);\n        if (!e.target.value) {\n            setProductsList(newProductsList);\n            return;\n        }\n        const filteredItems = newProductsList.filter((item)=>item.name.toLowerCase().includes(e.target.value.toLowerCase()));\n        setProductsList(filteredItems);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000/\").then((response)=>setNewProductsList(response.data)).catch((err)=>console.log(err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                        children: \"Shopify\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    \"  \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/\",\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                                        children: \" Shop \"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 20\n                                    }, this),\n                                    \"  \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    \"  \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/\",\n                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                                        children: \" Contact \"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 20\n                                    }, this),\n                                    \"  \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().search),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"  search here...\",\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                            value: searchKey,\n                            onChange: (e)=>handleSearch(e)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/products\",\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Link),\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faShoppingCart,\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().icon)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 59\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sup\", {\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().sup),\n                                children: [\n                                    \" \",\n                                    cart.length,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 125\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faBars,\n                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().menueIcon)\n            }, void 0, false, {\n                fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"HZue/qL9bE9v3lEccLToz7OZBLA=\", false, function() {\n    return [\n        _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__.useCartSizeContext\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ2M7QUFDVTtBQUNsQztBQUNaO0FBQ0g7QUFDb0M7QUFFN0QsU0FBU1U7O0lBQ0wsTUFBTSxDQUFDQyxXQUFVQyxhQUFhLEdBQUNWLCtDQUFRQTtJQUN2QyxNQUFNLEVBQUNXLElBQUksRUFBQ0MsZUFBZSxFQUFDLEdBQUNMLDZFQUFrQkE7SUFDL0MsTUFBTSxDQUFDTSxpQkFBaUJDLG1CQUFtQixHQUFDZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZELE1BQU0sQ0FBQ2UsU0FBUUMsV0FBVyxHQUFDaEIsK0NBQVFBO0lBRW5DLE1BQU1pQixlQUFhLENBQUNDO1FBQ2hCUixhQUFhUSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFDM0IsSUFBRyxDQUFDRixFQUFFQyxNQUFNLENBQUNDLEtBQUssRUFBQztZQUNqQlIsZ0JBQWdCQztZQUNoQjtRQUNGO1FBRUYsTUFBTVEsZ0JBQWdCUixnQkFBZ0JTLE1BQU0sQ0FBQyxDQUFDQyxPQUM5Q0EsS0FBS0MsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLENBQUNLLFdBQVc7UUFFM0RiLGdCQUFnQlM7SUFDbEI7SUFFQXRCLGdEQUFTQSxDQUFDO1FBQ1JPLDZDQUFLQSxDQUFDcUIsR0FBRyxDQUFDLDBCQUNUQyxJQUFJLENBQUNDLENBQUFBLFdBQVVmLG1CQUFtQmUsU0FBU0MsSUFBSSxHQUMvQ0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFLQyxRQUFRQyxHQUFHLENBQUNGO0lBQzFCLEdBQUUsRUFBRTtJQUVOLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNDO2dCQUFJQyxXQUFXakMsK0RBQVU7O2tDQUV4Qiw4REFBQytCO3dCQUFJRSxXQUFXakMsaUVBQVk7a0NBQUU7Ozs7OztrQ0FJOUIsOERBQUMrQjt3QkFBSUUsV0FBV2pDLGdFQUFXOzswQ0FDdkIsOERBQUNvQzs7b0NBQUk7a0RBQUUsOERBQUNuQyxrREFBSUE7d0NBQUNvQyxNQUFPO3dDQUFLSixXQUFXakMsZ0VBQVc7a0RBQUU7Ozs7OztvQ0FBYTs7Ozs7OzswQ0FDOUQsOERBQUNvQzs7b0NBQUk7a0RBQUUsOERBQUNuQyxrREFBSUE7d0NBQUNvQyxNQUFPO3dDQUFJSixXQUFXakMsZ0VBQVc7a0RBQUU7Ozs7OztvQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7a0NBR3BFLDhEQUFDK0I7d0JBQUlFLFdBQVdqQyxrRUFBYTtrQ0FDekIsNEVBQUN1Qzs0QkFBTUMsTUFBSzs0QkFBT0MsYUFBWTs0QkFBbUJSLFdBQVdqQyxpRUFBWTs0QkFBRWdCLE9BQU9YOzRCQUFXcUMsVUFBVTVCLENBQUFBLElBQUdELGFBQWFDOzs7Ozs7Ozs7OztrQ0FHM0gsOERBQUNiLGtEQUFJQTt3QkFBQ29DLE1BQU07d0JBQWFKLFdBQVdqQyxnRUFBVzs7NEJBQUU7MENBQUMsOERBQUNILDJFQUFlQTtnQ0FBQzhDLE1BQU03Qyw2RUFBY0E7Z0NBQUVtQyxXQUFXakMsZ0VBQVc7Ozs7Ozs0QkFBSTswQ0FBQyw4REFBQzRDO2dDQUFJWCxXQUFXakMsK0RBQVU7O29DQUFFO29DQUFFTyxLQUFLc0MsTUFBTTtvQ0FBQzs7Ozs7Ozs0QkFBTzs7Ozs7Ozs7Ozs7OzswQkFFdkssOERBQUNoRCwyRUFBZUE7Z0JBQUM4QyxNQUFNNUMscUVBQU1BO2dCQUFFa0MsV0FBV2pDLHFFQUFnQjs7Ozs7Ozs7Ozs7O0FBR2hFO0dBL0NTSTs7UUFFd0JELHlFQUFrQkE7OztLQUYxQ0M7QUFpRFQsK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3g/ZDcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU2hvcHBpbmdDYXJ0LCBmYUJhcnMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZiYXIubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7dXNlQ2FydFNpemVDb250ZXh0fSBmcm9tICdAL2NvbnRleHRzL2NhcnRTaXplQ29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICAgIGNvbnN0IFtzZWFyY2hLZXksc2V0U2VhcmNoS2V5XT11c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qge2NhcnQsc2V0UHJvZHVjdHNMaXN0fT11c2VDYXJ0U2l6ZUNvbnRleHQoKTtcclxuICAgIGNvbnN0IFtuZXdQcm9kdWN0c0xpc3QsIHNldE5ld1Byb2R1Y3RzTGlzdF09dXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NsaWNrZWQsc2V0Q2xpY2tlZF09dXNlU3RhdGUoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaD0oZSk9PntcclxuICAgICAgICBzZXRTZWFyY2hLZXkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGlmKCFlLnRhcmdldC52YWx1ZSl7XHJcbiAgICAgICAgICBzZXRQcm9kdWN0c0xpc3QobmV3UHJvZHVjdHNMaXN0KTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gbmV3UHJvZHVjdHNMaXN0LmZpbHRlcigoaXRlbSkgPT5cclxuICAgICAgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgKVxyXG4gICAgICBzZXRQcm9kdWN0c0xpc3QoZmlsdGVyZWRJdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwLycpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlPT5zZXROZXdQcm9kdWN0c0xpc3QocmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgIC5jYXRjaChlcnI9PmNvbnNvbGUubG9nKGVycikpXHJcbiAgICB9LFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgU2hvcGlmeVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxyXG4gICAgICAgICAgICA8bGkgPiAgPExpbmsgaHJlZj17YC9gfSAgY2xhc3NOYW1lPXtzdHlsZXMuTGlua30+IFNob3AgPC9MaW5rPiAgPC9saT4gICAgICAgICBcclxuICAgICAgICAgICAgPGxpID4gIDxMaW5rIGhyZWY9e2AvYH0gY2xhc3NOYW1lPXtzdHlsZXMuTGlua30+IENvbnRhY3QgPC9MaW5rPiAgPC9saT4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPScgIHNlYXJjaCBoZXJlLi4uJyBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdmFsdWU9e3NlYXJjaEtleX0gb25DaGFuZ2U9e2U9PmhhbmRsZVNlYXJjaChlKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9kdWN0cyd9IGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9PiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdDYXJ0fSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPiA8c3VwIGNsYXNzTmFtZT17c3R5bGVzLnN1cH0+IHtjYXJ0Lmxlbmd0aH0gPC9zdXA+IDwvTGluaz5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfSBjbGFzc05hbWU9e3N0eWxlcy5tZW51ZUljb259Lz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFTaG9wcGluZ0NhcnQiLCJmYUJhcnMiLCJzdHlsZXMiLCJMaW5rIiwiYXhpb3MiLCJ1c2VDYXJ0U2l6ZUNvbnRleHQiLCJOYXZiYXIiLCJzZWFyY2hLZXkiLCJzZXRTZWFyY2hLZXkiLCJjYXJ0Iiwic2V0UHJvZHVjdHNMaXN0IiwibmV3UHJvZHVjdHNMaXN0Iiwic2V0TmV3UHJvZHVjdHNMaXN0IiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJoYW5kbGVTZWFyY2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJlZEl0ZW1zIiwiZmlsdGVyIiwiaXRlbSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm5hdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibGlzdCIsImxpIiwiaHJlZiIsInNlYXJjaCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJpY29uIiwic3VwIiwibGVuZ3RoIiwibWVudWVJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar/Navbar.jsx\n"));

/***/ })

});