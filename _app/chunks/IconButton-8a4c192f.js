import{S as B,i as I,s as $,B as r,j as d,m as p,o as b,p as q,q as v,x as u,u as f,v as h,J as z,$ as C,L as J,aa as S,_ as L,W as P,X as W,Y as X}from"./vendor-c4a7685a.js";import{I as Y}from"./Icon-62c427b3.js";import{B as A}from"./Button-1cf7444c.js";function D(s){let t;const a=s[5].default,e=L(a,s,s[8],null);return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,o){e&&e.m(n,o),t=!0},p(n,o){e&&e.p&&(!t||o&256)&&P(e,a,n,n[8],t?X(a,n[8],o,null):W(n[8]),null)},i(n){t||(u(e,n),t=!0)},o(n){f(e,n),t=!1},d(n){e&&e.d(n)}}}function E(s){let t,a;return t=new Y({props:{icon:s[0],color:s[2],size:s[1],svg:s[4].default,$$slots:{default:[D]},$$scope:{ctx:s}}}),{c(){d(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,n){b(t,e,n),a=!0},p(e,n){const o={};n&1&&(o.icon=e[0]),n&4&&(o.color=e[2]),n&2&&(o.size=e[1]),n&16&&(o.svg=e[4].default),n&256&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){a||(u(t.$$.fragment,e),a=!0)},o(e){f(t.$$.fragment,e),a=!1},d(e){h(t,e)}}}function F(s){let t,a;const e=[{shape:"square"},{variant:"link"},s[3]];let n={$$slots:{default:[E]},$$scope:{ctx:s}};for(let o=0;o<e.length;o+=1)n=r(n,e[o]);return t=new A({props:n}),t.$on("click",s[6]),t.$on("dblclick",s[7]),{c(){d(t.$$.fragment)},l(o){p(t.$$.fragment,o)},m(o,c){b(t,o,c),a=!0},p(o,[c]){const i=c&8?q(e,[e[0],e[1],v(o[3])]):{};c&279&&(i.$$scope={dirty:c,ctx:o}),t.$set(i)},i(o){a||(u(t.$$.fragment,o),a=!0)},o(o){f(t.$$.fragment,o),a=!1},d(o){h(t,o)}}}function G(s,t,a){const e=["icon","iconSize","color"];let n=z(t,e),{$$slots:o={},$$scope:c}=t;const i=C(o);let{icon:_}=t,{iconSize:m="1x"}=t,{color:g=""}=t;function j(l){S.call(this,s,l)}function k(l){S.call(this,s,l)}return s.$$set=l=>{t=r(r({},t),J(l)),a(3,n=z(t,e)),"icon"in l&&a(0,_=l.icon),"iconSize"in l&&a(1,m=l.iconSize),"color"in l&&a(2,g=l.color),"$$scope"in l&&a(8,c=l.$$scope)},[_,m,g,n,i,o,j,k,c]}class N extends B{constructor(t){super();I(this,t,G,F,$,{icon:0,iconSize:1,color:2})}}export{N as I};
