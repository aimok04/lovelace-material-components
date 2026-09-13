function e(e,t,i,n){var a,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(o<3?a(s):o>3?a(t,i,s):a(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;let o=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new o(i,e,n)},r=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,m=globalThis,f=m.trustedTypes,g=f?f.emptyScript:"",_=m.reactiveElementPolyfillSupport,v=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>!l(e,t),x={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&c(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:a}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const o=n?.call(this);a?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...u(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,n)=>{if(i)e.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of n){const n=document.createElement("style"),a=t.litNonce;void 0!==a&&n.setAttribute("nonce",a),n.textContent=i.cssText,e.appendChild(n)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=n;const o=a.fromAttribute(t,e.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(e,t,i,n=!1,a){if(void 0!==e){const o=this.constructor;if(!1===n&&(a=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??y)(a,t)||i.useDefault&&i.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:a},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==a||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,i,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,_?.({ReactiveElement:w}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,$=e=>e,k=A.trustedTypes,E=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+O,S=`<${T}>`,I=document,M=()=>I.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,L="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,R=/>/g,U=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,V=/"/g,F=/^(?:script|style|textarea|title)$/i,H=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),G=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),W=new WeakMap,q=I.createTreeWalker(I,129);function B(e,t){if(!N(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const K=(e,t)=>{const i=e.length-1,n=[];let a,o=2===t?"<svg>":3===t?"<math>":"",s=P;for(let t=0;t<i;t++){const i=e[t];let r,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===P?"!--"===l[1]?s=z:void 0!==l[1]?s=R:void 0!==l[2]?(F.test(l[2])&&(a=RegExp("</"+l[2],"g")),s=U):void 0!==l[3]&&(s=U):s===U?">"===l[0]?(s=a??P,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?U:'"'===l[3]?V:D):s===V||s===D?s=U:s===z||s===R?s=P:(s=U,a=void 0);const u=s===U&&e[t+1].startsWith("/>")?" ":"";o+=s===P?i+S:c>=0?(n.push(r),i.slice(0,c)+C+i.slice(c)+O+u):i+O+(-2===c?t:u)}return[B(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class X{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let a=0,o=0;const s=e.length-1,r=this.parts,[l,c]=K(e,t);if(this.el=X.createElement(l,i),q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=q.nextNode())&&r.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(C)){const t=c[o++],i=n.getAttribute(e).split(O),s=/([.?@])?(.*)/.exec(t);r.push({type:1,index:a,name:s[2],strings:i,ctor:"."===s[1]?te:"?"===s[1]?ie:"@"===s[1]?ne:ee}),n.removeAttribute(e)}else e.startsWith(O)&&(r.push({type:6,index:a}),n.removeAttribute(e));if(F.test(n.tagName)){const e=n.textContent.split(O),t=e.length-1;if(t>0){n.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],M()),q.nextNode(),r.push({type:2,index:++a});n.append(e[t],M())}}}else if(8===n.nodeType)if(n.data===T)r.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(O,e+1));)r.push({type:7,index:a}),e+=O.length-1}a++}}static createElement(e,t){const i=I.createElement("template");return i.innerHTML=e,i}}function Z(e,t,i=e,n){if(t===G)return t;let a=void 0!==n?i._$Co?.[n]:i._$Cl;const o=j(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(e),a._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=a:i._$Cl=a),void 0!==a&&(t=Z(e,a._$AS(e,t.values),a,n)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??I).importNode(t,!0);q.currentNode=n;let a=q.nextNode(),o=0,s=0,r=i[0];for(;void 0!==r;){if(o===r.index){let t;2===r.type?t=new Q(a,a.nextSibling,this,e):1===r.type?t=new r.ctor(a,r.name,r.strings,this,e):6===r.type&&(t=new ae(a,this,e)),this._$AV.push(t),r=i[++s]}o!==r?.index&&(a=q.nextNode(),o++)}return q.currentNode=I,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),j(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>N(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=X.createElement(B(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new J(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new X(e)),t}k(e){N(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const a of e)n===t.length?t.push(i=new Q(this.O(M()),this.O(M()),this,this.options)):i=t[n],i._$AI(a),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,a){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(e,t=this,i,n){const a=this.strings;let o=!1;if(void 0===a)e=Z(this,e,t,0),o=!j(e)||e!==this._$AH&&e!==G,o&&(this._$AH=e);else{const n=e;let s,r;for(e=a[0],s=0;s<a.length-1;s++)r=Z(this,n[i+s],t,s),r===G&&(r=this._$AH[s]),o||=!j(r)||r!==this._$AH[s],r===Y?e=Y:e!==Y&&(e+=(r??"")+a[s+1]),this._$AH[s]=r}o&&!n&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class ne extends ee{constructor(e,t,i,n,a){super(e,t,i,n,a),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??Y)===G)return;const i=this._$AH,n=e===Y&&i!==Y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==Y&&(i===Y||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const oe=A.litHtmlPolyfillSupport;oe?.(X,Q),(A.litHtmlVersions??=[]).push("3.3.3");const se=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class re extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const n=i?.renderBefore??t;let a=n._$litPart$;if(void 0===a){const e=i?.renderBefore??null;n._$litPart$=a=new Q(t.insertBefore(M(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}re._$litElement$=!0,re.finalized=!0,se.litElementHydrateSupport?.({LitElement:re});const le=se.litElementPolyfillSupport;le?.({LitElement:re}),(se.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},ue=(e=de,t,i)=>{const{kind:n,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===n&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===n){const{name:n}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,a,e,!0,i)},init(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===n){const{name:n}=i;return function(i){const a=this[n];t.call(this,i),this.requestUpdate(n,a,e,!0,i)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e){return(t,i)=>"object"==typeof i?ue(e,t,i):((e,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e){return he({...e,state:!0,attribute:!1})}var me={message:"Upgrade to Material Home Assistant (Pro or Ultimate) for more features and customization options!",button:"UPGRADE"},fe={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",no_entity_set:"Entity not set",no_entity:"Entity not available",indoor:"Indoor",on:"On",off:"Off",offline:"Offline",auto:"Auto",eco:"Eco",heat:"Heat",cool:"Cool",dry:"Dry",fan:"Fan",playing:"Playing",paused:"Pause",idle:"Cast",presence:"Motion",off_presence:"No motion",today_at:"Today at",yesterday_at:"Yesterday at",open:"Open",closed:"Closed",opening:"Opening",closing:"Closing",active:"Active",inactive:"Inactive",info_device:"Device Information",related:"Related Integration",hidden:"Hide"},ge={automatic_action:"Enable automatic actions",tap_action_title:"Action on tap",hold_action_title:"Action on hold",arrow_action_title:"Action on arrow button",double_tap_action_title:"Action on double tap",toggle:"Single click (On/Off)",more_info:"Show entity info",navigate:"Navigate to a page",call_service:"Run a service",fire_dom:"Fire DOM event",assist:"Activate voice assistant",url:"Open link or website",none:"No action",google_home:"Open Google Home",settings:"Open Settings",select_option:"Select option",warning:"⚠️ Advanced actions (JS, [[[]]], complex call-services) must be configured via YAML."},_e={description:"Configure the navigation path when a card is tapped.",cameras:"Cameras path",cameras_name:"Cameras",lighting:"Lighting path",lighting_name:"Lighting",lighting_label:"Lights",wifi:"Wi-Fi path",wifi_name:"Wi-Fi",climate:"Climate path",climate_name:"Climate",device:"Device",devices:"Devices",placeholder:"./path-or-url"},ve={name:"Entity Name",entity:"Entity",theme:"Use Material Expressive",increase_temp:"Increase Temperature (e.g. 0.5)",decrease_temp:"Decrease Temperature (e.g. 0.5)",dual_icon:{default:"Use Default Icon",options:"Use Dual Icon (On and Off states)."},fix_temperature:"Enable if temperature is not correct",false:"Not Active",true:"Active",auto:"Auto"},be={name:"Entity Name",control_type:"Control Type",type:{generic:"Generic (Switch, Button...)",thermometer:"Thermometer, Ventilation...",automation:"Automation",scene:"Scene",media:"Multimedia (Google, Alexa...)",state:"State",action:"Action",app_version:"Material Components Version"},dual_icon:{default:"Use default icon",options:"Use dual icon (Element On and Element Off)."},dual_text:{default:"Use Default Text",text_on:"Text On",text_off:"Text Off"}},ye={name:"Card Name",entity_card:"Use card as entity",entity:"Entity",dual_icon:{default:"Use Default Icon",options:"Use Dual Icon (On and Off states)."}},xe={name:"Card Name",control_type:"Control Type",type:{light:"Light",cover:"Cover"},entity:"Entity to control",icon:"Custom icon (if left empty, changes automatically based on On/Off state)",percentage:"Display value as percentage",bold_text:"Bold style for the text",colorize:"Colorize slider based on the light's color"},we={on_text:"Text for Lights ON",off_text:"Text for Lights OFF",control_area:"Control a specific Area",area_id:"Area to control"},Ae={media_card:{no_content:"Nothing is playing",playing:"Now playing"},remote:"Open Remote",cast:"Cast screen",stop_cast:"Stop casting",open:"Open ",open_google:"Open Google Home"},$e={user_title:"Show user location on the map",user_description:"If enabled, non-admin users will be able to see the location of other users on the map by clicking on their cards. If disabled, location information will not be visible to non-admin users.",add_button_title:"Show add user button",add_button_description:"If enabled, non-admin users will also be able to see the button to add a new user. However, non-admin users will not be able to complete the addition and will be redirected to their own profile page. If disabled, the button will only be visible to users with administrative privileges."},ke={upgrade:me,common:fe,actions:ge,material_dashboard_card:_e,material_climate_card:ve,material_button_card:be,material_control_card:ye,material_slider_card:xe,material_lights_card:we,material_media_overlay:Ae,material_users_card:$e},Ee={message:"Passa a Material Home Assistant (Pro o Ultimate) per avere più funzioni e opzioni di personalizzazione!",button:"AGGIORNA"},Ce={version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Mostra avviso",no_entity_set:"Entità non impostata",no_entity:"Entità non disponibile",indoor:"Interno",on:"Acceso",off:"Spento",offline:"Offline",auto:"Auto",eco:"Eco",heat:"Riscalda",dry:"Deumidificatore",cool:"Raffresca",fan:"Ventilazione",playing:"Riproduzione",paused:"Pausa",idle:"Cast",presence:"Movimento",off_presence:"Nessun movimento",today_at:"Oggi alle",yesterday_at:"Ieri alle",open:"Aperto",closed:"Chiuso",opening:"Apertura",closing:"Chiusura",active:"Attivo",inactive:"Inattivo",info_device:"Informazioni Dispositivo",related:"Integrazione Correlata",hidden:"Nascondi"},Oe={automatic_action:"Attiva azioni automatiche",tap_action_title:"Azione al clic",hold_action_title:"Azione alla pressione prolungata",arrow_action_title:"Azione sul pulsante freccia",double_tap_action_title:"Azione al doppio clic",toggle:"Clic singolo (Accensione/Spegnimento)",more_info:"Mostra info entità",navigate:"Naviga verso una pagina",call_service:"Esegui un servizio",fire_dom:"Genera evento DOM",assist:"Attiva assistente vocale",url:"Apri link o sito web",none:"Nessuna azione",google_home:"Apri Google Home",settings:"Apri Impostazioni",select_option:"Seleziona opzione",warning:"⚠️ Azioni avanzate (JS, [[[]]], call-service complessi) devono essere configurate tramite YAML."},Te={description:"Configura il percorso di navigazione quando una card viene cliccata.",cameras:"Percorso delle telecamere",cameras_name:"Telecamere",lighting:"Percorso delle luci",lighting_name:"Illuminazione",lighting_label:"Luci",wifi:"Percorso Wi-Fi",wifi_name:"Wi-Fi",climate:"Percorso del clima",climate_name:"Climatizzazione",device:"Dispositivo",devices:"Dispositivi",placeholder:"./percorso-o-url"},Se={name:"Nome Entità",entity:"Entità",theme:"Usa Material Expressive",increase_temp:"Aumento Temperatura (e.g. 0.5)",decrease_temp:"Diminuzione Temperatura (e.g. 0.5)",dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."},fix_temperature:"Abilita se la temperatura non è corretta",false:"Non attivo",true:"Attivo",auto:"Automatico"},Ie={name:"Nome Entità",control_type:"Tipo di controllo",type:{generic:"Generico (Interruttore, Pulsante...)",thermometer:"Climatizzazione, Ventilazione...",automation:"Automazioni",scene:"Scene",media:"Multimedia (Google, Alexa...)",state:"Stato",action:"Azioni",app_version:"Versione Material Home Components"},dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."},dual_text:{default:"Usa Testo di Default",text_on:"Testo On",text_off:"Testo Off"}},Me={name:"Nome della Scheda",entity_card:"Usa la scheda come entità",entity:"Entità",dual_icon:{default:"Usa l'icona predefinita",options:"Usa icona doppia (stati Attivo e Disattivo)."}},je={name:"Nome della Card",control_type:"Tipo di controllo",type:{light:"Luci",cover:"Tapparelle"},entity:"Entità da controllare",icon:"Icona personalizzata (se vuota, cambia automaticamente in base allo stato On/Off)",percentage:"Mostra la percentuale di valore",bold_text:"Testo con stile in grassetto",colorize:"Colora lo slider in base al colore della luce"},Ne={on_text:"Testo per Luci Accese",off_text:"Testo per Luci Spente",control_area:"Controlla una specifica Area",area_id:"Area da controllare"},Le={media_card:{no_content:"Nessun contenuto in riproduzione",playing:"Ora in riproduzione"},remote:"Apri il telecomando",cast:"Trasmetti schermo",stop_cast:"Interrompi trasmissione",open:"Apri",open_google:"Apri Google Home"},Pe={user_title:"Mostra posizione utenti sulla mappa",user_description:"Se abilitata, gli utenti non amministratori potranno visualizzare la posizione degli altri utenti sulla mappa cliccando sulle loro card. Se disabilitata, le informazioni di localizzazione non saranno visibili agli utenti non admin.",add_button_title:"Mostra bottone aggiungi utente",add_button_description:"Se abilitata, anche gli utenti non amministratori potranno visualizzare il bottone per aggiungere un nuovo utente. Tuttavia, gli utenti non admin non potranno completare l'aggiunta e saranno reindirizzati alla propria pagina profilo. Se disabilitata, il bottone sarà visibile solo agli utenti con privilegi amministrativi."},ze={upgrade:Ee,common:Ce,actions:Oe,material_dashboard_card:Te,material_climate_card:Se,material_button_card:Ie,material_control_card:Me,material_slider_card:je,material_lights_card:Ne,material_media_overlay:Le,material_users_card:Pe},Re={message:"Passez à Material Home Assistant (Pro ou Ultimate) per plus di funzionalità e opzioni di personalizzazione !",button:"METTRE À NIVEAU"},Ue={version:"Version",invalid_configuration:"Configuration invalide",show_warning:"Afficher l’avertissement",no_entity_set:"Aucune entité définie",no_entity:"Entité non disponible",indoor:"Intérieur",on:"Allumé",off:"Éteint",offline:"Hors ligne",auto:"Auto",eco:"Éco",heat:"Chauffage",dry:"Déshumidificateur",cool:"Climatisation",fan:"Ventilation",playing:"Lecture",paused:"Pause",idle:"Cast",presence:"Mouvement",off_presence:"Aucun mouvement",today_at:"Aujourd’hui à",yesterday_at:"Hier à",open:"Ouvert",closed:"Fermé",opening:"Ouverture",closing:"Fermeture",active:"Actif",inactive:"Inactif",info_device:"Informations sur l'appareil",related:"Intégration Connexe",hidden:"Masquer"},De={automatic_action:"Activer actions automatiques",tap_action_title:"Action au clic",hold_action_title:"Action lors du maintien",arrow_action_title:"Action sur le bouton flèche",double_tap_action_title:"Action au double clic",toggle:"Clic unique (Marche/Arrêt)",more_info:"Afficher infos entité",navigate:"Naviguer vers une page",call_service:"Exécuter un service",fire_dom:"Déclencher événement DOM",assist:"Activer assistant vocal",url:"Ouvrir lien ou site web",none:"Aucune action",google_home:"Ouvrir Google Home",settings:"Ouvrir paramètres",select_option:"Sélectionner option",warning:"⚠️ Les actions avancées (JS, [[[]]], appels de service complexes) doivent être configurées via YAML."},Ve={description:"Configurer le chemin de navigation lorsqu’une carte est cliquée.",cameras:"Chemin des caméras",cameras_name:"Caméras",lighting:"Chemin des lumières",lighting_name:"Éclairage",lighting_label:"Lumières",wifi:"Chemin Wi-Fi",wifi_name:"Wi-Fi",climate:"Chemin du climat",climate_name:"Climatisation",device:"Appareil",devices:"Appareils",placeholder:"./chemin-ou-url"},Fe={name:"Nom de l’entité",entity:"Entité",theme:"Utiliser Material Expressive",increase_temp:"Augmenter la température (ex. 0.5)",decrease_temp:"Diminuer la température (ex. 0.5)",dual_icon:{default:"Utiliser l’icône par défaut",options:"Utiliser une double icône (État activé et désactivé)."},fix_temperature:"Activer si la température n’est pas correcte",false:"Inactif",true:"Actif",auto:"Automatique"},He={name:"Nom de l’entité",control_type:"Type de contrôle",type:{generic:"Générique (Interrupteur, Bouton...)",thermometer:"Climatisation, Ventilation...",automation:"Automatisations",scene:"Scènes",media:"Multimédia (Google, Alexa...)",state:"État",action:"Actions",app_version:"Version Google Components"},dual_icon:{default:"Utiliser l’icône par défaut",options:"Utiliser une double icône (État activé et désactivé)."},dual_text:{default:"Utiliser le texte par défaut",text_on:"Texte ON",text_off:"Texte OFF"}},Ge={name:"Nom de la carte",entity_card:"Utiliser la carte comme entité",entity:"Entité",dual_icon:{default:"Utiliser l’icône par défaut",options:"Utiliser une double icône (États actif et inactif)."}},Ye={name:"Nom de la carte",control_type:"Type de contrôle",type:{light:"Lumières",cover:"Volets roulants"},entity:"Entité à contrôler",icon:"Icône personnalisée (si vide, change automatiquement selon l’état On/Off)",percentage:"Afficher la valeur en pourcentage",bold_text:"Texte en gras",colorize:"Colorer le curseur selon la couleur de la lumière"},We={on_text:"Texte pour lumières allumées",off_text:"Texte pour lumières éteintes",control_area:"Contrôler une zone spécifique",area_id:"Zone à contrôler"},qe={media_card:{no_content:"Aucun contenu en lecture",playing:"En lecture"},remote:"Ouvrir la télécommande",cast:"Caster l’écran",stop_cast:"Arrêter la diffusion",open:"Ouvrir",open_google:"Ouvrir Google Home"},Be={user_title:"Afficher la position des utilisateurs sur la carte",user_description:"Si activé, les utilisateurs non administrateurs pourront voir la position des autres utilisateurs sur la carte en cliquant sur leurs cartes. Si désactivé, les informations de localisation ne seront pas visibles pour les utilisateurs non administrateurs.",add_button_title:"Afficher le bouton d'ajout d'utilisateur",add_button_description:"Si activé, les utilisateurs non administrateurs pourront également voir le bouton pour ajouter un nouvel utilisateur. Cependant, les utilisateurs non administrateurs ne pourront pas compléter l'ajout et seront redirigés vers leur propre page de profil. Si désactivé, le bouton ne sera visible que pour les utilisateurs disposant de privilèges administratifs."},Ke={upgrade:Re,common:Ue,actions:De,material_dashboard_card:Ve,material_climate_card:Fe,material_button_card:He,material_control_card:Ge,material_slider_card:Ye,material_lights_card:We,material_media_overlay:qe,material_users_card:Be},Xe={message:"¡Actualiza a Material Home Assistant (Pro o Ultimate) para obtener más funciones y opciones de personalización!",button:"ACTUALIZAR"},Ze={version:"Versión",invalid_configuration:"Configuración no válida",show_warning:"Mostrar advertencia",no_entity_set:"Entidad no configurada",no_entity:"Entidad no disponible",indoor:"Interior",on:"Encendido",off:"Apagado",offline:"Desconectado",auto:"Auto",eco:"Eco",heat:"Calefacción",dry:"Deshumidificador",cool:"Refrigeración",fan:"Ventilación",playing:"Reproduciendo",paused:"Pause",idle:"Cast",presence:"Movimiento",off_presence:"Sin movimiento",today_at:"Hoy a las",yesterday_at:"Ayer a las",open:"Abierto",closed:"Cerrado",opening:"Apertura",closing:"Cierre",active:"Activo",inactive:"Inactivo",info_device:"Información del Dispositivo",related:"Integración Relacionada",hidden:"Ocultar"},Je={automatic_action:"Activar acciones automáticas",tap_action_title:"Acción al clic",hold_action_title:"Acción al mantener presionado",arrow_action_title:"Acción en el botón de flecha",double_tap_action_title:"Acción al doble clic",toggle:"Clic único (Encender/Apagar)",more_info:"Mostrar info de entidad",navigate:"Navegar a una página",call_service:"Ejecutar servicio",fire_dom:"Disparar evento DOM",assist:"Activar asistente de voz",url:"Abrir enlace o web",none:"Sin acción",google_home:"Abrir Google Home",settings:"Abrir configuración",select_option:"Seleccionar opción",warning:"⚠️ Las acciones avanzadas (JS, [[[]]], servicios de llamada complejos) deben configurarse mediante YAML."},Qe={description:"Configura la ruta de navegación cuando se hace clic en una tarjeta.",cameras:"Ruta de cámaras",cameras_name:"Cámaras",lighting:"Ruta de luces",lighting_name:"Iluminación",lighting_label:"Luces",wifi:"Ruta Wi-Fi",wifi_name:"Wi-Fi",climate:"Ruta del clima",climate_name:"Climatización",device:"Dispositivo",devices:"Dispositivos",placeholder:"./ruta-o-url"},et={name:"Nombre de la entidad",entity:"Entidad",theme:"Usar Material Expressive",increase_temp:"Aumentar temperatura (ej. 0.5)",decrease_temp:"Disminuir temperatura (ej. 0.5)",dual_icon:{default:"Usar icono por defecto",options:"Usar doble icono (Elemento encendido y apagado)."},fix_temperature:"Activar si la temperatura no es correcta",false:"Inactivo",true:"Activo",auto:"Automático"},tt={name:"Nombre de la entidad",control_type:"Tipo de control",type:{generic:"Genérico (Interruptor, Botón...)",thermometer:"Climatización, Ventilación...",automation:"Automatizaciones",scene:"Escenas",media:"Multimedia (Google, Alexa...)",state:"Estado",action:"Acciones",app_version:"Versión Google Components"},dual_icon:{default:"Usar icono por defecto",options:"Usar doble icono (Encendido y Apagado)."},dual_text:{default:"Usar texto por defecto",text_on:"Texto ON",text_off:"Texto OFF"}},it={name:"Nombre de la tarjeta",entity_card:"Usar la tarjeta como entidad",entity:"Entidad",dual_icon:{default:"Usar icono por defecto",options:"Usar doble icono (Activo e Inactivo)."}},nt={name:"Nombre de la tarjeta",control_type:"Tipo de control",type:{light:"Luces",cover:"Persianas"},entity:"Entidad a controlar",icon:"Icono personalizado (si está vacío, cambia automáticamente según el estado On/Off)",percentage:"Mostrar valor en porcentaje",bold_text:"Texto en negrita",colorize:"Colorear el control deslizante según el color de la luz"},at={on_text:"Texto para luces encendidas",off_text:"Texto para luces apagadas",control_area:"Controlar un Área específica",area_id:"Área a controlar"},ot={media_card:{no_content:"Sin contenido en reproducción",playing:"Reproduciendo ahora"},remote:"Abrir mando a distancia",cast:"Transmitir pantalla",stop_cast:"Detener transmisión",open:"Abrir",open_google:"Abrir Google Home"},st={user_title:"Mostrar ubicación de usuarios en el mapa",user_description:"Si está habilitado, los usuarios que no son administradores podrán ver la ubicación de otros usuarios en el mapa haciendo clic en sus tarjetas. Si está deshabilitado, la información de ubicación no será visible para los usuarios que no son administradores.",add_button_title:"Mostrar botón de agregar usuario",add_button_description:"Si está habilitado, los usuarios que no son administradores también podrán ver el botón para agregar un nuevo usuario. Sin embargo, los usuarios no administradores no podrán completar la adición y serán redirigidos a su propia página de perfil. Si está deshabilitado, el botón solo será visible para los usuarios con privilegios administrativos."},rt={upgrade:Xe,common:Ze,actions:Je,material_dashboard_card:Qe,material_climate_card:et,material_button_card:tt,material_control_card:it,material_slider_card:nt,material_lights_card:at,material_media_overlay:ot,material_users_card:st},lt={message:"Upgrade auf Material Home Assistant (Pro oder Ultimate) für mehr Funktionen und Anpassungsmöglichkeiten!",button:"UPGRADE"},ct={version:"Version",invalid_configuration:"Ungültige Konfiguration",show_warning:"Warnung anzeigen",no_entity_set:"Keine Entität gesetzt",no_entity:"Entität nicht verfügbar",indoor:"Innen",on:"Ein",off:"Aus",offline:"Offline",auto:"Automatisch",eco:"Eco",heat:"Heizen",dry:"Entfeuchter",cool:"Kühlen",fan:"Ventilation",playing:"Wiedergabe",paused:"Pause",idle:"Cast",presence:"Bewegung",off_presence:"Keine Bewegung",today_at:"Heute um",yesterday_at:"Gestern um",open:"Offen",closed:"Geschlossen",opening:"Öffnung",closing:"Schluss",active:"Aktiv",inactive:"Inaktiv",info_device:"Geräteinformationen",related:"Zugehörige Integration",hidden:"Ausblenden"},dt={automatic_action:"Automatische Aktionen aktivieren",tap_action_title:"Aktion beim Klicken",hold_action_title:"Aktion beim Halten",arrow_action_title:"Aktion bei Pfeil-Schaltfläche",double_tap_action_title:"Aktion beim Doppelklick",toggle:"Einfacher Klick (An/Aus)",more_info:"Entitätsinfo anzeigen",navigate:"Zu Seite navigieren",call_service:"Dienst ausführen",fire_dom:"DOM-Ereignis auslösen",assist:"Sprachassistent aktivieren",url:"Link oder Webseite öffnen",none:"Keine Aktion",google_home:"Google Home öffnen",settings:"Einstellungen öffnen",select_option:"Option auswählen",warning:"⚠️ Erweiterte Aktionen (JS, [[[]]], komplexe Call-Services) müssen über YAML konfiguriert werden."},ut={description:"Konfiguriere den Navigationspfad, wenn eine Karte angeklickt wird.",cameras:"Kamerapfad",cameras_name:"Kameras",lighting:"Lichtpfad",lighting_name:"Beleuchtung",lighting_label:"Lichter",wifi:"Wi-Fi-Pfad",wifi_name:"Wi-Fi",climate:"Klima-Pfad",climate_name:"Klimatisierung",device:"Gerät",devices:"Geräte",placeholder:"./pfad-oder-url"},ht={name:"Entitätsname",entity:"Entität",theme:"Material Expressive verwenden",increase_temp:"Temperatur erhöhen (z.B. 0.5)",decrease_temp:"Temperatur senken (z.B. 0.5)",dual_icon:{default:"Standard-Symbol verwenden",options:"Doppelsymbol verwenden (Ein-/Aus-Zustand)."},fix_temperature:"Aktivieren, wenn die Temperatur nicht korrekt ist",false:"Inaktiv",true:"Aktiv",auto:"Automatisch"},pt={name:"Entitätsname",control_type:"Steuerungstyp",type:{generic:"Generisch (Schalter, Knopf...)",thermometer:"Klimatisierung, Belüftung...",automation:"Automatisierungen",scene:"Szenen",media:"Medien (Google, Alexa...)",state:"Status",action:"Aktionen",app_version:"Google Components Version"},dual_icon:{default:"Standard-Symbol verwenden",options:"Doppelsymbol verwenden (Ein-/Aus-Zustand)."},dual_text:{default:"Standardtext verwenden",text_on:"Text Ein",text_off:"Text Aus"}},mt={name:"Kartenname",entity_card:"Karte als Entität verwenden",entity:"Entität",dual_icon:{default:"Standard-Symbol verwenden",options:"Doppelsymbol verwenden (Aktiv/Inaktiv)."}},ft={name:"Kartenname",control_type:"Steuerungstyp",type:{light:"Lichter",cover:"Rollos"},entity:"Zu steuernde Entität",icon:"Benutzerdefiniertes Symbol (wenn leer, ändert sich automatisch je nach On/Off-Zustand)",percentage:"Wert in Prozent anzeigen",bold_text:"Text fett formatieren",colorize:"Schieberegler entsprechend der Lichtfarbe einfärben"},gt={on_text:"Text für eingeschaltete Lichter",off_text:"Text für ausgeschaltete Lichter",control_area:"Einen bestimmten Bereich steuern",area_id:"Zu steuernder Bereich"},_t={media_card:{no_content:"Keine Wiedergabeinhalte",playing:"Jetzt wiedergegeben"},remote:"Fernbedienung öffnen",cast:"Bildschirm übertragen",stop_cast:"Übertragung stoppen",open:"Öffnen",open_google:"Google Home öffnen"},vt={user_title:"Benutzerstandort auf der Karte anzeigen",user_description:"Wenn aktiviert, können Nicht-Administratoren den Standort anderer Benutzer auf der Karte sehen, indem sie auf deren Karten klicken. Wenn deaktiviert, sind Standortinformationen für Nicht-Administratoren nicht sichtbar.",add_button_title:"Schaltfläche zum Hinzufügen von Benutzern anzeigen",add_button_description:"Wenn aktiviert, können auch Nicht-Administratoren die Schaltfläche zum Hinzufügen eines neuen Benutzers sehen. Nicht-Administratoren können das Hinzufügen jedoch nicht abschließen und werden auf ihre eigene Profilseite weitergeleitet. Wenn deaktiviert, ist die Schaltfläche nur für Benutzer mit Administratorrechten sichtbar."},bt={upgrade:lt,common:ct,actions:dt,material_dashboard_card:ut,material_climate_card:ht,material_button_card:pt,material_control_card:mt,material_slider_card:ft,material_lights_card:gt,material_media_overlay:_t,material_users_card:vt},yt={message:"Atualize para o Material Home Assistant (Pro ou Ultimate) para mais recursos e opções de personalização!",button:"ATUALIZAR"},xt={version:"Versão",invalid_configuration:"Configuração inválida",show_warning:"Mostrar Aviso",no_entity_set:"Entidade não definida",no_entity:"Entidade não disponível",indoor:"Interno",on:"Ligado",off:"Desligado",offline:"Offline",auto:"Automático",eco:"Eco",heat:"Aquecer",cool:"Refrigerar",dry:"Secar",fan:"Ventilação",playing:"Reproduzindo",paused:"Pausado",idle:"Transmitir",presence:"Movimento",off_presence:"Sem movimento",today_at:"Hoje às",yesterday_at:"Ontem às",open:"Aberto",closed:"Fechado",opening:"Abrindo",closing:"Fechando",active:"Ativo",inactive:"Inativo",info_device:"Informações do Dispositivo",related:"Integração Relacionada",hidden:"Ocultar"},wt={automatic_action:"Habilitar ações automáticas",tap_action_title:"Ação ao tocar",hold_action_title:"Ação ao manter pressionado",arrow_action_title:"Ação no botão de seta",double_tap_action_title:"Ação ao tocar duas vezes",toggle:"Clique simples (Ligar/Desligar)",more_info:"Mostrar informações da entidade",navigate:"Navegar para uma página",call_service:"Executar um serviço",fire_dom:"Disparar evento DOM",assist:"Ativar assistente de voz",url:"Abrir link ou site",none:"Nenhuma ação",google_home:"Abrir Google Home",settings:"Abrir Configurações",select_option:"Selecionar opção",warning:"⚠️ Ações avançadas (JS, [[[]]], call-services complexos) devem ser configuradas via YAML."},At={description:"Configure o caminho de navegação quando um cartão é tocado.",cameras:"Caminho das Câmeras",cameras_name:"Câmeras",lighting:"Caminho da Iluminação",lighting_name:"Iluminação",lighting_label:"Luzes",wifi:"Caminho do Wi-Fi",wifi_name:"Wi-Fi",climate:"Caminho da Climatização",climate_name:"Climatização",device:"Dispositivo",devices:"Dispositivos",placeholder:"./caminho-ou-url"},$t={name:"Nome da Entidade",entity:"Entidade",theme:"Usar Material Expressive",increase_temp:"Aumentar Temperatura (ex: 0.5)",decrease_temp:"Diminuir Temperatura (ex: 0.5)",dual_icon:{default:"Usar Ícone Padrão",options:"Usar Ícone Duplo (estados Ligado e Desligado)."},fix_temperature:"Habilitar se a temperatura não estiver correta",false:"Inativo",true:"Ativo",auto:"Automático"},kt={name:"Nome da Entidade",control_type:"Tipo de Controle",type:{generic:"Genérico (Interruptor, Botão...)",thermometer:"Termômetro, Ventilação...",automation:"Automação",scene:"Cena",media:"Multimídia (Google, Alexa...)",state:"Estado",action:"Ação",app_version:"Versão dos Componentes Material"},dual_icon:{default:"Usar ícone padrão",options:"Usar ícone duplo (Elemento Ligado e Elemento Desligado)."},dual_text:{default:"Usar Texto Padrão",text_on:"Texto Ligado",text_off:"Texto Desligado"}},Et={name:"Nome do Cartão",entity_card:"Usar cartão como entidade",entity:"Entidade",dual_icon:{default:"Usar Ícone Padrão",options:"Usar Ícone Duplo (estados Ligado e Desligado)."}},Ct={name:"Nome do Cartão",control_type:"Tipo de Controle",type:{light:"Luz",cover:"Persiana"},entity:"Entidade a controlar",icon:"Ícone personalizado (se deixado em branco, muda automaticamente com base no estado Ligado/Desligado)",percentage:"Exibir valor como porcentagem",bold_text:"Estilo negrito para o texto",colorize:"Colorir o controle deslizante com base na cor da luz"},Ot={on_text:"Texto para Luzes LIGADAS",off_text:"Texto para Luzes DESLIGADAS",control_area:"Controlar uma Área específica",area_id:"Área a controlar"},Tt={media_card:{no_content:"Nada está sendo reproduzido",playing:"Reproduzindo agora"},remote:"Abrir Controle Remoto",cast:"Transmitir tela",stop_cast:"Parar transmissão",open:"Abrir ",open_google:"Abrir Google Home"},St={user_title:"Mostrar localização dos usuários no mapa",user_description:"Se ativado, usuários que não são administradores poderão ver a localização de outros usuários no mapa clicando em seus cartões. Se desativado, as informações de localização não serão visíveis para usuários que não são administradores.",add_button_title:"Mostrar botão de adicionar usuário",add_button_description:"Se ativado, usuários que não são administradores também poderão ver o botão para adicionar um novo usuário. No entanto, usuários não administradores não poderão concluir a adição e serão redirecionados para sua própria página de perfil. Se desativado, o botão será visível apenas para usuários com privilégios administrativos."},It={upgrade:yt,common:xt,actions:wt,material_dashboard_card:At,material_climate_card:$t,material_button_card:kt,material_control_card:Et,material_slider_card:Ct,material_lights_card:Ot,material_media_overlay:Tt,material_users_card:St},Mt={message:"升级到 Material Home Assistant (Pro 或 Ultimate) 以获取更多功能和自定义选项！",button:"立即升级"},jt={version:"版本",invalid_configuration:"无效配置",show_warning:"显示警告",no_entity_set:"未设置实体",no_entity:"实体不可用",indoor:"室内",on:"已打开",off:"已关闭",offline:"已离线",auto:"自动",eco:"节能",heat:"制暖",cool:"制冷",dry:"干燥",fan:"吹风",playing:"正在播放",paused:"暂停",idle:"投放",presence:"检测到活动",off_presence:"没有动作触发",today_at:"今天在",yesterday_at:"昨天在",open:"已开启",closed:"已关闭",opening:"正在开启",closing:"正在关闭",active:"已激活",inactive:"未激活",info_device:"设备信息",related:"相关集成",hidden:"隐藏"},Nt={automatic_action:"启用自动操作",tap_action_title:"点击操作",hold_action_title:"长按操作",arrow_action_title:"箭头按钮操作",double_tap_action_title:"双击操作",toggle:"单击（开/关）",more_info:"显示实体信息",navigate:"导航至页面",call_service:"运行一个服务",fire_dom:"发射 DOM 活动",assist:"激活语音助理",url:"打开网络链接",none:"无任何操作",google_home:"打开 Google Home",settings:"打开设置",select_option:"选择选项",warning:"⚠️ 进阶操作（JS、[[[]]], 复杂的服务调用）必须通过 YAML 来配置。"},Lt={description:"配置卡片点击时的导航路径。",cameras:"摄像头路径",cameras_name:"摄像头",lighting:"灯光路径",lighting_name:"灯光",lighting_label:"灯光",wifi:"Wi-Fi 路径",wifi_name:"Wi-Fi",climate:"温度控制路径",climate_name:"温度控制",device:"设备",devices:"设备",placeholder:"./URL 链接",default:"为点击操作使用默认配置（单击）",tap_type:"选择点击类型（单击、长按、双击）",single:"单击",hold:"长按",double:"双击",web:"在浏览器中使用单击操作（在移动版本中选择点击）"},Pt={name:"实体名称",entity:"实体",theme:"使用 Material Expressive",increase_temp:"调高温度步进（如 0.5）",decrease_temp:"调低温度步进（如 0.5）",dual_icon:{default:"使用默认图标",options:"使用双图标（打开和关闭状态）。"},fix_temperature:"温度显示错误时可启用",false:"未激活",true:"已激活",auto:"自动"},zt={name:"实体名称",control_type:"控制器类型",type:{generic:"通用（开关、按钮…）",thermometer:"恒温器、换气扇…",automation:"自动化",scene:"场景",media:"多媒体（Google、Alexa…）",state:"状态",action:"操作",app_version:"Material 组件版本"},dual_icon:{default:"使用默认图标",options:"使用双图标（元素打开和元素关闭）。"},dual_text:{default:"使用默认文本",text_on:"打开文本",text_off:"关闭文本"}},Rt={name:"卡片名称",entity_card:"将实体作为卡片",entity:"实体",dual_icon:{default:"使用默认图标",options:"使用双图标（打开和关闭状态）。"}},Ut={name:"卡片名称",control_type:"控制器类型",type:{light:"灯光",cover:"卷帘"},entity:"要控制的实体",icon:"自定义图标（如果留空，则根据开/关状态自动更改）",percentage:"将数值显示为百分比",bold_text:"使用加粗的文本风格",colorize:"根据灯光颜色为滑块着色"},Dt={on_text:"灯光开启时的显示文本",off_text:"灯光关闭时的显示文本",control_area:"控制特定区域",area_id:"要控制的区域"},Vt={media_card:{no_content:"没有东西在播放",playing:"正在播放"},remote:"打开遥控器",cast:"屏幕投放",stop_cast:"停止投放",open:"打开 ",open_google:"打开 Google Home"},Ft={user_title:"在地图上显示用户位置",user_description:"启用后，非管理员用户可以通过点击用户卡片查看其他用户在地图上的位置。禁用时，非管理员用户将无法看到位置信息。",add_button_title:"显示添加用户按钮",add_button_description:"启用后，非管理员用户也可以看到添加新用户的按钮。然而，非管理员用户无法完成添加操作，并将被重定向到自己的个人资料页面。禁用时，按钮仅对具有管理权限的用户可见。"},Ht={upgrade:Mt,common:jt,actions:Nt,material_dashboard_card:Lt,material_climate_card:Pt,material_button_card:zt,material_control_card:Rt,material_slider_card:Ut,material_lights_card:Dt,material_media_overlay:Vt,material_users_card:Ft},Gt={message:"Uppgradera till Material Home Assistant (Pro eller Ultimate) för fler funktioner och anpassningsalternativi!",button:"UPPGRADERA"},Yt={version:"Version",invalid_configuration:"Ogiltig konfiguration",show_warning:"Visa varning",no_entity_set:"Ingen entitet inställd",no_entity:"Entitet inte tillgänglig",indoor:"Inomhus",on:"På",off:"Av",offline:"Offline",auto:"Auto",eco:"Eco",heat:"Värme",dry:"Torka",cool:"Kyla",fan:"Fläkt",playing:"Spelar",paused:"Pausad",idle:"Inaktiv",presence:"Närvaro",off_presence:"Ingen närvaro",today_at:"Idag kl",yesterday_at:"Igår kl",open:"Öppen",closed:"Stängd",opening:"Öppnar",closing:"Stänger",active:"Aktiv",inactive:"Inaktiv",info_device:"Enhetsinformation",related:"Relaterad integration",hidden:"Dold"},Wt={automatic_action:"Aktivera automatiska åtgärder",tap_action_title:"Åtgärd vid klick",hold_action_title:"Åtgärd vid långtryck",arrow_action_title:"Åtgärd vid pilknapp",double_tap_action_title:"Åtgärd vid dubbelklick",toggle:"Enkelt klick (På/Av)",more_info:"Visa mer info om entitet",navigate:"Navigera till en sida",call_service:"Anropa en tjänst",fire_dom:"Skapa DOM-händelse",assist:"Aktivera röstassistent",url:"Öppna länk eller webbplats",none:"Ingen åtgärd",google_home:"Öppna Google Home",settings:"Öppna inställningar",select_option:"Välj alternativ",warning:"⚠️ Avancerade åtgärder (JS, [[[]]], komplexa call-service) måste konfigureras via YAML."},qt={description:"Konfigurera navigationssökväg när ett kort klickas.",cameras:"Kamerasökväg",cameras_name:"Kameror",lighting:"Belysningssökväg",lighting_name:"Belysning",lighting_label:"Ljus",wifi:"Wi-Fi-sökväg",wifi_name:"Wi-Fi",climate:"Klimatsökväg",climate_name:"Klimat",device:"Enhet",devices:"Enheter",placeholder:"./sökväg-eller-url"},Bt={name:"Entitetsnamn",entity:"Entitet",theme:"Använd Material Expressive",increase_temp:"Temperaturökning (t.ex. 0.5)",decrease_temp:"Temperatursänkning (t.ex. 0.5)",dual_icon:{default:"Använd standardikon",options:"Använd dubbel ikon (På och av element)."},fix_temperature:"Aktivera om temperaturen inte är korrekt",false:"Inte aktiv",true:"Aktiv",auto:"Automatisk"},Kt={name:"Entitetsnamn",control_type:"Kontrolltyp",type:{generic:"Generisk (Brytare, Knapp...)",thermometer:"Klimat, Ventilation...",automation:"Automatiseringar",scene:"Scener",media:"Multimedia (Google, Alexa...)",state:"Tillstånd",action:"Åtgärder",app_version:"Version av Material Home Components"},dual_icon:{default:"Använd standardikon",options:"Använd dubbel ikon (På och av element)."},dual_text:{default:"Använd standardtext",text_on:"På-text",text_off:"Av-text"}},Xt={name:"Kortnamn",entity_card:"Använd kortet som entitet",entity:"Entitet",dual_icon:{default:"Använd standardikon",options:"Använd dubbel ikon (Aktiv och inaktiv status)."}},Zt={name:"Kortnamn",control_type:"Kontrolltyp",type:{light:"Ljus",cover:"Persienner"},entity:"Entitet att kontrollera",icon:"Anpassad ikon (om tom, ändras automatiskt baserat på På/Av-status)",percentage:"Visa procentvärde",bold_text:"Fetstilad text",colorize:"Färglägg skjutreglaget baserat på ljusets färg"},Jt={on_text:"Text för tända ljus",off_text:"Text för släckta ljus",control_area:"Kontrollera ett specifikt område",area_id:"Område att kontrollera"},Qt={media_card:{no_content:"Inget innehåll spelas",playing:"Spelas nu"},remote:"Öppna fjärrkontroll",cast:"Casta skärm",stop_cast:"Stoppa casting",open:"Öppna",open_google:"Öppna Google Home"},ei={user_title:"Visa användares position på kartan",user_description:"Om aktiverad kan icke-admin-användare se andra användares position på kartan genom att klicka på deras kort. Om inaktiverad kommer lokaliseringsinformation inte att vara synlig för icke-admin-användare.",add_button_title:"Visa knapp för att lägga till användare",add_button_description:"Om aktiverad kan även icke-admin-användare se knappen för att lägga till en ny användare. Dock kan icke-admin-användare inte slutföra tillägget och kommer att omdirigeras till sin egen profilsida. Om inaktiverad kommer knappen endast att vara synlig för användare med administrativa privilegier."},ti={upgrade:Gt,common:Yt,actions:Wt,material_dashboard_card:qt,material_climate_card:Bt,material_button_card:Kt,material_control_card:Xt,material_slider_card:Zt,material_lights_card:Jt,material_media_overlay:Qt,material_users_card:ei},ii={message:"Upgrade naar Material Home Assistant (Pro of Ultimate) voor meer functies en aanpassingsmogelijkheden!",button:"UPGRADEN"},ni={version:"Versie",invalid_configuration:"Ongeldige configuratie",show_warning:"Waarschuwing tonen",no_entity_set:"Geen entiteit ingesteld",no_entity:"Entiteit niet beschikbaar",indoor:"Binnen",on:"Aan",off:"Uit",offline:"Offline",auto:"Auto",eco:"Eco",heat:"Verwarmen",cool:"Koelen",dry:"Ontvochtigen",fan:"Ventilator",playing:"Wordt afgespeeld",paused:"Gepauzeerd",idle:"Casten",presence:"Beweging",off_presence:"Geen beweging",today_at:"Vandaag om",yesterday_at:"Gisteren om",open:"Open",closed:"Gesloten",opening:"Wordt geopend",closing:"Wordt gesloten",active:"Actief",inactive:"Inactief",info_device:"Apparaatinformatie",related:"Gerelateerde integratie",hidden:"Verbergen"},ai={automatic_action:"Automatische acties inschakelen",tap_action_title:"Actie bij tikken",hold_action_title:"Actie bij vasthouden",arrow_action_title:"Actie bij pijlknop",double_tap_action_title:"Actie bij dubbel tikken",toggle:"Enkele klik (Aan/Uit)",more_info:"Entiteitsinformatie tonen",navigate:"Naar een pagina navigeren",call_service:"Service uitvoeren",fire_dom:"DOM-event activeren",assist:"Spraakassistent activeren",url:"Link of website openen",none:"Geen actie",google_home:"Google Home openen",settings:"Instellingen openen",select_option:"Optie selecteren",warning:"⚠️ Geavanceerde acties (JS, [[[]]], complexe service-calls) moeten via YAML worden geconfigureerd."},oi={description:"Configureer het navigatiepad wanneer op een kaart wordt getikt.",cameras:"Camera-pad",cameras_name:"Camera’s",lighting:"Verlichtingspad",lighting_name:"Verlichting",lighting_label:"Lampen",wifi:"Wi-Fi-pad",wifi_name:"Wi-Fi",climate:"Klimaatpad",climate_name:"Klimaat",device:"Apparaat",devices:"Apparaten",placeholder:"./pad-of-url"},si={name:"Entiteitsnaam",entity:"Entiteit",theme:"Material Expressive gebruiken",increase_temp:"Temperatuur verhogen (bijv. 0.5)",decrease_temp:"Temperatuur verlagen (bijv. 0.5)",dual_icon:{default:"Standaardpictogram gebruiken",options:"Dubbel pictogram gebruiken (Aan- en Uit-status)."},fix_temperature:"Inschakelen als de temperatuur niet correct is",false:"Niet actief",true:"Actief",auto:"Auto"},ri={name:"Entiteitsnaam",control_type:"Type bediening",type:{generic:"Algemeen (Schakelaar, Knop...)",thermometer:"Thermometer, Ventilatie...",automation:"Automatisering",scene:"Scène",media:"Multimedia (Google, Alexa...)",state:"Status",action:"Actie",app_version:"Versie van Material Components"},dual_icon:{default:"Standaardpictogram gebruiken",options:"Dubbel pictogram gebruiken (Element Aan en Element Uit)."},dual_text:{default:"Standaardtekst gebruiken",text_on:"Tekst Aan",text_off:"Tekst Uit"}},li={name:"Kaartnaam",entity_card:"Kaart als entiteit gebruiken",entity:"Entiteit",dual_icon:{default:"Standaardpictogram gebruiken",options:"Dubbel pictogram gebruiken (Aan- en Uit-status)."}},ci={name:"Kaartnaam",control_type:"Type bediening",type:{light:"Licht",cover:"Afdekking"},entity:"Te bedienen entiteit",icon:"Aangepast pictogram (indien leeg, verandert automatisch op basis van Aan/Uit-status)",percentage:"Waarde als percentage weergeven",bold_text:"Vette tekststijl",colorize:"Schuifregelaar inkleuren op basis van de lichtkleur"},di={on_text:"Tekst voor Lampen AAN",off_text:"Tekst voor Lampen UIT",control_area:"Een specifiek gebied bedienen",area_id:"Te bedienen gebied"},ui={media_card:{no_content:"Er wordt niets afgespeeld",playing:"Nu aan het afspelen"},remote:"Afstandsbediening openen",cast:"Scherm casten",stop_cast:"Casten stoppen",open:"Openen ",open_google:"Google Home openen"},hi={user_title:"Gebruikerslocatie op de kaart tonen",user_description:"Indien ingeschakeld kunnen niet-beheerdergebruikers de locatie van andere gebruikers op de kaart zien door op hun kaarten te klikken. Indien uitgeschakeld is locatie-informatie niet zichtbaar voor niet-beheerders.",add_button_title:"Knop ‘gebruiker toevoegen’ tonen",add_button_description:"Indien ingeschakeld kunnen niet-beheerdergebruikers ook de knop zien om een nieuwe gebruiker toe te voegen. Zij kunnen de toevoeging echter niet voltooien en worden doorgestuurd naar hun eigen profielpagina. Indien uitgeschakeld is de knop alleen zichtbaar voor gebruikers met beheerdersrechten."},pi={upgrade:ii,common:ni,actions:ai,material_dashboard_card:oi,material_climate_card:si,material_button_card:ri,material_control_card:li,material_slider_card:ci,material_lights_card:di,material_media_overlay:ui,material_users_card:hi};const mi={en:Object.freeze({__proto__:null,actions:ge,common:fe,default:ke,material_button_card:be,material_climate_card:ve,material_control_card:ye,material_dashboard_card:_e,material_lights_card:we,material_media_overlay:Ae,material_slider_card:xe,material_users_card:$e,upgrade:me}),it:Object.freeze({__proto__:null,actions:Oe,common:Ce,default:ze,material_button_card:Ie,material_climate_card:Se,material_control_card:Me,material_dashboard_card:Te,material_lights_card:Ne,material_media_overlay:Le,material_slider_card:je,material_users_card:Pe,upgrade:Ee}),fr:Object.freeze({__proto__:null,actions:De,common:Ue,default:Ke,material_button_card:He,material_climate_card:Fe,material_control_card:Ge,material_dashboard_card:Ve,material_lights_card:We,material_media_overlay:qe,material_slider_card:Ye,material_users_card:Be,upgrade:Re}),es:Object.freeze({__proto__:null,actions:Je,common:Ze,default:rt,material_button_card:tt,material_climate_card:et,material_control_card:it,material_dashboard_card:Qe,material_lights_card:at,material_media_overlay:ot,material_slider_card:nt,material_users_card:st,upgrade:Xe}),de:Object.freeze({__proto__:null,actions:dt,common:ct,default:bt,material_button_card:pt,material_climate_card:ht,material_control_card:mt,material_dashboard_card:ut,material_lights_card:gt,material_media_overlay:_t,material_slider_card:ft,material_users_card:vt,upgrade:lt}),pt_BR:Object.freeze({__proto__:null,actions:wt,common:xt,default:It,material_button_card:kt,material_climate_card:$t,material_control_card:Et,material_dashboard_card:At,material_lights_card:Ot,material_media_overlay:Tt,material_slider_card:Ct,material_users_card:St,upgrade:yt}),zh_CN:Object.freeze({__proto__:null,actions:Nt,common:jt,default:Ht,material_button_card:zt,material_climate_card:Pt,material_control_card:Rt,material_dashboard_card:Lt,material_lights_card:Dt,material_media_overlay:Vt,material_slider_card:Ut,material_users_card:Ft,upgrade:Mt}),sv:Object.freeze({__proto__:null,actions:Wt,common:Yt,default:ti,material_button_card:Kt,material_climate_card:Bt,material_control_card:Xt,material_dashboard_card:qt,material_lights_card:Jt,material_media_overlay:Qt,material_slider_card:Zt,material_users_card:ei,upgrade:Gt}),nl:Object.freeze({__proto__:null,actions:ai,common:ni,default:pi,material_button_card:ri,material_climate_card:si,material_control_card:li,material_dashboard_card:oi,material_lights_card:di,material_media_overlay:ui,material_slider_card:ci,material_users_card:hi,upgrade:ii})};function fi(e,t="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let a;try{a=e.split(".").reduce((e,t)=>e[t],mi[n])}catch(t){a=e.split(".").reduce((e,t)=>e[t],mi.en)}return void 0===a&&(a=e.split(".").reduce((e,t)=>e[t],mi.en)),""!==t&&""!==i&&(a=a.replace(t,i)),a}var gi,_i;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(gi||(gi={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(_i||(_i={}));const vi=["closed","locked","off"],bi=(e,t,i,n)=>{n=n||{},i=null==i?{}:i;const a=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return a.detail=i,e.dispatchEvent(a),a},yi=e=>{bi(window,"haptic",e)},xi=(e,t,i=!1)=>{i?history.replaceState(null,"",t):history.pushState(null,"",t),bi(window,"location-changed",{replace:i})},wi=(e,t,i,n)=>{if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some(e=>e.user===t.user.id)||(yi("warning"),confirm(n.confirmation.text||`Are you sure you want to ${n.action}?`)))switch(n.action){case"more-info":(i.entity||i.camera_image)&&bi(e,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&xi(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(((e,t)=>{((e,t,i=!0)=>{const n=function(e){return e.substr(0,e.indexOf("."))}(t),a="group"===n?"homeassistant":n;let o;switch(n){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}e.callService(a,o,{entity_id:t})})(e,t,vi.includes(e.states[t].state))})(t,i.entity),yi("success"));break;case"call-service":{if(!n.service)return void yi("failure");const[e,i]=n.service.split(".",2);t.callService(e,i,n.service_data,n.target),yi("success");break}case"fire-dom-event":bi(e,"ll-custom",n)}};function Ai(e,t){if(!e)return;const i=document.createElement("span");i.classList.add("ripple");const n=e.getBoundingClientRect(),a=Math.max(n.width,n.height);i.style.width=i.style.height=`${a}px`;const o=t.clientX-n.left-a/2,s=t.clientY-n.top-a/2;i.style.left=`${o}px`,i.style.top=`${s}px`,Object.assign(i.style,{position:"absolute",borderRadius:"50%",background:"rgba(255, 255, 255, 0.3)",transform:"scale(0)",animation:"ripple-animation 600ms ease-out",pointerEvents:"none",zIndex:"1"});const r=getComputedStyle(e);"static"===r.position&&(e.style.position="relative"),"hidden"!==r.overflow&&(e.style.overflow="hidden"),e.appendChild(i),i.addEventListener("animationend",()=>i.remove())}const $i={type:"custom:material-button-card"};function ki(e,t,i,n=e=>e){null!=t&&""!==t&&i.setProperty(e,n(t))}const Ei={dark:{offline:{climate:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"},button:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",percentage:"var(--md-sys-color-outline, #717173)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"},light:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",percentage:"var(--md-sys-color-outline, #717173)",slider:"var(--md-sys-color-surface-container-highest, #2c2c2e)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"}},on:{climate:{material:{title:"#fedcca",subtitle:"#e6c0b2",icon:"#fedcca",button:"#4b332b",background:"rgba(92, 64, 53, 0.85)"},material_cool:{title:"#cbe5fe",subtitle:"#b3d7f0",icon:"#cbe5fe",button:"#143546",background:"rgba(26, 61, 82, 0.85)"},material_dry:{title:"#fff2c2",subtitle:"#e6d9a8",icon:"#fff2c2",button:"#4d4520",background:"rgba(102, 85, 26, 0.85)"},material_fan:{title:"#c2f5d9",subtitle:"#a8e9c6",icon:"#c2f5d9",button:"#1f3a2f",background:"rgba(32, 77, 58, 0.85)"},material_heat:{title:"#ffe1c9",subtitle:"#f2c3a4",icon:"#ffe1c9",button:"#5b2d1a",background:"rgba(130, 52, 24, 0.85)"},material_eco:{title:"#d0f5c2",subtitle:"#b5e8a8",icon:"#d0f5c2",button:"#23401f",background:"rgba(42, 77, 32, 0.85)"},default:{title:"var(--md-sys-color-on-surface-variant, #c3c3c5)",subtitle:"var(--md-sys-color-on-surface-variant, #c3c3c5)",icon:"var(--md-sys-color-on-surface-variant, #c3c3c5)",button:"var(--md-sys-color-surface-variant, #5c5b60)",background:"var(--md-sys-color-surface-container, rgba(65, 66, 70, 0.83))"}},button:{title:"var(--md-sys-color-on-secondary-container, #d8e3f7)",icon:"var(--md-sys-color-on-secondary-container, #d8e3f7)",percentage:"var(--md-sys-color-on-secondary-container, #d8e3f7)",back_slider_color:"color-mix(in srgb, var(--md-sys-color-secondary-container) 70%, black)",background:"var(--md-sys-color-secondary-container, #3e4758)"},light:{title:"#ffe083",icon:"#ffe083",percentage:"#ffe083",slider:"#50472a",background:"#333029"}},off:{climate:{default:{title:"var(--md-sys-color-on-surface-variant, #c3c3c5)",subtitle:"var(--md-sys-color-on-surface-variant, #c3c3c5)",icon:"var(--md-sys-color-on-surface-variant, #c3c3c5)",button:"var(--md-sys-color-surface-variant, #5c5b60)",background:"var(--md-sys-color-surface-container, #414246)"}},button:{title:"var(--md-sys-color-on-surface-variant, #e3e3e5)",icon:"var(--md-sys-color-on-surface-variant, #e3e3e5)",percentage:"var(--md-sys-color-on-surface-variant, #e3e3e5)",background:"var(--md-sys-color-surface-container, #292a2e)"},light:{title:"var(--md-sys-color-on-surface-variant, #e3e3e5)",icon:"var(--md-sys-color-on-surface-variant, #e3e3e5)",percentage:"var(--md-sys-color-on-surface-variant, #e3e3e5)",slider:"var(--md-sys-color-surface-container, #292a2e)",background:"var(--md-sys-color-surface-container, #292a2e)"}}},light:{offline:{climate:{title:"var(--md-sys-color-outline, #949496)",icon:"var(--md-sys-color-outline, #949496)",background:"var(--md-sys-color-surface-container-highest, rgba(223, 223, 225, 0.85))"},button:{title:"var(--md-sys-color-outline, #949496)",icon:"var(--md-sys-color-outline, #949496)",percentage:"var(--md-sys-color-outline, #949496)",background:"var(--md-sys-color-surface-container-highest, #dfdfe1)"},light:{title:"var(--md-sys-color-outline, #959597)",icon:"var(--md-sys-color-outline, #959597)",percentage:"var(--md-sys-color-outline, #959597)",slider:"var(--md-sys-color-surface-container-highest, #dfdfe1)",background:"var(--md-sys-color-surface-container-highest, #dfdfe1)"}},on:{climate:{material:{title:"#812800",subtitle:"#812800",icon:"#812800",button:"rgba(245, 180, 150, 0.6)",background:"rgba(258, 193.8, 166, 0.3)"},material_cool:{title:"#006b9c",subtitle:"#006b9c",icon:"#006b9c",button:"#cbe5fe",background:"#e8f1ff"},material_dry:{title:"#8c6b00",subtitle:"#8c6b00",icon:"#8c6b00",button:"#fff2c2",background:"#fff9e6"},material_fan:{title:"#006d48",subtitle:"#006d48",icon:"#006d48",button:"#b8f0d3",background:"#d9f6e6"},material_heat:{title:"#9b2f00",subtitle:"#9b2f00",icon:"#9b2f00",button:"#ffd9c2",background:"#ffe8dc"},material_eco:{title:"#2d6b00",subtitle:"#2d6b00",icon:"#2d6b00",button:"#d0f5c2",background:"#eaf9e6"},default:{title:"var(--md-sys-color-on-surface-variant, #525252)",subtitle:"var(--md-sys-color-on-surface-variant, #525252)",icon:"var(--md-sys-color-on-surface-variant, #525252)",button:"var(--md-sys-color-surface-variant, #c1c1c3)",background:"var(--md-sys-color-surface-container, rgba(221, 221, 223, 0.83))"}},button:{title:"var(--md-sys-color-on-secondary-container, #131c2b)",icon:"var(--md-sys-color-on-secondary-container, #131c2b)",percentage:"var(--md-sys-color-on-secondary-container, #131c2b)",back_slider_color:"color-mix(in srgb, var(--md-sys-color-secondary-container) 70%, white)",background:"var(--md-sys-color-secondary-container, #d8e3f7)"},light:{title:"#745b00",icon:"#745b00",percentage:"#745b00",slider:"#ffe083",background:"#feefc8"}},off:{climate:{default:{title:"var(--md-sys-color-on-surface-variant, #525252)",subtitle:"var(--md-sys-color-on-surface-variant, #525252)",icon:"var(--md-sys-color-on-surface-variant, #525252)",button:"var(--md-sys-color-surface-variant, #c1c1c3)",background:"var(--md-sys-color-surface-container, #dddddf)"}},button:{title:"var(--md-sys-color-on-surface-variant, #1b1b1d)",icon:"var(--md-sys-color-on-surface-variant, #1b1b1d)",percentage:"var(--md-sys-color-on-surface-variant, #1b1b1d)",background:"var(--md-sys-color-surface-container, #e8e8ea)"},light:{title:"var(--md-sys-color-on-surface-variant, #1b1b1d)",icon:"var(--md-sys-color-on-surface-variant, #1b1b1d)",percentage:"var(--md-sys-color-on-surface-variant, #1b1b1d)",slider:"var(--md-sys-color-surface-container, #e8e8ea)",background:"var(--md-sys-color-surface-container, #e8e8ea)"}}}};var Ci,Oi,Ti,Si,Ii,Mi;function ji(e){return Object.values(Ti).includes(e)}function Ni(e){const t=e.device_class,i=e.state_class;return"string"==typeof t&&ji(t)?t:"string"==typeof i&&ji(i)?i:void 0}function Li(e){const t=Number.parseInt(e);return!(!isNaN(t)&&0!==t)&&Object.values(Ii).includes(e)}function Pi(e,t=""){const i=Number.parseInt(e);return!(!isNaN(i)&&0!==i)&&(!(t===Ci.SCENE&&"unknown"===e.toLowerCase()||t===Ci.STATE&&"unavailable"!=e.toLowerCase())&&(!function(e){return Object.values(Ii).includes(e)||Object.values(Mi).includes(e)}(e)&&("offline"===e.toLowerCase()||"unavailable"===e.toLowerCase())))}!function(e){e.GENERIC="generic",e.THERMOMETER="thermometer",e.AUTOMATION="automation",e.SCENE="scene",e.MEDIA_PLAYER="media_player",e.STATE="state",e.ACTION="action",e.APP_VERSION="app_version",e.LIGHT="light",e.COVER="cover"}(Ci||(Ci={})),function(e){e.BINARY_SENSOR="binary_sensor",e.SENSOR="sensor",e.SWITCH="switch",e.LIGHT="light",e.COVER="cover",e.BUTTON="button",e.NUMBER="number",e.FAN="fan",e.CLIMATE="climate"}(Oi||(Oi={})),function(e){e.MOTION="motion",e.OCCUPANCY="occupancy",e.PRESENCE="presence",e.DOOR="door",e.CONNECTIVITY="connectivity",e.MEASUREMENT="measurement",e.BATTERY="battery",e.TEMPERATURE="temperature",e.HUMIDITY="humidity",e.TIMESTAMP="timestamp",e.TAMPER="tamper",e.ILLUMINANCE="illuminance",e.NONE="none"}(Ti||(Ti={})),function(e){e.ASCIUGATRICE="asciugatrice",e.DRYER="dryer",e.HELPER="helper",e.TEMPLATE="template",e.DIALOG_HIDDEN="dialog_hidden"}(Si||(Si={})),function(e){e.ON="on",e.AUTO="auto",e.HEAT="heat",e.COOL="cool",e.HEAT_COOL="heat_cool",e.FAN_ONLY="fan_only",e.FAN="fan",e.DRY="dry",e.ECO="eco",e.IDLE="idle",e.PLAYING="playing",e.PAUSED="paused",e.OPEN="open",e.OPENING="opening",e.IDLE_2="Idle",e.LOCKED="locked",e.CLEANING="cleaning",e.RETURNING="returning"}(Ii||(Ii={})),function(e){e.OFF="off",e.CLOSED="closed",e.CLOSING="closing",e.UNLOCKED="unlocked"}(Mi||(Mi={})),Object.assign(Object.assign({},Ii),Mi);const zi="2.2.4",Ri="https://materialhomeassistant.com/#pricing";function Ui(e,t){return null!=e?e:t}function Di(e){const t=new Date(e);if(isNaN(t.getTime()))return e;const i=new Date,n=new Date(i.getFullYear(),i.getMonth(),i.getDate()),a=new Date(n);a.setDate(n.getDate()-1);const o=new Date(t.getFullYear(),t.getMonth(),t.getDate());return o.getTime()===n.getTime()?`${fi("common.today_at")} ${t.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}`:o.getTime()===a.getTime()?`${fi("common.yesterday_at")} ${t.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}`:function(e){const t=new Date(e);if(isNaN(t.getTime()))return e;const i=new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(t);return i.replace(/([a-zàèéìòù]+)/,e=>e.charAt(0).toUpperCase()+e.slice(1))}(e)}function Vi(e){return null==e||("string"==typeof e?0===e.trim().length:"number"==typeof e?0===e||Number.isNaN(e):Array.isArray(e)?0===e.length:"object"==typeof e&&0===Object.keys(e).length)}function Fi(e,t){return Vi(t)?t:"true"==e||"auto"==e&&t<7?5*t:t}function Hi(e,t=Oi.CLIMATE){switch(e){case Ii.AUTO:case Ii.HEAT:case Ii.HEAT_COOL:return"material";case Ii.COOL:return"material_cool";case Ii.FAN_ONLY:case Ii.FAN:return"material_fan";case Ii.DRY:return"material_dry";case Ii.ECO:return"material_eco";default:return t&&t==Oi.FAN?"material_fan":"material"}}var Gi;function Yi(e,t,i){var n,a,o,s,r,l,c;const d=e.entity_id.split(".")[0];let u=e.state;const h=null!==(n=t.control_type)&&void 0!==n?n:"generic",p=null===(a=t.use_default_icon)||void 0===a||a,m=Li(u);if("string"==typeof t.icon&&t.icon.trim().startsWith("[[[")&&t.icon.trim().endsWith("]]]"))try{const n=t.icon.trim().slice(3,-3),a=new Function("entity","state","hass",n)(e,u,i);if(a&&"string"==typeof a)return a}catch(e){return console.warn("Error evaluating icon template:",e),"mdi:alert-circle-outline"}if(!p)return t.dual_icon?m?t.icon_on||`mdi:${d}`:t.icon_off||`mdi:${d}`:t.icon||`mdi:${d}`;const f=null===(s=null===(o=null==i?void 0:i.entities)||void 0===o?void 0:o[null==e?void 0:e.entity_id])||void 0===s?void 0:s.icon;if(f)return f;const g=null===(r=null==e?void 0:e.attributes)||void 0===r?void 0:r.icon;if(g)return g;const _=!Pi(u,h);switch(d){case Oi.SWITCH:return m?"m3rf:switch":"m3r:switch";case Oi.NUMBER:return _||m?"m3rf:settings-input-component":"m3r:settings-input-component";case Oi.FAN:return _&&m?"m3of:mode-fan":"m3o:mode-fan"}switch(h){case Ci.LIGHT:return null==t.icon||"m3of:lightbulb"===t.icon||"m3r:lightbulb"===t.icon?m?"m3of:lightbulb":"m3r:lightbulb":t.icon;case Ci.COVER:return null==t.icon?m?"m3rf:blinds":"m3rf:blinds-closed":t.icon;case Ci.THERMOMETER:{const t=null===(l=e.attributes)||void 0===l?void 0:l.preset_mode;switch(u=t&&"eco"==t?t:e.state,u){case"auto":case"heat_cool":return"mdi:thermostat-auto";case"heat":return"mdi:fire";case"dry":return"m3of:cool-to-dry";case"fan":case"fan_only":return"m3of:mode-fan";case"cool":return"mdi:snowflake";case"eco":return"m3rf:eco";case"off":case"unavailable":return"m3s:thermometer";default:return"m3of:thermometer"}}case Ci.SCENE:return"mdi:creation-outline";case Ci.MEDIA_PLAYER:const n=i.entities[t.entity].device_id,a=i.devices[n].model||null;if(a)switch(a){case Gi.NEST_MINI:return m?"m3of:nest-mini":"m3o:nest-mini";case Gi.GOOGLE_HOME:return m?"m3of:home-speaker":"m3o:home-speaker";case Gi.NEST_HUB:return m?"m3of:nest-display":"m3o:nest-display";case Gi.GOOGLE_CAST_GROUP:return m?"m3rf:speaker-group":"m3r:speaker-group";default:return m?"m3rf:tv-gen":"m3r:tv-gen"}break;case Ci.GENERIC:case Ci.STATE:if(d==Oi.BINARY_SENSOR||d==Oi.SENSOR){switch(Ni(e.attributes)){case Ti.CONNECTIVITY:return m?"m3of:nest-wifi-router":"m3o:nest-wifi-router";case Ti.PRESENCE:case Ti.OCCUPANCY:return m?"m3rf:sensor-occupied":"m3r:sensor-occupied";case Ti.MOTION:return m?"m3rf:sensors-krx":"m3r:sensors-krx";case Ti.BATTERY:if(_){const e=Number.parseInt(u);return e>=90&&e<=100?"m3of:battery-android-0":e>=70&&e<90?"m3of:battery-android-5":e>=50&&e<70?"m3of:battery-android-4":e>=30&&e<50?"m3of:battery-android-3":e>=10&&e<30?"m3of:battery-android-2":e>=5&&e<10?"m3of:battery-android-1":e<5?"m3of:battery-android-0":"m3of:battery-android-5"}return"m3r:battery-android-alert";case Ti.MEASUREMENT:return"mdi:scale-bathroom";case Ti.DOOR:return m?"m3rf:sensor-door":"m3r:sensor-door";case Ti.TEMPERATURE:return _?"m3rf:temp-preferences-eco":"m3r:temp-preferences-eco";case Ti.HUMIDITY:return _?"m3rf:humidity-percentage":"m3r:humidity-percentage";case Ti.TAMPER:return _||m?"m3rf:tamper-detection-on":"m3r:tamper-detection-on";case Ti.ILLUMINANCE:return _||m?"m3rf:light-mode":"m3r:light-mode"}}}if(null===(c=e.attributes.icon)||void 0===c?void 0:c.trim())return e.attributes.icon;const v=i.entities[t.entity];return v&&v.icon?v.icon:`mdi:${d}`}function Wi(e,t,i,n="false",a=!1,o){var s,r,l,c;if(t===Ci.APP_VERSION)return`V${zi}`;if(Vi(e))return"";const d=null!==(r=null===(s=e.entity_id)||void 0===s?void 0:s.split(".")[0])&&void 0!==r?r:"",u=Li(e.state),h=(null==o?void 0:o.formatEntityState)?o.formatEntityState(e):e.state,p=Ni(e.attributes);if(Pi(e.state))return fi("common.offline");if(d===Oi.FAN){if(!u)return h;return`${h} • ${o.formatEntityAttributeValue(e,"percentage")}`}if(t===Ci.THERMOMETER&&!i){const{preset_mode:t,temperature:i,current_temperature:s}=null!==(l=e.attributes)&&void 0!==l?l:{},r="eco"===t?`${fi("common.eco")} • `:"";return`${!u&&!Vi(i)&&a?fi("common.indoor"):h} • ${r}${o?o.formatEntityAttributeValue(e,"current_temperature",Fi(n,s)):`${Fi(n,s)}°`}`}if(t===Ci.MEDIA_PLAYER&&!i){if(!u)return"";const t=Ui(null===(c=e.attributes)||void 0===c?void 0:c.app_name,"");return t?`${h} • ${t}`:h}return p===Ti.TIMESTAMP||"event"===d?Di(e.state):t===Ci.AUTOMATION?fi(u?"common.active":"common.inactive"):(null==o?void 0:o.formatEntityState)?o.formatEntityState(e):e.state}function qi(e,t){if(e.name)return e.name;const i=t.states[e.entity];if(i&&i.attributes.friendly_name)return i.attributes.friendly_name;if(t&&t.entities&&t.entities[e.entity]){const i=t.entities[e.entity].device_id;return t.devices[i].name}}function Bi(e,t){return Pi(e.state)?fi("common.offline"):e.state}function Ki(e){e.open=!1,e.dispatchEvent(new CustomEvent("close-dialog",{bubbles:!0,composed:!0})),e.remove()}function Xi(e,t,i){var n;const a=null==t?void 0:t.entity;if(!a||!i)return;Ki(e);const o=new CustomEvent("hass-more-info",{detail:{entityId:a},bubbles:!0,composed:!0});null===(n=document.querySelector("home-assistant"))||void 0===n||n.dispatchEvent(o)}!function(e){e.NEST_MINI="Google Nest Mini",e.GOOGLE_HOME="Google Home",e.NEST_HUB="Google Nest Hub",e.GOOGLE_TV_STREAMER="Google TV Streamer",e.GOOGLE_CAST_GROUP="Google Cast Group"}(Gi||(Gi={}));let Zi=class extends re{constructor(){super(...arguments),this.open=!1,this._menuOpen=!1}render(){var e,t,i,n,a,o,s,r;const l=this.config.entity,c=this.hass.entities[l],d=null==c?void 0:c.device_id,u=this.hass.states[l];let h,p=[u];!c.labels.includes(Si.HELPER)&&!c.labels.includes(Si.TEMPLATE)&&(h=Object.values(this.hass.entities).filter(e=>e.device_id===d).filter(e=>{var t;return!(null===(t=e.labels)||void 0===t?void 0:t.includes(Si.DIALOG_HIDDEN))}).map(e=>e.entity_id),p=h.map(e=>this.hass.states[e]).filter(e=>void 0!==e));const m=null===(e=this.hass.devices[d])||void 0===e?void 0:e.area_id,f=null===(t=this.hass.areas[m])||void 0===t?void 0:t.name,g=null!==(a=null!==(i=this.config.name)&&void 0!==i?i:null===(n=null==u?void 0:u.attributes)||void 0===n?void 0:n.friendly_name)&&void 0!==a?a:null==u?void 0:u.entity_id,_=(null===(s=null===(o=this.hass)||void 0===o?void 0:o.themes)||void 0===s?void 0:s.darkMode)?"dark":"light",v=function(e){switch(Ni(e.attributes)){case Ti.BATTERY:case Ti.HUMIDITY:case Ti.TEMPERATURE:return!Pi(e.state)}return Li(e.state)}(u),b=null!==(r=Yi(u,this.config,this.hass))&&void 0!==r?r:"m3r:sensors-krx",y=Bi(u);return H`
      <ha-adaptive-dialog
        .open=${this.open}
        .hass=${this.hass}
        flexcontent
        @closed=${()=>Ki(this)}
      >
        <!-- Navigation Icon (Close Button) -->
        <ha-icon-button
          slot="headerNavigationIcon"
          data-dialog="close"
          class="close-btn"
        >
          <ha-icon
            icon="m3rf:close"
            style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
            title="Close"
          ></ha-icon>
        </ha-icon-button>

        <!-- Header Title -->
        <div
          slot="headerTitle"
          class="header-title"
          style="${f?"height: 40px;":"height: 100%; justify-content: center;"} flex: 1;"
          @click=${()=>function(e){var t;const i=null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelector("ha-dialog");i&&(i.classList.contains("large")?i.classList.remove("large"):i.classList.add("large"))}(this)}
        >
          ${f?H`<p class="breadcrumb">${f}</p>`:H``}
          <p class="main-title ellipsis">${g}</p>
        </div>
        <div slot="headerActionItems" class="header-right">
          <ha-icon-button
            @click=${()=>Xi(this,this.config,this.hass)}
            class="settings-btn"
          >
            <ha-icon
              icon="m3r:insert-chart"
              style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
              title="History"
            ></ha-icon>
          </ha-icon-button>
          <!--<ha-icon-button @click="" class="settings-btn">
              <ha-icon
                icon="m3r:settings"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Settings"
              ></ha-icon>
            </ha-icon-button>-->
          <!-- Menu dropdown -->
          <ha-dropdown
            placement="bottom-end"
            size="medium"
            fixed
            @click=${e=>e.stopPropagation()}
            @opened=${()=>this._menuOpen=!0}
            @closed=${()=>this._menuOpen=!1}
          >
            <ha-icon-button slot="trigger"
              ><ha-icon
                icon="mdi:dots-vertical"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Menu"
              ></ha-icon
            ></ha-icon-button>

            <ha-dropdown-item
              @click=${()=>function(e,t,i){var n;const a=t.entity;if(!a||!i)return;if(!i.states[a])return;const o=null===(n=i.entities)||void 0===n?void 0:n[a],s=null==o?void 0:o.device_id;Ki(e),setTimeout(()=>{s?xi(0,`/config/devices/device/${s}`):Xi(e,t,i)},100)}(this,this.config,this.hass)}
            >
              <ha-icon
                icon="mdi:devices"
                style="padding-right: 10px;"
              ></ha-icon>
              ${fi("common.info_device")}
            </ha-dropdown-item>

            <ha-dropdown-item
              @click=${()=>function(e,t,i){var n;const a=t.entity;if(!a||!i)return;const o=null===(n=i.entities[a])||void 0===n?void 0:n.platform;Ki(e),setTimeout(()=>{o?xi(0,`/config/integrations/integration/${o}`):Xi(e,t,i)},100)}(this,this.config,this.hass)}
            >
              <ha-icon icon="m3r:info" style="padding-right: 10px;"></ha-icon>
              ${fi("common.related")}
            </ha-dropdown-item>
          </ha-dropdown>
        </div>

        <!-- Contenuto -->
        <div class="content">
          <div style="display: flex; justify-content: center;">
            <div
              class="circle ${v?"present":"absent"} ${_}"
            >
              <div class="inner">
                <!--<ha-icon
                  icon=${v?"m3rf:sensor-door":"m3r:sensor-door"}
                  style="color: var(--bsc-icon-color); --mdc-icon-size: 40px"
                  title="Sensore"
                ></ha-icon>-->
                <ha-icon
                  icon=${b}
                  style="color: var(--bsc-icon-color); --mdc-icon-size: 40px"
                  title="Sensore"
                ></ha-icon>
                <div class="label">${g}</div>
                <div class="state">${y}</div>
              </div>
            </div>
          </div>

          <div class="menu-section">
            ${p.map(e=>{var t;if(function(e){const t=e.entity_id.split(".")[0];return"number"==t||"update"==t}(e))return;const i=null!==(t=Yi(e,this.config,this.hass))&&void 0!==t?t:"m3r:info",n=e.entity_id,a=this.hass.entities[e.entity_id];return H`
                <div
                  class="menu-card link ${_} state"
                  @click=${()=>function(e,t,i){var n;if(!e||!i)return;Ki(t);const a=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});null===(n=document.querySelector("home-assistant"))||void 0===n||n.dispatchEvent(a)}(n,this,this.hass)}
                >
                  <ha-icon icon="${i}"></ha-icon>
                  <span class="menu-text"
                    >${function(e,t){const i=t.name;if(i)return i;const n=Ni(e.attributes);return n||e.attributes.device_class}(e,a)}</span
                  >
                  <span class="menu-text flex-end"
                    >${Bi(e)}</span
                  >
                </div>
              `})}
          </div>
        </div>
      </ha-adaptive-dialog>
    `}};function Ji(e,t="none"){if(!e)return`action: ${t}`;if("google-home"===e.action)return'action: url\n  url_path: |\n    [[[ \n      const ua = navigator.userAgent || "";\n      if (ua.includes("Android")) {\n        return "app://com.google.android.apps.chromecast.app";\n      } else if (ua.includes("iPhone") || ua.includes("iPad")) {\n        return "googlehome://";\n      } else {\n        return "https://home.google.com/";\n      }\n    ]]]';if("settings"===e.action)return'action: navigate\n  navigation_path: |\n    [[[ \n      const isAdmin = hass.user?.is_admin;\n      return isAdmin ? "/config/dashboard" : "/profile";\n    ]]]';const i=[`action: ${e.action||t}`];for(const t of Object.keys(e)){if("action"===t)continue;const n=e[t];"string"!=typeof n||n.includes("[[[")?"string"==typeof n&&n.includes("[[[")?i.push(`  ${t}: |\n    ${n.replace(/\n/g,"\n    ")}`):i.push(`  ${t}: ${JSON.stringify(n)}`):i.push(`  ${t}: ${n}`)}return i.join("\n")}function Qi(e,t,i,n){if(!e||"object"!=typeof e)return e;const a={};for(const o of Object.keys(e))a[o]=en(e[o],t,i,n);return a}function en(e,t,i,n){if("string"==typeof e&&e.trim().startsWith("[[[")&&e.trim().endsWith("]]]"))try{const a=e.trim().slice(3,-3),o=new Function("entity","state","hass",a)(t,i,n);if(o&&"string"==typeof o)return o}catch(t){return console.warn("Error evaluating icon template:",t),e}return e}function tn(e,t,i,n){var a;if(!n||!t)return;switch(n.action){case"perform-action":{const e=n.perform_action||"",[i,o]=e?e.split("."):(null===(a=n.service)||void 0===a?void 0:a.split("."))||[];if(!i||!o)return;const s=Object.assign(Object.assign({},n.data),n.target||{});t.callService(i,o,s);break}default:wi(e,t,Vi(i.entity)?{}:{entity:i.entity},n)}}Zi.styles=s`
    :host {
      font-family: var(--primary-font-family);
    }
    ha-dialog {
      --mdc-dialog-min-width: 580px;
      --mdc-dialog-max-width: 580px;
      --mdc-dialog-max-height: calc(100% - 72px);
      --dialog-content-padding: 10px;
    }

    @media (min-width: 450px) {
      ha-dialog.large {
        --mdc-dialog-min-width: 90vw;
        --mdc-dialog-max-width: 90vw;
      }
    }

    /* Fullscreen mobile */
    @media (max-width: 450px) {
      ha-dialog {
        --mdc-dialog-min-width: 100vw;
        --mdc-dialog-max-width: 100vw;
        --mdc-dialog-min-height: 100vh;
        --mdc-dialog-max-height: 100vh;
        --mdc-dialog-scrim-color: rgba(0, 0, 0, 0.5);
        --ha-dialog-border-radius: 0px;
      }
      ha-dialog > * {
        height: 100%;
        overflow-y: auto;
      }

      .menu-card.link,
      .circle.absent {
        filter: brightness(1) !important;
      }
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .header-left {
      display: flex;
      align-items: center;
      /*gap: 10px;*/
    }

    .header-left .friendly-name {
      color: var(--primary-text-color);
      font-size: 20px;
      font-weight: 450;
    }

    .header-right {
      display: flex;
      /*gap: 10px;*/
    }

    .header-title {
      /*margin-top: 1px;*/
      display: flex;
      flex-direction: column;
      /*justify-content: center;
    height: 100%;*/
    }

    .ellipsis {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .breadcrumb {
      font-size: 12px;
      color: var(--secondary-text-color, #888);
      margin: 0;
      line-height: 1.2;
    }

    .main-title {
      font-weight: 500;
      font-size: 18px;
      margin: 0;
      line-height: 1.2;
    }

    .content {
      /*padding: 40px 16px 0px 16px;*/
      padding: 40px 0px 0px 0px;
      /*margin-bottom: -30px;*/
    }

    ha-button-menu {
      display: flex;
      align-items: center;
    }

    .circle {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.4s ease;
      text-align: center;
      overflow: hidden;
    }

    /* Bordo attivo */
    .circle.present {
      border: 10px solid var(--md-sys-color-secondary-container);
      animation: pulse-outline 2s infinite;
    }

    /* Bordo inattivo */
    .circle.absent {
      border: 15px solid var(--md-sys-color-surface-container);
    }

    .circle.absent.light {
      filter: brightness(0.9);
    }

    /* Effetto pulsazione sul bordo */
    @keyframes pulse-outline {
      0% {
        box-shadow: 0 0 0 0
          var(--md-sys-color-secondary-container, rgba(76, 175, 80, 0.4));
      }
      70% {
        box-shadow: 0 0 0 10px
          var(--md-sys-color-secondary-container, rgba(76, 175, 80, 0));
      }
      100% {
        box-shadow: 0 0 0 0
          var(--md-sys-color-secondary-container, rgba(76, 175, 80, 0));
      }
    }

    /* Contenuto interno */
    .inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; /* Testo in basso */
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }

    .circle ha-icon {
      margin-bottom: 8px;
    }

    .circle.absent ha-icon {
      color: var(--disabled-color, #888);
    }

    .label {
      font-size: 16px;
      color: var(--primary-text-color);
      font-weight: 500;
      line-height: 1.2;
    }

    .state {
      font-size: 13px;
      color: var(--secondary-text-color);
      text-transform: capitalize;
    }

    /* ------------------------------------
    * Menu Cards
    * ------------------------------------ */
    .menu-section {
      margin: 40px 0px 20px 0px;
      justify-items: center;
    }

    .menu-card {
      margin-top: 10px;
      border-radius: 14px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      max-width: 500px;
      width: -webkit-fill-available;
    }

    .menu-card.link {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-card.state {
      border-radius: 28px;
    }

    .menu-card.light {
      filter: brightness(0.9);
    }

    .menu-text {
      font-size: 15px;
      font-weight: 410;
      letter-spacing: 0.1px;
    }

    .flex-end {
      text-align: end;
      flex: auto;
      padding-right: 5px;
    }
    /* ------------------------------------
    * END Menu Cards
    * ------------------------------------ */
  `,e([he({type:Object})],Zi.prototype,"hass",void 0),e([he({type:Object})],Zi.prototype,"config",void 0),e([he({type:Boolean})],Zi.prototype,"open",void 0),Zi=e([ce("sensor-dialog")],Zi);let nn=class extends re{constructor(){super(...arguments),this._config=$i,this.color=Ei,this._moved=!1}setConfig(e){if(!e)throw new Error(fi("common.invalid_configuration"));const t=Object.assign({},e);t.control_type!==Ci.APP_VERSION&&t.control_type!==Ci.ACTION||delete t.entity,this._config=t}static getStubConfig(e,t){const i=t.filter(e=>"switch"===e.split(".")[0]).sort();return{type:"custom:material-button-card",entity:i[Math.floor(Math.random()*i.length)],icon:"mdi:switch",height:97}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-button-card-editor")}updated(){requestAnimationFrame(()=>{const e=this.renderRoot.querySelector(".state-wrapper"),t=this.renderRoot.querySelector(".state");if(e&&t){t.scrollWidth>e.clientWidth?t.classList.add("scroll"):t.classList.remove("scroll")}})}_onClick(e){Ai(e.currentTarget,e),this._toggle()}_toggle(){var e,t,i;if(navigator.vibrate&&navigator.vibrate(50),!this._config||!this.hass)return;const n=this._config.entity,a=n?n.split(".")[0]:"",o=null!==(e=this._config.control_type)&&void 0!==e?e:Ci.GENERIC,s=["light","switch","fan","climate","input_boolean","cover","script"];if(null===(t=this._config.use_default_toggle)||void 0===t||t){if(s.includes(a)&&o!=Ci.THERMOMETER&&o!=Ci.MEDIA_PLAYER||o==Ci.AUTOMATION)return this.hass.callService("homeassistant","toggle",{entity_id:n});switch(Ni(this.hass.states[this._config.entity].attributes)){case Ti.DOOR:case Ti.TEMPERATURE:case Ti.HUMIDITY:case Ti.MOTION:case Ti.PRESENCE:case Ti.OCCUPANCY:return function(e,t,i,n){var a,o;const s=document.createElement(t);s.config=n,s.hass=i,s.open=!0;const r=null!==(o=null===(a=e.shadowRoot)||void 0===a?void 0:a.host)&&void 0!==o?o:e,l=new MutationObserver(()=>{s.isConnected&&(s.hass=e.hass,s.requestUpdate())});l.observe(r,{attributes:!0}),s.addEventListener("close-dialog",()=>{l.disconnect(),s.remove()}),s.style.position="fixed",s.style.inset="0",s.style.zIndex="9999",document.body.appendChild(s)}(this,"sensor-dialog",this.hass,this._config)}return"media_player"===a||o==Ci.MEDIA_PLAYER?void this._openMediaOverlay():bi(this,"hass-more-info",{entityId:n})}if(this._config.tap_action&&"object"==typeof this._config.tap_action){const e=Qi(this._config.tap_action,this.hass.states[n],null===(i=this.hass.states[n])||void 0===i?void 0:i.state,this.hass);return void tn(this,this.hass,Vi(n)?{}:{entity:n},e)}if("media_player"!==a&&o!=Ci.MEDIA_PLAYER)return bi(this,"hass-more-info",{entityId:n});this._openMediaOverlay()}_startPress(e){this._cancelPress(),this._moved=!1,"undefined"!=typeof TouchEvent&&e instanceof TouchEvent&&e.touches.length>0?(this._startX=e.touches[0].clientX,this._startY=e.touches[0].clientY):e instanceof MouseEvent&&(this._startX=e.clientX,this._startY=e.clientY),this._pressTimer=window.setTimeout(()=>{this._pressTimer=void 0,this._moved||this._handleHold()},500)}_handleMove(e){if(!this._startX||!this._startY||0===e.touches.length)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,n=Math.abs(t-this._startX),a=Math.abs(i-this._startY);(n>10||a>10)&&(this._moved=!0,this._cancelPress())}_cancelPress(e){this._pressTimer&&(clearTimeout(this._pressTimer),this._pressTimer=void 0,!this._moved&&e instanceof MouseEvent&&this._onClick(e))}_handleHold(){var e,t,i,n;if(null===(e=navigator.vibrate)||void 0===e||e.call(navigator,50),!this._config||!this.hass)return;const a=this._config.entity,o=null!==(t=this._config.control_type)&&void 0!==t?t:"generic",s=null===(i=this._config.use_default_toggle)||void 0===i||i,r=null==a?void 0:a.split(".")[0],l=!!r&&["light","switch","fan","climate","input_boolean","cover","script"].includes(r),c=o===Ci.MEDIA_PLAYER;if(s)return void(l||!c?a&&bi(this,"hass-more-info",{entityId:a}):a&&this.hass.callService("homeassistant","toggle",{entity_id:a}));const d=this._config.hold_action;if(!d)return;if("string"==typeof d)return void tn(this,this.hass,a?{entity:a}:{},{action:d});const u=Qi(d,a?this.hass.states[a]:void 0,a?null===(n=this.hass.states[a])||void 0===n?void 0:n.state:void 0,this.hass);tn(this,this.hass,a?{entity:a}:{},u)}_openMediaOverlay(){const e=document.createElement("material-media-overlay");e.hass=this.hass,e.entity=this._config.entity;const t=new MutationObserver(()=>{e&&(e.hass=this.hass,e.requestUpdate())});t.observe(this,{attributes:!0,childList:!1,subtree:!1}),e.addEventListener("close-overlay",()=>{t.disconnect(),e.remove()}),e.style.position="fixed",e.style.inset="0",e.style.zIndex="9999",document.body.appendChild(e)}render(){var e,t,i,n,a,o,s;if(!this._config||!this.hass)return H``;const r=this.hass.states[this._config.entity];if(this._config.control_type!=Ci.APP_VERSION&&this._config.control_type!=Ci.ACTION&&!r)return H`<ha-card
          ><div class="warning">${fi("common.no_entity")}</div></ha-card
        >`;let l,c=!1,d=null!==(e=this._config.name)&&void 0!==e?e:"",u=null!==(t=this._config.icon)&&void 0!==t?t:"",h=!1,p=Ti.NONE;const m=null===(i=this._config.use_default_text)||void 0===i||i;this._config.control_type!=Ci.APP_VERSION&&this._config.control_type!=Ci.ACTION&&(c=Li(r.state),d=qi(this._config,this.hass),u=Yi(r,this._config,this.hass),h=Pi(r.state,this._config.control_type),p=Ni(r.attributes));const f=(null===(a=null===(n=this.hass)||void 0===n?void 0:n.themes)||void 0===a?void 0:a.darkMode)?"dark":"light";m?l=this._config.control_type!=Ci.ACTION?Wi(r,this._config.control_type,h,this._config.fix_temperature,!1,this.hass):"":(l=c?this._config.text_on:this._config.text_off,Pi(r.state)&&(l=fi("common.offline")));const g=Vi(r)?null:r.entity_id.split(".")[0],_=this._config.control_type==Ci.GENERIC&&"button"==g&&(this._config.use_default_text||Vi(this._config.use_default_text));let v;if(this._config.control_type==Ci.THERMOMETER){v="eco"===(null===(o=null==r?void 0:r.attributes)||void 0===o?void 0:o.preset_mode)?"eco":null!==(s=null==r?void 0:r.state)&&void 0!==s?s:"unavailable"}else v=r&&r.state?r.state:"unavaiable";return function(e,t,i,n,a,o){var s;const r=i?"offline":n?"on":"off",l=t.control_type==Ci.THERMOMETER&&t.use_material_color&&n?"climate":"button",c=null===(s=t.entity)||void 0===s?void 0:s.split(".")[0],d=Ei,u=t.use_material_color?Hi(o,c):"default";let h;h=i||n&&!t.use_material_color||!n?d[a][r][l]:d[a][r][l][u],Vi(h)||(ki("--bsc-name-color",h.title,e),ki("--bsc-icon-color",h.icon,e),ki("--bsc-percentage-color","climate"==l?h.title:h.percentage,e),ki("--bsc-background",h.background,e),ki("--bsc-height",t.height||97,e,e=>`${e}px`),ki("--bsc-border-radius",t.border_radius,e))}(this.style,this._config,h,c,f,v),H`
      <ha-card
        class="material-button ${c?"on":"off"}"
        @mousedown=${this._startPress}
        @touchstart=${this._startPress}
        @mouseup=${this._cancelPress}
        @mouseleave=${this._cancelPress}
        @touchend=${this._cancelPress}
        @touchcancel=${this._cancelPress}
        @touchmove=${this._handleMove}
        style="${h||this._config.control_type==Ci.THERMOMETER||this._config.control_type==Ci.MEDIA_PLAYER?"padding: 12px 35px 12px 12px":"padding: 12px 12px"}"
      >
        <div class="content">
          <ha-icon .icon=${u} class="icon"></ha-icon>
          <div class="text">
            <div class="name ellipsis">${d}</div>
            ${p==Ti.MEASUREMENT||this._config.control_type==Ci.SCENE&&m||this._config.control_type==Ci.MEDIA_PLAYER&&!c||this._config.control_type==Ci.ACTION||_?H``:H`<div class="state-wrapper">
                  <div class="state">${l}</div>
                </div>`}
          </div>
        </div>
        ${h?H`<ha-icon
              id="icon_offline"
              icon="m3rf:warning"
              style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
              title="Offline"
            ></ha-icon>`:this._config.control_type==Ci.THERMOMETER||this._config.control_type==Ci.MEDIA_PLAYER||this._config.control_type==Ci.ACTION||this._config.control_type==Ci.STATE?H`<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 5%;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon>`:H``}
      </ha-card>
    `}};function an(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}nn.styles=s`
    :host {
      --bsc-height: var(--ha-card-height, 97px);
      --bsc-border-radius: var(--ha-card-border-radius);
    }

    ha-card.material-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 12px 12px;
      border-radius: var(--bsc-border-radius, 28px);
      background: var(--bsc-background);
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
      height: var(--bsc-height);
      overflow: hidden; /* fondamentale per contenere il ripple */
      box-shadow:
        0px 0.5px 1px rgba(0, 0, 0, 0.05),
        0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
      -webkit-tap-highlight-color: transparent;
    }

    .content {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .icon {
      width: 34px;
      height: 34px;
      color: var(--bsc-icon-color);
      align-content: center;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1; /* Aggiungi questo */
      min-width: 0; /* Necessario per evitare overflow nel flex */
    }

    .name {
      color: var(--bsc-name-color);
      font-size: 15px;
      font-weight: 550;
      line-height: 1.35;
    }

    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .state {
      font-size: 13px;
      color: var(--bsc-percentage-color);
      font-weight: 500;
    }

    .state-wrapper {
      overflow: hidden;
      position: relative;
      max-width: 100%; /* Cambia da 170px */
    }

    .state {
      display: inline-block;
      white-space: nowrap;
    }

    .state.scroll {
      animation: scroll-text 8s linear infinite;
    }

    @keyframes scroll-text {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .warning {
      padding: 16px;
      color: red;
      font-weight: bold;
    }

    @media (max-width: 420px) {
      /*.name,
      .state {
        font-size: small;
      }
      .name {
        line-height: 1.4;
      }*/
      #icon_offline {
        right: 15px;
      }
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `,e([he({attribute:!1})],nn.prototype,"hass",void 0),e([pe()],nn.prototype,"_config",void 0),nn=e([ce("material-button-card")],nn);var on,sn,rn,ln,cn,dn,un,hn,pn,mn,fn,gn,_n,vn,bn,yn,xn,wn,An,$n,kn,En,Cn,On,Tn,Sn,In,Mn,jn,Nn,Ln,Pn,zn,Rn,Un,Dn,Vn,Fn,Hn,Gn,Yn,Wn,qn,Bn,Kn={},Xn={},Zn={};function Jn(){if(on)return Zn;function e(e){return null==e}return on=1,Zn.isNothing=e,Zn.isObject=function(e){return"object"==typeof e&&null!==e},Zn.toArray=function(t){return Array.isArray(t)?t:e(t)?[]:[t]},Zn.repeat=function(e,t){let i="";for(let n=0;n<t;n+=1)i+=e;return i},Zn.isNegativeZero=function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},Zn.extend=function(e,t){if(t){const i=Object.keys(t);for(let n=0,a=i.length;n<a;n+=1){const a=i[n];e[a]=t[a]}}return e},Zn}function Qn(){if(rn)return sn;function e(e,t){let i="";const n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(i+="\n\n"+e.mark.snippet),n+" "+i):n}function t(t,i){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=i,this.message=e(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}return rn=1,t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t.prototype.toString=function(t){return this.name+": "+e(this,t)},sn=t}function ea(){if(un)return dn;un=1;const e=Qn(),t=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],i=["scalar","sequence","mapping"];return dn=function(n,a){if(a=a||{},Object.keys(a).forEach(function(i){if(-1===t.indexOf(i))throw new e('Unknown option "'+i+'" is met in definition of "'+n+'" YAML type.')}),this.options=a,this.tag=n,this.kind=a.kind||null,this.resolve=a.resolve||function(){return!0},this.construct=a.construct||function(e){return e},this.instanceOf=a.instanceOf||null,this.predicate=a.predicate||null,this.represent=a.represent||null,this.representName=a.representName||null,this.defaultStyle=a.defaultStyle||null,this.multi=a.multi||!1,this.styleAliases=function(e){const t={};return null!==e&&Object.keys(e).forEach(function(i){e[i].forEach(function(e){t[String(e)]=i})}),t}(a.styleAliases||null),-1===i.indexOf(this.kind))throw new e('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}}function ta(){if(pn)return hn;pn=1;const e=Qn(),t=ea();function i(e,t){const i=[];return e[t].forEach(function(e){let t=i.length;i.forEach(function(i,n){i.tag===e.tag&&i.kind===e.kind&&i.multi===e.multi&&(t=n)}),i[t]=e}),i}function n(e){return this.extend(e)}return n.prototype.extend=function(a){let o=[],s=[];if(a instanceof t)s.push(a);else if(Array.isArray(a))s=s.concat(a);else{if(!a||!Array.isArray(a.implicit)&&!Array.isArray(a.explicit))throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");a.implicit&&(o=o.concat(a.implicit)),a.explicit&&(s=s.concat(a.explicit))}o.forEach(function(i){if(!(i instanceof t))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(i.loadKind&&"scalar"!==i.loadKind)throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(i.multi)throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(i){if(!(i instanceof t))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});const r=Object.create(n.prototype);return r.implicit=(this.implicit||[]).concat(o),r.explicit=(this.explicit||[]).concat(s),r.compiledImplicit=i(r,"implicit"),r.compiledExplicit=i(r,"explicit"),r.compiledTypeMap=function(){const e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function t(t){t.multi?(e.multi[t.kind].push(t),e.multi.fallback.push(t)):e[t.kind][t.tag]=e.fallback[t.tag]=t}for(let e=0,i=arguments.length;e<i;e+=1)arguments[e].forEach(t);return e}(r.compiledImplicit,r.compiledExplicit),r},hn=n}function ia(){if(fn)return mn;fn=1;const e=ea();return mn=new e("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}})}function na(){if(_n)return gn;_n=1;const e=ea();return gn=new e("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}})}function aa(){if(bn)return vn;bn=1;const e=ea();return vn=new e("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})}function oa(){if(xn)return yn;xn=1;const e=ta();return yn=new e({explicit:[ia(),na(),aa()]})}function sa(){if(An)return wn;An=1;const e=ea();return wn=new e("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;const t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"})}function ra(){if(kn)return $n;kn=1;const e=ea();return $n=new e("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;const t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"})}function la(){if(Cn)return En;Cn=1;const e=Jn(),t=ea();function i(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102}function n(e){return e>=48&&e<=55}function a(e){return e>=48&&e<=57}function o(e){let t=e,i=1,n=t[0];if("-"!==n&&"+"!==n||("-"===n&&(i=-1),t=t.slice(1),n=t[0]),"0"===t)return 0;if("0"===n){if("b"===t[1])return i*parseInt(t.slice(2),2);if("x"===t[1])return i*parseInt(t.slice(2),16);if("o"===t[1])return i*parseInt(t.slice(2),8)}return i*parseInt(t,10)}return En=new t("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;const t=e.length;let s=0,r=!1;if(!t)return!1;let l=e[s];if("-"!==l&&"+"!==l||(l=e[++s]),"0"===l){if(s+1===t)return!0;if(l=e[++s],"b"===l){for(s++;s<t;s++){if(l=e[s],"0"!==l&&"1"!==l)return!1;r=!0}return r&&isFinite(o(e))}if("x"===l){for(s++;s<t;s++){if(!i(e.charCodeAt(s)))return!1;r=!0}return r&&isFinite(o(e))}if("o"===l){for(s++;s<t;s++){if(!n(e.charCodeAt(s)))return!1;r=!0}return r&&isFinite(o(e))}}for(;s<t;s++){if(!a(e.charCodeAt(s)))return!1;r=!0}return!!r&&isFinite(o(e))},construct:function(e){return o(e)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&t%1==0&&!e.isNegativeZero(t)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}})}function ca(){if(Tn)return On;Tn=1;const e=Jn(),t=ea(),i=new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),n=new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");const a=/^[-+]?[0-9]+e/;return On=new t("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&(!!i.test(e)&&(!!isFinite(parseFloat(e,10))||n.test(e)))},construct:function(e){let t=e.toLowerCase();const i="-"===t[0]?-1:1;return"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:i*parseFloat(t,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&(t%1!=0||e.isNegativeZero(t))},represent:function(t,i){if(isNaN(t))switch(i){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(i){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(i){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(e.isNegativeZero(t))return"-0.0";const n=t.toString(10);return a.test(n)?n.replace("e",".e"):n},defaultStyle:"lowercase"})}function da(){return In?Sn:(In=1,Sn=oa().extend({implicit:[sa(),ra(),la(),ca()]}))}function ua(){return jn?Mn:(jn=1,Mn=da())}function ha(){if(Ln)return Nn;Ln=1;const e=ea(),t=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),i=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");return Nn=new e("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==t.exec(e)||null!==i.exec(e))},construct:function(e){let n=0,a=null,o=t.exec(e);if(null===o&&(o=i.exec(e)),null===o)throw new Error("Date resolve error");const s=+o[1],r=+o[2]-1,l=+o[3];if(!o[4])return new Date(Date.UTC(s,r,l));const c=+o[4],d=+o[5],u=+o[6];if(o[7]){for(n=o[7].slice(0,3);n.length<3;)n+="0";n=+n}if(o[9]){a=6e4*(60*+o[10]+ +(o[11]||0)),"-"===o[9]&&(a=-a)}const h=new Date(Date.UTC(s,r,l,c,d,u,n));return a&&h.setTime(h.getTime()-a),h},instanceOf:Date,represent:function(e){return e.toISOString()}})}function pa(){if(zn)return Pn;zn=1;const e=ea();return Pn=new e("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}})}function ma(){if(Un)return Rn;Un=1;const e=ea(),t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";return Rn=new e("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;let i=0;const n=e.length,a=t;for(let t=0;t<n;t++){const n=a.indexOf(e.charAt(t));if(!(n>64)){if(n<0)return!1;i+=6}}return i%8==0},construct:function(e){const i=e.replace(/[\r\n=]/g,""),n=i.length,a=t;let o=0;const s=[];for(let e=0;e<n;e++)e%4==0&&e&&(s.push(o>>16&255),s.push(o>>8&255),s.push(255&o)),o=o<<6|a.indexOf(i.charAt(e));const r=n%4*6;return 0===r?(s.push(o>>16&255),s.push(o>>8&255),s.push(255&o)):18===r?(s.push(o>>10&255),s.push(o>>2&255)):12===r&&s.push(o>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){let i="",n=0;const a=e.length,o=t;for(let t=0;t<a;t++)t%3==0&&t&&(i+=o[n>>18&63],i+=o[n>>12&63],i+=o[n>>6&63],i+=o[63&n]),n=(n<<8)+e[t];const s=a%3;return 0===s?(i+=o[n>>18&63],i+=o[n>>12&63],i+=o[n>>6&63],i+=o[63&n]):2===s?(i+=o[n>>10&63],i+=o[n>>4&63],i+=o[n<<2&63],i+=o[64]):1===s&&(i+=o[n>>2&63],i+=o[n<<4&63],i+=o[64],i+=o[64]),i}})}function fa(){if(Vn)return Dn;Vn=1;const e=ea(),t=Object.prototype.hasOwnProperty,i=Object.prototype.toString;return Dn=new e("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;const n={},a=e;for(let e=0,o=a.length;e<o;e+=1){const o=a[e];let s,r=!1;if("[object Object]"!==i.call(o))return!1;for(s in o)if(t.call(o,s)){if(r)return!1;r=!0}if(!r)return!1;if(t.call(n,s))return!1;Object.defineProperty(n,s,{value:!0})}return!0},construct:function(e){return null!==e?e:[]}})}function ga(){if(Hn)return Fn;Hn=1;const e=ea(),t=Object.prototype.toString;return Fn=new e("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;const i=e,n=new Array(i.length);for(let e=0,a=i.length;e<a;e+=1){const a=i[e];if("[object Object]"!==t.call(a))return!1;const o=Object.keys(a);if(1!==o.length)return!1;n[e]=[o[0],a[o[0]]]}return!0},construct:function(e){if(null===e)return[];const t=e,i=new Array(t.length);for(let e=0,n=t.length;e<n;e+=1){const n=t[e],a=Object.keys(n);i[e]=[a[0],n[a[0]]]}return i}})}function _a(){if(Yn)return Gn;Yn=1;const e=ea(),t=Object.prototype.hasOwnProperty;return Gn=new e("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;const i=e;for(const e in i)if(t.call(i,e)&&null!==i[e])return!1;return!0},construct:function(e){return null!==e?e:{}}})}function va(){return qn?Wn:(qn=1,Wn=ua().extend({implicit:[ha(),pa()],explicit:[ma(),fa(),ga(),_a()]}))}function ba(){if(Bn)return Xn;Bn=1;const e=Jn(),t=Qn(),i=function(){if(cn)return ln;cn=1;const e=Jn();function t(e,t,i,n,a){let o="",s="";const r=Math.floor(a/2)-1;return n-t>r&&(o=" ... ",t=n-r+o.length),i-n>r&&(s=" ...",i=n+r-s.length),{str:o+e.slice(t,i).replace(/\t/g,"→")+s,pos:n-t+o.length}}function i(t,i){return e.repeat(" ",i-t.length)+t}return ln=function(n,a){if(a=Object.create(a||null),!n.buffer)return null;a.maxLength||(a.maxLength=79),"number"!=typeof a.indent&&(a.indent=1),"number"!=typeof a.linesBefore&&(a.linesBefore=3),"number"!=typeof a.linesAfter&&(a.linesAfter=2);const o=/\r?\n|\r|\0/g,s=[0],r=[];let l,c=-1;for(;l=o.exec(n.buffer);)r.push(l.index),s.push(l.index+l[0].length),n.position<=l.index&&c<0&&(c=s.length-2);c<0&&(c=s.length-1);let d="";const u=Math.min(n.line+a.linesAfter,r.length).toString().length,h=a.maxLength-(a.indent+u+3);for(let o=1;o<=a.linesBefore&&!(c-o<0);o++){const l=t(n.buffer,s[c-o],r[c-o],n.position-(s[c]-s[c-o]),h);d=e.repeat(" ",a.indent)+i((n.line-o+1).toString(),u)+" | "+l.str+"\n"+d}const p=t(n.buffer,s[c],r[c],n.position,h);d+=e.repeat(" ",a.indent)+i((n.line+1).toString(),u)+" | "+p.str+"\n",d+=e.repeat("-",a.indent+u+3+p.pos)+"^\n";for(let o=1;o<=a.linesAfter&&!(c+o>=r.length);o++){const l=t(n.buffer,s[c+o],r[c+o],n.position-(s[c]-s[c+o]),h);d+=e.repeat(" ",a.indent)+i((n.line+o+1).toString(),u)+" | "+l.str+"\n"}return d.replace(/\n$/,"")},ln}(),n=va(),a=Object.prototype.hasOwnProperty,o=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,s=/[\x85\u2028\u2029]/,r=/[,\[\]{}]/,l=/^(?:!|!!|![0-9A-Za-z-]+!)$/,c=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function d(e){return Object.prototype.toString.call(e)}function u(e){return 10===e||13===e}function h(e){return 9===e||32===e}function p(e){return 9===e||32===e||10===e||13===e}function m(e){return 44===e||91===e||93===e||123===e||125===e}function f(e){if(e>=48&&e<=57)return e-48;const t=32|e;return t>=97&&t<=102?t-97+10:-1}function g(e){return 120===e?2:117===e?4:85===e?8:0}function _(e){return e>=48&&e<=57?e-48:-1}function v(e){switch(e){case 48:return"\0";case 97:return"";case 98:return"\b";case 116:case 9:return"\t";case 110:return"\n";case 118:return"\v";case 102:return"\f";case 114:return"\r";case 101:return"";case 32:return" ";case 34:return'"';case 47:return"/";case 92:return"\\";case 78:return"";case 95:return" ";case 76:return"\u2028";case 80:return"\u2029";default:return""}}function b(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}function y(e,t,i){"__proto__"===t?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,writable:!0,value:i}):e[t]=i}const x=new Array(256),w=new Array(256);for(let e=0;e<256;e++)x[e]=v(e)?1:0,w[e]=v(e);function A(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||n,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.maxDepth="number"==typeof t.maxDepth?t.maxDepth:100,this.maxTotalMergeKeys="number"==typeof t.maxTotalMergeKeys?t.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function $(e,n){const a={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return a.snippet=i(a),new t(n,a)}function k(e,t){throw $(e,t)}function E(e,t){e.onWarning&&e.onWarning.call(null,$(e,t))}function C(e,t,i){const n=e.anchorMapTransactions;if(0!==n.length){const i=n[n.length-1];a.call(i,t)||(i[t]={existed:a.call(e.anchorMap,t),value:e.anchorMap[t]})}e.anchorMap[t]=i}function O(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,tag:e.tag,anchor:e.anchor,kind:e.kind,result:e.result}}function T(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.tag=t.tag,e.anchor=t.anchor,e.kind=t.kind,e.result=t.result}const S={YAML:function(e,t,i){null!==e.version&&k(e,"duplication of %YAML directive"),1!==i.length&&k(e,"YAML directive accepts exactly one argument");const n=/^([0-9]+)\.([0-9]+)$/.exec(i[0]);null===n&&k(e,"ill-formed argument of the YAML directive");const a=parseInt(n[1],10),o=parseInt(n[2],10);1!==a&&k(e,"unacceptable YAML version of the document"),e.version=i[0],e.checkLineBreaks=o<2,1!==o&&2!==o&&E(e,"unsupported YAML version of the document")},TAG:function(e,t,i){let n;2!==i.length&&k(e,"TAG directive accepts exactly two arguments");const o=i[0];n=i[1],l.test(o)||k(e,"ill-formed tag handle (first argument) of the TAG directive"),a.call(e.tagMap,o)&&k(e,'there is a previously declared suffix for "'+o+'" tag handle'),c.test(n)||k(e,"ill-formed tag prefix (second argument) of the TAG directive");try{n=decodeURIComponent(n)}catch(t){k(e,"tag prefix is malformed: "+n)}e.tagMap[o]=n}};function I(e,t,i,n){if(t<i){const a=e.input.slice(t,i);if(n)for(let t=0,i=a.length;t<i;t+=1){const i=a.charCodeAt(t);9===i||i>=32&&i<=1114111||k(e,"expected valid JSON character")}else o.test(a)&&k(e,"the stream contains non-printable characters");e.result+=a}}function M(e){e.totalMergeKeys++,-1!==e.maxTotalMergeKeys&&e.totalMergeKeys>e.maxTotalMergeKeys&&k(e,"merge keys exceeded maxTotalMergeKeys ("+e.maxTotalMergeKeys+")")}function j(t,i,n,o){e.isObject(n)||k(t,"cannot merge mappings; the provided source object is unacceptable"),M(t);const s=Object.keys(n);for(let e=0,r=s.length;e<r;e+=1){const r=s[e];M(t),a.call(i,r)||(y(i,r,n[r]),o[r]=!0)}}function N(e,t,i,n,o,s,r,l,c){if(Array.isArray(o))for(let t=0,i=(o=Array.prototype.slice.call(o)).length;t<i;t+=1)Array.isArray(o[t])&&k(e,"nested arrays are not supported inside keys"),"object"==typeof o&&"[object Object]"===d(o[t])&&(o[t]="[object Object]");if("object"==typeof o&&"[object Object]"===d(o)&&(o="[object Object]"),o=String(o),null===t&&(t={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(s)){s.length>100&&k(e,"abnormal merge sequence size");for(let n=0,a=s.length;n<a;n+=1)j(e,t,s[n],i)}else j(e,t,s,i);else e.json||a.call(i,o)||!a.call(t,o)||(e.line=r||e.line,e.lineStart=l||e.lineStart,e.position=c||e.position,k(e,"duplicated mapping key")),y(t,o,s),delete i[o];return t}function L(e){const t=e.input.charCodeAt(e.position);10===t?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):k(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function P(e,t,i){let n=0,a=e.input.charCodeAt(e.position);for(;0!==a;){for(;h(a);)9===a&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),a=e.input.charCodeAt(++e.position);if(t&&35===a)do{a=e.input.charCodeAt(++e.position)}while(10!==a&&13!==a&&0!==a);if(!u(a))break;for(L(e),a=e.input.charCodeAt(e.position),n++,e.lineIndent=0;32===a;)e.lineIndent++,a=e.input.charCodeAt(++e.position)}return-1!==i&&0!==n&&e.lineIndent<i&&E(e,"deficient indentation"),n}function z(e){let t=e.position,i=e.input.charCodeAt(t);return!(45!==i&&46!==i||i!==e.input.charCodeAt(t+1)||i!==e.input.charCodeAt(t+2)||(t+=3,i=e.input.charCodeAt(t),0!==i&&!p(i)))}function R(t,i){1===i?t.result+=" ":i>1&&(t.result+=e.repeat("\n",i-1))}function U(e,t){const i=e.tag,n=e.anchor,a=[];let o=!1;if(-1!==e.firstTabInLine)return!1;null!==e.anchor&&C(e,e.anchor,a);let s=e.input.charCodeAt(e.position);for(;0!==s&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,k(e,"tab characters must not be used in indentation")),45===s);){if(!p(e.input.charCodeAt(e.position+1)))break;if(o=!0,e.position++,P(e,!0,-1)&&e.lineIndent<=t){a.push(null),s=e.input.charCodeAt(e.position);continue}const i=e.line;if(G(e,t,3,!1,!0),a.push(e.result),P(e,!0,-1),s=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>t)&&0!==s)k(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break}return!!o&&(e.tag=i,e.anchor=n,e.kind="sequence",e.result=a,!0)}function D(e,t,i){let n,a,o,s;const r=e.tag,l=e.anchor,c={},d=Object.create(null);let u=null,m=null,f=null,g=!1,_=!1;if(-1!==e.firstTabInLine)return!1;null!==e.anchor&&C(e,e.anchor,c);let v=e.input.charCodeAt(e.position);for(;0!==v;){g||-1===e.firstTabInLine||(e.position=e.firstTabInLine,k(e,"tab characters must not be used in indentation"));const b=e.input.charCodeAt(e.position+1),y=e.line;if(63!==v&&58!==v||!p(b)){if(a=e.line,o=e.lineStart,s=e.position,!G(e,i,2,!1,!0))break;if(e.line===y){for(v=e.input.charCodeAt(e.position);h(v);)v=e.input.charCodeAt(++e.position);if(58===v)v=e.input.charCodeAt(++e.position),p(v)||k(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(N(e,c,d,u,m,null,a,o,s),u=m=f=null),_=!0,g=!1,n=!1,u=e.tag,m=e.result;else{if(!_)return e.tag=r,e.anchor=l,!0;k(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!_)return e.tag=r,e.anchor=l,!0;k(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===v?(g&&(N(e,c,d,u,m,null,a,o,s),u=m=f=null),_=!0,g=!0,n=!0):g?(g=!1,n=!0):k(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,v=b;if((e.line===y||e.lineIndent>t)&&(g&&(a=e.line,o=e.lineStart,s=e.position),G(e,t,4,!0,n)&&(g?m=e.result:f=e.result),g||(N(e,c,d,u,m,f,a,o,s),u=m=f=null),P(e,!0,-1),v=e.input.charCodeAt(e.position)),(e.line===y||e.lineIndent>t)&&0!==v)k(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return g&&N(e,c,d,u,m,null,a,o,s),_&&(e.tag=r,e.anchor=l,e.kind="mapping",e.result=c),_}function V(e){let t,i,n=!1,o=!1,s=e.input.charCodeAt(e.position);if(33!==s)return!1;null!==e.tag&&k(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),60===s?(n=!0,s=e.input.charCodeAt(++e.position)):33===s?(o=!0,t="!!",s=e.input.charCodeAt(++e.position)):t="!";let d=e.position;if(n){do{s=e.input.charCodeAt(++e.position)}while(0!==s&&62!==s);e.position<e.length?(i=e.input.slice(d,e.position),s=e.input.charCodeAt(++e.position)):k(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==s&&!p(s);)33===s&&(o?k(e,"tag suffix cannot contain exclamation marks"):(t=e.input.slice(d-1,e.position+1),l.test(t)||k(e,"named tag handle cannot contain such characters"),o=!0,d=e.position+1)),s=e.input.charCodeAt(++e.position);i=e.input.slice(d,e.position),r.test(i)&&k(e,"tag suffix cannot contain flow indicator characters")}i&&!c.test(i)&&k(e,"tag name cannot contain such characters: "+i);try{i=decodeURIComponent(i)}catch(t){k(e,"tag name is malformed: "+i)}return n?e.tag=i:a.call(e.tagMap,t)?e.tag=e.tagMap[t]+i:"!"===t?e.tag="!"+i:"!!"===t?e.tag="tag:yaml.org,2002:"+i:k(e,'undeclared tag handle "'+t+'"'),!0}function F(e){let t=e.input.charCodeAt(e.position);if(38!==t)return!1;null!==e.anchor&&k(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position);const i=e.position;for(;0!==t&&!p(t)&&!m(t);)t=e.input.charCodeAt(++e.position);return e.position===i&&k(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(i,e.position),!0}function H(e,t,i,n){const o=O(e);return function(e){e.anchorMapTransactions.push(Object.create(null))}(e),T(e,t),e.tag=null,e.anchor=null,e.kind=null,e.result=null,D(e,i,n)&&"mapping"===e.kind?(function(e){const t=e.anchorMapTransactions.pop(),i=e.anchorMapTransactions;if(0===i.length)return;const n=i[i.length-1],o=Object.keys(t);for(let e=0,i=o.length;e<i;e+=1){const i=o[e];a.call(n,i)||(n[i]=t[i])}}(e),!0):(function(e){const t=e.anchorMapTransactions.pop(),i=Object.keys(t);for(let n=i.length-1;n>=0;n-=1){const a=t[i[n]];a.existed?e.anchorMap[i[n]]=a.value:delete e.anchorMap[i[n]]}}(e),T(e,o),!1)}function G(t,i,n,o,s){let r,l,c,d,v,y=1,A=!1,$=!1,E=null;t.depth>=t.maxDepth&&k(t,"nesting exceeded maxDepth ("+t.maxDepth+")"),t.depth+=1,null!==t.listener&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null;const T=r=l=4===n||3===n;if(o&&P(t,!0,-1)&&(A=!0,t.lineIndent>i?y=1:t.lineIndent===i?y=0:t.lineIndent<i&&(y=-1)),1===y)for(;;){const e=t.input.charCodeAt(t.position),n=O(t);if(A&&(33===e&&null!==t.tag||38===e&&null!==t.anchor))break;if(!V(t)&&!F(t))break;null===E&&(E=n),P(t,!0,-1)?(A=!0,l=T,t.lineIndent>i?y=1:t.lineIndent===i?y=0:t.lineIndent<i&&(y=-1)):l=!1}if(l&&(l=A||s),1===y||4===n)if(d=1===n||2===n?i:i+1,v=t.position-t.lineStart,1===y)if(l&&(U(t,v)||D(t,v,d))||function(e,t){let i,n,a,o=!0;const s=e.tag;let r;const l=e.anchor;let c,d,u,h;const m=Object.create(null);let f,g,_,v=e.input.charCodeAt(e.position);if(91===v)c=93,h=!1,r=[];else{if(123!==v)return!1;c=125,h=!0,r={}}for(null!==e.anchor&&C(e,e.anchor,r),v=e.input.charCodeAt(++e.position);0!==v;){if(P(e,!0,t),v=e.input.charCodeAt(e.position),v===c)return e.position++,e.tag=s,e.anchor=l,e.kind=h?"mapping":"sequence",e.result=r,!0;o?44===v&&k(e,"expected the node content, but found ','"):k(e,"missed comma between flow collection entries"),g=f=_=null,d=u=!1,63===v&&p(e.input.charCodeAt(e.position+1))&&(d=u=!0,e.position++,P(e,!0,t)),i=e.line,n=e.lineStart,a=e.position,G(e,t,1,!1,!0),g=e.tag,f=e.result,P(e,!0,t),v=e.input.charCodeAt(e.position),!u&&e.line!==i||58!==v||(d=!0,v=e.input.charCodeAt(++e.position),P(e,!0,t),G(e,t,1,!1,!0),_=e.result),h?N(e,r,m,g,f,_,i,n,a):d?r.push(N(e,null,m,g,f,_,i,n,a)):r.push(f),P(e,!0,t),v=e.input.charCodeAt(e.position),44===v?(o=!0,v=e.input.charCodeAt(++e.position)):o=!1}k(e,"unexpected end of the stream within a flow collection")}(t,d))$=!0;else{const i=t.input.charCodeAt(t.position);null!==E&&T&&!l&&124!==i&&62!==i&&H(t,E,E.position-E.lineStart,d)||r&&function(t,i){let n,a,o=1,s=!1,r=!1,l=i,c=0,d=!1,p=t.input.charCodeAt(t.position);if(124===p)n=!1;else{if(62!==p)return!1;n=!0}for(t.kind="scalar",t.result="";0!==p;)if(p=t.input.charCodeAt(++t.position),43===p||45===p)1===o?o=43===p?3:2:k(t,"repeat of a chomping mode identifier");else{if(!((a=_(p))>=0))break;0===a?k(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):r?k(t,"repeat of an indentation width identifier"):(l=i+a-1,r=!0)}if(h(p)){do{p=t.input.charCodeAt(++t.position)}while(h(p));if(35===p)do{p=t.input.charCodeAt(++t.position)}while(!u(p)&&0!==p)}for(;0!==p;){for(L(t),t.lineIndent=0,p=t.input.charCodeAt(t.position);(!r||t.lineIndent<l)&&32===p;)t.lineIndent++,p=t.input.charCodeAt(++t.position);if(!r&&t.lineIndent>l&&(l=t.lineIndent),u(p)){c++;continue}if(r||0!==l||k(t,"missing indentation for block scalar"),t.lineIndent<l){3===o?t.result+=e.repeat("\n",s?1+c:c):1===o&&s&&(t.result+="\n");break}n?h(p)?(d=!0,t.result+=e.repeat("\n",s?1+c:c)):d?(d=!1,t.result+=e.repeat("\n",c+1)):0===c?s&&(t.result+=" "):t.result+=e.repeat("\n",c):t.result+=e.repeat("\n",s?1+c:c),s=!0,r=!0,c=0;const i=t.position;for(;!u(p)&&0!==p;)p=t.input.charCodeAt(++t.position);I(t,i,t.position,!1)}return!0}(t,d)||function(e,t){let i,n,a=e.input.charCodeAt(e.position);if(39!==a)return!1;for(e.kind="scalar",e.result="",e.position++,i=n=e.position;0!==(a=e.input.charCodeAt(e.position));)if(39===a){if(I(e,i,e.position,!0),a=e.input.charCodeAt(++e.position),39!==a)return!0;i=e.position,e.position++,n=e.position}else u(a)?(I(e,i,n,!0),R(e,P(e,!1,t)),i=n=e.position):e.position===e.lineStart&&z(e)?k(e,"unexpected end of the document within a single quoted scalar"):(e.position++,h(a)||(n=e.position));k(e,"unexpected end of the stream within a single quoted scalar")}(t,d)||function(e,t){let i,n,a,o=e.input.charCodeAt(e.position);if(34!==o)return!1;for(e.kind="scalar",e.result="",e.position++,i=n=e.position;0!==(o=e.input.charCodeAt(e.position));){if(34===o)return I(e,i,e.position,!0),e.position++,!0;if(92===o){if(I(e,i,e.position,!0),o=e.input.charCodeAt(++e.position),u(o))P(e,!1,t);else if(o<256&&x[o])e.result+=w[o],e.position++;else if((a=g(o))>0){let t=a,i=0;for(;t>0;t--)o=e.input.charCodeAt(++e.position),(a=f(o))>=0?i=(i<<4)+a:k(e,"expected hexadecimal character");e.result+=b(i),e.position++}else k(e,"unknown escape sequence");i=n=e.position}else u(o)?(I(e,i,n,!0),R(e,P(e,!1,t)),i=n=e.position):e.position===e.lineStart&&z(e)?k(e,"unexpected end of the document within a double quoted scalar"):(e.position++,h(o)||(n=e.position))}k(e,"unexpected end of the stream within a double quoted scalar")}(t,d)?$=!0:!function(e){let t=e.input.charCodeAt(e.position);if(42!==t)return!1;t=e.input.charCodeAt(++e.position);const i=e.position;for(;0!==t&&!p(t)&&!m(t);)t=e.input.charCodeAt(++e.position);e.position===i&&k(e,"name of an alias node must contain at least one character");const n=e.input.slice(i,e.position);return a.call(e.anchorMap,n)||k(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],P(e,!0,-1),!0}(t)?function(e,t,i){let n,a,o,s,r,l;const c=e.kind,d=e.result;let f=e.input.charCodeAt(e.position);if(p(f)||m(f)||35===f||38===f||42===f||33===f||124===f||62===f||39===f||34===f||37===f||64===f||96===f)return!1;if(63===f||45===f){const t=e.input.charCodeAt(e.position+1);if(p(t)||i&&m(t))return!1}for(e.kind="scalar",e.result="",n=a=e.position,o=!1;0!==f;){if(58===f){const t=e.input.charCodeAt(e.position+1);if(p(t)||i&&m(t))break}else if(35===f){if(p(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&z(e)||i&&m(f))break;if(u(f)){if(s=e.line,r=e.lineStart,l=e.lineIndent,P(e,!1,-1),e.lineIndent>=t){o=!0,f=e.input.charCodeAt(e.position);continue}e.position=a,e.line=s,e.lineStart=r,e.lineIndent=l;break}}o&&(I(e,n,a,!1),R(e,e.line-s),n=a=e.position,o=!1),h(f)||(a=e.position+1),f=e.input.charCodeAt(++e.position)}return I(e,n,a,!1),!!e.result||(e.kind=c,e.result=d,!1)}(t,d,1===n)&&($=!0,null===t.tag&&(t.tag="?")):($=!0,null===t.tag&&null===t.anchor||k(t,"alias node should not have any properties")),null!==t.anchor&&C(t,t.anchor,t.result)}else 0===y&&($=l&&U(t,v));if(null===t.tag)null!==t.anchor&&C(t,t.anchor,t.result);else if("?"===t.tag){null!==t.result&&"scalar"!==t.kind&&k(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"');for(let e=0,i=t.implicitTypes.length;e<i;e+=1)if(c=t.implicitTypes[e],c.resolve(t.result)){t.result=c.construct(t.result),t.tag=c.tag,null!==t.anchor&&C(t,t.anchor,t.result);break}}else if("!"!==t.tag){if(a.call(t.typeMap[t.kind||"fallback"],t.tag))c=t.typeMap[t.kind||"fallback"][t.tag];else{c=null;const e=t.typeMap.multi[t.kind||"fallback"];for(let i=0,n=e.length;i<n;i+=1)if(t.tag.slice(0,e[i].tag.length)===e[i].tag){c=e[i];break}}c||k(t,"unknown tag !<"+t.tag+">"),null!==t.result&&c.kind!==t.kind&&k(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+c.kind+'", not "'+t.kind+'"'),c.resolve(t.result,t.tag)?(t.result=c.construct(t.result,t.tag),null!==t.anchor&&C(t,t.anchor,t.result)):k(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return null!==t.listener&&t.listener("close",t),t.depth-=1,null!==t.tag||null!==t.anchor||$}function Y(e){const t=e.position;let i,n=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(i=e.input.charCodeAt(e.position))&&(P(e,!0,-1),i=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==i));){n=!0,i=e.input.charCodeAt(++e.position);let t=e.position;for(;0!==i&&!p(i);)i=e.input.charCodeAt(++e.position);const o=e.input.slice(t,e.position),s=[];for(o.length<1&&k(e,"directive name must not be less than one character in length");0!==i;){for(;h(i);)i=e.input.charCodeAt(++e.position);if(35===i){do{i=e.input.charCodeAt(++e.position)}while(0!==i&&!u(i));break}if(u(i))break;for(t=e.position;0!==i&&!p(i);)i=e.input.charCodeAt(++e.position);s.push(e.input.slice(t,e.position))}0!==i&&L(e),a.call(S,o)?S[o](e,o,s):E(e,'unknown document directive "'+o+'"')}P(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,P(e,!0,-1)):n&&k(e,"directives end mark is expected"),G(e,e.lineIndent-1,4,!1,!0),P(e,!0,-1),e.checkLineBreaks&&s.test(e.input.slice(t,e.position))&&E(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&z(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,P(e,!0,-1)):e.position<e.length-1&&k(e,"end of the stream or a document separator is expected")}function W(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));const i=new A(e,t),n=e.indexOf("\0");for(-1!==n&&(i.position=n,k(i,"null byte is not allowed in input")),i.input+="\0";32===i.input.charCodeAt(i.position);)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)Y(i);return i.documents}return Xn.loadAll=function(e,t,i){null!==t&&"object"==typeof t&&void 0===i&&(i=t,t=null);const n=W(e,i);if("function"!=typeof t)return n;for(let e=0,i=n.length;e<i;e+=1)t(n[e])},Xn.load=function(e,i){const n=W(e,i);if(0!==n.length){if(1===n.length)return n[0];throw new t("expected a single document in the stream, but found more")}},Xn}var ya,xa,wa={};function Aa(){if(ya)return wa;ya=1;const e=Jn(),t=Qn(),i=va(),n=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o=65279,s={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},r=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],l=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function c(i){let n,a;const o=i.toString(16).toUpperCase();if(i<=255)n="x",a=2;else if(i<=65535)n="u",a=4;else{if(!(i<=4294967295))throw new t("code point within a string may not be greater than 0xFFFFFFFF");n="U",a=8}return"\\"+n+e.repeat("0",a-o.length)+o}function d(t){this.schema=t.schema||i,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=e.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=function(e,t){if(null===t)return{};const i={},n=Object.keys(t);for(let o=0,s=n.length;o<s;o+=1){let s=n[o],r=String(t[s]);"!!"===s.slice(0,2)&&(s="tag:yaml.org,2002:"+s.slice(2));const l=e.compiledTypeMap.fallback[s];l&&a.call(l.styleAliases,r)&&(r=l.styleAliases[r]),i[s]=r}return i}(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.quotingType='"'===t.quotingType?2:1,this.forceQuotes=t.forceQuotes||!1,this.replacer="function"==typeof t.replacer?t.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function u(t,i){const n=e.repeat(" ",i);let a=0,o="";const s=t.length;for(;a<s;){let e;const i=t.indexOf("\n",a);-1===i?(e=t.slice(a),a=s):(e=t.slice(a,i+1),a=i+1),e.length&&"\n"!==e&&(o+=n),o+=e}return o}function h(t,i){return"\n"+e.repeat(" ",t.indent*i)}function p(e){return 32===e||9===e}function m(e){return e>=32&&e<=126||e>=161&&e<=55295&&8232!==e&&8233!==e||e>=57344&&e<=65533&&e!==o||e>=65536&&e<=1114111}function f(e){return m(e)&&e!==o&&13!==e&&10!==e}function g(e,t,i){const n=f(e),a=n&&!p(e);return(i?n:n&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!a)||f(t)&&!p(t)&&35===e||58===t&&a}function _(e,t){const i=e.charCodeAt(t);let n;return i>=55296&&i<=56319&&t+1<e.length&&(n=e.charCodeAt(t+1),n>=56320&&n<=57343)?1024*(i-55296)+n-56320+65536:i}function v(e){return/^\n* /.test(e)}function b(e,t,i,n,a,s,r,l){let c,d=0,u=null,h=!1,f=!1;const b=-1!==n;let y=-1,x=function(e){return m(e)&&e!==o&&!p(e)&&45!==e&&63!==e&&58!==e&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e&&35!==e&&38!==e&&42!==e&&33!==e&&124!==e&&61!==e&&62!==e&&39!==e&&34!==e&&37!==e&&64!==e&&96!==e}(_(e,0))&&function(e){return!p(e)&&58!==e}(_(e,e.length-1));if(t||r)for(c=0;c<e.length;d>=65536?c+=2:c++){if(d=_(e,c),!m(d))return 5;x=x&&g(d,u,l),u=d}else{for(c=0;c<e.length;d>=65536?c+=2:c++){if(d=_(e,c),10===d)h=!0,b&&(f=f||c-y-1>n&&" "!==e[y+1],y=c);else if(!m(d))return 5;x=x&&g(d,u,l),u=d}f=f||b&&c-y-1>n&&" "!==e[y+1]}return h||f?i>9&&v(e)?5:r?2===s?5:2:f?4:3:!x||r||a(e)?2===s?5:2:1}function y(e,i,n,a,o){e.dump=function(){if(0===i.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==r.indexOf(i)||l.test(i)))return 2===e.quotingType?'"'+i+'"':"'"+i+"'";const d=e.indent*Math.max(1,n),h=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-d),p=a||e.flowLevel>-1&&n>=e.flowLevel;switch(b(i,p,e.indent,h,function(t){return function(e,t){for(let i=0,n=e.implicitTypes.length;i<n;i+=1)if(e.implicitTypes[i].resolve(t))return!0;return!1}(e,t)},e.quotingType,e.forceQuotes&&!a,o)){case 1:return i;case 2:return"'"+i.replace(/'/g,"''")+"'";case 3:return"|"+x(i,e.indent)+w(u(i,d));case 4:return">"+x(i,e.indent)+w(u(function(e,t){const i=/(\n+)([^\n]*)/g;let n,a,o=function(){let n=e.indexOf("\n");return n=-1!==n?n:e.length,i.lastIndex=n,A(e.slice(0,n),t)}(),s="\n"===e[0]||" "===e[0];for(;a=i.exec(e);){const e=a[1],i=a[2];n=" "===i[0],o+=e+(s||n||""===i?"":"\n")+A(i,t),s=n}return o}(i,h),d));case 5:return'"'+function(e){let t="",i=0;for(let n=0;n<e.length;i>=65536?n+=2:n++){i=_(e,n);const a=s[i];!a&&m(i)?(t+=e[n],i>=65536&&(t+=e[n+1])):t+=a||c(i)}return t}(i)+'"';default:throw new t("impossible error: invalid scalar style")}}()}function x(e,t){const i=v(e)?String(t):"",n="\n"===e[e.length-1];return i+(n&&("\n"===e[e.length-2]||"\n"===e)?"+":n?"":"-")+"\n"}function w(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function A(e,t){if(""===e||" "===e[0])return e;const i=/ [^ ]/g;let n,a,o=0,s=0,r=0,l="";for(;n=i.exec(e);)r=n.index,r-o>t&&(a=s>o?s:r,l+="\n"+e.slice(o,a),o=a+1),s=r;return l+="\n",e.length-o>t&&s>o?l+=e.slice(o,s)+"\n"+e.slice(s+1):l+=e.slice(o),l.slice(1)}function $(e,t,i,n){let a="";const o=e.tag;for(let o=0,s=i.length;o<s;o+=1){let s=i[o];e.replacer&&(s=e.replacer.call(i,String(o),s)),(E(e,t+1,s,!0,!0,!1,!0)||void 0===s&&E(e,t+1,null,!0,!0,!1,!0))&&(n&&""===a||(a+=h(e,t)),e.dump&&10===e.dump.charCodeAt(0)?a+="-":a+="- ",a+=e.dump)}e.tag=o,e.dump=a||"[]"}function k(e,i,o){const s=o?e.explicitTypes:e.implicitTypes;for(let r=0,l=s.length;r<l;r+=1){const l=s[r];if((l.instanceOf||l.predicate)&&(!l.instanceOf||"object"==typeof i&&i instanceof l.instanceOf)&&(!l.predicate||l.predicate(i))){if(o?l.multi&&l.representName?e.tag=l.representName(i):e.tag=l.tag:e.tag="?",l.represent){const o=e.styleMap[l.tag]||l.defaultStyle;let s;if("[object Function]"===n.call(l.represent))s=l.represent(i,o);else{if(!a.call(l.represent,o))throw new t("!<"+l.tag+'> tag resolver accepts not "'+o+'" style');s=l.represent[o](i,o)}e.dump=s}return!0}}return!1}function E(e,i,a,o,s,r,l){e.tag=null,e.dump=a,k(e,a,!1)||k(e,a,!0);const c=n.call(e.dump),d=o;o&&(o=e.flowLevel<0||e.flowLevel>i);const u="[object Object]"===c||"[object Array]"===c;let p,m;if(u&&(p=e.duplicates.indexOf(a),m=-1!==p),(null!==e.tag&&"?"!==e.tag||m||2!==e.indent&&i>0)&&(s=!1),m&&e.usedDuplicates[p])e.dump="*ref_"+p;else{if(u&&m&&!e.usedDuplicates[p]&&(e.usedDuplicates[p]=!0),"[object Object]"===c)o&&0!==Object.keys(e.dump).length?(!function(e,i,n,a){let o="";const s=e.tag,r=Object.keys(n);if(!0===e.sortKeys)r.sort();else if("function"==typeof e.sortKeys)r.sort(e.sortKeys);else if(e.sortKeys)throw new t("sortKeys must be a boolean or a function");for(let t=0,s=r.length;t<s;t+=1){let s="";a&&""===o||(s+=h(e,i));const l=r[t];let c=n[l];if(e.replacer&&(c=e.replacer.call(n,l,c)),!E(e,i+1,l,!0,!0,!0))continue;const d=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024;d&&(e.dump&&10===e.dump.charCodeAt(0)?s+="?":s+="? "),s+=e.dump,d&&(s+=h(e,i)),E(e,i+1,c,!0,d)&&(e.dump&&10===e.dump.charCodeAt(0)?s+=":":s+=": ",s+=e.dump,o+=s)}e.tag=s,e.dump=o||"{}"}(e,i,e.dump,s),m&&(e.dump="&ref_"+p+e.dump)):(!function(e,t,i){let n="";const a=e.tag,o=Object.keys(i);for(let a=0,s=o.length;a<s;a+=1){let s="";""!==n&&(s+=", "),e.condenseFlow&&(s+='"');const r=o[a];let l=i[r];e.replacer&&(l=e.replacer.call(i,r,l)),E(e,t,r,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),E(e,t,l,!1,!1)&&(s+=e.dump,n+=s))}e.tag=a,e.dump="{"+n+"}"}(e,i,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else if("[object Array]"===c)o&&0!==e.dump.length?(e.noArrayIndent&&!l&&i>0?$(e,i-1,e.dump,s):$(e,i,e.dump,s),m&&(e.dump="&ref_"+p+e.dump)):(!function(e,t,i){let n="";const a=e.tag;for(let a=0,o=i.length;a<o;a+=1){let o=i[a];e.replacer&&(o=e.replacer.call(i,String(a),o)),(E(e,t,o,!1,!1)||void 0===o&&E(e,t,null,!1,!1))&&(""!==n&&(n+=","+(e.condenseFlow?"":" ")),n+=e.dump)}e.tag=a,e.dump="["+n+"]"}(e,i,e.dump),m&&(e.dump="&ref_"+p+" "+e.dump));else{if("[object String]"!==c){if("[object Undefined]"===c)return!1;if(e.skipInvalid)return!1;throw new t("unacceptable kind of an object to dump "+c)}"?"!==e.tag&&y(e,e.dump,i,r,d)}if(null!==e.tag&&"?"!==e.tag){let t=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21");t="!"===e.tag[0]?"!"+t:"tag:yaml.org,2002:"===t.slice(0,18)?"!!"+t.slice(18):"!<"+t+">",e.dump=t+" "+e.dump}}return!0}function C(e,t){const i=[],n=[];O(e,i,n);const a=n.length;for(let e=0;e<a;e+=1)t.duplicates.push(i[n[e]]);t.usedDuplicates=new Array(a)}function O(e,t,i){if(null!==e&&"object"==typeof e){const n=t.indexOf(e);if(-1!==n)-1===i.indexOf(n)&&i.push(n);else if(t.push(e),Array.isArray(e))for(let n=0,a=e.length;n<a;n+=1)O(e[n],t,i);else{const n=Object.keys(e);for(let a=0,o=n.length;a<o;a+=1)O(e[n[a]],t,i)}}}return wa.dump=function(e,t){const i=new d(t=t||{});i.noRefs||C(e,i);let n=e;return i.replacer&&(n=i.replacer.call({"":n},"",n)),E(i,0,n,!0,!0)?i.dump+"\n":""},wa}const $a=an(function(){if(xa)return Kn;xa=1;const e=ba(),t=Aa();function i(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}return Kn.Type=ea(),Kn.Schema=ta(),Kn.FAILSAFE_SCHEMA=oa(),Kn.JSON_SCHEMA=da(),Kn.CORE_SCHEMA=ua(),Kn.DEFAULT_SCHEMA=va(),Kn.load=e.load,Kn.loadAll=e.loadAll,Kn.dump=t.dump,Kn.YAMLException=Qn(),Kn.types={binary:ma(),float:ca(),map:aa(),null:sa(),pairs:ga(),set:_a(),timestamp:ha(),bool:ra(),int:la(),merge:pa(),omap:fa(),seq:na(),str:ia()},Kn.safeLoad=i("safeLoad","load"),Kn.safeLoadAll=i("safeLoadAll","loadAll"),Kn.safeDump=i("safeDump","dump"),Kn}()),{Type:ka,Schema:Ea,FAILSAFE_SCHEMA:Ca,JSON_SCHEMA:Oa,CORE_SCHEMA:Ta,DEFAULT_SCHEMA:Sa,load:Ia,loadAll:Ma,dump:ja,YAMLException:Na,types:La,safeLoad:Pa,safeLoadAll:za,safeDump:Ra}=$a,Ua=e=>{switch(e){case"tap_action":return"hold_action";case"hold_action":case"double_tap_action":return"tap_action"}};function Da(e){const t=e.cameras,i=e.lighting,n=e.wifi,a=e.climate,o="tap_action";return`type: custom:swipe-card\ncard_width: max-content\nparameters:\n  grabCursor: true\n  centeredSlides: false\n  slidesPerView: auto\n  preventClicksPropagation: true\n  preventClicks: true\n  threshold: 30\n  slidesOffsetAfter: 7\ncards:\n  - type: custom:button-card\n    show_icon: false\n    show_name: false\n    show_label: false\n    tap_action:\n      action: none\n    hold_action:\n      action: none\n    styles:\n      card:\n        - width: 13px\n        - height: 130px\n        - min-width: 13px\n        - min-height: 130px\n        - padding: 0px\n        - margin: 0px\n        - box-shadow: none\n        - background: transparent\n        - pointer-events: none\n        - border: none\n  ${e.hide_cameras?"":function(e,t){return`- type: custom:button-card\n    icon: m3r:videocam\n    name: ${fi("material_dashboard_card.cameras_name")}\n    triggers_update: all\n    label: |\n      [[[\n          const devices = Object.keys(hass.states).filter((e) =>\n          e.startsWith("camera.") &&\n          hass.entities[e] &&\n          !hass.entities[e].hidden\n        ).length;\n        return devices > 1 ? devices + " " + "${fi("material_dashboard_card.devices")}" : devices + " " + "${fi("material_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Ua(e)}:\n      action: none\n      haptic: medium\n    ${e}:\n      action: ${t?"navigate":"none"}\n      navigation_path: ${t}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable" &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden);\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - margin-right: 8px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#E8EAED' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('camera.') && \n              (hass.states[entity].state === 'on' || hass.states[entity].state === 'idle')\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#1A2238' : '#E8F0FE';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';\n                ]]]\n`}(o,t)}\n  ${e.hide_lighting?"":function(e,t){return`- type: custom:button-card\n    icon: m3r:light-group\n    name: ${fi("material_dashboard_card.lighting_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const lightEntities = Object.keys(hass.states).filter(\n        (entity) =>\n          entity.startsWith("light.") &&\n          hass.states[entity].state !== "unavailable" &&\n          hass.entities[entity] &&\n          !hass.entities[entity].hidden\n        );\n        const lightsOn = lightEntities.filter(\n          (entity) => hass.states[entity].state === "on"\n        ).length;\n        const totalLights = lightEntities.length;\n        return lightsOn + "/" + totalLights + " ${fi("material_dashboard_card.lighting_label")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Ua(e)}:\n      action: none\n      haptic: medium\n    ${e}:\n      action: ${t?"navigate":"none"}\n      navigation_path: ${t}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("light.") && \n                hass.states[e].state !== "unavailable" &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden);\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - margin-right: 8px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FBBC04' : '#F9AB00';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('light.') && \n              hass.states[entity].state === 'on'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#332f2a' : '#FEF7E0';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FBBC04' : '#745b00';\n                ]]]\n`}(o,i)}\n  ${e.hide_wifi?"":function(e,t){return`- type: custom:button-card\n    icon: m3of:wifi\n    name: ${fi("material_dashboard_card.wifi_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const devices = Object.keys(hass.states).filter(\n          (entity) =>\n            entity.startsWith("device_tracker.") &&\n            hass.states[entity].state === "home" &&\n            hass.entities[entity] &&\n            !hass.entities[entity].hidden\n        ).length;\n        return devices > 1 ? (devices + " " + "${fi("material_dashboard_card.devices")}") : (devices + " " + "${fi("material_dashboard_card.device")}");\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Ua(e)}:\n      action: none\n      haptic: medium\n    ${e}:\n      action: ${t?"navigate":"none"}\n      navigation_path: ${t}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const deviceEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('device_tracker.') && \n                hass.states[entity].state === 'home' &&\n                hass.entities[entity] &&\n                !hass.entities[entity].hidden\n              );\n              return deviceEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - margin-right: 8px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#81C995' : '#137333';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('device_tracker.') && \n              hass.states[entity].state === 'home'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#2e312e' : '#E6F4EA';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#81C995' : '#137333';\n                ]]]\n`}(o,n)}\n  ${e.hide_climate?"":function(e,t){return`- type: custom:button-card\n    icon: m3of:thermostat\n    name: ${fi("material_dashboard_card.climate_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const climateEntities = Object.keys(hass.states).filter(\n            (entity) =>\n              entity.startsWith("climate.") &&\n              hass.states[entity].state !== "unavailable" &&\n              hass.entities[entity] &&\n              !hass.entities[entity].hidden\n          ).length;\n          return climateEntities > 1 ? climateEntities + " " + "${fi("material_dashboard_card.devices")}" : climateEntities + " " + "${fi("material_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Ua(e)}:\n      action: none\n      haptic: medium\n    ${e}:\n      action: ${t?"navigate":"none"}\n      navigation_path: ${t}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const climateEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('climate.') && \n                hass.states[entity].state !== 'unavailable' &&\n                hass.entities[entity] &&\n                !hass.entities[entity].hidden\n              );\n              return climateEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - margin-right: 8px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#ffdbcd' : '#812800';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('climate.') && \n              (hass.states[entity].state === 'on' || \n                hass.states[entity].state === 'auto' || \n                hass.states[entity].state === 'heat' || \n                hass.states[entity].state === 'cool' || \n                hass.states[entity].state === 'heat_cool')\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#352f2d' : '#FCE8E6';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FF8A65' : '#812800';\n                ]]]\n`}(o,a)}\n`}let Va=class extends re{static getStubConfig(){return{type:"custom:material-dashboard-card"}}async setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}async updated(e){if(e.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const e=this.mapTemplate(this._config),t=$a.load(e),i=await window.loadCardHelpers(),n=await i.createCardElement(t);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material Dashboard"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-dashboard-card-editor")}mapTemplate(e){return Da(e)}_handleClick(e){const t=e.target.closest(".ripple-card");t&&Ai(t,e)}render(){return this._card?H`
      <div style="margin: 0px -15px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `:H`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};Va.styles=s`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,e([he({attribute:!1})],Va.prototype,"hass",void 0),e([pe()],Va.prototype,"_config",void 0),e([pe()],Va.prototype,"_card",void 0),Va=e([ce("material-dashboard-card")],Va);const Fa={type:"custom:material-dashboard-card"};function Ha(e,t){const i=e.target.getAttribute("configValue"),n=e.detail.value;i&&t._config[i]!==n&&(t._config=Object.assign(Object.assign({},t._config),{[i]:n}),t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t._config}})))}function Ga(e,t){var i;const n=e.detail.value;(null===(i=t._config)||void 0===i?void 0:i.entity)!==n&&(t._config=Object.assign(Object.assign({},t._config),{entity:n}),t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t._config}})))}function Ya(e,t){const i=e.target,n=i.getAttribute("configValue");let a;a=e.detail&&void 0!==e.detail.value?e.detail.value:"checked"in i?i.checked:i.value,n&&t._config[n]!==a&&(t._config=Object.assign(Object.assign({},t._config),{[n]:a}),t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t._config}})))}const Wa="\n      color: #6750A4;\n      font-weight: 600;\n      background: #EADDFF;\n      padding: 2px 4px;\n      border-radius: 4px;\n    ",qa="\n      color: #FFFFFF;\n      font-weight: 600;\n      background: #625B71;\n      padding: 2px 4px;\n      border-radius: 4px;\n    ";function Ba(){return H`<style>
      ${".version {\n      font-size: 12px !important;\n      color: var(--primary-text-color) !important;\n      background: rgba(0, 0, 0, 0.1);\n      padding: 8px 16px;\n      border-radius: 32px;\n      display: flex;\n      align-items: center;\n    }\n\n    .version-number {\n      font-size: 10px;\n      background: rgb(0, 103, 155);\n      padding: 0px 8px;\n      border-radius: 12px;\n      margin-right: -6px;\n      float: right;\n      color: white;\n      height: 20px;\n      align-content: center;\n    }"}
    </style>
    <h4 class="version">
      ${fi("upgrade.message")}
      <span class="version-number"
        ><a
          href="${Ri}"
          target="_blank"
          style="text-decoration: none;"
          rel="noopener noreferrer"
        >
          ${fi("upgrade.button")}
        </a></span
      >
    </h4>`}let Ka=class extends re{constructor(){super(...arguments),this._config=Fa}setConfig(e){this._config=Object.assign({},e)}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}render(){var e,t,i,n;return this._config&&this.hass?H`
      <div class="form">
        <span class="switch-label"
          >${fi("material_dashboard_card.description")}</span
        >

        <div class="switch-row">
          <span class="text-label">
            ${fi("material_dashboard_card.cameras")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${fi("common.hidden")}</span>
            <ha-switch
              .checked=${null!==(e=this._config.hide_cameras)&&void 0!==e&&e}
              configValue="hide_cameras"
              @change=${e=>Ya(e,this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this._config.cameras||""}
          .label=${fi("material_dashboard_card.cameras")}
          configValue="cameras"
          @value-changed=${e=>Ha(e,this)}
        ></ha-selector>

        <div class="switch-row">
          <span class="text-label">
            ${fi("material_dashboard_card.lighting")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${fi("common.hidden")}</span>
            <ha-switch
              .checked=${null!==(t=this._config.hide_lighting)&&void 0!==t&&t}
              configValue="hide_lighting"
              @change=${e=>Ya(e,this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this._config.lighting||""}
          .label=${fi("material_dashboard_card.lighting")}
          configValue="lighting"
          @value-changed=${e=>Ha(e,this)}
        ></ha-selector>

        <div class="switch-row">
          <span class="text-label">
            ${fi("material_dashboard_card.wifi")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${fi("common.hidden")}</span>
            <ha-switch
              .checked=${null!==(i=this._config.hide_wifi)&&void 0!==i&&i}
              configValue="hide_wifi"
              @change=${e=>Ya(e,this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this._config.wifi||""}
          .label=${fi("material_dashboard_card.wifi")}
          configValue="wifi"
          @value-changed=${e=>Ha(e,this)}
        ></ha-selector>

        <div class="switch-row">
          <span class="text-label">
            ${fi("material_dashboard_card.climate")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${fi("common.hidden")}</span>
            <ha-switch
              .checked=${null!==(n=this._config.hide_climate)&&void 0!==n&&n}
              configValue="hide_climate"
              @change=${e=>Ya(e,this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this._config.climate||""}
          .label=${fi("material_dashboard_card.climate")}
          configValue="climate"
          @value-changed=${e=>Ha(e,this)}
        ></ha-selector>
      </div>
      ${Ba()}
    `:H``}};Ka.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .text-label {
      font-size: 14px;
      font-weight: 500;
    }

    .switch-control {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .switch-label {
      font-size: 14px;
      font-weight: 500;
    }
  `,e([he({attribute:!1})],Ka.prototype,"hass",void 0),e([pe()],Ka.prototype,"_config",void 0),Ka=e([ce("material-dashboard-card-editor")],Ka);class Xa{#e;#t;#i=0;#n=0;#a=0;#o=0;#s;#r=!1;#l;#c;#d;constructor(e,t,{touchActions:i,stopScrollDirection:n="both"}={}){this.#e=e,this.#t=i,this.#s=t,this.#l=n,this.#c=this.#u.bind(this),this.#d=this.#h.bind(this),this.addListeners()}addListeners(){this.#e.addEventListener("pointerdown",this.#d),this.#e.addEventListener("pointermove",this.#d),this.#e.addEventListener("pointerup",this.#d),this.#e.addEventListener("pointercancel",this.#d),window.addEventListener("touchmove",this.#c,{passive:!1}),this.#t&&(this.#e.style.touchAction=this.#t)}removeListeners(){this.#e.removeEventListener("pointerdown",this.#d),this.#e.removeEventListener("pointermove",this.#d),this.#e.removeEventListener("pointerup",this.#d),this.#e.removeEventListener("pointercancel",this.#d),window.removeEventListener("touchmove",this.#c),this.#t&&this.#e.style.removeProperty("touch-action")}#p(){this.#r=!0}#m(){this.#r=!1}#u(e){this.#r&&e.preventDefault()}#h(e){if("pointerdown"===e.type&&(this.#e.setPointerCapture(e.pointerId),this.#i=e.pageX,this.#n=e.pageY),this.#e.hasPointerCapture(e.pointerId)&&"pointercancel"!==e.type&&"function"==typeof this.#s){const t=e.pageX-this.#i,i=e.pageY-this.#n,n=Math.abs(t/i)>1,a=Math.abs(t/i)<1;"horizontal"===this.#l&&n&&this.#p(),"vertical"===this.#l&&a&&this.#p(),"both"===this.#l&&this.#p(),this.#s(e,{startX:this.#i,startY:this.#n,relativeX:t,relativeY:i,totalX:t+this.#a,totalY:i+this.#o})}"pointerup"===e.type&&(this.#a=+this.#a+e.pageX-this.#i,this.#o=+this.#o+e.pageY-this.#n,this.#e.releasePointerCapture(e.pointerId),this.#m()),"pointercancel"===e.type&&(this.#s(e,{startX:this.#i,startY:this.#n,relativeX:0,relativeY:0,totalX:this.#a,totalY:this.#o}),this.#e.releasePointerCapture(e.pointerId),this.#m())}}const Za={type:"custom:material-slider-card",control_type:Ci.LIGHT,tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},arrow_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100};function Ja(e,t,i,n=e=>e){null!=t&&""!==t&&i.setProperty(e,n(t))}class Qa extends re{constructor(){super(...arguments),this._config=Za,this._name="",this.mouseStartPos={x:0,y:0},this.mousePos={x:0,y:0},this.containerWidth=0,this.oldValue=0,this.currentValue=0,this.holdTimer=0,this.isHold=!1,this._shouldUpdate=!0,this.updateTimeout=0,this.pressTimeout=0,this.trackingStartTime=0,this.isTap=!1,this.color=Ei,this.clickOffset=0,this._handleContextMenu=e=>(e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),!1),this._handlePointer=(e,t)=>{this.mousePos={x:e.pageX,y:e.pageY};const i=this._config.min_slide_time;if("pointerdown"===e.type&&(this._press(),this.isTap=!0,this.isHold=!1,this.holdTimer=window.setTimeout(this._setHold,this._config.hold_time),this.trackingStartTime=Date.now()),["pointerdown","pointermove","pointerup"].includes(e.type)&&(this.isHold||this._updateValue()),"pointermove"===e.type){if(this.isTap&&Math.abs(t.relativeX)<5&&Math.abs(t.relativeY)<5)return;this.isTap=!1,clearTimeout(this.holdTimer),this._stopUpdates()}if("pointercancel"===e.type&&(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates()),"pointerup"===e.type){if(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates(),this.isTap)return void this._handleTap();!this.isHold&&Date.now()-this.trackingStartTime>i&&(this._setValue(),this._startUpdates(!0))}},this._setHold=()=>{this.isTap=!1,this.isHold=!0,this._handleAction("hold")},this._handleTap=()=>{var e;clearTimeout(this.holdTimer),(null===(e=this._config)||void 0===e?void 0:e.tap_action)&&(this.isHold||this._handleAction("tap"))}}static getStubConfig(e){const t=Object.keys(e.states).filter(e=>e.startsWith("light.")).sort();return{type:"custom:material-slider-card",entity:t[Math.floor(Math.random()*t.length)],icon:"m3of:lightbulb",show_percentage:!0,bold_text:!1}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-slider-card-editor")}setConfig(e){if(!e)throw new Error(fi("common.invalid_configuration"));if(!e.entity)throw new Error(fi("common.no_entity_set"));const t=e.entity.split(".")[0];if(e.control_type===Ci.LIGHT&&t!==Oi.LIGHT||e.control_type===Ci.COVER&&t!==Oi.COVER)throw new Error(`Entity must match the selected control type (${e.control_type})`);const i=Object.assign(Object.assign({},Za),e);i.attribute||(i.control_type===Ci.LIGHT?i.attribute="brightness":i.control_type===Ci.COVER&&(i.attribute="current_position")),this._config=i,this._entity=this._config.entity,this._config.original_min=this._config.min,this._config.original_max=this._config.max}set hass(e){var t,i,n,a,o,s,r,l,c,d,u,h,p,m;if(!this._entity)return;if(this._hass=e,this._state=e.states[this._entity],this._status=null===(t=this._state)||void 0===t?void 0:t.state,this._config.control_type===Ci.LIGHT){const e=null!==(a=null===(n=null===(i=this._state)||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.brightness)&&void 0!==a?a:0;this.currentValue=Math.round(100*e/255)}else this._config.control_type===Ci.COVER&&(this.currentValue=null!==(r=null===(s=null===(o=this._state)||void 0===o?void 0:o.attributes)||void 0===s?void 0:s.current_position)&&void 0!==r?r:0);this._name=null!==(h=null!==(u=null!==(l=this._config.name)&&void 0!==l?l:null===(d=null===(c=this._state)||void 0===c?void 0:c.attributes)||void 0===d?void 0:d.friendly_name)&&void 0!==u?u:this._entity.split(".")[1])&&void 0!==h?h:"";const f=(null===(p=e.themes)||void 0===p?void 0:p.darkMode)?"dark":"light",g=null===(m=e.states[this._entity])||void 0===m?void 0:m.state;this._lastTheme===f&&this._lastEntityState===g||(this._lastTheme=f,this._lastEntityState=g,this.requestUpdate())}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",this._handleContextMenu),this.slideGesture=new Xa(this,this._handlePointer.bind(this),{touchActions:"pan-y",stopScrollDirection:"horizontal"})}disconnectedCallback(){this.removeEventListener("contextmenu",this._handleContextMenu),this.slideGesture.removeListeners(),super.disconnectedCallback()}_updateValue(){var e,t,i;const n=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("container");if(!n)return;const a=n.clientWidth;if(!a||0===a)return;this.containerWidth=a;const o=n.getBoundingClientRect(),s=this.mousePos.x-o.left,r=Math.max(0,Math.min(s,a))/a*100,l=null!==(t=this._config.min)&&void 0!==t?t:0,c=null!==(i=this._config.max)&&void 0!==i?i:100;this.currentValue=Math.round(l+r/100*(c-l)),this._updateSlider()}_handleAction(e){const t=new Event("hass-action",{bubbles:!0,cancelable:!1,composed:!0});t.detail={config:this._config,action:e},this.dispatchEvent(t)}_resetTrack(){this.mouseStartPos={x:this.mousePos.x,y:this.mousePos.y},this.oldValue=this.currentValue}_press(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.pressTimeout=window.setTimeout(()=>this.setAttribute("pressed",""),this._config.min_slide_time),this.setAttribute("half-pressed","")}_unpress(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.removeAttribute("pressed"),this.removeAttribute("half-pressed")}_checklimits(){var e,t;const i=null!==(e=this._config.min)&&void 0!==e?e:0,n=null!==(t=this._config.max)&&void 0!==t?t:100;this.currentValue<i&&(this.currentValue=i),this.currentValue>n&&(this.currentValue=n)}_updateSlider(){var e;this.style.setProperty("--bsc-percent",this.currentValue+"%");const t=null===(e=null==this?void 0:this.shadowRoot)||void 0===e?void 0:e.getElementById("percentage");this._state&&this._state.attributes.brightness?t&&(t.innerText=Math.round(this.currentValue)+"%"):this._config.control_type==Ci.COVER&&this._state&&this._state.attributes.current_position?this._state.state==Ii.OPENING?t&&(t.innerText=fi("common.opening")):t&&(t.innerText=fi("common.open")+" • "+Math.round(this.currentValue)+"%"):t&&(t.innerText=fi("common.on"))}_updateColors(){var e,t,i,n;const a=(null===(t=null===(e=this._hass)||void 0===e?void 0:e.themes)||void 0===t?void 0:t.darkMode)?"dark":"light";let o="var(--bsc-color)",s=!1;if(this._state)if(this._status==Ii.ON){s=!0;const e=null===(i=this._state.attributes)||void 0===i?void 0:i.rgb_color;if(e&&this._config.colorize){const t=function([e,t,i]){const n=e/255,a=t/255,o=i/255,s=Math.max(n,a,o),r=s-Math.min(n,a,o);if(0===r)return 0;let l;switch(s){case n:l=(a-o)/r%6;break;case a:l=(o-n)/r+2;break;default:l=(n-a)/r+4}return l*=60,l<0?l+360:l}(e),[i,n]="dark"===a?[32,24]:[100,76],[s,r]="dark"===a?[12,18]:[90,89],[l,c]="dark"===a?[90,78]:[100,20];o=`hsl(${t}, ${i}%, ${n}%)`;const d=`hsl(${t}, ${l}%, ${c}%)`;this.style.setProperty("--bsc-background",`hsl(${t}, ${s}%, ${r}%)`),this.style.setProperty("--bsc-name-color",d),this.style.setProperty("--bsc-icon-color",d),this.style.setProperty("--bsc-percentage-color",d)}else o=Ei[a].on.light.slider}else this._status==Ii.OPEN?s=!0:o="var(--bsc-off-color)";const r=null===(n=null==this?void 0:this.shadowRoot)||void 0===n?void 0:n.getElementById("percentage");if(!s){Pi(this._status)?r&&(r.innerText=fi("common.offline")):(this._status==Mi.OFF&&r&&(r.innerText=fi("common.off")),this._status==Mi.CLOSED&&r&&(r.innerText=fi("common.closed")),this._status==Mi.CLOSING&&r&&(r.innerText=fi("common.closing")))}this.style.setProperty("--bsc-entity-color",o),this._config.icon_color&&s&&this.style.setProperty("--bsc-icon-color",this._config.icon_color),this._config.icon_color&&!s&&this.style.removeProperty("--bsc-icon-color")}_getValue(){var e,t,i,n,a,o;if(!this._shouldUpdate)return;if(!this._state)return;if(this._config.control_type===Ci.COVER)return this._config.min=0,this._config.max=100,"unavailable"==this._status?(this.currentValue=0,this.style.setProperty("--bsc-opacity","0.5")):(this.style.removeProperty("--bsc-opacity"),this.currentValue=null!==(e=this._state.attributes.current_position)&&void 0!==e?e:0),void this._updateSlider();const s=null===(t=this._config)||void 0===t?void 0:t.attribute;let r=0;if("unavailable"==this._status?(this._config.min=0,this._config.max=0,this.style.setProperty("--bsc-opacity","0.5")):(this._config.min=this._config.original_min,this._config.max=this._config.original_max,this.style.removeProperty("--bsc-opacity")),"on"!=this._status)r=null!==(i=this._config.min)&&void 0!==i?i:0;else switch(s){case"brightness":r=Math.round(100*(null!==(n=this._state.attributes.brightness)&&void 0!==n?n:255)/255);break;case"red":case"green":case"blue":const e=null!==(a=this._state.attributes.rgb_color)&&void 0!==a?a:[255,255,255];"red"===s&&(r=e[0]),"green"===s&&(r=e[1]),"blue"===s&&(r=e[2]),r=Math.ceil(100*r/255);break;case"hue":case"saturation":const t=null!==(o=this._state.attributes.hs_color)&&void 0!==o?o:[100,100];"hue"===s&&(r=t[0]),"saturation"===s&&(r=t[1])}this.currentValue=r,this._updateSlider()}_setValue(){var e,t,i,n;if(!this._state)return;if(this._config.control_type===Ci.COVER)return void this._hass.callService("cover","set_cover_position",{entity_id:this._state.entity_id,position:this.currentValue});let a,o=this.currentValue,s=null!==(t=null===(e=this._config)||void 0===e?void 0:e.attribute)&&void 0!==t?t:"brightness",r=!0;switch(s){case"brightness":o=Math.ceil(o/100*255),o||(r=!1);break;case"red":case"green":case"blue":a=null!==(i=this._state.attributes.rgb_color)&&void 0!==i?i:[255,255,255],"red"===s&&(a[0]=o),"green"===s&&(a[1]=o),"blue"===s&&(a[2]=o),o=a,s="rgb_color";break;case"hue":case"saturation":a=null!==(n=this._state.attributes.hs_color)&&void 0!==n?n:[100,100],"hue"===s&&(a[0]=o),"saturation"===s&&(a[1]=o),o=a,s="hs_color"}const l={entity_id:this._state.entity_id};r?(l[s]=o,this._config.transition&&(l.transition=this._config.transition),this._hass.callService("light","turn_on",l)):this._hass.callService("light","turn_off",l)}_stopUpdates(){var e,t,i;this.updateTimeout&&clearTimeout(this.updateTimeout),this._shouldUpdate&&(null===(i=null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("slider"))||void 0===t?void 0:t.classList)||void 0===i||i.remove("animate"),this._shouldUpdate=!1)}_startUpdates(e=!1){this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout(()=>{var e,t,i;this._shouldUpdate=!0,null===(i=null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("slider"))||void 0===t?void 0:t.classList)||void 0===i||i.add("animate"),this.requestUpdate()},e?this._config.settle_time:0)}_onClick(e){Ai(e.currentTarget,e)}_onArrowPointerDown(e){e.stopPropagation()}_onArrowClick(e){var t;e.stopPropagation(),Ai(e.currentTarget,e),navigator.vibrate&&navigator.vibrate(60),this._config&&this._hass&&tn(this,this._hass,this._config,null!==(t=this._config.arrow_action)&&void 0!==t?t:Za.arrow_action)}updated(){var e,t,i;this.containerWidth=null!==(i=null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("container"))||void 0===t?void 0:t.clientWidth)&&void 0!==i?i:0,this._getValue(),this._updateColors()}render(){var e,t,i,n,a,o,s,r,l;if(!this._entity||!(this._entity in(null!==(t=null===(e=this._hass)||void 0===e?void 0:e.states)&&void 0!==t?t:{})))return this._showError(`${fi("common.no_entity")}: ${this._entity}`);const c=null!==(i=this._config.colorize&&!0)&&void 0!==i&&i,d=null!==(n=this._config.show_percentage&&!0)&&void 0!==n&&n,u=null!==(a=this._config.bold_text&&!0)&&void 0!==a&&a,h=null===(s=null===(o=this._hass)||void 0===o?void 0:o.states)||void 0===s?void 0:s[this._entity],p=Pi(h.state),m=(null===(l=null===(r=this._hass)||void 0===r?void 0:r.themes)||void 0===l?void 0:l.darkMode)?"dark":"light",f=Li(h.state);!function(e,t,i,n,a){const o=i?"offline":n?"on":"off",s=t.control_type==Ci.LIGHT?Oi.LIGHT:Oi.BUTTON,r=Ei[a][o][s];Vi(r)||(Ja("--bsc-name-color",r.title,e),Ja("--bsc-icon-color",r.icon,e),Ja("--bsc-percentage-color",r.percentage,e),t.control_type!=Ci.LIGHT&&n?(Ja("--bsc-slider-color",r.background,e),Ja("--bsc-background",r.back_slider_color,e)):(Ja("--bsc-slider-color",r.slider,e),Ja("--bsc-background",r.background,e)),Ja("--bsc-name-margin","-20px",e),Ja("--bsc-icon-margin","-10px",e),Ja("--bsc-percentage-margin","-20px",e),Ja("--bsc-primary-text-color",t.text_color,e),Ja("--bsc-border-color",t.border_color,e),Ja("--bsc-border-radius",t.border_radius,e),Ja("--bsc-border-style",t.border_style,e),Ja("--bsc-border-width",t.border_width,e),Ja("--bsc-height",t.height,e,e=>`${e}px`))}(this.style,this._config,p,f,m);const g=Yi(h,this._config,this.hass);return H`
      <ha-card
        id="container"
        tabindex="0"
        style="position: relative; padding: 12px 35px 12px 12px;"
        @mousedown=${this._onClick}
      >
        <div id="slider" class="animate ${c?"colorize":""}"></div>
        <div id="content">
          <ha-state-icon
            id="icon"
            .icon=${g}
            .state=${this._state}
            .hass=${this._hass}
            .stateObj=${this._state}
            data-domain=${this._entity.split(".")[0]}
            data-state=${(e=>e??Y)(this._status)}
          ></ha-state-icon>
          <p id="label">
            <span id="name" class="${u?"bold":""}"
              >${this._name}</span
            >
            <span
              id="percentage"
              class="${d?"":"hide"} ${u?"bold":""}"
            ></span>
          </p>
        </div>
        ${p?H`
              <ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
                title="Offline"
              ></ha-icon>
            `:H`
              <div
                id="arrow-btn"
                title="${fi("common.info_device")}"
                @pointerdown=${e=>this._onArrowPointerDown(e)}
                @click=${e=>this._onArrowClick(e)}
              >
                <ha-icon
                  icon="m3rf:arrow-forward-ios"
                  class="chevron"
                ></ha-icon>
              </div>
            `}
      </ha-card>
    `}_showWarning(e){return H` <hui-warning>${e}</hui-warning> `}_showError(e){const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:e}),H` ${t} `}static get styles(){return s`
      :host {
        --bsc-background: var(--card-background-color, #aaaaaa);
        --bsc-slider-color: var(--paper-slider-active-color, #f9d2b0);
        --bsc-percent: 0%;
        --bsc-color: var(--paper-item-icon-color);
        --bsc-off-color: var(--paper-item-icon-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color);
        --bsc-border-radius: var(--ha-card-border-radius, 28px);
        --bsc-border-style: var(--ha-card-border-style);
        --bsc-border-width: var(--ha-card-border-width);
        --bsc-height: var(--ha-card-height, 97px);
        --bsc-opacity: 1;

        display: flex;
        transition: transform 0.1s ease-out;
        user-select: none;
      }

      :host([half-pressed]) {
        /*transform: scale(0.99);*/
      }

      :host([pressed]) {
        /*transform: scale(0.98);*/
      }

      #container {
        height: var(--bsc-height);
        width: 100%;
        position: relative;
        overflow: hidden;
        /* opacity: var(--bsc-opacity);*/
        background: var(--bsc-background);
        border-color: var(--bsc-border-color, rgba(0 0 0 / 14%));
        border-radius: var(--bsc-border-radius, 28px);
        border-style: var(--bsc-border-style, solid);
        border-width: var(--bsc-border-width, 1px);
        z-index: 1; //fix safari bug with filter transition https://stackoverflow.com/a/27935035
        pointer-events: visible;
        cursor: pointer;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        padding: 12px 12px;
        box-shadow:
          0px 0.5px 1px rgba(0, 0, 0, 0.05),
          0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
        -webkit-tap-highlight-color: transparent;
      }

      .hide {
        display: none;
      }

      #container:focus {
        outline: 0;
      }

      #slider {
        height: 100%;
        position: absolute;
        background-color: var(--bsc-slider-color);
        /*opacity: 0.3;*/
        z-index: -1;
        left: 0;
        top: 0;
        right: calc(100% - var(--bsc-percent));
      }

      #slider.colorize {
        background-color: var(--bsc-entity-color);
        transition: background-color 1s ease;
      }

      #slider.animate {
        transition:
          right 1s ease,
          background-color 1s ease;
      }

      #content {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      #label {
        display: flex;
        flex-direction: column;
        width: -webkit-fill-available;
      }

      #name {
        color: var(--bsc-name-color);
        font-size: 15px;
        font-weight: 550;
        line-height: 1.35;
      }

      #name.bold,
      #percentage.bold {
        font-weight: bold !important;
      }

      #percentage {
        color: var(--bsc-percentage-color);
        font-size: 13px;
        margin-top: 1px;
        font-weight: 500;
      }

      #icon {
        width: 32px;
        height: 32px;
        color: var(--bsc-icon-color);
        align-content: center;
        margin-right: 5px;
        transition: color 0.3s ease-out;
      }

      #arrow-btn {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        width: 34px;
        height: 34px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
      }

      #arrow-btn .chevron {
        color: var(--bsc-icon-color);
        --mdc-icon-size: 15px;
        pointer-events: none;
      }

      @media (max-width: 420px) {
        #icon_offline,
        #arrow-btn {
          right: 15px;
        }
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 600ms ease-out;
        background-color: rgba(255, 255, 255, 0.3);
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `}}e([pe()],Qa.prototype,"_config",void 0),e([pe()],Qa.prototype,"_entity",void 0),e([pe()],Qa.prototype,"_state",void 0),e([pe()],Qa.prototype,"_status",void 0),e([pe()],Qa.prototype,"_name",void 0);const eo={type:"custom:material-climate-card",entity:"climate.thermo",increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0,tap_action:{action:"more-info"}};let to=class extends re{constructor(){super(...arguments),this._config=eo,this.material_color_scheme=Ei}setConfig(e){if(!e||!e.entity)throw new Error(fi("common.invalid_configuration"));this._config=e}static getStubConfig(e){const t=Object.keys(e.states).filter(e=>e.startsWith("climate.")).sort();return{type:"custom:material-climate-card",entity:t[Math.floor(Math.random()*t.length)],increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-climate-card-editor")}_onClick(e){var t;Ai(e.currentTarget,e),navigator.vibrate&&navigator.vibrate(60),this._config&&this.hass&&tn(this,this.hass,this._config,null!==(t=this._config.tap_action)&&void 0!==t?t:eo.tap_action)}async _adjustTemp(e){var t;if(navigator.vibrate&&navigator.vibrate(60),!this.hass||!(null===(t=this._config)||void 0===t?void 0:t.entity))return;const i=this.hass.states[this._config.entity],n=Number(Fi(this._config.fix_temperature,i.attributes.temperature));if(isNaN(n))return;const a=(o=this._config.fix_temperature,Vi(s=n+e)?s:"true"==o||"auto"==o&&s<7?s/5:s);var o,s;this.hass.states[this._config.entity].attributes.temperature=a,await this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:a}),setTimeout(()=>{this.requestUpdate()},500)}render(){var e,t,i;if(!this._config||!this.hass)return H``;const n=this.hass.states[this._config.entity];if(!n)return H`<ha-card
        ><div class="warning">${fi("common.no_entity")}</div></ha-card
      >`;const a=qi(this._config,this.hass),o=Pi(n.state),s=Wi(n,"thermometer",o,this._config.fix_temperature,!0,this.hass),r=(null===(t=null===(e=this.hass)||void 0===e?void 0:e.themes)||void 0===t?void 0:t.darkMode)?"dark":"light",l=Li(n.state),c=!l&&!Vi(n.attributes.temperature),d=null===(i=n.attributes)||void 0===i?void 0:i.preset_mode,u=d&&"eco"==d?d:n.state;!function(e,t,i,n,a,o){const s=t?"offline":i?"on":"off",r="climate",l=Ei,c=o?Hi(a):"default";let d;d=t?l[n][s][r]:i?l[n][s][r][c]:l[n][s][r].default,Vi(d)||(ki("--bsc-name-color",d.title,e),ki("--bsc-icon-color",d.icon,e),ki("--bsc-adjustTemp-color",d.button,e),ki("--bsc-internalTemp-color",d.subtitle,e),ki("--bsc-background",d.background,e))}(this.style,o,l,r,u,this._config.use_material_color);const h={control_type:"thermometer",icon:this._config.icon,use_default_icon:this._config.use_default_icon,dual_icon:this._config.dual_icon,icon_on:this._config.icon_on,icon_off:this._config.icon_off};return H`
      <div class="temperature-card">
        <div class="header clickable" @click=${this._onClick}>
          <div class="valve-info">
            <ha-icon
              id="icon_offline"
              icon="${Yi(n,h,this.hass)}"
              title="Climate"
              class="chevron"
              style="
                --mdc-icon-size: 20px;
                margin-top: -5px;
              "
            ></ha-icon>

            <span class="valve-name">${a}</span>
          </div>

          ${o?H`<ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 0px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>`:H`<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 0px;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon> `}
        </div>
        ${o?H`
              <div class="temperature-control offline-control">
                <div class="temperature-display offline">Offline</div>
              </div>
            `:H`
              <div
                class="temperature-control clickable"
                @click=${this._onClick}
                style="${l||c?"justify-content: space-between;":"justify-content: center;"} cursor: pointer;"
              >
                ${l||c?H`<button
                      class="control-btn minus-btn"
                      @click=${e=>{e.stopPropagation(),this._adjustTemp(-(this._config.decrease_temp||eo.decrease_temp))}}
                    >
                      −
                    </button>`:H``}

                <div
                  class="temperature-display"
                  id="tempDisplay"
                  style="${l||c?"":"font-size: 65px; margin-bottom: 7px;"}"
                >
                  ${l||c?Fi(this._config.fix_temperature,n.attributes.temperature):fi("common.off")}
                </div>
                ${l||c?H`<button
                      class="control-btn plus-btn"
                      @click=${e=>{e.stopPropagation(),this._adjustTemp(+(this._config.increase_temp||eo.increase_temp))}}
                    >
                      +
                    </button>`:H``}
              </div>

              <div class="internal-temp">
                <span id="internalTemp">${s}</span>
              </div>
            `}
      </div>
    `}};to.styles=s`
    .temperature-card {
      background: var(--bsc-background);
      border-radius: 28px;
      padding: 10px 15px;
      width: -webkit-fill-available;
      box-shadow: none;
      position: relative;
      overflow: hidden;
    }

    .temperature-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--bsc-background);
      border-radius: 24px;
      pointer-events: none;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 25px;
      position: relative;
      z-index: 2;
      pointer-events: visible;
      cursor: pointer;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }

    .clickable {
      pointer-events: visible;
      cursor: pointer;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
      -webkit-tap-highlight-color: transparent;
    }

    .valve-info {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 2px;
    }

    .steam-icon {
      color: #888;
      font-size: 20px;
    }

    .valve-name {
      color: var(--bsc-name-color);
      font-size: 16px;
      font-weight: 500;
    }

    .chevron {
      color: var(--bsc-icon-color);
      font-size: 20px;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .chevron:hover {
      color: #ccc;
    }

    .temperature-control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      position: relative;
      z-index: 2;
    }

    .control-btn {
      width: 80px;
      height: 55px;
      border-radius: 30px;
      background: var(--bsc-adjustTemp-color);
      border: none;
      color: var(--bsc-name-color);
      font-size: 32px;
      font-weight: 300;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      -webkit-tap-highlight-color: transparent;
    }

    .control-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: scale(1.05);
    }

    .control-btn:active {
      transform: scale(0.98);
    }

    .temperature-display {
      /* color: #c3c3c3; */
      color: var(--bsc-name-color);
      font-size: 72px;
      font-weight: 450;
      text-align: center;
      line-height: 1;
    }

    .internal-temp {
      text-align: center;
      color: var(--bsc-internalTemp-color);
      font-size: 15px;
      font-weight: 400;
      position: relative;
      z-index: 2;
      margin-bottom: 20px;
    }

    .offline {
      font-size: 65px;
    }

    .offline-control {
      justify-content: center;
      margin-bottom: 61px;
      margin-top: 30px;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    @media (max-width: 420px) {
      .valve-name,
      .state {
        font-size: 15px;
      }
      .valve-name {
        line-height: 1.4;
      }

      .temperature-display {
        font-size: 60px;
      }

      .control-btn {
        width: 65px;
        height: 45px;
        font-size: 28px;
      }

      .offline {
        font-size: 55px;
      }

      .offline-control {
        margin-bottom: 59px;
      }
    }
  `,e([he({attribute:!1})],to.prototype,"hass",void 0),e([pe()],to.prototype,"_config",void 0),to=e([ce("material-climate-card")],to);let io=class extends re{constructor(){super(...arguments),this._config=eo}setConfig(e){this._config=Object.assign({},e)}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}_getActionValue(e,t="more-info"){var i;return e?"string"==typeof e?e:null!==(i=e.action)&&void 0!==i?i:t:t}_onTapSelected(e){if(!this._config||!this.hass)return;const t=e.detail.value;if(t===this._getActionValue(this._config.tap_action))return;const i=Object.assign(Object.assign({},this._config),{tap_action:{toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"}}[t]||{action:t}});this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}_setActionValue(e,t){let i=this._config.tap_action;"string"==typeof i&&(i={action:i});const n=Object.assign(Object.assign({},i),{[e]:t});this._config=Object.assign(Object.assign({},this._config),{tap_action:n}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_renderExtraField(e,t){var i;const n=null!==(i=null==e?void 0:e.action)&&void 0!==i?i:e;return H`
      ${"navigate"===n?H`
            <ha-selector
              style="display: block; margin-top: 10px;"
              .hass=${this.hass}
              .selector=${{navigation:{}}}
              .value=${(null==e?void 0:e.navigation_path)||""}
              .label=${fi("actions.navigate")}
              .configValue=${"navigation_path"}
              @value-changed=${e=>t("navigation_path",e.detail.value)}
            ></ha-selector>
          `:""}
      ${"url"===n?H`
            <ha-selector
              style="display: block; margin-top: 10px;"
              .hass=${this.hass}
              .selector=${{text:{}}}
              .value=${(null==e?void 0:e.url_path)||""}
              .label=${fi("actions.url")}
              .configValue=${"url_path"}
              @value-changed=${e=>t("url_path",e.detail.value)}
            ></ha-selector>
          `:""}
    `}render(){var e,t,i,n,a,o;if(!this._config||!this.hass)return H``;this._config.use_default_icon=null===(e=this._config.use_default_icon)||void 0===e||e,this._config.use_material_color=null===(t=this._config.use_material_color)||void 0===t||t;const s=[{value:"false",label:fi("material_climate_card.false")},{value:"true",label:fi("material_climate_card.true")},{value:"auto",label:fi("material_climate_card.auto")}],r=[{value:"toggle",label:fi("actions.toggle")},{value:"more-info",label:fi("actions.more_info")},{value:"navigate",label:fi("actions.navigate")},{value:"url",label:fi("actions.url")},{value:"none",label:fi("actions.none")}];return H`
      <div class="form">
        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{text:{}}}
          .label=${fi("material_climate_card.name")}
          .value=${this._config.name||""}
          configValue="name"
          @value-changed=${e=>Ya(e,this)}
          placeholder="e.g. Cooler"
        ></ha-selector>

        <ha-entity-picker
          label="${fi("material_climate_card.entity")}"
          .value=${this._config.entity||""}
          .hass=${this.hass}
          .includeDomains=${["climate"]}
          allow-custom-entity
          configValue="entity"
          @value-changed=${e=>Ga(e,this)}
          required
        ></ha-entity-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${fi("material_climate_card.theme")}</span
          >
          <ha-switch
            .checked=${null===(i=this._config.use_material_color)||void 0===i||i}
            configValue="use_material_color"
            @change=${e=>Ya(e,this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${fi("material_climate_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${null===(n=this._config.use_default_icon)||void 0===n||n}
            configValue="use_default_icon"
            @change=${e=>Ya(e,this)}
          />
        </div>

        ${this._config.use_default_icon?H``:H`
              <ha-icon-picker
                label="Icon"
                .value=${this._config.icon||""}
                configValue="icon"
                @value-changed=${e=>Ya(e,this)}
                placeholder="mdi:lightbulb"
              />
            `}

        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{number:{}}}
          .label=${fi("material_climate_card.increase_temp")}
          .value=${this._config.increase_temp||1}
          configValue="increase_temp"
          @value-changed=${e=>Ya(e,this)}
          placeholder="e.g. 0.5"
        ></ha-selector>

        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{number:{}}}
          .label=${fi("material_climate_card.decrease_temp")}
          .value=${this._config.decrease_temp||1}
          configValue="decrease_temp"
          @value-changed=${e=>Ya(e,this)}
          placeholder="e.g. 0.5"
        ></ha-selector>

        <!--<div class="switch-row">
          <span class="switch-label"
            >${fi("material_climate_card.fix_temperature")}</span
          >
          <ha-switch
            .checked=${null!==(a=this._config.fix_temperature)&&void 0!==a&&a}
            configValue="fix_temperature"
            @change=${e=>Ya(e,this)}
          />
        </div>-->

        <ha-selector
          .hass=${this.hass}
          label="${fi("material_climate_card.fix_temperature")}"
          .selector=${{select:{options:s,mode:"dropdown"}}}
          .value=${null!==(o=this._config.fix_temperature)&&void 0!==o?o:"false"}
          configValue="fix_temperature"
          @value-changed=${e=>Ya(e,this)}
        >
        </ha-selector>

        <ha-selector
          .hass=${this.hass}
          label="${fi("actions.tap_action_title")}"
          .selector=${{select:{options:r,mode:"dropdown"}}}
          .value=${this._getActionValue(this._config.tap_action)}
          @value-changed=${e=>this._onTapSelected(e)}
        >
        </ha-selector>

        ${this._renderExtraField(this._config.tap_action,(e,t)=>this._setActionValue(e,t))}
      </div>
      ${Ba()}
    `}};io.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `,e([he({attribute:!1})],io.prototype,"hass",void 0),e([pe()],io.prototype,"_config",void 0),io=e([ce("material-climate-card-editor")],io);const no={type:"custom:material-control-card",name:"Control Card",icon:"mdi:link",tap_action:{action:"more-info"},hold_action:{action:"more-info"}},ao={toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"},"google-home":{action:"google-home"},settings:{action:"settings"}};let oo=class extends re{constructor(){super(...arguments),this._config=no}async setConfig(e){if(!e)throw new Error(fi("common.invalid_configuration"));this._config=e}static getStubConfig(){return{type:"custom:material-control-card",name:"Control Card",icon:"mdi:link",tap_action:{action:"more-info"},hold_action:{action:"none"}}}async updated(e){if(e.has("hass"))if(this._card)this._card.hass=this.hass;else if(this._config){const e=this.mapTemplate(),t=$a.load(e),i=await window.loadCardHelpers(),n=await i.createCardElement(t);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-control-card-editor")}mapTemplate(){const e=qi(this._config,this.hass),t=function(e){const t=e.name;let i=e.icon;if("string"==typeof i&&i.trim().startsWith("[[[")&&i.trim().endsWith("]]]")){const e=i.trim().split("\n").map(e=>"  "+e).join("\n");i=`|\n${e}`}return`type: custom:button-card\nname: ${t}\nicon: ${i}\n${e.use_card_entity&&e.entity?"entity: "+e.entity:""}\ntap_action:\n  ${Ji(e.tap_action)}\nhold_action:\n  ${Ji(e.hold_action)}\nstyles:\n  grid:\n    - grid-template-columns: 2fr 1fr 1fr\n    - grid-template-rows: 2fr 0.1fr 2fr\n    - grid-template-areas: |\n        "i . ."\n        ". . ."\n        "n n n"\n  card:\n    - height: 140px\n    - width: 140px\n    - border-radius: 30px\n    - margin-bottom: 1px\n    - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05), 0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n    - background-color: |\n        [[[ \n          return hass.themes.darkMode\n            ? "var(--md-sys-color-surface-container, '#1f2022')"\n            : "var(--md-sys-color-surface-container, '#eeedf2')";\n        ]]]\n  name:\n    - font-size: 1rem\n    - font-weight: bold\n    - justify-self: start\n    - align-self: center\n    - margin-left: 20px\n    - width: 100px\n    - text-align: left\n    - white-space: normal\n    - overflow-wrap: break-word\n    - word-break: break-word\n    - color: |\n        [[[ \n          return hass.themes.darkMode\n            ? "var(--md-sys-color-on-surface-variant,'#e3e3e5')"\n            : "var(--md-sys-color-on-surface-variant,'#1b1b1d')";\n        ]]]\n  icon:\n    - color: |\n        [[[ \n          return hass.themes.darkMode\n            ? "var(--md-sys-color-on-surface-variant,'#c4c7d0')"\n            : "var(--md-sys-color-on-surface-variant,'#43484e')";\n        ]]]\n`}(Object.assign(Object.assign({},this._config),{name:e}));return t}render(){return this._card?H`${this._card}`:H`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};oo.styles=s`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,e([he({attribute:!1})],oo.prototype,"hass",void 0),e([pe()],oo.prototype,"_config",void 0),e([pe()],oo.prototype,"_card",void 0),oo=e([ce("material-control-card")],oo);let so=class extends re{constructor(){super(...arguments),this._config=no,this._configLoaded=!1}setConfig(e){this._config=Object.assign({},e),this._configLoaded=!0}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}_tapActionChanged(){return(e,t)=>{if(!this._configLoaded||!this._config)return;let i=Object.assign({},this._config.tap_action);if("action"===e){if(i.action===t)return;i=ao[t]||{action:t}}else i=Object.assign(Object.assign({},i),{[e]:t});this._config=Object.assign(Object.assign({},this._config),{tap_action:i}),this._saveConfig()}}_holdActionChanged(){return(e,t)=>{if(!this._configLoaded||!this._config)return;let i=Object.assign({},this._config.hold_action);if("action"===e){if(i.action===t)return;i=ao[t]||{action:t}}else i=Object.assign(Object.assign({},i),{[e]:t});this._config=Object.assign(Object.assign({},this._config),{hold_action:i}),this._saveConfig()}}_saveConfig(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){var e,t,i;if(!this._configLoaded||!this.hass)return H``;this._config.use_default_icon=null===(e=this._config.use_default_icon)||void 0===e||e,this._config.use_card_entity=null!==(t=this._config.use_card_entity)&&void 0!==t&&t;const n=(e,t,i)=>{var n;const a=null!==(n=null==t?void 0:t.action)&&void 0!==n?n:"more-info",o=[{value:"toggle",label:fi("actions.toggle")},{value:"more-info",label:fi("actions.more_info")},{value:"navigate",label:fi("actions.navigate")},{value:"url",label:fi("actions.url")},{value:"none",label:fi("actions.none")},{value:"google-home",label:fi("actions.google_home")},{value:"settings",label:fi("actions.settings")}];return H`
        <ha-selector
          .hass=${this.hass}
          label="${fi("actions."+e+"_title")}"
          .selector=${{select:{options:o,mode:"dropdown"}}}
          .value=${a}
          @value-changed=${e=>{const t=e.detail.value;i("action",t)}}
        >
        </ha-selector>

        ${"navigate"===a?H`
              <ha-selector
                style="display: block; margin-top: 10px;"
                .hass=${this.hass}
                .selector=${{navigation:{}}}
                .value=${(null==t?void 0:t.navigation_path)||""}
                .label=${fi("actions.navigate")}
                .configValue=${"navigation_path"}
                @value-changed=${e=>i("navigation_path",e.detail.value)}
              ></ha-selector>
            `:""}
        ${"url"===a?H`
              <ha-selector
                style="display: block; margin-top: 10px;"
                .hass=${this.hass}
                .selector=${{text:{}}}
                .value=${(null==t?void 0:t.url_path)||""}
                .label=${fi("actions.url")}
                .configValue=${"url_path"}
                @value-changed=${e=>i("url_path",e.detail.value)}
              ></ha-selector>
            `:""}
        <!-- Aggiungi altri campi dinamici se servono per call-service ecc. -->
      `};return H`
      <div class="form">
        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{text:{}}}
          .label=${fi("material_control_card.name")}
          .value=${this._config.name||""}
          configValue="name"
          @value-changed=${e=>Ya(e,this)}
          placeholder="e.g. Cooler"
        ></ha-selector>

        <div class="switch-row">
          <span class="switch-label"
            >${fi("material_control_card.entity_card")}</span
          >
          <ha-switch
            .checked=${this._config.use_card_entity}
            configValue="use_card_entity"
            @change=${e=>Ya(e,this)}
          />
        </div>

        ${this._config.use_card_entity?H`
              <ha-entity-picker
                label="${fi("material_control_card.entity")}"
                .value=${this._config.entity||""}
                .hass=${this.hass}
                allow-custom-entity
                configValue="entity"
                @value-changed=${e=>Ga(e,this)}
                required
              ></ha-entity-picker>
            `:""}

        <div class="switch-row">
          <span class="switch-label"
            >${fi("material_control_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon}
            configValue="use_default_icon"
            @change=${e=>Ya(e,this)}
          />
        </div>

        ${this._config.use_default_icon?"":H`
              <div class="switch-row">
                <span class="switch-label"
                  >${fi("material_control_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${null!==(i=this._config.dual_icon)&&void 0!==i&&i}
                  configValue="dual_icon"
                  @change=${e=>Ya(e,this)}
                />
              </div>
              ${this._config.dual_icon?H`
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="Icon ON"
                        .value=${this._config.icon_on||""}
                        configValue="icon_on"
                        @value-changed=${e=>Ya(e,this)}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Icon OFF"
                        .value=${this._config.icon_off||""}
                        configValue="icon_off"
                        @value-changed=${e=>Ya(e,this)}
                      ></ha-icon-picker>
                    </div>
                  `:H`
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon||""}
                      configValue="icon"
                      @value-changed=${e=>Ya(e,this)}
                    ></ha-icon-picker>
                  `}
            `}

        <div class="warning">${fi("actions.warning")}</div>
        <div>
          <h4 style="margin-bottom: 10px;">
            ${fi("actions.tap_action_title")}
          </h4>
          ${n("tap_action",this._config.tap_action,this._tapActionChanged())}
        </div>

        <div>
          <h4 style="margin-bottom: 10px;">
            ${fi("actions.hold_action_title")}
          </h4>
          ${n("hold_action",this._config.hold_action,this._holdActionChanged())}
        </div>
      </div>
      ${Ba()}
    `}};so.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .action-editor ha-textarea {
      width: 100%;
      font-family: monospace;
    }

    .warning {
      margin-top: 16px;
      color: var(--error-color, #d32f2f);
      font-size: 0.9rem;
    }
  `,e([he({attribute:!1})],so.prototype,"hass",void 0),e([pe()],so.prototype,"_config",void 0),e([pe()],so.prototype,"_configLoaded",void 0),so=e([ce("material-control-card-editor")],so);let ro=class extends re{constructor(){super(...arguments),this._config=$i,this._configLoaded=!1,this._onHoldSelected=e=>{if(!this._config)return;const t=e.detail.value;t!==this._getActionValue(this._config.hold_action)&&this._setAction("hold_action",t)}}setConfig(e){this._config=Object.assign(Object.assign(Object.assign({},$i),e),{tap_action:e.tap_action,hold_action:e.hold_action}),this._configLoaded=!0}_valueChanged(e){var t,i;if(!this._config)return;const n=e.target,a=n.getAttribute("configValue");if(!a)return;const o=void 0!==(null===(t=e.detail)||void 0===t?void 0:t.value)?e.detail.value:void 0!==n.checked?n.checked:null!==(i=n.value)&&void 0!==i?i:"",s=Object.assign(Object.assign({},this._config),{[a]:o});s.control_type!==Ci.APP_VERSION&&s.control_type!==Ci.ACTION||delete s.entity,s.use_default_toggle&&(delete s.tap_action,delete s.hold_action),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}_getActionValue(e){var t;return e?"string"==typeof e?e:null!==(t=e.action)&&void 0!==t?t:"toggle":"toggle"}_onTapSelected(e){if(!this._config||!this.hass)return;const t=e.detail.value;t!==this._getActionValue(this._config.tap_action)&&this._setAction("tap_action",t)}_setAction(e,t){const i={toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"}}[t]||{action:t},n=Object.assign(Object.assign({},this._config),{[e]:i});this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n}})),this._config=n}_setActionValue(e,t,i){let n=this._config[e];"string"==typeof n&&(n={action:n});const a=Object.assign(Object.assign({},n),{[t]:i});this._config=Object.assign(Object.assign({},this._config),{[e]:a}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}setEntityFilter(){switch(this._config.control_type){case Ci.THERMOMETER:return["climate"];case Ci.AUTOMATION:return["automation"];case Ci.SCENE:return["scene"];case Ci.MEDIA_PLAYER:return["media_player"];default:return}}render(){var e,t,i,n,a,o,s,r,l,c,d;if(!this._config||!this.hass)return H``;this._config.use_default_icon=null===(e=this._config.use_default_icon)||void 0===e||e,this._config.control_type!=Ci.APP_VERSION&&this._config.control_type!=Ci.ACTION||(this._config.use_default_icon=!1),this._config.control_type==Ci.ACTION&&(this._config.use_default_toggle=!1),this._config.use_default_toggle=null===(t=this._config.use_default_toggle)||void 0===t||t,this._config.use_default_text=null===(i=this._config.use_default_text)||void 0===i||i;const u=[{value:"generic",label:fi("material_button_card.type.generic")},{value:"thermometer",label:fi("material_button_card.type.thermometer")},{value:"automation",label:fi("material_button_card.type.automation")},{value:"scene",label:fi("material_button_card.type.scene")},{value:"media_player",label:fi("material_button_card.type.media")},{value:"state",label:fi("material_button_card.type.state")},{value:"action",label:fi("material_button_card.type.action")},{value:"app_version",label:fi("material_button_card.type.app_version")}],h=[{value:"false",label:fi("material_climate_card.false")},{value:"true",label:fi("material_climate_card.true")},{value:"auto",label:fi("material_climate_card.auto")}],p=[{value:"toggle",label:fi("actions.toggle")},{value:"more-info",label:fi("actions.more_info")},{value:"navigate",label:fi("actions.navigate")},{value:"url",label:fi("actions.url")},{value:"none",label:fi("actions.none")}];return H`
      <div class="form">
        <ha-selector
          .hass=${this.hass}
          label="${fi("material_button_card.control_type")}"
          .selector=${{select:{options:u,mode:"dropdown"}}}
          .value=${null!==(n=this._config.control_type)&&void 0!==n?n:"generic"}
          .required=${!0}
          configValue="control_type"
          @value-changed=${e=>Ya(e,this)}
        >
        </ha-selector>

        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{text:{}}}
          .label=${fi("material_button_card.name")}
          .value=${this._config.name||""}
          configValue="name"
          @value-changed=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-selector>

        ${this._config.control_type==Ci.APP_VERSION||this._config.control_type==Ci.ACTION?H``:H`<ha-entity-picker
              label="Entity"
              .value=${this._config.entity||""}
              .hass=${this.hass}
              .includeDomains=${this.setEntityFilter()}
              allow-custom-entity
              configValue="entity"
              @value-changed=${e=>Ga(e,this)}
              required
            ></ha-entity-picker>`}
        ${this._config.control_type==Ci.APP_VERSION||this._config.control_type==Ci.ACTION?H``:H`<div class="switch-row">
              <span class="switch-label"
                >${fi("material_button_card.dual_icon.default")}</span
              >
              <ha-switch
                .checked=${null===(a=this._config.use_default_icon)||void 0===a||a}
                configValue="use_default_icon"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_icon?H``:H`${this._config.control_type==Ci.APP_VERSION||this._config.control_type==Ci.ACTION||this._config.control_type==Ci.THERMOMETER||this._config.control_type==Ci.SCENE||this._config.control_type==Ci.STATE?H``:H`<div class="switch-row">
                  <span class="switch-label"
                    >${fi("material_button_card.dual_icon.options")}</span
                  >
                  <ha-switch
                    .checked=${null!==(o=this._config.dual_icon)&&void 0!==o&&o}
                    configValue="dual_icon"
                    @change=${this._valueChanged}
                  />
                </div>`}
            ${this._config.dual_icon?H`
                  <div class="dual-icons">
                    <ha-icon-picker
                      label="Icon ON"
                      .value=${this._config.icon_on||""}
                      configValue="icon_on"
                      @value-changed=${this._valueChanged}
                      placeholder="mdi:lightbulb-on"
                    ></ha-icon-picker>
                    <ha-icon-picker
                      label="Icon OFF"
                      .value=${this._config.icon_off||""}
                      configValue="icon_off"
                      @value-changed=${this._valueChanged}
                      placeholder="mdi:lightbulb-off"
                    ></ha-icon-picker>
                  </div>
                `:H`
                  <ha-icon-picker
                    label="Icon"
                    .value=${this._config.icon||""}
                    configValue="icon"
                    @value-changed=${this._valueChanged}
                    placeholder="mdi:lightbulb"
                  />
                `} `}
        ${this._config.control_type==Ci.APP_VERSION||this._config.control_type==Ci.ACTION||this._config.control_type==Ci.THERMOMETER||this._config.control_type==Ci.SCENE||this._config.control_type==Ci.MEDIA_PLAYER||this._config.control_type==Ci.STATE?H``:H`<div class="switch-row">
              <span class="switch-label"
                >${fi("material_button_card.dual_text.default")}</span
              >
              <ha-switch
                .checked=${null===(s=this._config.use_default_text)||void 0===s||s}
                configValue="use_default_text"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_text?H``:H`
              <div class="dual-icons">
                <ha-selector
                  style="max-height: 56px"
                  .hass=${this.hass}
                  .selector=${{text:{}}}
                  .label=${fi("material_button_card.dual_text.text_on")}
                  .value=${this._config.text_on||""}
                  configValue="text_on"
                  @value-changed=${this._valueChanged}
                  placeholder="On"
                ></ha-selector
                ><ha-selector
                  style="max-height: 56px"
                  .hass=${this.hass}
                  .selector=${{text:{}}}
                  .label=${fi("material_button_card.dual_text.text_off")}
                  .value=${this._config.text_off||""}
                  configValue="text_off"
                  @value-changed=${this._valueChanged}
                  placeholder="Off"
                ></ha-selector>
              </div>
            `}
        ${this._config.control_type!=Ci.THERMOMETER?H``:H` <div class="switch-row">
                <span class="switch-label"
                  >${fi("material_climate_card.theme")}</span
                >
                <ha-switch
                  .checked=${null!==(r=this._config.use_material_color)&&void 0!==r&&r}
                  configValue="use_material_color"
                  @change=${this._valueChanged}
                />
              </div>
              <!--<div class="switch-row">
                <span class="switch-label"
                  >${fi("material_climate_card.fix_temperature")}</span
                >
                <ha-switch
                  .checked=${null!==(l=this._config.fix_temperature)&&void 0!==l&&l}
                  configValue="fix_temperature"
                  @change=${this._valueChanged}
                />
              </div>-->
              <ha-selector
                .hass=${this.hass}
                label="${fi("material_climate_card.fix_temperature")}"
                .selector=${{select:{options:h,mode:"dropdown"}}}
                .value=${null!==(c=this._config.fix_temperature)&&void 0!==c?c:"false"}
                configValue="fix_temperature"
                @value-changed=${e=>Ya(e,this)}
              >
              </ha-selector>`}
        ${this._config.control_type==Ci.ACTION?H``:H`<div class="switch-row">
              <span class="switch-label"
                >${fi("actions.automatic_action")}</span
              >
              <ha-switch
                .checked=${null===(d=this._config.use_default_toggle)||void 0===d||d}
                configValue="use_default_toggle"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_toggle?H``:H`<div class="warning">${fi("actions.warning")}</div>
              <ha-selector
                .hass=${this.hass}
                label="${fi("actions.tap_action_title")}"
                .selector=${{select:{options:p,mode:"dropdown"}}}
                .value=${this._getActionValue(this._config.tap_action)}
                @value-changed=${this._onTapSelected}
              >
              </ha-selector>

              ${this._renderExtraField(this._config.tap_action,(e,t)=>this._setActionValue("tap_action",e,t))}

              <ha-selector
                .hass=${this.hass}
                label="${fi("actions.hold_action_title")}"
                .selector=${{select:{options:p,mode:"dropdown"}}}
                .value=${this._getActionValue(this._config.hold_action)}
                @value-changed=${this._onHoldSelected}
              >
              </ha-selector>

              ${this._renderExtraField(this._config.hold_action,(e,t)=>this._setActionValue("hold_action",e,t))}`}
      </div>
      ${Ba()}
    `}_renderExtraField(e,t){var i;const n=null!==(i=null==e?void 0:e.action)&&void 0!==i?i:e;return H`
      ${"navigate"===n?H`
            <ha-selector
              style="display: block; margin-top: 10px;"
              .hass=${this.hass}
              .selector=${{navigation:{}}}
              .value=${(null==e?void 0:e.navigation_path)||""}
              .label=${fi("actions.navigate")}
              .configValue=${"navigation_path"}
              @value-changed=${e=>t("navigation_path",e.detail.value)}
            ></ha-selector>
          `:""}
      ${"url"===n?H`
            <ha-selector
              style="display: block; margin-top: 10px;"
              .hass=${this.hass}
              .selector=${{text:{}}}
              .value=${(null==e?void 0:e.url_path)||""}
              .label=${fi("actions.url")}
              .configValue=${"url_path"}
              @value-changed=${e=>t("url_path",e.detail.value)}
            ></ha-selector>
          `:""}
    `}};ro.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .warning {
      margin-top: 16px;
      color: var(--error-color, #d32f2f);
      font-size: 0.9rem;
    }
  `,e([he({attribute:!1})],ro.prototype,"hass",void 0),e([pe()],ro.prototype,"_config",void 0),e([pe()],ro.prototype,"_configLoaded",void 0),ro=e([ce("material-button-card-editor")],ro);let lo=class extends re{constructor(){super(...arguments),this._config=Za,this._onHoldSelected=e=>{if(!this._config)return;const t=e.detail.value;t!==this._getActionValue(this._config.hold_action,"more-info")&&this._setAction("hold_action",t)},this._onArrowSelected=e=>{if(!this._config)return;const t=e.detail.value;t!==this._getActionValue(this._config.arrow_action,"more-info")&&this._setAction("arrow_action",t)}}setConfig(e){this._config=Object.assign({},e)}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}setEntityFilter(){switch(this._config.control_type){case Ci.LIGHT:return["light"];case Ci.COVER:return["cover"];default:return}}_getActionValue(e,t="toggle"){var i;return e?"string"==typeof e?e:null!==(i=e.action)&&void 0!==i?i:t:t}_onTapSelected(e){if(!this._config||!this.hass)return;const t=e.detail.value;t!==this._getActionValue(this._config.tap_action,"toggle")&&this._setAction("tap_action",t)}_setAction(e,t){const i={toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"}}[t]||{action:t},n=Object.assign(Object.assign({},this._config),{[e]:i});this._config=n,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n},bubbles:!0,composed:!0}))}_setActionValue(e,t,i){let n=this._config[e];"string"==typeof n&&(n={action:n});const a=Object.assign(Object.assign({},n),{[t]:i});this._config=Object.assign(Object.assign({},this._config),{[e]:a}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_renderExtraField(e,t){var i;const n=null!==(i=null==e?void 0:e.action)&&void 0!==i?i:e;return H`
      ${"navigate"===n?H`
            <ha-selector
              style="display: block; margin-top: 10px;"
              .hass=${this.hass}
              .selector=${{navigation:{}}}
              .value=${(null==e?void 0:e.navigation_path)||""}
              .label=${fi("actions.navigate")}
              .configValue=${"navigation_path"}
              @value-changed=${e=>t("navigation_path",e.detail.value)}
            ></ha-selector>
          `:""}
      ${"url"===n?H`
            <ha-selector
              style="display: block; margin-top: 10px;"
              .hass=${this.hass}
              .selector=${{text:{}}}
              .value=${(null==e?void 0:e.url_path)||""}
              .label=${fi("actions.url")}
              .configValue=${"url_path"}
              @value-changed=${e=>t("url_path",e.detail.value)}
            ></ha-selector>
          `:""}
    `}render(){var e,t,i,n;if(!this._config||!this.hass)return H``;const a=[{value:"light",label:fi("material_slider_card.type.light")},{value:"cover",label:fi("material_slider_card.type.cover")}],o=[{value:"toggle",label:fi("actions.toggle")},{value:"more-info",label:fi("actions.more_info")},{value:"navigate",label:fi("actions.navigate")},{value:"url",label:fi("actions.url")},{value:"none",label:fi("actions.none")}];return H`
      <div class="form">
        <ha-selector
          .hass=${this.hass}
          label="${fi("material_slider_card.control_type")}"
          .selector=${{select:{options:a,mode:"dropdown"}}}
          configValue="control_type"
          .value=${null!==(e=this._config.control_type)&&void 0!==e?e:"light"}
          @value-changed=${e=>Ya(e,this)}
        >
        </ha-selector>

        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{text:{}}}
          .label=${fi("material_slider_card.name")}
          .value=${this._config.name||""}
          configValue="name"
          @value-changed=${e=>Ya(e,this)}
          placeholder="e.g. Cooler"
        ></ha-selector>

        <ha-entity-picker
          label="${fi("material_slider_card.entity")}"
          .value=${this._config.entity||""}
          .hass=${this.hass}
          .includeDomains=${this.setEntityFilter()}
          allow-custom-entity
          configValue="entity"
          @value-changed=${e=>Ga(e,this)}
          required
        ></ha-entity-picker>

        <ha-icon-picker
          label="${fi("material_slider_card.icon")}"
          .value=${this._config.icon||""}
          configValue="icon"
          @value-changed=${e=>Ya(e,this)}
          placeholder="mdi:lightbulb"
        ></ha-icon-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${fi("material_slider_card.percentage")}</span
          >
          <ha-switch
            .checked=${null===(t=this._config.show_percentage)||void 0===t||t}
            configValue="show_percentage"
            @change=${e=>Ya(e,this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${fi("material_slider_card.bold_text")}</span
          >
          <ha-switch
            .checked=${null!==(i=this._config.bold_text)&&void 0!==i&&i}
            configValue="bold_text"
            @change=${e=>Ya(e,this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${fi("material_slider_card.colorize")}</span
          >
          <ha-switch
            .checked=${null!==(n=this._config.colorize)&&void 0!==n&&n}
            configValue="colorize"
            @change=${e=>Ya(e,this)}
          />
        </div>

        <ha-selector
          .hass=${this.hass}
          label="${fi("actions.tap_action_title")}"
          .selector=${{select:{options:o,mode:"dropdown"}}}
          .value=${this._getActionValue(this._config.tap_action,"toggle")}
          @value-changed=${e=>this._onTapSelected(e)}
        >
        </ha-selector>

        ${this._renderExtraField(this._config.tap_action,(e,t)=>this._setActionValue("tap_action",e,t))}

        <ha-selector
          .hass=${this.hass}
          label="${fi("actions.hold_action_title")}"
          .selector=${{select:{options:o,mode:"dropdown"}}}
          .value=${this._getActionValue(this._config.hold_action,"more-info")}
          @value-changed=${this._onHoldSelected}
        >
        </ha-selector>

        ${this._renderExtraField(this._config.hold_action,(e,t)=>this._setActionValue("hold_action",e,t))}

        <ha-selector
          .hass=${this.hass}
          label="${fi("actions.arrow_action_title")}"
          .selector=${{select:{options:o,mode:"dropdown"}}}
          .value=${this._getActionValue(this._config.arrow_action,"more-info")}
          @value-changed=${this._onArrowSelected}
        >
        </ha-selector>

        ${this._renderExtraField(this._config.arrow_action,(e,t)=>this._setActionValue("arrow_action",e,t))}
      </div>
      ${Ba()}
    `}};lo.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `,e([he({attribute:!1})],lo.prototype,"hass",void 0),e([pe()],lo.prototype,"_config",void 0),lo=e([ce("material-slider-card-editor")],lo);let co=class extends re{static getStubConfig(){return{type:"custom:material-lights-card",on_text:"Lights on",off_text:"Lights off"}}async setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}async updated(e){if(e.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const e=this.mapTemplate(this._config),t=$a.load(e),i=await window.loadCardHelpers(),n=await i.createCardElement(t);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material Lights"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-lights-card-editor")}mapTemplate(e){const t=function(e){const t=e.control_area&&e.area_id?e.area_id:void 0;return`type: custom:mod-card\ncard_mod:\n  style: |\n    ha-card {\n      box-shadow: none !important;\n    }\ncard:\n  type: vertical-stack\n  cards:\n    - type: custom:mod-card\n      card_mod:\n        style: |\n          ha-card {\n            box-shadow: none !important;\n          }\n          hui-horizontal-stack-card:\n            $: |\n              #root > button-card {\n                margin: 0px;\n              }\n      card:\n        type: horizontal-stack\n        cards:\n          - type: custom:button-card\n            show_icon: false\n            show_label: false\n            show_name: true\n            triggers_update: all\n            name: |\n              [[[\n                return '${e.on_text}'\n              ]]]\n            styles:\n              card:\n                - height: 65px\n                - padding: 0px\n                - margin: 0px\n                - border-top-left-radius: 999vh\n                - border-bottom-left-radius: 999vh\n                - border-top-right-radius: 0vh\n                - border-bottom-right-radius: 0vh\n                - border: 1px solid\n                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)\n                - font-size: 15px\n                - font-weight: 600\n                - border-color: |\n                    [[[\n                      let area_id = ${t?"'"+t+"'":void 0}\n                      let lightsInArea;\n                      let anyOn = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        anyOn = lightsInArea.some((id) => hass.states[id]?.state === "on");\n                      } else {\n                        anyOn =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length > 0;\n                      }\n                      return anyOn\n                        ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n                - background-color: |\n                    [[[\n                      let area_id = ${t?"'"+t+"'":void 0}\n                      let lightsInArea;\n                      let anyOn = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        anyOn = lightsInArea.some((id) => hass.states[id]?.state === "on");\n                      } else {\n                        anyOn =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length > 0;\n                      }\n                      return anyOn\n                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n              name:\n                - color: |\n                    [[[\n                      let area_id = ${t?"'"+t+"'":void 0}\n                      let lightsInArea;\n                      let anyOn = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        anyOn = lightsInArea.some((id) => hass.states[id]?.state === "on");\n                      } else {\n                        anyOn =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length > 0;\n                      }\n                      return anyOn\n                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                        : 'var(--md-sys-color-on-surface-variant)';\n                    ]]]\n            tap_action:\n              action: call-service\n              service: light.turn_on\n              data:\n                ${t?"area_id: "+t:"entity_id: all"}\n          - type: custom:button-card\n            show_icon: false\n            show_label: false\n            show_name: true\n            triggers_update: all\n            name: |\n              [[[\n                return '${e.off_text}'\n              ]]]\n            styles:\n              card:\n                - height: 65px\n                - padding: 0px\n                - margin: 0px\n                - border-top-right-radius: 999vh\n                - border-bottom-right-radius: 999vh\n                - border-top-left-radius: 0vh\n                - border-bottom-left-radius: 0vh\n                - border: 1px solid\n                - font-size: 15px\n                - font-weight: 600\n                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)\n                - border-color: |\n                    [[[\n                      let area_id = ${t?"'"+t+"'":void 0}\n                      let lightsInArea;\n                      let allOff = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        allOff = lightsInArea.every((id) => hass.states[id]?.state === "off");\n                      } else {\n                        allOff =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length === 0;\n                      }\n                      return allOff\n                        ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n                - background-color: |\n                    [[[\n                      let area_id = ${t?"'"+t+"'":void 0}\n                      let lightsInArea;\n                      let allOff = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        allOff = lightsInArea.every((id) => hass.states[id]?.state === "off");\n                      } else {\n                        allOff =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length === 0;\n                      }\n                      return allOff\n                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                        : "var(--md-sys-color-surface-container)";\n                    ]]]\n              name:\n                - color: |\n                    [[[\n                      let area_id = ${t?"'"+t+"'":void 0}\n                      let lightsInArea;\n                      let allOff = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        allOff = lightsInArea.every((id) => hass.states[id]?.state === "off");\n                      } else {\n                        allOff =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length === 0;\n                      }\n                      return allOff\n                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                        : 'var(--md-sys-color-on-surface-variant)';\n                    ]]]\n            tap_action:\n              action: call-service\n              service: light.turn_off\n              data:\n                ${t?"area_id: "+t:"entity_id: all"}\n`}(e);return t}_handleClick(e){const t=e.target.closest(".ripple-card");t&&Ai(t,e)}render(){return this._card?H`
      <div style="margin: 0px 0px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `:H`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};co.styles=s`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,e([he({attribute:!1})],co.prototype,"hass",void 0),e([pe()],co.prototype,"_config",void 0),e([pe()],co.prototype,"_card",void 0),co=e([ce("material-lights-card")],co);const uo={type:"custom:material-control-card",on_text:"Lights on",off_text:"Lights off",control_area:!1};let ho=class extends re{constructor(){super(...arguments),this._config=uo}setConfig(e){this._config=Object.assign({},e)}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}render(){var e;return this._config&&this.hass?H`
      <div class="form">
        <span class="text-label"
          >${fi("material_lights_card.on_text")}</span
        >

        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{text:{}}}
          .label=${fi("material_lights_card.on_text")}
          .value=${this._config.on_text||""}
          configValue="on_text"
          @value-changed=${e=>Ya(e,this)}
          placeholder="e.g. Lights On"
        ></ha-selector>

        <span class="text-label"
          >${fi("material_lights_card.off_text")}</span
        >
        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{text:{}}}
          .label=${fi("material_lights_card.off_text")}
          .value=${this._config.off_text||""}
          configValue="off_text"
          @value-changed=${e=>Ya(e,this)}
          placeholder="e.g. Lights Off"
        ></ha-selector>

        <div class="switch-row">
          <span class="switch-label"
            >${fi("material_lights_card.control_area")}</span
          >
          <ha-switch
            .checked=${null!==(e=this._config.control_area)&&void 0!==e&&e}
            configValue="control_area"
            @change=${e=>{Ya(e,this),this.resetForm()}}
          />
        </div>

        ${this._config.control_area?H`
              <ha-selector
                style="display: block; margin-top: 10px;"
                .hass=${this.hass}
                .selector=${{area:{}}}
                .value=${this._config.area_id}
                .label=${fi("material_lights_card.area_id")}
                configValue="area_id"
                @value-changed=${e=>Ya(e,this)}
              ></ha-selector>
            `:""}
      </div>
      ${Ba()}
    `:H``}resetForm(){!this._config.control_area&&"area_id"in this._config&&(delete this._config.area_id,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}};function po(e){const t=document.createElement("a");t.href=e,t.target="_blank",t.rel="noopener noreferrer",document.body.appendChild(t),t.click(),document.body.removeChild(t)}function mo(){po(function(){const e=navigator.userAgent||"";return/Android/i.test(e)?"app://com.google.android.apps.chromecast.app":/iPhone|iPad|iPod/i.test(e)?"googlehome://":"https://home.google.com/"}())}function fo(){po(function(){const e=navigator.userAgent||"";return/Android/i.test(e)?"app://com.google.android.youtube":/iPhone|iPad|iPod/i.test(e)?"youtube://":"https://www.youtube.com/"}())}function go(){po(function(){const e=navigator.userAgent||"";return/Android/i.test(e)?"app://com.spotify.music":/iPhone|iPad|iPod/i.test(e)?"spotify://":"https://open.spotify.com/"}())}function _o(){po(function(){const e=navigator.userAgent||"";return/Android/i.test(e)?"app://com.netflix.mediaclient":/iPhone|iPad|iPod/i.test(e)?"nflx://":"https://www.netflix.com/"}())}function vo(){po(function(){const e=navigator.userAgent||"";return/Android/i.test(e)?"app://com.twitch.tv":/iPhone|iPad|iPod/i.test(e)?"twitch://":"https://www.twitch.tv/"}())}ho.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .text-label {
      font-size: 14px;
      font-weight: 500;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `,e([he({attribute:!1})],ho.prototype,"hass",void 0),e([pe()],ho.prototype,"_config",void 0),ho=e([ce("material-lights-card-editor")],ho);let bo=class extends re{constructor(){super(...arguments),this._closing=!1,this._volume=0,this._progress=0,this._isPlaying=!1,this._isPaused=!1,this._isOff=!0,this._isConnected=!1,this._isDragging=!1,this._animationFrameId=null,this._lastPosition=0,this._lastDuration=1,this._lastFrameTime=0,this._dragPositionSeconds=0,this._touchStartX=null,this._touchCurrentX=null,this._swipeThreshold=80,this._swipeEdge=50,this._onTouchStart=e=>{this._touchStartX=e.changedTouches[0].clientX,this._touchCurrentX=this._touchStartX},this._onTouchMove=e=>{this._touchCurrentX=e.changedTouches[0].clientX,null!==this._touchStartX&&this._touchStartX<this._swipeEdge&&e.preventDefault()},this._onTouchEnd=()=>{if(null===this._touchStartX||null===this._touchCurrentX)return;const e=this._touchCurrentX-this._touchStartX;this._touchStartX<this._swipeEdge&&e>this._swipeThreshold&&this._close(),this._touchStartX=null,this._touchCurrentX=null}}_close(){this._closing=!0,setTimeout(()=>{this.dispatchEvent(new CustomEvent("close-overlay",{bubbles:!0,composed:!0}))},200)}_callService(e,t={}){if(this.entity)try{this.hass.callService("media_player",e,Object.assign({entity_id:this.entity},t))}catch(e){console.error("Error calling service:",e)}else console.error("No entity defined for service call")}_computeServerPosition(e){var t,i;const n=Number(null===(t=null==e?void 0:e.attributes)||void 0===t?void 0:t.media_position)||0,a=null===(i=null==e?void 0:e.attributes)||void 0===i?void 0:i.media_position_updated_at;if(!a)return n;const o=Date.parse(a);if(isNaN(o))return n;const s=Date.now();return n+Math.max(0,(s-o)/1e3)}updated(e){var t,i,n;if(super.updated(e),!this.hass||!this.entity)return;const a=null===(i=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===i?void 0:i[this.entity];if(a&&e.has("hass")){const e=null!==(n=a.attributes.volume_level)&&void 0!==n?n:0;Math.abs(e-this._volume)>.01&&(this._volume=e);const t=Number(a.attributes.media_duration)||1,i=this._computeServerPosition(a);this._lastDuration=Math.max(t,1),this._lastPosition=Math.min(i,this._lastDuration);const o=Math.round(this._lastPosition/this._lastDuration*1e3)/10;Math.abs(o-this._progress)>.1&&(this._progress=o),this.changePlyingState(a),this._isConnected=["playing","paused","idle"].includes(a.state),this._isOff="off"===a.state,this._lastFrameTime=Date.now()}}changePlyingState(e){const t="playing"===e.state&&e.attributes.media_title,i="paused"===e.state,n=this._isPlaying;this._isPaused=i,t!==n&&(this._isPlaying=t,this._isPlaying&&null===this._animationFrameId&&!this._isDragging?this._animateProgress():this._isPlaying||null===this._animationFrameId||(cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null))}_animateProgress(){const e=()=>{if(!this._isPlaying||this._isDragging)return void(this._animationFrameId=null);const t=Date.now(),i=(t-this._lastFrameTime)/1e3;this._lastFrameTime=t,this._lastPosition=Math.min(this._lastPosition+i,this._lastDuration),this._progress=this._lastPosition/Math.max(1,this._lastDuration)*100,this.requestUpdate(),this._animationFrameId=requestAnimationFrame(e)};null===this._animationFrameId&&(this._lastFrameTime=Date.now(),this._animationFrameId=requestAnimationFrame(e))}_startSeek(e){e.preventDefault();const t=this.renderRoot.querySelector(".progress-bar");if(!t)return;this._isDragging=!0;const i=e=>{var i,n,a;const o=t.getBoundingClientRect(),s=(e=>e.touches?e.touches[0].clientX:e.clientX)(e);let r=(s-o.left)/o.width;r=Math.min(Math.max(r,0),1);const l=null===(n=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[this.entity],c=Number(null===(a=null==l?void 0:l.attributes)||void 0===a?void 0:a.media_duration)||1;this._dragPositionSeconds=r*c,this._progress=100*r;const d=t.querySelector(".progress-fill"),u=t.querySelector(".progress-thumb");d&&(d.style.width=`${this._progress}%`),u&&(u.style.left=`calc(${this._progress}% - 6px)`)},n=e=>i(e),a=e=>{var t,o,s;i(e);const r=null===(o=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===o?void 0:o[this.entity],l=Number(null===(s=null==r?void 0:r.attributes)||void 0===s?void 0:s.media_duration)||1,c=this._dragPositionSeconds;this._callService("media_seek",{seek_position:c}),this._lastPosition=Math.min(c,l),this._lastDuration=Math.max(l,1),this._lastFrameTime=Date.now(),this._progress=this._lastPosition/this._lastDuration*100,this._isDragging=!1,window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",n),window.removeEventListener("touchend",a)};window.addEventListener("mousemove",n),window.addEventListener("mouseup",a),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",a),i(e)}connectedCallback(){super.connectedCallback(),this.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.addEventListener("touchend",this._onTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("touchstart",this._onTouchStart),this.removeEventListener("touchmove",this._onTouchMove),this.removeEventListener("touchend",this._onTouchEnd),null!==this._animationFrameId&&(cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null)}_startDrag(e){try{e.preventDefault(),e.stopPropagation();const t=this.renderRoot.querySelector(".volume-card");if(!t)return;const i=e=>{const i=t.getBoundingClientRect();let n=((e instanceof TouchEvent?e.touches[0].clientX:e.clientX)-i.left)/i.width;n=Math.min(Math.max(n,0),1),this._volume=n,this._callService("volume_set",{volume_level:n})},n=e=>{e.preventDefault(),i(e)},a=e=>{e.preventDefault(),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",n),window.removeEventListener("touchend",a)};window.addEventListener("mousemove",n,{passive:!1}),window.addEventListener("mouseup",a),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",a)}catch(e){console.error("Error updating volume:",e)}}_onClick(e){Ai(e.currentTarget,e)}_onRemoteClick(e){this._onClick(e),this._moreInfo()}_moreInfo(){var e;if(!this.hass||!this.entity)return;this._close();const t=new CustomEvent("hass-more-info",{detail:{entityId:this.entity},bubbles:!0,composed:!0});null===(e=document.querySelector("home-assistant"))||void 0===e||e.dispatchEvent(t)}async _turnOnDevice(e){this._onClick(e),this._callService("turn_on")}_stopCast(e){this._onClick(e);const t=this.hass.states[this.entity];if(!t)return;t.attributes.supported_features&&8192&t.attributes.supported_features?this._callService("media_stop"):this._callService("turn_off")}_togglePlay(e){if(e&&(e.preventDefault(),e.stopPropagation()),!this.hass||!this.entity)return;const t=this._isPlaying?"media_pause":"media_play";this._isPlaying=!this._isPlaying,this._isPaused=!this._isPaused,this.requestUpdate(),this.hass.callService("media_player",t,{entity_id:this.entity}).then(()=>{this._isPlaying?this._animateProgress():cancelAnimationFrame(this._animationFrameId)}).catch(e=>console.error(`Error calling ${t}:`,e))}_settings(){var e;if(!this.hass||!this.entity)return;if(!this.hass.states[this.entity])return;const t=null===(e=this.hass.entities)||void 0===e?void 0:e[this.entity],i=null==t?void 0:t.device_id;this._close(),setTimeout(()=>{i?xi(0,`/config/devices/device/${i}`):this._moreInfo()},200)}openLinks(e,t){this._onClick(e),"Google"==t&&mo(),"YouTube"==t&&fo(),"Spotify"==t&&go(),"Netflix"==t&&_o(),"Twitch"==t&&vo()}render(){var e,t,i,n,a;const o=this.hass.states[this.entity];if(!o)return H``;const{attributes:s}=o,r=Ui(this._isPlaying,"playing"==o.state),l=Ui(this._isPaused,"paused"==o.state),c=(r||l)&&s.media_title,d=Math.round(100*this._volume),u=s.media_title&&""!==s.media_title?s.media_title:Ui(this._isPlaying,"playing"==o.state)?fi("material_media_overlay.media_card.playing"):fi("material_media_overlay.media_card.no_content"),h=null!==(e=s.media_artist)&&void 0!==e?e:"",p=null!==(t=s.app_name)&&void 0!==t?t:"",m=null!==(i=s.entity_picture)&&void 0!==i?i:s.entity_picture_local,f=m?`background-image: url(${m}); \n     background-size: cover; \n     background-position: center; \n     filter: brightness(0.4);`:"",g=this._isOff;return ki("--volume-brightness","dark"==((null===(a=null===(n=this.hass)||void 0===n?void 0:n.themes)||void 0===a?void 0:a.darkMode)?"dark":"light")?"brightness(0.7)":"brightness(1.05)",this.style),H`
      <div class="overlay ${this._closing?"closing":""}">
        <div class="header">
          <div class="header-left">
            <ha-icon-button @click=${this._close} class="close-btn">
              <ha-icon
                icon="m3rf:close"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Close"
              ></ha-icon>
            </ha-icon-button>

            <span class="friendly-name">${s.friendly_name}</span>
          </div>
          <div class="header-right">
            <ha-icon-button @click=${this._settings} class="settings-btn">
              <ha-icon
                icon="m3r:settings"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Settings"
              ></ha-icon>
            </ha-icon-button>
            <ha-icon-button @click=${this._moreInfo} class="settings-btn">
              <ha-icon
                icon="mdi:dots-vertical"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Menu"
              ></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        <!-- Video Player Card -->
        <div class="video-card">
          <div class="video-card-bg" style="${f}"></div>
          ${function(e,t){switch(e){case"Spotify":return H`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Spotify.webp"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;z-index: 1;"
      />`;case"YouTube":return H`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/YouTube.png"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;case"Netflix":return H`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Netflix.webp"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;case"Prime Video":return H`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Prime.png"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;case"Twitch":return H`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Twitch.jpg"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;default:return H`<ha-icon
        icon="m3r:play-circle"
        style="${t?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
      ></ha-icon>`}}(p,m)}
          
          ${g||!c?H``:H`<ha-icon
                  class="pause-button"
                  icon=${r?"mdi:pause":"mdi:play"}
                  @click=${e=>this._togglePlay(e)}
                  title=${r?"Pause":"Play"}
                  style=${`\n                    ${r?"":"border-radius: 50px;"}\n                    transition: width 1s ease-in-out, background-color 1s ease-in-out;\n                    background-color: ${o.attributes.media_title?"var(--md-sys-color-tertiary-container)":"var(--md-sys-color-secondary-container)"};\n                    color: ${o.attributes.media_title?"var(--md-sys-color-on-tertiary-container)":"var(--md-sys-color-on-secondary-container)"};\n                  `}
                >
                </ha-icon>`}

          <div class="video-info">
            <div
              class="video-title ellipsis"
              style="${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
            >
              ${u}
            </div>
            <div
              class="video-channel"
              style="${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
            >
              ${h}
            </div>
          </div>

          <!-- Video Controls -->
          <div class="video-controls">
            <ha-icon
              class="${g||!c?"disabled":""}"
              style="cursor: pointer; ${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
              icon="m3r:skip-previous"
              @click=${()=>this._callService("media_previous_track")}
            ></ha-icon>
            <div
              class="progress-bar ${g||!c?"disabled":""}"
              @mousedown=${this._startSeek}
              @touchstart=${this._startSeek}
            >
              <div
                class="progress-fill"
                style="width: ${this._progress}%; ${m?"background-color: #fff;":"background-color: var(--md-sys-color-on-secondary-container);"}"
              ></div>
              <div
                class="progress-thumb"
                style="left: calc(${this._progress}% - 6px); ${m?"background-color: #fff; border: 1px solid #fff;":"background-color: var(--md-sys-color-on-secondary-container); border: 1px solid var(--md-sys-color-on-secondary-container);"}""
              ></div>
            </div>
            <ha-icon
              class="${g||!c?"disabled":""}"
              style="cursor: pointer; ${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
              icon="m3r:skip-next"
              @click=${()=>this._callService("media_next_track")}
            ></ha-icon>
          </div>
        </div>

        ${d?H`<div
                class="volume-card"
                @mousedown=${this._startDrag}
                @touchstart=${this._startDrag}
              >
                <div
                  id="slider"
                  class="animate"
                  style="width: ${100*this._volume}%"
                ></div>
                <ha-icon class="volume-icon" icon="m3rf:volume-up"></ha-icon>
                <span class="volume-text" id="volumeText">${d}%</span>
              </div>`:H``}

        <!-- Menu Cards -->
        <div class="menu-card remote" @click=${this._onRemoteClick}>
          <ha-icon icon="m3o:google-tv-remote"></ha-icon>
          <span class="menu-text"
            >${fi("material_media_overlay.remote")}</span
          >
        </div>

        ${g||!this._isConnected?H`<div class="menu-card link" @click=${this._turnOnDevice}>
                <ha-icon icon="m3r:cast"></ha-icon>
                <span class="menu-text"
                  >${fi("material_media_overlay.cast")}</span
                >
              </div>`:H`<div
                class="menu-card cast"
                style="color: var(--md-sys-color-on-secondary-container)"
                @click=${this._stopCast}
              >
                <ha-icon icon="m3rf:cast"></ha-icon>
                <span class="menu-text"
                  >${fi("material_media_overlay.stop_cast")}</span
                >
              </div>`}
        ${function(e){return"YouTube"==e||"Spotify"==e||"Netflix"==e||"Prime Video"==e||"Twitch"==e}(p)?H`<div
                class="menu-card link"
                @click=${e=>this.openLinks(e,p)}
              >
                <ha-icon icon="m3rf:open-in-new"></ha-icon>
                <span class="menu-text"
                  >${fi("material_media_overlay.open")} ${p}</span
                >
              </div>`:H``}
        <div class="menu-card link" @click=${e=>this.openLinks(e,"Google")}>
          <ha-icon icon="m3of:home-app-logo"></ha-icon>
          <span class="menu-text"
            >${fi("material_media_overlay.open_google")}</span
          >
        </div>
      </div>
    `}};bo.styles=s`
    :host {
      -webkit-tap-highlight-color: transparent;
      font-family: var(--font-family);
    }

    .overlay {
      position: fixed;
      inset: 0;
      /*background: var(--card-background-color, #121212);*/
      background: var(
        --view-background,
        var(--lovelace-background, var(--primary-background-color))
      );
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 14px; /* aggiornato */
      z-index: 9999;
      animation: fadeIn 0.3s ease;
      gap: 18px; /* spazio verticale tra blocchi */
    }

    .overlay.closing {
      animation: fadeOut 0.3s ease forwards;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-left .friendly-name {
      color: var(--primary-text-color);
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 2px;
    }

    .header-right {
      display: flex;
      gap: 10px;
    }

    .close-btn,
    .setting-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0; /* opzionale, riduce eventuali margini interni */
      width: 40px; /* puoi regolare la dimensione */
      height: 40px; /* così l'icona è perfettamente centrata */
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(20px);
      }
    }

    /* Video Player Card */
    .video-card {
      background-color: var(--md-sys-color-surface-container);
      border-radius: 28px;
      padding: 18px;
      position: relative;
      height: 160px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 500px;
      width: 100%;
    }

    .video-card-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: brightness(0.4);
      z-index: 0;
      border-radius: 28px;
    }

    .video-card-content {
      position: relative;
      z-index: 1;
    }

    .play-button {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 48px;
      height: 48px;
      background-color: rgba(29, 27, 32, 0.8);
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      font-size: 20px;
    }

    .pause-button {
      position: absolute;
      top: calc(50% - 24px);
      right: 20px;
      /*background-color: var(--md-sys-color-secondary-container);
      background-color: var(--md-sys-color-tertiary-container);*/
      border-radius: 12px;
      padding: 12px 12px;
      font-size: 24px;
      /*color: var(--md-sys-color-on-secondary-container)
      color: var(--md-sys-color-on-tertiary-container);*/
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
    }

    .video-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1; /* Aggiungi questo */
      min-width: 0; /* Necessario per evitare overflow nel flex */
      margin-top: 30px;
      margin-right: 70px;
      z-index: 1;
    }

    .ellipsis {
      white-space: nowrap; /* forza il testo su una sola riga */
      overflow: hidden; /* nasconde l'eccesso */
      text-overflow: ellipsis; /* mostra i "..." alla fine */
    }

    .video-title {
      font-size: 18px;
      font-weight: 500;
      /*color: #1d1b20;*/
      margin-bottom: 4px;
      line-height: 1.2;
    }

    .video-channel {
      font-size: 14px;
      color: #49454f;
      font-weight: 400;
    }

    .video-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;
    }

    .control-btn {
      font-size: 32px;
      color: #49454f;
      cursor: pointer;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .progress-bar {
      flex: 1;
      height: 2px;
      background-color: #ccc;
      border-radius: 50px;
      position: relative;
      cursor: pointer;
      margin: 0px 30px;
    }

    .progress-fill {
      height: 100%;
      /*background-color: #6750a4;
      background-color: var(--md-sys-color-on-secondary-container);*/
      width: 0%;
      transition: width 0s linear;
      border-radius: 50px 0px 0px 50px;
    }

    .progress-thumb {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--md-sys-color-on-secondary-container);
      border: 1px solid var(--md-sys-color-on-secondary-container);
      pointer-events: none; /* il drag si gestisce sul parent */
    }

    /* Volume Card */
    .volume-card {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      max-width: 500px;
      width: 100%;
      position: relative;
      overflow: hidden; /* importante per contenere l'overlay */
      z-index: 1;
      cursor: pointer; /* Aggiunto per indicare interattività */
    }

    /* overlay che schiarisce solo lo sfondo */
    .volume-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--md-sys-color-secondary-container);
      filter: var(--volume-brightness); /* schiarisce solo il background */
      border-radius: inherit;
      z-index: 0; /* resta dietro */
    }

    /* contenuto sopra */
    .volume-card > * {
      position: relative;
      z-index: 1;
    }

    .volume-icon {
      color: var(--md-sys-color-on-secondary-container);
    }

    .volume-text {
      font-size: 16px;
      font-weight: 550;
      color: var(--md-sys-color-on-secondary-container);
    }

    #slider {
      height: 100%;
      position: absolute;
      background-color: var(--md-sys-color-secondary-container);
      z-index: 1; /* sopra lo sfondo schiarito */
      left: 0;
      top: 0;
      /*right: 50%;*/
      width: 0%;
      border-radius: 50px 0px 0px 50px;
    }

    #slider.animate {
      transition:
        width 0s ease,
        background-color 1s ease,
        filter 1s ease;
    }

    /* Menu Cards */
    .menu-card {
      /*margin-top: -20px;
      margin-bottom: -20px;
      margin: -20px 0px;*/
      border-radius: 14px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      max-width: 500px;
      width: 100%;
    }

    .menu-card.remote {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-card.cast {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
    }

    .menu-card.link {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-text {
      font-size: 15px;
      /*font-size: 16px;*/
      font-weight: 550;
      letter-spacing: 0.1px;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    .disabled,
    div.disabled,
    button:disabled,
    input:disabled,
    select:disabled,
    textarea:disabled {
      color: #888888 !important;
      cursor: not-allowed !important;
      opacity: 0.6 !important;
    }

    @supports (width: -webkit-fill-available) {
      .menu-card,
      .volume-card,
      .video-card {
        width: -webkit-fill-available;
      }
    }
  `,e([he({attribute:!1})],bo.prototype,"hass",void 0),e([he()],bo.prototype,"entity",void 0),e([pe()],bo.prototype,"_closing",void 0),e([pe()],bo.prototype,"_volume",void 0),e([pe()],bo.prototype,"_progress",void 0),e([pe()],bo.prototype,"_isPlaying",void 0),e([pe()],bo.prototype,"_isPaused",void 0),e([pe()],bo.prototype,"_isOff",void 0),e([pe()],bo.prototype,"_isConnected",void 0),e([pe()],bo.prototype,"_isDragging",void 0),bo=e([ce("material-media-overlay")],bo);const yo={type:"custom:material-users-card",is_user_map_enabled:!1,is_add_button_enabled:!1};let xo=class extends re{constructor(){super(...arguments),this._config=yo}static getStubConfig(){return{type:"custom:material-users-card"}}async setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}async updated(e){if(e.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const e=this.mapTemplate(),t=$a.load(e),i=await window.loadCardHelpers(),n=await i.createCardElement(t);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material User"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-users-card-editor")}mapTemplate(){const e=function(e,t){return`type: custom:mod-card\ncard_mod:\n  style: |\n    ha-card {\n      padding-left: 16px;\n      padding-right: 24px;\n      padding-top: 12px;\n      padding-bottom: 12px;\n      background: transparent;\n      box-shadow: none;\n    }\ncard:\n  type: horizontal-stack\n  cards:\n    - type: custom:auto-entities\n      card_param: cards\n      card:\n        type: horizontal-stack\n      sort:\n        numeric: false\n      filter:\n        include:\n          - domain: person\n            options:\n              type: custom:button-card\n              entity: this.entity_id\n              show_entity_picture: true\n              show_name: false\n              tap_action:\n                action: ${e||t.is_user_map_enabled?"more-info":"none"}\n              styles:\n                icon:\n                  - width: 40px\n                  - height: 40px\n                  - border-radius: 100%\n                img_cell:\n                  - background-color: transparent\n                  - border-radius: 100%\n                card:\n                  - border-radius: 100%\n                  - margin-left: 0px\n                  - margin-right: 1px\n                  - padding: 0px\n                  - width: max-content\n                  - justify-self: center\n          ${e||t.is_add_button_enabled?'- type: custom:button-card\n            icon: mdi:plus\n            show_entity_picture: true\n            show_name: false\n            styles:\n              icon:\n                - width: 24px\n                - height: 24px\n                - border-radius: 100%\n                - color: var(--token-color-text-primary)\n              card:\n                - border-radius: 100%\n                - margin-left: 0px\n                - margin-right: 1px\n                - padding: 8px\n                - width: max-content\n                - justify-self: center\n                - background-color: var(--token-color-background-card)\n            tap_action:\n              action: navigate\n              navigation_path: |\n                [[[ \n                  const isAdmin = hass.user?.is_admin;\n                  if (isAdmin) {\n                    return "/config/person";\n                  } else {\n                    return "/profile";\n                  }\n                ]]]\n            hold_action:\n              action: none':""}\n`}(this.hass.user.is_admin,this._config);return e}render(){return this._card?H` ${this._card} `:H`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};xo.styles=s`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,e([he({attribute:!1})],xo.prototype,"hass",void 0),e([pe()],xo.prototype,"_config",void 0),e([pe()],xo.prototype,"_card",void 0),xo=e([ce("material-users-card")],xo);const wo={type:"custom:material-menu-card",name:"Activity",icon:"mdi:history",label:"Info on the latest actions performed",tap_action:{action:"navigate",navigation_path:"./activity"}};let Ao=class extends re{constructor(){super(...arguments),this._config=wo}static getStubConfig(){return wo}async setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}async updated(e){if(e.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const e=this.mapTemplate(),t=$a.load(e),i=await window.loadCardHelpers(),n=await i.createCardElement(t);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material Menu"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-menu-card-editor")}mapTemplate(){return function(e){const{name:t,icon:i,label:n,tap_action:a,hold_action:o,double_tap_action:s}=e;return`type: custom:button-card\nname: ${t}\nicon: ${i}\nlabel: ${n}\nshow_name: true\nshow_icon: true\nshow_label: true\ntap_action:\n  ${Ji(a)}\nhold_action:\n  ${Ji(o)}\ndouble_tap_action:\n  ${Ji(s)}\nstyles:\n  grid:\n    - grid-template-columns: 54px calc(100% - 54px)\n    - grid-template-rows: 1fr 1fr\n    - grid-template-areas: |\n        "i n"\n        "i l"\n  card:\n    - height: 55px\n    - border-radius: 30px\n    - background-color: transparent\n    - padding: 0px\n    - box-shadow: none\n    - margin: 0px -15px\n  icon:\n    - color: var(--token-color-text-primary)\n    - width: 24px\n    - padding-right: 0px\n  name:\n    - font-size: 1.2rem\n    - align-self: end\n    - justify-self: start\n    - text-align: left\n    - width: 100%\n    - padding-bottom: 3px\n    - color: var(--token-color-text-primary)\n  label:\n    - font-size: 1rem\n    - align-self: start\n    - justify-self: start\n    - text-align: left\n    - padding-top: 3px\n    - width: 100%\n    - color: var(--token-color-text-secondary)\n`}(this._config)}render(){return this._card?H` ${this._card} `:H`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};Ao.styles=s`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,e([he({attribute:!1})],Ao.prototype,"hass",void 0),e([pe()],Ao.prototype,"_config",void 0),e([pe()],Ao.prototype,"_card",void 0),Ao=e([ce("material-menu-card")],Ao);let $o=class extends re{constructor(){super(...arguments),this._config=wo,this._configLoaded=!1}setConfig(e){this._config=Object.assign(Object.assign({},wo),e),this._configLoaded=!0}_fireConfigChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){return this._config&&this.hass?H`
      <div class="form">
        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{text:{}}}
          .label="Name"
          .value=${this._config.name||""}
          configValue="name"
          @value-changed=${e=>Ya(e,this)}
          placeholder="e.g. Cooler"
        ></ha-selector>

        <ha-selector
          style="max-height: 56px"
          .hass=${this.hass}
          .selector=${{text:{}}}
          .label="Label"
          .value=${this._config.label||""}
          configValue="label"
          @value-changed=${e=>Ya(e,this)}
        ></ha-selector>

        <ha-icon-picker
          label="Icon"
          .value=${this._config.icon||""}
          configValue="icon"
          @value-changed=${e=>Ya(e,this)}
        ></ha-icon-picker>

        <div class="warning">${fi("actions.warning")}</div>

        <h4 style="margin: 15px 0px -5px 0px;">
          ${fi("actions.tap_action_title")}
        </h4>
        ${this._renderActionSection("tap_action",this._config.tap_action)}
        <h4 style="margin: 15px 0px -5px 0px;">
          ${fi("actions.hold_action_title")}
        </h4>
        ${this._renderActionSection("hold_action",this._config.hold_action)}
        <h4 style="margin: 15px 0px -5px 0px;">
          ${fi("actions.double_tap_action_title")}
        </h4>
        ${this._renderActionSection("double_tap_action",this._config.double_tap_action)}
      </div>
      ${Ba()}
    `:H``}_renderActionSection(e,t){return this._renderActionEditor(t,(t,i)=>this._actionChanged(e,t,i))}_actionChanged(e,t,i){if(!this._configLoaded)return;const n=Object.assign({},this._config[e]||{});n[t]=i,this._config=Object.assign(Object.assign({},this._config),{[e]:n}),this._fireConfigChanged()}_renderActionEditor(e,t){var i;const n=null!==(i=null==e?void 0:e.action)&&void 0!==i?i:"none",a=[{value:"toggle",label:fi("actions.toggle")},{value:"more-info",label:fi("actions.more_info")},{value:"navigate",label:fi("actions.navigate")},{value:"url",label:fi("actions.url")},{value:"none",label:fi("actions.none")},{value:"google-home",label:fi("actions.google_home")},{value:"settings",label:fi("actions.settings")}];return H`
      <ha-selector
        .hass=${this.hass}
        label=${fi("actions.select_option")}
        .selector=${{select:{options:a,mode:"dropdown"}}}
        .value=${n}
        @value-changed=${e=>{const i=e.detail.value;t("action",i)}}
      >
      </ha-selector>

      ${this._renderActionFields(n,e,t)}
    `}_renderActionFields(e,t,i){switch(e){case"navigate":return H`
          <ha-selector
            style="display: block; margin-top: 10px;"
            .hass=${this.hass}
            .selector=${{navigation:{}}}
            .value=${(null==t?void 0:t.navigation_path)||""}
            .label=${fi("actions.navigate")}
            .configValue=${"navigation_path"}
            @value-changed=${e=>i("navigation_path",e.detail.value)}
          ></ha-selector>
        `;case"url":return H`
          <ha-selector
            style="display: block; margin-top: 10px;"
            .hass=${this.hass}
            .selector=${{text:{}}}
            .value=${(null==t?void 0:t.url_path)||""}
            .label=${fi("actions.url")}
            .configValue=${"url_path"}
            @value-changed=${e=>i("url_path",e.detail.value)}
          ></ha-selector>
        `;default:return H``}}};$o.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }
    ha-select,
    ha-selector,
    ha-textarea {
      width: 100%;
    }
    .warning {
      margin-top: 16px;
      color: var(--error-color, #d32f2f);
      font-size: 0.9rem;
    }
  `,e([he({attribute:!1})],$o.prototype,"hass",void 0),e([pe()],$o.prototype,"_config",void 0),e([pe()],$o.prototype,"_configLoaded",void 0),$o=e([ce("material-menu-card-editor")],$o);let ko=class extends re{constructor(){super(...arguments),this._config=yo}setConfig(e){this._config=Object.assign({},e)}render(){var e,t;return this._config&&this.hass?H`
      <div class="form">
        <div class="switch-row">
          <span class="switch-label"
            >${fi("material_users_card.user_title")}
            <div class="small-text">
              ${fi("material_users_card.user_description")}
            </div></span
          >
          <ha-switch
            .checked=${null!==(e=this._config.is_user_map_enabled)&&void 0!==e&&e}
            configValue="is_user_map_enabled"
            @change=${e=>Ya(e,this)}
          />
        </div>
        <div class="switch-row">
          <span class="switch-label"
            >${fi("material_users_card.add_button_title")}
            <div class="small-text">
              ${fi("material_users_card.add_button_description")}
            </div></span
          >
          <ha-switch
            .checked=${null!==(t=this._config.is_add_button_enabled)&&void 0!==t&&t}
            configValue="is_add_button_enabled"
            @change=${e=>Ya(e,this)}
          />
        </div>
      </div>
      ${Ba()}
    `:H``}};var Eo,Co;ko.styles=s`
    .form {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 16px;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .small-text {
      font-size: 0.9rem;
      color: gray;
    }
  `,e([he({attribute:!1})],ko.prototype,"hass",void 0),e([pe()],ko.prototype,"_config",void 0),ko=e([ce("material-users-card-editor")],ko),Co=fi("common.version")+" "+zi,console.info(`%c⚙️ Material Home Assistant Components %c ${Co}`,Wa,qa),customElements.define("material-slider-card",Qa),customElements.get("material-slider-card-editor")||customElements.define("material-slider-card-editor",lo),customElements.get("material-button-card")||customElements.define("material-button-card",nn),customElements.get("material-button-card-editor")||customElements.define("material-button-card-editor",ro),customElements.get("material-dashboard-card")||customElements.define("material-dashboard-card",Va),customElements.get("material-dashboard-card-editor")||customElements.define("material-dashboard-card-editor",Ka),customElements.get("material-climate-card")||customElements.define("material-climate-card",to),customElements.get("material-climate-card-editor")||customElements.define("material-climate-card-editor",io),customElements.get("material-control-card")||customElements.define("material-control-card",oo),customElements.get("material-control-card-editor")||customElements.define("material-control-cardeditor",so),customElements.get("material-lights-card")||customElements.define("material-lights-card",co),customElements.get("material-lights-card-editor")||customElements.define("material-lights-cardeditor",ho),customElements.get("material-media-overlay")||customElements.define("material-media-overlay",bo),customElements.get("material-users-card")||customElements.define("material-users-card",xo),customElements.get("material-users-card-editor")||customElements.define("material-users-card-editor",ko),customElements.get("material-menu-card-editor")||customElements.define("material-menu-card-editor",$o),customElements.get("material-menu-card")||customElements.define("material-menu-card",Ao),window.customCards=null!==(Eo=window.customCards)&&void 0!==Eo?Eo:[],window.customCards.push({type:"material-slider-card",name:"Material Slider Card",preview:!0,description:"A custom slider card inspired by Google Home UI, offering smooth control and visual feedback for dimmers, lights, and other numeric entities. Designed with a clean and modern interface to blend into any dashboard.",documentationURL:Ri}),window.customCards.push({type:"material-button-card",name:"Material Button Card",preview:!0,description:"A modern, theme-aware button card inspired by Google’s design. Now stable and production-ready.",documentationURL:Ri}),window.customCards.push({type:"material-dashboard-card",name:"Material Dashboard Card",preview:!0,description:"A customizable dashboard card inspired by Google's Material Design. Perfect for building modern, responsive Home Assistant interfaces.",documentationURL:Ri}),window.customCards.push({type:"material-climate-card",name:"Material Climate Card",preview:!0,description:"A climate card inspired by Google's design, providing intuitive control and status display for HVAC devices.",documentationURL:Ri}),window.customCards.push({type:"material-control-card",name:"Material Control Card",preview:!0,description:"A control card inspired by Google's design, offering a sleek interface to interact with entities like switches, lights, and scenes in Home Assistant.",documentationURL:Ri}),window.customCards.push({type:"material-lights-card",name:"Material Lights Control",preview:!0,description:"A control card inspired by Google's design, offering a sleek interface to interact with lights in Home Assistant.",documentationURL:Ri}),window.customCards.push({type:"material-users-card",name:"Material Users",preview:!0,description:"A card to view and manage users in your Home, providing a clear interface to see active users and control permissions.",documentationURL:Ri}),window.customCards.push({type:"material-menu-card",name:"Material Menu",preview:!0,description:"The menu to manage your home's settings, allowing you to view and adjust key options clearly and easily.",documentationURL:Ri});
