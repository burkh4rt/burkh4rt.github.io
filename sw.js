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
    "revision": "f76f2a68eed5137106d9c0a359f534dc"
  },
  {
    "url": "404/index.html",
    "revision": "73ee9c0b3486fa769d4d6199dd7e4e01"
  },
  {
    "url": "app-2379f5614b52d0905f77.js"
  },
  {
    "url": "app-2379f5614b52d0905f77.js.map",
    "revision": "68bb7e3c25f774866a9eab782fcf2cdd"
  },
  {
    "url": "chunk-map.json",
    "revision": "fdf5b0b2a8c329f16a70b9b3785135fb"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js.map",
    "revision": "73fab470230271ac23de3b660b41bd46"
  },
  {
    "url": "component---src-pages-404-js-9218d8410cc17e169016.js"
  },
  {
    "url": "component---src-pages-404-js-9218d8410cc17e169016.js.map",
    "revision": "45c91c907b261bc1619bd84c9b6b4061"
  },
  {
    "url": "component---src-pages-index-js-08e138296a1032ade784.js"
  },
  {
    "url": "component---src-pages-index-js-08e138296a1032ade784.js.map",
    "revision": "9b725042e966087ae7fc6d60b72931c5"
  },
  {
    "url": "component---src-pages-index-js-4b3da18592a60e9e0909.js"
  },
  {
    "url": "component---src-pages-index-js-4b3da18592a60e9e0909.js.map",
    "revision": "592407a943e617b3b292c7c3da1ea294"
  },
  {
    "url": "component---src-pages-index-js-4e66c288b151099d99dd.js"
  },
  {
    "url": "component---src-pages-index-js-4e66c288b151099d99dd.js.map",
    "revision": "dfd63650b950b2fcefc4fce6a8456858"
  },
  {
    "url": "component---src-pages-index-js-d0bd1de0e1dd70203be3.js"
  },
  {
    "url": "component---src-pages-index-js-d0bd1de0e1dd70203be3.js.map",
    "revision": "8802fb00251feb7edebe89643c0f4f61"
  },
  {
    "url": "component---src-pages-index-js-d62db04b554b74f899a4.js"
  },
  {
    "url": "component---src-pages-index-js-d62db04b554b74f899a4.js.map",
    "revision": "2295152fcdc18d4fa30fb8dce17b2efb"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-4cabda7f921a5260041c.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-4cabda7f921a5260041c.js.map",
    "revision": "9046eb47dc89c4e8d3970f935d0bd2ed"
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
    "revision": "6e6e337873b4f6c31ea16de1c9d6e447"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "050cf5a958330a5bef025d988a1d27c4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "fc20a70eabe098016fce8f2c32205693"
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
    "revision": "bb36f4e67ed189fe972295821896037a"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "06161a94f1e57a13ae942e5d896a1ef2"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "ab4431abaa7cac80b69c45d0f1fd18ff"
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
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/09c1a/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/0a9c8/profile_img.jpg"
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
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/724c8/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/7b630/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/84d81/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/9d1fd/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/a6840/profile_img.jpg"
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
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/f0719/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/f605f/profile_img.jpg"
  },
  {
    "url": "static/71fabf8f6720f15b915fafaaf53d36f7/faa31/profile_img.jpg"
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
    "url": "static/GillSansNova-Light-1f9dfe70de77aef7d6e8d4381de08cee.otf"
  },
  {
    "url": "static/GillSansNova-Light-7d430179991a7116a60c9fccaae7013b.woff"
  },
  {
    "url": "static/GillSansNova-Light-7d430179991a7116a60c9fccaae7013b.woff2"
  },
  {
    "url": "static/GillSansNova-LightItalic-82e9fc387eba214520993be3b40c89a9.otf"
  },
  {
    "url": "static/GillSansNova-LightItalic-94b8b80458b34ba35b21927f8f4007ae.woff"
  },
  {
    "url": "static/GillSansNova-LightItalic-94b8b80458b34ba35b21927f8f4007ae.woff2"
  },
  {
    "url": "static/graphical_model-63fa27959124ab851ad1103560b1932f.svg"
  },
  {
    "url": "static/kalman_graphical-1c17c49f456f2c18fc8f7a003eb4cfda.svg"
  },
  {
    "url": "styles-cd63080e784be7b7e7cf.js"
  },
  {
    "url": "styles-cd63080e784be7b7e7cf.js.map",
    "revision": "49716f650c17b5f79dd576de2e5845e0"
  },
  {
    "url": "styles.f2ac3ff04982fc2a0a8d.css"
  },
  {
    "url": "webpack-runtime-0dd34715b314866165ca.js"
  },
  {
    "url": "webpack-runtime-0dd34715b314866165ca.js.map",
    "revision": "402b1358312dd72bb00b52378e9c2596"
  },
  {
    "url": "webpack-runtime-100a5e77f2dbe631a39c.js"
  },
  {
    "url": "webpack-runtime-100a5e77f2dbe631a39c.js.map",
    "revision": "23ce7c387d81d4cd0c42b639b389a0bf"
  },
  {
    "url": "webpack-runtime-1f3f2327fe66b9a02e25.js"
  },
  {
    "url": "webpack-runtime-1f3f2327fe66b9a02e25.js.map",
    "revision": "337a96da1872120800d6cdc8f98b8b34"
  },
  {
    "url": "webpack-runtime-c76bef5ddffa2cfefa0a.js"
  },
  {
    "url": "webpack-runtime-c76bef5ddffa2cfefa0a.js.map",
    "revision": "dabca593f0a45601defbe186cb86fb25"
  },
  {
    "url": "webpack-runtime-ee6111286b92d69fbd65.js"
  },
  {
    "url": "webpack-runtime-ee6111286b92d69fbd65.js.map",
    "revision": "3818bfda02bce59797cbc8aa426b4a13"
  },
  {
    "url": "webpack.stats.json",
    "revision": "712669b4a06b6be0dadc39c50a2dc995"
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
  if (!resources || !(await caches.match(`/app-2379f5614b52d0905f77.js`))) {
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