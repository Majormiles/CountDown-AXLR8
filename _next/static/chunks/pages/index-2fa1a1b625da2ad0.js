(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(35855)}])},45562:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var l=s(85893),r=s(67294),a=s(30992),i=s(43538),n=s(66623),c=s(24824);function o(e){let{width:t,height:s,src:o,fallbackSrc:d,fallbackColor:m,alt:x,onClick:h,domRef:u,className:g,style:f}=e,b=(0,r.useRef)(null);(0,n.e)(b,{onClick:h});let p=(0,a.Do)([o,d].flat()),j=p.join(" "),[v,N]=(0,r.useState)(0),w=p[v]||d,y=null!=x?x:(0,c.a)(null!=w?w:"");return(0,r.useEffect)(()=>{N(0)},[j]),(0,r.useEffect)(()=>{var e;null===(e=b.current)||void 0===e||e.addEventListener("error",e=>{N(e=>e+1)})},[]),(0,l.jsx)("img",{width:t,height:s,ref:(0,i.Z)(u,b),className:"Image ".concat(o||p.length?"":"invisible"," ").concat(null!=g?g:""),src:w,alt:y,style:{...f,backgroundColor:m}})}},65629:function(e,t,s){"use strict";s.d(t,{Z:function(){return h}});var l=s(85893),r=s(67294),a=s(66180),i=s(57949),n=s(71849),c=s(43538),o=s(10929),d=s(7432),m=s(84055),x=s(80592);function h(e){let{componentRef:t,className:s,panelClassName:d,arrowClassName:h,children:g,forceOpen:f,placement:b="top",triggerBy:p,closeBy:j="click-outside-but-trigger",disable:v,defaultOpen:N,darkGradient:w=!1}=e,y=(0,r.useRef)(),Z=(0,r.useMemo)(()=>(0,o.kp)(g,u,e=>(0,n.Z)(e,{$isRenderByMain:!0,$popoverRef:y})),[g]),k=(0,i.ZP)(e=>e.isMobile);return(0,l.jsxs)(x.Z,{componentRef:(0,c.Z)(t,y),canOpen:!v,placement:b,defaultOpen:N,triggerBy:k?null!=p?p:"click":null!=p?p:"hover",forceOpen:f,className:s,triggerDelay:100,closeBy:j,closeDelay:100,children:[(0,l.jsx)(x.Z.Button,{children:g}),(0,l.jsx)(x.Z.Panel,{children(e){let{locationInfo:t}=e;return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("div",{className:(0,a.m)("w-2 h-2 absolute bg-[#0C0926] rotate-45 -translate-x-1 -translate-y-1",w?"bg-[transparent]":"",h),style:t?{top:t.arrowTopRelativeToPanel,left:t.arrowLeftRelativeToPanel}:{visibility:"hidden"}}),(0,l.jsx)(m.Z,{className:(0,a.m)("TooltipPanel p-4 bg-[#0C0926] rounded-lg text-xs text-white",d),style:{background:w?"linear-gradient(140.14deg, rgba(0, 182, 191, 0.15) 0%, rgba(27, 22, 89, 0.1) 86.61%), linear-gradient(321.82deg, #18134D 0%, #1B1659 100%)":"default",border:w?"1px solid  rgba(171, 196, 255, 0.2)":"none"},children:Z})]})}})]})}function u(e){let{$isRenderByMain:t,$popoverRef:s,children:r,className:a}=e;return t?(0,l.jsx)("div",{className:a,children:(0,d.u)(r,[null==s?void 0:s.current])}):null}h.Panel=u},11062:function(e,t,s){"use strict";function l(e){"document"in globalThis&&Object.assign(globalThis.document.createElement("a"),{target:"_blank",href:e,rel:"nofollow noopener noreferrer"}).click()}s.d(t,{Z:function(){return l}})},84975:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var l=s(71633);function r(e){let{groupSeparator:t=",",fractionLength:s=2,groupSize:r=3}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===e?"0":[e=>(0,l.B)(e),e=>"auto"===s?e:function(e,t){var s;let[,l="",r="",a=""]=null!==(s=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==s?s:[];return a?a.length<t?String(e):Number(e).toFixed(t):String(e)}(e,s),e=>{var s;let[,l="",a="",i=""]=null!==(s=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==s?s:[],n=[...a].reduceRight((e,s,l,a)=>{let i=a.length-1-l;return s+(0!==i&&i%r==0?t:"")+e},"");return i?"".concat(l).concat(n,".").concat(i):"".concat(l).concat(n)}].reduce((e,t)=>t(e),e)}},32814:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var l=s(67294);function r(e){(0,l.useEffect)(()=>{var t;globalThis.document&&e&&Reflect.set(null!==(t=globalThis.document)&&void 0!==t?t:{},"title",e)},[])}},49399:function(e,t,s){"use strict";s.d(t,{N:function(){return r}});var l=s(67294);function r(){let{loop:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,s]=(0,l.useState)(0),r=(0,l.useCallback)(()=>s(e=>e+1),[]);return(0,l.useEffect)(()=>{if(!e)return;let t=globalThis.setInterval(r,e);return()=>globalThis.clearInterval(t)},[]),[t,r]}},35855:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return A}});var l=s(85893),r=s(57949),a=s(67294),i=s(82596),n=s(49399),c=s(23612),o=s(11163),d=s(37543),m=s(84055),x=s(10959),h=s(342),u=s(41520),g=s(45562),f=s(88644),b=s(66180),p=s(79609),j=s(84975),v=s(49552),N=s(80546),w=s(71633);function y(e){var t,s;let{className:r,currentValue:i,children:n,initValue:c,totalDuration:o=600,eachLoopDuration:d=50,maxDeltaPercent:m,groupSeparator:x=",",groupSize:h=3,fractionLength:u,formatter:g=e=>(0,j.Z)(e,{groupSeparator:x,groupSize:h,fractionLength:u})}=e,f=null!==(t=null!=i?i:n)&&void 0!==t?t:p.xEJ,y=(0,a.useRef)(null!=c?c:f),Z=(0,a.useRef)(null),k=e=>String(g(e));if(null!=m){let T=(0,N.lu)(f,y.current),R=(0,N.hi)(T,f),S=(0,v.lt)(R,-m)||(0,v.gt)(R,m);S&&(y.current=(s=y.current,(0,N.uZ)((0,N.dC)(f,1-1*m),s,(0,N.dC)(f,1+1*m))))}return(0,a.useEffect)(()=>{let e=(0,N.hi)((0,N.lu)(f,y.current),o/d),t=(0,v.lt)(y.current,f),s=setInterval(()=>{y.current=(0,w.B)((0,N.IH)(e,y.current));let l=(t?v.gt:v.lt)(y.current,i);if(l)Z.current&&(Z.current.innerHTML=k((0,w.B)(i))),clearInterval(s);else{let r=(0,w.B)(y.current),a=k(r);Z.current&&(Z.current.innerHTML=a)}},d);return()=>clearInterval(s)},[f,c]),(0,l.jsx)("div",{ref:Z,className:(0,b.m)("NumberJelly tabular-nums inline-block",r),children:k((0,w.B)(y.current))})}var Z=s(31992),k=s(65629),T=s(11062),R=s(32814);function S(e){let{children:t}=e;return(0,a.useEffect)(()=>{let e;"document"in globalThis&&document.addEventListener("scroll",()=>{globalThis.document.body.style.setProperty("--is-scrolling","1"),globalThis.clearTimeout(e),e=globalThis.setTimeout(()=>{globalThis.document.body.style.setProperty("--is-scrolling","0")},500)},{passive:!0})},[]),(0,R.Z)("Raydium"),(0,l.jsx)("div",{className:"flow-root overflow-x-hidden",style:{backgroundColor:"#141041",backgroundImage:"url('/backgroundImages/home-page-bg-lights.webp')",backgroundSize:"100% 95%",backgroundRepeat:"no-repeat"},children:t})}function C(){let e=(0,r.ZP)(e=>e.isMobile),{push:t}=(0,o.useRouter)();return(0,l.jsxs)(Z.Z,{className:"justify-between mobile:justify-center py-12 px-[min(160px,8vw)]",children:[(0,l.jsx)(g.Z,{src:"/logo/logo-with-text.svg"}),!e&&(0,l.jsx)(d.Z,{className:"frosted-glass-teal",onClick(){t("/swap")},children:"Launch app"})]})}function P(){let e=(0,r.ZP)(e=>e.isMobile),{push:t}=(0,o.useRouter)(),{tvl:s,totalvolume:x}=function(){let[e]=(0,n.N)({loop:6e4}),[t,s]=(0,c.Z)("tvl"),[l,r]=(0,c.Z)("totalVolume"),d=(0,a.useRef)(),{pathname:m}=(0,o.useRouter)(),x=(0,a.useCallback)(async()=>{let e=await (0,i.Z)("https://api.raydium.io/v2/main/info",{ignoreCache:!0}),{tvl:a,totalvolume:n}=null!=e?e:{};null!=a&&a!=t&&s(a),null!=n&&n!=l&&r(n)},[e,t,l]);return(0,a.useEffect)(()=>{if("/"===m)return x(),d.current=setInterval(x,6e4),()=>{clearInterval(d.current)}},[m]),{tvl:t,totalvolume:l}}();return(0,l.jsxs)("section",{className:"grid-child-center grid-cover-container mb-16 relative",children:[(0,l.jsx)(g.Z,{src:"/backgroundImages/home-bg-element-1.png",className:"w-[744px] mobile:w-[394px]"}),(0,l.jsxs)("div",{className:"grid-cover-content children-center",children:[(0,l.jsxs)("div",{className:"font-light text-[64px] mobile:text-[30px] text-white mb-4 mt-14 mobile:mt-9 leading-[60px] mobile:leading-[32px]",children:["An avenue for ",(0,l.jsx)("br",{}),"the evolution of"," ",(0,l.jsx)("span",{className:"font-bold text-transparent bg-clip-text",style:{background:"radial-gradient(circle at top right,#39d0d8,#2b6aff)",backgroundClip:"text",WebkitBackgroundClip:"text"},children:"DeFi"})]}),(0,l.jsxs)("div",{className:"font-normal text-xl mobile:text-base text-[#adc6ff] mb-6",children:["Light-speed ",(0,l.jsx)("b",{children:"swaps"}),". Next-level ",(0,l.jsx)("b",{children:"liquidity"}),". ",e?(0,l.jsx)("br",{}):""," Friction-less ",(0,l.jsx)("b",{children:"yield"}),"."]}),(0,l.jsxs)(Z.Z,{className:"gap-8 mobile:gap-4 mb-16 mobile:mb-6 grid grid-cols-2-fr",children:[(0,l.jsx)(d.Z,{className:"home-rainbow-button-bg text-white mobile:text-xs px-5 mobile:px-4",onClick(){t("/swap")},children:(0,l.jsxs)(Z.Z,{className:"items-center gap-2",children:[(0,l.jsx)("div",{children:"Launch app"}),(0,l.jsx)(u.Z,{heroIconName:"chevron-right",size:"xs"})]})}),(0,l.jsx)(d.Z,{className:"frosted-glass-teal text-white mobile:text-xs px-5 mobile:px-4 forsted-blur",onClick(){(0,T.Z)("https://raydium.gitbook.io/raydium/")},children:(0,l.jsxs)(Z.Z,{className:"items-center gap-2",children:[(0,l.jsx)("div",{children:"Read docs"}),(0,l.jsx)(u.Z,{iconSrc:"/icons/gitbook.svg",size:"sm"})]})})]}),(0,l.jsxs)(Z.Z,{className:"gap-6 mobile:gap-3 mb-9 grid grid-cols-2-fr",children:[(0,l.jsxs)(m.Z,{className:"frosted-glass-smoke forsted-blur-sm rounded-3xl mobile:rounded-2xl p-6 mobile:py-3 mobile:px-6 mobile:min-w-[156px] min-w-[250px] tablet:min-w-[250px]",children:[(0,l.jsx)("div",{className:"text-sm text-[#adc6ff] mb-1 mobile:text-[8px]",children:"TOTAL VALUE LOCKED"}),(0,l.jsxs)(Z.Z,{className:"justify-center text-xl mobile:text-xs font-normal text-white tracking-widest mobile:tracking-wider",children:[(0,l.jsx)("div",{className:"mr-1",children:"$"}),s&&(0,l.jsx)(y,{fractionLength:0,eachLoopDuration:400,totalDuration:48e4,maxDeltaPercent:.05,currentValue:s,initValue:s?.999*s:void 0})]})]}),(0,l.jsxs)(m.Z,{className:"frosted-glass-smoke forsted-blur-sm rounded-3xl mobile:rounded-2xl p-6 mobile:py-3 mobile:px-6 mobile:min-w-[156px] min-w-[250px] tablet:min-w-[250px]",children:[(0,l.jsx)("div",{className:"text-sm text-[#adc6ff] mb-1 mobile:text-[8px]",children:"TOTAL TRADING VOLUME"}),(0,l.jsxs)(Z.Z,{className:"justify-center text-xl mobile:text-xs font-normal text-white tracking-widest mobile:tracking-wider",children:[(0,l.jsx)("div",{className:"mr-1",children:"$"}),x&&(0,l.jsx)(y,{fractionLength:0,eachLoopDuration:200,totalDuration:48e4,maxDeltaPercent:.05,currentValue:x,initValue:x?.999*x:void 0})]})]})]}),(0,l.jsx)(g.Z,{src:"/logo/build-on-slogan.svg",className:"transform mobile:scale-75"})]})]})}function I(){let{push:e}=(0,o.useRouter)();return(0,l.jsxs)("section",{className:"grid-child-center overflow-hidden relative mx-auto tablet:mx-5 px-24 tablet:p-8 max-w-[1320px] min-h-[506px] hidden rounded-[100px] mobile:rounded-[40px]",style:{background:"radial-gradient(at center top, transparent 20%, hsl(245, 60%, 16%, 0.2)), url('/backgroundImages/home-page-section1-light.webp'), #1b1659",boxShadow:"8px 8px 10px rgba(20, 16, 65, 0.05), -8px -8px 10px rgba(197, 191, 255, 0.05), inset 0 6px 20px rgba(197, 191, 255, 0.2), inset 0 -1px 25px rgba(197, 191, 255, 0.1)",backgroundSize:"100% 100%"},children:[(0,l.jsx)("div",{className:"absolute inset-0 opacity-30",style:{background:"linear-gradient(245.22deg, #da2eef 7.97%, #2b6aff 49.17%, #39d0d8 92.1%)",maskImage:"url('/backgroundImages/home-bg-element-2.png')",WebkitMaskImage:"url('/backgroundImages/home-bg-element-2.png')",maskSize:"cover",WebkitMaskSize:"cover"}}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("div",{className:"w-10 h-px my-2 mx-auto rounded-full",style:{background:"radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)"}}),(0,l.jsx)("div",{className:"text-lg",children:"A suite of features powering the evolution of DeFi on Solana"})]}),(0,l.jsxs)(h.Z,{className:"gap-5 grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1",children:[(0,l.jsxs)(m.Z,{className:"flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",children:[(0,l.jsx)("div",{className:"frosted-glass-teal p-3 mb-3 rounded-xl",children:(0,l.jsx)(u.Z,{iconSrc:"/icons/home-trade.svg"})}),(0,l.jsx)("div",{className:"font-semibold text-lg text-white mb-2",children:"Trade"}),(0,l.jsx)("div",{className:"font-light text-sm text-[#c4d6ff] mb-5",children:"Swap or Trade quickly and cheaply."}),(0,l.jsx)(d.Z,{className:"frosted-glass-teal",onClick(){e("/swap")},children:"Enter Exchange"})]}),(0,l.jsxs)(m.Z,{className:"flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",children:[(0,l.jsx)("div",{className:"frosted-glass-teal p-3 mb-3 rounded-xl",children:(0,l.jsx)(u.Z,{iconSrc:"/icons/home-yield.svg"})}),(0,l.jsx)("div",{className:"font-semibold text-lg text-white mb-2",children:"Yield"}),(0,l.jsx)("div",{className:"font-light text-sm text-[#c4d6ff] mb-5",children:"Earn yield through fees and yield farms."}),(0,l.jsx)(d.Z,{className:"frosted-glass-teal",onClick(){e("/farms")},children:"Enter Farms"})]}),(0,l.jsxs)(m.Z,{className:"flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",children:[(0,l.jsx)("div",{className:"frosted-glass-teal p-3 mb-3 rounded-xl",children:(0,l.jsx)(u.Z,{iconSrc:"/icons/home-pool.svg"})}),(0,l.jsx)("div",{className:"font-semibold text-lg text-white mb-2",children:"Pool"}),(0,l.jsx)("div",{className:"font-light text-sm text-[#c4d6ff] mb-5",children:"Provide liquidity for any SPL token."}),(0,l.jsx)(d.Z,{className:"frosted-glass-teal",onClick(){e("/liquidity/add")},children:"Add Liquidity"})]}),(0,l.jsxs)(m.Z,{className:"flex-1 children-center frosted-glass-lightsmoke forsted-blur-sm py-6 px-12 rounded-3xl",children:[(0,l.jsx)("div",{className:"frosted-glass-teal p-3 mb-3 rounded-xl",children:(0,l.jsx)(u.Z,{iconSrc:"/icons/home-acceleraytor.svg"})}),(0,l.jsx)("div",{className:"font-semibold text-lg text-white mb-2",children:"AcceleRaytor"}),(0,l.jsx)("div",{className:"font-light text-sm text-[#c4d6ff] mb-5",children:"Launchpad for new Solana projects."}),(0,l.jsx)(d.Z,{className:"frosted-glass-teal",onClick(){e("https://v1.raydium.io/acceleRaytor")},children:"View Projects"})]})]})]})]})}function L(){let e=(0,r.ZP)(e=>e.isMobile),t=(0,r.ZP)(e=>e.isTablet);return(0,l.jsxs)("section",{className:"grid-child-center grid-cover-container",children:[(0,l.jsx)("div",{className:"w-screen h-full",style:{background:e||t?"url('/backgroundImages/home-bg-element-4.png') 0% 0% / 100% 100%":"url('/backgroundImages/home-bg-element-3.png') 0% 0% / 100% 100%"}}),(0,l.jsxs)("div",{className:"max-w-[1220px] px-14 tablet:px-4 mt-28 mx-16 tablet:mx-4 mb-44",children:[(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("div",{className:"w-10 h-px my-2 mx-auto rounded-full",style:{background:"radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)"}}),(0,l.jsx)("div",{className:"text-lg",children:"Raydium provides Ecosystem-Wide Liquidity for users and projects"})]}),(0,l.jsxs)(h.Z,{className:"gap-6 grid-cols-3 tablet:grid-cols-1 mobile:grid-cols-1 justify-items-center",children:[(0,l.jsxs)(m.Z,{className:"max-w-[356px] grid children-center frosted-glass-smoke forsted-blur-sm py-6 px-10 rounded-3xl",style:{gridTemplateRows:"auto auto 1fr",alignItems:"normal"},children:[(0,l.jsx)("div",{className:"frosted-glass-teal p-3 mb-3 rounded-xl",children:(0,l.jsx)(u.Z,{iconSrc:"/icons/home-order-book-AMM.svg"})}),(0,l.jsx)("div",{className:"font-semibold text-lg text-white mb-2",children:"Order Book AMM"}),(0,l.jsxs)("div",{className:"font-light text-[#c4d6ff] mb-5",children:["Raydium","'","s AMM interacts with Serum","'","s central limit order book, meaning that pools have access to all order flow and liquidity on Serum, and vice versa."]})]}),(0,l.jsxs)(m.Z,{className:"max-w-[356px] grid children-center frosted-glass-smoke forsted-blur-sm py-6 px-10 rounded-3xl",style:{gridTemplateRows:"auto auto 1fr",alignItems:"normal"},children:[(0,l.jsx)("div",{className:"frosted-glass-teal p-3 mb-3 rounded-xl",children:(0,l.jsx)(u.Z,{iconSrc:"/icons/home-yield.svg"})}),(0,l.jsx)("div",{className:"font-semibold text-lg text-white mb-2",children:"Best Price Swaps"}),(0,l.jsx)("div",{className:"font-light text-[#c4d6ff] mb-5",children:"Raydium determines whether swapping within a liquidity pool or through the Serum order book will provide the best price for the user, and executes accordingly."})]}),(0,l.jsxs)(m.Z,{className:"max-w-[356px] grid children-center frosted-glass-smoke forsted-blur-sm py-6 px-10 rounded-3xl",style:{gridTemplateRows:"auto auto 1fr",alignItems:"normal"},children:[(0,l.jsx)("div",{className:"frosted-glass-teal p-3 mb-3 rounded-xl",children:(0,l.jsx)(u.Z,{iconSrc:"/icons/home-pool.svg"})}),(0,l.jsx)("div",{className:"font-semibold text-lg text-white mb-2",children:"High-Liquidity Launches"}),(0,l.jsx)("div",{className:"font-light text-[#c4d6ff] mb-5",children:"AcceleRaytor offers projects a straightforward 3 step process to raise funds and bootstrap liquidity on Raydium and Serum."})]})]})]})]})}function M(){return(0,l.jsxs)("section",{className:"children-center mb-24",children:[(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("div",{className:"text-lg",children:"Partners"}),(0,l.jsx)("div",{className:"w-10 h-px my-2 mx-auto rounded-full",style:{background:"radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)"}})]}),(0,l.jsxs)(Z.Z,{className:"w-full justify-around px-56 tablet:px-0 mobile:px-0 tablet:grid mobile:grid gap-16 gap-y-4",children:[(0,l.jsx)(g.Z,{src:"/logo/solana-text-logo.svg"}),(0,l.jsx)(g.Z,{src:"/logo/serum-text-logo.svg"})]})]})}function E(){let e=(0,r.ZP)(e=>e.isMobile),t=(0,r.ZP)(e=>e.isTablet);return(0,l.jsxs)("footer",{className:"pt-56 overflow-hidden",style:{background:t||e?"url('/backgroundImages/home-footer-bg.webp') 0 0 / auto 100%":"url('/backgroundImages/home-footer-bg.webp') 0 0 / 100% 100%"},children:[(0,l.jsxs)(h.Z,{className:"mobile:gap-14 justify-around px-[10%] grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-1 gap-16 gap-y-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("div",{className:"text-sm mb-3 tablet:text-center",children:"ABOUT"}),(0,l.jsx)("div",{className:"w-6 h-px my-2 rounded-full tablet:mx-auto",style:{background:"radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)"}})]}),(0,l.jsxs)(x.Z,{className:"gap-6",children:[(0,l.jsx)(f.Z,{className:"text-[#c4d6ff] hover:text-white tablet:text-center",href:"https://raydium.gitbook.io/raydium/",children:"Documentation"}),(0,l.jsx)(f.Z,{className:"text-[#c4d6ff] hover:text-white tablet:text-center",href:"https://coinmarketcap.com/currencies/raydium/",children:"CoinMarketCap"}),(0,l.jsx)(f.Z,{className:"text-[#c4d6ff] hover:text-white tablet:text-center",href:"https://www.coingecko.com/en/coins/raydium",children:"CoinGecko"}),(0,l.jsx)(f.Z,{openInNewTab:!0,className:"text-[#c4d6ff] hover:text-white tablet:text-center",href:"/docs/disclaimer",children:"Disclaimer"})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("div",{className:"text-sm mb-3 tablet:text-center",children:"PROTOCOL"}),(0,l.jsx)("div",{className:"w-6 h-px my-2 rounded-full tablet:mx-auto",style:{background:"radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)"}})]}),(0,l.jsxs)(x.Z,{className:"gap-6",children:[(0,l.jsx)(f.Z,{className:"text-[#c4d6ff] hover:text-white tablet:text-center",href:"https://forms.gle/Fjq4MiRA2qWbPyt29",children:"Apply for DropZone"}),(0,l.jsx)(f.Z,{className:"text-[#c4d6ff] hover:text-white tablet:text-center",href:"https://docs.google.com/forms/d/1Mk-x0OcI1tCZzL0Lj_WY8d02dMXsc-Z2AG3AaO6W_Rc/edit#responses",children:"Apply for Fusion Pool"}),(0,l.jsx)(f.Z,{className:"text-[#c4d6ff] hover:text-white tablet:text-center",href:"https://docs.google.com/forms/d/1Mk-x0OcI1tCZzL0Lj_WY8d02dMXsc-Z2AG3AaO6W_Rc/edit#responses",children:"Apply for AcceleRaytor"}),(0,l.jsx)(f.Z,{className:"text-[#c4d6ff] hover:text-white tablet:text-center",href:"https://raydium.gitbook.io/raydium/permissionless/creating-a-pool",children:"Permissionless Pool"})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("div",{className:"text-sm mb-3 tablet:text-center",children:"SUPPORT"}),(0,l.jsx)("div",{className:"w-6 h-px my-2 rounded-full tablet:mx-auto",style:{background:"radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)"}})]}),(0,l.jsxs)(x.Z,{className:"gap-6",children:[(0,l.jsx)(f.Z,{className:"text-[#c4d6ff] hover:text-white tablet:text-center",href:"https://raydium.gitbook.io/raydium/trading-on-serum/spl-wallets",children:"Getting Started on Raydium"}),(0,l.jsx)(f.Z,{className:"text-[#c4d6ff] hover:text-white tablet:text-center",href:"https://raydium.gitbook.io/raydium/trading-on-serum/faq",children:"FAQ"})]})]}),(0,l.jsxs)("div",{className:"tablet:col-span-full tablet:justify-self-center",children:[(0,l.jsxs)("div",{className:"mb-8 tablet:hidden",children:[(0,l.jsx)("div",{className:"text-sm mb-3",children:"COMMUNITY"}),(0,l.jsx)("div",{className:"w-6 h-px my-2 rounded-full",style:{background:"radial-gradient(39.84% 47.5% at 96.82% 58.33%, #39d0d8 0%, #2b6aff 100%)"}})]}),(0,l.jsxs)(h.Z,{className:"flex flex-col tablet:flex-row gap-6 tablet:gap-10",children:[(0,l.jsx)(f.Z,{className:"text-[#c4d6ff] hover:text-white",href:"https://twitter.com/RaydiumProtocol",children:(0,l.jsxs)(Z.Z,{className:"items-center gap-2",children:[(0,l.jsx)(u.Z,{className:"frosted-glass-teal p-1.5 rounded-lg text",iconClassName:"w-5 h-5 tablet:w-6 tablet:h-6",iconSrc:"icons/media-twitter.svg"}),(0,l.jsx)("div",{className:"tablet:hidden",children:"Twitter"})]})}),(0,l.jsx)(f.Z,{className:"text-[#c4d6ff] hover:text-white",href:"https://raydium.medium.com/",children:(0,l.jsxs)(Z.Z,{className:"items-center gap-2",children:[(0,l.jsx)(u.Z,{className:"frosted-glass-teal p-1.5 rounded-lg text",iconClassName:"w-5 h-5 tablet:w-6 tablet:h-6",iconSrc:"icons/media-medium.svg"}),(0,l.jsx)("div",{className:"tablet:hidden",children:"Medium"})]})}),(0,l.jsx)(f.Z,{className:"text-[#c4d6ff] hover:text-white",href:"https://discord.gg/raydium",children:(0,l.jsxs)(Z.Z,{className:"items-center gap-2",children:[(0,l.jsx)(u.Z,{className:"frosted-glass-teal p-1.5 rounded-lg text",iconClassName:"w-5 h-5 tablet:w-6 tablet:h-6",iconSrc:"icons/media-discord.svg"}),(0,l.jsx)("div",{className:"tablet:hidden",children:"Discord"})]})}),(0,l.jsx)(Z.Z,{className:"items-center gap-2",children:(0,l.jsxs)(k.Z,{triggerBy:"click",placement:t||e?"left":"right",children:[(0,l.jsxs)(Z.Z,{className:"text-[#c4d6ff] hover:text-white items-center gap-1 cursor-pointer",children:[(0,l.jsx)(u.Z,{className:"frosted-glass-teal p-1.5 rounded-lg text",iconClassName:"w-5 h-5 tablet:w-6 tablet:h-6",iconSrc:"/icons/media-telegram.svg"}),(0,l.jsx)("div",{className:"tablet:hidden",children:"Telegram"}),(0,l.jsx)(u.Z,{size:"sm",heroIconName:"chevron-down"})]}),(0,l.jsx)(k.Z.Panel,{children:(0,l.jsxs)(x.Z,{className:"divide-y-1.5",children:[(0,l.jsx)(f.Z,{className:"border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",href:"https://t.me/raydiumprotocol",children:"Telegram (EN)"}),(0,l.jsx)(f.Z,{className:"border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",href:"https://t.me/RaydiumChina",children:"Telegram (CN)"}),(0,l.jsx)(f.Z,{className:"border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",href:"https://t.me/raydiumkorea",children:"Telegram (KR)"}),(0,l.jsx)(f.Z,{className:"border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",href:"https://t.me/raydiumjapan",children:"Telegram (JP)"}),(0,l.jsx)(f.Z,{className:"border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",href:"https://t.me/RaydiumSpanish",children:"Telegram (ES)"}),(0,l.jsx)(f.Z,{className:"border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",href:"https://t.me/RaydiumTurkey",children:"Telegram (TR)"}),(0,l.jsx)(f.Z,{className:"border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",href:"https://t.me/RaydiumVietnam",children:"Telegram (VN)"}),(0,l.jsx)(f.Z,{className:"border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",href:"https://t.me/RaydiumRussian",children:"Telegram (RU)"}),(0,l.jsx)(f.Z,{className:"border-[rgba(196,214,255,0.1)] text-[#c4d6ff] hover:text-white p-2 whitespace-nowrap text-sm",href:"https://t.me/raydiumthailand",children:"Telegram (TH)"})]})})]})})]})]})]}),(0,l.jsx)(g.Z,{className:"mx-auto p-20 transform scale-125 pointer-events-none",src:"/logo/logo-with-text.svg"})]})}function A(){return(0,l.jsxs)(S,{children:[(0,l.jsx)(C,{}),(0,l.jsx)(P,{}),(0,l.jsx)(I,{}),(0,l.jsx)(L,{}),(0,l.jsx)(M,{}),(0,l.jsx)(E,{})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);