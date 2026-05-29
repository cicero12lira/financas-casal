const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DashboardPage-FNopRwsR.js","assets/react-Ctue3Vkw.js","assets/recharts-Bf2jVtMf.js"])))=>i.map(i=>d[i]);
import{f as v_,h as T_,e as V,i as Fn,N as w_,u as b_,O as sf,j as x_,B as A_,c as S_,b as Ye,a as of}from"./react-Ctue3Vkw.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Fa={exports:{}},ds={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu;function R_(){if(Zu)return ds;Zu=1;var r=v_(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(c,l,u){var f,p={},_=null,b=null;u!==void 0&&(_=""+u),l.key!==void 0&&(_=""+l.key),l.ref!==void 0&&(b=l.ref);for(f in l)n.call(l,f)&&!i.hasOwnProperty(f)&&(p[f]=l[f]);if(c&&c.defaultProps)for(f in l=c.defaultProps,l)p[f]===void 0&&(p[f]=l[f]);return{$$typeof:e,type:c,key:_,ref:b,props:p,_owner:s.current}}return ds.Fragment=t,ds.jsx=o,ds.jsxs=o,ds}var eh;function P_(){return eh||(eh=1,Fa.exports=R_()),Fa.exports}var m=P_(),ki={},th;function C_(){if(th)return ki;th=1;var r=T_();return ki.createRoot=r.createRoot,ki.hydrateRoot=r.hydrateRoot,ki}var N_=C_();const V_="modulepreload",D_=function(r){return"/financas-casal/"+r},nh={},k_=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(t.map(u=>{if(u=D_(u),u in nh)return;nh[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":V_,f||(_.as="script"),_.crossOrigin="",_.href=u,l&&_.setAttribute("nonce",l),document.head.appendChild(_),f)return new Promise((b,P)=>{_.addEventListener("load",b),_.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};function Lo(r){try{const e=localStorage.getItem(r);return e===null?null:JSON.parse(e)}catch{return null}}function ei(r,e){localStorage.setItem(r,JSON.stringify(e))}function O_(r){localStorage.removeItem(r)}const M_=()=>Lo("fc_firebase_config"),L_=r=>ei("fc_firebase_config",r),jo=()=>localStorage.getItem("fc_casal_id")??"",af=r=>localStorage.setItem("fc_casal_id",r),hr=()=>Lo("fc_auth"),j_=r=>ei("fc_auth",r),F_=()=>O_("fc_auth"),Cn=()=>{var r;return!!((r=hr())!=null&&r.uid)},U_=()=>{var r;return((r=hr())==null?void 0:r.usuario)??null},jc=()=>{var r;return((r=hr())==null?void 0:r.uid)??null},wn=()=>Lo("fc_config")??{},sc=r=>ei("fc_config",r),B_=()=>Lo("fc_instalacao_banner")??!1,rh=r=>ei("fc_instalacao_banner",r),z_=r=>ei("fc_ultima_sync",r),$_=()=>{};var sh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},q_=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,l=s+2<r.length,u=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|u>>6,b=u&63;l||(b=64,o||(_=64)),n.push(t[f],t[p],t[_],t[b])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(cf(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):q_(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const u=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new K_;const _=i<<2|c>>4;if(n.push(_),u!==64){const b=c<<4&240|u>>2;if(n.push(b),p!==64){const P=u<<6&192|p;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class K_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const G_=function(r){const e=cf(r);return lf.encodeByteArray(e,!0)},uf=function(r){return G_(r).replace(/\./g,"")},hf=function(r){try{return lf.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=()=>df().__FIREBASE_DEFAULTS__,W_=()=>{if(typeof process>"u"||typeof sh>"u")return;const r=sh.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Q_=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&hf(r[1]);return e&&JSON.parse(e)},Fo=()=>{try{return $_()||H_()||W_()||Q_()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},J_=r=>{var e,t;return(t=(e=Fo())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},ff=()=>{var r;return(r=Fo())==null?void 0:r.config},mf=r=>{var e;return(e=Fo())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Y_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function pf(){var e;const r=(e=Fo())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Z_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ey(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ty(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ny(){const r=Ie();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function gf(){return!pf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _f(){return!pf()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function yf(){try{return typeof indexedDB=="object"}catch{return!1}}function ry(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="FirebaseError";class vt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=sy,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?iy(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new vt(s,c,n)}}function iy(r,e){return r.replace(oy,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const oy=/\{\$([^}]+)}/g;function ay(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Nn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(ih(i)&&ih(o)){if(!Nn(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function ih(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function cy(r,e){const t=new ly(r,e);return t.subscribe.bind(t)}class ly{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");uy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Ua),s.error===void 0&&(s.error=Ua),s.complete===void 0&&(s.complete=Ua);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uy(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ua(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function If(r){return(await fetch(r,{credentials:"include"})).ok}class Vn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new X_;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fy(e))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mn){return this.instances.has(e)}getOptions(e=mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:dy(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=mn){return this.component?this.component.multipleInstances?e:mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dy(r){return r===mn?void 0:r}function fy(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Z||(Z={}));const py={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},gy=Z.INFO,_y={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},yy=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=_y[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=gy,this._logHandler=yy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?py[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Iy=(r,e)=>e.some(t=>r instanceof t);let oh,ah;function Ey(){return oh||(oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vy(){return ah||(ah=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ef=new WeakMap,ic=new WeakMap,vf=new WeakMap,Ba=new WeakMap,Uc=new WeakMap;function Ty(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Bt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ef.set(t,r)}).catch(()=>{}),Uc.set(e,r),e}function wy(r){if(ic.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});ic.set(r,e)}let oc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ic.get(r);if(e==="objectStoreNames")return r.objectStoreNames||vf.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Bt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function by(r){oc=r(oc)}function xy(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(za(this),e,...t);return vf.set(n,e.sort?e.sort():[e]),Bt(n)}:vy().includes(r)?function(...e){return r.apply(za(this),e),Bt(Ef.get(this))}:function(...e){return Bt(r.apply(za(this),e))}}function Ay(r){return typeof r=="function"?xy(r):(r instanceof IDBTransaction&&wy(r),Iy(r,Ey())?new Proxy(r,oc):r)}function Bt(r){if(r instanceof IDBRequest)return Ty(r);if(Ba.has(r))return Ba.get(r);const e=Ay(r);return e!==r&&(Ba.set(r,e),Uc.set(e,r)),e}const za=r=>Uc.get(r);function Sy(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),c=Bt(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Bt(o.result),l.oldVersion,l.newVersion,Bt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Ry=["get","getKey","getAll","getAllKeys","count"],Py=["put","add","delete","clear"],$a=new Map;function ch(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Py.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Ry.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return $a.set(e,i),i}by(r=>({...r,get:(e,t,n)=>ch(e,t)||r.get(e,t,n),has:(e,t)=>!!ch(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ny(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Ny(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ac="@firebase/app",lh="0.14.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new Fc("@firebase/app"),Vy="@firebase/app-compat",Dy="@firebase/analytics-compat",ky="@firebase/analytics",Oy="@firebase/app-check-compat",My="@firebase/app-check",Ly="@firebase/auth",jy="@firebase/auth-compat",Fy="@firebase/database",Uy="@firebase/data-connect",By="@firebase/database-compat",zy="@firebase/functions",$y="@firebase/functions-compat",qy="@firebase/installations",Ky="@firebase/installations-compat",Gy="@firebase/messaging",Hy="@firebase/messaging-compat",Wy="@firebase/performance",Qy="@firebase/performance-compat",Jy="@firebase/remote-config",Xy="@firebase/remote-config-compat",Yy="@firebase/storage",Zy="@firebase/storage-compat",eI="@firebase/firestore",tI="@firebase/ai",nI="@firebase/firestore-compat",rI="firebase",sI="12.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="[DEFAULT]",iI={[ac]:"fire-core",[Vy]:"fire-core-compat",[ky]:"fire-analytics",[Dy]:"fire-analytics-compat",[My]:"fire-app-check",[Oy]:"fire-app-check-compat",[Ly]:"fire-auth",[jy]:"fire-auth-compat",[Fy]:"fire-rtdb",[Uy]:"fire-data-connect",[By]:"fire-rtdb-compat",[zy]:"fire-fn",[$y]:"fire-fn-compat",[qy]:"fire-iid",[Ky]:"fire-iid-compat",[Gy]:"fire-fcm",[Hy]:"fire-fcm-compat",[Wy]:"fire-perf",[Qy]:"fire-perf-compat",[Jy]:"fire-rc",[Xy]:"fire-rc-compat",[Yy]:"fire-gcs",[Zy]:"fire-gcs-compat",[eI]:"fire-fst",[nI]:"fire-fst-compat",[tI]:"fire-vertex","fire-js":"fire-js",[rI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new Map,oI=new Map,lc=new Map;function uh(r,e){try{r.container.addComponent(e)}catch(t){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function dr(r){const e=r.name;if(lc.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;lc.set(e,r);for(const t of Os.values())uh(t,r);for(const t of oI.values())uh(t,r);return!0}function Bc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Ge(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new ti("app","Firebase",aI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=sI;function Tf(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:cc,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw zt.create("bad-app-name",{appName:String(s)});if(t||(t=ff()),!t)throw zt.create("no-options");const i=Os.get(s);if(i){if(Nn(t,i.options)&&Nn(n,i.config))return i;throw zt.create("duplicate-app",{appName:s})}const o=new my(s);for(const l of lc.values())o.addComponent(l);const c=new cI(t,n,o);return Os.set(s,c),c}function lI(r=cc){const e=Os.get(r);if(!e&&r===cc&&ff())return Tf();if(!e)throw zt.create("no-app",{appName:r});return e}function hh(){return Array.from(Os.values())}function $t(r,e,t){let n=iI[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(o.join(" "));return}dr(new Vn(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="firebase-heartbeat-database",hI=1,Ms="firebase-heartbeat-store";let qa=null;function wf(){return qa||(qa=Sy(uI,hI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ms)}catch(t){console.warn(t)}}}}).catch(r=>{throw zt.create("idb-open",{originalErrorMessage:r.message})})),qa}async function dI(r){try{const t=(await wf()).transaction(Ms),n=await t.objectStore(Ms).get(bf(r));return await t.done,n}catch(e){if(e instanceof vt)gt.warn(e.message);else{const t=zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(t.message)}}}async function dh(r,e){try{const n=(await wf()).transaction(Ms,"readwrite");await n.objectStore(Ms).put(e,bf(r)),await n.done}catch(t){if(t instanceof vt)gt.warn(t.message);else{const n=zt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gt.warn(n.message)}}}function bf(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=1024,mI=30;class pI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _I(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>mI){const o=yI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){gt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fh(),{heartbeatsToSend:n,unsentEntries:s}=gI(this._heartbeatsCache.heartbeats),i=uf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return gt.warn(t),""}}}function fh(){return new Date().toISOString().substring(0,10)}function gI(r,e=fI){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),mh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),mh(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class _I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yf()?ry().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return dh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return dh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function mh(r){return uf(JSON.stringify({version:2,heartbeats:r})).length}function yI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(r){dr(new Vn("platform-logger",e=>new Cy(e),"PRIVATE")),dr(new Vn("heartbeat",e=>new pI(e),"PRIVATE")),$t(ac,lh,r),$t(ac,lh,"esm2020"),$t("fire-js","")}II("");var EI="firebase",vI="12.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(EI,vI,"app");var ph=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qt,xf;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.F=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.D=function(w,T,S){for(var I=Array(arguments.length-2),we=2;we<arguments.length;we++)I[we-2]=arguments[we];return y.prototype[T].apply(w,I)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,v){v||(v=0);const w=Array(16);if(typeof y=="string")for(var T=0;T<16;++T)w[T]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(T=0;T<16;++T)w[T]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],T=E.g[2];let S=E.g[3],I;I=y+(S^v&(T^S))+w[0]+3614090360&4294967295,y=v+(I<<7&4294967295|I>>>25),I=S+(T^y&(v^T))+w[1]+3905402710&4294967295,S=y+(I<<12&4294967295|I>>>20),I=T+(v^S&(y^v))+w[2]+606105819&4294967295,T=S+(I<<17&4294967295|I>>>15),I=v+(y^T&(S^y))+w[3]+3250441966&4294967295,v=T+(I<<22&4294967295|I>>>10),I=y+(S^v&(T^S))+w[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=S+(T^y&(v^T))+w[5]+1200080426&4294967295,S=y+(I<<12&4294967295|I>>>20),I=T+(v^S&(y^v))+w[6]+2821735955&4294967295,T=S+(I<<17&4294967295|I>>>15),I=v+(y^T&(S^y))+w[7]+4249261313&4294967295,v=T+(I<<22&4294967295|I>>>10),I=y+(S^v&(T^S))+w[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=S+(T^y&(v^T))+w[9]+2336552879&4294967295,S=y+(I<<12&4294967295|I>>>20),I=T+(v^S&(y^v))+w[10]+4294925233&4294967295,T=S+(I<<17&4294967295|I>>>15),I=v+(y^T&(S^y))+w[11]+2304563134&4294967295,v=T+(I<<22&4294967295|I>>>10),I=y+(S^v&(T^S))+w[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=S+(T^y&(v^T))+w[13]+4254626195&4294967295,S=y+(I<<12&4294967295|I>>>20),I=T+(v^S&(y^v))+w[14]+2792965006&4294967295,T=S+(I<<17&4294967295|I>>>15),I=v+(y^T&(S^y))+w[15]+1236535329&4294967295,v=T+(I<<22&4294967295|I>>>10),I=y+(T^S&(v^T))+w[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=S+(v^T&(y^v))+w[6]+3225465664&4294967295,S=y+(I<<9&4294967295|I>>>23),I=T+(y^v&(S^y))+w[11]+643717713&4294967295,T=S+(I<<14&4294967295|I>>>18),I=v+(S^y&(T^S))+w[0]+3921069994&4294967295,v=T+(I<<20&4294967295|I>>>12),I=y+(T^S&(v^T))+w[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=S+(v^T&(y^v))+w[10]+38016083&4294967295,S=y+(I<<9&4294967295|I>>>23),I=T+(y^v&(S^y))+w[15]+3634488961&4294967295,T=S+(I<<14&4294967295|I>>>18),I=v+(S^y&(T^S))+w[4]+3889429448&4294967295,v=T+(I<<20&4294967295|I>>>12),I=y+(T^S&(v^T))+w[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=S+(v^T&(y^v))+w[14]+3275163606&4294967295,S=y+(I<<9&4294967295|I>>>23),I=T+(y^v&(S^y))+w[3]+4107603335&4294967295,T=S+(I<<14&4294967295|I>>>18),I=v+(S^y&(T^S))+w[8]+1163531501&4294967295,v=T+(I<<20&4294967295|I>>>12),I=y+(T^S&(v^T))+w[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=S+(v^T&(y^v))+w[2]+4243563512&4294967295,S=y+(I<<9&4294967295|I>>>23),I=T+(y^v&(S^y))+w[7]+1735328473&4294967295,T=S+(I<<14&4294967295|I>>>18),I=v+(S^y&(T^S))+w[12]+2368359562&4294967295,v=T+(I<<20&4294967295|I>>>12),I=y+(v^T^S)+w[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=S+(y^v^T)+w[8]+2272392833&4294967295,S=y+(I<<11&4294967295|I>>>21),I=T+(S^y^v)+w[11]+1839030562&4294967295,T=S+(I<<16&4294967295|I>>>16),I=v+(T^S^y)+w[14]+4259657740&4294967295,v=T+(I<<23&4294967295|I>>>9),I=y+(v^T^S)+w[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=S+(y^v^T)+w[4]+1272893353&4294967295,S=y+(I<<11&4294967295|I>>>21),I=T+(S^y^v)+w[7]+4139469664&4294967295,T=S+(I<<16&4294967295|I>>>16),I=v+(T^S^y)+w[10]+3200236656&4294967295,v=T+(I<<23&4294967295|I>>>9),I=y+(v^T^S)+w[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=S+(y^v^T)+w[0]+3936430074&4294967295,S=y+(I<<11&4294967295|I>>>21),I=T+(S^y^v)+w[3]+3572445317&4294967295,T=S+(I<<16&4294967295|I>>>16),I=v+(T^S^y)+w[6]+76029189&4294967295,v=T+(I<<23&4294967295|I>>>9),I=y+(v^T^S)+w[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=S+(y^v^T)+w[12]+3873151461&4294967295,S=y+(I<<11&4294967295|I>>>21),I=T+(S^y^v)+w[15]+530742520&4294967295,T=S+(I<<16&4294967295|I>>>16),I=v+(T^S^y)+w[2]+3299628645&4294967295,v=T+(I<<23&4294967295|I>>>9),I=y+(T^(v|~S))+w[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=S+(v^(y|~T))+w[7]+1126891415&4294967295,S=y+(I<<10&4294967295|I>>>22),I=T+(y^(S|~v))+w[14]+2878612391&4294967295,T=S+(I<<15&4294967295|I>>>17),I=v+(S^(T|~y))+w[5]+4237533241&4294967295,v=T+(I<<21&4294967295|I>>>11),I=y+(T^(v|~S))+w[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=S+(v^(y|~T))+w[3]+2399980690&4294967295,S=y+(I<<10&4294967295|I>>>22),I=T+(y^(S|~v))+w[10]+4293915773&4294967295,T=S+(I<<15&4294967295|I>>>17),I=v+(S^(T|~y))+w[1]+2240044497&4294967295,v=T+(I<<21&4294967295|I>>>11),I=y+(T^(v|~S))+w[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=S+(v^(y|~T))+w[15]+4264355552&4294967295,S=y+(I<<10&4294967295|I>>>22),I=T+(y^(S|~v))+w[6]+2734768916&4294967295,T=S+(I<<15&4294967295|I>>>17),I=v+(S^(T|~y))+w[13]+1309151649&4294967295,v=T+(I<<21&4294967295|I>>>11),I=y+(T^(v|~S))+w[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=S+(v^(y|~T))+w[11]+3174756917&4294967295,S=y+(I<<10&4294967295|I>>>22),I=T+(y^(S|~v))+w[2]+718787259&4294967295,T=S+(I<<15&4294967295|I>>>17),I=v+(S^(T|~y))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(T+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+S&4294967295}n.prototype.v=function(E,y){y===void 0&&(y=E.length);const v=y-this.blockSize,w=this.C;let T=this.h,S=0;for(;S<y;){if(T==0)for(;S<=v;)s(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<y;)if(w[T++]=E.charCodeAt(S++),T==this.blockSize){s(this,w),T=0;break}}else for(;S<y;)if(w[T++]=E[S++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=y},n.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var v=E.length-8;v<E.length;++v)E[v]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,v=0;v<4;++v)for(let w=0;w<32;w+=8)E[y++]=this.g[v]>>>w&255;return E};function i(E,y){var v=c;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function o(E,y){this.h=y;const v=[];let w=!0;for(let T=E.length-1;T>=0;T--){const S=E[T]|0;w&&S==y||(v[T]=S,w=!1)}this.g=v}var c={};function l(E){return-128<=E&&E<128?i(E,function(y){return new o([y|0],y<0?-1:0)}):new o([E|0],E<0?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return k(u(-E));const y=[];let v=1;for(let w=0;E>=v;w++)y[w]=E/v|0,v*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return k(f(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(y,8));let w=p;for(let S=0;S<E.length;S+=8){var T=Math.min(8,E.length-S);const I=parseInt(E.substring(S,S+T),y);T<8?(T=u(Math.pow(y,T)),w=w.j(T).add(u(I))):(w=w.j(v),w=w.add(u(I)))}return w}var p=l(0),_=l(1),b=l(16777216);r=o.prototype,r.m=function(){if(C(this))return-k(this).m();let E=0,y=1;for(let v=0;v<this.g.length;v++){const w=this.i(v);E+=(w>=0?w:4294967296+w)*y,y*=4294967296}return E},r.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(C(this))return"-"+k(this).toString(E);const y=u(Math.pow(E,6));var v=this;let w="";for(;;){const T=Y(v,y).g;v=F(v,T.j(y));let S=((v.g.length>0?v.g[0]:v.h)>>>0).toString(E);if(v=T,P(v))return S+w;for(;S.length<6;)S="0"+S;w=S+w}},r.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function C(E){return E.h==-1}r.l=function(E){return E=F(this,E),C(E)?-1:P(E)?0:1};function k(E){const y=E.g.length,v=[];for(let w=0;w<y;w++)v[w]=~E.g[w];return new o(v,~E.h).add(_)}r.abs=function(){return C(this)?k(this):this},r.add=function(E){const y=Math.max(this.g.length,E.g.length),v=[];let w=0;for(let T=0;T<=y;T++){let S=w+(this.i(T)&65535)+(E.i(T)&65535),I=(S>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=I>>>16,S&=65535,I&=65535,v[T]=I<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function F(E,y){return E.add(k(y))}r.j=function(E){if(P(this)||P(E))return p;if(C(this))return C(E)?k(this).j(k(E)):k(k(this).j(E));if(C(E))return k(this.j(k(E)));if(this.l(b)<0&&E.l(b)<0)return u(this.m()*E.m());const y=this.g.length+E.g.length,v=[];for(var w=0;w<2*y;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(let T=0;T<E.g.length;T++){const S=this.i(w)>>>16,I=this.i(w)&65535,we=E.i(T)>>>16,ut=E.i(T)&65535;v[2*w+2*T]+=I*ut,q(v,2*w+2*T),v[2*w+2*T+1]+=S*ut,q(v,2*w+2*T+1),v[2*w+2*T+1]+=I*we,q(v,2*w+2*T+1),v[2*w+2*T+2]+=S*we,q(v,2*w+2*T+2)}for(E=0;E<y;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=y;E<2*y;E++)v[E]=0;return new o(v,0)};function q(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function K(E,y){this.g=E,this.h=y}function Y(E,y){if(P(y))throw Error("division by zero");if(P(E))return new K(p,p);if(C(E))return y=Y(k(E),y),new K(k(y.g),k(y.h));if(C(y))return y=Y(E,k(y)),new K(k(y.g),y.h);if(E.g.length>30){if(C(E)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var v=_,w=y;w.l(E)<=0;)v=Q(v),w=Q(w);var T=O(v,1),S=O(w,1);for(w=O(w,2),v=O(v,2);!P(w);){var I=S.add(w);I.l(E)<=0&&(T=T.add(v),S=I),w=O(w,1),v=O(v,1)}return y=F(E,T.j(y)),new K(T,y)}for(T=p;E.l(y)>=0;){for(v=Math.max(1,Math.floor(E.m()/y.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),S=u(v),I=S.j(y);C(I)||I.l(E)>0;)v-=w,S=u(v),I=S.j(y);P(S)&&(S=_),T=T.add(S),E=F(E,I)}return new K(T,E)}r.B=function(E){return Y(this,E).h},r.and=function(E){const y=Math.max(this.g.length,E.g.length),v=[];for(let w=0;w<y;w++)v[w]=this.i(w)&E.i(w);return new o(v,this.h&E.h)},r.or=function(E){const y=Math.max(this.g.length,E.g.length),v=[];for(let w=0;w<y;w++)v[w]=this.i(w)|E.i(w);return new o(v,this.h|E.h)},r.xor=function(E){const y=Math.max(this.g.length,E.g.length),v=[];for(let w=0;w<y;w++)v[w]=this.i(w)^E.i(w);return new o(v,this.h^E.h)};function Q(E){const y=E.g.length+1,v=[];for(let w=0;w<y;w++)v[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(v,E.h)}function O(E,y){const v=y>>5;y%=32;const w=E.g.length-v,T=[];for(let S=0;S<w;S++)T[S]=y>0?E.i(S+v)>>>y|E.i(S+v+1)<<32-y:E.i(S+v);return new o(T,E.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,xf=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,qt=o}).apply(typeof ph<"u"?ph:typeof self<"u"?self:typeof window<"u"?window:{});var Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Af,Es,Sf,Hi,uc,Rf,Pf,Cf;(function(){var r,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oi=="object"&&Oi];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,h){if(h)e:{var d=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var A=a[g];if(!(A in d))break e;d=d[A]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,A,R){for(var M=Array(arguments.length-2),J=2;J<arguments.length;J++)M[J-2]=arguments[J];return h.prototype[A].apply(g,M)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function b(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function P(a,h){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=a.length||0;const R=A.length||0;a.length=d+R;for(let M=0;M<R;M++)a[d+M]=A[M]}else a.push(A)}}class C{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){o.setTimeout(()=>{throw a},0)}function F(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class q{constructor(){this.h=this.g=null}add(h,d){const g=K.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var K=new C(()=>new Y,a=>a.reset());class Y{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,O=!1,E=new q,y=()=>{const a=Promise.resolve(void 0);Q=()=>{a.then(v)}};function v(){for(var a;a=F();){try{a.h.call(a.g)}catch(d){k(d)}var h=K;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}O=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function I(a){return/^[\s\xa0]*$/.test(a)}function we(a,h){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(we,T),we.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&we.Z.h.call(this)},we.prototype.h=function(){we.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ut="closure_listenable_"+(Math.random()*1e6|0),gi=0;function va(a,h,d,g,A){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=A,this.key=++gi,this.da=this.fa=!1}function sn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Bn(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function _i(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function yi(a){const h={};for(const d in a)h[d]=a[d];return h}const zn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qr(a,h){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)a[d]=g[d];for(let R=0;R<zn.length;R++)d=zn[R],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function bt(a){this.src=a,this.g={},this.h=0}bt.prototype.add=function(a,h,d,g,A){const R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);const M=qn(a,h,g,A);return M>-1?(h=a[M],d||(h.fa=!1)):(h=new va(h,this.src,R,!!g,A),h.fa=d,a.push(h)),h};function $n(a,h){const d=h.type;if(d in a.g){var g=a.g[d],A=Array.prototype.indexOf.call(g,h,void 0),R;(R=A>=0)&&Array.prototype.splice.call(g,A,1),R&&(sn(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function qn(a,h,d,g){for(let A=0;A<a.length;++A){const R=a[A];if(!R.da&&R.listener==h&&R.capture==!!d&&R.ha==g)return A}return-1}var Kr="closure_lm_"+(Math.random()*1e6|0),Gr={};function Ii(a,h,d,g,A){if(Array.isArray(h)){for(let R=0;R<h.length;R++)Ii(a,h[R],d,g,A);return null}return d=Qr(d),a&&a[ut]?a.J(h,d,c(g)?!!g.capture:!1,A):Ei(a,h,d,!1,g,A)}function Ei(a,h,d,g,A,R){if(!h)throw Error("Invalid event type");const M=c(A)?!!A.capture:!!A;let J=Wr(a);if(J||(a[Kr]=J=new bt(a)),d=J.add(h,d,g,M,R),d.proxy)return d;if(g=on(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)S||(A=M),A===void 0&&(A=!1),a.addEventListener(h.toString(),g,A);else if(a.attachEvent)a.attachEvent(Hr(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function on(){function a(d){return h.call(a.src,a.listener,d)}const h=vi;return a}function xt(a,h,d,g,A){if(Array.isArray(h))for(var R=0;R<h.length;R++)xt(a,h[R],d,g,A);else g=c(g)?!!g.capture:!!g,d=Qr(d),a&&a[ut]?(a=a.i,R=String(h).toString(),R in a.g&&(h=a.g[R],d=qn(h,d,g,A),d>-1&&(sn(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[R],a.h--)))):a&&(a=Wr(a))&&(h=a.g[h.toString()],a=-1,h&&(a=qn(h,d,g,A)),(d=a>-1?h[a]:null)&&an(d))}function an(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ut])$n(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(Hr(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Wr(h))?($n(d,a),d.h==0&&(d.src=null,h[Kr]=null)):sn(a)}}}function Hr(a){return a in Gr?Gr[a]:Gr[a]="on"+a}function vi(a,h){if(a.da)a=!0;else{h=new we(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&an(a),a=d.call(g,h)}return a}function Wr(a){return a=a[Kr],a instanceof bt?a:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qr(a){return typeof a=="function"?a:(a[U]||(a[U]=function(h){return a.handleEvent(h)}),a[U])}function xe(){w.call(this),this.i=new bt(this),this.M=this,this.G=null}p(xe,w),xe.prototype[ut]=!0,xe.prototype.removeEventListener=function(a,h,d,g){xt(this,a,h,d,g)};function Ve(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new T(h,a);else if(h instanceof T)h.target=h.target||a;else{var A=h;h=new T(g,a),qr(h,A)}A=!0;let R,M;if(d)for(M=d.length-1;M>=0;M--)R=h.g=d[M],A=Ti(R,g,!0,h)&&A;if(R=h.g=a,A=Ti(R,g,!0,h)&&A,A=Ti(R,g,!1,h)&&A,d)for(M=0;M<d.length;M++)R=h.g=d[M],A=Ti(R,g,!1,h)&&A}xe.prototype.N=function(){if(xe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)sn(d[g]);delete a.g[h],a.h--}}this.G=null},xe.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},xe.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Ti(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let A=!0;for(let R=0;R<h.length;++R){const M=h[R];if(M&&!M.da&&M.capture==d){const J=M.listener,ye=M.ha||M.src;M.fa&&$n(a.i,M),A=J.call(ye,g)!==!1&&A}}return A&&!g.defaultPrevented}function Qg(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function iu(a){a.g=Qg(()=>{a.g=null,a.i&&(a.i=!1,iu(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Jg extends w{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:iu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jr(a){w.call(this),this.h=a,this.g={}}p(Jr,w);var ou=[];function au(a){Bn(a.g,function(h,d){this.g.hasOwnProperty(d)&&an(h)},a),a.g={}}Jr.prototype.N=function(){Jr.Z.N.call(this),au(this)},Jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ta=o.JSON.stringify,Xg=o.JSON.parse,Yg=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function cu(){}function lu(){}var Xr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function wa(){T.call(this,"d")}p(wa,T);function ba(){T.call(this,"c")}p(ba,T);var cn={},uu=null;function wi(){return uu=uu||new xe}cn.Ia="serverreachability";function hu(a){T.call(this,cn.Ia,a)}p(hu,T);function Yr(a){const h=wi();Ve(h,new hu(h))}cn.STAT_EVENT="statevent";function du(a,h){T.call(this,cn.STAT_EVENT,a),this.stat=h}p(du,T);function De(a){const h=wi();Ve(h,new du(h,a))}cn.Ja="timingevent";function fu(a,h){T.call(this,cn.Ja,a),this.size=h}p(fu,T);function Zr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function es(){this.g=!0}es.prototype.ua=function(){this.g=!1};function Zg(a,h,d,g,A,R){a.info(function(){if(a.g)if(R){var M="",J=R.split("&");for(let oe=0;oe<J.length;oe++){var ye=J[oe].split("=");if(ye.length>1){const ve=ye[0];ye=ye[1];const Xe=ve.split("_");M=Xe.length>=2&&Xe[1]=="type"?M+(ve+"="+ye+"&"):M+(ve+"=redacted&")}}}else M=null;else M=R;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+h+`
`+d+`
`+M})}function e_(a,h,d,g,A,R,M){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+h+`
`+d+`
`+R+" "+M})}function Kn(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+n_(a,d)+(g?" "+g:"")})}function t_(a,h){a.info(function(){return"TIMEOUT: "+h})}es.prototype.info=function(){};function n_(a,h){if(!a.g)return h;if(!h)return null;try{const R=JSON.parse(h);if(R){for(a=0;a<R.length;a++)if(Array.isArray(R[a])){var d=R[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let M=1;M<g.length;M++)g[M]=""}}}}return Ta(R)}catch{return h}}var bi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},mu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},pu;function xa(){}p(xa,cu),xa.prototype.g=function(){return new XMLHttpRequest},pu=new xa;function ts(a){return encodeURIComponent(String(a))}function r_(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function At(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new Jr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new gu}function gu(){this.i=null,this.g="",this.h=!1}var _u={},Aa={};function Sa(a,h,d){a.M=1,a.A=Ai(Je(h)),a.u=d,a.R=!0,yu(a,null)}function yu(a,h){a.F=Date.now(),xi(a),a.B=Je(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Nu(d.i,"t",g),a.C=0,d=a.j.L,a.h=new gu,a.g=Qu(a.j,d?h:null,!a.u),a.P>0&&(a.O=new Jg(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(ou[0]=A.toString()),A=ou);for(let R=0;R<A.length;R++){const M=Ii(d,A[R],g||h.handleEvent,!1,h.h||h);if(!M)break;h.g[M.key]=M}h=a.J?yi(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Yr(),Zg(a.i,a.v,a.B,a.l,a.S,a.u)}At.prototype.ba=function(a){a=a.target;const h=this.O;h&&Pt(a)==3?h.j():this.Y(a)},At.prototype.Y=function(a){try{if(a==this.g)e:{const J=Pt(this.g),ye=this.g.ya(),oe=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||ju(this.g)))){this.K||J!=4||ye==7||(ye==8||oe<=0?Yr(3):Yr(2)),Ra(this);var h=this.g.ca();this.X=h;var d=s_(this);if(this.o=h==200,e_(this.i,this.v,this.B,this.l,this.S,J,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(g)){var R=g;break t}}R=null}if(a=R)Kn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Pa(this,a);else{this.o=!1,this.m=3,De(12),ln(this),ns(this);break e}}if(this.R){a=!0;let ve;for(;!this.K&&this.C<d.length;)if(ve=i_(this,d),ve==Aa){J==4&&(this.m=4,De(14),a=!1),Kn(this.i,this.l,null,"[Incomplete Response]");break}else if(ve==_u){this.m=4,De(15),Kn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Kn(this.i,this.l,ve,null),Pa(this,ve);if(Iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||d.length!=0||this.h.h||(this.m=1,De(16),a=!1),this.o=this.o&&a,!a)Kn(this.i,this.l,d,"[Invalid Chunked Response]"),ln(this),ns(this);else if(d.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),La(M),M.P=!0,De(11))}}else Kn(this.i,this.l,d,null),Pa(this,d);J==4&&ln(this),this.o&&!this.K&&(J==4?Ku(this.j,this):(this.o=!1,xi(this)))}else I_(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,De(12)):(this.m=0,De(13)),ln(this),ns(this)}}}catch{}finally{}};function s_(a){if(!Iu(a))return a.g.la();const h=ju(a.g);if(h==="")return"";let d="";const g=h.length,A=Pt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ln(a),ns(a),"";a.h.i=new o.TextDecoder}for(let R=0;R<g;R++)a.h.h=!0,d+=a.h.i.decode(h[R],{stream:!(A&&R==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Iu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function i_(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Aa:(d=Number(h.substring(d,g)),isNaN(d)?_u:(g+=1,g+d>h.length?Aa:(h=h.slice(g,g+d),a.C=g+d,h)))}At.prototype.cancel=function(){this.K=!0,ln(this)};function xi(a){a.T=Date.now()+a.H,Eu(a,a.H)}function Eu(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Zr(u(a.aa,a),h)}function Ra(a){a.D&&(o.clearTimeout(a.D),a.D=null)}At.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(t_(this.i,this.B),this.M!=2&&(Yr(),De(17)),ln(this),this.m=2,ns(this)):Eu(this,this.T-a)};function ns(a){a.j.I==0||a.K||Ku(a.j,a)}function ln(a){Ra(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,au(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Pa(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Ca(d.h,a))){if(!a.L&&Ca(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Ni(d),Pi(d);else break e;Ma(d),De(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Zr(u(d.Va,d),6e3));wu(d.h)<=1&&d.ta&&(d.ta=void 0)}else hn(d,11)}else if((a.L||d.g==a)&&Ni(d),!I(h))for(A=d.Ba.g.parse(h),h=0;h<A.length;h++){let oe=A[h];const ve=oe[0];if(!(ve<=d.K))if(d.K=ve,oe=oe[1],d.I==2)if(oe[0]=="c"){d.M=oe[1],d.ba=oe[2];const Xe=oe[3];Xe!=null&&(d.ka=Xe,d.j.info("VER="+d.ka));const dn=oe[4];dn!=null&&(d.za=dn,d.j.info("SVER="+d.za));const Ct=oe[5];Ct!=null&&typeof Ct=="number"&&Ct>0&&(g=1.5*Ct,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Nt=a.g;if(Nt){const Di=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var R=g.h;R.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Na(R,R.h),R.h=null))}if(g.G){const ja=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;ja&&(g.wa=ja,ce(g.J,g.G,ja))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var M=a;if(g.na=Wu(g,g.L?g.ba:null,g.W),M.L){bu(g.h,M);var J=M,ye=g.O;ye&&(J.H=ye),J.D&&(Ra(J),xi(J)),g.g=M}else $u(g);d.i.length>0&&Ci(d)}else oe[0]!="stop"&&oe[0]!="close"||hn(d,7);else d.I==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?hn(d,7):Oa(d):oe[0]!="noop"&&d.l&&d.l.qa(oe),d.A=0)}}Yr(4)}catch{}}var o_=class{constructor(a,h){this.g=a,this.map=h}};function vu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Tu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function wu(a){return a.h?1:a.g?a.g.size:0}function Ca(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Na(a,h){a.g?a.g.add(h):a.h=h}function bu(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}vu.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return b(a.i)}var Au=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function a_(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let A,R=null;g>=0?(A=a[d].substring(0,g),R=a[d].substring(g+1)):A=a[d],h(A,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function St(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof St?(this.l=a.l,rs(this,a.j),this.o=a.o,this.g=a.g,ss(this,a.u),this.h=a.h,Va(this,Vu(a.i)),this.m=a.m):a&&(h=String(a).match(Au))?(this.l=!1,rs(this,h[1]||"",!0),this.o=is(h[2]||""),this.g=is(h[3]||"",!0),ss(this,h[4]),this.h=is(h[5]||"",!0),Va(this,h[6]||"",!0),this.m=is(h[7]||"")):(this.l=!1,this.i=new as(null,this.l))}St.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(os(h,Su,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(os(h,Su,!0),"@"),a.push(ts(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(os(d,d.charAt(0)=="/"?u_:l_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",os(d,d_)),a.join("")},St.prototype.resolve=function(a){const h=Je(this);let d=!!a.j;d?rs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)ss(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=h.h.lastIndexOf("/");A!=-1&&(g=h.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const R=[];for(let M=0;M<A.length;){const J=A[M++];J=="."?g&&M==A.length&&R.push(""):J==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),g&&M==A.length&&R.push("")):(R.push(J),g=!0)}g=R.join("/")}else g=A}return d?h.h=g:d=a.i.toString()!=="",d?Va(h,Vu(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Je(a){return new St(a)}function rs(a,h,d){a.j=d?is(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ss(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Va(a,h,d){h instanceof as?(a.i=h,f_(a.i,a.l)):(d||(h=os(h,h_)),a.i=new as(h,a.l))}function ce(a,h,d){a.i.set(h,d)}function Ai(a){return ce(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function is(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function os(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,c_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function c_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Su=/[#\/\?@]/g,l_=/[#\?:]/g,u_=/[#\?]/g,h_=/[#\?@]/g,d_=/#/g;function as(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function un(a){a.g||(a.g=new Map,a.h=0,a.i&&a_(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}r=as.prototype,r.add=function(a,h){un(this),this.i=null,a=Gn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Ru(a,h){un(a),h=Gn(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Pu(a,h){return un(a),h=Gn(a,h),a.g.has(h)}r.forEach=function(a,h){un(this),this.g.forEach(function(d,g){d.forEach(function(A){a.call(h,A,g,this)},this)},this)};function Cu(a,h){un(a);let d=[];if(typeof h=="string")Pu(a,h)&&(d=d.concat(a.g.get(Gn(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}r.set=function(a,h){return un(this),this.i=null,a=Gn(this,a),Pu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},r.get=function(a,h){return a?(a=Cu(this,a),a.length>0?String(a[0]):h):h};function Nu(a,h,d){Ru(a,h),d.length>0&&(a.i=null,a.g.set(Gn(a,h),b(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const A=ts(d);d=Cu(this,d);for(let R=0;R<d.length;R++){let M=A;d[R]!==""&&(M+="="+ts(d[R])),a.push(M)}}return this.i=a.join("&")};function Vu(a){const h=new as;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Gn(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function f_(a,h){h&&!a.j&&(un(a),a.i=null,a.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(Ru(this,g),Nu(this,A,d))},a)),a.j=h}function m_(a,h){const d=new es;if(o.Image){const g=new Image;g.onload=f(Rt,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Rt,d,"TestLoadImage: error",!1,h,g),g.onabort=f(Rt,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Rt,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function p_(a,h){const d=new es,g=new AbortController,A=setTimeout(()=>{g.abort(),Rt(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(R=>{clearTimeout(A),R.ok?Rt(d,"TestPingServer: ok",!0,h):Rt(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(A),Rt(d,"TestPingServer: error",!1,h)})}function Rt(a,h,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch{}}function g_(){this.g=new Yg}function Da(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Da,cu),Da.prototype.g=function(){return new Si(this.i,this.h)};function Si(a,h){xe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Si,xe),r=Si.prototype,r.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ls(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,cs(this)),this.readyState=0},r.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ls(this)),this.g&&(this.readyState=3,ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Du(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Du(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}r.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?cs(this):ls(this),this.readyState==3&&Du(this)}},r.Oa=function(a){this.g&&(this.response=this.responseText=a,cs(this))},r.Na=function(a){this.g&&(this.response=a,cs(this))},r.ga=function(){this.g&&cs(this)};function cs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ls(a)}r.setRequestHeader=function(a,h){this.A.append(a,h)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ku(a){let h="";return Bn(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function ka(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=ku(d),typeof a=="string"?d!=null&&ts(d):ce(a,h,d))}function he(a){xe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(he,xe);var __=/^https?$/i,y_=["POST","PUT"];r=he.prototype,r.Fa=function(a){this.H=a},r.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():pu.g(),this.g.onreadystatechange=_(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(R){Ou(this,R);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const R of g.keys())d.set(R,g.get(R));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(y_,h,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,M]of d)this.g.setRequestHeader(R,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(R){Ou(this,R)}};function Ou(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Mu(a),Ri(a)}function Mu(a){a.A||(a.A=!0,Ve(a,"complete"),Ve(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ve(this,"complete"),Ve(this,"abort"),Ri(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),he.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Lu(this):this.Xa())},r.Xa=function(){Lu(this)};function Lu(a){if(a.h&&typeof i<"u"){if(a.v&&Pt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ve(a,"readystatechange"),Pt(a)==4){a.h=!1;try{const R=a.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=R===0){let M=String(a.D).match(Au)[1]||null;!M&&o.self&&o.self.location&&(M=o.self.location.protocol.slice(0,-1)),g=!__.test(M?M.toLowerCase():"")}d=g}if(d)Ve(a,"complete"),Ve(a,"success");else{a.o=6;try{var A=Pt(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",Mu(a)}}finally{Ri(a)}}}}function Ri(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||Ve(a,"ready");try{d.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Pt(a){return a.g?a.g.readyState:0}r.ca=function(){try{return Pt(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Xg(h)}};function ju(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function I_(a){const h={};a=(a.g&&Pt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(I(a[g]))continue;var d=r_(a[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=h[A]||[];h[A]=R,R.push(d)}_i(h,function(g){return g.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function us(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Fu(a){this.za=0,this.i=[],this.j=new es,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=us("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=us("baseRetryDelayMs",5e3,a),this.Za=us("retryDelaySeedMs",1e4,a),this.Ta=us("forwardChannelMaxRetries",2,a),this.va=us("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new vu(a&&a.concurrentRequestLimit),this.Ba=new g_,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Fu.prototype,r.ka=8,r.I=1,r.connect=function(a,h,d,g){De(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Wu(this,null,this.W),Ci(this)};function Oa(a){if(Uu(a),a.I==3){var h=a.V++,d=Je(a.J);if(ce(d,"SID",a.M),ce(d,"RID",h),ce(d,"TYPE","terminate"),hs(a,d),h=new At(a,a.j,h),h.M=2,h.A=Ai(Je(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Qu(h.j,null),h.g.ea(h.A)),h.F=Date.now(),xi(h)}Hu(a)}function Pi(a){a.g&&(La(a),a.g.cancel(),a.g=null)}function Uu(a){Pi(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ni(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ci(a){if(!Tu(a.h)&&!a.m){a.m=!0;var h=a.Ea;Q||y(),O||(Q(),O=!0),E.add(h,a),a.D=0}}function E_(a,h){return wu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Zr(u(a.Ea,a,h),Gu(a,a.D)),a.D++,!0)}r.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new At(this,this.j,a);let R=this.o;if(this.U&&(R?(R=yi(R),qr(R,this.U)):R=this.U),this.u!==null||this.R||(A.J=R,R=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=zu(this,A,h),d=Je(this.J),ce(d,"RID",a),ce(d,"CVER",22),this.G&&ce(d,"X-HTTP-Session-Id",this.G),hs(this,d),R&&(this.R?h="headers="+ts(ku(R))+"&"+h:this.u&&ka(d,this.u,R)),Na(this.h,A),this.Ra&&ce(d,"TYPE","init"),this.S?(ce(d,"$req",h),ce(d,"SID","null"),A.U=!0,Sa(A,d,null)):Sa(A,d,h),this.I=2}}else this.I==3&&(a?Bu(this,a):this.i.length==0||Tu(this.h)||Bu(this))};function Bu(a,h){var d;h?d=h.l:d=a.V++;const g=Je(a.J);ce(g,"SID",a.M),ce(g,"RID",d),ce(g,"AID",a.K),hs(a,g),a.u&&a.o&&ka(g,a.u,a.o),d=new At(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=zu(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Na(a.h,d),Sa(d,g,h)}function hs(a,h){a.H&&Bn(a.H,function(d,g){ce(h,g,d)}),a.l&&Bn({},function(d,g){ce(h,g,d)})}function zu(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var A=a.i;let J=-1;for(;;){const ye=["count="+d];J==-1?d>0?(J=A[0].g,ye.push("ofs="+J)):J=0:ye.push("ofs="+J);let oe=!0;for(let ve=0;ve<d;ve++){var R=A[ve].g;const Xe=A[ve].map;if(R-=J,R<0)J=Math.max(0,A[ve].g-100),oe=!1;else try{R="req"+R+"_"||"";try{var M=Xe instanceof Map?Xe:Object.entries(Xe);for(const[dn,Ct]of M){let Nt=Ct;c(Ct)&&(Nt=Ta(Ct)),ye.push(R+dn+"="+encodeURIComponent(Nt))}}catch(dn){throw ye.push(R+"type="+encodeURIComponent("_badmap")),dn}}catch{g&&g(Xe)}}if(oe){M=ye.join("&");break e}}M=void 0}return a=a.i.splice(0,d),h.G=a,M}function $u(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;Q||y(),O||(Q(),O=!0),E.add(h,a),a.A=0}}function Ma(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Zr(u(a.Da,a),Gu(a,a.A)),a.A++,!0)}r.Da=function(){if(this.v=null,qu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Zr(u(this.Wa,this),a)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,De(10),Pi(this),qu(this))};function La(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function qu(a){a.g=new At(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Je(a.na);ce(h,"RID","rpc"),ce(h,"SID",a.M),ce(h,"AID",a.K),ce(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ce(h,"TO",a.ia),ce(h,"TYPE","xmlhttp"),hs(a,h),a.u&&a.o&&ka(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ai(Je(h)),d.u=null,d.R=!0,yu(d,a)}r.Va=function(){this.C!=null&&(this.C=null,Pi(this),Ma(this),De(19))};function Ni(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ku(a,h){var d=null;if(a.g==h){Ni(a),La(a),a.g=null;var g=2}else if(Ca(a.h,h))d=h.G,bu(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var A=a.D;g=wi(),Ve(g,new fu(g,d)),Ci(a)}else $u(a);else if(A=h.m,A==3||A==0&&h.X>0||!(g==1&&E_(a,h)||g==2&&Ma(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),A){case 1:hn(a,5);break;case 4:hn(a,10);break;case 3:hn(a,6);break;default:hn(a,2)}}}function Gu(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function hn(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const A=!g;g=new St(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||rs(g,"https"),Ai(g),A?m_(g.toString(),d):p_(g.toString(),d)}else De(2);a.I=0,a.l&&a.l.pa(h),Hu(a),Uu(a)}r.bb=function(a){a?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Hu(a){if(a.I=0,a.ja=[],a.l){const h=xu(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,b(a.i),a.i.length=0),a.l.oa()}}function Wu(a,h,d){var g=d instanceof St?Je(d):new St(d);if(g.g!="")h&&(g.g=h+"."+g.g),ss(g,g.u);else{var A=o.location;g=A.protocol,h=h?h+"."+A.hostname:A.hostname,A=+A.port;const R=new St(null);g&&rs(R,g),h&&(R.g=h),A&&ss(R,A),d&&(R.h=d),g=R}return d=a.G,h=a.wa,d&&h&&ce(g,d,h),ce(g,"VER",a.ka),hs(a,g),g}function Qu(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new he(new Da({ab:d})):new he(a.ma),h.Fa(a.L),h}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ju(){}r=Ju.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Vi(){}Vi.prototype.g=function(a,h){return new je(a,h)};function je(a,h){xe.call(this),this.g=new Fu(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Hn(this)}p(je,xe),je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},je.prototype.close=function(){Oa(this.g)},je.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ta(a),a=d);h.i.push(new o_(h.Ya++,a)),h.I==3&&Ci(h)},je.prototype.N=function(){this.g.l=null,delete this.j,Oa(this.g),delete this.g,je.Z.N.call(this)};function Xu(a){wa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Xu,wa);function Yu(){ba.call(this),this.status=1}p(Yu,ba);function Hn(a){this.g=a}p(Hn,Ju),Hn.prototype.ra=function(){Ve(this.g,"a")},Hn.prototype.qa=function(a){Ve(this.g,new Xu(a))},Hn.prototype.pa=function(a){Ve(this.g,new Yu)},Hn.prototype.oa=function(){Ve(this.g,"b")},Vi.prototype.createWebChannel=Vi.prototype.g,je.prototype.send=je.prototype.o,je.prototype.open=je.prototype.m,je.prototype.close=je.prototype.close,Cf=function(){return new Vi},Pf=function(){return wi()},Rf=cn,uc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,Hi=bi,mu.COMPLETE="complete",Sf=mu,lu.EventType=Xr,Xr.OPEN="a",Xr.CLOSE="b",Xr.ERROR="c",Xr.MESSAGE="d",xe.prototype.listen=xe.prototype.J,Es=lu,he.prototype.listenOnce=he.prototype.K,he.prototype.getLastError=he.prototype.Ha,he.prototype.getLastErrorCode=he.prototype.ya,he.prototype.getStatus=he.prototype.ca,he.prototype.getResponseJson=he.prototype.La,he.prototype.getResponseText=he.prototype.la,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Fa,Af=he}).apply(typeof Oi<"u"?Oi:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr="12.14.0";function TI(r){Mr=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new Fc("@firebase/firestore");function tr(){return Dn.logLevel}function D(r,...e){if(Dn.logLevel<=Z.DEBUG){const t=e.map(zc);Dn.debug(`Firestore (${Mr}): ${r}`,...t)}}function fe(r,...e){if(Dn.logLevel<=Z.ERROR){const t=e.map(zc);Dn.error(`Firestore (${Mr}): ${r}`,...t)}}function fr(r,...e){if(Dn.logLevel<=Z.WARN){const t=e.map(zc);Dn.warn(`Firestore (${Mr}): ${r}`,...t)}}function zc(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Nf(r,n,t)}function Nf(r,e,t){let n=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw fe(n),new Error(n)}function $(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Nf(e,s,n)}function z(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Se.UNAUTHENTICATED)))}shutdown(){}}class xI{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new st;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new st,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new st)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?($(typeof n.accessToken=="string",31837,{l:n}),new wI(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string",2055,{h:e}),new Se(e)}}class AI{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class SI{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new AI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Se.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ge(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$(this.o===void 0,3512);const n=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new gh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new gh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=PI(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function H(r,e){return r<e?-1:r>e?1:0}function hc(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return Ka(s)===Ka(i)?H(s,i):Ka(s)?1:-1}return H(r.length,e.length)}const CI=55296,NI=57343;function Ka(r){const e=r.charCodeAt(0);return e>=CI&&e<=NI}function mr(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}function Vf(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="__name__";class Ze{constructor(e,t,n){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&B(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ze?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=Ze.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return H(e.length,t.length)}static compareSegments(e,t){const n=Ze.isNumericId(e),s=Ze.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Ze.extractNumericId(e).compare(Ze.extractNumericId(t)):hc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qt.fromString(e.substring(4,e.length-2))}}class ne extends Ze{construct(e,t,n){return new ne(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new L(N.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new ne(t)}static emptyPath(){return new ne([])}}const VI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ue extends Ze{construct(e,t,n){return new ue(e,t,n)}static isValidIdentifier(e){return VI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ue.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_h}static keyField(){return new ue([_h])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new L(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new L(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ue(t)}static emptyPath(){return new ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ne.fromString(e))}static fromName(e){return new j(ne.fromString(e).popFirst(5))}static empty(){return new j(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ne(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(r,e,t){if(!t)throw new L(N.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function DI(r,e,t,n){if(e===!0&&n===!0)throw new L(N.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function yh(r){if(!j.isDocumentKey(r))throw new L(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ih(r){if(j.isDocumentKey(r))throw new L(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function kf(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function qc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":B(12329,{type:typeof r})}function qe(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new L(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qc(r);throw new L(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(r,e){const t={typeString:r};return e&&(t.value=e),t}function si(r,e){if(!kf(r))throw new L(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new L(N.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=-62135596800,vh=1e6;class re{static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*vh);return new re(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Eh)throw new L(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vh}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(si(e,re._jsonSchema))return new re(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Eh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}re._jsonSchemaVersion="firestore/timestamp/1.0",re._jsonSchema={type:_e("string",re._jsonSchemaVersion),seconds:_e("number"),nanoseconds:_e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new re(0,0))}static max(){return new G(new re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=-1;class lo{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function dc(r){return r.fields.find((e=>e.kind===2))}function pn(r){return r.fields.filter((e=>e.kind!==2))}lo.UNKNOWN_ID=-1;class Wi{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ls{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ls(0,ze.min())}}function Of(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=G.fromTimestamp(n===1e9?new re(t+1,0):new re(t,n));return new ze(s,j.empty(),e)}function Mf(r){return new ze(r.readTime,r.key,pr)}class ze{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ze(G.min(),j.empty(),pr)}static max(){return new ze(G.max(),j.empty(),pr)}}function Kc(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(r.documentKey,e.documentKey),t!==0?t:H(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(r){if(r.code!==N.FAILED_PRECONDITION||r.message!==Lf)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):x.reject(t)}static resolve(e){return new x(((t,n)=>{t(e)}))}static reject(e){return new x(((t,n)=>{n(e)}))}static waitFor(e){return new x(((t,n)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(l=>n(l)))})),o=!0,i===s&&t()}))}static or(e){let t=x.resolve(!1);for(const n of e)t=t.next((s=>s?x.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,i)=>{n.push(t.call(this,s,i))})),this.waitFor(n)}static mapArray(e,t){return new x(((n,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next((f=>{o[u]=f,++c,c===i&&n(o)}),(f=>s(f)))}}))}static doWhile(e,t){return new x(((n,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):n()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="SimpleDb";class Uo{static open(e,t,n,s){try{return new Uo(t,e.transaction(s,n))}catch(i){throw new xs(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new st,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new xs(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=Gc(n.target.error);this.S.reject(new xs(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(D(Fe,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new OI(t)}}class Kt{static delete(e){return D(Fe,"Removing database:",e),_n(df().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!yf())return!1;if(Kt.F())return!0;const e=Ie(),t=Kt.M(e),n=0<t&&t<10,s=Ff(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,Kt.M(Ie())===12.2&&fe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(D(Fe,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new xs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new L(N.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new L(N.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new xs(e,o))},s.onupgradeneeded=i=>{D(Fe,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next((()=>{D(Fe,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const c=Uo.open(this.db,e,i?"readonly":"readwrite",n),l=s(c).next((u=>(c.C(),u))).catch((u=>(c.abort(u),x.reject(u)))).toPromise();return l.catch((()=>{})),await c.D,l}catch(c){const l=c,u=l.name!=="FirebaseError"&&o<3;if(D(Fe,"Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Ff(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class kI{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return _n(this.U.delete())}}class xs extends L{constructor(e,t){super(N.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function tn(r){return r.name==="IndexedDbTransactionError"}class OI{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(D(Fe,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(D(Fe,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),_n(n)}add(e){return D(Fe,"ADD",this.store.name,e,e),_n(this.store.add(e))}get(e){return _n(this.store.get(e)).next((t=>(t===void 0&&(t=null),D(Fe,"GET",this.store.name,e,t),t)))}delete(e){return D(Fe,"DELETE",this.store.name,e),_n(this.store.delete(e))}count(){return D(Fe,"COUNT",this.store.name),_n(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new x(((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}}))}{const i=this.cursor(n),o=[];return this.H(i,((c,l)=>{o.push(l)})).next((()=>o))}}Z(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new x(((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}}))}X(e,t){D(Fe,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const s=this.cursor(n);return this.H(s,((i,o,c)=>c.delete()))}ee(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.H(s,t)}te(e){const t=this.cursor({});return new x(((n,s)=>{t.onerror=i=>{const o=Gc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((c=>{c?o.continue():n()})):n()}}))}H(e,t){const n=[];return new x(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new kI(c),u=t(c.primaryKey,c.value,l);if(u instanceof x){const f=u.catch((p=>(l.done(),x.reject(p))));n.push(f)}l.isDone?s():l.G===null?c.continue():c.continue(l.G)}})).next((()=>x.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function _n(r){return new x(((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Gc(n.target.error);t(s)}}))}let Th=!1;function Gc(r){const e=Kt.M(Ie());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Th||(Th=!0,setTimeout((()=>{throw n}),0)),n}}return r}const As="IndexBackfiller";class MI{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){D(As,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();D(As,`Documents written: ${t}`)}catch(t){tn(t)?D(As,"Ignoring IndexedDB error during index backfill: ",t):await en(t)}await this.re(6e4)}))}}class LI{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const n=new Set;let s=t,i=!0;return x.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!n.has(o))return D(As,`Processing collection: ${o}`),this.oe(e,o,s).next((c=>{s-=c,n.add(o)}));i=!1})))).next((()=>t-s))}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(s,i))).next((c=>(D(As,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>o.size))}))))}_e(e,t){let n=e;return t.changes.forEach(((s,i)=>{const o=Mf(i);Kc(o,n)>0&&(n=o)})),new ze(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Me.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=-1;function Bo(r){return r==null}function js(r){return r===0&&1/r==-1/0}function Uf(r){return typeof r=="number"&&Number.isInteger(r)&&!js(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="";function Ce(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=wh(e)),e=jI(r.get(t),e);return wh(e)}function jI(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case uo:t+="";break;default:t+=i}}return t}function wh(r){return r+uo+""}function tt(r){const e=r.length;if($(e>=2,64408,{path:r}),e===2)return $(r.charAt(0)===uo&&r.charAt(1)==="",56145,{path:r}),ne.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(uo,i);switch((o<0||o>t)&&B(50515,{path:r}),r.charAt(o+1)){case"":const c=r.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:B(61167,{path:r})}i=o+2}return new ne(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="remoteDocuments",ii="owner",Wn="owner",Fs="mutationQueues",FI="userId",Ke="mutations",bh="batchId",vn="userMutationsIndex",xh=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(r,e){return[r,Ce(e)]}function Bf(r,e,t){return[r,Ce(e),t]}const UI={},gr="documentMutations",ho="remoteDocumentsV14",BI=["prefixPath","collectionGroup","readTime","documentId"],Ji="documentKeyIndex",zI=["prefixPath","collectionGroup","documentId"],zf="collectionGroupIndex",$I=["collectionGroup","readTime","prefixPath","documentId"],Us="remoteDocumentGlobal",fc="remoteDocumentGlobalKey",_r="targets",$f="queryTargetsIndex",qI=["canonicalId","targetId"],yr="targetDocuments",KI=["targetId","path"],Hc="documentTargetsIndex",GI=["path","targetId"],fo="targetGlobalKey",xn="targetGlobal",Bs="collectionParents",HI=["collectionId","parent"],Ir="clientMetadata",WI="clientId",zo="bundles",QI="bundleId",$o="namedQueries",JI="name",Wc="indexConfiguration",XI="indexId",mc="collectionGroupIndex",YI="collectionGroup",Ss="indexState",ZI=["indexId","uid"],qf="sequenceNumberIndex",eE=["uid","sequenceNumber"],Rs="indexEntries",tE=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Kf="documentKeyIndex",nE=["indexId","uid","orderedDocumentKey"],qo="documentOverlays",rE=["userId","collectionPath","documentId"],pc="collectionPathOverlayIndex",sE=["userId","collectionPath","largestBatchId"],Gf="collectionGroupOverlayIndex",iE=["userId","collectionGroup","largestBatchId"],Qc="globals",oE="name",Hf=[Fs,Ke,gr,gn,_r,ii,xn,yr,Ir,Us,Bs,zo,$o],aE=[...Hf,qo],Wf=[Fs,Ke,gr,ho,_r,ii,xn,yr,Ir,Us,Bs,zo,$o,qo],Qf=Wf,Jc=[...Qf,Wc,Ss,Rs],cE=Jc,Jf=[...Jc,Qc],lE=Jf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends jf{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Ee(r,e){const t=z(r);return Kt.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function nn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Xf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mi(this.root,e,this.comparator,!0)}}class Mi{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??be.RED,this.left=s??be.EMPTY,this.right=i??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new be(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Sh(this.data.getIterator())}getIteratorFrom(e){return new Sh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new se(this.comparator);return t.data=e,t}}class Sh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Qn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.fields=e,e.sort(ue.comparator)}static empty(){return new Le([])}unionWith(e){let t=new se(ue.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mr(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Yf("Invalid base64 string: "+i):i}})(e);return new pe(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const uE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(r){if($(!!r,39018),typeof r=="string"){let e=0;const t=uE.exec(r);if($(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:le(r.seconds),nanos:le(r.nanos)}}function le(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function yt(r){return typeof r=="string"?pe.fromBase64String(r):pe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="server_timestamp",em="__type__",tm="__previous_value__",nm="__local_write_time__";function Xc(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[em])==null?void 0:n.stringValue)===Zf}function Ko(r){const e=r.mapValue.fields[tm];return Xc(e)?Ko(e):e}function zs(r){const e=_t(r.mapValue.fields[nm].timestampValue);return new re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t,n,s,i,o,c,l,u,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f,this.apiKey=p}}const mo="(default)";class kn{constructor(e,t){this.projectId=e,this.database=t||mo}static empty(){return new kn("","")}get isDefaultDatabase(){return this.database===mo}isEqual(e){return e instanceof kn&&e.projectId===this.projectId&&e.database===this.database}}function dE(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new L(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kn(r.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="__type__",rm="__max__",Ut={mapValue:{fields:{__type__:{stringValue:rm}}}},Zc="__vector__",Er="value",Xi={nullValue:"NULL_VALUE"};function Wt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Xc(r)?4:im(r)?9007199254740991:Go(r)?10:11:B(28295,{value:r})}function at(r,e){if(r===e)return!0;const t=Wt(r);if(t!==Wt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return zs(r).isEqual(zs(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_t(s.timestampValue),c=_t(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(s,i){return yt(s.bytesValue).isEqual(yt(i.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(s,i){return le(s.geoPointValue.latitude)===le(i.geoPointValue.latitude)&&le(s.geoPointValue.longitude)===le(i.geoPointValue.longitude)})(r,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return le(s.integerValue)===le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=le(s.doubleValue),c=le(i.doubleValue);return o===c?js(o)===js(c):isNaN(o)&&isNaN(c)}return!1})(r,e);case 9:return mr(r.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ah(o)!==Ah(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!at(o[l],c[l])))return!1;return!0})(r,e);default:return B(52216,{left:r})}}function $s(r,e){return(r.values||[]).find((t=>at(t,e)))!==void 0}function Qt(r,e){if(r===e)return 0;const t=Wt(r),n=Wt(e);if(t!==n)return H(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(r.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=le(i.integerValue||i.doubleValue),l=le(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(r,e);case 3:return Rh(r.timestampValue,e.timestampValue);case 4:return Rh(zs(r),zs(e));case 5:return hc(r.stringValue,e.stringValue);case 6:return(function(i,o){const c=yt(i),l=yt(o);return c.compareTo(l)})(r.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=H(c[u],l[u]);if(f!==0)return f}return H(c.length,l.length)})(r.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=H(le(i.latitude),le(o.latitude));return c!==0?c:H(le(i.longitude),le(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Ph(r.arrayValue,e.arrayValue);case 10:return(function(i,o){var _,b,P,C;const c=i.fields||{},l=o.fields||{},u=(_=c[Er])==null?void 0:_.arrayValue,f=(b=l[Er])==null?void 0:b.arrayValue,p=H(((P=u==null?void 0:u.values)==null?void 0:P.length)||0,((C=f==null?void 0:f.values)==null?void 0:C.length)||0);return p!==0?p:Ph(u,f)})(r.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ut.mapValue&&o===Ut.mapValue)return 0;if(i===Ut.mapValue)return 1;if(o===Ut.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const _=hc(l[p],f[p]);if(_!==0)return _;const b=Qt(c[l[p]],u[f[p]]);if(b!==0)return b}return H(l.length,f.length)})(r.mapValue,e.mapValue);default:throw B(23264,{he:t})}}function Rh(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return H(r,e);const t=_t(r),n=_t(e),s=H(t.seconds,n.seconds);return s!==0?s:H(t.nanos,n.nanos)}function Ph(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Qt(t[s],n[s]);if(i)return i}return H(t.length,n.length)}function vr(r){return _c(r)}function _c(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=_t(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return yt(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return j.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=_c(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${_c(t.fields[o])}`;return s+"}"})(r.mapValue):B(61005,{value:r})}function Yi(r){switch(Wt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ko(r);return e?16+Yi(e):16;case 5:return 2*r.stringValue.length;case 6:return yt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+Yi(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return nn(n.fields,((i,o)=>{s+=i.length+Yi(o)})),s})(r.mapValue);default:throw B(13486,{value:r})}}function el(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function qs(r){return!!r&&"integerValue"in r}function sm(r){return qs(r)||(function(t){return!!t&&"doubleValue"in t})(r)}function Ks(r){return!!r&&"arrayValue"in r}function Ch(r){return!!r&&"nullValue"in r}function Nh(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Zi(r){return!!r&&"mapValue"in r}function Go(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Yc])==null?void 0:n.stringValue)===Zc}function Ps(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return nn(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ps(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ps(r.arrayValue.values[t]);return e}return{...r}}function im(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===rm}const om={mapValue:{fields:{[Yc]:{stringValue:Zc},[Er]:{arrayValue:{}}}}};function fE(r){return"nullValue"in r?Xi:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?el(kn.empty(),j.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Go(r)?om:{mapValue:{}}:B(35942,{value:r})}function mE(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?el(kn.empty(),j.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?om:"mapValue"in r?Go(r)?{mapValue:{}}:Ut:B(61959,{value:r})}function Vh(r,e){const t=Qt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Dh(r,e){const t=Qt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Zi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ps(t)}setAll(e){let t=ue.emptyPath(),n={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=Ps(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Zi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Zi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){nn(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new Pe(Ps(this.value))}}function am(r){const e=[];return nn(r.fields,((t,n)=>{const s=new ue([t]);if(Zi(n)){const i=am(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Le(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t,n,s,i,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new de(e,0,G.min(),G.min(),G.min(),Pe.empty(),0)}static newFoundDocument(e,t,n,s){return new de(e,1,t,G.min(),n,s,0)}static newNoDocument(e,t){return new de(e,2,t,G.min(),G.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new de(e,3,t,G.min(),G.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof de&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new de(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t){this.position=e,this.inclusive=t}}function kh(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=j.comparator(j.fromName(o.referenceValue),t.key):n=Qt(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Oh(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!at(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t="asc"){this.field=e,this.dir=t}}function pE(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{}class ee extends cm{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new gE(e,t,n):t==="array-contains"?new IE(e,n):t==="in"?new mm(e,n):t==="not-in"?new EE(e,n):t==="array-contains-any"?new vE(e,n):new ee(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new _E(e,n):new yE(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Qt(t,this.value)):t!==null&&Wt(this.value)===Wt(t)&&this.matchesComparison(Qt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ie extends cm{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ie(e,t)}matches(e){return wr(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function wr(r){return r.op==="and"}function yc(r){return r.op==="or"}function tl(r){return lm(r)&&wr(r)}function lm(r){for(const e of r.filters)if(e instanceof ie)return!1;return!0}function Ic(r){if(r instanceof ee)return r.field.canonicalString()+r.op.toString()+vr(r.value);if(tl(r))return r.filters.map((e=>Ic(e))).join(",");{const e=r.filters.map((t=>Ic(t))).join(",");return`${r.op}(${e})`}}function um(r,e){return r instanceof ee?(function(n,s){return s instanceof ee&&n.op===s.op&&n.field.isEqual(s.field)&&at(n.value,s.value)})(r,e):r instanceof ie?(function(n,s){return s instanceof ie&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,c)=>i&&um(o,s.filters[c])),!0):!1})(r,e):void B(19439)}function hm(r,e){const t=r.filters.concat(e);return ie.create(t,r.op)}function dm(r){return r instanceof ee?(function(t){return`${t.field.canonicalString()} ${t.op} ${vr(t.value)}`})(r):r instanceof ie?(function(t){return t.op.toString()+" {"+t.getFilters().map(dm).join(" ,")+"}"})(r):"Filter"}class gE extends ee{constructor(e,t,n){super(e,t,n),this.key=j.fromName(n.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class _E extends ee{constructor(e,t){super(e,"in",t),this.keys=fm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class yE extends ee{constructor(e,t){super(e,"not-in",t),this.keys=fm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function fm(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>j.fromName(n.referenceValue)))}class IE extends ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ks(t)&&$s(t.arrayValue,this.value)}}class mm extends ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$s(this.value.arrayValue,t)}}class EE extends ee{constructor(e,t){super(e,"not-in",t)}matches(e){if($s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$s(this.value.arrayValue,t)}}class vE extends ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ks(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>$s(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Ec(r,e=null,t=[],n=[],s=null,i=null,o=null){return new TE(r,e,t,n,s,i,o)}function On(r){const e=z(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>Ic(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Bo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>vr(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>vr(n))).join(",")),e.Te=t}return e.Te}function oi(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!pE(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!um(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Oh(r.startAt,e.startAt)&&Oh(r.endAt,e.endAt)}function go(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function _o(r,e){return r.filters.filter((t=>t instanceof ee&&t.field.isEqual(e)))}function Mh(r,e,t){let n=Xi,s=!0;for(const i of _o(r,e)){let o=Xi,c=!0;switch(i.op){case"<":case"<=":o=fE(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Xi}Vh({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Vh({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function Lh(r,e,t){let n=Ut,s=!0;for(const i of _o(r,e)){let o=Ut,c=!0;switch(i.op){case">=":case">":o=mE(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Ut}Dh({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Dh({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function pm(r,e,t,n,s,i,o,c){return new Ho(r,e,t,n,s,i,o,c)}function ai(r){return new Ho(r)}function jh(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function wE(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function bE(r){return r.collectionGroup!==null}function Cs(r){const e=z(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new se(ue.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new po(i,n))})),t.has(ue.keyField().canonicalString())||e.Ie.push(new po(ue.keyField(),n))}return e.Ie}function Be(r){const e=z(r);return e.Ee||(e.Ee=xE(e,Cs(r))),e.Ee}function xE(r,e){if(r.limitType==="F")return Ec(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new po(s.field,i)}));const t=r.endAt?new Tr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Tr(r.startAt.position,r.startAt.inclusive):null;return Ec(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function vc(r,e,t){return new Ho(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Wo(r,e){return oi(Be(r),Be(e))&&r.limitType===e.limitType}function gm(r){return`${On(Be(r))}|lt:${r.limitType}`}function nr(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>dm(s))).join(", ")}]`),Bo(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>vr(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>vr(s))).join(",")),`Target(${n})`})(Be(r))}; limitType=${r.limitType})`}function ci(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of Cs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(o,c,l){const u=kh(o,c,l);return o.inclusive?u<=0:u<0})(n.startAt,Cs(n),s)||n.endAt&&!(function(o,c,l){const u=kh(o,c,l);return o.inclusive?u>=0:u>0})(n.endAt,Cs(n),s))})(r,e)}function _m(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ym(r){return(e,t)=>{let n=!1;for(const s of Cs(r)){const i=AE(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function AE(r,e,t){const n=r.field.isKeyField()?j.comparator(e.key,t.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Qt(l,u):B(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return B(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){nn(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return Xf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=new ae(j.comparator);function Ue(){return SE}const Im=new ae(j.comparator);function vs(...r){let e=Im;for(const t of r)e=e.insert(t.key,t);return e}function Em(r){let e=Im;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function nt(){return Ns()}function vm(){return Ns()}function Ns(){return new Tt((r=>r.toString()),((r,e)=>r.isEqual(e)))}const RE=new ae(j.comparator),PE=new se(j.comparator);function X(...r){let e=PE;for(const t of r)e=e.add(t);return e}const CE=new se(H);function nl(){return CE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:js(e)?"-0":e}}function rl(r){return{integerValue:""+r}}function NE(r,e){return Uf(e)?rl(e):Qo(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this._=void 0}}function VE(r,e,t){return r instanceof Gs?(function(s,i){const o={fields:{[em]:{stringValue:Zf},[nm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xc(i)&&(i=Ko(i)),i&&(o.fields[tm]=i),{mapValue:o}})(t,e):r instanceof br?wm(r,e):r instanceof xr?bm(r,e):r instanceof Ar?(function(s,i){const o=Tm(s,i),c=yo(o)+yo(s.Ae);return qs(o)&&qs(s.Ae)?rl(c):Qo(s.serializer,c)})(r,e):r instanceof Hs?(function(s,i){return Fh(s,i,Math.min)})(r,e):r instanceof Ws?(function(s,i){return Fh(s,i,Math.max)})(r,e):void 0}function DE(r,e,t){return r instanceof br?wm(r,e):r instanceof xr?bm(r,e):t}function Tm(r,e){return r instanceof Ar?sm(e)?e:{integerValue:0}:null}class Gs extends Jo{}class br extends Jo{constructor(e){super(),this.elements=e}}function wm(r,e){const t=xm(e);for(const n of r.elements)t.some((s=>at(s,n)))||t.push(n);return{arrayValue:{values:t}}}class xr extends Jo{constructor(e){super(),this.elements=e}}function bm(r,e){let t=xm(e);for(const n of r.elements)t=t.filter((s=>!at(s,n)));return{arrayValue:{values:t}}}class sl extends Jo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}class Ar extends sl{}class Hs extends sl{}class Ws extends sl{}function Fh(r,e,t){if(!sm(e))return r.Ae;const n=t(yo(e),yo(r.Ae));return qs(e)&&qs(r.Ae)?rl(n):Qo(r.serializer,n)}function yo(r){return le(r.integerValue||r.doubleValue)}function xm(r){return Ks(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,t){this.field=e,this.transform=t}}function OE(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof br&&s instanceof br||n instanceof xr&&s instanceof xr?mr(n.elements,s.elements,at):n instanceof Ar&&s instanceof Ar||n instanceof Hs&&s instanceof Hs||n instanceof Ws&&s instanceof Ws?at(n.Ae,s.Ae):n instanceof Gs&&s instanceof Gs})(r.transform,e.transform)}class ME{constructor(e,t){this.version=e,this.transformResults=t}}class ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eo(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Xo{}function Am(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Yo(r.key,ke.none()):new Lr(r.key,r.data,ke.none());{const t=r.data,n=Pe.empty();let s=new se(ue.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new wt(r.key,n,new Le(s.toArray()),ke.none())}}function LE(r,e,t){r instanceof Lr?(function(s,i,o){const c=s.value.clone(),l=Bh(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(r,e,t):r instanceof wt?(function(s,i,o){if(!eo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Bh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Sm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(r,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Vs(r,e,t,n){return r instanceof Lr?(function(i,o,c,l){if(!eo(i.precondition,o))return c;const u=i.value.clone(),f=zh(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(r,e,t,n):r instanceof wt?(function(i,o,c,l){if(!eo(i.precondition,o))return c;const u=zh(i.fieldTransforms,l,o),f=o.data;return f.setAll(Sm(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(r,e,t,n):(function(i,o,c){return eo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(r,e,t)}function jE(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Tm(n.transform,s||null);i!=null&&(t===null&&(t=Pe.empty()),t.set(n.field,i))}return t||null}function Uh(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&mr(n,s,((i,o)=>OE(i,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Lr extends Xo{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wt extends Xo{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sm(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function Bh(r,e,t){const n=new Map;$(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,DE(o,c,t[s]))}return n}function zh(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,VE(i,o,e))}return n}class Yo extends Xo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rm extends Xo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&LE(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Vs(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Vs(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=vm();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Am(o,c);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(G.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),X())}isEqual(e){return this.batchId===e.batchId&&mr(this.mutations,e.mutations,((t,n)=>Uh(t,n)))&&mr(this.baseMutations,e.baseMutations,((t,n)=>Uh(t,n)))}}class ol{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){$(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=(function(){return RE})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new ol(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,te;function UE(r){switch(r){case N.OK:return B(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return B(15467,{code:r})}}function Pm(r){if(r===void 0)return fe("GRPC error has no .code"),N.UNKNOWN;switch(r){case ge.OK:return N.OK;case ge.CANCELLED:return N.CANCELLED;case ge.UNKNOWN:return N.UNKNOWN;case ge.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ge.INTERNAL:return N.INTERNAL;case ge.UNAVAILABLE:return N.UNAVAILABLE;case ge.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ge.NOT_FOUND:return N.NOT_FOUND;case ge.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ge.ABORTED:return N.ABORTED;case ge.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ge.DATA_LOSS:return N.DATA_LOSS;default:return B(39323,{code:r})}}(te=ge||(ge={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=new qt([4294967295,4294967295],0);function $h(r){const e=BE().encode(r),t=new xf;return t.update(e),new Uint8Array(t.digest())}function qh(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qt([t,n],0),new qt([s,i],0)]}class cl{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ts(`Invalid padding: ${t}`);if(n<0)throw new Ts(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=qt.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(qt.fromNumber(n)));return s.compare(zE)===1&&(s=new qt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=$h(e),[n,s]=qh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);if(!this.we(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new cl(i,s,t);return n.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=$h(e),[n,s]=qh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,li.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new jr(G.min(),s,new ae(H),Ue(),X())}}class li{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new li(n,t,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class Cm{constructor(e,t){this.targetId=e,this.Ce=t}}class Nm{constructor(e,t,n=pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Kh{constructor(e){this.targetId=e,this.ve=0,this.Fe=Gh(),this.Me=pe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=X(),t=X(),n=X();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:B(38017,{changeType:i})}})),new li(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Gh()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,$(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const fs="WatchChangeAggregator";class $E{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ue(),this.Je=Li(),this.He=Li(),this.Ze=new ae(H)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.ze.get(t);if(n)switch(e.state){case 0:this.nt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Le(e.resumeToken));break;default:B(56790,{state:e.state})}else D(fs,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,n=e.Ce.count,s=this.st(t);if(s){const i=s.target;if(go(i))if(n===0){const o=new j(i.path);this.et(t,o,de.newNoDocument(o,G.min()))}else $(n===1,20013,{expectedCount:n});else{const o=this.ot(t);if(o!==n){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}_t(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=yt(n).toUint8Array()}catch(l){if(l instanceof Yf)return fr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new cl(o,s,i)}catch(l){return fr(l instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ut(e,t,n){return t.Ce.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const o=this.Ge.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Pt(e){const t=new Map;this.ze.forEach(((i,o)=>{const c=this.st(o);if(c){if(i.current&&go(c.target)){const l=new j(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.et(o,l,de.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.qe())}}));let n=X();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new jr(e,t,this.Ze,this.je,n);return this.je=Ue(),this.Je=Li(),this.He=Li(),this.Ze=new ae(H),s}Ye(e,t){const n=this.ze.get(e);if(!n||!this.nt(e))return void D(fs,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.It(e,t.key)?2:0;n.Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Tt(t.key).add(e)),this.He=this.He.insert(t.key,this.Et(t.key).add(e))}et(e,t,n){const s=this.ze.get(e);s&&this.nt(e)?(this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Et(t).delete(e)),this.He=this.He.insert(t,this.Et(t).add(e)),n&&(this.je=this.je.insert(t,n))):D(fs,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const t=this.ze.get(e);if(!t)return 0;const n=t.ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){let t=this.ze.get(e);t||(D(fs,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Kh(e),this.ze.set(e,t)),t.$e()}Et(e){let t=this.He.get(e);return t||(t=new se(H),this.He=this.He.insert(e,t)),t}Tt(e){let t=this.Je.get(e);return t||(t=new se(H),this.Je=this.Je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||D(fs,"Detected inactive target",e),t}st(e){const t=this.ze.get(e);return t===void 0||t.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new Kh(e)),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Li(){return new ae(j.comparator)}function Gh(){return new ae(j.comparator)}const qE={asc:"ASCENDING",desc:"DESCENDING"},KE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GE={and:"AND",or:"OR"};class HE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Tc(r,e){return r.useProto3Json||Bo(e)?e:{value:e}}function Sr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vm(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function WE(r,e){return Sr(r,e.toTimestamp())}function Oe(r){return $(!!r,49232),G.fromTimestamp((function(t){const n=_t(t);return new re(n.seconds,n.nanos)})(r))}function ll(r,e){return wc(r,e).canonicalString()}function wc(r,e){const t=(function(s){return new ne(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Dm(r){const e=ne.fromString(r);return $(zm(e),10190,{key:e.toString()}),e}function Io(r,e){return ll(r.databaseId,e.path)}function An(r,e){const t=Dm(e);if(t.get(1)!==r.databaseId.projectId)throw new L(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new L(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new j(Mm(t))}function km(r,e){return ll(r.databaseId,e)}function Om(r){const e=Dm(r);return e.length===4?ne.emptyPath():Mm(e)}function bc(r){return new ne(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Mm(r){return $(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Hh(r,e,t){return{name:Io(r,e),fields:t.value.mapValue.fields}}function QE(r,e,t){const n=An(r,e.name),s=Oe(e.updateTime),i=e.createTime?Oe(e.createTime):G.min(),o=new Pe({mapValue:{fields:e.fields}}),c=de.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function JE(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:B(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?($(f===void 0||typeof f=="string",58123),pe.fromBase64String(f||"")):($(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),pe.fromUint8Array(f||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?N.UNKNOWN:Pm(u.code);return new L(f,u.message||"")})(o);t=new Nm(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=An(r,n.document.name),i=Oe(n.document.updateTime),o=n.document.createTime?Oe(n.document.createTime):G.min(),c=new Pe({mapValue:{fields:n.document.fields}}),l=de.newFoundDocument(s,i,o,c),u=n.targetIds||[],f=n.removedTargetIds||[];t=new to(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=An(r,n.document),i=n.readTime?Oe(n.readTime):G.min(),o=de.newNoDocument(s,i),c=n.removedTargetIds||[];t=new to([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=An(r,n.document),i=n.removedTargetIds||[];t=new to([],i,s,null)}else{if(!("filter"in e))return B(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new FE(s,i),c=n.targetId;t=new Cm(c,o)}}return t}function Eo(r,e){let t;if(e instanceof Lr)t={update:Hh(r,e.key,e.value)};else if(e instanceof Yo)t={delete:Io(r,e.key)};else if(e instanceof wt)t={update:Hh(r,e.key,e.data),updateMask:nv(e.fieldMask)};else{if(!(e instanceof Rm))return B(16599,{Vt:e.type});t={verify:Io(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const c=o.transform;if(c instanceof Gs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof br)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof xr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ar)return{fieldPath:o.field.canonicalString(),increment:c.Ae};if(c instanceof Hs)return{fieldPath:o.field.canonicalString(),minimum:c.Ae};if(c instanceof Ws)return{fieldPath:o.field.canonicalString(),maximum:c.Ae};throw B(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:WE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)})(r,e.precondition)),t}function xc(r,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?ke.updateTime(Oe(i.updateTime)):i.exists!==void 0?ke.exists(i.exists):ke.none()})(e.currentDocument):ke.none(),n=e.updateTransforms?e.updateTransforms.map((s=>(function(o,c){let l=null;if("setToServerValue"in c)$(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),l=new Gs;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new br(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new xr(f)}else"increment"in c?l=new Ar(o,c.increment):"minimum"in c?l=new Hs(o,c.minimum):"maximum"in c?l=new Ws(o,c.maximum):B(16584,{proto:c});const u=ue.fromServerFormat(c.fieldPath);return new kE(u,l)})(r,s))):[];if(e.update){e.update.name;const s=An(r,e.update.name),i=new Pe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(l){const u=l.fieldPaths||[];return new Le(u.map((f=>ue.fromServerFormat(f))))})(e.updateMask);return new wt(s,i,o,t,n)}return new Lr(s,i,t,n)}if(e.delete){const s=An(r,e.delete);return new Yo(s,t)}if(e.verify){const s=An(r,e.verify);return new Rm(s,t)}return B(1463,{proto:e})}function XE(r,e){return r&&r.length>0?($(e!==void 0,14353),r.map((t=>(function(s,i){let o=s.updateTime?Oe(s.updateTime):Oe(i);return o.isEqual(G.min())&&(o=Oe(i)),new ME(o,s.transformResults||[])})(t,e)))):[]}function Lm(r,e){return{documents:[km(r,e.path)]}}function jm(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=km(r,s);const i=(function(u){if(u.length!==0)return Bm(ie.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(_){return{field:rr(_.field),direction:ZE(_.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Tc(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{dt:t,parent:s}}function Fm(r){let e=Om(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){$(n===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(p){const _=Um(p);return _ instanceof ie&&tl(_)?_.getFilters():[_]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((_=>(function(P){return new po(sr(P.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let _;return _=typeof p=="object"?p.value:p,Bo(_)?null:_})(t.limit));let l=null;t.startAt&&(l=(function(p){const _=!!p.before,b=p.values||[];return new Tr(b,_)})(t.startAt));let u=null;return t.endAt&&(u=(function(p){const _=!p.before,b=p.values||[];return new Tr(b,_)})(t.endAt)),pm(e,s,o,i,c,"F",l,u)}function YE(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Um(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=sr(t.unaryFilter.field);return ee.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=sr(t.unaryFilter.field);return ee.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=sr(t.unaryFilter.field);return ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=sr(t.unaryFilter.field);return ee.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}})(r):r.fieldFilter!==void 0?(function(t){return ee.create(sr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return ie.create(t.compositeFilter.filters.map((n=>Um(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}})(t.compositeFilter.op))})(r):B(30097,{filter:r})}function ZE(r){return qE[r]}function ev(r){return KE[r]}function tv(r){return GE[r]}function rr(r){return{fieldPath:r.canonicalString()}}function sr(r){return ue.fromServerFormat(r.fieldPath)}function Bm(r){return r instanceof ee?(function(t){if(t.op==="=="){if(Nh(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NAN"}};if(Ch(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Nh(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NOT_NAN"}};if(Ch(t.value))return{unaryFilter:{field:rr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rr(t.field),op:ev(t.op),value:t.value}}})(r):r instanceof ie?(function(t){const n=t.getFilters().map((s=>Bm(s)));return n.length===1?n[0]:{compositeFilter:{op:tv(t.op),filters:n}}})(r):B(54877,{filter:r})}function nv(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function zm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function $m(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,n,s,i=G.min(),o=G.min(),c=pe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new rt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.gt=e}}function rv(r,e){let t;if(e.document)t=QE(r.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=j.fromSegments(e.noDocument.path),s=Ln(e.noDocument.readTime);t=de.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return B(56709);{const n=j.fromSegments(e.unknownDocument.path),s=Ln(e.unknownDocument.version);t=de.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime((function(s){const i=new re(s[0],s[1]);return G.fromTimestamp(i)})(e.readTime)),t}function Wh(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:vo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(i,o){return{name:Io(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Sr(i,o.version.toTimestamp()),createTime:Sr(i,o.createTime.toTimestamp())}})(r.gt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Mn(e.version)};else{if(!e.isUnknownDocument())return B(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:Mn(e.version)}}return n}function vo(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Mn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ln(r){const e=new re(r.seconds,r.nanoseconds);return G.fromTimestamp(e)}function yn(r,e){const t=(e.baseMutations||[]).map((i=>xc(r.gt,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map((i=>xc(r.gt,i))),s=re.fromMillis(e.localWriteTimeMs);return new il(e.batchId,s,t,n)}function ws(r){const e=Ln(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Ln(r.lastLimboFreeSnapshotVersion):G.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){const o=i.documents.length;return $(o===1,1966,{count:o}),Be(ai(Om(i.documents[0])))})(r.query):(function(i){return Be(Fm(i))})(r.query),new rt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,pe.fromBase64String(r.resumeToken))}function Km(r,e){const t=Mn(e.snapshotVersion),n=Mn(e.lastLimboFreeSnapshotVersion);let s;s=go(e.target)?Lm(r.gt,e.target):jm(r.gt,e.target).dt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:On(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Gm(r){const e=Fm({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?vc(e,e.limit,"L"):e}function Ga(r,e){return new al(e.largestBatchId,xc(r.gt,e.overlayMutation))}function Qh(r,e){const t=e.path.lastSegment();return[r,Ce(e.path.popLast()),t]}function Jh(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Mn(n.readTime),documentKey:Ce(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{getBundleMetadata(e,t){return Xh(e).get(t).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:Ln(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(e,t){return Xh(e).put((function(s){return{bundleId:s.id,createTime:Mn(Oe(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return Yh(e).get(t).next((n=>{if(n)return(function(i){return{name:i.name,query:Gm(i.bundledQuery),readTime:Ln(i.readTime)}})(n)}))}saveNamedQuery(e,t){return Yh(e).put((function(s){return{name:s.name,readTime:Mn(Oe(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function Xh(r){return Ee(r,zo)}function Yh(r){return Ee(r,$o)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const n=t.uid||"";return new Zo(e,n)}getOverlay(e,t){return ms(e).get(Qh(this.userId,t)).next((n=>n?Ga(this.serializer,n):null))}getOverlays(e,t){const n=nt();return x.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){const s=[];return n.forEach(((i,o)=>{const c=new al(t,o);s.push(this.wt(e,c))})),x.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach((o=>s.add(Ce(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(ms(e).X(pc,c))})),x.waitFor(i)}getOverlaysForCollection(e,t,n){const s=nt(),i=Ce(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ms(e).J(pc,o).next((c=>{for(const l of c){const u=Ga(this.serializer,l);s.set(u.getKey(),u)}return s}))}getOverlaysForCollectionGroup(e,t,n,s){const i=nt();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ms(e).ee({index:Gf,range:c},((l,u,f)=>{const p=Ga(this.serializer,u);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()})).next((()=>i))}wt(e,t){return ms(e).put((function(s,i,o){const[c,l,u]=Qh(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Eo(s.gt,o.mutation)}})(this.serializer,this.userId,t))}}function ms(r){return Ee(r,qo)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{St(e){return Ee(e,Qc)}getSessionToken(e){return this.St(e).get("sessionToken").next((t=>{const n=t==null?void 0:t.value;return n?pe.fromUint8Array(n):pe.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){}bt(e,t){this.Dt(e,t),t.Ct()}Dt(e,t){if("nullValue"in e)this.vt(t,5);else if("booleanValue"in e)this.vt(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.vt(t,15),t.Ft(le(e.integerValue));else if("doubleValue"in e){const n=le(e.doubleValue);isNaN(n)?this.vt(t,13):(this.vt(t,15),js(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.vt(t,20),typeof n=="string"&&(n=_t(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.vt(t,30),t.Nt(yt(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.vt(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?im(e)?this.vt(t,Number.MAX_SAFE_INTEGER):Go(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):B(19022,{Kt:e})}xt(e,t){this.vt(t,25),this.Ut(e,t)}Ut(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.vt(t,55);for(const s of Object.keys(n))this.xt(s,t),this.Dt(n[s],t)}Lt(e,t){var o,c;const n=e.fields||{};this.vt(t,53);const s=Er,i=((c=(o=n[s].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.vt(t,15),t.Ft(le(i)),this.xt(s,t),this.Dt(n[s],t)}qt(e,t){const n=e.values||[];this.vt(t,50);for(const s of n)this.Dt(s,t)}Bt(e,t){this.vt(t,37),j.fromName(e).path.forEach((n=>{this.vt(t,60),this.Ut(n,t)}))}vt(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}In.$t=new In;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=255;function ov(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Zh(r){const e=64-(function(n){let s=0;for(let i=0;i<8;++i){const o=ov(255&n[i]);if(s+=o,o!==8)break}return s})(r);return Math.ceil(e/8)}class av{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Qt(n.value),n=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Qt(n);else if(n<2048)this.Qt(960|n>>>6),this.Qt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Qt(480|n>>>12),this.Qt(128|63&n>>>6),this.Qt(128|63&n);else{const s=t.codePointAt(0);this.Qt(240|s>>>18),this.Qt(128|63&s>>>12),this.Qt(128|63&s>>>6),this.Qt(128|63&s)}}this.Gt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.jt(n);else if(n<2048)this.jt(960|n>>>6),this.jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|n>>>12),this.jt(128|63&n>>>6),this.jt(128|63&n);else{const s=t.codePointAt(0);this.jt(240|s>>>18),this.jt(128|63&s>>>12),this.jt(128|63&s>>>6),this.jt(128|63&s)}}this.Jt()}Xt(e){const t=this.Yt(e),n=Zh(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}tn(e){const t=this.Yt(e),n=Zh(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}nn(){this.rn(Jn),this.rn(255)}sn(){this._n(Jn),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Yt(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Qt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===Jn?(this.rn(Jn),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Jn?(this._n(Jn),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class cv{constructor(e){this.un=e}Nt(e){this.un.Wt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Xt(e)}Ct(){this.un.nn()}}class lv{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Zt(e)}Ft(e){this.un.tn(e)}Ct(){this.un.sn()}}class ps{constructor(){this.un=new av,this.ascending=new cv(this.un),this.descending=new lv(this.un)}seed(e){this.un.seed(e)}cn(e){return e===0?this.ascending:this.descending}an(){return this.un.an()}reset(){this.un.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t,n,s){this.ln=e,this.hn=t,this.Pn=n,this.Tn=s}In(){const e=this.Tn.length,t=e===0||this.Tn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.Tn,0),t!==e?n.set([0],this.Tn.length):++n[n.length-1],new En(this.ln,this.hn,this.Pn,n)}En(e,t,n){return{indexId:this.ln,uid:e,arrayValue:no(this.Pn),directionalValue:no(this.Tn),orderedDocumentKey:no(t),documentKey:n.path.toArray()}}Rn(e,t,n){const s=this.En(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function Vt(r,e){let t=r.ln-e.ln;return t!==0?t:(t=ed(r.Pn,e.Pn),t!==0?t:(t=ed(r.Tn,e.Tn),t!==0?t:j.comparator(r.hn,e.hn)))}function ed(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function no(r){return _f()?(function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n})(r):r}function td(r){return typeof r!="string"?r:(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(r)}class nd{constructor(e){this.An=new se(((t,n)=>ue.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Vn=e.orderBy,this.dn=[];for(const t of e.filters){const n=t;n.isInequality()?this.An=this.An.add(n):this.dn.push(n)}}get mn(){return this.An.size>1}fn(e){if($(e.collectionGroup===this.collectionId,49279),this.mn)return!1;const t=dc(e);if(t!==void 0&&!this.gn(t))return!1;const n=pn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.gn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.An.size>0){const c=this.An.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.pn(c,l)||!this.yn(this.Vn[o++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.Vn.length||!this.yn(this.Vn[o++],c))return!1}return!0}wn(){if(this.mn)return null;let e=new se(ue.comparator);const t=[];for(const n of this.dn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Wi(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Wi(n.field,0))}for(const n of this.Vn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Wi(n.field,n.dir==="asc"?0:1)));return new lo(lo.UNKNOWN_ID,this.collectionId,t,Ls.empty())}gn(e){for(const t of this.dn)if(this.pn(t,e))return!0;return!1}pn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}yn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(r){var t,n;if($(r instanceof ee||r instanceof ie,20012),r instanceof ee){if(r instanceof mm){const s=((n=(t=r.value.arrayValue)==null?void 0:t.values)==null?void 0:n.map((i=>ee.create(r.field,"==",i))))||[];return ie.create(s,"or")}return r}const e=r.filters.map((s=>Hm(s)));return ie.create(e,r.op)}function uv(r){if(r.getFilters().length===0)return[];const e=Rc(Hm(r));return $(Wm(e),7391),Ac(e)||Sc(e)?[e]:e.getFilters()}function Ac(r){return r instanceof ee}function Sc(r){return r instanceof ie&&tl(r)}function Wm(r){return Ac(r)||Sc(r)||(function(t){if(t instanceof ie&&yc(t)){for(const n of t.getFilters())if(!Ac(n)&&!Sc(n))return!1;return!0}return!1})(r)}function Rc(r){if($(r instanceof ee||r instanceof ie,34018),r instanceof ee)return r;if(r.filters.length===1)return Rc(r.filters[0]);const e=r.filters.map((n=>Rc(n)));let t=ie.create(e,r.op);return t=To(t),Wm(t)?t:($(t instanceof ie,64498),$(wr(t),40251),$(t.filters.length>1,57927),t.filters.reduce(((n,s)=>ul(n,s))))}function ul(r,e){let t;return $(r instanceof ee||r instanceof ie,38388),$(e instanceof ee||e instanceof ie,25473),t=r instanceof ee?e instanceof ee?(function(s,i){return ie.create([s,i],"and")})(r,e):rd(r,e):e instanceof ee?rd(e,r):(function(s,i){if($(s.filters.length>0&&i.filters.length>0,48005),wr(s)&&wr(i))return hm(s,i.getFilters());const o=yc(s)?s:i,c=yc(s)?i:s,l=o.filters.map((u=>ul(u,c)));return ie.create(l,"or")})(r,e),To(t)}function rd(r,e){if(wr(e))return hm(e,r.getFilters());{const t=e.filters.map((n=>ul(r,n)));return ie.create(t,"or")}}function To(r){if($(r instanceof ee||r instanceof ie,11850),r instanceof ee)return r;const e=r.getFilters();if(e.length===1)return To(e[0]);if(lm(r))return r;const t=e.map((s=>To(s))),n=[];return t.forEach((s=>{s instanceof ee?n.push(s):s instanceof ie&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:ie.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.Sn=new hl}addToCollectionParentIndex(e,t){return this.Sn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(ze.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(ze.min())}updateCollectionGroup(e,t,n){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class hl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new se(ne.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new se(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="IndexedDbIndexManager",ji=new Uint8Array(0);class dv{constructor(e,t){this.databaseId=t,this.bn=new hl,this.Dn=new Tt((n=>On(n)),((n,s)=>oi(n,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.bn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.bn.add(t)}));const i={collectionId:n,parent:Ce(s)};return id(e).put(i)}return x.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[Vf(t),""],!1,!0);return id(e).J(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;n.push(tt(o.parent))}return n}))}addFieldIndex(e,t){const n=gs(e),s=(function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Yn(e);return i.next((c=>{o.put(Jh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=gs(e),s=Yn(e),i=Xn(e);return n.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=gs(e),n=Xn(e),s=Yn(e);return t.X().next((()=>n.X())).next((()=>s.X()))}createTargetIndexes(e,t){return x.forEach(this.Cn(t),(n=>this.getIndexType(e,n).next((s=>{if(s===0||s===1){const i=new nd(n).wn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const n=Xn(e);let s=!0;const i=new Map;return x.forEach(this.Cn(t),(o=>this.vn(e,o).next((c=>{s&&(s=!!c),i.set(o,c)})))).next((()=>{if(s){let o=X();const c=[];return x.forEach(i,((l,u)=>{D(sd,`Using index ${(function(K){return`id=${K.indexId}|cg=${K.collectionGroup}|f=${K.fields.map((Y=>`${Y.fieldPath}:${Y.kind}`)).join(",")}`})(l)} to execute ${On(t)}`);const f=(function(K,Y){const Q=dc(Y);if(Q===void 0)return null;for(const O of _o(K,Q.fieldPath))switch(O.op){case"array-contains-any":return O.value.arrayValue.values||[];case"array-contains":return[O.value]}return null})(u,l),p=(function(K,Y){const Q=new Map;for(const O of pn(Y))for(const E of _o(K,O.fieldPath))switch(E.op){case"==":case"in":Q.set(O.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return Q.set(O.fieldPath.canonicalString(),E.value),Array.from(Q.values())}return null})(u,l),_=(function(K,Y){const Q=[];let O=!0;for(const E of pn(Y)){const y=E.kind===0?Mh(K,E.fieldPath,K.startAt):Lh(K,E.fieldPath,K.startAt);Q.push(y.value),O&&(O=y.inclusive)}return new Tr(Q,O)})(u,l),b=(function(K,Y){const Q=[];let O=!0;for(const E of pn(Y)){const y=E.kind===0?Lh(K,E.fieldPath,K.endAt):Mh(K,E.fieldPath,K.endAt);Q.push(y.value),O&&(O=y.inclusive)}return new Tr(Q,O)})(u,l),P=this.Fn(l,u,_),C=this.Fn(l,u,b),k=this.Mn(l,u,p),F=this.xn(l.indexId,f,P,_.inclusive,C,b.inclusive,k);return x.forEach(F,(q=>n.Z(q,t.limit).next((K=>{K.forEach((Y=>{const Q=j.fromSegments(Y.documentKey);o.has(Q)||(o=o.add(Q),c.push(Q))}))}))))})).next((()=>c))}return x.resolve(null)}))}Cn(e){let t=this.Dn.get(e);return t||(e.filters.length===0?t=[e]:t=uv(ie.create(e.filters,"and")).map((n=>Ec(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Dn.set(e,t),t)}xn(e,t,n,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),u=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const _=t?this.On(t[p/u]):ji,b=this.Nn(e,_,n[p%u],s),P=this.Bn(e,_,i[p%u],o),C=c.map((k=>this.Nn(e,_,k,!0)));f.push(...this.createRange(b,P,C))}return f}Nn(e,t,n,s){const i=new En(e,j.empty(),t,n);return s?i:i.In()}Bn(e,t,n,s){const i=new En(e,j.empty(),t,n);return s?i.In():i}vn(e,t){const n=new nd(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const c of i)n.fn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o}))}getIndexType(e,t){let n=2;const s=this.Cn(t);return x.forEach(s,(i=>this.vn(e,i).next((o=>{o?n!==0&&o.fields.length<(function(l){let u=new se(ue.comparator),f=!1;for(const p of l.filters)for(const _ of p.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:u=u.add(_.field));for(const p of l.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(f?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&n===2?1:n))}Ln(e,t){const n=new ps;for(const s of pn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.cn(s.kind);In.$t.bt(i,o)}return n.an()}On(e){const t=new ps;return In.$t.bt(e,t.cn(0)),t.an()}kn(e,t){const n=new ps;return In.$t.bt(el(this.databaseId,t),n.cn((function(i){const o=pn(i);return o.length===0?0:o[o.length-1].kind})(e))),n.an()}Mn(e,t,n){if(n===null)return[];let s=[];s.push(new ps);let i=0;for(const o of pn(e)){const c=n[i++];for(const l of s)if(this.qn(t,o.fieldPath)&&Ks(c))s=this.Kn(s,o,c);else{const u=l.cn(o.kind);In.$t.bt(c,u)}}return this.Un(s)}Fn(e,t,n){return this.Mn(e,t,n.position)}Un(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Kn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const l=new ps;l.seed(c.an()),In.$t.bt(o,l.cn(t.kind)),i.push(l)}return i}qn(e,t){return!!e.filters.find((n=>n instanceof ee&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=gs(e),s=Yn(e);return(t?n.J(mc,IDBKeyRange.bound(t,t)):n.J()).next((i=>{const o=[];return x.forEach(i,(c=>s.get([c.indexId,this.uid]).next((l=>{o.push((function(f,p){const _=p?new Ls(p.sequenceNumber,new ze(Ln(p.readTime),new j(tt(p.documentKey)),p.largestBatchId)):Ls.empty(),b=f.fields.map((([P,C])=>new Wi(ue.fromServerFormat(P),C)));return new lo(f.indexId,f.collectionGroup,b,_)})(c,l))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:H(n.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const s=gs(e),i=Yn(e);return this.$n(e).next((o=>s.J(mc,IDBKeyRange.bound(t,t)).next((c=>x.forEach(c,(l=>i.put(Jh(l.indexId,this.uid,o,n))))))))}updateIndexEntries(e,t){const n=new Map;return x.forEach(t,((s,i)=>{const o=n.get(s.collectionGroup);return(o?x.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((c=>(n.set(s.collectionGroup,c),x.forEach(c,(l=>this.Wn(e,s,l).next((u=>{const f=this.Qn(i,l);return u.isEqual(f)?x.resolve():this.Gn(e,i,l,u,f)})))))))}))}zn(e,t,n,s){return Xn(e).put(s.En(this.uid,this.kn(n,t.key),t.key))}jn(e,t,n,s){return Xn(e).delete(s.Rn(this.uid,this.kn(n,t.key),t.key))}Wn(e,t,n){const s=Xn(e);let i=new se(Vt);return s.ee({index:Kf,range:IDBKeyRange.only([n.indexId,this.uid,no(this.kn(n,t))])},((o,c)=>{i=i.add(new En(n.indexId,t,td(c.arrayValue),td(c.directionalValue)))})).next((()=>i))}Qn(e,t){let n=new se(Vt);const s=this.Ln(t,e);if(s==null)return n;const i=dc(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ks(o))for(const c of o.arrayValue.values||[])n=n.add(new En(t.indexId,e.key,this.On(c),s))}else n=n.add(new En(t.indexId,e.key,ji,s));return n}Gn(e,t,n,s,i){D(sd,"Updating index entries for document '%s'",t.key);const o=[];return(function(l,u,f,p,_){const b=l.getIterator(),P=u.getIterator();let C=Qn(b),k=Qn(P);for(;C||k;){let F=!1,q=!1;if(C&&k){const K=f(C,k);K<0?q=!0:K>0&&(F=!0)}else C!=null?q=!0:F=!0;F?(p(k),k=Qn(P)):q?(_(C),C=Qn(b)):(C=Qn(b),k=Qn(P))}})(s,i,Vt,(c=>{o.push(this.zn(e,t,n,c))}),(c=>{o.push(this.jn(e,t,n,c))})),x.waitFor(o)}$n(e){let t=1;return Yn(e).ee({index:qf,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((o,c)=>Vt(o,c))).filter(((o,c,l)=>!c||Vt(o,l[c-1])!==0));const s=[];s.push(e);for(const o of n){const c=Vt(o,e),l=Vt(o,t);if(c===0)s[0]=e.In();else if(c>0&&l<0)s.push(o),s.push(o.In());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Jn(s[o],s[o+1]))return[];const c=s[o].Rn(this.uid,ji,j.empty()),l=s[o+1].Rn(this.uid,ji,j.empty());i.push(IDBKeyRange.bound(c,l))}return i}Jn(e,t){return Vt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(od)}getMinOffset(e,t){return x.mapArray(this.Cn(t),(n=>this.vn(e,n).next((s=>s||B(44426))))).next(od)}}function id(r){return Ee(r,Bs)}function Xn(r){return Ee(r,Rs)}function gs(r){return Ee(r,Wc)}function Yn(r){return Ee(r,Ss)}function od(r){$(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Kc(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new ze(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qm=41943040;class Re{static withCacheSize(e){return new Re(e,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(r,e,t){const n=r.store(Ke),s=r.store(gr),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.ee({range:o},((f,p,_)=>(c++,_.delete())));i.push(l.next((()=>{$(c===1,47070,{batchId:t.batchId})})));const u=[];for(const f of t.mutations){const p=Bf(e,f.key.path,t.batchId);i.push(s.delete(p)),u.push(f.key)}return x.waitFor(i).next((()=>u))}function wo(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw B(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re.DEFAULT_COLLECTION_PERCENTILE=10,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Re.DEFAULT=new Re(Qm,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Re.DISABLED=new Re(-1,0,0);class ea{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Hn={}}static yt(e,t,n,s){$(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new ea(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Dt(e).ee({index:vn,range:n},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,n,s){const i=ir(e),o=Dt(e);return o.add({}).next((c=>{$(typeof c=="number",49019);const l=new il(c,t,n,s),u=(function(b,P,C){const k=C.baseMutations.map((q=>Eo(b.gt,q))),F=C.mutations.map((q=>Eo(b.gt,q)));return{userId:P,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:k,mutations:F}})(this.serializer,this.userId,l),f=[];let p=new se(((_,b)=>H(_.canonicalString(),b.canonicalString())));for(const _ of s){const b=Bf(this.userId,_.key.path,c);p=p.add(_.key.path.popLast()),f.push(o.put(u)),f.push(i.put(b,UI))}return p.forEach((_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))})),e.addOnCommittedListener((()=>{this.Hn[c]=l.keys()})),x.waitFor(f).next((()=>l))}))}lookupMutationBatch(e,t){return Dt(e).get(t).next((n=>n?($(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),yn(this.serializer,n)):null))}Zn(e,t){return this.Hn[t]?x.resolve(this.Hn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const s=n.keys();return this.Hn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Dt(e).ee({index:vn,range:s},((o,c,l)=>{c.userId===this.userId&&($(c.batchId>=n,47524,{Xn:n}),i=yn(this.serializer,c)),l.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=bn;return Dt(e).ee({index:vn,range:t,reverse:!0},((s,i,o)=>{n=i.batchId,o.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,bn],[this.userId,Number.POSITIVE_INFINITY]);return Dt(e).J(vn,t).next((n=>n.map((s=>yn(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Qi(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return ir(e).ee({range:s},((o,c,l)=>{const[u,f,p]=o,_=tt(f);if(u===this.userId&&t.path.isEqual(_))return Dt(e).get(p).next((b=>{if(!b)throw B(61480,{Yn:o,batchId:p});$(b.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:b.userId,batchId:p}),i.push(yn(this.serializer,b))}));l.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new se(H);const s=[];return t.forEach((i=>{const o=Qi(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=ir(e).ee({range:c},((u,f,p)=>{const[_,b,P]=u,C=tt(b);_===this.userId&&i.path.isEqual(C)?n=n.add(P):p.done()}));s.push(l)})),x.waitFor(s).next((()=>this.er(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=Qi(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new se(H);return ir(e).ee({range:o},((l,u,f)=>{const[p,_,b]=l,P=tt(_);p===this.userId&&n.isPrefixOf(P)?P.length===s&&(c=c.add(b)):f.done()})).next((()=>this.er(e,c)))}er(e,t){const n=[],s=[];return t.forEach((i=>{s.push(Dt(e).get(i).next((o=>{if(o===null)throw B(35274,{batchId:i});$(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(yn(this.serializer,o))})))})),x.waitFor(s).next((()=>n))}removeMutationBatch(e,t){return Jm(e.le,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.tr(t.batchId)})),x.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}tr(e){delete this.Hn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return x.resolve();const n=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return ir(e).ee({range:n},((i,o,c)=>{if(i[0]===this.userId){const l=tt(i[1]);s.push(l)}else c.done()})).next((()=>{$(s.length===0,56720,{nr:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return Xm(e,this.userId,t)}rr(e){return Ym(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:bn,lastStreamToken:""}))}}function Xm(r,e,t){const n=Qi(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return ir(r).ee({range:i,Y:!0},((c,l,u)=>{const[f,p,_]=c;f===e&&p===s&&(o=!0),u.done()})).next((()=>o))}function Dt(r){return Ee(r,Ke)}function ir(r){return Ee(r,gr)}function Ym(r){return Ee(r,Fs)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new It(0)}static _r(){return new It(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ar(e).next((t=>{const n=new It(t.highestTargetId);return t.highestTargetId=n.next(),this.ur(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.ar(e).next((t=>G.fromTimestamp(new re(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.ar(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.ar(e).next((s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.ur(e,s))))}addTargetData(e,t){return this.cr(e,t).next((()=>this.ar(e).next((n=>(n.targetCount+=1,this.lr(t,n),this.ur(e,n))))))}updateTargetData(e,t){return this.cr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Zn(e).delete(t.targetId))).next((()=>this.ar(e))).next((n=>($(n.targetCount>0,8065),n.targetCount-=1,this.ur(e,n))))}removeTargets(e,t,n){let s=0;const i=[];return Zn(e).ee(((o,c)=>{const l=ws(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))})).next((()=>x.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Zn(e).ee(((n,s)=>{const i=ws(s);t(i)}))}ar(e){return cd(e).get(fo).next((t=>($(t!==null,2888),t)))}ur(e,t){return cd(e).put(fo,t)}cr(e,t){return Zn(e).put(Km(this.serializer,t))}lr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.ar(e).next((t=>t.targetCount))}getTargetData(e,t){const n=On(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Zn(e).ee({range:s,index:$f},((o,c,l)=>{const u=ws(c);oi(t,u.target)&&(i=u,l.done())})).next((()=>i))}addMatchingKeys(e,t,n){const s=[],i=Mt(e);return t.forEach((o=>{const c=Ce(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))})),x.waitFor(s)}removeMatchingKeys(e,t,n){const s=Mt(e);return x.forEach(t,(i=>{const o=Ce(i.path);return x.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])}))}removeMatchingKeysForTargetId(e,t){const n=Mt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Mt(e);let i=X();return s.ee({range:n,Y:!0},((o,c,l)=>{const u=tt(o[1]),f=new j(u);i=i.add(f)})).next((()=>i))}containsKey(e,t){const n=Ce(t.path),s=IDBKeyRange.bound([n],[Vf(n)],!1,!0);let i=0;return Mt(e).ee({index:Hc,Y:!0,range:s},(([o,c],l,u)=>{o!==0&&(i++,u.done())})).next((()=>i>0))}Rt(e,t){return Zn(e).get(t).next((n=>n?ws(n):null))}}function Zn(r){return Ee(r,_r)}function cd(r){return Ee(r,xn)}function Mt(r){return Ee(r,yr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="LruGarbageCollector",Zm=1048576;function ud([r,e],[t,n]){const s=H(r,t);return s===0?H(e,n):s}class mv{constructor(e){this.hr=e,this.buffer=new se(ud),this.Pr=0}Tr(){return++this.Pr}Ir(e){const t=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();ud(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ep{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return this.Er!==null}Rr(e){D(ld,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){tn(t)?D(ld,"Ignoring IndexedDB error during garbage collection: ",t):await en(t)}await this.Rr(3e5)}))}}class pv{constructor(e,t){this.Ar=e,this.params=t}calculateTargetCount(e,t){return this.Ar.Vr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return x.resolve(Me.ce);const n=new mv(t);return this.Ar.forEachTarget(e,(s=>n.Ir(s.sequenceNumber))).next((()=>this.Ar.dr(e,(s=>n.Ir(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Ar.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Ar.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(ad)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ad):this.mr(e,t)))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,t){let n,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(n=p,c=Date.now(),this.removeTargets(e,n,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,n)))).next((p=>(u=Date.now(),tr()<=Z.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function tp(r,e){return new pv(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t){this.db=e,this.garbageCollector=tp(this,t)}Vr(e){const t=this.gr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}gr(e){let t=0;return this.dr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}dr(e,t){return this.pr(e,((n,s)=>t(s)))}addReference(e,t,n){return Fi(e,n)}removeReference(e,t,n){return Fi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Fi(e,t)}yr(e,t){return(function(s,i){let o=!1;return Ym(s).te((c=>Xm(s,c,i).next((l=>(l&&(o=!0),x.resolve(!l)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.pr(e,((o,c)=>{if(c<=t){const l=this.yr(e,o).next((u=>{if(!u)return i++,n.getEntry(e,o).next((()=>(n.removeEntry(o,G.min()),Mt(e).delete((function(p){return[0,Ce(p.path)]})(o)))))}));s.push(l)}})).next((()=>x.waitFor(s))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Fi(e,t)}pr(e,t){const n=Mt(e);let s,i=Me.ce;return n.ee({index:Hc},(([o,c],{path:l,sequenceNumber:u})=>{o===0?(i!==Me.ce&&t(new j(tt(s)),i),i=u,s=l):i=Me.ce})).next((()=>{i!==Me.ce&&t(new j(tt(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Fi(r,e){return Mt(r).put((function(n,s){return{targetId:0,path:Ce(n.path),sequenceNumber:s}})(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.changes=new Tt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,de.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?x.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return fn(e).put(n)}removeEntry(e,t,n){return fn(e).delete((function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],vo(o),c[c.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.wr(e,n))))}getEntry(e,t){let n=de.newInvalidDocument(t);return fn(e).ee({index:Ji,range:IDBKeyRange.only(_s(t))},((s,i)=>{n=this.Sr(t,i)})).next((()=>n))}br(e,t){let n={size:0,document:de.newInvalidDocument(t)};return fn(e).ee({index:Ji,range:IDBKeyRange.only(_s(t))},((s,i)=>{n={document:this.Sr(t,i),size:wo(i)}})).next((()=>n))}getEntries(e,t){let n=Ue();return this.Dr(e,t,((s,i)=>{const o=this.Sr(s,i);n=n.insert(s,o)})).next((()=>n))}Cr(e,t){let n=Ue(),s=new ae(j.comparator);return this.Dr(e,t,((i,o)=>{const c=this.Sr(i,o);n=n.insert(i,c),s=s.insert(i,wo(o))})).next((()=>({documents:n,vr:s})))}Dr(e,t,n){if(t.isEmpty())return x.resolve();let s=new se(fd);t.forEach((l=>s=s.add(l)));const i=IDBKeyRange.bound(_s(s.first()),_s(s.last())),o=s.getIterator();let c=o.getNext();return fn(e).ee({index:Ji,range:i},((l,u,f)=>{const p=j.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;c&&fd(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,u),c=o.hasNext()?o.getNext():null),c?f.j(_s(c)):f.done()})).next((()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),vo(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return fn(e).J(IDBKeyRange.bound(c,l,!0)).next((u=>{i==null||i.incrementDocumentReadCount(u.length);let f=Ue();for(const p of u){const _=this.Sr(j.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);_.isFoundDocument()&&(ci(t,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f}))}getAllFromCollectionGroup(e,t,n,s){let i=Ue();const o=dd(t,n),c=dd(t,ze.max());return fn(e).ee({index:zf,range:IDBKeyRange.bound(o,c,!0)},((l,u,f)=>{const p=this.Sr(j.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===s&&f.done()})).next((()=>i))}newChangeBuffer(e){return new yv(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return hd(e).get(fc).next((t=>($(!!t,20021),t)))}wr(e,t){return hd(e).put(fc,t)}Sr(e,t){if(t){const n=rv(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(G.min())))return n}return de.newInvalidDocument(e)}}function rp(r){return new _v(r)}class yv extends np{constructor(e,t){super(),this.Fr=e,this.trackRemovals=t,this.Mr=new Tt((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(e){const t=[];let n=0,s=new se(((i,o)=>H(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const c=this.Mr.get(i);if(t.push(this.Fr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Wh(this.Fr.serializer,o);s=s.add(i.path.popLast());const u=wo(l);n+=u-c.size,t.push(this.Fr.addEntry(e,i,l))}else if(n-=c.size,this.trackRemovals){const l=Wh(this.Fr.serializer,o.convertToNoDocument(G.min()));t.push(this.Fr.addEntry(e,i,l))}})),s.forEach((i=>{t.push(this.Fr.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Fr.updateMetadata(e,n)),x.waitFor(t)}getFromCache(e,t){return this.Fr.br(e,t).next((n=>(this.Mr.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Fr.Cr(e,t).next((({documents:n,vr:s})=>(s.forEach(((i,o)=>{this.Mr.set(i,{size:o,readTime:n.get(i).readTime})})),n)))}}function hd(r){return Ee(r,Us)}function fn(r){return Ee(r,ho)}function _s(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function dd(r,e){const t=e.documentKey.path.toArray();return[r,vo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function fd(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=H(t[i],n[i]),s)return s;return s=H(t.length,n.length),s||(s=H(t[t.length-2],n[n.length-2]),s||H(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&Vs(n.mutation,s,Le.empty(),re.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,X()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=X()){const s=nt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let o=vs();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=nt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,X())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,n,s){let i=Ue();const o=Ns(),c=(function(){return Ns()})();return t.forEach(((l,u)=>{const f=n.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof wt)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Vs(f.mutation,u,f.mutation.getFieldMask(),re.now())):o.set(u.key,Le.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),t.forEach(((u,f)=>c.set(u,new Iv(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,t){const n=Ns();let s=new ae(((o,c)=>o-c)),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let f=n.get(l)||Le.empty();f=c.applyToLocalView(u,f),n.set(l,f);const p=(s.get(c.batchId)||X()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=vm();f.forEach((_=>{if(!i.has(_)){const b=Am(t.get(_),n.get(_));b!==null&&p.set(_,b),i=i.add(_)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return x.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return wE(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):x.resolve(nt());let c=pr,l=i;return o.next((u=>x.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next((_=>{l=l.insert(f,_)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,X()))).next((f=>({batchId:c,changes:Em(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next((n=>{let s=vs();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=vs();return this.indexManager.getCollectionParents(e,i).next((c=>x.forEach(c,(l=>{const u=(function(p,_){return new Ho(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,s).next((f=>{f.forEach(((p,_)=>{o=o.insert(p,_)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,de.newInvalidDocument(f)))}));let c=vs();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Vs(f.mutation,u,Le.empty(),re.now()),ci(t,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,t){return x.resolve(this.Or.get(t))}saveBundleMetadata(e,t){return this.Or.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Oe(s.createTime)}})(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Nr.get(t))}saveNamedQuery(e,t){return this.Nr.set(t.name,(function(s){return{name:s.name,query:Gm(s.bundledQuery),readTime:Oe(s.readTime)}})(t)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this.overlays=new ae(j.comparator),this.Br=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const n=nt();return x.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.wt(e,t,i)})),x.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Br.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Br.delete(n)),x.resolve()}getOverlaysForCollection(e,t,n){const s=nt(),i=t.length+1,o=new j(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ae(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let f=i.get(u.largestBatchId);f===null&&(f=nt(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=nt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return x.resolve(c)}wt(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Br.get(s.largestBatchId).delete(n.key);this.Br.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new al(t,n));let i=this.Br.get(t);i===void 0&&(i=X(),this.Br.set(t,i)),this.Br.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(){this.sessionToken=pe.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.Lr=new se(Te.kr),this.qr=new se(Te.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,t){const n=new Te(e,t);this.Lr=this.Lr.add(n),this.qr=this.qr.add(n)}Ur(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.$r(new Te(e,t))}Wr(e,t){e.forEach((n=>this.removeReference(n,t)))}Qr(e){const t=new j(new ne([])),n=new Te(t,e),s=new Te(t,e+1),i=[];return this.qr.forEachInRange([n,s],(o=>{this.$r(o),i.push(o.key)})),i}Gr(){this.Lr.forEach((e=>this.$r(e)))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const t=new j(new ne([])),n=new Te(t,e),s=new Te(t,e+1);let i=X();return this.qr.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Te(e,0),n=this.Lr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Te{constructor(e,t){this.key=e,this.jr=t}static kr(e,t){return j.comparator(e.key,t.key)||H(e.jr,t.jr)}static Kr(e,t){return H(e.jr,t.jr)||j.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Xn=1,this.Jr=new se(Te.kr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new il(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Te(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.Hr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Zr(n),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?bn:this.Xn-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Te(t,0),s=new Te(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([n,s],(o=>{const c=this.Hr(o.jr);i.push(c)})),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new se(H);return t.forEach((s=>{const i=new Te(s,0),o=new Te(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],(c=>{n=n.add(c.jr)}))})),x.resolve(this.Xr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;j.isDocumentKey(i)||(i=i.child(""));const o=new Te(new j(i),0);let c=new se(H);return this.Jr.forEachWhile((l=>{const u=l.key.path;return!!n.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.jr)),!0)}),o),x.resolve(this.Xr(c))}Xr(e){const t=[];return e.forEach((n=>{const s=this.Hr(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){$(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Jr;return x.forEach(t.mutations,(s=>{const i=new Te(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=n}))}tr(e){}containsKey(e,t){const n=new Te(t,0),s=this.Jr.firstAfterOrEqual(n);return x.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Yr(e,t){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){const t=this.Zr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.ei=e,this.docs=(function(){return new ae(j.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.ei(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return x.resolve(n?n.document.mutableCopy():de.newInvalidDocument(t))}getEntries(e,t){let n=Ue();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():de.newInvalidDocument(s))})),x.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Ue();const o=t.path,c=new j(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Kc(Mf(f),n)<=0||(s.has(f.key)||ci(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,t,n,s){B(9500)}ti(e,t){return x.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new xv(this)}getSize(e){return x.resolve(this.size)}}class xv extends np{constructor(e){super(),this.Fr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.Fr.addEntry(e,s)):this.Fr.removeEntry(n)})),x.waitFor(t)}getFromCache(e,t){return this.Fr.getEntry(e,t)}getAllFromCache(e,t){return this.Fr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.persistence=e,this.ni=new Tt((t=>On(t)),oi),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.ri=0,this.ii=new dl,this.targetCount=0,this.si=It.sr()}forEachTarget(e,t){return this.ni.forEach(((n,s)=>t(s))),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ri&&(this.ri=t),x.resolve()}cr(e){this.ni.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.si=new It(t),this.highestTargetId=t),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,t){return this.cr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.cr(t),x.resolve()}removeTargetData(e,t){return this.ni.delete(t.target),this.ii.Qr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.ni.forEach(((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.ni.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),x.waitFor(i).next((()=>s))}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const n=this.ni.get(t)||null;return x.resolve(n)}addMatchingKeys(e,t,n){return this.ii.Ur(t,n),x.resolve()}removeMatchingKeys(e,t,n){this.ii.Wr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),x.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ii.Qr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ii.zr(t);return x.resolve(n)}containsKey(e,t){return x.resolve(this.ii.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t){this.oi={},this.overlays={},this._i=new Me(0),this.ai=!1,this.ai=!0,this.ui=new Tv,this.referenceDelegate=e(this),this.ci=new Av(this),this.indexManager=new hv,this.remoteDocumentCache=(function(s){return new bv(s)})((n=>this.referenceDelegate.li(n))),this.serializer=new qm(t),this.hi=new Ev(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.oi[e.toKey()];return n||(n=new wv(t,this.referenceDelegate),this.oi[e.toKey()]=n),n}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,t,n){D("MemoryPersistence","Starting transaction:",e);const s=new Sv(this._i.next());return this.referenceDelegate.Pi(),n(s).next((i=>this.referenceDelegate.Ti(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ii(e,t){return x.or(Object.values(this.oi).map((n=>()=>n.containsKey(e,t))))}}class Sv extends jf{constructor(e){super(),this.currentSequenceNumber=e}}class ta{constructor(e){this.persistence=e,this.Ei=new dl,this.Ri=null}static Ai(e){return new ta(e)}get Vi(){if(this.Ri)return this.Ri;throw B(60996)}addReference(e,t,n){return this.Ei.addReference(n,t),this.Vi.delete(n.toString()),x.resolve()}removeReference(e,t,n){return this.Ei.removeReference(n,t),this.Vi.add(n.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.Vi.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ei.Qr(t.targetId).forEach((s=>this.Vi.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.Vi.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Pi(){this.Ri=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Vi,(n=>{const s=j.fromPath(n);return this.di(e,s).next((i=>{i||t.removeEntry(s,G.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.di(e,t).next((n=>{n?this.Vi.delete(t.toString()):this.Vi.add(t.toString())}))}li(e){return 0}di(e,t){return x.or([()=>x.resolve(this.Ei.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class bo{constructor(e,t){this.persistence=e,this.mi=new Tt((n=>Ce(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=tp(this,t)}static Ai(e,t){return new bo(e,t)}Pi(){}Ti(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Vr(e){const t=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}gr(e){let t=0;return this.dr(e,(n=>{t++})).next((()=>t))}dr(e,t){return x.forEach(this.mi,((n,s)=>this.yr(e,n,s).next((i=>i?x.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ti(e,(o=>this.yr(e,o,t).next((c=>{c||(n++,i.removeEntry(o,G.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.mi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),x.resolve()}removeReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.mi.set(t,e.currentSequenceNumber),x.resolve()}li(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Yi(e.data.value)),t}yr(e,t,n){return x.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.mi.get(t);return x.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.serializer=e}k(e,t,n,s){const i=new Uo("createOrUpgrade",t);n<1&&s>=1&&((function(l){l.createObjectStore(ii)})(e),(function(l){l.createObjectStore(Fs,{keyPath:FI}),l.createObjectStore(Ke,{keyPath:bh,autoIncrement:!0}).createIndex(vn,xh,{unique:!0}),l.createObjectStore(gr)})(e),md(e),(function(l){l.createObjectStore(gn)})(e));let o=x.resolve();return n<3&&s>=3&&(n!==0&&((function(l){l.deleteObjectStore(yr),l.deleteObjectStore(_r),l.deleteObjectStore(xn)})(e),md(e)),o=o.next((()=>(function(l){const u=l.store(xn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:G.min().toTimestamp(),targetCount:0};return u.put(fo,f)})(i)))),n<4&&s>=4&&(n!==0&&(o=o.next((()=>(function(l,u){return u.store(Ke).J().next((p=>{l.deleteObjectStore(Ke),l.createObjectStore(Ke,{keyPath:bh,autoIncrement:!0}).createIndex(vn,xh,{unique:!0});const _=u.store(Ke),b=p.map((P=>_.put(P)));return x.waitFor(b)}))})(e,i)))),o=o.next((()=>{(function(l){l.createObjectStore(Ir,{keyPath:WI})})(e)}))),n<5&&s>=5&&(o=o.next((()=>this.fi(i)))),n<6&&s>=6&&(o=o.next((()=>((function(l){l.createObjectStore(Us)})(e),this.gi(i))))),n<7&&s>=7&&(o=o.next((()=>this.pi(i)))),n<8&&s>=8&&(o=o.next((()=>this.yi(e,i)))),n<9&&s>=9&&(o=o.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&s>=10&&(o=o.next((()=>this.wi(i)))),n<11&&s>=11&&(o=o.next((()=>{(function(l){l.createObjectStore(zo,{keyPath:QI})})(e),(function(l){l.createObjectStore($o,{keyPath:JI})})(e)}))),n<12&&s>=12&&(o=o.next((()=>{(function(l){const u=l.createObjectStore(qo,{keyPath:rE});u.createIndex(pc,sE,{unique:!1}),u.createIndex(Gf,iE,{unique:!1})})(e)}))),n<13&&s>=13&&(o=o.next((()=>(function(l){const u=l.createObjectStore(ho,{keyPath:BI});u.createIndex(Ji,zI),u.createIndex(zf,$I)})(e))).next((()=>this.Si(e,i))).next((()=>e.deleteObjectStore(gn)))),n<14&&s>=14&&(o=o.next((()=>this.bi(e,i)))),n<15&&s>=15&&(o=o.next((()=>(function(l){l.createObjectStore(Wc,{keyPath:XI,autoIncrement:!0}).createIndex(mc,YI,{unique:!1}),l.createObjectStore(Ss,{keyPath:ZI}).createIndex(qf,eE,{unique:!1}),l.createObjectStore(Rs,{keyPath:tE}).createIndex(Kf,nE,{unique:!1})})(e)))),n<16&&s>=16&&(o=o.next((()=>{t.objectStore(Ss).clear()})).next((()=>{t.objectStore(Rs).clear()}))),n<17&&s>=17&&(o=o.next((()=>{(function(l){l.createObjectStore(Qc,{keyPath:oE})})(e)}))),n<18&&s>=18&&_f()&&(o=o.next((()=>{t.objectStore(Ss).clear()})).next((()=>{t.objectStore(Rs).clear()}))),o}gi(e){let t=0;return e.store(gn).ee(((n,s)=>{t+=wo(s)})).next((()=>{const n={byteSize:t};return e.store(Us).put(fc,n)}))}fi(e){const t=e.store(Fs),n=e.store(Ke);return t.J().next((s=>x.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,bn],[i.userId,i.lastAcknowledgedBatchId]);return n.J(vn,o).next((c=>x.forEach(c,(l=>{$(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const u=yn(this.serializer,l);return Jm(e,i.userId,u).next((()=>{}))}))))}))))}pi(e){const t=e.store(yr),n=e.store(gn);return e.store(xn).get(fo).next((s=>{const i=[];return n.ee(((o,c)=>{const l=new ne(o),u=(function(p){return[0,Ce(p)]})(l);i.push(t.get(u).next((f=>f?x.resolve():(p=>t.put({targetId:0,path:Ce(p),sequenceNumber:s.highestListenSequenceNumber}))(l))))})).next((()=>x.waitFor(i)))}))}yi(e,t){e.createObjectStore(Bs,{keyPath:HI});const n=t.store(Bs),s=new hl,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:Ce(l)})}};return t.store(gn).ee({Y:!0},((o,c)=>{const l=new ne(o);return i(l.popLast())})).next((()=>t.store(gr).ee({Y:!0},(([o,c,l],u)=>{const f=tt(c);return i(f.popLast())}))))}wi(e){const t=e.store(_r);return t.ee(((n,s)=>{const i=ws(s),o=Km(this.serializer,i);return t.put(o)}))}Si(e,t){const n=t.store(gn),s=[];return n.ee(((i,o)=>{const c=t.store(ho),l=(function(p){return p.document?new j(ne.fromString(p.document.name).popFirst(5)):p.noDocument?j.fromSegments(p.noDocument.path):p.unknownDocument?j.fromSegments(p.unknownDocument.path):B(36783)})(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(u))})).next((()=>x.waitFor(s)))}bi(e,t){const n=t.store(Ke),s=rp(this.serializer),i=new fl(ta.Ai,this.serializer.gt);return n.J().next((o=>{const c=new Map;return o.forEach((l=>{let u=c.get(l.userId)??X();yn(this.serializer,l).keys().forEach((f=>u=u.add(f))),c.set(l.userId,u)})),x.forEach(c,((l,u)=>{const f=new Se(u),p=Zo.yt(this.serializer,f),_=i.getIndexManager(f),b=ea.yt(f,this.serializer,_,i.referenceDelegate);return new sp(s,b,p,_).recalculateAndSaveOverlaysForDocumentKeys(new gc(t,Me.ce),l).next()}))}))}}function md(r){r.createObjectStore(yr,{keyPath:KI}).createIndex(Hc,GI,{unique:!0}),r.createObjectStore(_r,{keyPath:"targetId"}).createIndex($f,qI,{unique:!0}),r.createObjectStore(xn)}const kt="IndexedDbPersistence",Ha=18e5,Wa=5e3,Qa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Pv="main";class ml{constructor(e,t,n,s,i,o,c,l,u,f,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Di=i,this.window=o,this.document=c,this.Ci=u,this.Fi=f,this.Mi=p,this._i=null,this.ai=!1,this.isPrimary=!1,this.networkEnabled=!0,this.xi=null,this.inForeground=!1,this.Oi=null,this.Ni=null,this.Bi=Number.NEGATIVE_INFINITY,this.Li=_=>Promise.resolve(),!ml.v())throw new L(N.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new gv(this,s),this.ki=t+Pv,this.serializer=new qm(l),this.qi=new Kt(this.ki,this.Mi,new Rv(this.serializer)),this.ui=new iv,this.ci=new fv(this.referenceDelegate,this.serializer),this.remoteDocumentCache=rp(this.serializer),this.hi=new sv,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,f===!1&&fe(kt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ui().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new L(N.FAILED_PRECONDITION,Qa);return this.$i(),this.Wi(),this.Qi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.ci.getHighestSequenceNumber(e)))})).then((e=>{this._i=new Me(e,this.Ci)})).then((()=>{this.ai=!0})).catch((e=>(this.qi&&this.qi.close(),Promise.reject(e))))}Gi(e){return this.Li=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.qi.K((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Di.enqueueAndForget((async()=>{this.started&&await this.Ui()})))}Ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Ui(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.zi(e).next((t=>{t||(this.isPrimary=!1,this.Di.enqueueRetryable((()=>this.Li(!1))))}))})).next((()=>this.ji(e))).next((t=>this.isPrimary&&!t?this.Ji(e).next((()=>!1)):!!t&&this.Hi(e).next((()=>!0)))))).catch((e=>{if(tn(e))return D(kt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D(kt,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Di.enqueueRetryable((()=>this.Li(e))),this.isPrimary=e}))}zi(e){return ys(e).get(Wn).next((t=>x.resolve(this.Zi(t))))}Xi(e){return Ui(e).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.es(this.Bi,Ha)){this.Bi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=Ee(t,Ir);return n.J().next((s=>{const i=this.ts(s,Ha),o=s.filter((c=>i.indexOf(c)===-1));return x.forEach(o,(c=>n.delete(c.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this.ns(t.clientId))}}Qi(){this.Ni=this.Di.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ui().then((()=>this.Yi())).then((()=>this.Qi()))))}Zi(e){return!!e&&e.ownerId===this.clientId}ji(e){return this.Fi?x.resolve(!0):ys(e).get(Wn).next((t=>{if(t!==null&&this.es(t.leaseTimestampMs,Wa)&&!this.rs(t.ownerId)){if(this.Zi(t)&&this.networkEnabled)return!0;if(!this.Zi(t)){if(!t.allowTabSynchronization)throw new L(N.FAILED_PRECONDITION,Qa);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ui(e).J().next((n=>this.ts(n,Wa).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&D(kt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ai=!1,this.ss(),this.Ni&&(this.Ni.cancel(),this.Ni=null),this._s(),this.us(),await this.qi.runTransaction("shutdown","readwrite",[ii,Ir],(e=>{const t=new gc(e,Me.ce);return this.Ji(t).next((()=>this.Xi(t)))})),this.qi.close(),this.cs()}ts(e,t){return e.filter((n=>this.es(n.updateTimeMs,t)&&!this.rs(n.clientId)))}ls(){return this.runTransaction("getActiveClients","readonly",(e=>Ui(e).J().next((t=>this.ts(t,Ha).map((n=>n.clientId))))))}get started(){return this.ai}getGlobalsCache(){return this.ui}getMutationQueue(e,t){return ea.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new dv(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return Zo.yt(this.serializer,e)}getBundleCache(){return this.hi}runTransaction(e,t,n){D(kt,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(l){return l===18?lE:l===17?Jf:l===16?cE:l===15?Jc:l===14?Qf:l===13?Wf:l===12?aE:l===11?Hf:void B(60245)})(this.Mi);let o;return this.qi.runTransaction(e,s,i,(c=>(o=new gc(c,this._i?this._i.next():Me.ce),t==="readwrite-primary"?this.zi(o).next((l=>!!l||this.ji(o))).next((l=>{if(!l)throw fe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Di.enqueueRetryable((()=>this.Li(!1))),new L(N.FAILED_PRECONDITION,Lf);return n(o)})).next((l=>this.Hi(o).next((()=>l)))):this.hs(o).next((()=>n(o)))))).then((c=>(o.raiseOnCommittedEvent(),c)))}hs(e){return ys(e).get(Wn).next((t=>{if(t!==null&&this.es(t.leaseTimestampMs,Wa)&&!this.rs(t.ownerId)&&!this.Zi(t)&&!(this.Fi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new L(N.FAILED_PRECONDITION,Qa)}))}Hi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ys(e).put(Wn,t)}static v(){return Kt.v()}Ji(e){const t=ys(e);return t.get(Wn).next((n=>this.Zi(n)?(D(kt,"Releasing primary lease."),t.delete(Wn)):x.resolve()))}es(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(fe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}$i(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Oi=()=>{this.Di.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ui())))},this.document.addEventListener("visibilitychange",this.Oi),this.inForeground=this.document.visibilityState==="visible")}_s(){this.Oi&&(this.document.removeEventListener("visibilitychange",this.Oi),this.Oi=null)}Wi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.xi=()=>{this.ss();const t=/(?:Version|Mobile)\/1[456]/;gf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Di.enterRestrictedMode(!0),this.Di.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.xi))}us(){this.xi&&(this.window.removeEventListener("pagehide",this.xi),this.xi=null)}rs(e){var t;try{const n=((t=this.Ki)==null?void 0:t.getItem(this.ns(e)))!==null;return D(kt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return fe(kt,"Failed to get zombied client id.",n),!1}}ss(){if(this.Ki)try{this.Ki.setItem(this.ns(this.clientId),String(Date.now()))}catch(e){fe("Failed to set zombie client id.",e)}}cs(){if(this.Ki)try{this.Ki.removeItem(this.ns(this.clientId))}catch{}}ns(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ys(r){return Ee(r,ii)}function Ui(r){return Ee(r,Ir)}function ip(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ps=n,this.Ts=s}static Is(e,t){let n=X(),s=X();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pl(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=(function(){return gf()?8:Ff(Ie())>0?6:4})()}initialize(e,t){this.ds=e,this.indexManager=t,this.Es=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.fs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.gs(e,t,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Cv;return this.ps(e,t,o).next((c=>{if(i.result=c,this.Rs)return this.ys(e,t,o,c.size)}))})).next((()=>i.result))}ys(e,t,n,s){return n.documentReadCount<this.As?(tr()<=Z.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",nr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),x.resolve()):(tr()<=Z.DEBUG&&D("QueryEngine","Query:",nr(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Vs*s?(tr()<=Z.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",nr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Be(t))):x.resolve())}fs(e,t){if(jh(t))return x.resolve(null);let n=Be(t);return this.indexManager.getIndexType(e,n).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=vc(t,null,"F"),n=Be(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const o=X(...i);return this.ds.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,n).next((l=>{const u=this.ws(t,c);return this.Ss(t,u,o,l.readTime)?this.fs(e,vc(t,null,"F")):this.bs(e,u,t,l)}))))})))))}gs(e,t,n,s){return jh(t)||s.isEqual(G.min())?x.resolve(null):this.ds.getDocuments(e,n).next((i=>{const o=this.ws(t,i);return this.Ss(t,o,n,s)?x.resolve(null):(tr()<=Z.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),nr(t)),this.bs(e,o,t,Of(s,pr)).next((c=>c)))}))}ws(e,t){let n=new se(ym(e));return t.forEach(((s,i)=>{ci(e,i)&&(n=n.add(i))})),n}Ss(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ps(e,t,n){return tr()<=Z.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",nr(t)),this.ds.getDocumentsMatchingQuery(e,t,ze.min(),n)}bs(e,t,n,s){return this.ds.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="LocalStore",Nv=3e8;class Vv{constructor(e,t,n,s){this.persistence=e,this.Ds=t,this.serializer=s,this.Cs=new ae(H),this.vs=new Tt((i=>On(i)),oi),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(n)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sp(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Cs)))}}function ap(r,e,t,n){return new Vv(r,e,t,n)}async function cp(r,e){const t=z(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.xs(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],c=[];let l=X();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next((u=>({Os:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function Dv(r,e){const t=z(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),i=t.Ms.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,_=p.keys();let b=x.resolve();return _.forEach((P=>{b=b.next((()=>f.getEntry(l,P))).next((C=>{const k=u.docVersions.get(P);$(k!==null,48541),C.version.compareTo(k)<0&&(p.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),f.addEntry(C)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(c){let l=X();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function lp(r){const e=z(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ci.getLastRemoteSnapshotVersion(t)))}function kv(r,e){const t=z(r),n=e.snapshotVersion;let s=t.Cs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Ms.newChangeBuffer({trackRemovals:!0});s=t.Cs;const c=[];e.targetChanges.forEach(((f,p)=>{const _=s.get(p);if(!_)return;c.push(t.ci.removeMatchingKeys(i,f.removedDocuments,p).next((()=>t.ci.addMatchingKeys(i,f.addedDocuments,p))));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(pe.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,n)),s=s.insert(p,b),(function(C,k,F){return C.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=Nv?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(_,b,f)&&c.push(t.ci.updateTargetData(i,b))}));let l=Ue(),u=X();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(Ov(i,o,e.documentUpdates).next((f=>{l=f.Ns,u=f.Bs}))),!n.isEqual(G.min())){const f=t.ci.getLastRemoteSnapshotVersion(i).next((p=>t.ci.setTargetsMetadata(i,i.currentSequenceNumber,n)));c.push(f)}return x.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.Cs=s,i)))}function Ov(r,e,t){let n=X(),s=X();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let o=Ue();return t.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(G.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):D(gl,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Ns:o,Bs:s}}))}function Mv(r,e){const t=z(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=bn),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function xo(r,e){const t=z(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.ci.getTargetData(n,e).next((i=>i?(s=i,x.resolve(s)):t.ci.allocateTargetId(n).next((o=>(s=new rt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.ci.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.Cs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Cs=t.Cs.insert(n.targetId,n),t.vs.set(e,n.targetId)),n}))}async function Rr(r,e,t){const n=z(r),s=n.Cs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!tn(o))throw o;D(gl,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Cs=n.Cs.remove(e),n.vs.delete(s.target)}function Pc(r,e,t){const n=z(r);let s=G.min(),i=X();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=z(l),_=p.vs.get(f);return _!==void 0?x.resolve(p.Cs.get(_)):p.ci.getTargetData(u,f)})(n,o,Be(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.ci.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>n.Ds.getDocumentsMatchingQuery(o,e,t?s:G.min(),t?i:X()))).next((c=>(dp(n,_m(e),c),{documents:c,Ls:i})))))}function up(r,e){const t=z(r),n=z(t.ci),s=t.Cs.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",(i=>n.Rt(i,e).next((o=>o?o.target:null))))}function hp(r,e){const t=z(r),n=t.Fs.get(e)||G.min();return t.persistence.runTransaction("Get new document changes","readonly",(s=>t.Ms.getAllFromCollectionGroup(s,e,Of(n,pr),Number.MAX_SAFE_INTEGER))).then((s=>(dp(t,e,s),s)))}function dp(r,e,t){let n=r.Fs.get(e)||G.min();t.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.Fs.set(e,n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="firestore_clients";function pd(r,e){return`${fp}_${r}_${e}`}const mp="firestore_mutations";function gd(r,e,t){let n=`${mp}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const pp="firestore_targets";function Ja(r,e){return`${pp}_${r}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="SharedClientState";class Ao{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Us(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new L(s.error.code,s.error.message))),o?new Ao(e,t,s.state,i):(fe(et,`Failed to parse mutation state for ID '${t}': ${n}`),null)}$s(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ds{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Us(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new L(n.error.code,n.error.message))),i?new Ds(e,n.state,s):(fe(et,`Failed to parse target state for ID '${e}': ${t}`),null)}$s(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class So{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Us(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=nl();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=Uf(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new So(e,i):(fe(et,`Failed to parse client data for instance '${e}': ${t}`),null)}}class _l{constructor(e,t){this.clientId=e,this.onlineState=t}static Us(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new _l(t.clientId,t.onlineState):(fe(et,`Failed to parse online state: ${e}`),null)}}class Cc{constructor(){this.activeTargetIds=nl()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xa{constructor(e,t,n,s,i){this.window=e,this.Di=t,this.persistenceKey=n,this.Gs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.zs=this.js.bind(this),this.Js=new ae(H),this.started=!1,this.Hs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Zs=pd(this.persistenceKey,this.Gs),this.Xs=(function(l){return`firestore_sequence_number_${l}`})(this.persistenceKey),this.Js=this.Js.insert(this.Gs,new Cc),this.Ys=new RegExp(`^${fp}_${o}_([^_]*)$`),this.eo=new RegExp(`^${mp}_${o}_(\\d+)(?:_(.*))?$`),this.no=new RegExp(`^${pp}_${o}_(\\d+)$`),this.ro=(function(l){return`firestore_online_state_${l}`})(this.persistenceKey),this.io=(function(l){return`firestore_bundle_loaded_v2_${l}`})(this.persistenceKey),this.window.addEventListener("storage",this.zs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ls();for(const n of e){if(n===this.Gs)continue;const s=this.getItem(pd(this.persistenceKey,n));if(s){const i=So.Us(n,s);i&&(this.Js=this.Js.insert(i.clientId,i))}}this.so();const t=this.storage.getItem(this.ro);if(t){const n=this.oo(t);n&&this._o(n)}for(const n of this.Hs)this.js(n);this.Hs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Xs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ao(this.Js)}isActiveQueryTarget(e){let t=!1;return this.Js.forEach(((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.uo(e,"pending")}updateMutationState(e,t,n){this.uo(e,t,n),this.co(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Ja(this.persistenceKey,e));if(s){const i=Ds.Us(e,s);i&&(n=i.state)}}return t&&this.lo.Ws(e),this.so(),n}removeLocalQueryTarget(e){this.lo.Qs(e),this.so()}isLocalQueryTarget(e){return this.lo.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ja(this.persistenceKey,e))}updateQueryState(e,t,n){this.ho(e,t,n)}handleUserChange(e,t,n){t.forEach((s=>{this.co(s)})),this.currentUser=e,n.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(e){this.Po(e)}notifyBundleLoaded(e){this.To(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.zs),this.removeItem(this.Zs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return D(et,"READ",e,t),t}setItem(e,t){D(et,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){D(et,"REMOVE",e),this.storage.removeItem(e)}js(e){const t=e;if(t.storageArea===this.storage){if(D(et,"EVENT",t.key,t.newValue),t.key===this.Zs)return void fe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Di.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.Ys.test(t.key)){if(t.newValue==null){const n=this.Io(t.key);return this.Eo(n,null)}{const n=this.Ro(t.key,t.newValue);if(n)return this.Eo(n.clientId,n)}}else if(this.eo.test(t.key)){if(t.newValue!==null){const n=this.Ao(t.key,t.newValue);if(n)return this.Vo(n)}}else if(this.no.test(t.key)){if(t.newValue!==null){const n=this.mo(t.key,t.newValue);if(n)return this.fo(n)}}else if(t.key===this.ro){if(t.newValue!==null){const n=this.oo(t.newValue);if(n)return this._o(n)}}else if(t.key===this.Xs){const n=(function(i){let o=Me.ce;if(i!=null)try{const c=JSON.parse(i);$(typeof c=="number",30636,{po:i}),o=c}catch(c){fe(et,"Failed to read sequence number from WebStorage",c)}return o})(t.newValue);n!==Me.ce&&this.sequenceNumberHandler(n)}else if(t.key===this.io){const n=this.yo(t.newValue);await Promise.all(n.map((s=>this.syncEngine.wo(s))))}}}else this.Hs.push(t)}))}}get lo(){return this.Js.get(this.Gs)}so(){this.setItem(this.Zs,this.lo.$s())}uo(e,t,n){const s=new Ao(this.currentUser,e,t,n),i=gd(this.persistenceKey,this.currentUser,e);this.setItem(i,s.$s())}co(e){const t=gd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Po(e){const t={clientId:this.Gs,onlineState:e};this.storage.setItem(this.ro,JSON.stringify(t))}ho(e,t,n){const s=Ja(this.persistenceKey,e),i=new Ds(e,t,n);this.setItem(s,i.$s())}To(e){const t=JSON.stringify(Array.from(e));this.setItem(this.io,t)}Io(e){const t=this.Ys.exec(e);return t?t[1]:null}Ro(e,t){const n=this.Io(e);return So.Us(n,t)}Ao(e,t){const n=this.eo.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Ao.Us(new Se(i),s,t)}mo(e,t){const n=this.no.exec(e),s=Number(n[1]);return Ds.Us(s,t)}oo(e){return _l.Us(e)}yo(e){return JSON.parse(e)}async Vo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.So(e.batchId,e.state,e.error);D(et,`Ignoring mutation for non-active user ${e.user.uid}`)}fo(e){return this.syncEngine.bo(e.targetId,e.state,e.error)}Eo(e,t){const n=t?this.Js.insert(e,t):this.Js.remove(e),s=this.ao(this.Js),i=this.ao(n),o=[],c=[];return i.forEach((l=>{s.has(l)||o.push(l)})),s.forEach((l=>{i.has(l)||c.push(l)})),this.syncEngine.Do(o,c).then((()=>{this.Js=n}))}_o(e){this.Js.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ao(e){let t=nl();return e.forEach(((n,s)=>{t=t.unionWith(s.activeTargetIds)})),t}}class gp{constructor(){this.Co=new Cc,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,t,n){this.vo[e]=t}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new Cc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{Fo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="ConnectivityMonitor";class yd{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){D(_d,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){D(_d,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi=null;function Nc(){return Bi===null?Bi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Bi++,"0x"+Bi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="RestConnection",jv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Fv{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${s}`,this.Uo=this.databaseId.database===mo?`project_id=${n}`:`project_id=${n}&database_id=${s}`}$o(e,t,n,s,i){const o=Nc(),c=this.Wo(e,t.toUriEncodedString());D(Ya,`Sending RPC '${e}' ${o}:`,c,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(l,s,i);const{host:u}=new URL(c),f=ri(u);return this.Go(e,c,l,n,f).then((p=>(D(Ya,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw fr(Ya,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",n),p}))}zo(e,t,n,s,i,o){return this.$o(e,t,n,s,i)}Qo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Mr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s))}Wo(e,t){const n=jv[e];let s=`${this.qo}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="WebChannelConnection",Is=(r,e,t)=>{r.listen(e,(n=>{try{t(n)}catch(s){setTimeout((()=>{throw s}),0)}}))};class or extends Fv{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!or.u_){const e=Pf();Is(e,Rf.STAT_EVENT,(t=>{t.stat===uc.PROXY?D(Ae,"STAT_EVENT: detected buffering proxy"):t.stat===uc.NOPROXY&&D(Ae,"STAT_EVENT: detected no buffering proxy")})),or.u_=!0}}Go(e,t,n,s,i){const o=Nc();return new Promise(((c,l)=>{const u=new Af;u.setWithCredentials(!0),u.listenOnce(Sf.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Hi.NO_ERROR:const p=u.getResponseJson();D(Ae,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Hi.TIMEOUT:D(Ae,`RPC '${e}' ${o} timed out`),l(new L(N.DEADLINE_EXCEEDED,"Request time out"));break;case Hi.HTTP_ERROR:const _=u.getStatus();if(D(Ae,`RPC '${e}' ${o} failed with status:`,_,"response text:",u.getResponseText()),_>0){let b=u.getResponseJson();Array.isArray(b)&&(b=b[0]);const P=b==null?void 0:b.error;if(P&&P.status&&P.message){const C=(function(F){const q=F.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(q)>=0?q:N.UNKNOWN})(P.status);l(new L(C,P.message))}else l(new L(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new L(N.UNAVAILABLE,"Connection failed."));break;default:B(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{D(Ae,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);D(Ae,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",f,n,15)}))}P_(e,t,n){const s=Nc(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Qo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const u=i.join("");D(Ae,`Creating RPC '${e}' stream ${s}: ${u}`,c);const f=o.createWebChannel(u,c);this.T_(f);let p=!1,_=!1;const b=new Uv({jo:P=>{_?D(Ae,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(D(Ae,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),D(Ae,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},Jo:()=>f.close()});return Is(f,Es.EventType.OPEN,(()=>{_||(D(Ae,`RPC '${e}' stream ${s} transport opened.`),b.r_())})),Is(f,Es.EventType.CLOSE,(()=>{_||(_=!0,D(Ae,`RPC '${e}' stream ${s} transport closed`),b.s_(),this.I_(f))})),Is(f,Es.EventType.ERROR,(P=>{_||(_=!0,fr(Ae,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),b.s_(new L(N.UNAVAILABLE,"The operation could not be completed")))})),Is(f,Es.EventType.MESSAGE,(P=>{var C;if(!_){const k=P.data[0];$(!!k,16349);const F=k,q=(F==null?void 0:F.error)||((C=F[0])==null?void 0:C.error);if(q){D(Ae,`RPC '${e}' stream ${s} received error:`,q);const K=q.status;let Y=(function(E){const y=ge[E];if(y!==void 0)return Pm(y)})(K),Q=q.message;K==="NOT_FOUND"&&Q.includes("database")&&Q.includes("does not exist")&&Q.includes(this.databaseId.database)&&fr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Y===void 0&&(Y=N.INTERNAL,Q="Unknown error status: "+K+" with message "+q.message),_=!0,b.s_(new L(Y,Q)),f.close()}else D(Ae,`RPC '${e}' stream ${s} received:`,k),b.o_(k)}})),or.a_(),setTimeout((()=>{b.i_()}),0),b}terminate(){this.__.forEach((e=>e.close())),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter((t=>t===e))}Qo(e,t,n){super.Qo(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Cf()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(r){return new or(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(){return typeof window<"u"?window:null}function ro(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(r){return new HE(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or.u_=!1;class yp{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Di=e,this.timerId=t,this.E_=n,this.R_=s,this.A_=i,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const t=Math.floor(this.V_+this.p_()),n=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-n);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="PersistentStream";class Ip{constructor(e,t,n,s,i,o,c,l){this.Di=e,this.w_=n,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new yp(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,t){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(fe(t.toString()),fe("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(t)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.b_===t&&this.Q_(n,s)}),(n=>{e((()=>{const s=new L(N.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(s)}))}))}Q_(e,t){const n=this.W_(this.b_);this.stream=this.z_(e,t),this.stream.Ho((()=>{n((()=>this.listener.Ho()))})),this.stream.Xo((()=>{n((()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.Xo())))})),this.stream.e_((s=>{n((()=>this.G_(s)))})),this.stream.onMessage((s=>{n((()=>++this.v_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return D(Id,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Di.enqueueAndForget((()=>this.b_===e?t():(D(Id,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class zv extends Ip{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=JE(this.serializer,e),n=(function(i){if(!("targetChange"in i))return G.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Oe(o.readTime):G.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=bc(this.serializer),t.addTarget=(function(i,o){let c;const l=o.target;if(c=go(l)?{documents:Lm(i,l)}:{query:jm(i,l).dt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Vm(i,o.resumeToken);const u=Tc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(G.min())>0){c.readTime=Sr(i,o.snapshotVersion.toTimestamp());const u=Tc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const n=YE(this.serializer,e);n&&(t.labels=n),this.k_(t)}Z_(e){const t={};t.database=bc(this.serializer),t.removeTarget=e,this.k_(t)}}class $v extends Ip{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return $(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){$(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=XE(e.writeResults,e.commitTime),n=Oe(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=bc(this.serializer),this.k_(e)}Y_(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>Eo(this.serializer,n)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{}class Kv extends qv{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new L(N.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,t,n,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.$o(e,wc(t,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(N.UNKNOWN,i.toString())}))}zo(e,t,n,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.zo(e,wc(t,n),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(N.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}function Gv(r,e,t,n){return new Kv(r,e,t,n)}class Hv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(fe(t),this._a=!1):D("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="RemoteStore";class Wv{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new It(1e3),this.Aa=new It(1001),this.Va=new Set,this.da=[],this.ma=i,this.ma.Fo((o=>{n.enqueueAndForget((async()=>{Un(this)&&(D(ct,"Restarting streams for network reachability change."),await(async function(l){const u=z(l);u.Va.add(4),await ui(u),u.fa.set("Unknown"),u.Va.delete(4),await ra(u)})(this))}))})),this.fa=new Hv(n,s)}}async function ra(r){if(Un(r))for(const e of r.da)await e(!0)}async function ui(r){for(const e of r.da)await e(!1)}function Vc(r,e){return r.Ia.get(e)||void 0}function sa(r,e){const t=z(r),n=Vc(t,e.targetId);if(n!==void 0&&t.Ta.has(n))return;const s=(function(c,l){const u=Vc(c,l);u!==void 0&&c.Ea.delete(u);const f=(function(_,b){return b%2!=0?_.Aa.next():_.Ra.next()})(c,l);return c.Ia.set(l,f),c.Ea.set(f,l),f})(t,e.targetId);D(ct,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new rt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ta.set(s,i),El(t)?Il(t):Ur(t).x_()&&yl(t,i)}function Pr(r,e){const t=z(r),n=Ur(t),s=Vc(t,e);D(ct,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ta.delete(s),t.Ia.delete(e),t.Ea.delete(s),n.x_()&&Ep(t,s),t.Ta.size===0&&(n.x_()?n.B_():Un(t)&&t.fa.set("Unknown"))}function yl(r,e){if(r.ga.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=r.Ea.get(e.targetId);if(t===void 0)return void D(ct,"SDK target ID not found for remote ID: "+e.targetId);const n=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}Ur(r).H_(e)}function Ep(r,e){r.ga.$e(e),Ur(r).Z_(e)}function Il(r){r.ga=new $E({getRemoteKeysForTarget:e=>{const t=r.Ea.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):X()},Rt:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Ur(r).start(),r.fa.aa()}function El(r){return Un(r)&&!Ur(r).M_()&&r.Ta.size>0}function Un(r){return z(r).Va.size===0}function vp(r){r.ga=void 0}async function Qv(r){r.fa.set("Online")}async function Jv(r){r.Ta.forEach(((e,t)=>{yl(r,e)}))}async function Xv(r,e){vp(r),El(r)?(r.fa.la(e),Il(r)):r.fa.set("Unknown")}async function Yv(r,e,t){if(r.fa.set("Online"),e instanceof Nm&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds){if(s.Ta.has(c)){const l=s.Ea.get(c);l!==void 0&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Ea.delete(c)),s.Ta.delete(c)}s.ga.removeTarget(c)}})(r,e)}catch(n){D(ct,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ro(r,n)}else if(e instanceof to?r.ga.Xe(e):e instanceof Cm?r.ga.it(e):r.ga.tt(e),!t.isEqual(G.min()))try{const n=await lp(r.localStore);t.compareTo(n)>=0&&await(function(i,o){const c=i.ga.Pt(o);c.targetChanges.forEach(((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ta.get(f);p&&i.Ta.set(f,p.withResumeToken(u.resumeToken,o))}})),c.targetMismatches.forEach(((u,f)=>{const p=i.Ta.get(u);if(!p)return;i.Ta.set(u,p.withResumeToken(pe.EMPTY_BYTE_STRING,p.snapshotVersion)),Ep(i,u);const _=new rt(p.target,u,f,p.sequenceNumber);yl(i,_)}));const l=(function(f,p){const _=new Map;p.targetChanges.forEach(((P,C)=>{const k=f.Ea.get(C);k!==void 0&&_.set(k,P)}));let b=new ae(H);return p.targetMismatches.forEach(((P,C)=>{const k=f.Ea.get(P);k!==void 0&&(b=b.insert(k,C))})),new jr(p.snapshotVersion,_,b,p.documentUpdates,p.resolvedLimboDocuments)})(i,c);return i.remoteSyncer.applyRemoteEvent(l)})(r,t)}catch(n){D(ct,"Failed to raise snapshot:",n),await Ro(r,n)}}async function Ro(r,e,t){if(!tn(e))throw e;r.Va.add(1),await ui(r),r.fa.set("Offline"),t||(t=()=>lp(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{D(ct,"Retrying IndexedDB access"),await t(),r.Va.delete(1),await ra(r)}))}function Tp(r,e){return e().catch((t=>Ro(r,t,e)))}async function Fr(r){const e=z(r),t=Jt(e);let n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:bn;for(;Zv(e);)try{const s=await Mv(e.localStore,n);if(s===null){e.Pa.length===0&&t.B_();break}n=s.batchId,eT(e,s)}catch(s){await Ro(e,s)}wp(e)&&bp(e)}function Zv(r){return Un(r)&&r.Pa.length<10}function eT(r,e){r.Pa.push(e);const t=Jt(r);t.x_()&&t.X_&&t.Y_(e.mutations)}function wp(r){return Un(r)&&!Jt(r).M_()&&r.Pa.length>0}function bp(r){Jt(r).start()}async function tT(r){Jt(r).na()}async function nT(r){const e=Jt(r);for(const t of r.Pa)e.Y_(t.mutations)}async function rT(r,e,t){const n=r.Pa.shift(),s=ol.from(n,e,t);await Tp(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Fr(r)}async function sT(r,e){e&&Jt(r).X_&&await(async function(n,s){if((function(o){return UE(o)&&o!==N.ABORTED})(s.code)){const i=n.Pa.shift();Jt(n).N_(),await Tp(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Fr(n)}})(r,e),wp(r)&&bp(r)}async function Ed(r,e){const t=z(r);t.asyncQueue.verifyOperationInProgress(),D(ct,"RemoteStore received new credentials");const n=Un(t);t.Va.add(3),await ui(t),n&&t.fa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Va.delete(3),await ra(t)}async function Dc(r,e){const t=z(r);e?(t.Va.delete(2),await ra(t)):e||(t.Va.add(2),await ui(t),t.fa.set("Unknown"))}function Ur(r){return r.pa||(r.pa=(function(t,n,s){const i=z(t);return i.ia(),new zv(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Ho:Qv.bind(null,r),Xo:Jv.bind(null,r),e_:Xv.bind(null,r),J_:Yv.bind(null,r)}),r.da.push((async e=>{e?(r.pa.N_(),El(r)?Il(r):r.fa.set("Unknown")):(await r.pa.stop(),vp(r))}))),r.pa}function Jt(r){return r.ya||(r.ya=(function(t,n,s){const i=z(t);return i.ia(),new $v(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Ho:()=>Promise.resolve(),Xo:tT.bind(null,r),e_:sT.bind(null,r),ea:nT.bind(null,r),ta:rT.bind(null,r)}),r.da.push((async e=>{e?(r.ya.N_(),await Fr(r)):(await r.ya.stop(),r.Pa.length>0&&(D(ct,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ya}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new vl(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tl(r,e){if(fe("AsyncQueue",`${e}: ${r}`),tn(r))return new L(N.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{static emptySet(e){return new ar(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||j.comparator(t.key,n.key):(t,n)=>j.comparator(t.key,n.key),this.keyedMap=vs(),this.sortedSet=new ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ar)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new ar;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.wa=new ae(j.comparator)}track(e){const t=e.doc.key,n=this.wa.get(t);n?e.type!==0&&n.type===3?this.wa=this.wa.insert(t,e):e.type===3&&n.type!==1?this.wa=this.wa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.wa=this.wa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.wa=this.wa.remove(t):e.type===1&&n.type===2?this.wa=this.wa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):B(63341,{At:e,Sa:n}):this.wa=this.wa.insert(t,e)}ba(){const e=[];return this.wa.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Cr{constructor(e,t,n,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Cr(e,t,ar.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some((e=>e.Fa()))}}class oT{constructor(){this.queries=Td(),this.onlineState="Unknown",this.Ma=new Set}terminate(){(function(t,n){const s=z(t),i=s.queries;s.queries=Td(),i.forEach(((o,c)=>{for(const l of c.Ca)l.onError(n)}))})(this,new L(N.ABORTED,"Firestore shutting down"))}}function Td(){return new Tt((r=>gm(r)),Wo)}async function wl(r,e){const t=z(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.va()&&e.Fa()&&(n=2):(i=new iT,n=e.Fa()?0:1);try{switch(n){case 0:i.Da=await t.onListen(s,!0);break;case 1:i.Da=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Tl(o,`Initialization of query '${nr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Ca.push(e),e.xa(t.onlineState),i.Da&&e.Oa(i.Da)&&xl(t)}async function bl(r,e){const t=z(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Ca.indexOf(e);o>=0&&(i.Ca.splice(o,1),i.Ca.length===0?s=e.Fa()?0:1:!i.va()&&e.Fa()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function aT(r,e){const t=z(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.Ca)c.Oa(s)&&(n=!0);o.Da=s}}n&&xl(t)}function cT(r,e,t){const n=z(r),s=n.queries.get(e);if(s)for(const i of s.Ca)i.onError(t);n.queries.delete(e)}function xl(r){r.Ma.forEach((e=>{e.next()}))}var kc,wd;(wd=kc||(kc={})).Na="default",wd.Cache="cache";class Al{constructor(e,t,n){this.query=e,this.Ba=t,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=n||{}}Oa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Cr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.La?this.qa(e)&&(this.Ba.next(e),t=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),t=!0),this.ka=e,t}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let t=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),t=!0),t}Ka(e,t){if(!e.fromCache||!this.Fa())return!0;const n=t!=="Offline";return(!this.options.$a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ua(e){e=Cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==kc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this.key=e}}class Ap{constructor(e){this.key=e}}class lT{constructor(e,t){this.query=e,this.eu=t,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=X(),this.mutatedKeys=X(),this.ru=ym(e),this.iu=new ar(this.ru)}get su(){return this.eu}ou(e,t){const n=t?t._u:new vd,s=t?t.iu:this.iu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const _=s.get(f),b=ci(this.query,p)?p:null,P=!!_&&this.mutatedKeys.has(_.key),C=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let k=!1;_&&b?_.data.isEqual(b.data)?P!==C&&(n.track({type:3,doc:b}),k=!0):this.au(_,b)||(n.track({type:2,doc:b}),k=!0,(l&&this.ru(b,l)>0||u&&this.ru(b,u)<0)&&(c=!0)):!_&&b?(n.track({type:0,doc:b}),k=!0):_&&!b&&(n.track({type:1,doc:_}),k=!0,(l||u)&&(c=!0)),k&&(b?(o=o.add(b),i=C?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{iu:o,_u:n,Ss:c,mutatedKeys:i}}au(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const o=e._u.ba();o.sort(((f,p)=>(function(b,P){const C=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{At:k})}};return C(b)-C(P)})(f.type,p.type)||this.ru(f.doc,p.doc))),this.uu(n),s=s??!1;const c=t&&!s?this.cu():[],l=this.nu.size===0&&this.current&&!s?1:0,u=l!==this.tu;return this.tu=l,o.length!==0||u?{snapshot:new Cr(this.query,e.iu,i,o,e.mutatedKeys,l===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),lu:c}:{lu:c}}xa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({iu:this.iu,_u:new vd,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach((t=>this.eu=this.eu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.eu=this.eu.delete(t))),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=X(),this.iu.forEach((n=>{this.hu(n.key)&&(this.nu=this.nu.add(n.key))}));const t=[];return e.forEach((n=>{this.nu.has(n)||t.push(new Ap(n))})),this.nu.forEach((n=>{e.has(n)||t.push(new xp(n))})),t}Pu(e){this.eu=e.Ls,this.nu=X();const t=this.ou(e.documents);return this.applyChanges(t,!0)}Tu(){return Cr.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}}const Br="SyncEngine";class uT{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class hT{constructor(e){this.key=e,this.Iu=!1}}class dT{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Eu={},this.Ru=new Tt((c=>gm(c)),Wo),this.Au=new Map,this.Vu=new Set,this.du=new ae(j.comparator),this.mu=new Map,this.fu=new dl,this.gu={},this.pu=new Map,this.yu=It._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return this.wu===!0}}async function fT(r,e,t=!0){const n=ia(r);let s;const i=n.Ru.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Tu()):s=await Sp(n,e,t,!0),s}async function mT(r,e){const t=ia(r);await Sp(t,e,!0,!1)}async function Sp(r,e,t,n){const s=await xo(r.localStore,Be(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await Sl(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&sa(r.remoteStore,s),c}async function Sl(r,e,t,n,s){r.Su=(p,_,b)=>(async function(C,k,F,q){let K=k.view.ou(F);K.Ss&&(K=await Pc(C.localStore,k.query,!1).then((({documents:E})=>k.view.ou(E,K))));const Y=q&&q.targetChanges.get(k.targetId),Q=q&&q.targetMismatches.get(k.targetId)!=null,O=k.view.applyChanges(K,C.isPrimaryClient,Y,Q);return Oc(C,k.targetId,O.lu),O.snapshot})(r,p,_,b);const i=await Pc(r.localStore,e,!0),o=new lT(e,i.Ls),c=o.ou(i.documents),l=li.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),u=o.applyChanges(c,r.isPrimaryClient,l);Oc(r,t,u.lu);const f=new uT(e,t,o);return r.Ru.set(e,f),r.Au.has(t)?r.Au.get(t).push(e):r.Au.set(t,[e]),u.snapshot}async function pT(r,e,t){const n=z(r),s=n.Ru.get(e),i=n.Au.get(s.targetId);if(i.length>1)return n.Au.set(s.targetId,i.filter((o=>!Wo(o,e)))),void n.Ru.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rr(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Pr(n.remoteStore,s.targetId),Nr(n,s.targetId)})).catch(en)):(Nr(n,s.targetId),await Rr(n.localStore,s.targetId,!0))}async function gT(r,e){const t=z(r),n=t.Ru.get(e),s=t.Au.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Pr(t.remoteStore,n.targetId))}async function _T(r,e,t){const n=Nl(r);try{const s=await(function(o,c){const l=z(o),u=re.now(),f=c.reduce(((b,P)=>b.add(P.key)),X());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let P=Ue(),C=X();return l.Ms.getEntries(b,f).next((k=>{P=k,P.forEach(((F,q)=>{q.isValidDocument()||(C=C.add(F))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,P))).next((k=>{p=k;const F=[];for(const q of c){const K=jE(q,p.get(q.key).overlayedDocument);K!=null&&F.push(new wt(q.key,K,am(K.value.mapValue),ke.exists(!0)))}return l.mutationQueue.addMutationBatch(b,u,F,c)})).next((k=>{_=k;const F=k.applyToLocalDocumentSet(p,C);return l.documentOverlayCache.saveOverlays(b,k.batchId,F)}))})).then((()=>({batchId:_.batchId,changes:Em(p)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.gu[o.currentUser.toKey()];u||(u=new ae(H)),u=u.insert(c,l),o.gu[o.currentUser.toKey()]=u})(n,s.batchId,t),await rn(n,s.changes),await Fr(n.remoteStore)}catch(s){const i=Tl(s,"Failed to persist write");t.reject(i)}}async function Rp(r,e){const t=z(r);try{const n=await kv(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.mu.get(i);o&&($(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Iu=!0:s.modifiedDocuments.size>0?$(o.Iu,14607):s.removedDocuments.size>0&&($(o.Iu,42227),o.Iu=!1))})),await rn(t,n,e)}catch(n){await en(n)}}function bd(r,e,t){const n=z(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Ru.forEach(((i,o)=>{const c=o.view.xa(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=z(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const _ of p.Ca)_.xa(c)&&(u=!0)})),u&&xl(l)})(n.eventManager,e),s.length&&n.Eu.J_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function yT(r,e,t){const n=z(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.mu.get(e),i=s&&s.key;if(i){let o=new ae(j.comparator);o=o.insert(i,de.newNoDocument(i,G.min()));const c=X().add(i),l=new jr(G.min(),new Map,new ae(H),o,c);await Rp(n,l),n.du=n.du.remove(i),n.mu.delete(e),Cl(n)}else await Rr(n.localStore,e,!1).then((()=>Nr(n,e,t))).catch(en)}async function IT(r,e){const t=z(r),n=e.batch.batchId;try{const s=await Dv(t.localStore,e);Pl(t,n,null),Rl(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await rn(t,s)}catch(s){await en(s)}}async function ET(r,e,t){const n=z(r);try{const s=await(function(o,c){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>($(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(n.localStore,e);Pl(n,e,t),Rl(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await rn(n,s)}catch(s){await en(s)}}function Rl(r,e){(r.pu.get(e)||[]).forEach((t=>{t.resolve()})),r.pu.delete(e)}function Pl(r,e,t){const n=z(r);let s=n.gu[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.gu[n.currentUser.toKey()]=s}}function Nr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Au.get(e))r.Ru.delete(n),t&&r.Eu.bu(n,t);r.Au.delete(e),r.isPrimaryClient&&r.fu.Qr(e).forEach((n=>{r.fu.containsKey(n)||Pp(r,n)}))}function Pp(r,e){r.Vu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Pr(r.remoteStore,t),r.du=r.du.remove(e),r.mu.delete(t),Cl(r))}function Oc(r,e,t){for(const n of t)n instanceof xp?(r.fu.addReference(n.key,e),vT(r,n)):n instanceof Ap?(D(Br,"Document no longer in limbo: "+n.key),r.fu.removeReference(n.key,e),r.fu.containsKey(n.key)||Pp(r,n.key)):B(19791,{Du:n})}function vT(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Vu.has(n)||(D(Br,"New document in limbo: "+t),r.Vu.add(n),Cl(r))}function Cl(r){for(;r.Vu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Vu.values().next().value;r.Vu.delete(e);const t=new j(ne.fromString(e)),n=r.yu.next();r.mu.set(n,new hT(t)),r.du=r.du.insert(t,n),sa(r.remoteStore,new rt(Be(ai(t.path)),n,"TargetPurposeLimboResolution",Me.ce))}}async function rn(r,e,t){const n=z(r),s=[],i=[],o=[];n.Ru.isEmpty()||(n.Ru.forEach(((c,l)=>{o.push(n.Su(l,e,t).then((u=>{var f;if((u||t)&&n.isPrimaryClient){const p=u?!u.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=pl.Is(l.targetId,u);i.push(p)}})))})),await Promise.all(o),n.Eu.J_(s),await(async function(l,u){const f=z(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>x.forEach(u,(_=>x.forEach(_.Ps,(b=>f.persistence.referenceDelegate.addReference(p,_.targetId,b))).next((()=>x.forEach(_.Ts,(b=>f.persistence.referenceDelegate.removeReference(p,_.targetId,b)))))))))}catch(p){if(!tn(p))throw p;D(gl,"Failed to update sequence numbers: "+p)}for(const p of u){const _=p.targetId;if(!p.fromCache){const b=f.Cs.get(_),P=b.snapshotVersion,C=b.withLastLimboFreeSnapshotVersion(P);f.Cs=f.Cs.insert(_,C)}}})(n.localStore,i))}async function TT(r,e){const t=z(r);if(!t.currentUser.isEqual(e)){D(Br,"User change. New user:",e.toKey());const n=await cp(t.localStore,e);t.currentUser=e,(function(i,o){i.pu.forEach((c=>{c.forEach((l=>{l.reject(new L(N.CANCELLED,o))}))})),i.pu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await rn(t,n.Os)}}function wT(r,e){const t=z(r),n=t.mu.get(e);if(n&&n.Iu)return X().add(n.key);{let s=X();const i=t.Au.get(e);if(!i)return s;for(const o of i){const c=t.Ru.get(o);s=s.unionWith(c.view.su)}return s}}async function bT(r,e){const t=z(r),n=await Pc(t.localStore,e.query,!0),s=e.view.Pu(n);return t.isPrimaryClient&&Oc(t,e.targetId,s.lu),s}async function xT(r,e){const t=z(r);return hp(t.localStore,e).then((n=>rn(t,n)))}async function AT(r,e,t,n){const s=z(r),i=await(function(c,l){const u=z(c),f=z(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",(p=>f.Zn(p,l).next((_=>_?u.localDocuments.getDocuments(p,_):x.resolve(null)))))})(s.localStore,e);i!==null?(t==="pending"?await Fr(s.remoteStore):t==="acknowledged"||t==="rejected"?(Pl(s,e,n||null),Rl(s,e),(function(c,l){z(z(c).mutationQueue).tr(l)})(s.localStore,e)):B(6720,"Unknown batchState",{Cu:t}),await rn(s,i)):D(Br,"Cannot apply mutation batch with id: "+e)}async function ST(r,e){const t=z(r);if(ia(t),Nl(t),e===!0&&t.wu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await xd(t,n.toArray());t.wu=!0,await Dc(t.remoteStore,!0);for(const i of s)sa(t.remoteStore,i)}else if(e===!1&&t.wu!==!1){const n=[];let s=Promise.resolve();t.Au.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then((()=>(Nr(t,o),Rr(t.localStore,o,!0)))),Pr(t.remoteStore,o)})),await s,await xd(t,n),(function(o){const c=z(o);c.mu.forEach(((l,u)=>{Pr(c.remoteStore,u)})),c.fu.Gr(),c.mu=new Map,c.du=new ae(j.comparator)})(t),t.wu=!1,await Dc(t.remoteStore,!1)}}async function xd(r,e,t){const n=z(r),s=[],i=[];for(const o of e){let c;const l=n.Au.get(o);if(l&&l.length!==0){c=await xo(n.localStore,Be(l[0]));for(const u of l){const f=n.Ru.get(u),p=await bT(n,f);p.snapshot&&i.push(p.snapshot)}}else{const u=await up(n.localStore,o);c=await xo(n.localStore,u),await Sl(n,Cp(u),o,!1,c.resumeToken)}s.push(c)}return n.Eu.J_(i),s}function Cp(r){return pm(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function RT(r){return(function(t){return z(z(t).persistence).ls()})(z(r).localStore)}async function PT(r,e,t,n){const s=z(r);if(s.wu)return void D(Br,"Ignoring unexpected query state notification.");const i=s.Au.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await hp(s.localStore,_m(i[0])),c=jr.createSynthesizedRemoteEventForCurrentChange(e,t==="current",pe.EMPTY_BYTE_STRING);await rn(s,o,c);break}case"rejected":await Rr(s.localStore,e,!0),Nr(s,e,n);break;default:B(64155,t)}}async function CT(r,e,t){const n=ia(r);if(n.wu){for(const s of e){if(n.Au.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){D(Br,"Adding an already active target "+s);continue}const i=await up(n.localStore,s),o=await xo(n.localStore,i);await Sl(n,Cp(i),o.targetId,!1,o.resumeToken),sa(n.remoteStore,o)}for(const s of t)n.Au.has(s)&&await Rr(n.localStore,s,!1).then((()=>{Pr(n.remoteStore,s),Nr(n,s)})).catch(en)}}function ia(r){const e=z(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yT.bind(null,e),e.Eu.J_=aT.bind(null,e.eventManager),e.Eu.bu=cT.bind(null,e.eventManager),e}function Nl(r){const e=z(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ET.bind(null,e),e}class Qs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=na(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,t){return null}Nu(e,t){return null}xu(e){return ap(this.persistence,new op,e.initialUser,this.serializer)}Mu(e){return new fl(ta.Ai,this.serializer)}Fu(e){return new gp}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qs.provider={build:()=>new Qs};class NT extends Qs{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,t){$(this.persistence.referenceDelegate instanceof bo,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new ep(n,e.asyncQueue,t)}Mu(e){const t=this.cacheSizeBytes!==void 0?Re.withCacheSize(this.cacheSizeBytes):Re.DEFAULT;return new fl((n=>bo.Ai(n,t)),this.serializer)}}class Np extends Qs{constructor(e,t,n){super(),this.Bu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Bu.initialize(this,e),await Nl(this.Bu.syncEngine),await Fr(this.Bu.remoteStore),await this.persistence.Gi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}xu(e){return ap(this.persistence,new op,e.initialUser,this.serializer)}Ou(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new ep(n,e.asyncQueue,t)}Nu(e,t){const n=new LI(t,this.persistence);return new MI(e.asyncQueue,n)}Mu(e){const t=ip(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Re.withCacheSize(this.cacheSizeBytes):Re.DEFAULT;return new ml(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,_p(),ro(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Fu(e){return new gp}}class VT extends Np{constructor(e,t){super(e,t,!1),this.Bu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Bu.syncEngine;this.sharedClientState instanceof Xa&&(this.sharedClientState.syncEngine={So:AT.bind(null,t),bo:PT.bind(null,t),Do:CT.bind(null,t),ls:RT.bind(null,t),wo:xT.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Gi((async n=>{await ST(this.Bu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}Fu(e){const t=_p();if(!Xa.v(t))throw new L(N.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ip(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Xa(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Js{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>bd(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=TT.bind(null,this.syncEngine),await Dc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new oT})()}createDatastore(e){const t=na(e.databaseInfo.databaseId),n=Bv(e.databaseInfo);return Gv(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,o,c){return new Wv(n,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>bd(this.syncEngine,t,0)),(function(){return yd.v()?new yd:new Lv})())}createSyncEngine(e,t){return(function(s,i,o,c,l,u,f){const p=new dT(s,i,o,c,l,u);return f&&(p.wu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=z(s);D(ct,"RemoteStore shutting down."),i.Va.add(5),await ui(i),i.ma.shutdown(),i.fa.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Js.provider={build:()=>new Js};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):fe("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="FirestoreClient";class DT{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=Se.UNAUTHENTICATED,this.clientId=$c.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{D(Xt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(D(Xt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Tl(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Za(r,e){r.asyncQueue.verifyOperationInProgress(),D(Xt,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await cp(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Ad(r,e){r.asyncQueue.verifyOperationInProgress();const t=await kT(r);D(Xt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>Ed(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Ed(e.remoteStore,s))),r._onlineComponents=e}async function kT(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D(Xt,"Using user provided OfflineComponentProvider");try{await Za(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;fr("Error using user provided cache. Falling back to memory cache: "+t),await Za(r,new Qs)}}else D(Xt,"Using default OfflineComponentProvider"),await Za(r,new NT(void 0));return r._offlineComponents}async function Vp(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D(Xt,"Using user provided OnlineComponentProvider"),await Ad(r,r._uninitializedComponentsProvider._online)):(D(Xt,"Using default OnlineComponentProvider"),await Ad(r,new Js))),r._onlineComponents}function OT(r){return Vp(r).then((e=>e.syncEngine))}async function Po(r){const e=await Vp(r),t=e.eventManager;return t.onListen=fT.bind(null,e.syncEngine),t.onUnlisten=pT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=mT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gT.bind(null,e.syncEngine),t}function MT(r,e,t,n){const s=new Vl(n),i=new Al(e,s,t);return r.asyncQueue.enqueueAndForget((async()=>wl(await Po(r),i))),()=>{s.ku(),r.asyncQueue.enqueueAndForget((async()=>bl(await Po(r),i)))}}function LT(r,e,t={}){const n=new st;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new Vl({next:_=>{f.ku(),o.enqueueAndForget((()=>bl(i,p)));const b=_.docs.has(c);!b&&_.fromCache?u.reject(new L(N.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&_.fromCache&&l&&l.source==="server"?u.reject(new L(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(_)},error:_=>u.reject(_)}),p=new Al(ai(c.path),f,{includeMetadataChanges:!0,$a:!0});return wl(i,p)})(await Po(r),r.asyncQueue,e,t,n))),n.promise}function jT(r,e,t={}){const n=new st;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new Vl({next:_=>{f.ku(),o.enqueueAndForget((()=>bl(i,p))),_.fromCache&&l.source==="server"?u.reject(new L(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(_)},error:_=>u.reject(_)}),p=new Al(c,f,{includeMetadataChanges:!0,$a:!0});return wl(i,p)})(await Po(r),r.asyncQueue,e,t,n))),n.promise}function FT(r,e){const t=new st;return r.asyncQueue.enqueueAndForget((async()=>_T(await OT(r),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="ComponentProvider",Sd=new Map;function BT(r,e,t,n,s){return new hE(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Dp(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="firestore.googleapis.com",Rd=!0;class Pd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new L(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zT,this.ssl=Rd}else this.host=e.host,this.ssl=e.ssl??Rd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Qm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Zm)throw new L(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dp(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new L(N.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new L(N.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new L(N.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dl{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new bI;switch(n.type){case"firstParty":return new SI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Sd.get(t);n&&(D(UT,"Removing Datastore"),Sd.delete(t),n.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new hi(this.firestore,e,this._query)}}class me{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}toJSON(){return{type:me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(si(t,me._jsonSchema))return new me(e,n||null,new j(ne.fromString(t.referencePath)))}}me._jsonSchemaVersion="firestore/documentReference/1.0",me._jsonSchema={type:_e("string",me._jsonSchemaVersion),referencePath:_e("string")};class Gt extends hi{constructor(e,t,n){super(e,t,ai(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new j(e))}withConverter(e){return new Gt(this.firestore,e,this._path)}}function $T(r,e,...t){if(r=Ne(r),Df("collection","path",e),r instanceof Dl){const n=ne.fromString(e,...t);return Ih(n),new Gt(r,null,n)}{if(!(r instanceof me||r instanceof Gt))throw new L(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return Ih(n),new Gt(r.firestore,null,n)}}function kp(r,e,...t){if(r=Ne(r),arguments.length===1&&(e=$c.newId()),Df("doc","path",e),r instanceof Dl){const n=ne.fromString(e,...t);return yh(n),new me(r,null,new j(n))}{if(!(r instanceof me||r instanceof Gt))throw new L(N.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return yh(n),new me(r.firestore,r instanceof Gt?r.converter:null,new j(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="AsyncQueue";class Nd{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new yp(this,"async_queue_retry"),this.cc=()=>{const n=ro();n&&D(Cd,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this.lc=e;const t=ro();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const t=ro();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise((()=>{}));const t=new st;return this.Pc((()=>this.rc&&this.ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.nc.push(e),this.Tc())))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!tn(e))throw e;D(Cd,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_((()=>this.Tc()))}}Pc(e){const t=this.lc.then((()=>(this._c=!0,e().catch((n=>{throw this.oc=n,this._c=!1,fe("INTERNAL UNHANDLED ERROR: ",Vd(n)),n})).then((n=>(this._c=!1,n))))));return this.lc=t,t}enqueueAfterDelay(e,t,n){this.hc(),this.uc.indexOf(e)>-1&&(t=0);const s=vl.createAndSchedule(this,e,t,n,(i=>this.Ic(i)));return this.sc.push(s),s}hc(){this.oc&&B(47125,{Ec:Vd(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(const t of this.sc)if(t.timerId===e)return!0;return!1}Vc(e){return this.Rc().then((()=>{this.sc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.sc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Rc()}))}dc(e){this.uc.push(e)}Ic(e){const t=this.sc.indexOf(e);this.sc.splice(t,1)}}function Vd(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Yt extends Dl{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Nd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nd(e),this._firestoreClient=void 0,await e}}}function qT(r,e,t){t||(t=mo);const n=Bc(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(Nn(i,e))return s;throw new L(N.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new L(N.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Zm)throw new L(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&ri(e.host)&&If(e.host),n.initialize({options:e,instanceIdentifier:t})}function oa(r){if(r._terminated)throw new L(N.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||KT(r),r._firestoreClient}function KT(r){var n,s,i,o;const e=r._freezeSettings(),t=BT(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new DT(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $e(pe.fromBase64String(e))}catch(t){throw new L(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $e(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$e._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(si(e,$e._jsonSchema))return $e.fromBase64String(e.bytes)}}$e._jsonSchemaVersion="firestore/bytes/1.0",$e._jsonSchema={type:_e("string",$e._jsonSchemaVersion),bytes:_e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:it._jsonSchemaVersion}}static fromJSON(e){if(si(e,it._jsonSchema))return new it(e.latitude,e.longitude)}}it._jsonSchemaVersion="firestore/geoPoint/1.0",it._jsonSchema={type:_e("string",it._jsonSchemaVersion),latitude:_e("number"),longitude:_e("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:We._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(si(e,We._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new We(e.vectorValues);throw new L(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}We._jsonSchemaVersion="firestore/vectorValue/1.0",We._jsonSchema={type:_e("string",We._jsonSchemaVersion),vectorValues:_e("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=/^__.*__$/;class HT{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new wt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lr(e,this.data,t,this.fieldTransforms)}}class Op{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new wt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Mp(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{dataSource:r})}}class Ml{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.mc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ml({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.yc(e),n}wc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(),n}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return Co(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc("Document fields must not be empty");if(Mp(this.dataSource)&&GT.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class WT{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||na(e)}V(e,t,n,s=!1){return new Ml({dataSource:e,methodName:t,targetDoc:n,path:ue.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lp(r){const e=r._freezeSettings(),t=na(r._databaseId);return new WT(r._databaseId,!!e.ignoreUndefinedProperties,t)}function QT(r,e,t,n,s,i={}){const o=r.V(i.merge||i.mergeFields?2:0,e,t,s);Ll("Data must be an object, but it was:",o,n);const c=jp(n,o);let l,u;if(i.merge)l=new Le(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const _=Xs(e,p,t);if(!o.contains(_))throw new L(N.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Bp(f,_)||f.push(_)}l=new Le(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new HT(new Pe(c),l,u)}class aa extends Ol{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.bc(`${this._methodName}() can only appear at the top level of your update data`):e.bc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof aa}}function JT(r,e,t,n){const s=r.V(1,e,t);Ll("Data must be an object, but it was:",s,n);const i=[],o=Pe.empty();nn(n,((l,u)=>{const f=Up(e,l,t);u=Ne(u);const p=s.wc(f);if(u instanceof aa)i.push(f);else{const _=ca(u,p);_!=null&&(i.push(f),o.set(f,_))}}));const c=new Le(i);return new Op(o,c,s.fieldTransforms)}function XT(r,e,t,n,s,i){const o=r.V(1,e,t),c=[Xs(e,n,t)],l=[s];if(i.length%2!=0)throw new L(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(Xs(e,i[_])),l.push(i[_+1]);const u=[],f=Pe.empty();for(let _=c.length-1;_>=0;--_)if(!Bp(u,c[_])){const b=c[_];let P=l[_];P=Ne(P);const C=o.wc(b);if(P instanceof aa)u.push(b);else{const k=ca(P,C);k!=null&&(u.push(b),f.set(b,k))}}const p=new Le(u);return new Op(f,p,o.fieldTransforms)}function ca(r,e){if(Fp(r=Ne(r)))return Ll("Unsupported field value:",e,r),jp(r,e);if(r instanceof Ol)return(function(n,s){if(!Mp(s.dataSource))throw s.bc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.bc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.bc("Nested arrays are not supported");return(function(n,s){const i=[];let o=0;for(const c of n){let l=ca(c,s.Sc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(r,e)}return(function(n,s){if((n=Ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return NE(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=re.fromDate(n);return{timestampValue:Sr(s.serializer,i)}}if(n instanceof re){const i=new re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Sr(s.serializer,i)}}if(n instanceof it)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $e)return{bytesValue:Vm(s.serializer,n._byteString)};if(n instanceof me){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.bc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ll(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof We)return(function(o,c){const l=o instanceof We?o.toArray():o;return{mapValue:{fields:{[Yc]:{stringValue:Zc},[Er]:{arrayValue:{values:l.map((f=>{if(typeof f!="number")throw c.bc("VectorValues must only contain numeric values.");return Qo(c.serializer,f)}))}}}}}})(n,s);if($m(n))return n._toProto(s.serializer);throw s.bc(`Unsupported field value: ${qc(n)}`)})(r,e)}function jp(r,e){const t={};return Xf(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nn(r,((n,s)=>{const i=ca(s,e.gc(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function Fp(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof re||r instanceof it||r instanceof $e||r instanceof me||r instanceof Ol||r instanceof We||$m(r))}function Ll(r,e,t){if(!Fp(t)||!kf(t)){const n=qc(t);throw n==="an object"?e.bc(r+" a custom object"):e.bc(r+" "+n)}}function Xs(r,e,t){if((e=Ne(e))instanceof kl)return e._internalPath;if(typeof e=="string")return Up(r,e);throw Co("Field path arguments must be of type string or ",r,!1,void 0,t)}const YT=new RegExp("[~\\*/\\[\\]]");function Up(r,e,t){if(e.search(YT)>=0)throw Co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new kl(...e.split("."))._internalPath}catch{throw Co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Co(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new L(N.INVALID_ARGUMENT,c+r+l)}function Bp(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{convertValue(e,t="none"){switch(Wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return nn(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[Er].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>le(o.doubleValue)));return new We(t)}convertGeoPoint(e){return new it(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ko(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const t=_t(e);return new re(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ne.fromString(e);$(zm(n),9688,{name:e});const s=new kn(n.get(1),n.get(3)),i=new j(n.popFirst(5));return s.isEqual(t)||fe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends ZT{constructor(e){super(),this.firestore=e}convertBytes(e){return new $e(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,t)}}const Dd="@firebase/firestore",kd="4.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ew(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Xs("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ew extends zp{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new L(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function tw(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class nw{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=ow(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function rw(r){return new nw(r)}class sw{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Js.provider,this._offlineComponentProvider={build:t=>new Np(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class iw{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Js.provider,this._offlineComponentProvider={build:t=>new VT(t,e==null?void 0:e.cacheSizeBytes)}}}function ow(r){return new sw(r==null?void 0:r.forceOwnership)}function aw(){return new iw}class bs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sn extends zp{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new so(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Xs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Sn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Sn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Sn._jsonSchema={type:_e("string",Sn._jsonSchemaVersion),bundleSource:_e("string","DocumentSnapshot"),bundleName:_e("string"),bundle:_e("string")};class so extends Sn{data(e={}){return super.data(e)}}class Rn{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new bs(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new so(this._firestore,this._userDataWriter,n.key,n,new bs(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new so(s._firestore,s._userDataWriter,c.doc.key,c.doc,new bs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new so(s._firestore,s._userDataWriter,c.doc.key,c.doc,new bs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:cw(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$c.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function cw(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:r})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn._jsonSchemaVersion="firestore/querySnapshot/1.0",Rn._jsonSchema={type:_e("string",Rn._jsonSchemaVersion),bundleSource:_e("string","QuerySnapshot"),bundleName:_e("string"),bundle:_e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(r){r=qe(r,me);const e=qe(r.firestore,Yt),t=oa(e);return LT(t,r._key).then((n=>Gp(e,r,n)))}function uw(r){r=qe(r,hi);const e=qe(r.firestore,Yt),t=oa(e),n=new jl(e);return $p(r._query),jT(t,r._query).then((s=>new Rn(e,n,r,s)))}function qp(r,e,t){r=qe(r,me);const n=qe(r.firestore,Yt),s=tw(r.converter,e,t),i=Lp(n);return Fl(n,[QT(i,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,ke.none())])}function hw(r,e,t,...n){r=qe(r,me);const s=qe(r.firestore,Yt),i=Lp(s);let o;return o=typeof(e=Ne(e))=="string"||e instanceof kl?XT(i,"updateDoc",r._key,e,t,n):JT(i,"updateDoc",r._key,e),Fl(s,[o.toMutation(r._key,ke.exists(!0))])}function dw(r){return Fl(qe(r.firestore,Yt),[new Yo(r._key,ke.none())])}function Kp(r,...e){var u,f,p;r=Ne(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||Od(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Od(e[n])){const _=e[n];e[n]=(u=_.next)==null?void 0:u.bind(_),e[n+1]=(f=_.error)==null?void 0:f.bind(_),e[n+2]=(p=_.complete)==null?void 0:p.bind(_)}let i,o,c;if(r instanceof me)o=qe(r.firestore,Yt),c=ai(r._key.path),i={next:_=>{e[n]&&e[n](Gp(o,r,_))},error:e[n+1],complete:e[n+2]};else{const _=qe(r,hi);o=qe(_.firestore,Yt),c=_._query;const b=new jl(o);i={next:P=>{e[n]&&e[n](new Rn(o,b,_,P))},error:e[n+1],complete:e[n+2]},$p(r._query)}const l=oa(o);return MT(l,c,s,i)}function Fl(r,e){const t=oa(r);return FT(t,e)}function Gp(r,e,t){const n=t.docs.get(e._key),s=new jl(r);return new Sn(r,s,e._key,n,new bs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){TI(Or),dr(new Vn("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new Yt(new xI(n.getProvider("auth-internal")),new RI(o,n.getProvider("app-check-internal")),dE(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),$t(Dd,kd,e),$t(Dd,kd,"esm2020")})();function Hp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fw=Hp,Wp=new ti("auth","Firebase",Hp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Fc("@firebase/auth");function mw(r,...e){No.logLevel<=Z.WARN&&No.warn(`Auth (${Or}): ${r}`,...e)}function io(r,...e){No.logLevel<=Z.ERROR&&No.error(`Auth (${Or}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(r,...e){throw Bl(r,...e)}function Qe(r,...e){return Bl(r,...e)}function Ul(r,e,t){const n={...fw(),[e]:t};return new ti("auth","Firebase",n).create(e,{appName:r.name})}function Pn(r){return Ul(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pw(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&lt(r,"argument-error"),Ul(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bl(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Wp.create(r,...e)}function W(r,e,...t){if(!r)throw Bl(e,...t)}function mt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw io(e),new Error(e)}function Et(r,e){r||mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function gw(){return Md()==="http:"||Md()==="https:"}function Md(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gw()||ey()||"connection"in navigator)?navigator.onLine:!0}function yw(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.shortDelay=e,this.longDelay=t,Et(t>e,"Short delay should be less than long delay!"),this.isMobile=Y_()||ty()}get(){return _w()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(r,e){Et(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vw=new di(3e4,6e4);function $l(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function zr(r,e,t,n,s={}){return Jp(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=ni({key:r.config.apiKey,...o}).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const u={method:e,headers:l,...i};return Z_()||(u.referrerPolicy="no-referrer"),r.emulatorConfig&&ri(r.emulatorConfig.host)&&(u.credentials="include"),Qp.fetch()(await Xp(r,r.config.apiHost,t,c),u)})}async function Jp(r,e,t){r._canInitEmulator=!1;const n={...Iw,...e};try{const s=new ww(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw zi(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zi(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw zi(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ul(r,f,u);lt(r,f)}}catch(s){if(s instanceof vt)throw s;lt(r,"network-request-failed",{message:String(s)})}}async function Tw(r,e,t,n,s={}){const i=await zr(r,e,t,n,s);return"mfaPendingCredential"in i&&lt(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function Xp(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?zl(r.config,s):`${r.config.apiScheme}://${s}`;return Ew.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class ww{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Qe(this.auth,"network-request-failed")),vw.get())})}}function zi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Qe(r,e,n);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(r,e){return zr(r,"POST","/v1/accounts:delete",e)}async function Vo(r,e){return zr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xw(r,e=!1){const t=Ne(r),n=await t.getIdToken(e),s=ql(n);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:ks(ec(s.auth_time)),issuedAtTime:ks(ec(s.iat)),expirationTime:ks(ec(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ec(r){return Number(r)*1e3}function ql(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const s=hf(t);return s?JSON.parse(s):(io("Failed to decode base64 JWT payload"),null)}catch(s){return io("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ld(r){const e=ql(r);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof vt&&Aw(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Aw({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ks(this.lastLoginAt),this.creationTime=ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(r){var p;const e=r.auth,t=await r.getIdToken(),n=await Ys(r,Vo(e,{idToken:t}));W(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Yp(s.providerUserInfo):[],o=Pw(r.providerData,i),c=r.isAnonymous,l=!(r.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Lc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(r,f)}async function Rw(r){const e=Ne(r);await Do(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Pw(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Yp(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(r,e){const t=await Jp(r,{},async()=>{const n=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await Xp(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:n};return r.emulatorConfig&&ri(r.emulatorConfig.host)&&(l.credentials="include"),Qp.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Nw(r,e){return zr(r,"POST","/v2/accounts:revokeToken",$l(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ld(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=Ld(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await Cw(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new cr;return n&&(W(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(r,e){W(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class He{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new Sw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xw(this,e)}reload(){return Rw(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new He({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Do(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await Ys(this,bw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:_,isAnonymous:b,providerData:P,stsTokenManager:C}=t;W(p&&C,e,"internal-error");const k=cr.fromJSON(this.name,C);W(typeof p=="string",e,"internal-error"),Ot(n,e.name),Ot(s,e.name),W(typeof _=="boolean",e,"internal-error"),W(typeof b=="boolean",e,"internal-error"),Ot(i,e.name),Ot(o,e.name),Ot(c,e.name),Ot(l,e.name),Ot(u,e.name),Ot(f,e.name);const F=new He({uid:p,auth:e,email:s,emailVerified:_,displayName:n,isAnonymous:b,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:k,createdAt:u,lastLoginAt:f});return P&&Array.isArray(P)&&(F.providerData=P.map(q=>({...q}))),l&&(F._redirectEventId=l),F}static async _fromIdTokenResponse(e,t,n=!1){const s=new cr;s.updateFromServerResponse(t);const i=new He({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Do(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Yp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new cr;c.updateFromIdToken(n);const l=new He({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Lc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Map;function pt(r){Et(r instanceof Function,"Expected a class definition");let e=jd.get(r);return e?(Et(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,jd.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zp.type="NONE";const Fd=Zp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(r,e,t){return`firebase:${r}:${e}:${t}`}class lr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=oo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Vo(this.auth,{idToken:e}).catch(()=>{});return t?He._fromGetAccountInfoResponse(this.auth,t,e):null}return He._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new lr(pt(Fd),e,n);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||pt(Fd);const o=oo(n,e.config.apiKey,e.name);let c=null;for(const u of t)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const _=await Vo(e,{idToken:f}).catch(()=>{});if(!_)break;p=await He._fromGetAccountInfoResponse(e,_,f)}else p=He._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new lr(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new lr(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ig(e))return"Blackberry";if(og(e))return"Webos";if(tg(e))return"Safari";if((e.includes("chrome/")||ng(e))&&!e.includes("edge/"))return"Chrome";if(sg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function eg(r=Ie()){return/firefox\//i.test(r)}function tg(r=Ie()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ng(r=Ie()){return/crios\//i.test(r)}function rg(r=Ie()){return/iemobile/i.test(r)}function sg(r=Ie()){return/android/i.test(r)}function ig(r=Ie()){return/blackberry/i.test(r)}function og(r=Ie()){return/webos/i.test(r)}function Kl(r=Ie()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Vw(r=Ie()){var e;return Kl(r)&&!!((e=window.navigator)!=null&&e.standalone)}function Dw(){return ny()&&document.documentMode===10}function ag(r=Ie()){return Kl(r)||sg(r)||og(r)||ig(r)||/windows phone/i.test(r)||rg(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(r,e=[]){let t;switch(r){case"Browser":t=Ud(Ie());break;case"Worker":t=`${Ud(Ie())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Or}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow(r,e={}){return zr(r,"GET","/v2/passwordPolicy",$l(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=6;class Lw{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Mw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bd(this),this.idTokenSubscription=new Bd(this),this.beforeStateQueue=new kw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pt(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted&&(this.persistenceManager=await lr.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Vo(this,{idToken:e}),n=await He._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=n==null?void 0:n._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(n=l.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Do(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(Pn(this));const t=e?Ne(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ow(this),t=new Lw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Nw(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pt(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&mw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function la(r){return Ne(r)}class Bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=cy(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fw(r){Gl=r}function Uw(r){return Gl.loadJS(r)}function Bw(){return Gl.gapiScript}function zw(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(r,e){const t=Bc(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Nn(i,e??{}))return s;lt(s,"already-initialized")}return t.initialize({options:e})}function qw(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(pt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Kw(r,e,t){const n=la(r);W(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=lg(e),{host:o,port:c}=Gw(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){W(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),W(Nn(u,n.config.emulator)&&Nn(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,ri(o)?If(`${i}//${o}${l}`):Hw()}function lg(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Gw(r){const e=lg(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:zd(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:zd(o)}}}function zd(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Hw(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(r,e){return Tw(r,"POST","/v1/accounts:signInWithIdp",$l(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="http://localhost";class jn extends ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new jn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ur(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ur(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ur(e,t)}buildRequest(){const e={requestUri:Ww,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ni(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Hl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends fi{constructor(){super("facebook.com")}static credential(e){return jn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return jn._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ft.credential(t,n)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends fi{constructor(){super("github.com")}static credential(e){return jn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends fi{constructor(){super("twitter.com")}static credential(e,t){return jn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ft.credential(t,n)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await He._fromIdTokenResponse(e,n,s),o=$d(n);return new Vr({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=$d(n);return new Vr({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function $d(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends vt{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,ko.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new ko(e,t,n,s)}}function hg(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ko._fromErrorAndOperation(r,i,e,n):i})}async function Qw(r,e,t=!1){const n=await Ys(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Vr._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(r,e,t=!1){const{auth:n}=r;if(Ge(n.app))return Promise.reject(Pn(n));const s="reauthenticate";try{const i=await Ys(r,hg(n,s,e,r),t);W(i.idToken,n,"internal-error");const o=ql(i.idToken);W(o,n,"internal-error");const{sub:c}=o;return W(r.uid===c,n,"user-mismatch"),Vr._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&lt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(r,e,t=!1){if(Ge(r.app))return Promise.reject(Pn(r));const n="signIn",s=await hg(r,n,e),i=await Vr._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function Yw(r,e,t,n){return Ne(r).onIdTokenChanged(e,t,n)}function Zw(r,e,t){return Ne(r).beforeAuthStateChanged(e,t)}function qd(r){return Ne(r).signOut()}const Oo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Oo,"1"),this.storage.removeItem(Oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=1e3,tb=10;class fg extends dg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ag(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);Dw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tb):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},eb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fg.type="LOCAL";const nb=fg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg extends dg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mg.type="SESSION";const pg=mg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new ua(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await rb(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Wl("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===u)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return window}function ib(r){ot().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function ob(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ab(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function cb(){return gg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="firebaseLocalStorageDb",lb=1,Mo="firebaseLocalStorage",yg="fbase_key";class mi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ha(r,e){return r.transaction([Mo],e?"readwrite":"readonly").objectStore(Mo)}function ub(){const r=indexedDB.deleteDatabase(_g);return new mi(r).toPromise()}function Ig(){const r=indexedDB.open(_g,lb);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Mo,{keyPath:yg})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Mo)?e(n):(n.close(),await ub(),e(await Ig()))})})}async function Kd(r,e,t){const n=ha(r,!0).put({[yg]:e,value:t});return new mi(n).toPromise()}async function hb(r,e){const t=ha(r,!1).get(e),n=await new mi(t).toPromise();return n===void 0?null:n.value}function Gd(r,e){const t=ha(r,!0).delete(e);return new mi(t).toPromise()}const db=800,fb=3;class Eg{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Ig(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>fb)throw n;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return gg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(cb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ob(),!this.activeServiceWorker)return;this.sender=new sb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ab()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Kd(e,Oo,"1"),await Gd(e,Oo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kd(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>hb(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ha(s,!1).getAll();return new mi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),db)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Eg.type="LOCAL";const mb=Eg;new di(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(r,e){return e?pt(e):(W(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ur(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ur(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pb(r){return Xw(r.auth,new Ql(r),r.bypassAuthState)}function gb(r){const{auth:e,user:t}=r;return W(t,e,"internal-error"),Jw(t,new Ql(r),r.bypassAuthState)}async function _b(r){const{auth:e,user:t}=r;return W(t,e,"internal-error"),Qw(t,new Ql(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pb;case"linkViaPopup":case"linkViaRedirect":return _b;case"reauthViaPopup":case"reauthViaRedirect":return gb;default:lt(this.auth,"internal-error")}}resolve(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=new di(2e3,1e4);async function Ib(r,e,t){if(Ge(r.app))return Promise.reject(Qe(r,"operation-not-supported-in-this-environment"));const n=la(r);pw(r,e,Hl);const s=vg(n,t);return new Tn(n,"signInViaPopup",e,s).executeNotNull()}class Tn extends Tg{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const e=Wl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yb.get())};e()}}Tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="pendingRedirect",ao=new Map;class vb extends Tg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ao.get(this.auth._key());if(!e){try{const n=await Tb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tb(r,e){const t=xb(e),n=bb(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function wb(r,e){ao.set(r._key(),e)}function bb(r){return pt(r._redirectPersistence)}function xb(r){return oo(Eb,r.config.apiKey,r.name)}async function Ab(r,e,t=!1){if(Ge(r.app))return Promise.reject(Pn(r));const n=la(r),s=vg(n,e),o=await new vb(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=600*1e3;class Rb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!wg(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hd(e))}saveEventToCache(e){this.cachedEventUids.add(Hd(e)),this.lastProcessedEventTime=Date.now()}}function Hd(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function wg({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pb(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wg(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(r,e={}){return zr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vb=/^https?/;async function Db(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Cb(r);for(const t of e)try{if(kb(t))return}catch{}lt(r,"unauthorized-domain")}function kb(r){const e=Mc(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Vb.test(t))return!1;if(Nb.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=new di(3e4,6e4);function Wd(){const r=ot().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Mb(r){return new Promise((e,t)=>{var s,i,o;function n(){Wd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wd(),t(Qe(r,"network-request-failed"))},timeout:Ob.get()})}if((i=(s=ot().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=ot().gapi)!=null&&o.load)n();else{const c=zw("iframefcb");return ot()[c]=()=>{gapi.load?n():t(Qe(r,"network-request-failed"))},Uw(`${Bw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw co=null,e})}let co=null;function Lb(r){return co=co||Mb(r),co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=new di(5e3,15e3),Fb="__/auth/iframe",Ub="emulator/auth/iframe",Bb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $b(r){const e=r.config;W(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?zl(e,Ub):`https://${r.config.authDomain}/${Fb}`,n={apiKey:e.apiKey,appName:r.name,v:Or},s=zb.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ni(n).slice(1)}`}async function qb(r){const e=await Lb(r),t=ot().gapi;return W(t,r,"internal-error"),e.open({where:document.body,url:$b(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bb,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=Qe(r,"network-request-failed"),c=ot().setTimeout(()=>{i(o)},jb.get());function l(){ot().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gb=500,Hb=600,Wb="_blank",Qb="http://localhost";class Qd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jb(r,e,t,n=Gb,s=Hb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l={...Kb,width:n.toString(),height:s.toString(),top:i,left:o},u=Ie().toLowerCase();t&&(c=ng(u)?Wb:t),eg(u)&&(e=e||Qb,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[b,P])=>`${_}${b}=${P},`,"");if(Vw(u)&&c!=="_self")return Xb(e||"",c),new Qd(null);const p=window.open(e||"",c,f);W(p,r,"popup-blocked");try{p.focus()}catch{}return new Qd(p)}function Xb(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="__/auth/handler",Zb="emulator/auth/handler",ex=encodeURIComponent("fac");async function Jd(r,e,t,n,s,i){W(r.config.authDomain,r,"auth-domain-config-required"),W(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Or,eventId:s};if(e instanceof Hl){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",ay(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof fi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),u=l?`#${ex}=${encodeURIComponent(l)}`:"";return`${tx(r)}?${ni(c).slice(1)}${u}`}function tx({config:r}){return r.emulator?zl(r,Zb):`https://${r.authDomain}/${Yb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="webStorageSupport";class nx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pg,this._completeRedirectFn=Ab,this._overrideRedirectResult=wb}async _openPopup(e,t,n,s){var o;Et((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Jd(e,t,n,Mc(),s);return Jb(e,i,Wl())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Jd(e,t,n,Mc(),s);return ib(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Et(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await qb(e),n=new Rb(e);return t.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(tc,{type:tc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[tc];i!==void 0&&t(!!i),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Db(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ag()||tg()||Kl()}}const rx=nx;var Xd="@firebase/auth",Yd="1.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ox(r){dr(new Vn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cg(r)},u=new jw(n,s,i,l);return qw(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),dr(new Vn("auth-internal",e=>{const t=la(e.getProvider("auth").getImmediate());return(n=>new sx(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(Xd,Yd,ix(r)),$t(Xd,Yd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=300,cx=mf("authIdTokenMaxAge")||ax;let Zd=null;const lx=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>cx)return;const s=t==null?void 0:t.token;Zd!==s&&(Zd=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ux(r=lI()){const e=Bc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=$w(r,{popupRedirectResolver:rx,persistence:[mb,nb,pg]}),n=mf("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=lx(i.toString());Zw(t,o,()=>o(t.currentUser)),Yw(t,c=>o(c))}}const s=J_("auth");return s&&Kw(t,`http://${s}`),t}function hx(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Fw({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Qe("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",hx().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ox("Browser");let nc=null,$i=null,qi=null;function bg(){try{const r=localStorage.getItem("fc_firebase_config");return r?JSON.parse(r):null}catch{return null}}function Zt(){var r;return!!((r=bg())!=null&&r.projectId)}function Zs(){if($i&&qi)return{db:$i,auth:qi};const r=bg();return r!=null&&r.apiKey?(nc=hh().length?hh()[0]:Tf(r),$i=qT(nc,{localCache:rw({tabManager:aw()})}),qi=ux(nc),{db:$i,auth:qi}):null}const da=()=>crypto.randomUUID();function Jl(){const r=Zs();if(!r)throw new Error("Firebase não configurado.");return r.db}function xg(){const r=jo();if(!r)throw new Error("Código do casal não configurado.");return r}function Ag(r,e){if(r==="pessoal"){const t=jc();if(!t)throw new Error("Usuário não autenticado.");return["pessoal",t,e]}return["casais",xg(),e]}function Sg(r,e){return $T(Jl(),...Ag(r,e))}function Xl(r,e,t){return kp(Jl(),...Ag(r,e),t)}function Rg(r){return r.docs.map(e=>({id:e.id,...e.data(),sincronizado:!e.metadata.hasPendingWrites}))}function fa(r,e,t){return Zs()?Kp(Sg(r,e),{includeMetadataChanges:!0},s=>t(Rg(s)),()=>{}):()=>{}}async function Pg(r,e){const t=await uw(Sg(r,e));return Rg(t)}async function ma(r,e,t){const{id:n,sincronizado:s,...i}=t;await qp(Xl(r,e,n),i)}async function pa(r,e,t,n){const{sincronizado:s,...i}=n;await hw(Xl(r,e,t),i)}async function ga(r,e,t){await dw(Xl(r,e,t))}const dx=r=>fa("casal","lancamentos",r),Cg=()=>Pg("casal","lancamentos"),fx=r=>ma("casal","lancamentos",r),mx=(r,e)=>pa("casal","lancamentos",r,e),px=r=>ga("casal","lancamentos",r),gx=r=>fa("pessoal","lancamentos",r),Ng=()=>Pg("pessoal","lancamentos"),Vg=r=>ma("pessoal","lancamentos",r),_x=(r,e)=>pa("pessoal","lancamentos",r,e),Dg=r=>ga("pessoal","lancamentos",r),yx=(r,e)=>fa(r,"contas",e),Ix=(r,e)=>ma(r,"contas",e),Ex=(r,e,t)=>pa(r,"contas",e,t),vx=(r,e)=>ga(r,"contas",e),Tx=(r,e)=>fa(r,"cartoes",e),wx=(r,e)=>ma(r,"cartoes",e),bx=(r,e,t)=>pa(r,"cartoes",e,t),xx=(r,e)=>ga(r,"cartoes",e);function Yl(){return kp(Jl(),"casais",xg(),"meta","config")}async function Ax(){const r=await lw(Yl());return r.exists()?r.data():{}}async function Sx(r){await qp(Yl(),r,{merge:!0})}function Rx(r){return Zs()?Kp(Yl(),t=>r(t.exists()?t.data():{}),()=>{}):()=>{}}async function Px(){try{return await Ax(),{ok:!0}}catch(r){return{ok:!1,erro:r.message}}}async function Cx({nome:r}){const[e,t]=await Promise.all([Cg(),Ng()]),n=e.filter(c=>c.tipo==="gasto"&&c.quem_pagou===r),s=new Set(n.map(c=>c.id)),i=new Set(t.filter(c=>c.origem==="casal").map(c=>c.ref_casal_id));for(const c of n)i.has(c.id)||await Vg({id:da(),data:c.data,valor:c.valor,tipo:"gasto",categoria:c.categoria,descricao:c.descricao?`[Casal] ${c.descricao}`:"[Casal]",criado_em:new Date().toISOString(),origem:"casal",ref_casal_id:c.id}).catch(()=>{});const o=t.filter(c=>c.origem==="casal"&&!s.has(c.ref_casal_id));for(const c of o)await Dg(c.id).catch(()=>{})}function Nx(){const r=V.useRef(!1),e=V.useCallback(async()=>{if(!(r.current||!navigator.onLine)&&!(!Zt()||!Cn())){r.current=!0;try{const t=U_(),n=wn(),s=t==="b"?n.nome_pessoa_b||"Pessoa B":n.nome_pessoa_a||"Pessoa A";await Cx({nome:s}),z_(new Date().toISOString())}catch{}finally{r.current=!1}}},[]);V.useEffect(()=>(e(),window.addEventListener("online",e),()=>window.removeEventListener("online",e)),[e])}const Ki=r=>(r||"").trim().toLowerCase();function Vx(r){const e=wn();return Ki(r)===Ki(e.email_pessoa_a)?"a":Ki(r)===Ki(e.email_pessoa_b)?"b":null}function kg(){const[r,e]=V.useState(null),[t,n]=V.useState(!1),s=V.useCallback(async()=>{const o=Zs();if(!o)return e("config"),null;n(!0),e(null);try{const{user:c}=await Ib(o.auth,new ft),l=Vx(c.email);if(!l)return await qd(o.auth),e("email"),null;const u={uid:c.uid,usuario:l,email:c.email,nome:c.displayName||c.email};return j_(u),u}catch{return e("popup"),null}finally{n(!1)}},[]),i=V.useCallback(async()=>{const o=Zs();if(o)try{await qd(o.auth)}catch{}F_()},[]);return{erro:r,setErro:e,login:s,logout:i,carregando:t}}const Dx={config:"Configure o Firebase abaixo antes de entrar.",email:"Este e-mail não está cadastrado para o casal. Verifique o mapeamento na configuração inicial.",popup:"Não foi possível concluir o login. Tente novamente."};function kx(r){const e=r.indexOf("{"),t=r.lastIndexOf("}");if(e===-1||t===-1)throw new Error("Formato inválido.");const n=r.slice(e,t+1),s=Function(`"use strict"; return (${n})`)();if(!s.apiKey||!s.projectId)throw new Error("Faltam apiKey/projectId.");return s}function Ox(){const r=Fn(),{erro:e,setErro:t,login:n,carregando:s}=kg(),[i,o]=V.useState(Zt());V.useEffect(()=>{Cn()&&r("/",{replace:!0})},[r]);async function c(){await n()&&r("/",{replace:!0})}return m.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-bg-primary px-6 py-10 safe-top safe-bottom",children:[m.jsxs("div",{className:"mb-10 text-center",children:[m.jsx("div",{className:"text-5xl mb-3",children:"💰"}),m.jsx("h1",{className:"text-2xl font-bold text-text-primary tracking-tight",children:"FinançasCasal"}),m.jsx("p",{className:"text-text-secondary text-sm mt-2",children:i?"Entre com sua conta Google":"Configuração inicial"})]}),i?m.jsxs(m.Fragment,{children:[m.jsxs("button",{onClick:c,disabled:s,className:"flex items-center gap-3 px-6 py-3 rounded-full bg-white text-gray-800 font-medium disabled:opacity-50 active:scale-95 transition-all shadow",children:[m.jsx("span",{className:"text-lg",children:"G"}),s?"Entrando...":"Continuar com Google"]}),m.jsx("div",{className:"h-12 mt-6 max-w-xs text-center",children:e&&m.jsx("p",{className:"text-danger text-sm animate-fade-in",children:Dx[e]})}),m.jsx("button",{onClick:()=>o(!1),className:"text-xs text-text-secondary mt-2 active:opacity-70 transition-opacity",children:"Reconfigurar Firebase"})]}):m.jsx(Mx,{onPronto:()=>{o(!0),t(null)}})]})}const Gi="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-primary transition-colors";function Mx({onPronto:r}){const e=wn(),[t,n]=V.useState(""),[s,i]=V.useState(jo()),[o,c]=V.useState(e.email_pessoa_a??""),[l,u]=V.useState(e.email_pessoa_b??""),[f,p]=V.useState("");function _(){if(p(""),!s.trim())return p("Defina um código para o casal.");if(!o.trim()||!l.trim())return p("Informe os dois e-mails.");let b;try{b=kx(t)}catch(P){return p(`Config do Firebase inválida: ${P.message}`)}L_(b),af(s.trim()),sc({...wn(),email_pessoa_a:o.trim(),email_pessoa_b:l.trim()}),r()}return m.jsxs("div",{className:"w-full max-w-sm space-y-4",children:[m.jsx("p",{className:"text-xs text-text-secondary",children:"Cole a configuração do seu projeto Firebase (Console → Configurações do projeto → Seus apps)."}),m.jsxs("div",{className:"space-y-1.5",children:[m.jsx("label",{className:"text-xs text-text-secondary",children:"Config do Firebase"}),m.jsx("textarea",{value:t,onChange:b=>n(b.target.value),rows:6,placeholder:`{
  "apiKey": "...",
  "authDomain": "...",
  "projectId": "..."
}`,className:`${Gi} font-mono text-xs resize-none`})]}),m.jsxs("div",{className:"space-y-1.5",children:[m.jsx("label",{className:"text-xs text-text-secondary",children:"Código do casal (compartilhado pelos dois)"}),m.jsx("input",{value:s,onChange:b=>i(b.target.value),placeholder:"ex: joao-maria-2026",className:Gi})]}),m.jsxs("div",{className:"space-y-1.5",children:[m.jsx("label",{className:"text-xs text-text-secondary",children:"E-mail da Pessoa A"}),m.jsx("input",{type:"email",value:o,onChange:b=>c(b.target.value),placeholder:"pessoa.a@gmail.com",className:Gi})]}),m.jsxs("div",{className:"space-y-1.5",children:[m.jsx("label",{className:"text-xs text-text-secondary",children:"E-mail da Pessoa B"}),m.jsx("input",{type:"email",value:l,onChange:b=>u(b.target.value),placeholder:"pessoa.b@gmail.com",className:Gi})]}),f&&m.jsx("p",{className:"text-danger text-xs",children:f}),m.jsx("button",{onClick:_,className:"w-full py-3 rounded-xl bg-accent-primary text-white text-sm font-semibold active:scale-95 transition-all",children:"Salvar e continuar"})]})}const Zl="pt-BR";function Ht(r){return new Intl.NumberFormat(Zl,{style:"currency",currency:"BRL"}).format(r)}function Lx(r){return new Intl.DateTimeFormat(Zl,{day:"numeric",month:"long"}).format(new Date(r))}function jx(r){return new Intl.DateTimeFormat(Zl,{day:"2-digit",month:"2-digit"}).format(new Date(r))}const Fx=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];function eu(r,e){return`${Fx[r-1]} ${e}`}function Ux({pendentes:r=0}){const e=Fn(),t=new Date;return m.jsxs("header",{className:"fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 h-14 bg-bg-primary border-b border-border",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("h1",{className:"text-text-primary font-semibold text-lg leading-none",children:eu(t.getMonth()+1,t.getFullYear())}),r>0&&m.jsxs("span",{className:"text-xs text-text-secondary",title:"Sincronização pendente",children:["🔄 ",r]})]}),m.jsx("button",{onClick:()=>e("/configuracoes"),"aria-label":"Configurações",className:"w-9 h-9 flex items-center justify-center rounded-full text-text-secondary active:bg-border transition-colors",children:m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("circle",{cx:"12",cy:"12",r:"3"}),m.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})]})}const Bx=[{to:"/",label:"Home",icon:m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),m.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]})},{to:"/historico",label:"Histórico",icon:m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),m.jsx("polyline",{points:"14 2 14 8 20 8"}),m.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),m.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),m.jsx("polyline",{points:"10 9 9 9 8 9"})]})},{to:"/carteira",label:"Carteira",icon:m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}),m.jsx("path",{d:"M2 10h20"}),m.jsx("path",{d:"M16 14h2"})]})},{to:"/dashboard",label:"Dashboard",icon:m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),m.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),m.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"})]})},{to:"/configuracoes",label:"Config",icon:m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("circle",{cx:"12",cy:"12",r:"3"}),m.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}];function zx(){return m.jsx("nav",{className:"fixed bottom-0 left-0 right-0 z-10 grid grid-cols-5 bg-bg-card border-t border-border safe-bottom",children:Bx.map(({to:r,label:e,icon:t})=>m.jsxs(w_,{to:r,end:r==="/",className:({isActive:n})=>`flex flex-col items-center gap-1 py-2 text-xs transition-colors ${n?"text-accent-primary":"text-text-secondary"}`,children:[t,e]},r))})}function $x(){const r=Fn();return m.jsx("button",{onClick:()=>r("/novo"),"aria-label":"Novo lançamento",className:"fixed bottom-20 left-1/2 -translate-x-1/2 z-20 w-14 h-14 rounded-full bg-accent-primary text-white shadow-lg flex items-center justify-center active:scale-95 transition-transform",children:m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[m.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),m.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})}function qx(){const[r,e]=V.useState(null),[t,n]=V.useState(!1);V.useEffect(()=>{if(B_())return;function o(c){c.preventDefault(),e(c),n(!0)}return window.addEventListener("beforeinstallprompt",o),()=>window.removeEventListener("beforeinstallprompt",o)},[]);async function s(){r&&(r.prompt(),await r.userChoice,e(null),n(!1),rh(!0))}function i(){n(!1),rh(!0)}return{mostrar:t,instalar:s,dispensar:i}}function Kx(){const{mostrar:r,instalar:e,dispensar:t}=qx();return r?m.jsxs("div",{className:"fixed bottom-20 left-4 right-4 z-30 bg-bg-card border border-accent-primary/40 rounded-2xl p-4 shadow-lg animate-fade-in",children:[m.jsxs("div",{className:"flex items-start gap-3",children:[m.jsx("span",{className:"text-2xl mt-0.5",children:"💰"}),m.jsxs("div",{className:"flex-1",children:[m.jsx("p",{className:"text-text-primary text-sm font-medium",children:"Instalar FinançasCasal"}),m.jsx("p",{className:"text-text-secondary text-xs mt-0.5",children:"Adicione à tela inicial para acesso rápido."})]}),m.jsx("button",{onClick:t,className:"text-text-secondary text-lg leading-none active:opacity-60 transition-opacity",children:"×"})]}),m.jsx("button",{onClick:e,className:"mt-3 w-full py-2 rounded-xl bg-accent-primary text-white text-sm font-medium active:scale-95 transition-transform",children:"Instalar"})]}):null}function Gx(){const{pathname:r}=b_(),e=r==="/novo";return m.jsxs("div",{className:"flex flex-col min-h-screen bg-bg-primary",children:[m.jsx(Ux,{}),m.jsx("main",{className:"flex-1 pt-14 pb-20 overflow-y-auto",children:m.jsx(sf,{})}),!e&&m.jsx($x,{}),m.jsx(Kx,{}),m.jsx(zx,{})]})}function Hx(r,e,t){const[n,s]=(r.data||"").split("-").map(Number);return n===t&&s===e}function _a(r,e){const[t,n]=V.useState([]),[s,i]=V.useState(!0),[o,c]=V.useState(null);V.useEffect(()=>{if(!Zt()||!Cn()){i(!1);return}return dx(C=>{n(C),i(!1)})},[]);const l=V.useMemo(()=>t.filter(P=>Hx(P,r,e)),[t,r,e]),u=V.useMemo(()=>t.filter(P=>!P.sincronizado).length,[t]),f=V.useCallback(async()=>{try{n(await Cg())}catch{}},[]),p=V.useCallback(P=>fx(P).catch(()=>{}),[]),_=V.useCallback((P,C)=>mx(P,C).catch(()=>{}),[]),b=V.useCallback(P=>px(P).catch(()=>{}),[]);return{lancamentos:l,todos:t,carregando:s,erro:o,pendentes:u,sincronizar:f,adicionar:p,atualizar:_,remover:b,adicionarLocal:p,atualizarLocal:_,removerLocal:b}}function Wx(r,e,t){const[n,s]=(r.data||"").split("-").map(Number);return n===t&&s===e}function tu(r,e){const t=!!jc(),[n,s]=V.useState([]),[i,o]=V.useState(!0),[c,l]=V.useState(null);V.useEffect(()=>{if(!Zt()||!t){o(!1);return}return gx(k=>{s(k),o(!1)})},[t]);const u=V.useMemo(()=>n.filter(C=>Wx(C,r,e)),[n,r,e]),f=V.useMemo(()=>n.filter(C=>!C.sincronizado).length,[n]),p=V.useCallback(async()=>{if(t)try{s(await Ng())}catch{}},[t]),_=V.useCallback(C=>Vg(C).catch(()=>{}),[]),b=V.useCallback((C,k)=>_x(C,k).catch(()=>{}),[]),P=V.useCallback(C=>Dg(C).catch(()=>{}),[]);return{lancamentos:u,todos:n,carregando:i,erro:c,pendentes:f,temCreds:t,sincronizar:p,adicionar:_,atualizar:b,remover:P,adicionarLocal:_,atualizarLocal:b,removerLocal:P}}function pi(){const[r,e]=V.useState(()=>wn()),[t,n]=V.useState(!1);V.useEffect(()=>!Zt()||!Cn()?void 0:(n(!0),Rx(o=>{const c={...wn(),...o};sc(c),e(c),n(!1)})),[]);async function s(i){const o={...wn(),...i};sc(o),e(o),Zt()&&Cn()&&await Sx(i).catch(()=>{})}return{config:r,carregando:t,atualizar:s}}const Og=[{id:"alimentacao",label:"Alimentação",icon:"🍔"},{id:"transporte",label:"Transporte",icon:"🚗"},{id:"casa",label:"Casa",icon:"🏠"},{id:"saude",label:"Saúde",icon:"💊"},{id:"lazer",label:"Lazer",icon:"🎬"},{id:"compras",label:"Compras",icon:"🛍️"},{id:"trabalho",label:"Trabalho",icon:"💼"},{id:"outro",label:"Outro",icon:"➕"}];function Mg(r,e=Og){var t;return((t=e.find(n=>n.id===r))==null?void 0:t.icon)??"💰"}function Qx(r){if(Array.isArray(r))return r;if(typeof r=="string"&&r.trim())try{const e=JSON.parse(r);if(Array.isArray(e))return e}catch{}return null}function Jx(r){return r.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||`cat_${Date.now()}`}function ya(){const{config:r,atualizar:e}=pi(),t=V.useMemo(()=>Qx(r.categorias)??Og,[r.categorias]);async function n(c){await e({categorias:JSON.stringify(c)})}async function s({label:c,icon:l}){const u=c.trim();if(!u)return;let f=Jx(u);t.some(p=>p.id===f)&&(f=`${f}_${Date.now()}`),await n([...t,{id:f,label:u,icon:l||"💰"}])}async function i(c,{label:l,icon:u}){await n(t.map(f=>f.id===c?{...f,label:l.trim()||f.label,icon:u||f.icon}:f))}async function o(c){await n(t.filter(l=>l.id!==c))}return{categorias:t,adicionar:s,editar:i,remover:o}}const Lg=[{id:"corrente",label:"Conta corrente",icon:"🏦"},{id:"poupanca",label:"Poupança",icon:"🐖"},{id:"dinheiro",label:"Dinheiro",icon:"💵"},{id:"carteira",label:"Carteira digital",icon:"📱"}],ef=["Visa","Mastercard","Elo","American Express","Hipercard","Outro"],Ia=[{id:"gasto",label:"Despesa",icon:"💸"},{id:"receita",label:"Receita",icon:"💰"},{id:"transferencia",label:"Transferência",icon:"🔄"},{id:"cartao",label:"Despesa de cartão",icon:"💳"}],jg=[{id:"casal",label:"Casal"},{id:"pessoal",label:"Pessoal"}],Fg=[{id:"tudo",label:"Tudo"},{id:"casal",label:"Casal"},{id:"pessoal",label:"Pessoal"}],Xx=[{id:"mensal",label:"Mensal"},{id:"semanal",label:"Semanal"},{id:"anual",label:"Anual"}],Ug=r=>Lg.find(e=>e.id===r),Yx=r=>{var e;return((e=Ug(r))==null?void 0:e.label)??r},Zx=r=>{var e;return((e=Ug(r))==null?void 0:e.icon)??"🏦"},eA=r=>Ia.find(e=>e.id===r),Bg=r=>{var e;return((e=eA(r))==null?void 0:e.icon)??"💰"},zg=r=>r==="gasto"||r==="cartao";function $g(r,e,t){const n=r.map(i=>({...i,_escopo:"casal"})),s=e.map(i=>({...i,_escopo:"pessoal"}));return t==="casal"?n:t==="pessoal"?s:[...n,...s.filter(i=>i.origem!=="casal")]}const qg=r=>r.efetivada!==!1;function tA(r,{soEfetivadas:e=!0}={}){return r.filter(t=>t.tipo==="receita"&&(!e||qg(t))).reduce((t,n)=>t+n.valor,0)}function nA(r,{soEfetivadas:e=!0}={}){return r.filter(t=>zg(t.tipo)&&(!e||qg(t))).reduce((t,n)=>t+n.valor,0)}function rA(){const r=new Date,e=r.getMonth()+1,t=r.getFullYear(),[n,s]=V.useState("tudo"),i=_a(e,t),o=tu(e,t),{config:c}=pi(),{categorias:l}=ya(),u=$g(i.lancamentos,o.lancamentos,n),f=nA(u),_=tA(u)-f,b=parseFloat(c.orcamento_mensal)||0,P=b>0?Math.min(f/b*100,100):0,C=[...u].sort((O,E)=>(E.criado_em??"").localeCompare(O.criado_em??"")).slice(0,5),k=i.carregando||o.carregando;function F(){i.sincronizar(),o.sincronizar()}const q=V.useRef(0),K=V.useRef(null);function Y(O){var E;((E=K.current)==null?void 0:E.scrollTop)===0&&(q.current=O.touches[0].clientY)}function Q(O){var y;O.changedTouches[0].clientY-q.current>70&&((y=K.current)==null?void 0:y.scrollTop)===0&&F(),q.current=0}return m.jsxs("div",{ref:K,className:"h-full overflow-y-auto px-4 pt-4 pb-6",onTouchStart:Y,onTouchEnd:Q,children:[m.jsx("div",{className:"flex gap-2 mb-4",children:Fg.map(O=>m.jsx("button",{onClick:()=>s(O.id),className:`flex-1 py-2 rounded-xl text-xs font-medium border transition-colors ${n===O.id?"bg-accent-primary/20 border-accent-primary text-accent-primary":"bg-bg-card border-border text-text-secondary"}`,children:O.label},O.id))}),m.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[m.jsxs("div",{className:"bg-bg-card rounded-2xl border border-border p-4",children:[m.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"Saldo do mês"}),m.jsx("p",{className:`text-xl font-bold ${_>=0?"text-accent-secondary":"text-danger"}`,children:Ht(_)})]}),m.jsxs("div",{className:"bg-bg-card rounded-2xl border border-border p-4",children:[m.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"Total gasto"}),m.jsx("p",{className:"text-xl font-bold text-text-primary",children:Ht(f)})]})]}),b>0&&m.jsxs("div",{className:"bg-bg-card rounded-2xl border border-border p-4 mb-4",children:[m.jsxs("div",{className:"flex justify-between text-xs text-text-secondary mb-2",children:[m.jsx("span",{children:"Orçamento mensal"}),m.jsx("span",{children:Ht(b)})]}),m.jsx("div",{className:"h-2 bg-border rounded-full overflow-hidden",children:m.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${P>=90?"bg-danger":P>=70?"bg-yellow-400":"bg-accent-secondary"}`,style:{width:`${P}%`}})}),m.jsxs("p",{className:"text-xs text-text-secondary mt-1 text-right",children:[P.toFixed(0),"% utilizado"]})]}),(i.erro||o.erro)&&m.jsx("div",{className:"bg-danger/10 border border-danger/30 rounded-xl px-4 py-3 mb-4",children:m.jsx("p",{className:"text-danger text-xs",children:i.erro||o.erro})}),m.jsx("h2",{className:"text-sm font-medium text-text-secondary mb-3",children:"Últimos lançamentos"}),k&&u.length===0?m.jsx("div",{className:"flex items-center justify-center py-12",children:m.jsx("p",{className:"text-text-secondary text-sm",children:"Carregando..."})}):C.length===0?m.jsxs("div",{className:"text-center py-12",children:[m.jsx("p",{className:"text-4xl mb-3",children:"💸"}),m.jsx("p",{className:"text-text-secondary text-sm",children:"Nenhum lançamento este mês."}),m.jsx("p",{className:"text-text-secondary text-xs mt-1",children:"Toque no + para adicionar."})]}):m.jsx("div",{className:"space-y-2",children:C.map(O=>m.jsx(sA,{lancamento:O,categorias:l},O.id))})]})}function sA({lancamento:r,categorias:e}){const{descricao:t,categoria:n,valor:s,tipo:i,quem_pagou:o,data:c,sincronizado:l,efetivada:u,_escopo:f}=r,p=i==="receita",_=i==="transferencia",b=i==="receita"||_||i==="cartao"?Bg(i):Mg(n,e),P=[o||(f==="pessoal"?"Pessoal":"Casal"),jx(c+"T00:00:00")].filter(Boolean).join(" · ");return m.jsxs("div",{className:"flex items-center gap-3 bg-bg-card rounded-xl border border-border px-4 py-3 animate-fade-in",children:[m.jsx("span",{className:"text-xl w-8 text-center",children:b}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("p",{className:"text-text-primary text-sm font-medium truncate",children:t||n||"Transferência"}),m.jsx("p",{className:"text-text-secondary text-xs",children:P})]}),m.jsxs("div",{className:"text-right flex-shrink-0",children:[m.jsxs("p",{className:`text-sm font-semibold ${p?"text-accent-secondary":_?"text-text-secondary":"text-text-primary"}`,children:[_?"":p?"+":"−",Ht(s)]}),m.jsxs("p",{className:"text-xs text-text-secondary",children:[u===!1?"📅":"",l?"":"⏳"]})]})]})}function Kg(r,e){const t=r==="casal"?Zt()&&Cn()&&!!jo():Zt()&&!!jc(),[n,s]=V.useState([]),[i,o]=V.useState(t);V.useEffect(()=>{if(!t){o(!1);return}return e.assinar(r,_=>{s(_),o(!1)})},[r,t]);const c=V.useCallback(p=>{t&&e.adicionar(r,p).catch(()=>{})},[r,t]),l=V.useCallback((p,_)=>{t&&e.atualizar(r,p,_).catch(()=>{})},[r,t]),u=V.useCallback(p=>{t&&e.remover(r,p).catch(()=>{})},[r,t]),f=V.useCallback(()=>{},[]);return{itens:n,carregando:i,temCreds:t,sincronizar:f,adicionar:c,atualizar:l,remover:u}}const iA={assinar:yx,adicionar:Ix,atualizar:Ex,remover:vx};function Gg(r){const{itens:e,...t}=Kg(r,iA);return{contas:e,...t}}const oA={assinar:Tx,adicionar:wx,atualizar:bx,remover:xx};function Hg(r){const{itens:e,...t}=Kg(r,oA);return{cartoes:e,...t}}const aA={sucesso:"bg-accent-secondary/20 border-accent-secondary/40 text-accent-secondary",erro:"bg-danger/20 border-danger/40 text-danger",aviso:"bg-yellow-400/20 border-yellow-400/40 text-yellow-300"},cA={sucesso:"✓",erro:"✕",aviso:"!"};function nu({mensagem:r,tipo:e="sucesso",onClose:t}){return V.useEffect(()=>{const n=setTimeout(t,3e3);return()=>clearTimeout(n)},[t]),m.jsxs("div",{className:`fixed top-16 left-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border ${aA[e]} animate-fade-in shadow-lg`,children:[m.jsx("span",{className:"font-bold",children:cA[e]}),m.jsx("span",{className:"text-sm flex-1",children:r}),m.jsx("button",{onClick:t,className:"opacity-60 hover:opacity-100 text-lg leading-none",children:"×"})]})}function lA(){const r=Fn(),[e]=x_(),[t,n]=V.useState(e.get("escopo")==="pessoal"?"pessoal":"casal"),s=t==="pessoal",{config:i}=pi(),{categorias:o}=ya(),{contas:c}=Gg(t),{cartoes:l}=Hg(t),u=new Date,f=_a(u.getMonth()+1,u.getFullYear()),p=tu(u.getMonth()+1,u.getFullYear()),[_,b]=V.useState(""),[P,C]=V.useState("gasto"),[k,F]=V.useState(null),[q,K]=V.useState(""),[Y,Q]=V.useState(""),[O,E]=V.useState(""),[y,v]=V.useState(""),[w,T]=V.useState(!1),[S,I]=V.useState("mensal"),[we,ut]=V.useState(""),[gi,va]=V.useState(!0),[sn,Bn]=V.useState(""),[_i,yi]=V.useState(u.toISOString().split("T")[0]),[zn,qr]=V.useState(null),[bt,$n]=V.useState(!1),qn=V.useRef(null),Kr=i.nome_pessoa_a||"Pessoa A",Gr=i.nome_pessoa_b||"Pessoa B";V.useEffect(()=>{var U;(U=qn.current)==null||U.focus()},[]);function Ii(U){const Qr=U.target.value;/^\d*([.,]\d{0,2})?$/.test(Qr)&&b(Qr)}const Ei=parseFloat(_.replace(",","."))||0,on=P==="transferencia",xt=P==="cartao",an=!on,Hr=!s&&!on,vi=Ei>0&&(!an||k)&&(!xt||y)&&(!on||Y&&O&&Y!==O)&&(!Hr||q);async function Wr(){if(!vi||bt)return;$n(!0);const U={id:da(),data:_i,valor:Ei,tipo:P,categoria:an?k:"",descricao:sn.trim(),criado_em:new Date().toISOString(),conta_id:xt?"":Y,conta_destino_id:on?O:"",cartao_id:xt?y:"",recorrente:w,frequencia:w?S:"",vencimento:we,efetivada:gi};s?p.adicionar({...U,origem:"manual",ref_casal_id:""}):f.adicionar({...U,quem_pagou:q}),qr({mensagem:"Lançamento salvo!",tipo:"sucesso"}),$n(!1),setTimeout(()=>r("/"),1e3)}return m.jsxs("div",{className:"min-h-full bg-bg-primary",children:[m.jsx("div",{className:"flex items-center justify-between px-4 pt-4 pb-2",children:m.jsxs("button",{onClick:()=>r(-1),className:"flex items-center gap-1 text-text-secondary text-sm active:text-text-primary transition-colors",children:[m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("polyline",{points:"15 18 9 12 15 6"})}),"Voltar"]})}),m.jsxs("div",{className:"px-4 pb-8 space-y-6",children:[m.jsx(ht,{titulo:"Escopo",children:m.jsx("div",{className:"flex gap-2",children:jg.map(U=>m.jsx("button",{onClick:()=>n(U.id),className:`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${t===U.id?"bg-accent-primary/20 border-accent-primary text-accent-primary":"bg-bg-card border-border text-text-secondary"}`,children:U.label},U.id))})}),m.jsxs("div",{className:"text-center pt-1",children:[m.jsx("p",{className:"text-text-secondary text-xs mb-2",children:"Valor"}),m.jsxs("div",{className:"flex items-center justify-center gap-2",children:[m.jsx("span",{className:"text-text-secondary text-2xl font-light",children:"R$"}),m.jsx("input",{ref:qn,type:"text",inputMode:"decimal",value:_,onChange:Ii,placeholder:"0,00",className:"text-4xl font-bold text-text-primary bg-transparent outline-none w-40 text-center placeholder:text-border"})]})]}),m.jsx(ht,{titulo:"Tipo",children:m.jsx("div",{className:"grid grid-cols-2 gap-2",children:Ia.map(U=>m.jsxs("button",{onClick:()=>C(U.id),className:`py-2.5 rounded-xl text-sm font-medium border transition-colors ${P===U.id?"bg-accent-primary/20 border-accent-primary text-accent-primary":"bg-bg-card border-border text-text-secondary"}`,children:[U.icon," ",U.label]},U.id))})}),xt&&m.jsx(ht,{titulo:"Cartão",children:l.length===0?m.jsx(rc,{texto:"Nenhum cartão cadastrado."}):m.jsxs("select",{value:y,onChange:U=>v(U.target.value),className:er,children:[m.jsx("option",{value:"",children:"Selecione o cartão"}),l.map(U=>m.jsx("option",{value:U.id,children:U.nome},U.id))]})}),on?m.jsxs(ht,{titulo:"Transferência entre contas",children:[m.jsxs("div",{className:"space-y-2",children:[m.jsxs("select",{value:Y,onChange:U=>Q(U.target.value),className:er,children:[m.jsx("option",{value:"",children:"De qual conta"}),c.map(U=>m.jsx("option",{value:U.id,children:U.nome},U.id))]}),m.jsxs("select",{value:O,onChange:U=>E(U.target.value),className:er,children:[m.jsx("option",{value:"",children:"Para qual conta"}),c.map(U=>m.jsx("option",{value:U.id,children:U.nome},U.id))]})]}),c.length<2&&m.jsx(rc,{texto:"Cadastre ao menos duas contas."})]}):!xt&&m.jsx(ht,{titulo:"Conta",children:c.length===0?m.jsx(rc,{texto:"Nenhuma conta cadastrada (opcional)."}):m.jsxs("select",{value:Y,onChange:U=>Q(U.target.value),className:er,children:[m.jsx("option",{value:"",children:"Sem conta"}),c.map(U=>m.jsx("option",{value:U.id,children:U.nome},U.id))]})}),an&&m.jsx(ht,{titulo:"Categoria",children:m.jsx("div",{className:"grid grid-cols-4 gap-2",children:o.map(U=>m.jsxs("button",{onClick:()=>F(U.id),className:`flex flex-col items-center gap-1 py-3 rounded-xl border text-xs transition-colors ${k===U.id?"bg-accent-primary/20 border-accent-primary text-accent-primary":"bg-bg-card border-border text-text-secondary"}`,children:[m.jsx("span",{className:"text-2xl",children:U.icon}),m.jsx("span",{className:"leading-tight text-center",children:U.label})]},U.id))})}),Hr&&m.jsx(ht,{titulo:"Quem pagou",children:m.jsx("div",{className:"flex gap-2",children:[Kr,Gr].map(U=>m.jsx("button",{onClick:()=>K(U),className:`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${q===U?"bg-accent-primary/20 border-accent-primary text-accent-primary":"bg-bg-card border-border text-text-secondary"}`,children:U},U))})}),m.jsx(ht,{titulo:"Programação",children:m.jsxs("div",{className:"space-y-3",children:[m.jsxs("div",{className:"flex items-center justify-between bg-bg-card border border-border rounded-xl px-4 py-3",children:[m.jsx("span",{className:"text-sm text-text-primary",children:"Recorrente"}),m.jsx(tf,{ativo:w,onToggle:()=>T(U=>!U)})]}),w&&m.jsx("select",{value:S,onChange:U=>I(U.target.value),className:er,children:Xx.map(U=>m.jsx("option",{value:U.id,children:U.label},U.id))}),m.jsxs("div",{className:"flex items-center gap-3 bg-bg-card border border-border rounded-xl px-4 py-3",children:[m.jsx("span",{className:"text-sm text-text-secondary flex-shrink-0",children:"Vencimento"}),m.jsx("input",{type:"date",value:we,onChange:U=>ut(U.target.value),className:"flex-1 bg-transparent text-sm text-text-primary outline-none text-right"})]}),m.jsxs("div",{className:"flex items-center justify-between bg-bg-card border border-border rounded-xl px-4 py-3",children:[m.jsx("span",{className:"text-sm text-text-primary",children:"Já efetivada"}),m.jsx(tf,{ativo:gi,onToggle:()=>va(U=>!U)})]})]})}),m.jsx(ht,{titulo:"Detalhes (opcionais)",children:m.jsxs("div",{className:"space-y-3",children:[m.jsx("input",{type:"text",value:sn,onChange:U=>Bn(U.target.value),placeholder:"Ex: Almoço no shopping",maxLength:120,className:er}),m.jsxs("div",{className:"flex items-center gap-3 bg-bg-card border border-border rounded-xl px-4 py-3",children:[m.jsx("span",{className:"text-sm text-text-secondary flex-shrink-0",children:"Data"}),m.jsx("input",{type:"date",value:_i,onChange:U=>yi(U.target.value),className:"flex-1 bg-transparent text-sm text-text-primary outline-none text-right"})]})]})}),m.jsx("button",{onClick:Wr,disabled:!vi||bt,className:"w-full py-3.5 rounded-2xl bg-accent-primary text-white text-base font-semibold disabled:opacity-40 active:scale-95 transition-all",children:bt?"Salvando...":"Salvar"})]}),zn&&m.jsx(nu,{mensagem:zn.mensagem,tipo:zn.tipo,onClose:()=>qr(null)})]})}const er="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-primary transition-colors";function ht({titulo:r,children:e}){return m.jsxs("div",{children:[m.jsx("p",{className:"text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide",children:r}),e]})}function rc({texto:r}){return m.jsx("p",{className:"text-text-secondary text-xs py-1",children:r})}function tf({ativo:r,onToggle:e}){return m.jsx("button",{onClick:e,className:`w-11 h-6 rounded-full transition-colors relative ${r?"bg-accent-primary":"bg-border"}`,children:m.jsx("span",{className:`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${r?"left-5":"left-0.5"}`})})}const uA=["todos",...Ia.map(r=>r.id)];function hA(){const r=new Date,[e,t]=V.useState(r.getMonth()+1),[n,s]=V.useState(r.getFullYear()),[i,o]=V.useState("tudo"),[c,l]=V.useState("todos"),[u,f]=V.useState("todas"),[p,_]=V.useState("todas"),b=_a(e,n),P=tu(e,n),{categorias:C}=ya();Fn();function k(O){let E=e+O,y=n;E>12&&(E=1,y++),E<1&&(E=12,y--),t(E),s(y)}const F=$g(b.lancamentos,P.lancamentos,i),q=[...new Set(F.map(O=>O.quem_pagou).filter(Boolean))],K=F.filter(O=>c==="todos"||O.tipo===c).filter(O=>u==="todas"||O.categoria===u).filter(O=>p==="todas"||O.quem_pagou===p).sort((O,E)=>(E.data??"").localeCompare(O.data??"")),Y=K.reduce((O,E)=>E.tipo==="transferencia"?O:O+(zg(E.tipo)?-E.valor:E.valor),0);function Q(O){if(O._escopo==="pessoal"){if(O.origem==="casal")return;P.remover(O.id)}else b.remover(O.id)}return m.jsxs("div",{className:"px-4 pt-4 pb-6",children:[m.jsxs("div",{className:"flex items-center justify-between mb-4",children:[m.jsx("button",{onClick:()=>k(-1),className:"w-9 h-9 flex items-center justify-center rounded-full bg-bg-card border border-border text-text-secondary active:bg-border transition-colors",children:"◀"}),m.jsx("span",{className:"text-text-primary font-semibold",children:eu(e,n)}),m.jsx("button",{onClick:()=>k(1),className:"w-9 h-9 flex items-center justify-center rounded-full bg-bg-card border border-border text-text-secondary active:bg-border transition-colors",children:"▶"})]}),m.jsx("div",{className:"flex gap-2 mb-3",children:Fg.map(O=>m.jsx("button",{onClick:()=>o(O.id),className:`flex-1 py-2 rounded-xl text-xs font-medium border transition-colors ${i===O.id?"bg-accent-primary/20 border-accent-primary text-accent-primary":"bg-bg-card border-border text-text-secondary"}`,children:O.label},O.id))}),m.jsxs("div",{className:"bg-bg-card rounded-2xl border border-border px-4 py-3 mb-4 flex justify-between items-center",children:[m.jsx("span",{className:"text-text-secondary text-sm",children:"Total filtrado"}),m.jsx("span",{className:`font-bold text-lg ${Y>=0?"text-accent-secondary":"text-danger"}`,children:Ht(Math.abs(Y))})]}),m.jsx("div",{className:"flex gap-2 mb-3 overflow-x-auto pb-1",children:uA.map(O=>m.jsx("button",{onClick:()=>l(O),className:`px-3 py-1 rounded-full text-xs font-medium border transition-colors flex-shrink-0 ${c===O?"bg-accent-primary/20 border-accent-primary text-accent-primary":"bg-bg-card border-border text-text-secondary"}`,children:O==="todos"?"Todos":Ia.find(E=>E.id===O).label},O))}),m.jsxs("div",{className:"flex gap-2 mb-4 overflow-x-auto pb-1",children:[m.jsxs("select",{value:u,onChange:O=>f(O.target.value),className:"text-xs bg-bg-card border border-border text-text-secondary rounded-full px-3 py-1 outline-none flex-shrink-0",children:[m.jsx("option",{value:"todas",children:"Categoria"}),C.map(O=>m.jsxs("option",{value:O.id,children:[O.icon," ",O.label]},O.id))]}),q.length>0&&m.jsxs("select",{value:p,onChange:O=>_(O.target.value),className:"text-xs bg-bg-card border border-border text-text-secondary rounded-full px-3 py-1 outline-none flex-shrink-0",children:[m.jsx("option",{value:"todas",children:"Pessoa"}),q.map(O=>m.jsx("option",{value:O,children:O},O))]})]}),K.length===0?m.jsxs("div",{className:"text-center py-12",children:[m.jsx("p",{className:"text-4xl mb-3",children:"📋"}),m.jsx("p",{className:"text-text-secondary text-sm",children:"Nenhum lançamento encontrado."})]}):m.jsx("div",{className:"space-y-2",children:K.map(O=>m.jsx(dA,{lancamento:O,categorias:C,podeExcluir:!(O._escopo==="pessoal"&&O.origem==="casal"),onExcluir:()=>Q(O)},O.id))})]})}function dA({lancamento:r,categorias:e,podeExcluir:t,onExcluir:n}){const[s,i]=V.useState(0),[o,c]=V.useState(!1),l=V.useRef(0);function u(w){l.current=w.touches[0].clientX}function f(w){const T=w.touches[0].clientX-l.current;T<0&&i(Math.max(T,-72))}function p(){t&&s<-72/2?(i(-72),c(!0)):(i(0),c(!1))}function _(){i(0),c(!1)}const{descricao:b,categoria:P,valor:C,tipo:k,quem_pagou:F,data:q,sincronizado:K,efetivada:Y,_escopo:Q}=r,O=k==="receita",E=k==="transferencia",y=O||E||k==="cartao"?Bg(k):Mg(P,e),v=[F||(Q==="pessoal"?"Pessoal":"Casal"),Lx(q+"T00:00:00")].filter(Boolean).join(" · ");return m.jsxs("div",{className:"relative overflow-hidden rounded-xl",children:[m.jsx("div",{className:"absolute right-0 top-0 bottom-0 flex",children:m.jsx("button",{onClick:()=>{_(),n()},className:"flex items-center justify-center w-16 bg-danger text-white text-xs font-medium",children:"Excluir"})}),m.jsxs("div",{className:"flex items-center gap-3 bg-bg-card border border-border px-4 py-3 relative z-10 transition-transform",style:{transform:`translateX(${s}px)`},onTouchStart:u,onTouchMove:f,onTouchEnd:p,onClick:o?_:void 0,children:[m.jsx("span",{className:"text-xl w-8 text-center",children:y}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("p",{className:"text-text-primary text-sm font-medium truncate",children:b||P||"Transferência"}),m.jsx("p",{className:"text-text-secondary text-xs",children:v})]}),m.jsxs("div",{className:"text-right flex-shrink-0",children:[m.jsxs("p",{className:`text-sm font-semibold ${O?"text-accent-secondary":E?"text-text-secondary":"text-text-primary"}`,children:[E?"":O?"+":"−",Ht(C)]}),m.jsxs("p",{className:"text-xs text-text-secondary",children:[Y===!1?"📅":"",K?"":"⏳"]})]})]})]})}const dt="w-full bg-bg-primary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-primary transition-colors",ru="px-4 py-2 rounded-xl bg-accent-primary text-white text-sm font-medium disabled:opacity-40 active:scale-95 transition-all",Wg="px-4 py-2 rounded-xl bg-bg-card border border-border text-text-secondary text-sm active:bg-border transition-colors";function fA(){const r=Fn(),[e,t]=V.useState("casal"),[n,s]=V.useState(null),i=Gg(e),o=Hg(e),c=i.temCreds;function l(u,f="sucesso"){s({mensagem:u,tipo:f})}return m.jsxs("div",{className:"px-4 pt-4 pb-6 space-y-6",children:[n&&m.jsx(nu,{mensagem:n.mensagem,tipo:n.tipo,onClose:()=>s(null)}),m.jsx("div",{className:"flex gap-2",children:jg.map(u=>m.jsx("button",{onClick:()=>t(u.id),className:`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${e===u.id?"bg-accent-primary/20 border-accent-primary text-accent-primary":"bg-bg-card border-border text-text-secondary"}`,children:u.label},u.id))}),c?m.jsxs(m.Fragment,{children:[m.jsx(mA,{escopo:e,hook:i,onMsg:l}),m.jsx(pA,{escopo:e,hook:o,contas:i.contas,onMsg:l})]}):m.jsxs("div",{className:"text-center py-16",children:[m.jsx("p",{className:"text-4xl mb-3",children:"🔒"}),m.jsx("p",{className:"text-text-secondary text-xs mb-5 px-6",children:e==="casal"?"Configure o Firebase e o código do casal nas Configurações para usar contas e cartões.":"Entre com sua conta para usar contas e cartões pessoais."}),m.jsx("button",{onClick:()=>r("/configuracoes"),className:ru,children:"Ir para Configurações"})]})]})}function mA({hook:r,onMsg:e}){const{contas:t,adicionar:n,atualizar:s,remover:i}=r,[o,c]=V.useState(null);function l(u,f){if(!u.nome.trim())return e("Dê um nome à conta.","erro");f?(s(f,u),e("Conta atualizada!")):(n({id:da(),...u,criado_em:new Date().toISOString()}),e("Conta adicionada!")),c(null)}return m.jsxs("section",{children:[m.jsxs("div",{className:"flex items-center justify-between mb-3",children:[m.jsx("h2",{className:"text-xs font-semibold text-text-secondary uppercase tracking-wide",children:"Contas"}),o!=="novo"&&m.jsx("button",{onClick:()=>c("novo"),className:"text-sm text-accent-primary active:opacity-70",children:"+ Nova"})]}),o==="novo"&&m.jsx(nf,{onSalvar:u=>l(u),onCancelar:()=>c(null)}),m.jsxs("div",{className:"space-y-2",children:[t.map(u=>o===u.id?m.jsx(nf,{inicial:u,onSalvar:f=>l(f,u.id),onCancelar:()=>c(null)},u.id):m.jsxs("div",{className:"flex items-center gap-3 bg-bg-card rounded-xl border border-border px-4 py-3",children:[m.jsx("span",{className:"text-xl w-8 text-center",children:Zx(u.tipo)}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("p",{className:"text-text-primary text-sm font-medium truncate",children:u.nome}),m.jsxs("p",{className:"text-text-secondary text-xs",children:[Yx(u.tipo)," · ",Ht(u.saldo_inicial)]})]}),!u.sincronizado&&m.jsx("span",{className:"text-xs text-text-secondary",children:"⏳"}),m.jsx("button",{onClick:()=>c(u.id),className:"text-xs text-accent-primary active:opacity-70",children:"Editar"}),m.jsx("button",{onClick:()=>{i(u.id),e("Conta removida.")},className:"text-xs text-danger active:opacity-70",children:"Excluir"})]},u.id)),t.length===0&&o!=="novo"&&m.jsx("p",{className:"text-text-secondary text-xs text-center py-4",children:"Nenhuma conta cadastrada."})]})]})}function nf({inicial:r,onSalvar:e,onCancelar:t}){const[n,s]=V.useState((r==null?void 0:r.nome)??""),[i,o]=V.useState((r==null?void 0:r.tipo)??"corrente"),[c,l]=V.useState(r?String(r.saldo_inicial):"");return m.jsxs("div",{className:"bg-bg-card border border-accent-primary/40 rounded-xl p-3 space-y-3 mb-2",children:[m.jsx("input",{value:n,onChange:u=>s(u.target.value),placeholder:"Nome da conta",maxLength:40,className:dt}),m.jsx("select",{value:i,onChange:u=>o(u.target.value),className:dt,children:Lg.map(u=>m.jsxs("option",{value:u.id,children:[u.icon," ",u.label]},u.id))}),m.jsx("input",{type:"text",inputMode:"decimal",value:c,onChange:u=>l(u.target.value),placeholder:"Saldo inicial (R$)",className:dt}),m.jsxs("div",{className:"flex gap-2",children:[m.jsx("button",{onClick:t,className:Wg,children:"Cancelar"}),m.jsx("button",{onClick:()=>e({nome:n,tipo:i,saldo_inicial:parseFloat(String(c).replace(",","."))||0}),className:ru,children:"Salvar"})]})]})}function pA({hook:r,contas:e,onMsg:t}){const{cartoes:n,adicionar:s,atualizar:i,remover:o}=r,[c,l]=V.useState(null);function u(f,p){if(!f.nome.trim())return t("Dê um nome ao cartão.","erro");p?(i(p,f),t("Cartão atualizado!")):(s({id:da(),...f,criado_em:new Date().toISOString()}),t("Cartão adicionado!")),l(null)}return m.jsxs("section",{children:[m.jsxs("div",{className:"flex items-center justify-between mb-3",children:[m.jsx("h2",{className:"text-xs font-semibold text-text-secondary uppercase tracking-wide",children:"Cartões de crédito"}),c!=="novo"&&m.jsx("button",{onClick:()=>l("novo"),className:"text-sm text-accent-primary active:opacity-70",children:"+ Novo"})]}),c==="novo"&&m.jsx(rf,{contas:e,onSalvar:f=>u(f),onCancelar:()=>l(null)}),m.jsxs("div",{className:"space-y-2",children:[n.map(f=>c===f.id?m.jsx(rf,{inicial:f,contas:e,onSalvar:p=>u(p,f.id),onCancelar:()=>l(null)},f.id):m.jsxs("div",{className:"flex items-center gap-3 bg-bg-card rounded-xl border border-border px-4 py-3",children:[m.jsx("span",{className:"text-xl w-8 text-center",children:"💳"}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("p",{className:"text-text-primary text-sm font-medium truncate",children:f.nome}),m.jsxs("p",{className:"text-text-secondary text-xs",children:[f.bandeira?`${f.bandeira} · `:"","Limite ",Ht(f.limite),f.dia_vencimento?` · vence dia ${f.dia_vencimento}`:""]})]}),!f.sincronizado&&m.jsx("span",{className:"text-xs text-text-secondary",children:"⏳"}),m.jsx("button",{onClick:()=>l(f.id),className:"text-xs text-accent-primary active:opacity-70",children:"Editar"}),m.jsx("button",{onClick:()=>{o(f.id),t("Cartão removido.")},className:"text-xs text-danger active:opacity-70",children:"Excluir"})]},f.id)),n.length===0&&c!=="novo"&&m.jsx("p",{className:"text-text-secondary text-xs text-center py-4",children:"Nenhum cartão cadastrado."})]})]})}function rf({inicial:r,contas:e,onSalvar:t,onCancelar:n}){const[s,i]=V.useState((r==null?void 0:r.nome)??""),[o,c]=V.useState((r==null?void 0:r.bandeira)??ef[0]),[l,u]=V.useState(r?String(r.limite):""),[f,p]=V.useState(r!=null&&r.dia_fechamento?String(r.dia_fechamento):""),[_,b]=V.useState(r!=null&&r.dia_vencimento?String(r.dia_vencimento):""),[P,C]=V.useState((r==null?void 0:r.conta_pagamento_id)??""),k=F=>Math.min(Math.max(parseInt(F,10)||0,0),31);return m.jsxs("div",{className:"bg-bg-card border border-accent-primary/40 rounded-xl p-3 space-y-3 mb-2",children:[m.jsx("input",{value:s,onChange:F=>i(F.target.value),placeholder:"Nome do cartão",maxLength:40,className:dt}),m.jsx("select",{value:o,onChange:F=>c(F.target.value),className:dt,children:ef.map(F=>m.jsx("option",{value:F,children:F},F))}),m.jsx("input",{type:"text",inputMode:"decimal",value:l,onChange:F=>u(F.target.value),placeholder:"Limite (R$)",className:dt}),m.jsxs("div",{className:"flex gap-2",children:[m.jsx("input",{type:"number",min:"1",max:"31",value:f,onChange:F=>p(F.target.value),placeholder:"Dia fechamento",className:dt}),m.jsx("input",{type:"number",min:"1",max:"31",value:_,onChange:F=>b(F.target.value),placeholder:"Dia vencimento",className:dt})]}),m.jsxs("select",{value:P,onChange:F=>C(F.target.value),className:dt,children:[m.jsx("option",{value:"",children:"Conta de pagamento (opcional)"}),e.map(F=>m.jsx("option",{value:F.id,children:F.nome},F.id))]}),m.jsxs("div",{className:"flex gap-2",children:[m.jsx("button",{onClick:n,className:Wg,children:"Cancelar"}),m.jsx("button",{onClick:()=>t({nome:s,bandeira:o,limite:parseFloat(String(l).replace(",","."))||0,dia_fechamento:k(f),dia_vencimento:k(_),conta_pagamento_id:P}),className:ru,children:"Salvar"})]})]})}function gA(){const{config:r}=pi(),e=hr(),t=(e==null?void 0:e.usuario)||"a",n=r.nome_pessoa_a||"Pessoa A",s=r.nome_pessoa_b||"Pessoa B",i=(e==null?void 0:e.nome)||(t==="b"?s:n),o=t==="b"?n:s,c=(e==null?void 0:e.email)||"";return{usuario:t,nome:i,nomeOutro:o,email:c}}function _A(){var l;const r=new Date,{config:e,atualizar:t}=pi(),{nome:n}=gA(),{lancamentos:s}=_a(r.getMonth()+1,r.getFullYear()),[i,o]=V.useState(null);function c(u,f="sucesso"){o({mensagem:u,tipo:f})}return m.jsxs("div",{className:"px-4 pt-4 pb-8 space-y-6",children:[i&&m.jsx(nu,{mensagem:i.mensagem,tipo:i.tipo,onClose:()=>o(null)}),m.jsxs("div",{className:"bg-accent-primary/10 border border-accent-primary/30 rounded-2xl px-4 py-3",children:[m.jsx("p",{className:"text-xs text-text-secondary",children:"Conectado como"}),m.jsx("p",{className:"text-text-primary font-semibold",children:n}),((l=hr())==null?void 0:l.email)&&m.jsx("p",{className:"text-text-secondary text-xs mt-0.5",children:hr().email})]}),m.jsx(yA,{config:e,atualizar:t,onSalvo:()=>c("Perfil salvo!")}),m.jsx(IA,{config:e,atualizar:t,onSalvo:()=>c("Orçamento salvo!")}),m.jsx(EA,{config:e,atualizar:t,onSalvo:u=>c(u)}),m.jsx(vA,{onSalvo:u=>c(u),onErro:u=>c(u,"erro")}),m.jsx(TA,{onSalvo:u=>c(u),onErro:u=>c(u,"erro")}),m.jsx(bA,{lancamentos:s,mes:r.getMonth()+1,ano:r.getFullYear(),onSalvo:u=>c(u)})]})}function yA({config:r,atualizar:e,onSalvo:t}){const[n,s]=V.useState(r.nome_pessoa_a??""),[i,o]=V.useState(r.nome_pessoa_b??"");async function c(){await e({nome_pessoa_a:n.trim(),nome_pessoa_b:i.trim()}),t()}return m.jsxs($r,{titulo:"Perfil do casal",children:[m.jsx(kr,{label:"Pessoa A",children:m.jsx("input",{value:n,onChange:l=>s(l.target.value),placeholder:"Nome da Pessoa A",className:Dr})}),m.jsx(kr,{label:"Pessoa B",children:m.jsx("input",{value:i,onChange:l=>o(l.target.value),placeholder:"Nome da Pessoa B",className:Dr})}),m.jsx(Ea,{onClick:c})]})}function IA({config:r,atualizar:e,onSalvo:t}){const[n,s]=V.useState(r.orcamento_mensal??"");async function i(){const o=parseFloat(String(n).replace(",","."))||0;await e({orcamento_mensal:o}),t()}return m.jsxs($r,{titulo:"Orçamento",children:[m.jsx(kr,{label:"Orçamento mensal (R$)",children:m.jsx("input",{type:"text",inputMode:"decimal",value:n,onChange:o=>s(o.target.value),placeholder:"Ex: 5000",className:Dr})}),m.jsx(Ea,{onClick:i})]})}function EA({config:r,atualizar:e,onSalvo:t}){const n=Fn(),{logout:s}=kg(),[i,o]=V.useState(r.email_pessoa_a??""),[c,l]=V.useState(r.email_pessoa_b??"");async function u(){await e({email_pessoa_a:i.trim(),email_pessoa_b:c.trim()}),t("E-mails salvos!")}async function f(){await s(),n("/login",{replace:!0})}return m.jsxs($r,{titulo:"Conta",children:[m.jsx("p",{className:"text-xs text-text-secondary -mt-1",children:"O login usa sua conta Google. Cada e-mail é mapeado para uma pessoa do casal."}),m.jsx(kr,{label:"E-mail da Pessoa A",children:m.jsx("input",{type:"email",value:i,onChange:p=>o(p.target.value),placeholder:"pessoa.a@gmail.com",className:Dr})}),m.jsx(kr,{label:"E-mail da Pessoa B",children:m.jsx("input",{type:"email",value:c,onChange:p=>l(p.target.value),placeholder:"pessoa.b@gmail.com",className:Dr})}),m.jsx(Ea,{label:"Salvar e-mails",onClick:u}),m.jsx("div",{className:"pt-3 border-t border-border",children:m.jsx("button",{onClick:f,className:"text-sm text-danger active:opacity-70 transition-opacity",children:"Sair da conta →"})})]})}function vA({onSalvo:r,onErro:e}){const t=M_(),[n,s]=V.useState(jo()),[i,o]=V.useState(null),[c,l]=V.useState(""),[u,f]=V.useState(!1);function p(){if(!n.trim())return e("Defina um código para o casal.");af(n.trim()),r("Código do casal salvo!")}async function _(){f(!0);const{ok:b,erro:P}=await Px();o(b?"ok":"erro"),l(b?"Conexão com o Firestore OK!":P??"Erro desconhecido."),f(!1)}return m.jsxs($r,{titulo:"Firebase",children:[m.jsxs("p",{className:"text-xs text-text-secondary -mt-1",children:["Projeto: ",m.jsx("span",{className:"text-accent-secondary",children:(t==null?void 0:t.projectId)??"—"}),". Para trocar o projeto, use “Reconfigurar Firebase” na tela de login."]}),m.jsx(kr,{label:"Código do casal (igual nos dois aparelhos)",children:m.jsx("input",{value:n,onChange:b=>s(b.target.value),placeholder:"ex: joao-maria-2026",className:Dr})}),m.jsx(Ea,{label:"Salvar código",onClick:p}),m.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[m.jsx("button",{onClick:_,disabled:u,className:`${su} flex-1`,children:u?"Testando...":"Testar conexão"}),i&&m.jsxs("span",{className:`text-xs ${i==="ok"?"text-accent-secondary":"text-danger"}`,children:[i==="ok"?"✓":"✕"," ",c]})]})]})}function TA({onSalvo:r,onErro:e}){const{categorias:t,adicionar:n,editar:s,remover:i}=ya(),[o,c]=V.useState(null),[l,u]=V.useState(""),[f,p]=V.useState("");async function _(){if(!l.trim())return e("Dê um nome à categoria.");await n({label:l,icon:f}),u(""),p(""),r("Categoria adicionada!")}async function b(C,k,F){if(!k.trim())return e("O nome não pode ficar vazio.");await s(C,{label:k,icon:F}),c(null),r("Categoria atualizada!")}async function P(C){await i(C),r("Categoria removida.")}return m.jsxs($r,{titulo:"Categorias",children:[m.jsx("div",{className:"space-y-2",children:t.map(C=>o===C.id?m.jsx(wA,{inicial:C,onSalvar:(k,F)=>b(C.id,k,F),onCancelar:()=>c(null)},C.id):m.jsxs("div",{className:"flex items-center gap-3 bg-bg-primary border border-border rounded-xl px-3 py-2.5",children:[m.jsx("span",{className:"text-xl w-7 text-center",children:C.icon}),m.jsx("span",{className:"flex-1 text-sm text-text-primary",children:C.label}),m.jsx("button",{onClick:()=>c(C.id),className:"text-xs text-accent-primary active:opacity-70 transition-opacity",children:"Editar"}),m.jsx("button",{onClick:()=>P(C.id),className:"text-xs text-danger active:opacity-70 transition-opacity",children:"Excluir"})]},C.id))}),m.jsxs("div",{className:"flex gap-2 pt-1",children:[m.jsx("input",{value:f,onChange:C=>p(C.target.value.slice(0,2)),placeholder:"🎮",className:"w-14 text-center bg-bg-primary border border-border rounded-xl px-2 py-2.5 text-lg outline-none focus:border-accent-primary transition-colors"}),m.jsx("input",{value:l,onChange:C=>u(C.target.value),placeholder:"Nova categoria",maxLength:30,className:"flex-1 bg-bg-primary border border-border rounded-xl px-3 py-2.5 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-primary transition-colors"}),m.jsx("button",{onClick:_,className:su,children:"Add"})]})]})}function wA({inicial:r,onSalvar:e,onCancelar:t}){const[n,s]=V.useState(r.label),[i,o]=V.useState(r.icon);return m.jsxs("div",{className:"flex gap-2 bg-bg-primary border border-accent-primary/40 rounded-xl p-2",children:[m.jsx("input",{value:i,onChange:c=>o(c.target.value.slice(0,2)),className:"w-14 text-center bg-bg-card border border-border rounded-lg px-2 py-2 text-lg outline-none"}),m.jsx("input",{value:n,onChange:c=>s(c.target.value),maxLength:30,className:"flex-1 bg-bg-card border border-border rounded-lg px-3 py-2 text-sm text-text-primary outline-none"}),m.jsx("button",{onClick:()=>e(n,i),className:"text-xs text-accent-secondary px-1",children:"Salvar"}),m.jsx("button",{onClick:t,className:"text-xs text-text-secondary px-1",children:"Cancelar"})]})}function bA({lancamentos:r,mes:e,ano:t,onSalvo:n}){function s(){const i="id,data,valor,tipo,categoria,quem_pagou,descricao,criado_em",o=r.map(p=>[p.id,p.data,p.valor,p.tipo,p.categoria,p.quem_pagou,`"${(p.descricao??"").replace(/"/g,'""')}"`,p.criado_em].join(",")),c=[i,...o].join(`
`),l=new Blob([c],{type:"text/csv;charset=utf-8;"}),u=URL.createObjectURL(l),f=document.createElement("a");f.href=u,f.download=`financas-${t}-${String(e).padStart(2,"0")}.csv`,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(u),n(`${eu(e,t)} exportado.`)}return m.jsxs($r,{titulo:"Dados",children:[m.jsx("p",{className:"text-xs text-text-secondary -mt-1",children:"Os dados sincronizam automaticamente entre os aparelhos (e funcionam offline)."}),m.jsx("button",{onClick:s,className:`${xA} w-full text-sm`,children:"📥 Exportar CSV do mês"})]})}const Dr="w-full bg-bg-primary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:border-accent-primary transition-colors",su="px-4 py-2 rounded-xl bg-accent-primary text-white text-sm font-medium disabled:opacity-40 active:scale-95 transition-all",xA="px-4 py-2 rounded-xl bg-bg-card border border-border text-text-secondary text-sm active:bg-border transition-colors";function $r({titulo:r,children:e}){return m.jsxs("section",{className:"bg-bg-card rounded-2xl border border-border p-4 space-y-3",children:[m.jsx("h2",{className:"text-xs font-semibold text-text-secondary uppercase tracking-wide",children:r}),e]})}function kr({label:r,children:e}){return m.jsxs("div",{className:"space-y-1.5",children:[m.jsx("label",{className:"text-xs text-text-secondary",children:r}),e]})}function Ea({label:r="Salvar",onClick:e}){return m.jsx("button",{onClick:e,className:su,children:r})}const AA=V.lazy(()=>k_(()=>import("./DashboardPage-FNopRwsR.js"),__vite__mapDeps([0,1,2]))),SA=m.jsx("div",{className:"flex items-center justify-center h-full py-20 text-text-secondary text-sm",children:"Carregando..."});function RA(){return Cn()?m.jsx(sf,{}):m.jsx(of,{to:"/login",replace:!0})}function PA(){return Nx(),m.jsx(A_,{basename:"/financas-casal/",children:m.jsxs(S_,{children:[m.jsx(Ye,{path:"/login",element:m.jsx(Ox,{})}),m.jsx(Ye,{element:m.jsx(RA,{}),children:m.jsxs(Ye,{element:m.jsx(Gx,{}),children:[m.jsx(Ye,{path:"/",element:m.jsx(rA,{})}),m.jsx(Ye,{path:"/novo",element:m.jsx(lA,{})}),m.jsx(Ye,{path:"/historico",element:m.jsx(hA,{})}),m.jsx(Ye,{path:"/carteira",element:m.jsx(fA,{})}),m.jsx(Ye,{path:"/dashboard",element:m.jsx(V.Suspense,{fallback:SA,children:m.jsx(AA,{})})}),m.jsx(Ye,{path:"/configuracoes",element:m.jsx(_A,{})})]})}),m.jsx(Ye,{path:"*",element:m.jsx(of,{to:"/",replace:!0})})]})})}N_.createRoot(document.getElementById("root")).render(m.jsx(V.StrictMode,{children:m.jsx(PA,{})}));export{Fg as E,Ht as a,tA as b,$g as c,_a as d,zg as e,eu as f,tu as g,Mg as i,m as j,nA as s,ya as u};
