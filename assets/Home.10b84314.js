import{e,u as t,f as a,g as s,o as i,c as l,b as o,w as n,h as c,t as r,i as f,_ as v,p as d,j as u,F as m,r as k,k as p,l as h,m as g}from"./app.5f046f61.js";d("data-v-0cb9fda2");const y={key:0,class:"home-hero"},x={key:0,class:"figure"},_=["src","alt"],I={key:1,id:"main-title",class:"title"},T={key:2,class:"description"};u();var b=e({setup(e){const{site:d,frontmatter:u}=t(),m=a((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=u.value;return e||t||a||s&&i})),k=a((()=>u.value.heroText||d.value.title));return(e,t)=>s(m)?(i(),l("header",y,[s(u).heroImage?(i(),l("figure",x,[o("img",{class:"image",src:s(n)(s(u).heroImage),alt:s(u).heroAlt},null,8,_)])):c("v-if",!0),s(k)?(i(),l("h1",I,r(s(k)),1)):c("v-if",!0),s(u).tagline?(i(),l("p",T,r(s(u).tagline),1)):c("v-if",!0),s(u).actionLink&&s(u).actionText?(i(),f(v,{key:3,item:{link:s(u).actionLink,text:s(u).actionText},class:"action"},null,8,["item"])):c("v-if",!0),s(u).altActionLink&&s(u).altActionText?(i(),f(v,{key:4,item:{link:s(u).altActionLink,text:s(u).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)}});b.__scopeId="data-v-0cb9fda2",d("data-v-e39c13e0");const A={key:0,class:"home-features"},L={class:"wrapper"},$={class:"container"},j={class:"features"},w={key:0,class:"title"},C={key:1,class:"details"};u();var F=e({setup(e){const{frontmatter:n}=t(),f=a((()=>n.value.features&&n.value.features.length>0)),v=a((()=>n.value.features?n.value.features:[]));return(e,t)=>s(f)?(i(),l("div",A,[o("div",L,[o("div",$,[o("div",j,[(i(!0),l(m,null,k(s(v),((e,t)=>(i(),l("section",{key:t,class:"feature"},[e.title?(i(),l("h2",w,r(e.title),1)):c("v-if",!0),e.details?(i(),l("p",C,r(e.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)}});F.__scopeId="data-v-e39c13e0",d("data-v-30918238");const q={key:0,class:"footer"},z={class:"container"},B={class:"text"};u();var D=e({setup(e){const{frontmatter:a}=t();return(e,t)=>s(a).footer?(i(),l("footer",q,[o("div",z,[o("p",B,r(s(a).footer),1)])])):c("v-if",!0)}});D.__scopeId="data-v-30918238",d("data-v-32eddf2f");const E={class:"home","aria-labelledby":"main-title"},G={class:"home-content"};u();var H=e({setup:e=>(e,t)=>{const a=p("Content");return i(),l("main",E,[h(b),g(e.$slots,"hero",{},void 0,!0),h(F),o("div",G,[h(a)]),g(e.$slots,"features",{},void 0,!0),h(D),g(e.$slots,"footer",{},void 0,!0)])}});H.__scopeId="data-v-32eddf2f";export{H as default};
