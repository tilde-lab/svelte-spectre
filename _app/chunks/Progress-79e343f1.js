import{S as h,i as d,s as x,B as u,e as S,c as P,a as E,d as g,D as v,E as i,f as j,p as R,T as _,J as f,L as b}from"./vendor-c4a7685a.js";/* empty css                                              */function q(a){let e,t,n=[a[4],{class:t="progress "+(a[0]&&`text-${a[0]}`)},{value:a[2]},{max:a[3]}],o={};for(let s=0;s<n.length;s+=1)o=u(o,n[s]);return{c(){e=S("progress"),this.h()},l(s){e=P(s,"PROGRESS",{class:!0,max:!0}),E(e).forEach(g),this.h()},h(){v(e,o),i(e,"progress-invert",a[1]),i(e,"svelte-19l6snx",!0)},m(s,l){j(s,e,l)},p(s,[l]){v(e,o=R(n,[l&16&&s[4],l&1&&t!==(t="progress "+(s[0]&&`text-${s[0]}`))&&{class:t},l&4&&{value:s[2]},l&8&&{max:s[3]}])),i(e,"progress-invert",s[1]),i(e,"svelte-19l6snx",!0)},i:_,o:_,d(s){s&&g(e)}}}function B(a,e,t){const n=["color","invert","value","max"];let o=f(e,n),{color:s="light"}=e,{invert:l=!1}=e,{value:c}=e,{max:m=0}=e;return a.$$set=r=>{e=u(u({},e),b(r)),t(4,o=f(e,n)),"color"in r&&t(0,s=r.color),"invert"in r&&t(1,l=r.invert),"value"in r&&t(2,c=r.value),"max"in r&&t(3,m=r.max)},[s,l,c,m,o]}class G extends h{constructor(e){super();d(this,e,B,q,x,{color:0,invert:1,value:2,max:3})}}export{G as P};
