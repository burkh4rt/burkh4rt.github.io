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
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-f2dfb28544bdbb4e0930.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-f2dfb28544bdbb4e0930.js.LICENSE.txt",
    "revision": "6fce53c7c7713ebf61712cc2929746fa"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-f2dfb28544bdbb4e0930.js.map",
    "revision": "9f013713df98c6428a77e8a11d2fa416"
  },
  {
    "url": "404.html",
    "revision": "33678bb62260cb746dfd99af0ba17640"
  },
  {
    "url": "404/index.html",
    "revision": "b65ff34de6151db32eb6181e0b9dedad"
  },
  {
    "url": "app-e4c848ecb9a749ce72f0.js"
  },
  {
    "url": "app-e4c848ecb9a749ce72f0.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-e4c848ecb9a749ce72f0.js.map",
    "revision": "34c6b3be40135480b5e8b34e6fee64f3"
  },
  {
    "url": "chunk-map.json",
    "revision": "b94386502395f62c4a17c9245a45764e"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-16703ee5599528db9f93.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-16703ee5599528db9f93.js.map",
    "revision": "3540b27ede5d747879836cc7284bc297"
  },
  {
    "url": "component---src-pages-404-jsx-010c1fb77cdfdb9a7a3f.js"
  },
  {
    "url": "component---src-pages-404-jsx-010c1fb77cdfdb9a7a3f.js.map",
    "revision": "e386d7af13ab154d0d7d26383f2ba420"
  },
  {
    "url": "component---src-pages-index-jsx-93a4b167629bd11b0259.js"
  },
  {
    "url": "component---src-pages-index-jsx-93a4b167629bd11b0259.js.map",
    "revision": "f4780b3e3e4ce36458b77beb75d206a7"
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
    "url": "framework-2601ed29d039b1458055.js"
  },
  {
    "url": "framework-2601ed29d039b1458055.js.LICENSE.txt",
    "revision": "f1d523c904ebbd453f563f0acfae6349"
  },
  {
    "url": "framework-2601ed29d039b1458055.js.map",
    "revision": "9f09b9c429200424c287f177de7441b8"
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
    "revision": "bdf9c052224fbdb3584281982f830805"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "050cf5a958330a5bef025d988a1d27c4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0f8224936aa960399ddd0e0b3c161a76"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "791f7b8a615bd04ce6933c0b7105c812"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "b63036fd2fecbd45485a5fafcdebde86"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "1fe9d9fc11af6c2993949aff63eb55b1"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "efeec7ceeccbd1d849a894d6fe311fb8"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "polyfill-ebfb94a646281a6ab908.js"
  },
  {
    "url": "polyfill-ebfb94a646281a6ab908.js.map",
    "revision": "008ef8d18c6b544620afbd66b4d34baf"
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
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/7b630/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/8df11/profile_img.webp"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/8e183/profile_img.webp"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/accd9/profile_img.webp"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/d7568/profile_img.jpg"
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
    "url": "static/cv20-9011967abf67b335f55e211a18ee92e9.pdf"
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
    "url": "webpack-runtime-ecd870a6efb098f87f45.js"
  },
  {
    "url": "webpack-runtime-ecd870a6efb098f87f45.js.map",
    "revision": "e2ea8e34deeb5e1f982e804d680c827d"
  },
  {
    "url": "webpack.stats.json",
    "revision": "b5922494cb9b133063de0dbcecb4228c"
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
  if (!resources || !(await caches.match(`/app-e4c848ecb9a749ce72f0.js`))) {
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
