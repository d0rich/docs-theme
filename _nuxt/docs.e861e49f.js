import I from"./Icon.1db22e0c.js";import{_ as L}from"./nuxt-link.cb3f5695.js";import{a as p,o as n,c as h,w as m,s,v as y,Z as C,r as D,Y as B,m as g,u as d,D as O,b as l,ag as k,A as w,t as u,ah as q,W as Y,e as P,aa as z,z as T,E as G,a4 as J,ai as K,aj as Q,ak as S,x as A,y as M}from"./entry.8a765253.js";import U from"./ContentNavigation.1ae2017a.js";import{_ as $}from"./_plugin-vue_export-helper.c27b6911.js";import{u as b,a as X}from"./layout.792bfae0.js";import"./Icon.vue.8c973af6.js";import"./asyncData.ec3c7e48.js";/* empty css                   *//* empty css                            *//* empty css                      *//* empty css                            *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                     *//* empty css                    *//* empty css                    *//* empty css                   *//* empty css                        *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                    */const tt={class:"d-shape"},et={class:"d-shape__bg-wrapper"},nt={name:"DWrapShape"},H=p({...nt,props:{shapeClass:null,shapeStyle:null,filterClass:null,filterStyle:null,tag:null},setup(t){return(e,o)=>(n(),h(B(t.tag??"div"),null,{default:m(()=>[s("div",tt,[s("div",{class:y(["d-shape__bg-filter",t.filterClass]),style:C(t.filterStyle)},[s("div",et,[s("div",{class:y(["d-shape__bg",t.shapeClass]),style:C(t.shapeStyle)},null,6)])],6),D(e.$slots,"default")])]),_:3}))}}),st={key:0,class:"d-focus-hl__hl--negative-tile"},ot={key:2,class:"d-focus-hl__hl--negative-list-item"},at=s("div",{class:"d-focus-hl__hl--negative-list-item"},null,-1),it={name:"DWrapShape"},lt=p({...it,props:{linkExact:Boolean,noPassiveLink:Boolean,active:Boolean,variant:{type:String,default:"negative-tile"},tag:{type:String,default:"div"},colorClass:{type:[String,Object],default:"bg-red-600"}},setup(t){const e=t,o=g(()=>e.to||e.href?L:e.tag);return(a,c)=>{const r=H;return n(),h(r,null,{default:m(()=>[(n(),h(B(d(o)),O(e,{class:["d-focus-hl",{"d-focus-hl--exact":t.linkExact,"d-focus-hl--not-exact":!t.linkExact,"d-focus-hl--no-passive-link":t.noPassiveLink,"d-focus-hl--active":t.active}]}),{default:m(()=>[t.variant==="negative-tile"?(n(),l("div",st)):t.variant==="list-item"?(n(),l("div",{key:1,class:y(["d-focus-hl__hl--list-item",t.colorClass])},null,2)):t.variant==="negative-list-item"?(n(),l("div",ot)):t.variant==="composite-list-item"?(n(),l(k,{key:3},[s("div",{class:y(["d-focus-hl__hl--list-item",t.colorClass])},null,2),at],64)):w("",!0),D(a.$slots,"default")]),_:3},16,["class"]))]),_:3})}}}),ct={name:"DBtn"},x=p({...ct,props:{to:{type:String,default:void 0},href:{type:String,default:void 0},exact:Boolean,noPassiveHighlight:Boolean,active:Boolean,noRotate:Boolean,tag:{type:String,default:"button"},highlight:{type:String,default:void 0},colorClass:[String,Object],textTransform:{type:String,default:"uppercase"}},setup(t){const e=t,o=g(()=>e.to||e.href?L:e.tag);return(a,c)=>{const r=lt;return n(),h(B(d(o)),O({class:["d-btn",{"-rotate-6":!t.noRotate,uppercase:t.textTransform==="uppercase",capitalize:t.textTransform==="capitalize",lowercase:t.textTransform==="lowercase"}]},e),{default:m(()=>[u(r,{variant:t.highlight,"link-exact":t.exact,"no-passive-link":t.noPassiveHighlight,"color-class":t.colorClass,active:t.active},{default:m(()=>[D(a.$slots,"default")]),_:3},8,["variant","link-exact","no-passive-link","color-class","active"])]),_:3},16,["class"])}}}),rt={name:"DAnimationLetterD"},dt={d:"M200.242,139.244l137.207,-0c66.136,-0 112.859,17.192 140.169,51.576c27.31,34.384 33.562,84.973 18.755,151.767c-22.045,98.711 -85.878,148.066 -191.498,148.066l-179.16,-0l74.527,-351.409Zm184.588,179.159c12.175,-57.581 -7.732,-86.372 -59.72,-86.372l-33.068,0l-35.042,165.834l44.42,0c23.69,0 42.034,-6.169 55.031,-18.508c12.997,-12.339 22.457,-32.657 28.379,-60.954Z"};function ut(t,e,o,a,c,r){return n(),l("path",dt)}const _t=$(rt,[["render",ut]]),mt=s("use",{id:"d-hypnosis-section",href:"#d-letter"},null,-1),ht=q('<use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use><use href="#d-hypnosis-section" class="d-animation-hypnosis__section"></use>',6),pt={name:"DAnimationHypnosis"},ft=p({...pt,props:{wigglePeriod:{type:Number,default:10},delay:{type:Number,default:1}},setup(t){return(e,o)=>{const a=_t;return n(),l("svg",{viewBox:"0 0 630 630",xmlns:"http://www.w3.org/2000/svg",class:"d-animation-hypnosis",style:C({"--d-hypnosis-wiggle-period":t.wigglePeriod+"s","--d-hypnosis-delay":t.delay+"s"})},[s("defs",null,[u(a,{id:"d-letter"}),mt]),ht],4)}}}),vt=()=>Y("color-mode").value,gt=p({__name:"ThemeSwitch",setup(t){const e=vt(),o=P([{name:"system",icon:"ic:sharp-monitor"},{name:"light",icon:"ic:sharp-light-mode"},{name:"dark",icon:"ic:sharp-dark-mode"}]),a=g(()=>{const r=e.preference;return o.value.find(i=>i.name===r)});function c(){const i=(o.value.findIndex(_=>_===a.value)+1)%o.value.length;e.preference=o.value[i].name}return(r,i)=>{const _=I,f=x;return n(),h(f,{"no-rotate":"",onClick:c,class:"text-xl"},{default:m(()=>{var v;return[u(_,{name:((v=d(a))==null?void 0:v.icon)||""},null,8,["name"])]}),_:1})}}}),yt={class:"p-4 font-serif font-semibold"},kt=s("span",{class:"pointer-events-none"},"d0rich-docs",-1),$t={name:"DLayoutHeader"},bt=p({...$t,setup(t){const{showContentTree:e}=b();return(o,a)=>{const c=I,r=x,i=ft,_=L,f=gt,v=H;return n(),h(v,{tag:"header",class:"fixed top-0 z-50 left-0 right-0","shape-class":"bg-white dark:bg-black","shape-style":{clipPath:"polygon(0 0, 100% 0, 100% calc(100% - 1rem), 0 100%)"}},{default:m(()=>[s("nav",yt,[u(r,{tag:"button",class:"!inline-block text-2xl lg:!hidden",onClick:a[0]||(a[0]=V=>e.value=!d(e))},{default:m(()=>[u(c,{name:d(e)?"ic:sharp-menu-open":"ic:sharp-menu"},null,8,["name"])]),_:1}),u(_,{to:"/"},{default:m(()=>[u(i,{class:"inline-block w-12 -my-2"}),kt]),_:1}),u(f,{class:"float-right"})])]),_:1},8,["shape-style"])}}}),xt={class:"items-start py-1 transition-colors"},wt={name:"DLayoutNavSidebarItem"},Dt=p({...wt,props:{navItem:null,parentPath:null},setup(t){const{showContentTree:e}=b();return(o,a)=>{const c=x;return n(),l("li",xt,[u(c,{to:t.navItem._path,highlight:"composite-list-item","color-class":"bg-neutral-300 dark:bg-black","no-rotate":"","text-transform":"none",class:"!font-medium",onClick:a[0]||(a[0]=r=>e.value=!1)},{default:m(()=>[z(T(t.navItem.title),1)]),_:1},8,["to"])])}}}),St={class:"py-1"},Ct={class:"grid grid-cols-[24px_1fr]"},It={key:1},Lt={class:"pl-8"},Bt={name:"DLayoutNavSidebarRootItem"},Tt=p({...Bt,props:{navItem:null,parentPath:null},setup(t){const e=t,o=G(),{showContentTree:a}=b(),c=P(!1),r=g(()=>{const v=e.navItem._path;return v==="/"?o.path==="/":o.path.startsWith(v)}),i=g(()=>!!e.navItem.children&&!!e.navItem.children.length),_=g(()=>c.value?"ic:sharp-expand-more":"ic:sharp-chevron-right");J(()=>{c.value=r.value});function f(){i.value?c.value=!c.value:a.value=!1}return(v,V)=>{const j=I,Z=x,F=Dt;return n(),l("li",St,[s("div",null,[u(Z,{to:d(i)?void 0:t.navItem._path,highlight:"composite-list-item","color-class":"bg-neutral-300 dark:bg-black","no-rotate":"","text-transform":"none",onClick:f},{default:m(()=>[s("div",Ct,[d(i)?(n(),h(j,{key:0,name:d(_),class:"text-2xl"},null,8,["name"])):(n(),l("div",It)),s("span",null,T(t.navItem.title),1)])]),_:1},8,["to"]),K(s("ul",Lt,[(n(!0),l(k,null,S(t.navItem.children,N=>(n(),h(F,{key:N._path,"nav-item":N,"parent-path":t.navItem._path},null,8,["nav-item","parent-path"]))),128))],512),[[Q,d(i)&&d(c)]])])])}}}),W=t=>(A("data-v-0047b6c9"),t=t(),M(),t),Nt={class:"h-full grid grid-cols-[1fr,_auto]"},Ot={class:"background-container"},Pt=W(()=>s("div",{class:"absolute -z-10 inset-0 bg-green-400 dark:bg-green-950 opacity-80 dark:opacity-95 backdrop-saturate-0 backdrop-brightness-50"},null,-1)),zt=W(()=>s("div",{class:"h-full w-4 bg-black dark:bg-white",style:{"clip-path":"polygon(0 0, 50% 0, 100% 100%, 0 100%)"}},null,-1)),At={name:"DLayoutNavSidebar"},Mt=p({...At,setup(t){const{showContentTree:e}=b();return(o,a)=>{const c=Tt,r=U;return n(),l("aside",{class:y(["fixed z-10 inset-0 h-screen max-w-[90%] lg:sticky lg:w-72 transition-all",{"-left-72 w-0":!d(e),"left-0 w-screen":d(e)}])},[s("div",Nt,[s("nav",Ot,[Pt,u(r,null,{default:m(({navigation:i})=>[s("ul",null,[(n(!0),l(k,null,S(i,_=>(n(),h(c,{key:_._path,"nav-item":_},null,8,["nav-item"]))),128))])]),_:1})]),zt])],2)}}}),Ht=$(Mt,[["__scopeId","data-v-0047b6c9"]]),Wt=p({name:"DLayoutTableOfContentsItem",props:{link:{type:Object,required:!0},active:{type:Array,default:()=>[]}},computed:{isActive(){return this.active.findIndex(t=>t===this.link.id)>-1}}}),Et={key:0};function Rt(t,e,o,a,c,r){const i=x,_=E;return n(),l("li",null,[u(i,{to:"#"+t.link.id,"no-rotate":"",exact:"","no-passive-highlight":"",active:t.isActive,"text-transform":"none",class:y(["!font-medium py-1",{"ml-2":t.link.depth===3,"ml-3":t.link.depth===4,"ml-4":t.link.depth===5,"ml-5":t.link.depth>=6}])},{default:m(()=>[z(T(t.link.text),1)]),_:1},8,["to","active","class"]),t.link.children&&t.link.children.length?(n(),l("ul",Et,[(n(!0),l(k,null,S(t.link.children,f=>(n(),h(_,{key:f.id,active:t.active,link:f},null,8,["active","link"]))),128))])):w("",!0)])}const E=$(Wt,[["render",Rt]]),R=t=>(A("data-v-4f9cc27d"),t=t(),M(),t),Vt={class:"top-0 md:sticky md:h-screen md:w-72"},jt={class:"h-full grid md:grid-cols-[auto,_1fr]"},Zt=R(()=>s("div",{class:"h-full w-4 bg-black dark:bg-white hidden md:block",style:{"clip-path":"polygon(100% 0, 50% 0, 0 100%, 100% 100%)"}},null,-1)),Ft={key:0,class:"background-container"},qt=R(()=>s("div",{class:"absolute -z-10 inset-0 bg-white dark:bg-black opacity-90"},null,-1)),Yt={key:0,class:"mb-2"},Gt={name:"DLayoutTableOfContents"},Jt=p({...Gt,setup(t){const{tableOfContents:e}=b(),o=X();return(a,c)=>{const r=E;return n(),l("aside",Vt,[s("div",jt,[Zt,d(e)?(n(),l("nav",Ft,[qt,d(e).links.length?(n(),l("h2",Yt,"On this page:")):w("",!0),s("ul",null,[(n(!0),l(k,null,S(d(e).links,i=>(n(),h(r,{key:i.id,link:i,active:d(o)},null,8,["link","active"]))),128))])])):w("",!0)])])}}}),Kt=$(Jt,[["__scopeId","data-v-4f9cc27d"]]),Qt={name:"DocsLayout"},Ut={class:"grid md:grid-cols-[1fr,_auto] lg:grid-cols-[auto,_1fr,_auto] w-full gap-y-8"},Xt={class:"order-2 md:pt-24 px-4 md:px-6 min-h-[150vh]"};function te(t,e,o,a,c,r){const i=bt,_=Ht,f=Kt;return n(),l(k,null,[u(i),s("div",Ut,[u(_,{class:"order-1"}),s("main",Xt,[D(t.$slots,"default")]),u(f,{class:"order-1 md:order-3"})])],64)}const Oe=$(Qt,[["render",te]]);export{Oe as default};
