(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(161)),o={title:"React Native"},c={unversionedId:"identicon/react-native",id:"identicon/react-native",isDocsHomePage:!1,title:"React Native",description:"A generic identity icon that can render icons based on an address.",source:"@site/docs/identicon/react-native.md",slug:"/identicon/react-native",permalink:"/docs/identicon/react-native",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/identicon/react-native.md",version:"current",sidebar:"reference",previous:{title:"React",permalink:"/docs/identicon/react"},next:{title:"Vue",permalink:"/docs/identicon/vue"}},s=[{value:"Usage Examples",id:"usage-examples",children:[]}],d={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A generic identity icon that can render icons based on an address."),Object(i.b)("h2",{id:"usage-examples"},"Usage Examples"),Object(i.b)("p",null,"To install the component, do ",Object(i.b)("inlineCode",{parentName:"p"},"yarn add @polkadot/reactnative-identicon")),Object(i.b)("p",null,"Inside a React component, you can now render any account with the associated icon -"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import Identicon from '@polkadot/reactnative-identicon';\n\n...\nrender () {\n  // address is an ss58-encoded address or publicKey (hex string or Uint8Array)\n  const { address } = this.props;\n  // size (optional) is a number, indicating the size (in pixels, 64 as default)\n  const size = 32;\n\n  // standard className & style props are also available\n  return (\n    <Identicon\n      value={address}\n      size={size}\n    />\n  );\n}\n...\n")))}p.isMDXComponent=!0},161:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),p=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(t),b=r,f=l["".concat(o,".").concat(b)]||l[b]||u[b]||i;return t?a.a.createElement(f,c(c({ref:n},d),{},{components:t})):a.a.createElement(f,c({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);