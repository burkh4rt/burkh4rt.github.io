"use strict";(self.webpackChunk_burkh4rt_burkh4rt_github_io=self.webpackChunk_burkh4rt_burkh4rt_github_io||[]).push([[279],{8486:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),s=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,s=o,o=!0,l++):o&&s&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,i=!0):(i=r(c)===c&&n(c)!==c,s=o,o=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(o,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},6349:function(e,t,a){a.d(t,{A:function(){return m}});var r=a(367),n=a(5637),i=a(6942),o=a(9969),s=a(6927);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}const c=i.default.nav.withConfig({displayName:"SubNav__SubNavBase",componentId:"sc-1t692wx-0"})(["display:flex;justify-content:space-between;.SubNav-body{display:flex;margin-bottom:-1px;> *{margin-left:",";}> *:first-child{margin-left:0;}}.SubNav-actions{align-self:center;}",";"],(0,o.Jt)("space.2"),s.A);function g(e){let{actions:t,className:a,children:i,label:o,...s}=e;const g=(0,r.A)(a,"SubNav");return n.createElement(c,l({className:g,"aria-label":o},s),n.createElement("div",{className:"SubNav-body"},i),t&&n.createElement("div",{className:"SubNav-actions"},t))}g.displayName="SubNav";const u=i.default.div.withConfig({displayName:"SubNav__SubNavLinks",componentId:"sc-1t692wx-1"})(["display:flex;",";"],s.A),d=i.default.a.attrs((e=>({className:(0,r.A)("SubNav-item",e.selected&&"selected",e.className)}))).withConfig({displayName:"SubNav__SubNavLink",componentId:"sc-1t692wx-2"})(["padding-left:",";padding-right:",";font-weight:",";font-size:",";line-height:20px;min-height:34px;color:",";text-align:center;text-decoration:none;border-top:1px solid ",";border-bottom:1px solid ",";border-right:1px solid ",";display:flex;align-items:center;&:first-of-type{border-top-left-radius:",";border-bottom-left-radius:",";border-left:1px solid ",";}&:last-of-type{border-top-right-radius:",";border-bottom-right-radius:",";}&:hover,&:focus{text-decoration:none;background-color:",";transition:background-color 0.2s ease;.SubNav-octicon{color:",";}}&.selected{color:",";background-color:",";border-color:",";.SubNav-octicon{color:",";}}",";"],(0,o.Jt)("space.3"),(0,o.Jt)("space.3"),(0,o.Jt)("fontWeights.semibold"),(0,o.Jt)("fontSizes.1"),(0,o.Jt)("colors.fg.default"),(0,o.Jt)("colors.border.default"),(0,o.Jt)("colors.border.default"),(0,o.Jt)("colors.border.default"),(0,o.Jt)("radii.2"),(0,o.Jt)("radii.2"),(0,o.Jt)("colors.border.default"),(0,o.Jt)("radii.2"),(0,o.Jt)("radii.2"),(0,o.Jt)("colors.canvas.subtle"),(0,o.Jt)("colors.fg.muted"),(0,o.Jt)("colors.fg.onEmphasis"),(0,o.Jt)("colors.accent.emphasis"),(0,o.Jt)("colors.accent.emphasis"),(0,o.Jt)("colors.fg.onEmphasis"),s.A);d.displayName="SubNav.Link",u.displayName="SubNav.Links";var m=Object.assign(g,{Link:d,Links:u})},5938:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return I},P:function(){return j},S:function(){return P},_:function(){return s},a:function(){return o},b:function(){return g},g:function(){return u},h:function(){return l}});var r=a(5637),n=(a(8486),a(5983)),i=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function g(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,i,s,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const g=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return g}const d=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=s(e,d);return r.createElement(r.Fragment,null,r.createElement(m,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],A=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=s(e,h);return r.createElement("img",o({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},M=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=s(e,A);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,o({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var y;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},M.displayName="Picture",M.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const b=["fallback"],j=function(e){let{fallback:t}=e,a=s(e,b);return t?r.createElement(M,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};j.displayName="Placeholder",j.propTypes={fallback:n.string,sources:null==(y=M.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const I=function(e){return r.createElement(r.Fragment,null,r.createElement(M,o({},e)),r.createElement("noscript",null,r.createElement(M,o({},e,{shouldLoad:!0}))))};I.displayName="MainImage",I.propTypes=M.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],w=["style","className"],E=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},x={image:i().object.isRequired,alt:L},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],D=["style","className"],T=new Set;let S,z;const v=function(e){let{as:t="div",image:n,style:i,backgroundColor:g,className:u,class:d,onStartLoad:m,onLoad:p,onError:h}=e,A=s(e,k);const{width:f,height:M,layout:y}=n,b=c(f,M,y),{style:j,className:I}=b,N=s(b,D),w=(0,r.useRef)(),E=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);d&&(u=d);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(y,f,M);return(0,r.useEffect)((()=>{S||(S=a.e(154).then(a.bind(a,4154)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return z=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=w.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(E);if(z&&T.has(E))return;let t,r;return S.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;w.current&&(w.current.innerHTML=a(o({isLoading:!0,isLoaded:T.has(E),image:n},A)),T.has(E)||(t=requestAnimationFrame((()=>{w.current&&(r=s(w.current,E,T,i,m,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{T.has(E)&&z&&(w.current.innerHTML=z(o({isLoading:T.has(E),isLoaded:T.has(E),image:n},A)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,o({},N,{style:o({},j,i,{backgroundColor:g}),className:`${I}${u?` ${u}`:""}`,ref:w,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},C=(0,r.memo)((function(e){return e.image?(0,r.createElement)(v,e):null}));C.propTypes=x,C.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function B(e){return function(t){let{src:a,__imageData:n,__error:i}=t,l=s(t,O);return i&&console.warn(i),n?r.createElement(e,o({image:n},l)):(console.warn("Image not loaded",a),null)}}const Q=B((function(e){let{as:t="div",className:a,class:n,style:i,image:l,loading:d="lazy",imgClassName:m,imgStyle:h,backgroundColor:A,objectFit:f,objectPosition:M}=e,y=s(e,N);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),h=o({objectFit:f,objectPosition:M,backgroundColor:A},h);const{width:b,height:L,layout:x,images:k,placeholder:D,backgroundColor:T}=l,S=c(b,L,x),{style:z,className:v}=S,C=s(S,w),O={fallback:void 0,sources:[]};return k.fallback&&(O.fallback=o({},k.fallback,{srcSet:k.fallback.srcSet?E(k.fallback.srcSet):void 0})),k.sources&&(O.sources=k.sources.map((e=>o({},e,{srcSet:E(e.srcSet)})))),r.createElement(t,o({},C,{style:o({},z,i,{backgroundColor:A}),className:`${v}${a?` ${a}`:""}`}),r.createElement(p,{layout:x,width:b,height:L},r.createElement(j,o({},u(D,!1,x,b,L,T,f,M))),r.createElement(I,o({"data-gatsby-image-ssr":"",className:m},y,g("eager"===d,!1,O,d,h)))))})),Y=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},U=new Set(["fixed","fullWidth","constrained"]),_={src:i().string.isRequired,alt:L,width:Y,height:Y,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!U.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};Q.displayName="StaticImage",Q.propTypes=_;const P=B(C);P.displayName="StaticImage",P.propTypes=_},2960:function(e,t,a){a.r(t),a.d(t,{Head:function(){return Q},default:function(){return Y}});var r=a(5637),n=a(5938),i=a(2786),o=a(3383),s=a(8285),l=a(4753),c=a(6942),g=a(9969),u=a(6267),d=a(6927);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},m.apply(this,arguments)}const p=c.default.h2.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-1c1dgg0-0"})(["font-weight:",";font-size:",";margin:0;",";"],(0,g.Jt)("fontWeights.bold"),(0,g.Jt)("fontSizes.5"),d.A),h=(0,r.forwardRef)(((e,t)=>{let{as:a="h2",...n}=e;const i=r.useRef(null);return(0,u.T)(t,i),r.createElement(p,m({as:a},n,{ref:i}))}));h.displayName="Heading";var A=a(6349),f=a(7977),M=a(367);const y=c.default.div.withConfig({displayName:"Timeline",componentId:"sc-1nkzbnu-0"})(["display:flex;flex-direction:column;"," ",";"],(e=>e.clipSidebar&&(0,c.css)([".Timeline-Item:first-child{padding-top:0;}.Timeline-Item:last-child{padding-bottom:0;}"])),d.A),b=c.default.div.attrs((e=>({className:(0,M.A)("Timeline-Item",e.className)}))).withConfig({displayName:"Timeline__TimelineItem",componentId:"sc-1nkzbnu-1"})(["display:flex;position:relative;padding:"," 0;margin-left:",";&::before{position:absolute;top:0;bottom:0;left:0;display:block;width:2px;content:'';background-color:",";}"," ",";"],(0,g.Jt)("space.3"),(0,g.Jt)("space.3"),(0,g.Jt)("colors.border.muted"),(e=>e.condensed&&(0,c.css)(["padding-top:",";padding-bottom:0;&:last-child{padding-bottom:",";}.TimelineItem-Badge{height:16px;margin-top:",";margin-bottom:",";color:",";background-color:",";border:0;}"],(0,g.Jt)("space.1"),(0,g.Jt)("space.3"),(0,g.Jt)("space.2"),(0,g.Jt)("space.2"),(0,g.Jt)("colors.fg.muted"),(0,g.Jt)("colors.canvas.default"))),d.A),j=e=>r.createElement(l.A,{position:"relative",zIndex:1},r.createElement(l.A,{display:"flex",className:"TimelineItem-Badge",flexShrink:0,borderRadius:"50%",borderWidth:"2px",borderStyle:"solid",borderColor:"canvas.default",overflow:"hidden",color:"fg.muted",bg:"timeline.badgeBg",width:"32px",height:"32px",mr:2,ml:"-15px",alignItems:"center",justifyContent:"center",sx:e.sx},e.children));j.displayName="TimelineBadge";const I=c.default.div.withConfig({displayName:"Timeline__TimelineBody",componentId:"sc-1nkzbnu-2"})(["min-width:0;max-width:100%;margin-top:",";color:",";flex:auto;font-size:",";",";"],(0,g.Jt)("space.1"),(0,g.Jt)("colors.fg.muted"),(0,g.Jt)("fontSizes.1"),d.A),N=c.default.div.withConfig({displayName:"Timeline__TimelineBreak",componentId:"sc-1nkzbnu-3"})(["position:relative;z-index:1;height:24px;margin:0;margin-bottom:-",";margin-left:0;background-color:",";border:0;border-top:"," solid ",";",";"],(0,g.Jt)("space.3"),(0,g.Jt)("colors.canvas.default"),(0,g.Jt)("space.1"),(0,g.Jt)("colors.border.default"),d.A);b.displayName="Timeline.Item",j.displayName="Timeline.Badge",I.displayName="Timeline.Body",N.displayName="Timeline.Break";var w=Object.assign(y,{Item:b,Badge:j,Body:I,Break:N}),E=a(9457),L=a(6239),x=a(8793);function k(){return r.createElement("script",{type:"application/ld+json"},'\n          {\n            "@context": "https://schema.org",\n            "@type": "ProfilePage",\n            "dateCreated": "2019-05-19T17:52:51-07:00",\n            "mainEntity": {\n              "@type": "Person",\n              "name": "Michael C. Burkhart",\n              "familyName": "Burkhart",\n              "givenName": "Michael",\n              "honorificPrefix": "Dr.",\n              "honorificSuffix": "Ph.D.",\n              "nationality": "US",\n              "birthPlace": {\n                  "@type": "Place",\n                  "address": {\n                    "addressLocality": "Cincinnati",\n                    "addressRegion": "Ohio",\n                    "addressCountry": "US"\n                  }\n              },\n              "sameAs": [\n                  "https://burkh4rt.github.io",\n                  "https://www.wikidata.org/wiki/Q60057814",\n                  "https://viaf.org/viaf/439162664218455000792",\n                  "https://isni.org/isni/0000000502720308",\n                  "https://academictree.org/math/peopleinfo.php?pid=784634",\n                  "https://dl.acm.org/profile/99659347035",\n                  "https://aminer.cn/profile/62e47ef4d9f204418d68e981",\n                  "https://arxiv.org/a/burkhart_m_2.html",\n                  "https://bsky.app/profile/burkh4rt.bsky.social",\n                  "https://dblp.uni-trier.de/pid/223/5859.html",\n                  "https://app.dimensions.ai/details/entities/publication/author/ur.010351326437.47",\n                  "https://github.com/burkh4rt",\n                  "https://www.google.com/search?kgmid=/g/11fkdtqf1m",\n                  "https://scholar.google.com/citations?user=OcFnA0UAAAAJ",\n                  "https://cv.archives-ouvertes.fr/burkh4rt",\n                  "https://www.inaturalist.org/people/7851757",\n                  "https://www.instagram.com/burkh4rt",\n                  "https://www.linkedin.com/in/burkh4rt",\n                  "https://mathstodon.xyz/@burkh4rt",\n                  "https://mathgenealogy.org/id.php?id=246430",\n                  "https://mathscinet.ams.org/mathscinet/MRAuthorID/1296691",\n                  "https://openlibrary.org/works/OL9118704A",\n                  "https://openalex.org/A5005277906",\n                  "https://orcid.org/0000-0002-2772-5840",\n                  "https://www.webofscience.com/wos/author/record/HKP-2519-2023",\n                  "https://www.researchgate.net/profile/Michael-Burkhart-2",\n                  "https://www.scienceopen.com/user/32247102-0224-4f91-80cc-94e7fbc3256f",\n                  "https://www.scopus.com/authid/detail.uri?authorId=56094628500",\n                  "https://www.semanticscholar.org/author/Michael-C.-Burkhart/48820417",\n                  "https://twitter.com/burkh4rt",\n                  "https://x.com/burkh4rt",\n                  "https://zbmath.org/authors/?q=ai:burkhart.michael-c",\n                  "https://www.facebook.com/burkh4rt",\n                  "https://burkh4rt.tumblr.com",\n                  "https://gravatar.com/burkh4rt",\n                  "https://publons.com/researcher/2926384/michael-c-burkhart",\n                  "https://profiles.impactstory.org/u/0000-0002-2772-5840",\n                  "https://figshare.com/authors/Michael_C_Burkhart/6643982",\n                  "https://osf.io/9qvh7",\n                  "https://scholia.toolforge.org/author/Q60057814",\n                  "https://europepmc.org/authors/0000-0002-2772-5840",\n                  "https://www.lens.org/lens/profile/326252578",\n                  "https://www.c2d3.cam.ac.uk/directory/16451/michael-burkhart",\n                  "https://neuroscience.cam.ac.uk/member/burkh4rt/",\n                  "https://gitlab.developers.cam.ac.uk/mcb93",\n                  "https://gitlab.com/burkh4rt",\n                  "https://mcb93.user.srcf.net",\n                  "https://www.last.fm/user/burkh4rt",\n                  "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=5871438",\n                  "https://vsco.co/burkh4rt",\n                  "https://500px.com/p/burkh4rt",\n                  "https://rivyl-6aaaa-aaaaf-qaapq-cai.raw.ic0.app/0xe15a51c1e45df29fcfb928fc488616196757ca21",\n                  "https://oneblock.page/burkh4rt",\n                  "https://math.stackexchange.com/users/104086/burkh4rt",\n                  "https://stackoverflow.com/users/8345382/burkh4rt",\n                  "https://www.hackerrank.com/profile/burkh4rt",\n                  "https://linktr.ee/burkh4rt",\n                  "https://pypi.org/user/burkh4rt/",\n                  "https://hub.docker.com/u/burkh4rt",\n                  "https://astral.ninja/npub1skcf4dpqkqvceked9ejxxtf7a55fz2y3vt6kdaefqdhay9p4xuusg5mgkj",\n                  "https://snort.social/nprofile1qqsgtvy6ksstqxvvmvkjuerr95lw62y39zgk9atx7u5sxm7jzs6nwwgxqmrs5",\n                  "https://app.codesignal.com/profile/burkh4rt/",\n                  "https://leetcode.com/burkh4rt/",\n                  "https://imgur.com/user/burkh4rt",\n                  "https://archive.org/details/@burkh4rt?tab=web-archive",\n                  "https://www.behance.net/burkh4rt",\n                  "https://www.researchgate.net/profile/Michael-Burkhart-2",\n                  "https://deepai.org/profile/michael-c-burkhart",\n                  "https://ebird.org/profile/NDYwNzg1MA",\n                  "https://golden.com/wiki/Michael_Craig_Burkhart-R3EBJGX",\n                  "https://manifold.markets/burkh4rt",\n                  "https://www.metaculus.com/accounts/profile/172761/"\n              ],\n              "image": "https://commons.wikimedia.org/wiki/File:Michael_C._Burkhart.jpg",\n              "alumniOf": [\n                  {\n                    "@type": "CollegeOrUniversity",\n                    "name": "Purdue University",\n                    "sameAs": "https://www.purdue.edu"\n                  },\n                  {\n                    "@type": "CollegeOrUniversity",\n                    "name": "Rutgers University",\n                    "sameAs": "https://www.rutgers.edu"\n                  },\n                  {\n                    "@type": "CollegeOrUniversity",\n                    "name": "Brown University",\n                    "sameAs": "https://www.brown.edu"\n                  }\n              ]\n            }\n          }\n        ')}var D=a(2965),T=a(1502),S=a(594),z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAuNzggMTE3Ljc5Ij48ZyBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0iTTYwLjM5IDBBNjAuMzkgNjAuMzkgMCAwIDAgNDEuMyAxMTcuNjljMyAuNTYgNC4xMi0xLjMxIDQuMTItMi45MSAwLTEuNDQtLjA1LTYuMTktLjA4LTExLjI0QzI4LjU0IDEwNy4xOSAyNSA5Ni40MiAyNSA5Ni40MmMtMi43NS03LTYuNzEtOC44NC02LjcxLTguODQtNS40OC0zLjc1LjQxLTMuNjcuNDEtMy42NyA2LjA3LjQzIDkuMjYgNi4yMiA5LjI2IDYuMjIgNS4zOSA5LjIzIDE0LjEzIDYuNTcgMTcuNTcgNSAuNTUtMy45IDIuMTEtNi41NiAzLjg0LTguMDdDMzYgODUuNTUgMjEuODUgODAuMzcgMjEuODUgNTcuMjNBMjMuMzUgMjMuMzUgMCAwIDEgMjguMDggNDFjLS42My0xLjUyLTIuNy03LjY2LjU4LTE2IDAgMCA1LjA3LTEuNjIgMTYuNjEgNi4xOWE1Ny4zNiA1Ny4zNiAwIDAgMSAzMC4yNSAwQzg3IDIzLjQyIDkyLjExIDI1IDkyLjExIDI1YzMuMjggOC4zMiAxLjIyIDE0LjQ2LjU5IDE2YTIzLjM0IDIzLjM0IDAgMCAxIDYuMjEgMTYuMjFjMCAyMy4yLTE0LjEyIDI4LjMtMjcuNTcgMjkuOCAyLjE2IDEuODcgNC4wOSA1LjU1IDQuMDkgMTEuMTggMCA4LjA4LS4wNiAxNC41OS0uMDYgMTYuNTcgMCAxLjYxIDEuMDggMy40OSA0LjE0IDIuOUE2MC4zOSA2MC4zOSAwIDAgMCA2MC4zOSAwIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMTkxNzE3Ii8+PHBhdGggZD0iTTIyLjg3IDg2LjdjLS4xMy4zLS42LjM5LTEgLjE5cy0uNjktLjYxLS41NS0uOTEuNjEtLjM5IDEtLjE5LjY5LjYxLjU0LjkxWm0yLjQ1IDIuNzNjLS4yOS4yNy0uODUuMTQtMS4yNC0uMjhhLjkyLjkyIDAgMCAxLS4xNy0xLjI1Yy4zLS4yNy44NC0uMTQgMS4yNC4yOHMuNDcgMSAuMTcgMS4yNW0yLjM4IDMuNDhjLS4zNy4yNi0xIDAtMS4zNS0uNTJzLS4zNy0xLjE4IDAtMS40NCAxIDAgMS4zNS41MS4zNyAxLjE5IDAgMS40NW0zLjMgMy4zNmExLjEzIDEuMTMgMCAwIDEtMS41OS0uMjdjLS41My0uNDktLjY4LTEuMTgtLjM0LTEuNTRzMS0uMjcgMS41Ni4yMy42OCAxLjE4LjMzIDEuNTRabTQuNDYgMS45NWMtLjE1LjQ3LS44Mi42OS0xLjUxLjQ5cy0xLjEzLS43Ni0xLTEuMjQuODItLjcgMS41MS0uNDkgMS4xMy43NiAxIDEuMjRtNC45NC4zNmMwIC41LS41Ni45MS0xLjI4Ljkycy0xLjMtLjM4LTEuMzEtLjg4LjU2LS45MSAxLjI5LS45MiAxLjMuMzkgMS4zLjg4bTQuNi0uNzhjLjA5LjQ5LS40MSAxLTEuMTIgMS4xMnMtMS4zNS0uMTctMS40NC0uNjYuNDItMSAxLjEyLTEuMTIgMS4zNS4xNyAxLjQ0LjY2IiBzdHlsZT0iZmlsbDojMTkxNzE3Ii8+PC9nPjwvZz48L3N2Zz4=",v="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMzYiIGhlaWdodD0iMjA4IiB2aWV3Qm94PSIwIDAgNjIuNDQyIDU1LjAzMyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTczLjI5IDEyNy4yODdxMjUuMjgxIDIuNTggMzkuNzQ2IDE4LjQ3NWMuMzc2LjQxNCAxLjQyMiAxLjU4MyAyLjIyIDEuMjkzczEuNzc0LTIuMTAyIDIuMi0yLjczM2MuNjctLjk5MSAyLjczNy00LjUwOCA3LjIzOS01Ljk1NnMxMC4yMDYuMTYzIDEwLjQxMy4yMzVjLjM5LjEzNC43ODIuMzEuNTU4LjYyMy0uMjI1LjMxNC0yLjEzIDEuMDctMy40MjUgMy41MzgtMS4zODUgMi42NC0yLjIgNy43NDgtMi40IDguODc0YTI5LjIgMjkuMiAwIDAgMS01LjQwMSAxMi41ODdjLTQuOCA2LjQyOC0xMi4yMDggMTAuODU3LTIwLjgxNyAxMS42MTJhMjkgMjkgMCAwIDEtMTMuMzU2LTEuOTY1YzQuOTc2LS40ODcgMTAuOTk4LTIuODQxIDE1LjgzNi04LjQ3OCA2LjEwNC03LjExMy0uNTc2LTMuNDItNi4zMTItNC4zNjEtNC4wMTktLjY2LTcuMjktMi43MTgtMTIuNzgtOS42OCAxLjc2Mi0uNDkgNS4yMzMtMS4wOSA4LjAzNC0xLjIwOC01LjE4LTEuMTg2LTEyLjA1Mi00LjQ1Mi0xNS4wOTItOS40ODIgMi40NDMtLjg0NSA1LjY1OS0uNTM4IDguMjI3LS40MjctOS43ODQtNS44Ny0xNC4wMDMtOS4wMy0xNC44OS0xMi45NDdtMjMuMzc5LTYuMzcyYy41NzguMjggOS4yOTUgNC4wNTMgMTMuNTA1IDkuNzAzIDUuODggNy44OTMgNi4wOTkgMTUuNDk2IDQuNTAxIDEzLjc1OC0zLjc1My00LjA4NC03LjIwNC02LjY5OS0xMS40NzItOS42My0zLjI2Ny0yLjI0NS01LjQ1LTguNjQzLTYuNTM0LTEzLjgzMW0zMC4xOTMgMTkuMDU2YTEuNTg3IDEuNTg3IDAgMSAwIC4yNzYgMy4xNjIgMS41ODcgMS41ODcgMCAwIDAtLjI3Ni0zLjE2MiIgc3R5bGU9ImZpbGw6IzAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6LjI2NDU4MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTczLjI5IC0xMjAuOTE1KSIvPjwvc3ZnPg==",C="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDQiIGhlaWdodD0iMTQ0Ij48cGF0aCBmaWxsPSIjMjMxZjIwIiBkPSJNMTMzLjM4LjAzSDEwLjYzQzQuNzcuMDMuMDE3IDQuNzcgMCAxMC42M3YxMjIuNzRDMCAxMzkuMjQgNC43NiAxNDQgMTAuNjMgMTQ0aDEyMi43NGM1Ljg3IDAgMTAuNjMtNC43NiAxMC42My0xMC42M1YxMC42M0MxNDQgNC43NiAxMzkuMjQgMCAxMzMuMzcgMFpNNDIuOTIgMTIyLjY4SDIxLjI3VjUzLjloMjEuNjVaTTMyLjEgNDQuMzdjLTYuOTA2LjEzNi0xMi41NTktNS40NjMtMTIuNDktMTIuMzctLjEyNi02Ljk1IDUuNTQtMTIuNjE2IDEyLjQ5LTEyLjQ5IDYuOTQ2LS4xMiAxMi42MDYgNS41NDUgMTIuNDggMTIuNDkuMDY5IDYuOTAzLTUuNTc4IDEyLjUtMTIuNDggMTIuMzdtOTAuNjMgNzguMzZoLTIxLjY1Vjg1LjE3YzAtMTEuMDktNC43MS0xNC41MS0xMC43OC0xNC41MS02LjQzIDAtMTIuNzMgNC44NC0xMi43MyAxNC43OHYzNy4yOUg1NS45M1Y1NGgyMC44MnY5LjUzSDc3Qzc5LjEyIDU5LjI1IDg2LjQzIDUyIDk3LjYgNTJjMTIuMDggMCAyNS4xMyA3LjE3IDI1LjEzIDI4LjE3eiIgZGF0YS1uYW1lPSJMYXllciAxIi8+PC9zdmc+",O="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODcgMzIxLjA0Ij48cGF0aCBkPSJNMTA3IDAgMCA5NGg2OWM1IDQ1IDQxIDY0IDc4IDY3LTcgMTgtNCAyNyA3IDM5LTQzIDEtMTAzIDI2LTEwMyA2NyA0IDQ1IDYzIDU0IDkyIDU0IDM4IDEgODEtMTkgOTAtNTQgNC0zNS0xMC01NC0zMS03MS0yMy0xOC0yOC0yOC0yMS00MCAxNS0xNyAzNS0yNyAzOS01MSAyLTE3LTItMjgtNi00M2w0NS0zOC0xIDE2YTExLjkzIDExLjkzIDAgMCAwLTUgOXYxMDNjMiAxMyAyMiAxMSAyMyAwVjQ5YzAtMy0yLTctNS04VjE2bDE2LTE2Wm01OCAxNDFjLTYxIDEwLTg3LTg3LTM4LTk5IDU2LTExIDgzIDg2IDM4IDk5bS01IDczYzYwIDEzIDYxIDYzIDEwIDc4LTQ0IDktODItNC04MS0zMCAwLTI1IDM1LTQ4IDcxLTQ4Ii8+PC9zdmc+",B="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48ZyBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0iTTI1NiAxMjhBMTI4IDEyOCAwIDEgMSAxMjggMGExMjggMTI4IDAgMCAxIDEyOCAxMjgiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNODYuMyAxODYuMkg3MC45Vjc5LjFoMTUuNHptMjIuNi0xMDcuMWg0MS42YzM5LjYgMCA1NyAyOC4zIDU3IDUzLjYgMCAyNy41LTIxLjUgNTMuNi01Ni44IDUzLjZoLTQxLjh6bTE1LjQgOTMuM2gyNC41YzM0LjkgMCA0Mi45LTI2LjUgNDIuOS0zOS43QzE5MS43IDExMS4yIDE3OCA5MyAxNDggOTNoLTIzLjd6TTg4LjcgNTYuOGExMC4xIDEwLjEgMCAxIDEtMTAuMS0xMC4xIDEwLjE0IDEwLjE0IDAgMCAxIDEwLjEgMTAuMSIvPjwvZz48L2c+PC9zdmc+";const Q=()=>r.createElement(r.Fragment,null,r.createElement("html",{lang:"en"}),r.createElement("title",null,"Michael C. Burkhart's website"),r.createElement("meta",{charset:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.createElement("meta",{name:"author",content:"Michael C. Burkhart"}),r.createElement("meta",{name:"description",content:"Michael Burkhart's homepage. Snippets from work and life, with links."}),r.createElement("meta",{property:"og:title",content:"Michael Burkhart's website"}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image",name:"image",content:"https://burkh4rt.github.io/m.svg"}),r.createElement("meta",{property:"og:url",content:"https://burkh4rt.github.io"}),r.createElement("meta",{property:"og:description",content:"Michael Burkhart's homepage. Snippets from work and life, with links."}),r.createElement("meta",{property:"og:locale",content:"en_US"}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:site",content:"burkh4rt"}),r.createElement("meta",{name:"twitter:creator",content:"burkh4rt"}),r.createElement("meta",{name:"twitter:title",content:"Michael Burkhart's website"}),r.createElement("meta",{name:"twitter:description",content:"Michael Burkhart's homepage. Snippets from work and life, with links."}),r.createElement("meta",{property:"twitter:image",content:"https://burkh4rt.github.io/m.webp"}),r.createElement("meta",{name:"twitter:dnt",content:"on"}),r.createElement("link",{rel:"me",href:"https://twitter.com/burkh4rt"}),r.createElement("link",{rel:"me",href:"https://mathstodon.xyz/@burkh4rt"}),r.createElement("link",{rel:"canonical",href:"https://burkh4rt.github.io"}),r.createElement("meta",{name:"google-site-verification",content:"RBomW7izIX8odL5WjXJS01CR5JonJ1lcE3EsTAbVDPk"}),r.createElement(k,null));function Y(){return r.createElement(r.Fragment,null,r.createElement("body",null,r.createElement(D.v,null),r.createElement(i.NP,{theme:T.D},r.createElement(o.A,null,r.createElement(s.O7,null,r.createElement(s.O7.Pane,{position:"start",width:500,divider:"none"},r.createElement(l.A,{height:400},r.createElement(n.S,{src:"../images/profile_img.jpg",alt:"photo of Michael C. Burkhart",aspectRatio:1,width:300,height:300,style:{borderRadius:"50%"},formats:["auto","webp","avif"],placeholder:"blurred",__imageData:a(3960)}),r.createElement(l.A,{height:10}),r.createElement(h,{as:"title",sx:{fontWeight:"lighter"}},"Michael C. Burkhart"),r.createElement(l.A,{height:10}),r.createElement(A.A,{"aria-label":"Main"},r.createElement(A.A.Links,null,r.createElement(A.A.Link,{href:"https://www.linkedin.com/in/burkh4rt/",target:"_blank"},r.createElement("img",{src:C,alt:"LinkedIn",height:"20px"})),r.createElement(A.A.Link,{href:"https://github.com/burkh4rt/",target:"_blank"},r.createElement("img",{src:z,alt:"GitHub",height:"20px"})),r.createElement(A.A.Link,{href:"https://scholar.google.com/citations?user=OcFnA0UAAAAJ",target:"_blank"},r.createElement("img",{src:O,alt:"Google Scholar",height:"20px"})),r.createElement(A.A.Link,{href:"https://orcid.org/0000-0002-2772-5840",target:"_blank"},r.createElement("img",{src:B,alt:"ORCID",height:"20px"})),r.createElement(A.A.Link,{href:"https://www.inaturalist.org/people/burkh4rt",target:"_blank"},r.createElement("img",{src:v,alt:"iNaturalist",height:"20px"})))))),r.createElement(s.O7.Content,{divider:"none",style:{paddingTop:0}},r.createElement(f.A,{as:"h3",style:{paddingTop:0,fontWeight:"lighter"}},"About Me"),r.createElement(w,{as:"section",className:"anim-fade-in",style:{maxWidth:"calc(max(75%,500px))"}},r.createElement(w.Item,null,r.createElement(w.Badge,null,r.createElement(E.A,{icon:x.lw6})),r.createElement(w.Body,{sx:{fontSize:"1rem"}},"I earned my Ph.D. in 2019 from Brown University's Division of Applied Mathematics. For my"," ",r.createElement(L.A,{href:"https://doi.org/10.26300/nhfp-xv22",target:"_blank",rel:"noopener noreferrer",inline:!0,style:{whiteSpace:"nowrap"}},"dissertation ",r.createElement(x.Heq,{verticalAlign:"middle"}))," ","(",r.createElement(L.A,{href:"https://doi.org/10.6084/m9.figshare.8085749",target:"_blank",rel:"noopener noreferrer",inline:!0,style:{whiteSpace:"nowrap"}},"presentation ",r.createElement(x.Heq,{verticalAlign:"middle"})),"), I derived a novel approach to Bayesian filtering, the Discriminative Kalman Filter, motivated by and developed with my advisor M. Harrison and collaborators D. Brandman and L. Hochberg. We validated and successfully implemented this filter as part of the"," ",r.createElement(L.A,{href:"https://www.braingate.org",target:"_blank",rel:"noopener noreferrer",inline:!0},"BrainGate")," ","Clinical Trial that enables participants with quadriplegia to communicate and interact with their environments in real time using mental imagery alone.")),r.createElement(w.Item,null,r.createElement(w.Badge,null,r.createElement(E.A,{icon:x.fSU})),r.createElement(w.Body,{sx:{fontSize:"1rem"}},"I then spent three years working as a machine learning scientist at Adobe in California. My main projects involved customer segmentation and causal inference. I also supervised intern projects in representation learning for semi-supervised classification (",r.createElement(L.A,{href:"https://doi.org/10.1007/978-3-030-50420-5_22",target:"_blank",rel:"noopener noreferrer",inline:!0,style:{whiteSpace:"nowrap"}},"paper ",r.createElement(x.Heq,{verticalAlign:"middle"})),","," ",r.createElement(L.A,{href:"https://patents.google.com/patent/US11455518B2",target:"_blank",rel:"noopener noreferrer",inline:!0,style:{whiteSpace:"nowrap"}},"patent ",r.createElement(x.Heq,{verticalAlign:"middle"})),") and causal inference (",r.createElement(L.A,{href:"https://doi.org/10.1016/j.jocs.2023.102054",target:"_blank",rel:"noopener noreferrer",inline:!0,style:{whiteSpace:"nowrap"}},"paper ",r.createElement(x.Heq,{verticalAlign:"middle"})),","," ",r.createElement(L.A,{href:"https://patents.google.com/patent/US20230376776A1",target:"_blank",rel:"noopener noreferrer",inline:!0,style:{whiteSpace:"nowrap"}},"patent pending ",r.createElement(x.Heq,{verticalAlign:"middle"})),","," ",r.createElement(L.A,{href:"https://doi.org/10.6084/m9.figshare.24990633",target:"_blank",rel:"noopener noreferrer",inline:!0,style:{whiteSpace:"nowrap"}},"presentation ",r.createElement(x.Heq,{verticalAlign:"middle"})),").")),r.createElement(w.Item,null,r.createElement(w.Badge,null,r.createElement(E.A,{icon:x.fSU})),r.createElement(w.Body,{sx:{fontSize:"1rem"}},"In 2021, I joined Cambridge University as a research associate to develop machine learning-based approaches for the early diagnosis of neurodegenerative disease (",r.createElement(L.A,{href:"https://doi.org/10.1002/alz.062434",target:"_blank",rel:"noopener noreferrer",inline:!0,style:{whiteSpace:"nowrap"}},"abstract ",r.createElement(x.Heq,{verticalAlign:"middle"})),","," ",r.createElement(L.A,{href:"https://www.c2d3.cam.ac.uk/events/trustworthy-ai-medical-and-health-research-workshop",target:"_blank",rel:"noopener noreferrer",inline:!0,style:{whiteSpace:"nowrap"}},"presentation ",r.createElement(x.Heq,{verticalAlign:"middle"})),"). I also investigated how sequential inference can be applied to optimization (",r.createElement(L.A,{href:"https://doi.org/10.1007/s11590-022-01895-5",target:"_blank",rel:"noopener noreferrer",inline:!0,style:{whiteSpace:"nowrap"}},"paper ",r.createElement(x.Heq,{verticalAlign:"middle"})),") and conditions for non-coprime actions in abstract groups to have fixed points (",r.createElement(L.A,{href:"https://doi.org/10.1017/prm.2023.96",target:"_blank",rel:"noopener noreferrer",inline:!0,style:{whiteSpace:"nowrap"}},"paper ",r.createElement(x.Heq,{verticalAlign:"middle"})),")."))),r.createElement(l.A,{height:10}),r.createElement(A.A,{"aria-label":"Main",style:{display:"flex",flexDirection:"row",justifyContent:"flex-end"}},r.createElement(A.A.Links,null,r.createElement(A.A.Link,{href:"/pubs",rel:"noopener noreferrer",sx:{fontSize:"1rem"}},"publications"),r.createElement(A.A.Link,{href:"/links",rel:"noopener noreferrer",sx:{fontSize:"1rem"}},"links"),r.createElement(A.A.Link,{href:"/cv.pdf",target:"_blank",rel:"noopener noreferrer",sx:{fontSize:"1rem"}},"c.v."))),r.createElement(l.A,{height:10})),r.createElement(S.A,null))))))}},3960:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBAP/aAAwDAQACEAMQAAABnsx0DqwEMtjTot//xAAdEAACAgIDAQAAAAAAAAAAAAABAgARAxIhIiMx/9oACAEBAAEFAl4gbSHKLLe2VqTS4TbfRhPT/8QAFxEBAQEBAAAAAAAAAAAAAAAAARARQf/aAAgBAwEBPwEDJyf/xAAXEQEAAwAAAAAAAAAAAAAAAAAQARFB/9oACAECAQE/Abk0/8QAHhAAAQMEAwAAAAAAAAAAAAAAAAERQQIQITESInH/2gAIAQEABj8C7Y9NoZqVSrlKSQO49tIf/8QAGxAAAwADAQEAAAAAAAAAAAAAAAERITFBUdH/2gAIAQEAAT8hW2ktuzg2lbV8NxXqJqatGQmbycF8VUdQ63ssbzJrtmen/9oADAMBAAIAAwAAABB/1/z/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQIf/aAAgBAwEBPxBqmUvWf//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8QdCDx/8QAHRABAAMBAAIDAAAAAAAAAAAAAQARITFBcVGBkf/aAAgBAQABPxCiFRAlL8wWnYYMTyzlQ9BOIqRzH3g5vx2PCsd++v5GKGW3SA+4sUrTtwYgVwrrVbKcFQIcMzs//9k="},"images":{"fallback":{"src":"/static/71fabf8f6720f15b915fafaaf53d36f7/0fdf4/profile_img.jpg","srcSet":"/static/71fabf8f6720f15b915fafaaf53d36f7/91a6d/profile_img.jpg 75w,\\n/static/71fabf8f6720f15b915fafaaf53d36f7/96deb/profile_img.jpg 150w,\\n/static/71fabf8f6720f15b915fafaaf53d36f7/0fdf4/profile_img.jpg 300w,\\n/static/71fabf8f6720f15b915fafaaf53d36f7/a89ca/profile_img.jpg 600w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/71fabf8f6720f15b915fafaaf53d36f7/eb54c/profile_img.avif 75w,\\n/static/71fabf8f6720f15b915fafaaf53d36f7/81307/profile_img.avif 150w,\\n/static/71fabf8f6720f15b915fafaaf53d36f7/aa5b9/profile_img.avif 300w,\\n/static/71fabf8f6720f15b915fafaaf53d36f7/0c8d0/profile_img.avif 600w","type":"image/avif","sizes":"(min-width: 300px) 300px, 100vw"},{"srcSet":"/static/71fabf8f6720f15b915fafaaf53d36f7/18188/profile_img.webp 75w,\\n/static/71fabf8f6720f15b915fafaaf53d36f7/c65bc/profile_img.webp 150w,\\n/static/71fabf8f6720f15b915fafaaf53d36f7/078c3/profile_img.webp 300w,\\n/static/71fabf8f6720f15b915fafaaf53d36f7/6d09e/profile_img.webp 600w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')}}]);
//# sourceMappingURL=component---src-pages-index-jsx-c41eee877dd0d0852940.js.map