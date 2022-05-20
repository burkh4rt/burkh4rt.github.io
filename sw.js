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
    "url": "231-e2f7e121756ebebaf5e1.js"
  },
  {
    "url": "231-e2f7e121756ebebaf5e1.js.map",
    "revision": "2376b6ff41bc97b9ba9d4189f18a3049"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-e3ce92afaa92c6ca1a98.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-e3ce92afaa92c6ca1a98.js.map",
    "revision": "e3b68ba775afe46bf6959b63085b5b14"
  },
  {
    "url": "36-acb8cdeeb57ad78f1cbd.js"
  },
  {
    "url": "36-acb8cdeeb57ad78f1cbd.js.LICENSE.txt",
    "revision": "4e0e34f265fae8f33b01b27ae29d9d6f"
  },
  {
    "url": "36-acb8cdeeb57ad78f1cbd.js.map",
    "revision": "28a27a7d0833bdb6a598e174b4c3fceb"
  },
  {
    "url": "404.html",
    "revision": "ff9bc2108079cedf44006877c5ca854d"
  },
  {
    "url": "404/index.html",
    "revision": "00e1904367268551e60487702f51ca44"
  },
  {
    "url": "app-9a5f9ad54bed66eb48ba.js"
  },
  {
    "url": "app-9a5f9ad54bed66eb48ba.js.LICENSE.txt",
    "revision": "6fce53c7c7713ebf61712cc2929746fa"
  },
  {
    "url": "app-9a5f9ad54bed66eb48ba.js.map",
    "revision": "531b11ab40ee7a13b2cc998e70bc9ffb"
  },
  {
    "url": "CeD.215P-MJB9-MKTD.pdf",
    "revision": "fcd2d7df526139336da0b87ce11b0e30"
  },
  {
    "url": "chunk-map.json",
    "revision": "28b850324f858c1dfe969091150c2bc0"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-110ed82479ec567bb549.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-110ed82479ec567bb549.js.map",
    "revision": "6c9022180675990aa5b208f50977faea"
  },
  {
    "url": "component---src-pages-404-jsx-9c9ce76623cd1cd0fbb9.js"
  },
  {
    "url": "component---src-pages-404-jsx-9c9ce76623cd1cd0fbb9.js.map",
    "revision": "46694379f7def9c8062dbd3fa99188c7"
  },
  {
    "url": "component---src-pages-index-jsx-b5882bb5c661cb092478.js"
  },
  {
    "url": "component---src-pages-index-jsx-b5882bb5c661cb092478.js.map",
    "revision": "e340177290d6569d8b19bd8d3e42c0c4"
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
    "revision": "59d87885451d28f6fc4d05020836dde1"
  },
  {
    "url": "favicon.svg",
    "revision": "15cb8757740d90b288827c6953e4e931"
  },
  {
    "url": "framework-d8a79ea7da96ecce55f5.js"
  },
  {
    "url": "framework-d8a79ea7da96ecce55f5.js.LICENSE.txt",
    "revision": "0c95623c45ebef0e1328207bf3d3da31"
  },
  {
    "url": "framework-d8a79ea7da96ecce55f5.js.map",
    "revision": "a237600865bc947fdb40de908da466d0"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "90c8cd43c4f432162e7f68d80d22b9d1"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "cb1dee203b1d2f94be128e70b8955acd"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "4b88684c9ed01960d7ccfb95ba740103"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "e20c88e280b3a5104d753b9346c3543a"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "9e3cbcedf7241610b33f19f65f52954e"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "45bee00027c546ac0320bb30d00665c6"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "38485ffdd2e0c2242a6d8665a6265e03"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "571b439bc2e14b0781f9a46fea975f2b"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "39b4f4467354c8d9a4ef9fd8e5b90676"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "9b103911ef697bb9b733782053c0afdc"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "119431d9a98da1e38b981955339be0a5"
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
    "revision": "40223b8a8aec0438488f6d179d608ce0"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "4e937636596534d58c6dc499592fab07"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "polyfill-23e24594941c1dd953de.js"
  },
  {
    "url": "polyfill-23e24594941c1dd953de.js.map",
    "revision": "c3927a81bb1b54bb961d7f795af59bcf"
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
    "url": "webpack-runtime-5aa47bca086649dd222b.js"
  },
  {
    "url": "webpack-runtime-5aa47bca086649dd222b.js.map",
    "revision": "0c4a7558cf494356c57a58a5f6c0aa2b"
  },
  {
    "url": "webpack-runtime-ce2515c9b41a270cb9b8.js"
  },
  {
    "url": "webpack-runtime-ce2515c9b41a270cb9b8.js.map",
    "revision": "51f6a713cc16f643ba5b95b674edd174"
  },
  {
    "url": "webpack.stats.json",
    "revision": "d4b7a2973cdb36999443bce252c3671b"
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

    // We detected compilation hash mismatch
    // we should clear runtime cache as data
    // files might be out of sync and we should
    // do fresh fetches for them
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (key && key.includes(`runtime`)) {
              return caches.delete(key)
            }

            return Promise.resolve()
          })
        )
      })
    )
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
  if (!resources || !(await caches.match(`/app-9a5f9ad54bed66eb48ba.js`))) {
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
