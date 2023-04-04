import{a as u,F as A,o as s,c as l,w as p,aa as L,z as T,A as c,ab as B,E as y,ac as C,m as w,ad as S,ae as x,af as f,u as i,T as E,I as q,X as M,b as O,t as g,K as j}from"./entry.8a765253.js";import N from"./ContentRendererMarkdown.f48c86b9.js";import R from"./ContentRenderer.22a7a2f9.js";import{u as D}from"./asyncData.ec3c7e48.js";import{u as P}from"./layout.792bfae0.js";const $=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),_=(e,t)=>(r,n)=>(A(()=>e({...$(r),...n.attrs},n)),()=>{var o,a;return t?(a=(o=n.slots).default)==null?void 0:a.call(o):null}),H={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},z=u({name:"Title",inheritAttrs:!1,setup:_((e,{slots:t})=>{var n,o,a;return{title:((a=(o=(n=t.default)==null?void 0:n.call(t))==null?void 0:o[0])==null?void 0:a.children)||null}})}),V=u({name:"Meta",inheritAttrs:!1,props:{...H,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:_(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),F=u({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var r,n;return(n=(r=t.slots).default)==null?void 0:n.call(r)}}),I=u({__name:"AsyncSafeMeta",props:{title:null,ogTitle:null,description:null,image:null},setup(e){return(t,r)=>{const n=z,o=V,a=F;return s(),l(a,null,{default:p(()=>[e.title?(s(),l(n,{key:0},{default:p(()=>[L(T(e.title),1)]),_:1})):c("",!0),e.title||e.ogTitle?(s(),l(o,{key:1,property:"og:title",content:e.ogTitle||e.title},null,8,["content"])):c("",!0),e.description?(s(),l(o,{key:2,name:"description",content:e.description},null,8,["content"])):c("",!0),e.description?(s(),l(o,{key:3,property:"og:description",content:e.description},null,8,["content"])):c("",!0)]),_:1})}}}),K=u({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(e,t){const r=await S[e.name]().then(n=>n.default||n);return()=>q(r,t.attrs,t.slots)}}),U=u({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(e,t){const r=B("_route"),n=r===y()?C():r,o=w(()=>i(e.name)??n.meta.layout??"default");return()=>{const a=o.value&&o.value in S,d=n.meta.layoutTransition??x;return f(E,a&&d,{default:()=>f(K,a&&{key:o.value,name:o.value,...t.attrs},t.slots).default()}).default()}}}),X={name:"DocPage"},et=u({...X,async setup(e){var d,m;let t,r;const n=y(),{tableOfContents:o}=P(),{data:a}=([t,r]=M(()=>D("page-data"+n.path,()=>j(n.path).findOne(),"$aROEKgqrzL")),t=await t,r(),t);return o.value=((m=(d=a.value)==null?void 0:d.body)==null?void 0:m.toc)??null,(G,J)=>{const h=I,v=N,k=R,b=U;return s(),O("div",null,[i(a)?(s(),l(h,{key:0,title:i(a).title,description:i(a).description},null,8,["title","description"])):c("",!0),g(b,null,{default:p(()=>[i(a)&&i(a)._type==="markdown"?(s(),l(k,{key:0,value:i(a),tag:"article"},{default:p(()=>[g(v,{value:i(a)},null,8,["value"])]),_:1},8,["value"])):c("",!0)]),_:1})])}}});export{et as default};
