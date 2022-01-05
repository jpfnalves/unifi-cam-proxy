"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[189],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2747:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:4},l="Reolink",s={unversionedId:"configuration/reolink",id:"configuration/reolink",title:"Reolink",description:"Generic",source:"@site/docs/configuration/reolink.md",sourceDirName:"configuration",slug:"/configuration/reolink",permalink:"/configuration/reolink",editUrl:"https://github.com/keshavdv/unifi-cam-proxy/tree/main/docs/docs/configuration/reolink.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Hikvision",permalink:"/configuration/hikvision"},next:{title:"Reolink NVR",permalink:"/configuration/reolink_nvr"}},p=[{value:"Generic",id:"generic",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"RLC-410-5MP",id:"rlc-410-5mp",children:[],level:3}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reolink"},"Reolink"),(0,a.kt)("h3",{id:"generic"},"Generic"),(0,a.kt)("p",null,"If your camera model is not listed specifically below, try the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"unifi-cam-proxy -H <NVR IP> -i <camera IP> -c client.pem -t <Adoption token> reolink -u {username} -p {password} --ffmpeg-args '-c:v copy -vbsf \"h264_metadata=tick_rate=60000/1001\" -ar 32000 -ac 1 -codec:a aac -b:a 32k'\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -h, --help            show this help message and exit\n  --ffmpeg-args FFMPEG_ARGS, -f FFMPEG_ARGS\n                        Transcoding args for `ffmpeg -i <src> <args> <dst>`\n  --rtsp-transport {tcp,udp,http,udp_multicast}\n                        RTSP transport protocol used by stream\n  --username USERNAME, -u USERNAME\n                        Camera username\n  --password PASSWORD, -p PASSWORD\n                        Camera password\n  --substream SUBSTREAM, -s CHANNEL\n                        Camera rtsp url substream index main, or sub\n")),(0,a.kt)("h3",{id:"rlc-410-5mp"},"RLC-410-5MP"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Supports full time recording"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Supports motion events"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Supports smart detection"),(0,a.kt)("li",{parentName:"ul"},"Notes:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When using the 'sub' substream, use ",(0,a.kt)("inlineCode",{parentName:"li"},"tick_rate=30000/1001")," because the stream is limited to a maximum of 15fps")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"unifi-cam-proxy -H <NVR IP> -i <camera IP> -c client.pem -t <Adoption token> \\\n    reolink \\\n    -u {username} \\\n    -p {password} \\\n    --ffmpeg-args '-c:v copy -vbsf \"h264_metadata=tick_rate=60000/1001\" -ar 32000 -ac 1 -codec:a aac -b:a 32k'\n")))}m.isMDXComponent=!0}}]);