"use strict";
(() => {
var exports = {};
exports.id = 205;
exports.ids = [205];
exports.modules = {

/***/ 8754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#932525",
            height: "8vh"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            style: {
                color: "#c4c4c4"
            },
            children: "Vina\u0159stv\xed Badinovi 2022"
        })
    });
};


/***/ }),

/***/ 4397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Sortiment),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/NavBar/UI/Navbar.js
var Navbar = __webpack_require__(2644);
// EXTERNAL MODULE: ./pages/Media.js
var Media = __webpack_require__(6447);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
// EXTERNAL MODULE: ./components/NavBar/UI/Footer.js
var Footer = __webpack_require__(8754);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/forSortiment/MobileSortiment.js






function MobileSortiment(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                style: {
                    width: "100%",
                    height: "50vh",
                    backgroundImage: 'url("images/grape.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "fit-content"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                        backgroundColor: "#fff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                            size: "xl",
                            sx: {
                                color: "white",
                                fontSize: "13vw",
                                textAlign: "center"
                            },
                            children: "Sortiment"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "5vh",
                        padding: "1vh 2vw 0 2vw"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                        children: props.vina && props.vina[0] && props.vina.map((vino)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid.Col, {
                                span: 12,
                                sx: {
                                    aspectRatio: 1
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                    shadow: "md",
                                    sx: {
                                        display: "flex",
                                        flexDirection: "column",
                                        textAlign: "left"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Card.Section, {
                                            children: vino.image ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: vino.image.sizes.medium_large,
                                                layout: "responsive",
                                                width: vino.image.sizes["medium_large-width"],
                                                height: vino.image.sizes["medium_large-height"]
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "/images/vinoplaceholder.svg",
                                                layout: "responsive",
                                                width: 1200,
                                                height: 1200
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                                            sx: {
                                                justifyContent: "space-between"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                                    weight: 700,
                                                    size: "lg",
                                                    children: vino.nazev
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Badge, {
                                                    children: vino.rocnik
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                            children: vino.text
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Text, {
                                            size: "xl",
                                            weight: 600,
                                            sx: {
                                                position: "absolute",
                                                bottom: "5%"
                                            },
                                            children: [
                                                vino.cena,
                                                " K\u010D"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/sortiment/" + vino.id,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                                sx: {
                                                    aspectRatio: 1,
                                                    marginTop: "3vh",
                                                    textAlign: "right",
                                                    alignSelf: "flex-end"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowForwardIos, {})
                                            })
                                        })
                                    ]
                                })
                            });
                        })
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/forSortiment/TabletSortiment.js






function TabletSortiment(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                style: {
                    width: "100%",
                    height: "50vh",
                    backgroundImage: 'url("images/grape.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "fit-content"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                        backgroundColor: "#fff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                            size: "xl",
                            sx: {
                                color: "white",
                                fontSize: "13vw",
                                textAlign: "center"
                            },
                            children: "Sortiment"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "5vh",
                        padding: "1vh 2vw 0 2vw"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                        children: props.vina && props.vina[0] && props.vina.map((vino)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid.Col, {
                                span: 6,
                                sx: {
                                    aspectRatio: 1
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                    shadow: "md",
                                    sx: {
                                        display: "flex",
                                        flexDirection: "column",
                                        textAlign: "left"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Card.Section, {
                                            children: vino.image ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: vino.image.sizes.medium_large,
                                                layout: "responsive",
                                                width: vino.image.sizes["medium_large-width"],
                                                height: vino.image.sizes["medium_large-height"]
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "/images/vinoplaceholder.svg",
                                                layout: "responsive",
                                                width: 1200,
                                                height: 1200
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                                            sx: {
                                                justifyContent: "space-between"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                                    weight: 700,
                                                    size: "lg",
                                                    children: vino.nazev
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Badge, {
                                                    children: vino.rocnik
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                            children: vino.text
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Text, {
                                            size: "xl",
                                            weight: 600,
                                            sx: {
                                                position: "absolute",
                                                bottom: "5%"
                                            },
                                            children: [
                                                vino.cena,
                                                " K\u010D"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/sortiment/" + vino.id,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                                sx: {
                                                    aspectRatio: 1,
                                                    marginTop: "3vh",
                                                    textAlign: "right",
                                                    alignSelf: "flex-end"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowForwardIos, {})
                                            })
                                        })
                                    ]
                                })
                            });
                        })
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/forSortiment/LaptopSortiment.js






function LaptopSortiment(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                style: {
                    width: "100%",
                    height: "100vh",
                    backgroundImage: 'url("images/grape.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "fit-content"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                        backgroundColor: "#fff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                            size: "xl",
                            sx: {
                                color: "white",
                                fontSize: "6rem",
                                textAlign: "center"
                            },
                            children: "Sortiment"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "5vh",
                        padding: "1vh 2vw 0 2vw",
                        minHeight: "100vh"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                        children: props.vina && props.vina[0] && props.vina.map((vino)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid.Col, {
                                span: 3,
                                sx: {
                                    aspectRatio: 1
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                                    shadow: "md",
                                    sx: {
                                        display: "flex",
                                        flexDirection: "column",
                                        textAlign: "left"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Card.Section, {
                                            children: vino.image ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: vino.image.sizes.medium_large,
                                                layout: "responsive",
                                                width: vino.image.sizes["medium_large-width"],
                                                height: vino.image.sizes["medium_large-height"]
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "/images/vinoplaceholder.svg",
                                                layout: "responsive",
                                                width: 1200,
                                                height: 1200
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                                            sx: {
                                                justifyContent: "space-between"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                                    weight: 700,
                                                    size: "lg",
                                                    children: vino.nazev
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Badge, {
                                                    children: vino.rocnik
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                            children: vino.text
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Text, {
                                            size: "xl",
                                            weight: 600,
                                            sx: {
                                                position: "absolute",
                                                bottom: "5%"
                                            },
                                            children: [
                                                vino.cena,
                                                " K\u010D"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/sortiment/" + vino.id,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                                sx: {
                                                    aspectRatio: 1,
                                                    marginTop: "3vh",
                                                    textAlign: "right",
                                                    alignSelf: "flex-end"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdArrowForwardIos, {})
                                            })
                                        })
                                    ]
                                })
                            });
                        })
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/sortiment/index.js













function Sortiment(props) {
    console.log("", props);
    var data = [];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Sortiment | Vinar\u0161tv\xed Badinovi"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/images/logo.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Media.Media, {
                between: [
                    "zero",
                    "mobile"
                ],
                children: /*#__PURE__*/ jsx_runtime_.jsx(MobileSortiment, {
                    vina: props.vina
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Media.Media, {
                between: [
                    "mobile",
                    "tablet"
                ],
                children: /*#__PURE__*/ jsx_runtime_.jsx(TabletSortiment, {
                    vina: props.vina
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Media.Media, {
                between: [
                    "tablet",
                    "laptop"
                ],
                children: /*#__PURE__*/ jsx_runtime_.jsx(LaptopSortiment, {
                    vina: props.vina
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
async function getStaticProps() {
    const res_vina = await fetch("https://206.189.56.129:1338/wp-json/wp/v2/sortiment");
    const raw_vina = await res_vina.json();
    var vina = [];
    for(let vino in raw_vina){
        if (raw_vina[vino].acf.na_hlavni_strane == true) {
            vina.push({
                image: raw_vina[vino].acf.hlavni_obrazek,
                nazev: raw_vina[vino].title.rendered,
                text: raw_vina[vino].acf.kratky_popis.replace(/(<([^>]+)>)/gi, ""),
                rocnik: raw_vina[vino].acf.rocnik,
                cena: raw_vina[vino].acf.cena,
                id: raw_vina[vino].id
            });
        }
    }
    for(let vino1 in raw_vina){
        if (raw_vina[vino1].acf.na_hlavni_strane == false) {
            vina.push({
                image: raw_vina[vino1].acf.hlavni_obrazek,
                nazev: raw_vina[vino1].title.rendered,
                text: raw_vina[vino1].acf.kratky_popis.replace(/(<([^>]+)>)/gi, ""),
                rocnik: raw_vina[vino1].acf.rocnik,
                cena: raw_vina[vino1].acf.cena,
                id: raw_vina[vino1].id
            });
        }
    }
    ;
    return {
        props: {
            vina
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 60
    };
}


/***/ }),

/***/ 8839:
/***/ ((module) => {

module.exports = require("@artsy/fresnel");

/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,884,61,644], () => (__webpack_exec__(4397)));
module.exports = __webpack_exports__;

})();