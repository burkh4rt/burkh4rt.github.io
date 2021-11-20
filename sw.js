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
    "url": "175-7e40d1c5c1199bbd6e5c.js"
  },
  {
    "url": "175-7e40d1c5c1199bbd6e5c.js.map",
    "revision": "e7ebbdfd7bb611a86295413ee3986b2d"
  },
  {
    "url": "231-7ebacc81881aed18248a.js"
  },
  {
    "url": "231-7ebacc81881aed18248a.js.map",
    "revision": "132b0d68a6c1edd9e7f7ef0845360bca"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-9f2225d199c1a6b0d473.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-9f2225d199c1a6b0d473.js.map",
    "revision": "e584125d52140f1f2b6935c207a8f220"
  },
  {
    "url": "404.html",
    "revision": "d1da5ddf077215bbb97f85063da6302d"
  },
  {
    "url": "404/index.html",
    "revision": "e17bbd56e46151f6fc74cf8a136d8bba"
  },
  {
    "url": "503-c402f9ce8ba74266f4a1.js"
  },
  {
    "url": "503-c402f9ce8ba74266f4a1.js.map",
    "revision": "80d2ccf302e9f9c08b0bd89212d70738"
  },
  {
    "url": "app-d32e429a8c986be3712a.js"
  },
  {
    "url": "app-d32e429a8c986be3712a.js.LICENSE.txt",
    "revision": "9e6d645d3a876f874cf56b5dcfa66261"
  },
  {
    "url": "app-d32e429a8c986be3712a.js.map",
    "revision": "3b929bc4773b671d6d1254d5a2f29d79"
  },
  {
    "url": "CeD.215P-MJB9-MKTD.pdf",
    "revision": "fcd2d7df526139336da0b87ce11b0e30"
  },
  {
    "url": "chunk-map.json",
    "revision": "9528d5724cbc7df43f5e4381fd659136"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-6e2050ff131f0cef1130.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-6e2050ff131f0cef1130.js.map",
    "revision": "cfaeb9d9ce653caeb3cd64d9c33aac80"
  },
  {
    "url": "component---src-pages-404-jsx-089662950cc024a537e6.js"
  },
  {
    "url": "component---src-pages-404-jsx-089662950cc024a537e6.js.map",
    "revision": "758d4036f7e74db160cd896f820882cf"
  },
  {
    "url": "component---src-pages-index-jsx-d1017aaa1df5e24c1150.js"
  },
  {
    "url": "component---src-pages-index-jsx-d1017aaa1df5e24c1150.js.map",
    "revision": "9fc3489a413c3fa6644d9b565c45b5ce"
  },
  {
    "url": "cv21.pdf",
    "revision": "5a454beb5ec2cd0955051acaf2a7df2d"
  },
  {
    "url": "discriminative_filtering.bib",
    "revision": "9aced7bacea7985492a31c8f37122a36"
  },
  {
    "url": "discriminative_filtering.ris",
    "revision": "bb3ac9f7ba34310f0d07a5ba3e4d57b5"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "23f99e3dbbe7bb42a9fcd72caf9b93f5"
  },
  {
    "url": "favicon.svg",
    "revision": "15cb8757740d90b288827c6953e4e931"
  },
  {
    "url": "framework-132e54c413ae7fc80f64.js"
  },
  {
    "url": "framework-132e54c413ae7fc80f64.js.LICENSE.txt",
    "revision": "34ad9c8bf4d74905b6b042d9f6310c3b"
  },
  {
    "url": "framework-132e54c413ae7fc80f64.js.map",
    "revision": "d9cf5369676ad13f4f5c0d09aa358d83"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "37f7919342db2f09331777b97481d078"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "4ee8ba4be2613cce418ec60cc86c957c"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "32f04d444bf596d20487b2bdeb786a5f"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "39d60487dbd1cb1c3dac6ceba29ed26b"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "2a2564129b44df67e8f9d771539ffa2e"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "18bb7af4181ed2466800a6eb96323a0f"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "2e53472c929b2255ba722df8c7ce3398"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "21b3df62f25e08408cda843c280913d7"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "8c1b8dc25c28fbfd3b65c01653c0c5e9"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "050cf5a958330a5bef025d988a1d27c4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b6ac0355feac7adb380447705e8dd3cc"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "171dbd7715a9e8a895d7a36888770c1c"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "db4523ee118a4df37d9ae53cca625f83"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6df5771e6da2f4b11322f6607aa4110d"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "50c0560dd42a5d192dc065bc1520b625"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f2c002077289a7e1ac538802bc7f5314"
  },
  {
    "url": "polyfill-6edc6a8d9218efd2eb3d.js"
  },
  {
    "url": "polyfill-6edc6a8d9218efd2eb3d.js.map",
    "revision": "36ac387379dc57b2764333a6d47ba6c0"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/2e20e/profile_img.avif"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/34522/profile_img.webp"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/38a43/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/3cc7a/profile_img.webp"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/4950f/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/6c3db/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/79ac1/profile_img.avif"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/7e893/profile_img.webp"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/c8ab2/profile_img.avif"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/d5ce2/profile_img.webp"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/d89df/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/f50cf/profile_img.avif"
  },
  {
    "url": "static/bayesian_graphical-c1e19d8b7b696de9663bcdb6a32772bc.svg"
  },
  {
    "url": "static/chapman_kolmogorov-811060825316684ae074b13066f5f90c.svg"
  },
  {
    "url": "static/dkf_graphical-947ddf1b8b9867e692f971e97e4a898c.svg"
  },
  {
    "url": "static/GaramondPremrPro-Capt-75bf31964cdde47bb6a8e54ea5c6b42f.otf"
  },
  {
    "url": "static/GaramondPremrPro-Capt-bb26be70f4a6b476f8d55eef34802bbf.woff2"
  },
  {
    "url": "static/GaramondPremrPro-Capt-e22f76a60e8658c368bb943044299d61.woff"
  },
  {
    "url": "static/GaramondPremrPro-ItCapt-bb26be70f4a6b476f8d55eef34802bbf.woff"
  },
  {
    "url": "static/GaramondPremrPro-ItCapt-e22f76a60e8658c368bb943044299d61.woff2"
  },
  {
    "url": "static/GaramondPremrPro-ItCapt-f846ed00049feafa9f6004da9235cc0c.otf"
  },
  {
    "url": "static/GaramondPremrPro-MedCapt-8fc07fc1af44871d0292e2a4a77261ce.woff"
  },
  {
    "url": "static/GaramondPremrPro-MedCapt-8fc07fc1af44871d0292e2a4a77261ce.woff2"
  },
  {
    "url": "static/GaramondPremrPro-MedCapt-e662140e76278a424959a208c6447063.otf"
  },
  {
    "url": "static/GillSansNova-Book-3965f832825376a434e7fb2418411b86.otf"
  },
  {
    "url": "static/GillSansNova-Book-b1318c5cc0f0a333dbd883526362b04e.woff"
  },
  {
    "url": "static/GillSansNova-Book-b1318c5cc0f0a333dbd883526362b04e.woff2"
  },
  {
    "url": "static/GillSansNova-BookItalic-4a78ec1048c44636323ef2437c4ea759.woff"
  },
  {
    "url": "static/GillSansNova-BookItalic-4a78ec1048c44636323ef2437c4ea759.woff2"
  },
  {
    "url": "static/GillSansNova-BookItalic-f78972b5e9405cb4f9db125d79529f12.otf"
  },
  {
    "url": "static/graphical_model-f47cffef0b86755d94983c6ef29cfa35.svg"
  },
  {
    "url": "static/kalman_graphical-4ad0da226d6fb86daf4e9a4597a687c7.svg"
  },
  {
    "url": "webpack-runtime-5ceacef52c5a4d00df5a.js"
  },
  {
    "url": "webpack-runtime-5ceacef52c5a4d00df5a.js.map",
    "revision": "4669268fd37e3cdfcbf1f58431a47061"
  },
  {
    "url": "webpack.stats.json",
    "revision": "84a3b12cbbe63ba945c5e851759b3f0c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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
  if (!resources || !(await caches.match(`/app-d32e429a8c986be3712a.js`))) {
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
