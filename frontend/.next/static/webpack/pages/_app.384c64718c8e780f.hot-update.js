"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n// import Link from 'next/link';\n// import useCurrentUser from '../hooks/current-user';\n// import useRequest from '../hooks/use-request'; // useRequestフックをインポート\n// import { useRouter } from 'next/router';\n// const Navbar = () => {\n//   const { currentUser, loading } = useCurrentUser();\n//   const router = useRouter();\n//   const { doRequest } = useRequest({\n//     url: 'http://localhost:5000/logout',\n//     method: 'post',\n//     body: {},\n//     onSuccess: () => router.push('/')\n//   });\n//   // ローディング中は何も表示しない\n//   if (loading) return null;\n//   const handleSignOut = () => {\n//     doRequest(); // サインアウトのリクエストを実行\n//   };\n//   const links = [\n//     !currentUser && { label: 'Sign Up', href: '/auth/signup' },\n//     !currentUser && { label: 'Login', href: '/auth/login' },\n//     currentUser && { label: 'Sign Out', href: '#', onClick: handleSignOut }, // サインアウトリンクのonClickイベント\n//   ]\n//     .filter((linkConfig) => linkConfig)\n//     .map(({ label, href, onClick }) => {\n//       return (\n//         <li key={href} className=\"nav-item\">\n//           {onClick ? (\n//             <a onClick={onClick} className=\"nav-link\" style={{ cursor: 'pointer' }}>\n//               {label}\n//             </a>\n//           ) : (\n//             <Link href={href} className=\"nav-link\">\n//               {label}\n//             </Link>\n//           )}\n//         </li>\n//       );\n//     });\n//   return (\n//     <nav className=\"navbar navbar-light bg-light\">\n//       <Link href=\"/\" className=\"navbar-brand\">\n//         EC-Sister\n//       </Link>\n//       <div className=\"d-flex justify-content-end\">\n//         <ul className=\"nav d-flex align-items-center\">{links}</ul>\n//       </div>\n//     </nav>\n//   );\n// };\n// export default Navbar;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((param)=>{\n    let { currentUser } = param;\n    const links = [\n        !currentUser && {\n            label: \"Sign Up\",\n            href: \"/auth/signup\"\n        },\n        !currentUser && {\n            label: \"Login\",\n            href: \"/auth/login\"\n        },\n        currentUser && {\n            label: \"Sign Out\",\n            href: \"/auth/signout\"\n        }\n    ].filter((linkConfig)=>linkConfig).map((param)=>{\n        let { label, href } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"nav-link\",\n                href: href,\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/shengbo/workspace/summer-semi-2024-5/frontend/components/header.js\",\n                lineNumber: 72,\n                columnNumber: 11\n            }, undefined)\n        }, href, false, {\n            fileName: \"/Users/shengbo/workspace/summer-semi-2024-5/frontend/components/header.js\",\n            lineNumber: 71,\n            columnNumber: 9\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-light bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"navbar-brand\",\n                href: \"/\",\n                children: \"EC-Sister\"\n            }, void 0, false, {\n                fileName: \"/Users/shengbo/workspace/summer-semi-2024-5/frontend/components/header.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: links\n                }, void 0, false, {\n                    fileName: \"/Users/shengbo/workspace/summer-semi-2024-5/frontend/components/header.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shengbo/workspace/summer-semi-2024-5/frontend/components/header.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shengbo/workspace/summer-semi-2024-5/frontend/components/header.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdDQUFnQztBQUNoQyxzREFBc0Q7QUFDdEQsd0VBQXdFO0FBQ3hFLDJDQUEyQztBQUUzQyx5QkFBeUI7QUFDekIsdURBQXVEO0FBQ3ZELGdDQUFnQztBQUVoQyx1Q0FBdUM7QUFDdkMsMkNBQTJDO0FBQzNDLHNCQUFzQjtBQUN0QixnQkFBZ0I7QUFDaEIsd0NBQXdDO0FBQ3hDLFFBQVE7QUFFUix1QkFBdUI7QUFDdkIsOEJBQThCO0FBRTlCLGtDQUFrQztBQUNsQyxzQ0FBc0M7QUFDdEMsT0FBTztBQUVQLG9CQUFvQjtBQUNwQixrRUFBa0U7QUFDbEUsK0RBQStEO0FBQy9ELHdHQUF3RztBQUN4RyxNQUFNO0FBQ04sMENBQTBDO0FBQzFDLDJDQUEyQztBQUMzQyxpQkFBaUI7QUFDakIsK0NBQStDO0FBQy9DLHlCQUF5QjtBQUN6Qix1RkFBdUY7QUFDdkYsd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsc0RBQXNEO0FBQ3RELHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsVUFBVTtBQUVWLGFBQWE7QUFDYixxREFBcUQ7QUFDckQsaURBQWlEO0FBQ2pELG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIscURBQXFEO0FBQ3JELHFFQUFxRTtBQUNyRSxlQUFlO0FBQ2YsYUFBYTtBQUNiLE9BQU87QUFDUCxLQUFLO0FBRUwseUJBQXlCOztBQUVJO0FBRTdCLCtEQUFlO1FBQUMsRUFBRUMsV0FBVyxFQUFFO0lBQzdCLE1BQU1DLFFBQVE7UUFDWixDQUFDRCxlQUFlO1lBQUVFLE9BQU87WUFBV0MsTUFBTTtRQUFlO1FBQ3pELENBQUNILGVBQWU7WUFBRUUsT0FBTztZQUFTQyxNQUFNO1FBQWM7UUFDdERILGVBQWU7WUFBRUUsT0FBTztZQUFZQyxNQUFNO1FBQWdCO0tBQzNELENBQ0VDLE1BQU0sQ0FBQyxDQUFDQyxhQUFlQSxZQUN2QkMsR0FBRyxDQUFDO1lBQUMsRUFBRUosS0FBSyxFQUFFQyxJQUFJLEVBQUU7UUFDbkIscUJBQ0UsOERBQUNJO1lBQWNDLFdBQVU7c0JBQ3ZCLDRFQUFDVCxrREFBSUE7Z0JBQUNTLFdBQVU7Z0JBQVdMLE1BQU1BOzBCQUM5QkQ7Ozs7OztXQUZJQzs7Ozs7SUFNYjtJQUVGLHFCQUNFLDhEQUFDTTtRQUFJRCxXQUFVOzswQkFDYiw4REFBQ1Qsa0RBQUlBO2dCQUFDUyxXQUFVO2dCQUFlTCxNQUFLOzBCQUFJOzs7Ozs7MEJBSXhDLDhEQUFDTztnQkFBSUYsV0FBVTswQkFDYiw0RUFBQ0c7b0JBQUdILFdBQVU7OEJBQWlDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkQsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci5qcz9jMDk4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG4vLyBpbXBvcnQgdXNlQ3VycmVudFVzZXIgZnJvbSAnLi4vaG9va3MvY3VycmVudC11c2VyJztcbi8vIGltcG9ydCB1c2VSZXF1ZXN0IGZyb20gJy4uL2hvb2tzL3VzZS1yZXF1ZXN0JzsgLy8gdXNlUmVxdWVzdOODleODg+OCr+OCkuOCpOODs+ODneODvOODiFxuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG4vLyBjb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IHsgY3VycmVudFVzZXIsIGxvYWRpbmcgfSA9IHVzZUN1cnJlbnRVc2VyKCk7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4vLyAgIGNvbnN0IHsgZG9SZXF1ZXN0IH0gPSB1c2VSZXF1ZXN0KHtcbi8vICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvbG9nb3V0Jyxcbi8vICAgICBtZXRob2Q6ICdwb3N0Jyxcbi8vICAgICBib2R5OiB7fSxcbi8vICAgICBvblN1Y2Nlc3M6ICgpID0+IHJvdXRlci5wdXNoKCcvJylcbi8vICAgfSk7XG5cbi8vICAgLy8g44Ot44O844OH44Kj44Oz44Kw5Lit44Gv5L2V44KC6KGo56S644GX44Gq44GEXG4vLyAgIGlmIChsb2FkaW5nKSByZXR1cm4gbnVsbDtcblxuLy8gICBjb25zdCBoYW5kbGVTaWduT3V0ID0gKCkgPT4ge1xuLy8gICAgIGRvUmVxdWVzdCgpOyAvLyDjgrXjgqTjg7PjgqLjgqbjg4jjga7jg6rjgq/jgqjjgrnjg4jjgpLlrp/ooYxcbi8vICAgfTtcblxuLy8gICBjb25zdCBsaW5rcyA9IFtcbi8vICAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gVXAnLCBocmVmOiAnL2F1dGgvc2lnbnVwJyB9LFxuLy8gICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnTG9naW4nLCBocmVmOiAnL2F1dGgvbG9naW4nIH0sXG4vLyAgICAgY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gT3V0JywgaHJlZjogJyMnLCBvbkNsaWNrOiBoYW5kbGVTaWduT3V0IH0sIC8vIOOCteOCpOODs+OCouOCpuODiOODquODs+OCr+OBrm9uQ2xpY2vjgqTjg5njg7Pjg4hcbi8vICAgXVxuLy8gICAgIC5maWx0ZXIoKGxpbmtDb25maWcpID0+IGxpbmtDb25maWcpXG4vLyAgICAgLm1hcCgoeyBsYWJlbCwgaHJlZiwgb25DbGljayB9KSA9PiB7XG4vLyAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8bGkga2V5PXtocmVmfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuLy8gICAgICAgICAgIHtvbkNsaWNrID8gKFxuLy8gICAgICAgICAgICAgPGEgb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbi8vICAgICAgICAgICAgICAge2xhYmVsfVxuLy8gICAgICAgICAgICAgPC9hPlxuLy8gICAgICAgICAgICkgOiAoXG4vLyAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuLy8gICAgICAgICAgICAgICB7bGFiZWx9XG4vLyAgICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgICAgKX1cbi8vICAgICAgICAgPC9saT5cbi8vICAgICAgICk7XG4vLyAgICAgfSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItbGlnaHQgYmctbGlnaHRcIj5cbi8vICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XG4vLyAgICAgICAgIEVDLVNpc3RlclxuLy8gICAgICAgPC9MaW5rPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuLy8gICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj57bGlua3N9PC91bD5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvbmF2PlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBVcCcsIGhyZWY6ICcvYXV0aC9zaWdudXAnIH0sXG4gICAgIWN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdMb2dpbicsIGhyZWY6ICcvYXV0aC9sb2dpbicgfSxcbiAgICBjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBPdXQnLCBocmVmOiAnL2F1dGgvc2lnbm91dCcgfSxcbiAgXVxuICAgIC5maWx0ZXIoKGxpbmtDb25maWcpID0+IGxpbmtDb25maWcpXG4gICAgLm1hcCgoeyBsYWJlbCwgaHJlZiB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtocmVmfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj17aHJlZn0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgRUMtU2lzdGVyXG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+e2xpbmtzfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTGluayIsImN1cnJlbnRVc2VyIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJmaWx0ZXIiLCJsaW5rQ29uZmlnIiwibWFwIiwibGkiLCJjbGFzc05hbWUiLCJuYXYiLCJkaXYiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n"));

/***/ })

});