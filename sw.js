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
    "url": "175-b5a8ad0013f55cbed65f.js"
  },
  {
    "url": "175-b5a8ad0013f55cbed65f.js.map",
    "revision": "b3ebeb71efd714d114a5860a3e7759d2"
  },
  {
    "url": "231-7ebacc81881aed18248a.js"
  },
  {
    "url": "231-7ebacc81881aed18248a.js.map",
    "revision": "c8822db41580ddc628041163cecd1c84"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-7b74b1b27dfbb803ef60.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-7b74b1b27dfbb803ef60.js.LICENSE.txt",
    "revision": "6fce53c7c7713ebf61712cc2929746fa"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-7b74b1b27dfbb803ef60.js.map",
    "revision": "6bbc59ae9f16e33cc2522e586d26b83e"
  },
  {
    "url": "404.html",
    "revision": "175e8cd59f6adbb691e16254119f1f31"
  },
  {
    "url": "404/index.html",
    "revision": "336a99c97587206f8268d71df2d6f9e8"
  },
  {
    "url": "986-28b8e7ae36c995d7d669.js"
  },
  {
    "url": "986-28b8e7ae36c995d7d669.js.map",
    "revision": "4b42c5b4336a80092900153770c357bc"
  },
  {
    "url": "app-295aec3a9de24c1a3198.js"
  },
  {
    "url": "app-295aec3a9de24c1a3198.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-295aec3a9de24c1a3198.js.map",
    "revision": "8858eb36938efb99a6acbf0b54f654de"
  },
  {
    "url": "CeD.215P-MJB9-MKTD.pdf",
    "revision": "fcd2d7df526139336da0b87ce11b0e30"
  },
  {
    "url": "chunk-map.json",
    "revision": "318fb629aa4748563176ed1f629aee62"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-8f1124ce6704e1444ebc.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-8f1124ce6704e1444ebc.js.map",
    "revision": "e4b95760debf0d1d9180996f92b11cb2"
  },
  {
    "url": "component---src-pages-404-jsx-b98c4ad3fd486fd2df08.js"
  },
  {
    "url": "component---src-pages-404-jsx-b98c4ad3fd486fd2df08.js.map",
    "revision": "f092142e9ad0027ca1b40b27cbd5ebd0"
  },
  {
    "url": "component---src-pages-index-jsx-cf2b5ed0010297a6cc29.js"
  },
  {
    "url": "component---src-pages-index-jsx-cf2b5ed0010297a6cc29.js.map",
    "revision": "46bb67a9eaca20a27bd0de0d1dd9abca"
  },
  {
    "url": "cv20.pdf",
    "revision": "9011967abf67b335f55e211a18ee92e9"
  },
  {
    "url": "discriminative_filtering.bib",
    "revision": "9aced7bacea7985492a31c8f37122a36"
  },
  {
    "url": "discriminative_filtering.ris",
    "revision": "3b955e00dfcb3161f0c1a1c2b66e1ae9"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "68418ccd5ece0ed7b915981cb7815073"
  },
  {
    "url": "favicon.svg",
    "revision": "15cb8757740d90b288827c6953e4e931"
  },
  {
    "url": "framework-1acad4c2de0511a7245c.js"
  },
  {
    "url": "framework-1acad4c2de0511a7245c.js.LICENSE.txt",
    "revision": "f1d523c904ebbd453f563f0acfae6349"
  },
  {
    "url": "framework-1acad4c2de0511a7245c.js.map",
    "revision": "80195b1575c4faba1b37ca0e74f245a6"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "2439941d8ed880370b8be8009ba3dac2"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "51b004ac6a96ecadecaad6db39ccb23d"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "ebfbffda49533bf5d3c9d087ce580465"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "f0441f8427b8863af81cd97f2604097c"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "d5a402e526484a16979d9c3ec9dfb00d"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "42206dd45939a21f04d430f173153d31"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "4e3e11fd69725ca8332318d150d3bf0e"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "65bd34461836b6dbd14479a18b6bbb6a"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "1248dcf6c286ab8a1d567c13aeac5aa4"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "050cf5a958330a5bef025d988a1d27c4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0b43bf81c3ff431526dc486d2fd86a61"
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
    "revision": "4714f821b572c07640c72af072fe4098"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "37c87b4f814562d7026bbb9850417cef"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "polyfill-d6739acd5bb0440251e3.js"
  },
  {
    "url": "polyfill-d6739acd5bb0440251e3.js.map",
    "revision": "1715ede12117b63bf1a7e6ec502f802c"
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
    "url": "webpack-runtime-8b0a4680ac3870b20977.js"
  },
  {
    "url": "webpack-runtime-8b0a4680ac3870b20977.js.map",
    "revision": "f7baba3b76a07957d1693ec2683c10ba"
  },
  {
    "url": "webpack.stats.json",
    "revision": "235dafabf7d4ee628678839e85b5c4ca"
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
  if (!resources || !(await caches.match(`/app-295aec3a9de24c1a3198.js`))) {
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
