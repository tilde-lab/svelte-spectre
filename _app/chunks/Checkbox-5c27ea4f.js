import{S as U,i as p,s as q,_ as A,B as j,e as k,k as L,c as y,a as S,n as B,d as E,b as C,D as I,E as v,f as D,F as g,U as F,W as J,X as N,Y as T,p as W,x as X,u as Y,J as P,L as z}from"./vendor-ff7ec535.js";import{u as G}from"./uuid-770ab681.js";/* empty css                                              */function H(n){let e,l,c,r,_,d,f,u,o,m;const h=n[7].default,s=A(h,n,n[6],null);let a=[n[5],{id:d="checkbox-"+n[4]},{class:f="form-checkbox is-"+n[3]}],b={};for(let t=0;t<a.length;t+=1)b=j(b,a[t]);return{c(){e=k("label"),l=k("input"),c=L(),r=k("i"),_=L(),s&&s.c(),this.h()},l(t){e=y(t,"LABEL",{id:!0,class:!0});var i=S(e);l=y(i,"INPUT",{type:!0,class:!0}),c=B(i),r=y(i,"I",{class:!0}),S(r).forEach(E),_=B(i),s&&s.l(i),i.forEach(E),this.h()},h(){C(l,"type","checkbox"),l.indeterminate=n[1],C(l,"class","svelte-1jjgtfw"),C(r,"class","form-icon svelte-1jjgtfw"),I(e,b),v(e,"form-inline",n[2]),v(e,"svelte-1jjgtfw",!0)},m(t,i){D(t,e,i),g(e,l),l.checked=n[0],g(e,c),g(e,r),g(e,_),s&&s.m(e,null),u=!0,o||(m=F(l,"change",n[8]),o=!0)},p(t,[i]){(!u||i&2)&&(l.indeterminate=t[1]),i&1&&(l.checked=t[0]),s&&s.p&&(!u||i&64)&&J(s,h,t,t[6],u?T(h,t[6],i,null):N(t[6]),null),I(e,b=W(a,[i&32&&t[5],{id:d},(!u||i&8&&f!==(f="form-checkbox is-"+t[3]))&&{class:f}])),v(e,"form-inline",t[2]),v(e,"svelte-1jjgtfw",!0)},i(t){u||(X(s,t),u=!0)},o(t){Y(s,t),u=!1},d(t){t&&E(e),s&&s.d(t),o=!1,m()}}}function K(n,e,l){const c=["value","indeterminate","inline","validity"];let r=P(e,c),{$$slots:_={},$$scope:d}=e,{value:f=!1}=e,{indeterminate:u=!1}=e,{inline:o=!1}=e,{validity:m=!1}=e;const h=G();function s(){f=this.checked,l(0,f)}return n.$$set=a=>{e=j(j({},e),z(a)),l(5,r=P(e,c)),"value"in a&&l(0,f=a.value),"indeterminate"in a&&l(1,u=a.indeterminate),"inline"in a&&l(2,o=a.inline),"validity"in a&&l(3,m=a.validity),"$$scope"in a&&l(6,d=a.$$scope)},[f,u,o,m,h,r,d,_,s]}class R extends U{constructor(e){super();p(this,e,K,H,q,{value:0,indeterminate:1,inline:2,validity:3})}}export{R as C};
