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
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-1f76b288329b8bde75b0.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-1f76b288329b8bde75b0.js.LICENSE.txt",
    "revision": "9e6d645d3a876f874cf56b5dcfa66261"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-1f76b288329b8bde75b0.js.map",
    "revision": "068b2c4d9da54de116eccef19875489b"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-42b4019f39b5bd053a79.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-42b4019f39b5bd053a79.js.LICENSE.txt",
    "revision": "9e6d645d3a876f874cf56b5dcfa66261"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-42b4019f39b5bd053a79.js.map",
    "revision": "6106ecfbb957e1b357a3a60650605c44"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-5393f700f55f227be83d.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-5393f700f55f227be83d.js.LICENSE.txt",
    "revision": "9e6d645d3a876f874cf56b5dcfa66261"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-5393f700f55f227be83d.js.map",
    "revision": "676568ce2a48aff6acc4270b3eb2248d"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-a628f17cbef12d7231b3.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-a628f17cbef12d7231b3.js.LICENSE.txt",
    "revision": "9e6d645d3a876f874cf56b5dcfa66261"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-a628f17cbef12d7231b3.js.map",
    "revision": "04f1a738d81cbdfc9a328d1733544e5f"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-f9f79ab37a62a815a6bb.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-f9f79ab37a62a815a6bb.js.LICENSE.txt",
    "revision": "9e6d645d3a876f874cf56b5dcfa66261"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-f9f79ab37a62a815a6bb.js.map",
    "revision": "1c5dbcf1304b1195e1ea11412972e5cf"
  },
  {
    "url": "404.html",
    "revision": "f19b8e3d7f75d9ed2e8f36d922cb317f"
  },
  {
    "url": "404/index.html",
    "revision": "2d310614bb8349e071bff6ba19b24f89"
  },
  {
    "url": "470-238c4642aba3d466a1df.js"
  },
  {
    "url": "470-238c4642aba3d466a1df.js.map",
    "revision": "983d9496261b95e844b1a310ffe71879"
  },
  {
    "url": "app-d74dfe1ba3da8fa2db7f.js"
  },
  {
    "url": "app-d74dfe1ba3da8fa2db7f.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-d74dfe1ba3da8fa2db7f.js.map",
    "revision": "660f04d3317afa8907459322f8ff1026"
  },
  {
    "url": "CeD.215P-MJB9-MKTD.pdf",
    "revision": "fcd2d7df526139336da0b87ce11b0e30"
  },
  {
    "url": "chunk-map.json",
    "revision": "f1d999b030ed11367fb5e7dd02b4b866"
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
    "url": "component---src-pages-index-jsx-1e99ac3d75415ce4bc06.js"
  },
  {
    "url": "component---src-pages-index-jsx-1e99ac3d75415ce4bc06.js.map",
    "revision": "2bacf10ec0ccbf6119c750d68b330514"
  },
  {
    "url": "component---src-pages-index-jsx-93e0c2f88f8bc1b4dd24.js"
  },
  {
    "url": "component---src-pages-index-jsx-93e0c2f88f8bc1b4dd24.js.map",
    "revision": "5e3f59a0dd43376bb8e26212d5f3707a"
  },
  {
    "url": "component---src-pages-index-jsx-bc94eab67d12d3de8670.js"
  },
  {
    "url": "component---src-pages-index-jsx-bc94eab67d12d3de8670.js.map",
    "revision": "296bc5427e3e254b63d2b7b00f3f0f9b"
  },
  {
    "url": "cv21.pdf",
    "revision": "a36d511f8479d7357a3def48cf7061b3"
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
    "revision": "23f99e3dbbe7bb42a9fcd72caf9b93f5"
  },
  {
    "url": "favicon.svg",
    "revision": "15cb8757740d90b288827c6953e4e931"
  },
  {
    "url": "framework-0c7e290e5b41379b3936.js"
  },
  {
    "url": "framework-0c7e290e5b41379b3936.js.LICENSE.txt",
    "revision": "34ad9c8bf4d74905b6b042d9f6310c3b"
  },
  {
    "url": "framework-0c7e290e5b41379b3936.js.map",
    "revision": "a08f38b831b0d47b176e12efa66a5f18"
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
    "revision": "12f51e2677404ec8e51cf98cb39ec941"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "050cf5a958330a5bef025d988a1d27c4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7e02e3789e7d0fb6c3b2ef4780d2bd86"
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
    "revision": "750ace04df9c5f79788480471c4c1660"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "56922b0fb7907fb6d1565b34b984c974"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "polyfill-7a5aff24472537cee9cb.js"
  },
  {
    "url": "polyfill-7a5aff24472537cee9cb.js.map",
    "revision": "cff091f635f2a562d00430b09b999332"
  },
  {
    "url": "robots.txt",
    "revision": "ac8367523b8890a353f28e3b74777d6c"
  },
  {
    "url": "sitemap.xml/sitemap-0.xml",
    "revision": "b6dfe96dc451a80216d7057be086e380"
  },
  {
    "url": "sitemap.xml/sitemap-index.xml",
    "revision": "84b2eb401fa3976d441357702d57a166"
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
    "url": "webpack-runtime-070a238d4ff0655e77a8.js"
  },
  {
    "url": "webpack-runtime-070a238d4ff0655e77a8.js.map",
    "revision": "92eb62a18705af65e8818841575baa82"
  },
  {
    "url": "webpack-runtime-5bf17e6ee9cfe509f7d6.js"
  },
  {
    "url": "webpack-runtime-5bf17e6ee9cfe509f7d6.js.map",
    "revision": "6089c3328b0ec18774dcfc78155803f9"
  },
  {
    "url": "webpack-runtime-a2c7bbedff94ba56205b.js"
  },
  {
    "url": "webpack-runtime-a2c7bbedff94ba56205b.js.map",
    "revision": "dc083a1cd95fbf7d7eb1cd6e952bced6"
  },
  {
    "url": "webpack-runtime-a64fb32f96f0286e86fe.js"
  },
  {
    "url": "webpack-runtime-a64fb32f96f0286e86fe.js.map",
    "revision": "7d01b838a33b6f40d1aeeea4421828e4"
  },
  {
    "url": "webpack-runtime-c7d11078d5f15aa4bd4d.js"
  },
  {
    "url": "webpack-runtime-c7d11078d5f15aa4bd4d.js.map",
    "revision": "3579b218198d0864dc0ff608a64483dc"
  },
  {
    "url": "webpack-runtime-e66a20ac3d0100cb32ef.js"
  },
  {
    "url": "webpack-runtime-e66a20ac3d0100cb32ef.js.map",
    "revision": "b68e803b8c1002f95be05d433276276d"
  },
  {
    "url": "webpack-runtime-f0c56e91760987ed5673.js"
  },
  {
    "url": "webpack-runtime-f0c56e91760987ed5673.js.map",
    "revision": "b5b706a6db8aaf0c185b736e9a5695f5"
  },
  {
    "url": "webpack.stats.json",
    "revision": "223e5246db38d35e20ac656a75ef68ad"
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
  if (!resources || !(await caches.match(`/app-d74dfe1ba3da8fa2db7f.js`))) {
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
