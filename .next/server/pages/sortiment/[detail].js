"use strict";
(() => {
var exports = {};
exports.id = 582;
exports.ids = [582];
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

/***/ 7570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ VinoDetail),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/NavBar/UI/Navbar.js
var Navbar = __webpack_require__(2644);
// EXTERNAL MODULE: ./pages/Media.js
var Media = __webpack_require__(6447);
// EXTERNAL MODULE: ./components/NavBar/UI/Footer.js
var Footer = __webpack_require__(8754);
;// CONCATENATED MODULE: external "react-responsive-carousel"
const external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");
;// CONCATENATED MODULE: ./components/forSortiment/DetailMobile.js





function DetailMobile(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    marginTop: "10vh",
                    justifyContent: "center",
                    textAlign: "left",
                    padding: "0 5vw 3vw 5vw",
                    justifySelf: "center"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                size: "xl",
                                sx: {
                                    color: "black",
                                    fontSize: props.data.nadpis.length < 20 ? "10vw" : "3vw",
                                    marginTop: "0",
                                    fontWeight: "600"
                                },
                                children: props.data.nadpis
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {},
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_responsive_carousel_namespaceObject.Carousel, {
                                showArrows: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: props.data.hlavniObrazek ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: props.data.hlavniObrazek.sizes.medium_large
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/vinoplaceholder.svg",
                                            width: "546px",
                                            height: "375px"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: props.data.obrazek2 && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: props.data.obrazek2.sizes.medium_large
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: props.data.obrazek3 && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: props.data.obrazek3.sizes.medium_large
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: props.data.obrazek4 && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: props.data.obrazek4.sizes.medium_large
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: props.data.obrazek5 && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: props.data.obrazek5.sizes.medium_large
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Spoiler, {
                                    maxHeight: 220,
                                    showLabel: "Zobrazit cel\xfd popis",
                                    hideLabel: "Skr\xfdt cel\xfd popis",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                        size: "xl",
                                        sx: {
                                            textAlign: "left"
                                        },
                                        children: props.data.text
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    style: {
                                        marginTop: "20%"
                                    },
                                    children: [
                                        props.data.cena && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Text, {
                                            size: "xl",
                                            weight: 600,
                                            sx: {
                                                fontSize: "4vh"
                                            },
                                            children: [
                                                props.data.cena,
                                                " K\u010D"
                                            ]
                                        }),
                                        props.data.cenaBezDPH && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Text, {
                                            size: "xl",
                                            weight: 300,
                                            sx: {
                                                fontSize: "2vh"
                                            },
                                            children: [
                                                "Cena bez DPH ",
                                                props.data.cenaBezDPH,
                                                " K\u010D"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            props.data.priloha && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                download: true,
                href: props.data.priloha.url,
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                    color: "gray",
                    sx: {
                        backgroundColor: "rgb(147, 37, 37)",
                        margin: "0 5vw 3vw 5vw"
                    },
                    children: props.data.priloha.filename
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/sortiment",
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                    href: "#",
                    color: "gray",
                    sx: {
                        backgroundColor: "rgb(147, 37, 37)",
                        margin: "0 5vw 3vw 5vw",
                        width: "100%"
                    },
                    children: "Zp\u011Bt na sortiment"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/forSortiment/DetailTablet.js



function DetailTablet(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    marginTop: "10vh",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "0 5vw 3vw 5vw"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                        size: "xl",
                        sx: {
                            color: "black",
                            fontSize: props.data.nadpis.length < 40 ? "10vw" : "2vw",
                            marginTop: "0",
                            padding: "5vw 5vw 2vw 5vw",
                            fontWeight: "600",
                            textAlign: "center"
                        },
                        children: props.data.nadpis
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                        weight: 600,
                        children: props.data.datum
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                        sx: {
                            textAlign: "left"
                        },
                        children: props.data.text
                    })
                ]
            }),
            props.data.priloha && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                download: true,
                href: props.data.priloha.url,
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                    color: "gray",
                    sx: {
                        backgroundColor: "rgb(147, 37, 37)",
                        margin: "0 5vw 3vw 5vw"
                    },
                    children: props.data.priloha.filename
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/aktuality",
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                    color: "gray",
                    sx: {
                        backgroundColor: "rgb(147, 37, 37)",
                        margin: "0 5vw 3vw 5vw"
                    },
                    children: "Zp\u011Bt na sortiment"
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/forSortiment/DetailLaptop.js





 // requires a loader
function DetailLaptop(props) {
    function executeOnClick() {}
    const items = [
        {
            title: "Sortiment",
            href: "/sortiment"
        },
        {
            title: props.data.nadpis.slice(0, 30) + " " + props.data.rocnik,
            href: "#"
        }, 
    ].map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: item.href,
            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Anchor, {
                children: item.title
            }, index)
        })
    );
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    marginTop: "10vh",
                    justifyContent: "center",
                    textAlign: "left",
                    padding: "0 5vw 3vw 5vw"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Breadcrumbs, {
                        children: items
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            display: "flex"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    width: "60%"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                        size: "xl",
                                        sx: {
                                            color: "black",
                                            fontSize: props.data.nadpis.length < 20 ? "3vw" : "1vw",
                                            marginTop: "0",
                                            fontWeight: "600"
                                        },
                                        children: props.data.nadpis
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                        weight: 600,
                                        children: props.data.datum
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Spoiler, {
                                        maxHeight: 220,
                                        showLabel: "Zobrazit cel\xfd popis",
                                        hideLabel: "Skr\xfdt cel\xfd popis",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                            size: "xl",
                                            sx: {
                                                textAlign: "left"
                                            },
                                            children: props.data.text
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        style: {
                                            marginTop: "20%"
                                        },
                                        children: [
                                            props.data.cena && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Text, {
                                                size: "xl",
                                                weight: 600,
                                                sx: {
                                                    fontSize: "4vh"
                                                },
                                                children: [
                                                    props.data.cena,
                                                    " K\u010D"
                                                ]
                                            }),
                                            props.data.cenaBezDPH && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Text, {
                                                size: "xl",
                                                weight: 300,
                                                sx: {
                                                    fontSize: "2vh"
                                                },
                                                children: [
                                                    "Cena bez DPH ",
                                                    props.data.cenaBezDPH,
                                                    " K\u010D"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    width: "40%"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_responsive_carousel_namespaceObject.Carousel, {
                                    showArrows: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: props.data.hlavniObrazek ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: props.data.hlavniObrazek.sizes.medium_large
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/vinoplaceholder.svg",
                                                width: "546px",
                                                height: "375px"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: props.data.obrazek2 && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: props.data.obrazek2.sizes.medium_large
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: props.data.obrazek3 && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: props.data.obrazek3.sizes.medium_large
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: props.data.obrazek4 && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: props.data.obrazek4.sizes.medium_large
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: props.data.obrazek5 && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: props.data.obrazek5.sizes.medium_large
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            props.data.priloha && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                download: true,
                href: props.data.priloha.url,
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                    color: "gray",
                    sx: {
                        backgroundColor: "rgb(147, 37, 37)",
                        margin: "0 5vw 3vw 5vw"
                    },
                    children: props.data.priloha.filename
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/sortiment",
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                    href: "#",
                    color: "gray",
                    sx: {
                        backgroundColor: "rgb(147, 37, 37)",
                        margin: "0 5vw 3vw 5vw"
                    },
                    children: "Zp\u011Bt na sortiment"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/sortiment/[detail].js










/*
            <Text>{props.data[0].title.rendered}</Text>
            <Text>{ props.data[0].content.rendered.replace(/(<([^>]+)>)/gi, "")}</Text>
            <Text>{props.data[0].acf.cena}</Text>
            <Text>{props.data[0].acf.rocnik}</Text>
      
*/ function VinoDetail(props) {
    if (!props || !props.data || !props.data[0]) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    }
    var data = {
        nadpis: props.data[0].title.rendered,
        datum: props.data[0].x_date,
        text: props.data[0].content.rendered.replace(/(<([^>]+)>)/gi, ""),
        id: props.data[0].id,
        rocnik: props.data[0].acf.rocnik,
        hlavniObrazek: props.data[0].acf.hlavni_obrazek,
        obrazek2: props.data[0].acf["2_obrazek"],
        obrazek3: props.data[0].acf["3_obrazek"],
        obrazek4: props.data[0].acf["4_obrazek"],
        obrazek5: props.data[0].acf["5_obrazek"],
        cena: props.data[0].acf.cena,
        cenaBezDPH: props.data[0].acf.cena_bez_dph
    };
    console.log(props);
    console.log(data);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            data.nadpis,
                            " ",
                            data.rocnik,
                            " - Sortiment | Vinar\u0161tv\xed Badinovi"
                        ]
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "92vh",
                    width: "100vw"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                        backgroundColor: "#eeeeee"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Media.Media, {
                        between: [
                            "zero",
                            "mobile"
                        ],
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(DetailMobile, {
                            data: data
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Media.Media, {
                        between: [
                            "mobile",
                            "tablet"
                        ],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(DetailTablet, {
                            data: data
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Media.Media, {
                        between: [
                            "tablet",
                            "tv"
                        ],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(DetailLaptop, {
                            data: data
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
async function getStaticProps(props) {
    const res = await fetch("http://206.189.56.129/wp-json/wp/v2/sortiment");
    const posts = await res.json();
    var data = posts.filter((post)=>{
        console.log(props.params.detail);
        console.log(post.id);
        if (props.params.detail == post.id) {
            return post;
        }
    });
    console.log(data);
    if (!data || data.length == 0 || !data[0]) {
        return {
            notFound: true
        };
    }
    console.log(props);
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
async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch("http://206.189.56.129/wp-json/wp/v2/sortiment");
    const posts = await res.json();
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post)=>({
            params: {
                detail: post.id + ""
            }
        })
    );
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths,
        fallback: true
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,884,61,644], () => (__webpack_exec__(7570)));
module.exports = __webpack_exports__;

})();