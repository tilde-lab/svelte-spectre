import{S as j,i as b,s as y,a1 as k,C as r,e as q,c as C,a as G,d,F as h,G as m,g as S,Y as D,Z as E,_ as I,z as P,q as V,o as z,L as v,N as B}from"./vendor-34a2d25b.js";/* empty css                                              */function F(a){let l,i,n;const u=a[7].default,s=k(u,a,a[6],null);let c=[a[5],{class:i="columns "+(a[3]&&`col-align-${a[3]}`)+" "+(a[4]&&`col-justify-${a[4]}`)}],o={};for(let e=0;e<c.length;e+=1)o=r(o,c[e]);return{c(){l=q("div"),s&&s.c(),this.h()},l(e){l=C(e,"DIV",{class:!0});var t=G(l);s&&s.l(t),t.forEach(d),this.h()},h(){h(l,o),m(l,"col-gapless",a[0]),m(l,"col-oneline",a[1]),m(l,"col-stack",a[2]),m(l,"mb-2",a[2]),m(l,"svelte-1n0th08",!0)},m(e,t){S(e,l,t),s&&s.m(l,null),n=!0},p(e,[t]){s&&s.p&&(!n||t&64)&&D(s,u,e,e[6],n?I(u,e[6],t,null):E(e[6]),null),h(l,o=P(c,[t&32&&e[5],(!n||t&24&&i!==(i="columns "+(e[3]&&`col-align-${e[3]}`)+" "+(e[4]&&`col-justify-${e[4]}`)))&&{class:i}])),m(l,"col-gapless",e[0]),m(l,"col-oneline",e[1]),m(l,"col-stack",e[2]),m(l,"mb-2",e[2]),m(l,"svelte-1n0th08",!0)},i(e){n||(V(s,e),n=!0)},o(e){z(s,e),n=!1},d(e){e&&d(l),s&&s.d(e)}}}function L(a,l,i){const n=["gapless","oneline","stack","align","justify"];let u=v(l,n),{$$slots:s={},$$scope:c}=l,{gapless:o=!1}=l,{oneline:e=!1}=l,{stack:t=!1}=l,{align:g=""}=l,{justify:_=""}=l;return a.$$set=f=>{l=r(r({},l),B(f)),i(5,u=v(l,n)),"gapless"in f&&i(0,o=f.gapless),"oneline"in f&&i(1,e=f.oneline),"stack"in f&&i(2,t=f.stack),"align"in f&&i(3,g=f.align),"justify"in f&&i(4,_=f.justify),"$$scope"in f&&i(6,c=f.$$scope)},[o,e,t,g,_,u,c,s]}class A extends j{constructor(l){super();b(this,l,L,F,y,{gapless:0,oneline:1,stack:2,align:3,justify:4})}}function N(a){let l,i,n;const u=a[4].default,s=k(u,a,a[3],null);let c=[a[1],{class:i="column "+a[0]}],o={};for(let e=0;e<c.length;e+=1)o=r(o,c[e]);return{c(){l=q("div"),s&&s.c(),this.h()},l(e){l=C(e,"DIV",{class:!0});var t=G(l);s&&s.l(t),t.forEach(d),this.h()},h(){h(l,o),m(l,"svelte-mvojc4",!0)},m(e,t){S(e,l,t),s&&s.m(l,null),n=!0},p(e,[t]){s&&s.p&&(!n||t&8)&&D(s,u,e,e[3],n?I(u,e[3],t,null):E(e[3]),null),h(l,o=P(c,[t&2&&e[1],(!n||t&1&&i!==(i="column "+e[0]))&&{class:i}])),m(l,"svelte-mvojc4",!0)},i(e){n||(V(s,e),n=!0)},o(e){z(s,e),n=!1},d(e){e&&d(l),s&&s.d(e)}}}function O(a,l,i){let n;const u=["mq"];let s=v(l,u),{$$slots:c={},$$scope:o}=l,{mq:e=["col","ml","mr","mx","mt","mb","my","xs","sm","md","lg","xl"]}=l;return a.$$set=t=>{l=r(r({},l),B(t)),i(1,s=v(l,u)),"mq"in t&&i(2,e=t.mq),"$$scope"in t&&i(3,o=t.$$scope)},a.$$.update=()=>{i(0,n=s&&Object.entries(s).map(([t,g])=>{if(e.some(_=>_===t))return`col-${t!=="col"?`${t}-`:""}${g}`}).filter(Boolean).join(" "))},[n,s,e,o,c]}class H extends j{constructor(l){super();b(this,l,O,N,y,{mq:2})}}export{H as C,A as G};
