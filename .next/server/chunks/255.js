exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 66947:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 12309))

/***/ }),

/***/ 34914:
/***/ (() => {



/***/ }),

/***/ 22725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ head)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88499);

function head() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Ecommerce App"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                content: "width=device-width,initial-scale=1",
                name: "viewport"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
                precedence: "default"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css",
                precedence: "default"
            })
        ]
    });
}


/***/ }),

/***/ 11977:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ metadata,default */ const { createProxy  } = __webpack_require__(14353);
module.exports = createProxy("C:\\pi\\my_pi\\app\\layout.js");


/***/ }),

/***/ 70808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"url":"/_next/static/media/metadata/favicon.8ec7e746.ico","type":"image/x-icon","sizes":"any"});

/***/ }),

/***/ 12309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(71338);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AppBar/index.js
var AppBar = __webpack_require__(59965);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(46661);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Toolbar/index.js
var Toolbar = __webpack_require__(90043);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(43360);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(98511);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AllOut.js
var AllOut = __webpack_require__(82556);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Home.js
var Home = __webpack_require__(40495);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Article.js
var Article = __webpack_require__(14540);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Face.js
var Face = __webpack_require__(13783);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ExitToAppRounded.js
var ExitToAppRounded = __webpack_require__(94677);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(63370);
;// CONCATENATED MODULE: ./app/components/Navbar.js














function Navbar() {
    const { data  } = (0,react.useSession)();
    const router = (0,navigation.useRouter)();
    const [onTop, setOnTop] = (0,react_.useState)(true);
    (0,react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
    });
    const handleScroll = ()=>{
        if (window.pageYOffset === 0) {
            setOnTop(true);
        } else {
            setOnTop(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
                sx: {
                    flexGrow: 1
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                    color: onTop ? "transparent" : "inherit",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                component: "div",
                                sx: {
                                    flexGrow: 1
                                },
                                color: "default",
                                children: " E-shopping "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                color: "inherit",
                                onClick: ()=>router.push("/"),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Home/* default */.Z, {
                                        color: "secondary"
                                    }),
                                    " Home "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                color: "inherit",
                                onClick: ()=>router.push("/about"),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(AllOut/* default */.Z, {
                                        color: "primary"
                                    }),
                                    " About "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                color: "inherit",
                                onClick: ()=>router.push("/products"),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Article/* default */.Z, {
                                        style: {
                                            color: "red"
                                        }
                                    }),
                                    " Products"
                                ]
                            }),
                            data?.user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        style: {
                                            marginRight: "15px",
                                            color: "orange"
                                        },
                                        children: [
                                            "USER : ",
                                            data?.user?.name
                                        ]
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                        color: "inherit",
                                        onClick: ()=>(0,react.signOut)(),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(ExitToAppRounded/* default */.Z, {
                                                style: {
                                                    color: "gray"
                                                }
                                            }),
                                            " Logout "
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                color: "inherit",
                                onClick: ()=>router.push("/login"),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Face/* default */.Z, {
                                        style: {
                                            color: "green"
                                        }
                                    }),
                                    " Login "
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {})
        ]
    });
}
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./app/layout.js




const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react.SessionProvider, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
                        children
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 71338:
/***/ (() => {



/***/ })

};
;