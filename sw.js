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
    "revision": "cd93c0852f68a3bacfe56b8d51a98170"
  },
  {
    "url": "404/index.html",
    "revision": "743c0ef9ca23cff1c4582826c93a1ccd"
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
    "url": "app-f022cb9410107bd1d2f6.js"
  },
  {
    "url": "app-f022cb9410107bd1d2f6.js.map",
    "revision": "efbcb80d13ce65303fab402ea2d7d290"
  },
  {
    "url": "chunk-map.json",
    "revision": "e62d04bb398fbf04587b114cf7ceba82"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js.map",
    "revision": "73fab470230271ac23de3b660b41bd46"
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
    "url": "component---src-pages-index-js-90d18f431df130959610.js"
  },
  {
    "url": "component---src-pages-index-js-90d18f431df130959610.js.map",
    "revision": "3819828d92a7ae14ecb13aedfa0751b0"
  },
  {
    "url": "component---src-pages-index-js-b840e3ff441b9b30116f.js"
  },
  {
    "url": "component---src-pages-index-js-b840e3ff441b9b30116f.js.map",
    "revision": "f722031c5697086f8494d060c4f64e97"
  },
  {
    "url": "component---src-pages-index-js-f351b8dee1374f3ea549.js"
  },
  {
    "url": "component---src-pages-index-js-f351b8dee1374f3ea549.js.map",
    "revision": "898cea3c84e94be90a2499aa9848af86"
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
    "url": "favicon-32x32.png",
    "revision": "134312677f57ce87eaac69c26655df20"
  },
  {
    "url": "framework-a576ae5ab153fa4a7c27.js"
  },
  {
    "url": "framework-a576ae5ab153fa4a7c27.js.map",
    "revision": "93827e9ae5e1ecfb372843b664b62144"
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
    "revision": "f2aa0d8e3830b72d2b967ddcc30fdfcc"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "050cf5a958330a5bef025d988a1d27c4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7f129d3e00ddb8c3a33376577b56ec1e"
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
    "revision": "f087fe8a745349e31dc32144ee851acd"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "06161a94f1e57a13ae942e5d896a1ef2"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "ef2f0cde89f9978b8daaf0573d164cda"
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
    "url": "robots.txt",
    "revision": "0a9a1db2884048e2d407a6bb0926ae7b"
  },
  {
    "url": "sitemap.xml",
    "revision": "69c5f054d002a6a512a8e5e80c11827c"
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
    "url": "static/bayesian_graphical-62ce9cc57cc16461924146fa7a338322.svg"
  },
  {
    "url": "static/chapman_kolmogorov-676de7a4e0894cd6aec2d7f6ec99c182.svg"
  },
  {
    "url": "static/cv19-29860ebfa7f02ad3ee778a4709932f1b.pdf"
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
    "url": "webpack-runtime-8dba38b07223746eabca.js"
  },
  {
    "url": "webpack-runtime-8dba38b07223746eabca.js.map",
    "revision": "908613f7c1de016089e4c08e8be0e45a"
  },
  {
    "url": "webpack-runtime-a606e25453dea6695da9.js"
  },
  {
    "url": "webpack-runtime-a606e25453dea6695da9.js.map",
    "revision": "39434524f827b7abfbe99ea796d5ac11"
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
    "url": "webpack.stats.json",
    "revision": "3930b84562af166ae4e3c66ae6f8fbb1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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
  if (!resources || !(await caches.match(`/app-f022cb9410107bd1d2f6.js`))) {
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
