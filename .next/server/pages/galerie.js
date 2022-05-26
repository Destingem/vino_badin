"use strict";
(() => {
var exports = {};
exports.id = 818;
exports.ids = [818];
exports.modules = {

/***/ 6956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Galerie),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/NavBar/UI/Footer.js
var Footer = __webpack_require__(8754);
// EXTERNAL MODULE: ./components/NavBar/UI/Navbar.js
var Navbar = __webpack_require__(2644);
;// CONCATENATED MODULE: ./components/forGalerie/GalerieLaptop.js






function GalerieLaptop(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
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
                            children: "Galerie"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    padding: "5vh "
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                    children: props.data && props.data[0] && props.data.map((item)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid.Col, {
                            span: 3,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/galerie/" + item.id,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Card, {
                                    sx: {
                                        width: "fit-content",
                                        height: "100%",
                                        border: "1px solid #C9C9C9",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex",
                                        padding: "0 !important",
                                        aspectRatio: 1
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: item.fotografie.sizes["medium"],
                                        layout: "responsive"
                                    })
                                })
                            })
                        });
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};

;// CONCATENATED MODULE: ./components/forGalerie/GalerieMobile.js





function GalerieMobile(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            display: "flex",
            flexDirection: "column"
        },
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
                            children: "Galerie"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    padding: "5vh "
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                    children: props.data && props.data[0] && props.data.map((item)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid.Col, {
                            span: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/galerie/" + item.id,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Card, {
                                    sx: {
                                        width: "100%",
                                        height: "100%",
                                        border: "1px solid #C9C9C9"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: item.fotografie.sizes["medium"],
                                        width: 100,
                                        height: 100,
                                        layout: "responsive"
                                    })
                                })
                            })
                        });
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/forGalerie/GalerieTablet.js




function GalerieTablet(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            display: "flex",
            flexDirection: "column"
        },
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
                            children: "Galerie"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    padding: "5vh "
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid, {
                    children: props.data && props.data[0] && props.data.map((item)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid.Col, {
                            span: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/galerie/" + item.id,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Card, {
                                    sx: {
                                        width: "100%",
                                        height: "100%",
                                        border: "1px solid #C9C9C9",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Image, {
                                        src: item.fotografie.sizes["medium"],
                                        width: 100,
                                        height: 100,
                                        layout: "responsive"
                                    })
                                })
                            })
                        });
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./pages/Media.js
var Media = __webpack_require__(6447);
;// CONCATENATED MODULE: ./pages/galerie/index.js






function Galerie(props) {
    console.log(props);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Galerie | Vinar\u0161tv\xed Badinovi"
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
                children: /*#__PURE__*/ jsx_runtime_.jsx(GalerieMobile, {
                    data: props.data
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Media.Media, {
                between: [
                    "mobile",
                    "tablet"
                ],
                children: /*#__PURE__*/ jsx_runtime_.jsx(GalerieTablet, {
                    data: props.data
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Media.Media, {
                between: [
                    "tablet",
                    "tv"
                ],
                children: /*#__PURE__*/ jsx_runtime_.jsx(GalerieLaptop, {
                    data: props.data
                })
            })
        ]
    });
};
async function getStaticProps() {
    const res = await fetch("https://206.189.56.129:1338/wp-json/wp/v2/galerie/");
    const posts = await res.json();
    var data = [];
    for(let fotografie in posts){
        data.unshift({
            nadpis: posts[fotografie].title.rendered,
            datum: posts[fotografie].x_date,
            text: posts[fotografie].content.rendered.replace("<p>", "").replace("</p>", ""),
            fotografie: posts[fotografie].acf.fotografie,
            id: posts[fotografie].id
        });
    }
    return {
        props: {
            data
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10
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
var __webpack_exports__ = __webpack_require__.X(0, [505,884,61,718], () => (__webpack_exec__(6956)));
module.exports = __webpack_exports__;

})();