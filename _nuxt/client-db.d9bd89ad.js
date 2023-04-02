import{a5 as j,an as N,ao as $,ap as I,aq as W,ar as x,as as T,at as B,a3 as b,C as K,au as J,av as H,M as q,B as G}from"./entry.5a4e1aa5.js";const Z=()=>{const r=new Map;return{name:"memory",options:{},hasItem(t){return r.has(t)},getItem(t){return r.get(t)||null},getItemRaw(t){return r.get(t)||null},setItem(t,n){r.set(t,n)},setItemRaw(t,n){r.set(t,n)},removeItem(t){r.delete(t)},getKeys(){return Array.from(r.keys())},clear(){r.clear()},dispose(){r.clear()}}};function F(r){return!r||typeof r.then!="function"?Promise.resolve(r):r}function g(r,...t){try{return F(r(...t))}catch(n){return Promise.reject(n)}}function Q(r){const t=typeof r;return r===null||t!=="object"&&t!=="function"}function V(r){const t=Object.getPrototypeOf(r);return!t||t.isPrototypeOf(Object)}function L(r){if(Q(r))return String(r);if(V(r)||Array.isArray(r))return JSON.stringify(r);if(typeof r.toJSON=="function")return L(r.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function z(){if(typeof Buffer===void 0)throw new TypeError("[unstorage] Buffer is not supported!")}const _="base64:";function X(r){if(typeof r=="string")return r;z();const t=Buffer.from(r).toString("base64");return _+t}function k(r){return typeof r!="string"||!r.startsWith(_)?r:(z(),Buffer.from(r.slice(_.length),"base64"))}const ee=["hasItem","getItem","setItem","removeItem","getMeta","setMeta","removeMeta","getKeys","clear","mount","unmount"];function te(r,t){if(t=v(t),!t)return r;const n={...r};for(const a of ee)n[a]=(s="",...u)=>r[a](t+s,...u);return n.getKeys=(a="",...s)=>r.getKeys(t+a,...s).then(u=>u.map(c=>c.slice(t.length))),n}function p(r){return r?r.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function v(r){return r=p(r),r?r+":":""}const re=()=>{const r=new Map;return{name:"memory",options:{},hasItem(t){return r.has(t)},getItem(t){return r.get(t)||null},getItemRaw(t){return r.get(t)||null},setItem(t,n){r.set(t,n)},setItemRaw(t,n){r.set(t,n)},removeItem(t){r.delete(t)},getKeys(){return Array.from(r.keys())},clear(){r.clear()},dispose(){r.clear()}}};function ne(r={}){const t={mounts:{"":r.driver||re()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},n=e=>{for(const i of t.mountpoints)if(e.startsWith(i))return{base:i,relativeKey:e.slice(i.length),driver:t.mounts[i]};return{base:"",relativeKey:e,driver:t.mounts[""]}},a=(e,i)=>t.mountpoints.filter(o=>o.startsWith(e)||i&&e.startsWith(o)).map(o=>({relativeBase:e.length>o.length?e.slice(o.length):void 0,mountpoint:o,driver:t.mounts[o]})),s=(e,i)=>{if(t.watching){i=p(i);for(const o of t.watchListeners)o(e,i)}},u=async()=>{if(!t.watching){t.watching=!0;for(const e in t.mounts)t.unwatch[e]=await C(t.mounts[e],s,e)}},c=async()=>{if(t.watching){for(const e in t.unwatch)await t.unwatch[e]();t.unwatch={},t.watching=!1}},h={hasItem(e,i={}){e=p(e);const{relativeKey:o,driver:f}=n(e);return g(f.hasItem,o,i)},getItem(e,i={}){e=p(e);const{relativeKey:o,driver:f}=n(e);return g(f.getItem,o,i).then(m=>j(m))},getItemRaw(e,i={}){e=p(e);const{relativeKey:o,driver:f}=n(e);return f.getItemRaw?g(f.getItemRaw,o,i):g(f.getItem,o,i).then(m=>k(m))},async setItem(e,i,o={}){if(i===void 0)return h.removeItem(e);e=p(e);const{relativeKey:f,driver:m}=n(e);m.setItem&&(await g(m.setItem,f,L(i),o),m.watch||s("update",e))},async setItemRaw(e,i,o={}){if(i===void 0)return h.removeItem(e,o);e=p(e);const{relativeKey:f,driver:m}=n(e);if(m.setItemRaw)await g(m.setItemRaw,f,i,o);else if(m.setItem)await g(m.setItem,f,X(i),o);else return;m.watch||s("update",e)},async removeItem(e,i={}){typeof i=="boolean"&&(i={removeMata:i}),e=p(e);const{relativeKey:o,driver:f}=n(e);f.removeItem&&(await g(f.removeItem,o,i),i.removeMata&&await g(f.removeItem,o+"$",i),f.watch||s("remove",e))},async getMeta(e,i={}){typeof i=="boolean"&&(i={nativeOnly:i}),e=p(e);const{relativeKey:o,driver:f}=n(e),m=Object.create(null);if(f.getMeta&&Object.assign(m,await g(f.getMeta,o,i)),!i.nativeOnly){const l=await g(f.getItem,o+"$",i).then(w=>j(w));l&&typeof l=="object"&&(typeof l.atime=="string"&&(l.atime=new Date(l.atime)),typeof l.mtime=="string"&&(l.mtime=new Date(l.mtime)),Object.assign(m,l))}return m},setMeta(e,i,o={}){return this.setItem(e+"$",i,o)},removeMeta(e,i={}){return this.removeItem(e+"$",i)},async getKeys(e,i={}){e=v(e);const o=a(e,!0);let f=[];const m=[];for(const l of o){const E=(await g(l.driver.getKeys,l.relativeBase,i)).map(d=>l.mountpoint+p(d)).filter(d=>!f.some(y=>d.startsWith(y)));m.push(...E),f=[l.mountpoint,...f.filter(d=>!d.startsWith(l.mountpoint))]}return e?m.filter(l=>l.startsWith(e)&&!l.endsWith("$")):m.filter(l=>!l.endsWith("$"))},async clear(e,i={}){e=v(e),await Promise.all(a(e,!1).map(async o=>{if(o.driver.clear)return g(o.driver.clear,o.relativeBase,i);if(o.driver.removeItem){const f=await o.driver.getKeys(o.relativeBase,i);return Promise.all(f.map(m=>o.driver.removeItem(m)))}}))},async dispose(){await Promise.all(Object.values(t.mounts).map(e=>P(e)))},async watch(e){return await u(),t.watchListeners.push(e),async()=>{t.watchListeners=t.watchListeners.filter(i=>i!==e),t.watchListeners.length===0&&await c()}},async unwatch(){t.watchListeners=[],await c()},mount(e,i){if(e=v(e),e&&t.mounts[e])throw new Error(`already mounted at ${e}`);return e&&(t.mountpoints.push(e),t.mountpoints.sort((o,f)=>f.length-o.length)),t.mounts[e]=i,t.watching&&Promise.resolve(C(i,s,e)).then(o=>{t.unwatch[e]=o}).catch(console.error),h},async unmount(e,i=!0){e=v(e),!(!e||!t.mounts[e])&&(t.watching&&e in t.unwatch&&(t.unwatch[e](),delete t.unwatch[e]),i&&await P(t.mounts[e]),t.mountpoints=t.mountpoints.filter(o=>o!==e),delete t.mounts[e])},getMount(e=""){e=p(e)+":";const i=n(e);return{driver:i.driver,base:i.base}},getMounts(e="",i={}){return e=p(e),a(e,i.parents).map(f=>({driver:f.driver,base:f.mountpoint}))}};return h}function C(r,t,n){return r.watch?r.watch((a,s)=>t(a,n+s)):()=>{}}async function P(r){typeof r.dispose=="function"&&await g(r.dispose)}function ae(r={}){const t=ie(n,r.operators);function n(a,s){return typeof s!="object"||s instanceof RegExp?t.$eq(a,s):Object.keys(s||{}).every(u=>{const c=s[u];if(u.startsWith("$")&&t[u]){const h=t[u];return typeof h=="function"?h(a,c):!1}return n(N(a,u),c)})}return n}function ie(r,t={}){return{$match:(n,a)=>r(n,a),$eq:(n,a)=>a instanceof RegExp?a.test(n):n===a,$ne:(n,a)=>a instanceof RegExp?!a.test(n):n!==a,$not:(n,a)=>!r(n,a),$and:(n,a)=>($(a,"$and requires an array as condition"),a.every(s=>r(n,s))),$or:(n,a)=>($(a,"$or requires an array as condition"),a.some(s=>r(n,s))),$in:(n,a)=>I(a).some(s=>Array.isArray(n)?r(n,{$contains:s}):r(n,s)),$contains:(n,a)=>(n=Array.isArray(n)?n:String(n),I(a).every(s=>n.includes(s))),$icontains:(n,a)=>{if(typeof a!="string")throw new TypeError("$icontains requires a string, use $contains instead");return n=String(n).toLocaleLowerCase(),I(a).every(s=>n.includes(s.toLocaleLowerCase()))},$containsAny:(n,a)=>($(a,"$containsAny requires an array as condition"),n=Array.isArray(n)?n:String(n),a.some(s=>n.includes(s))),$exists:(n,a)=>a?typeof n<"u":typeof n>"u",$type:(n,a)=>typeof n===String(a),$regex:(n,a)=>{if(!(a instanceof RegExp)){const s=String(a).match(/\/(.*)\/([dgimsuy]*)$/);a=s?new RegExp(s[1],s[2]||""):new RegExp(a)}return a.test(String(n||""))},$lt:(n,a)=>n<a,$lte:(n,a)=>n<=a,$gt:(n,a)=>n>a,$gte:(n,a)=>n>=a,...t||{}}}function R(r){const t=ae(),n=(s,{query:u,before:c,after:h})=>{const e=typeof u=="string"?{_path:u}:u,i=s.findIndex(f=>t(f,e));c=c??1,h=h??1;const o=new Array(c+h).fill(null,0);return i===-1?o:o.map((f,m)=>s[i-c+m+ +(m>=c)]||null)},a=[(s,u)=>s.filter(c=>I(u.where).every(h=>t(c,h))),(s,u)=>I(u.sort).forEach(c=>W(s,c)),(s,u)=>u.surround?n(s,u.surround):s,(s,u)=>u.skip?s.slice(u.skip):s,(s,u)=>u.limit?s.slice(0,u.limit):s,(s,u)=>x(T(u.without))(s),(s,u)=>x(B(u.only))(s)];return async s=>{const u=await r(),c=s.params(),h=a.reduce((e,i)=>i(e,c)||e,u);return c.first?h[0]:h}}var se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M={},oe={get exports(){return M},set exports(r){M=r}};(function(r,t){(function(n,a,s){r.exports=s(),r.exports.default=s()})("slugify",se,function(){var n=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),a=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function s(u,c){if(typeof u!="string")throw new Error("slugify: string argument expected");c=typeof c=="string"?{replacement:c}:c||{};var h=a[c.locale]||{},e=c.replacement===void 0?"-":c.replacement,i=c.trim===void 0?!0:c.trim,o=u.normalize().split("").reduce(function(f,m){var l=h[m];return l===void 0&&(l=n[m]),l===void 0&&(l=m),l===e&&(l=" "),f+l.replace(c.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return c.strict&&(o=o.replace(/[^A-Za-z0-9\s]/g,"")),i&&(o=o.trim()),o=o.replace(/\s+/g,e),c.lower&&(o=o.toLowerCase()),o}return s.extend=function(u){Object.assign(n,u)},s})})(oe);const ue=r=>r.split(/[\s-]/g).map(b).join(" ");function ce(r,t){const{navigation:n}=K().content,a=u=>({...fe(["title",...n.fields])(u),...me(u==null?void 0:u.navigation)?u.navigation:{}}),s=r.sort((u,c)=>u._path.localeCompare(c._path)).reduce((u,c)=>{const h=c._path.substring(1).split("/"),e=c._id.split(":").slice(1),i=!!e[e.length-1].match(/([1-9][0-9]*\.)?index.md/g),o=l=>({title:l.title,_path:l._path,_file:l._file,children:[],...a(l),...l._draft?{_draft:!0}:{}}),f=o(c);if(i){const l=t[f._path];if(typeof(l==null?void 0:l.navigation)<"u"&&!(l!=null&&l.navigation))return u;if(c._path!=="/"){const w=o(c);f.children.push(w)}Object.assign(f,a(l))}return h.length===1?(u.push(f),u):(h.slice(0,-1).reduce((l,w,E)=>{const d="/"+h.slice(0,E+1).join("/"),y=t[d];if(typeof(y==null?void 0:y.navigation)<"u"&&!y.navigation)return[];let A=l.find(Y=>Y._path===d);return A||(A={title:ue(w),_path:d,_file:c._file,children:[],...a(y)},l.push(A)),A.children},u).push(f),u)},[]);return D(s)}const le=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function D(r){var n;const t=r.sort((a,s)=>le.compare(a._file,s._file));for(const a of t)(n=a.children)!=null&&n.length?D(a.children):delete a.children,delete a._file;return r}function fe(r){return t=>(t=t||{},r&&r.length?r.filter(n=>typeof t[n]<"u").reduce((n,a)=>Object.assign(n,{[a]:t[a]}),{}):t)}function me(r){return Object.prototype.toString.call(r)==="[object Object]"}const he=r=>G(r,K().public.content.api.baseURL),ge=te(ne({driver:Z()}),"@content"),U=()=>J("previewToken").value;function pe(r){async function t(){const n=new Set(await r.getKeys("cache:")),a=U();if(a){const u=await r.getItem(`${a}$`).then(e=>e||{});if(Array.isArray(u.ignoreSources)){const e=u.ignoreSources.map(i=>`cache:${i.trim()}:`);for(const i of n)e.some(o=>i.startsWith(o))&&n.delete(i)}const c=await r.getKeys(`${a}:`),h=await Promise.all(c.map(e=>r.getItem(e)));for(const e of h)n.delete(`cache:${e._id}`),e.__deleted||n.add(`${a}:${e._id}`)}return await Promise.all(Array.from(n).map(u=>r.getItem(u)))}return{storage:r,fetch:R(t),query:n=>H(R(t),n)}}let S=null,O=null;async function de(){return O?await O:S||(O=ye(),S=await O),S}async function ye(){const r=q(),{content:t}=K().public,n=pe(ge),a=await n.storage.getItem("integrity");if(t.integrity!==+(a||0)){const{contents:s,navigation:u}=await $fetch(he(t.integrity?`cache.${t.integrity}.json`:"cache.json"));await Promise.all(s.map(c=>n.storage.setItem(`cache:${c._id}`,c))),await n.storage.setItem("navigation",u),await n.storage.setItem("integrity",t.integrity)}return await r.callHook("content:storage",n.storage),n}async function ve(r){const t=await de();if(!U()&&Object.keys(r||{}).length===0)return t.storage.getItem("navigation");const n=await t.query(r).where({_partial:!1,navigation:{$ne:!1}}).find(),s=(await t.query().where({_path:/\/_dir$/i,_partial:!0}).find()).reduce((u,c)=>{var e;((e=c.title)==null?void 0:e.toLowerCase())==="dir"&&(c.title=void 0);const h=c._path.split("/").slice(0,-1).join("/")||"/";return u[h]={...c,...c.body},u},{});return ce(n,s)}export{ge as contentStorage,pe as createDB,ve as generateNavigation,U as getPreview,de as useContentDatabase};
