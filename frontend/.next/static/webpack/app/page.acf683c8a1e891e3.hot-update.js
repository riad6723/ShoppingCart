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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar.module.css */ \"(app-pages-browser)/./src/components/Navbar/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/cartSizeContext */ \"(app-pages-browser)/./src/contexts/cartSizeContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Navbar(param) {\n    let { productsList } = param;\n    _s();\n    const [searchKey, setSearchKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { cart } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_cartSizeContext__WEBPACK_IMPORTED_MODULE_4__.cartSizeContext);\n    const handleSearch = (e)=>{\n        setSearchKey(e.target.value);\n    };\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().nav),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                    children: \"Shopify\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().list),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"  \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\",\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().Link),\n                                    children: \" Shop \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 20\n                                }, this),\n                                \"  \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                \"  \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\",\n                                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().Link),\n                                    children: \" Contact \"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 20\n                                }, this),\n                                \"  \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().search),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"  search here...\",\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                        value: searchKey,\n                        onChange: (e)=>handleSearch(e)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/products\",\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().Link),\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faShoppingCart,\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 59\n                        }, this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sup\", {\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().sup),\n                            children: [\n                                \" \",\n                                cart.length,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 125\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\porfolioChallenge\\\\shopping-cart\\\\frontend\\\\src\\\\components\\\\Navbar\\\\Navbar.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"S2lxZiFc7cY/Y2GyX9Z9os0AyMY=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDa0Q7QUFDYztBQUNFO0FBQzFCO0FBQ1o7QUFDTTtBQUMwQjtBQUU1RCxTQUFTUyxPQUFPLEtBQWM7UUFBZCxFQUFDQyxZQUFZLEVBQUMsR0FBZDs7SUFDWixNQUFNLENBQUNDLFdBQVVDLGFBQWEsR0FBQ1YsK0NBQVFBO0lBQ3ZDLE1BQU0sRUFBQ1csSUFBSSxFQUFDLEdBQUNOLGlEQUFVQSxDQUFDQyxzRUFBZUE7SUFFdkMsTUFBTU0sZUFBYSxDQUFDQztRQUNoQkgsYUFBYUcsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQy9CO0lBRUFoQiw0Q0FBU0E7SUFFWCxxQkFDRSw4REFBQ2lCO2tCQUNDLDRFQUFDQztZQUFJQyxXQUFXZiwrREFBVTs7OEJBRXhCLDhEQUFDYTtvQkFBSUUsV0FBV2YsaUVBQVk7OEJBQUU7Ozs7Ozs4QkFJOUIsOERBQUNhO29CQUFJRSxXQUFXZixnRUFBVzs7c0NBQ3ZCLDhEQUFDa0I7O2dDQUFJOzhDQUFFLDhEQUFDakIsa0RBQUlBO29DQUFDa0IsTUFBTztvQ0FBS0osV0FBV2YsZ0VBQVc7OENBQUU7Ozs7OztnQ0FBYTs7Ozs7OztzQ0FDOUQsOERBQUNrQjs7Z0NBQUk7OENBQUUsOERBQUNqQixrREFBSUE7b0NBQUNrQixNQUFPO29DQUFJSixXQUFXZixnRUFBVzs4Q0FBRTs7Ozs7O2dDQUFnQjs7Ozs7Ozs7Ozs7Ozs4QkFHcEUsOERBQUNhO29CQUFJRSxXQUFXZixrRUFBYTs4QkFDekIsNEVBQUNxQjt3QkFBTUMsTUFBSzt3QkFBT0MsYUFBWTt3QkFBbUJSLFdBQVdmLGlFQUFZO3dCQUFFWSxPQUFPTjt3QkFBV2tCLFVBQVVkLENBQUFBLElBQUdELGFBQWFDOzs7Ozs7Ozs7Ozs4QkFHM0gsOERBQUNULGtEQUFJQTtvQkFBQ2tCLE1BQU07b0JBQWFKLFdBQVdmLGdFQUFXOzt3QkFBRTtzQ0FBQyw4REFBQ0YsMkVBQWVBOzRCQUFDMkIsTUFBTTFCLDZFQUFjQTs0QkFBRWdCLFdBQVdmLGdFQUFXOzs7Ozs7d0JBQUk7c0NBQUMsOERBQUMwQjs0QkFBSVgsV0FBV2YsK0RBQVU7O2dDQUFFO2dDQUFFUSxLQUFLbUIsTUFBTTtnQ0FBQzs7Ozs7Ozt3QkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdLO0dBL0JTdkI7S0FBQUE7QUFpQ1QsK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3g/ZDcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU2hvcHBpbmdDYXJ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjYXJ0U2l6ZUNvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL2NhcnRTaXplQ29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcih7cHJvZHVjdHNMaXN0fSkge1xyXG4gICAgY29uc3QgW3NlYXJjaEtleSxzZXRTZWFyY2hLZXldPXVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCB7Y2FydH09dXNlQ29udGV4dChjYXJ0U2l6ZUNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaD0oZSk9PntcclxuICAgICAgICBzZXRTZWFyY2hLZXkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgU2hvcGlmeVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxyXG4gICAgICAgICAgICA8bGkgPiAgPExpbmsgaHJlZj17YC9gfSAgY2xhc3NOYW1lPXtzdHlsZXMuTGlua30+IFNob3AgPC9MaW5rPiAgPC9saT4gICAgICAgICBcclxuICAgICAgICAgICAgPGxpID4gIDxMaW5rIGhyZWY9e2AvYH0gY2xhc3NOYW1lPXtzdHlsZXMuTGlua30+IENvbnRhY3QgPC9MaW5rPiAgPC9saT4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPScgIHNlYXJjaCBoZXJlLi4uJyBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdmFsdWU9e3NlYXJjaEtleX0gb25DaGFuZ2U9e2U9PmhhbmRsZVNlYXJjaChlKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9kdWN0cyd9IGNsYXNzTmFtZT17c3R5bGVzLkxpbmt9PiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hvcHBpbmdDYXJ0fSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPiA8c3VwIGNsYXNzTmFtZT17c3R5bGVzLnN1cH0+IHtjYXJ0Lmxlbmd0aH0gPC9zdXA+IDwvTGluaz5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhU2hvcHBpbmdDYXJ0Iiwic3R5bGVzIiwiTGluayIsInVzZUNvbnRleHQiLCJjYXJ0U2l6ZUNvbnRleHQiLCJOYXZiYXIiLCJwcm9kdWN0c0xpc3QiLCJzZWFyY2hLZXkiLCJzZXRTZWFyY2hLZXkiLCJjYXJ0IiwiaGFuZGxlU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaXN0IiwibGkiLCJocmVmIiwic2VhcmNoIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImljb24iLCJzdXAiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar/Navbar.jsx\n"));

/***/ })

});