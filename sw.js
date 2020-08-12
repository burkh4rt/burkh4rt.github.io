/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0f4970b0c3ee380e158d2330a1808998"
  },
  {
    "url": "404/index.html",
    "revision": "d8a4b20b0d3bc73843170a8b148431c4"
  },
  {
    "url": "app-50c01a7c3501cba0a055.js"
  },
  {
    "url": "app-50c01a7c3501cba0a055.js.map",
    "revision": "fa2aed0c084a466770b25dede05a3582"
  },
  {
    "url": "app-5493d037935c8887d75f.js"
  },
  {
    "url": "app-5493d037935c8887d75f.js.map",
    "revision": "32328164f5c01eb7396d903042f2e081"
  },
  {
    "url": "app-682533d4e071480a2faf.js"
  },
  {
    "url": "app-682533d4e071480a2faf.js.map",
    "revision": "00853161dd9f7f0efa20000a8c8cb269"
  },
  {
    "url": "app-6a191de17f943e123a28.js"
  },
  {
    "url": "app-6a191de17f943e123a28.js.map",
    "revision": "a092074fc0f64c8392de486b2f3d7e9c"
  },
  {
    "url": "app-909098355c4d01566f01.js"
  },
  {
    "url": "app-909098355c4d01566f01.js.map",
    "revision": "240db9b8dd65303fdf39f224cd7c46aa"
  },
  {
    "url": "app-f01ee04b6588f76b5cb5.js"
  },
  {
    "url": "app-f01ee04b6588f76b5cb5.js.map",
    "revision": "801c52815c144c3f45dca8ff54c1ebe5"
  },
  {
    "url": "app-f022cb9410107bd1d2f6.js"
  },
  {
    "url": "app-f022cb9410107bd1d2f6.js.map",
    "revision": "efbcb80d13ce65303fab402ea2d7d290"
  },
  {
    "url": "assets/cv19.pdf",
    "revision": "29860ebfa7f02ad3ee778a4709932f1b"
  },
  {
    "url": "assets/discriminative_filtering.bib",
    "revision": "1d45fc650f26bbb5306345e8d61d4d2f"
  },
  {
    "url": "assets/discriminative_filtering.ris",
    "revision": "d50eae1f55d0c73a79d99c25339e4ec5"
  },
  {
    "url": "assets/dkf-slides.pdf",
    "revision": "25656f4e6a998fc9bec7c3ab0293aa44"
  },
  {
    "url": "bea29393d3331be6780edcfb6ed21f3d7300bdc3-4cabda7f921a5260041c.js"
  },
  {
    "url": "bea29393d3331be6780edcfb6ed21f3d7300bdc3-4cabda7f921a5260041c.js.map",
    "revision": "b6bbe6b8207d1ab1e96ea9ca72868677"
  },
  {
    "url": "chunk-map.json",
    "revision": "8b340683083e136276f9a11159df6040"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-0097d26fbd474b34ff9b.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-0097d26fbd474b34ff9b.js.map",
    "revision": "8c22280df3ba39faa1795083a3f99402"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js.map",
    "revision": "73fab470230271ac23de3b660b41bd46"
  },
  {
    "url": "component---src-pages-404-js-42cc0b9767b4c20ea13e.js"
  },
  {
    "url": "component---src-pages-404-js-42cc0b9767b4c20ea13e.js.map",
    "revision": "ba4b2b95b3e3c2b0b53bd1c6a2c335b2"
  },
  {
    "url": "component---src-pages-404-js-43b06df3611a964ec3cb.js"
  },
  {
    "url": "component---src-pages-404-js-43b06df3611a964ec3cb.js.map",
    "revision": "7703bd92ba6ad70c8ebb0846c2dcccda"
  },
  {
    "url": "component---src-pages-404-js-4d517b43254d7fbaa2e1.js"
  },
  {
    "url": "component---src-pages-404-js-4d517b43254d7fbaa2e1.js.map",
    "revision": "28a33fa849b8f20828850cbb7308f738"
  },
  {
    "url": "component---src-pages-404-js-5c318ba69beb941fd201.js"
  },
  {
    "url": "component---src-pages-404-js-5c318ba69beb941fd201.js.map",
    "revision": "5db9442e0aadef009362b61f8967a969"
  },
  {
    "url": "component---src-pages-404-js-6c46ee427c39f3f39307.js"
  },
  {
    "url": "component---src-pages-404-js-6c46ee427c39f3f39307.js.map",
    "revision": "130c1c4a3a56f287e5399334023f12c7"
  },
  {
    "url": "component---src-pages-cv-js-219b721a9248fbefe691.js"
  },
  {
    "url": "component---src-pages-cv-js-219b721a9248fbefe691.js.map",
    "revision": "271d58e510aa96944b19ca26aeda4865"
  },
  {
    "url": "component---src-pages-cv-js-4d4b741b37452119e0a8.js"
  },
  {
    "url": "component---src-pages-cv-js-4d4b741b37452119e0a8.js.map",
    "revision": "2173e573b8ab3305a7c500dec8cbe197"
  },
  {
    "url": "component---src-pages-dkf-slides-js-5c1a603e1c4457673088.js"
  },
  {
    "url": "component---src-pages-dkf-slides-js-5c1a603e1c4457673088.js.map",
    "revision": "7641c28b832cba9bd0a3e497f54e5ff4"
  },
  {
    "url": "component---src-pages-dkf-slides-js-aaab26ebdfece56e8803.js"
  },
  {
    "url": "component---src-pages-dkf-slides-js-aaab26ebdfece56e8803.js.map",
    "revision": "e1a7b6dcf4856c1e937b4d65744b1188"
  },
  {
    "url": "component---src-pages-index-js-0ab179c9bdedecb31ccc.js"
  },
  {
    "url": "component---src-pages-index-js-0ab179c9bdedecb31ccc.js.map",
    "revision": "ab731d60b0c8f678e62e50a1c8cc5927"
  },
  {
    "url": "component---src-pages-index-js-2f4a89ef3ecaa6e603e1.js"
  },
  {
    "url": "component---src-pages-index-js-2f4a89ef3ecaa6e603e1.js.map",
    "revision": "d83461a74dba131b500ec20a4e77dfd9"
  },
  {
    "url": "component---src-pages-index-js-44dffe8a31358fcd02f7.js"
  },
  {
    "url": "component---src-pages-index-js-44dffe8a31358fcd02f7.js.map",
    "revision": "d1357f7698364696270f820040e25bfc"
  },
  {
    "url": "component---src-pages-index-js-63dad8f3ce2b63ec93ce.js"
  },
  {
    "url": "component---src-pages-index-js-63dad8f3ce2b63ec93ce.js.map",
    "revision": "8d5549a5e5bcddd855b25b379c12eb93"
  },
  {
    "url": "component---src-pages-index-js-6ec58382e49cf837cb7d.js"
  },
  {
    "url": "component---src-pages-index-js-6ec58382e49cf837cb7d.js.map",
    "revision": "84920843be1e8dc75513d60429a31fe7"
  },
  {
    "url": "component---src-pages-index-js-84094d97f1dddf6af6cd.js"
  },
  {
    "url": "component---src-pages-index-js-84094d97f1dddf6af6cd.js.map",
    "revision": "d80bb7c962e106a62d72bdb0937e0969"
  },
  {
    "url": "component---src-pages-index-js-8901c887bf41f62ceba6.js"
  },
  {
    "url": "component---src-pages-index-js-8901c887bf41f62ceba6.js.map",
    "revision": "881b544e4381a30c7fee3a91b32cfda1"
  },
  {
    "url": "component---src-pages-index-js-899e1cd7b72cb5ca0b8a.js"
  },
  {
    "url": "component---src-pages-index-js-899e1cd7b72cb5ca0b8a.js.map",
    "revision": "2521ccee640ef19b1194c396b610722d"
  },
  {
    "url": "component---src-pages-index-js-90d18f431df130959610.js"
  },
  {
    "url": "component---src-pages-index-js-90d18f431df130959610.js.map",
    "revision": "3819828d92a7ae14ecb13aedfa0751b0"
  },
  {
    "url": "component---src-pages-index-js-b20243bc496c66053d18.js"
  },
  {
    "url": "component---src-pages-index-js-b20243bc496c66053d18.js.map",
    "revision": "46435e6727d688e9b166392e715abac9"
  },
  {
    "url": "component---src-pages-index-js-b840e3ff441b9b30116f.js"
  },
  {
    "url": "component---src-pages-index-js-b840e3ff441b9b30116f.js.map",
    "revision": "f722031c5697086f8494d060c4f64e97"
  },
  {
    "url": "component---src-pages-index-js-bd3e9162a2bae4b44aad.js"
  },
  {
    "url": "component---src-pages-index-js-bd3e9162a2bae4b44aad.js.map",
    "revision": "2c98608b49feb7bd84306cca1d391ce0"
  },
  {
    "url": "component---src-pages-index-js-c14cf9a03ba34b13cf12.js"
  },
  {
    "url": "component---src-pages-index-js-c14cf9a03ba34b13cf12.js.map",
    "revision": "f387cced56b39c29e65e2f02a4113886"
  },
  {
    "url": "component---src-pages-index-js-e58397713560709ba852.js"
  },
  {
    "url": "component---src-pages-index-js-e58397713560709ba852.js.map",
    "revision": "9472613a3c2aac2306f977851daca414"
  },
  {
    "url": "component---src-pages-index-js-f351b8dee1374f3ea549.js"
  },
  {
    "url": "component---src-pages-index-js-f351b8dee1374f3ea549.js.map",
    "revision": "898cea3c84e94be90a2499aa9848af86"
  },
  {
    "url": "component---src-pages-index-js-f75087022f3c576746c3.js"
  },
  {
    "url": "component---src-pages-index-js-f75087022f3c576746c3.js.map",
    "revision": "727609ad8a9cc918c6d0b699aea346f0"
  },
  {
    "url": "cv/index.html",
    "revision": "0fe6bae290b7e96edca90955af59e577"
  },
  {
    "url": "dkf-slides/index.html",
    "revision": "462b1dc50723f0460fd303f4f931a094"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-39ca6d358251d8e5be5e.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-39ca6d358251d8e5be5e.js.map",
    "revision": "ff3acc12740249aa20a71bdc5739713c"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-81e516b5aad1b742c88f.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-81e516b5aad1b742c88f.js.map",
    "revision": "423fcaddcae64aaadacfc75a053a2e77"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-845db59698016a148ebe.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-845db59698016a148ebe.js.map",
    "revision": "460350e2c12bf15d2dfa44f04d8b4f51"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-86bbdf89b9d97b20414e.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-86bbdf89b9d97b20414e.js.map",
    "revision": "3c776909934abda675f9592f970b994d"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-9c38d0bf985e971ed823.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-9c38d0bf985e971ed823.js.map",
    "revision": "3aa08e8e57dd671ea24b3432adefec3e"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-aa3840afdc83aa8e3d7f.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-aa3840afdc83aa8e3d7f.js.map",
    "revision": "ac9aba4e6934a365fbe480c189e96ca2"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-bf047cb991f62c20d03f.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-bf047cb991f62c20d03f.js.map",
    "revision": "33add10b513f6bd88d77134eccfb7567"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-f552fd3c8e9474294087.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-f552fd3c8e9474294087.js.map",
    "revision": "50a318b1b3b1e874599e919be29efb4d"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "134312677f57ce87eaac69c26655df20"
  },
  {
    "url": "favicon.svg",
    "revision": "15cb8757740d90b288827c6953e4e931"
  },
  {
    "url": "framework-a576ae5ab153fa4a7c27.js"
  },
  {
    "url": "framework-a576ae5ab153fa4a7c27.js.map",
    "revision": "93827e9ae5e1ecfb372843b664b62144"
  },
  {
    "url": "framework-b5b229d58c3c710d5429.js"
  },
  {
    "url": "framework-b5b229d58c3c710d5429.js.map",
    "revision": "912f19303fcb38625576731ce25e1b8f"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "452f5aaf6b6a90449ae3fbdf9f1dea3e"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "5b627326bb71bfc072be9b1213eadcce"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "298dcbd6d0d4bd9f672331e8b8f1b343"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "4616f9bf827942b3a9782ddc4a0451db"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "a33ee672a51c1fc66c807da6a4cb5306"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "919b6af8c5c2d5b8886ce43bd9d23177"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "da10865594e92654a0f3cc5d072ad759"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c16c4b16572ab4cc469bd199ed3fc36e"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "3e14bda555a5ad12aeb3d5e500639eea"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "050cf5a958330a5bef025d988a1d27c4"
  },
  {
    "url": "misc/discriminative_filtering.bib",
    "revision": "f421244414c8c156c6a46bd1a525106c"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b4428214eac2cc67e5c70b8f1ff1d240"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "73b53c376c0c6df9ec96677d201cf94b"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "517e1f8ce5610edb94d7dea4bede4428"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "85357f16b16eb02645d0c289bdbc5836"
  },
  {
    "url": "page-data/cv/page-data.json",
    "revision": "dc48e279ada810ccd7b9b9c9bd103101"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "6717416e7c1522f3788507ec57f28427"
  },
  {
    "url": "page-data/dkf-slides/page-data.json",
    "revision": "650aced586aac4b8d0ee5c92e9cc0af9"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "1900e3a06ad4dbfc90f0de2c128505a8"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "polyfill-830cd53ca5c6720b5926.js"
  },
  {
    "url": "polyfill-830cd53ca5c6720b5926.js.map",
    "revision": "0c0ba94d94d6521b2d1611a8e0ffd435"
  },
  {
    "url": "polyfill-d10938940af3acfd070f.js"
  },
  {
    "url": "polyfill-d10938940af3acfd070f.js.map",
    "revision": "2cf92d1ad2bfd3210fe4aa7faf0d0a44"
  },
  {
    "url": "robots.txt",
    "revision": "0a9a1db2884048e2d407a6bb0926ae7b"
  },
  {
    "url": "sitemap-pages.xml",
    "revision": "48c66090eb1d892048099ed5b8849e4c"
  },
  {
    "url": "sitemap.xml",
    "revision": "80e186460a9a806863e7fa732ce8ef23"
  },
  {
    "url": "sitemap.xsl",
    "revision": "3093d344c3a605b0b1822edf04d1a840"
  },
  {
    "url": "static-assets/cv19.pdf",
    "revision": "3068dd48929a60b9a9501ba7ecca26a3"
  },
  {
    "url": "static-assets/discriminative_filtering.bib",
    "revision": "1d45fc650f26bbb5306345e8d61d4d2f"
  },
  {
    "url": "static-assets/discriminative_filtering.ris",
    "revision": "d50eae1f55d0c73a79d99c25339e4ec5"
  },
  {
    "url": "static-assets/dkf-slides.pdf",
    "revision": "25656f4e6a998fc9bec7c3ab0293aa44"
  },
  {
    "url": "static/15cb8757740d90b288827c6953e4e931/m.svg"
  },
  {
    "url": "static/1d45fc650f26bbb5306345e8d61d4d2f/discriminative_filtering.bib"
  },
  {
    "url": "static/20f461669ac3d95a3e4d00b67788dda5/byline.svg"
  },
  {
    "url": "static/25656f4e6a998fc9bec7c3ab0293aa44/dkf-slides.pdf"
  },
  {
    "url": "static/3068dd48929a60b9a9501ba7ecca26a3/cv19.pdf"
  },
  {
    "url": "static/46ea46b89cc59bd72d7b079b64046e13/instagram-logo.svg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/08aac/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/0a9c8/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/14910/profile_img.webp"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/23e94/profile_img.webp"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/293e9/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/35c3d/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/47262/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/7b630/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/8df11/profile_img.webp"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/8e183/profile_img.webp"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/a6840/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/accd9/profile_img.webp"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/b5282/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/d7568/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/d91f7/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/e8044/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/eb16e/profile_img.webp"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/f605f/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/profile_img.jpg"
  },
  {
    "url": "static/8dd1a222304eef0c5f7ef74e483a92d6/linkedin-logo.svg"
  },
  {
    "url": "static/a33264bde9e0a8389dfbf2268c6d5911/felixity_the_cat.svg"
  },
  {
    "url": "static/a675a462ff575d01de49461e64966027/orcid-logo.svg"
  },
  {
    "url": "static/b9d531b3e2309d97b6f292a1b78a860c/twitter-logo.svg"
  },
  {
    "url": "static/bayesian_graphical-62ce9cc57cc16461924146fa7a338322.svg"
  },
  {
    "url": "static/ca203afe04e8abae8df34cc6d74b5f4d/github-logo.svg"
  },
  {
    "url": "static/chapman_kolmogorov-676de7a4e0894cd6aec2d7f6ec99c182.svg"
  },
  {
    "url": "static/cv19-29860ebfa7f02ad3ee778a4709932f1b.pdf"
  },
  {
    "url": "static/cv19-3068dd48929a60b9a9501ba7ecca26a3.pdf"
  },
  {
    "url": "static/d50eae1f55d0c73a79d99c25339e4ec5/discriminative_filtering.ris"
  },
  {
    "url": "static/dkf_graphical-deec441b50a19f79d0d1e76ba2cb3a71.svg"
  },
  {
    "url": "static/dkf-slides-25656f4e6a998fc9bec7c3ab0293aa44.pdf"
  },
  {
    "url": "static/GaramondPremrPro-Capt-5917359d77886f638b00906fd96f35e6.otf"
  },
  {
    "url": "static/GaramondPremrPro-Capt-987165eada9a71aca84661e410c69008.woff"
  },
  {
    "url": "static/GaramondPremrPro-Capt-ffbe2e69d2bb4d82e1817987e8e639fe.woff2"
  },
  {
    "url": "static/GaramondPremrPro-ItCapt-55d44a90cd8f27575d73f402370c0452.otf"
  },
  {
    "url": "static/GaramondPremrPro-ItCapt-987165eada9a71aca84661e410c69008.woff2"
  },
  {
    "url": "static/GaramondPremrPro-ItCapt-ffbe2e69d2bb4d82e1817987e8e639fe.woff"
  },
  {
    "url": "static/GaramondPremrPro-MedCapt-32b0d1d9e541449f6e38b64fde5a22e5.otf"
  },
  {
    "url": "static/GaramondPremrPro-MedCapt-56b77b4fd38e7c2b80d468d822d5ff1c.woff"
  },
  {
    "url": "static/GaramondPremrPro-MedCapt-56b77b4fd38e7c2b80d468d822d5ff1c.woff2"
  },
  {
    "url": "static/GillSansNova-Book-910366cf2ee3f13002d1cdcb8cdffa33.otf"
  },
  {
    "url": "static/GillSansNova-Book-be8d24490c47a6b01f78de44a42d7e1a.woff"
  },
  {
    "url": "static/GillSansNova-Book-be8d24490c47a6b01f78de44a42d7e1a.woff2"
  },
  {
    "url": "static/GillSansNova-BookItalic-be2ef2eb2d46f9a089acaade6775a76d.woff"
  },
  {
    "url": "static/GillSansNova-BookItalic-be2ef2eb2d46f9a089acaade6775a76d.woff2"
  },
  {
    "url": "static/GillSansNova-BookItalic-f6272027a9eece8357af8a2c822f346c.otf"
  },
  {
    "url": "static/graphical_model-63fa27959124ab851ad1103560b1932f.svg"
  },
  {
    "url": "static/kalman_graphical-1c17c49f456f2c18fc8f7a003eb4cfda.svg"
  },
  {
    "url": "webpack-runtime-04a96d03cdc07c10dbc9.js"
  },
  {
    "url": "webpack-runtime-04a96d03cdc07c10dbc9.js.map",
    "revision": "02b140c96881d077e4a13a60b4cf5029"
  },
  {
    "url": "webpack-runtime-4d719aff8a0e8fff5643.js"
  },
  {
    "url": "webpack-runtime-4d719aff8a0e8fff5643.js.map",
    "revision": "3fd3c694c99d2aeafae9db47bc8225ca"
  },
  {
    "url": "webpack-runtime-4e8da75ce8cc8f45d5d8.js"
  },
  {
    "url": "webpack-runtime-4e8da75ce8cc8f45d5d8.js.map",
    "revision": "ee9b64dc3d6aee04e06832aabd395714"
  },
  {
    "url": "webpack-runtime-624575f25f4f56491b43.js"
  },
  {
    "url": "webpack-runtime-624575f25f4f56491b43.js.map",
    "revision": "dc509cae63c38972083dc88997cbfb7f"
  },
  {
    "url": "webpack-runtime-634a3bf01dd654e42e08.js"
  },
  {
    "url": "webpack-runtime-634a3bf01dd654e42e08.js.map",
    "revision": "d755483440ebb3e10601e7a46bbe9966"
  },
  {
    "url": "webpack-runtime-7786bd8b60cf6c644d94.js"
  },
  {
    "url": "webpack-runtime-7786bd8b60cf6c644d94.js.map",
    "revision": "ef59b42ca1397980f9ab67f21b8e0692"
  },
  {
    "url": "webpack-runtime-7dbf9bf1d4575d5366e5.js"
  },
  {
    "url": "webpack-runtime-7dbf9bf1d4575d5366e5.js.map",
    "revision": "15e67d8f92d9bb815bad056981e900a8"
  },
  {
    "url": "webpack-runtime-7faae51ef9728945c650.js"
  },
  {
    "url": "webpack-runtime-7faae51ef9728945c650.js.map",
    "revision": "ca45b63cfdda3c873db846209432c0ce"
  },
  {
    "url": "webpack-runtime-814db70509c57be34fce.js"
  },
  {
    "url": "webpack-runtime-814db70509c57be34fce.js.map",
    "revision": "e18366eeccb2cb2dfc2dc71e6faa12f9"
  },
  {
    "url": "webpack-runtime-84dba38225910ef7506e.js"
  },
  {
    "url": "webpack-runtime-84dba38225910ef7506e.js.map",
    "revision": "61fc3b9fc6b6138dea0e9eee06d125fc"
  },
  {
    "url": "webpack-runtime-8dba38b07223746eabca.js"
  },
  {
    "url": "webpack-runtime-8dba38b07223746eabca.js.map",
    "revision": "908613f7c1de016089e4c08e8be0e45a"
  },
  {
    "url": "webpack-runtime-9efa9adefcd0676f6359.js"
  },
  {
    "url": "webpack-runtime-9efa9adefcd0676f6359.js.map",
    "revision": "4c945e3685dd73e9763944306c5bd3ae"
  },
  {
    "url": "webpack-runtime-a606e25453dea6695da9.js"
  },
  {
    "url": "webpack-runtime-a606e25453dea6695da9.js.map",
    "revision": "39434524f827b7abfbe99ea796d5ac11"
  },
  {
    "url": "webpack-runtime-b10b684c234df7607377.js"
  },
  {
    "url": "webpack-runtime-b10b684c234df7607377.js.map",
    "revision": "dc214726845f80b349513abd24fcce1a"
  },
  {
    "url": "webpack-runtime-bb2acd87475927d7dbbd.js"
  },
  {
    "url": "webpack-runtime-bb2acd87475927d7dbbd.js.map",
    "revision": "987a749d1638aca458dd708ebdbb5c70"
  },
  {
    "url": "webpack-runtime-c49c1f3fc5def0cc9017.js"
  },
  {
    "url": "webpack-runtime-c49c1f3fc5def0cc9017.js.map",
    "revision": "780876363893662f4cc48d86b9477006"
  },
  {
    "url": "webpack-runtime-c9fb5968dccfec0492a4.js"
  },
  {
    "url": "webpack-runtime-c9fb5968dccfec0492a4.js.map",
    "revision": "f45bae2461425cd36e75e05abec32e30"
  },
  {
    "url": "webpack-runtime-dd16de23f5d98f93001f.js"
  },
  {
    "url": "webpack-runtime-dd16de23f5d98f93001f.js.map",
    "revision": "3c1ffc8d8de8ba41329baa7547042ab2"
  },
  {
    "url": "webpack-runtime-e84f9ae66602c92d6ccf.js"
  },
  {
    "url": "webpack-runtime-e84f9ae66602c92d6ccf.js.map",
    "revision": "a33382e3cbee2f565d540936b0a59081"
  },
  {
    "url": "webpack-runtime-ecf0fa61abfc006ce8ee.js"
  },
  {
    "url": "webpack-runtime-ecf0fa61abfc006ce8ee.js.map",
    "revision": "c914d21f6a8046974d497c25bfc4dfbc"
  },
  {
    "url": "webpack-runtime-f2dedbb23e9a92f0e2b3.js"
  },
  {
    "url": "webpack-runtime-f2dedbb23e9a92f0e2b3.js.map",
    "revision": "e83b37d0f14b467ee005711ac6baf326"
  },
  {
    "url": "webpack.stats.json",
    "revision": "d73a2262f124f0aae34685516c991436"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-909098355c4d01566f01.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
