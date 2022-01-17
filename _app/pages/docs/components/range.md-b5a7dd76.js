import{S as $,i as w,s as x,a1 as un,C as Y,e as y,k as C,c as E,a as j,m as q,d as f,b as P,F as nn,G as F,g as d,H as L,ak as an,W as K,Y as pn,Z as mn,_ as fn,z as cn,q as G,o as H,aa as gn,L as en,N as _n,ad as sn,an as kn,a5 as S,a6 as N,t as O,w as A,h as I,x as M,y as Q,a7 as V,B as W}from"../../../chunks/vendor-34a2d25b.js";/* empty css                                                            */import{u as bn}from"../../../chunks/uuid-770ab681.js";import{F as dn,G as vn}from"../../../chunks/Group-aaf276b1.js";import{K as hn}from"../../../chunks/_knobs-252a7b5e.js";import"../../../chunks/Col-f6c9b6da.js";function yn(s){let n,o,a,r,c,b,p,u,h;const v=s[8].default,m=un(v,s,s[7],null);let _=[s[6],{id:r="range-"+s[5]},{class:c="is-"+s[4]},{style:b="--range: "+s[0]+"; --min: "+s[1]+"; --max: "+s[2]},{"data-range":s[0]}],l={};for(let e=0;e<_.length;e+=1)l=Y(l,_[e]);return{c(){n=y("label"),m&&m.c(),o=C(),a=y("input"),this.h()},l(e){n=E(e,"LABEL",{id:!0,class:!0,style:!0,"data-range":!0});var i=j(n);m&&m.l(i),o=q(i),a=E(i,"INPUT",{class:!0,type:!0,min:!0,max:!0}),i.forEach(f),this.h()},h(){P(a,"class","slider svelte-4txfm3"),P(a,"type","range"),P(a,"min",s[1]),P(a,"max",s[2]),nn(n,l),F(n,"form-inline",s[3]),F(n,"svelte-4txfm3",!0)},m(e,i){d(e,n,i),m&&m.m(n,null),L(n,o),L(n,a),an(a,s[0]),p=!0,u||(h=[K(a,"change",s[11]),K(a,"input",s[11]),K(a,"input",s[9]),K(a,"change",s[10])],u=!0)},p(e,[i]){m&&m.p&&(!p||i&128)&&pn(m,v,e,e[7],p?fn(v,e[7],i,null):mn(e[7]),null),(!p||i&2)&&P(a,"min",e[1]),(!p||i&4)&&P(a,"max",e[2]),i&1&&an(a,e[0]),nn(n,l=cn(_,[i&64&&e[6],{id:r},(!p||i&16&&c!==(c="is-"+e[4]))&&{class:c},(!p||i&7&&b!==(b="--range: "+e[0]+"; --min: "+e[1]+"; --max: "+e[2]))&&{style:b},(!p||i&1)&&{"data-range":e[0]}])),F(n,"form-inline",e[3]),F(n,"svelte-4txfm3",!0)},i(e){p||(G(m,e),p=!0)},o(e){H(m,e),p=!1},d(e){e&&f(n),m&&m.d(e),u=!1,gn(h)}}}function En(s,n,o){const a=["range","min","max","inline","validity"];let r=en(n,a),{$$slots:c={},$$scope:b}=n,{range:p=50}=n,{min:u=0}=n,{max:h=100}=n,{inline:v=!1}=n,{validity:m=!1}=n;const _=bn();function l(g){sn.call(this,s,g)}function e(g){sn.call(this,s,g)}function i(){p=kn(this.value),o(0,p)}return s.$$set=g=>{n=Y(Y({},n),_n(g)),o(6,r=en(n,a)),"range"in g&&o(0,p=g.range),"min"in g&&o(1,u=g.min),"max"in g&&o(2,h=g.max),"inline"in g&&o(3,v=g.inline),"validity"in g&&o(4,m=g.validity),"$$scope"in g&&o(7,b=g.$$scope)},[p,u,h,v,m,_,r,b,c,l,e,i]}class jn extends ${constructor(n){super();w(this,n,En,yn,x,{range:0,min:1,max:2,inline:3,validity:4})}}function Rn(s){let n,o,a,r,c,b,p,u;function h(l){s[1](l)}function v(l){s[2](l)}function m(l){s[3](l)}let _={inline:s[0].inline,validity:s[0].validity};return s[0].range!==void 0&&(_.range=s[0].range),s[0].min!==void 0&&(_.min=s[0].min),s[0].max!==void 0&&(_.max=s[0].max),r=new jn({props:_}),S.push(()=>N(r,"range",h)),S.push(()=>N(r,"min",v)),S.push(()=>N(r,"max",m)),{c(){n=y("h4"),o=O("Range"),a=C(),A(r.$$.fragment)},l(l){n=E(l,"H4",{});var e=j(n);o=I(e,"Range"),e.forEach(f),a=q(l),M(r.$$.fragment,l)},m(l,e){d(l,n,e),L(n,o),d(l,a,e),Q(r,l,e),u=!0},p(l,e){const i={};e&1&&(i.inline=l[0].inline),e&1&&(i.validity=l[0].validity),!c&&e&1&&(c=!0,i.range=l[0].range,V(()=>c=!1)),!b&&e&1&&(b=!0,i.min=l[0].min,V(()=>b=!1)),!p&&e&1&&(p=!0,i.max=l[0].max,V(()=>p=!1)),r.$set(i)},i(l){u||(G(r.$$.fragment,l),u=!0)},o(l){H(r.$$.fragment,l),u=!1},d(l){l&&f(n),l&&f(a),W(r,l)}}}function Cn(s){let n,o;return n=new vn({props:{$$slots:{default:[Rn]},$$scope:{ctx:s}}}),{c(){A(n.$$.fragment)},l(a){M(n.$$.fragment,a)},m(a,r){Q(n,a,r),o=!0},p(a,r){const c={};r&33&&(c.$$scope={dirty:r,ctx:a}),n.$set(c)},i(a){o||(G(n.$$.fragment,a),o=!0)},o(a){H(n.$$.fragment,a),o=!1},d(a){W(n,a)}}}function qn(s){let n,o,a,r,c,b,p,u,h,v,m,_,l,e,i,g,U,R,ln=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Range <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> range
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Range</span>
    <span class="token attr-name"><span class="token namespace">bind:</span>range</span>
    <span class="token attr-name">min=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">0</span><span class="token punctuation">&#125;</span></span>
    <span class="token attr-name">max=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token number">100</span><span class="token punctuation">&#125;</span></span>
    <span class="token attr-name">inline=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span></span>
    <span class="token attr-name">validity=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token keyword">null</span><span class="token punctuation">&#125;</span></span><span class="token punctuation">/></span></span></code>`,B;_=new dn({props:{$$slots:{default:[Cn]},$$scope:{ctx:s}}});function rn(t){s[4](t)}let Z={config:Ln};return s[0]!==void 0&&(Z.state=s[0]),i=new hn({props:Z}),S.push(()=>N(i,"state",rn)),{c(){n=y("h1"),o=O(tn),a=C(),r=y("blockquote"),c=y("p"),b=O("\u{1F6A7} Under construction"),p=C(),u=y("p"),h=O("The Range are for selecting values from ranges."),v=C(),m=y("p"),A(_.$$.fragment),l=C(),e=y("p"),A(i.$$.fragment),U=C(),R=y("pre"),this.h()},l(t){n=E(t,"H1",{});var k=j(n);o=I(k,tn),k.forEach(f),a=q(t),r=E(t,"BLOCKQUOTE",{});var T=j(r);c=E(T,"P",{});var z=j(c);b=I(z,"\u{1F6A7} Under construction"),z.forEach(f),T.forEach(f),p=q(t),u=E(t,"P",{});var D=j(u);h=I(D,"The Range are for selecting values from ranges."),D.forEach(f),v=q(t),m=E(t,"P",{});var J=j(m);M(_.$$.fragment,J),J.forEach(f),l=q(t),e=E(t,"P",{});var X=j(e);M(i.$$.fragment,X),X.forEach(f),U=q(t),R=E(t,"PRE",{class:!0});var on=j(R);on.forEach(f),this.h()},h(){P(R,"class","language-sv")},m(t,k){d(t,n,k),L(n,o),d(t,a,k),d(t,r,k),L(r,c),L(c,b),d(t,p,k),d(t,u,k),L(u,h),d(t,v,k),d(t,m,k),Q(_,m,null),d(t,l,k),d(t,e,k),Q(i,e,null),d(t,U,k),d(t,R,k),R.innerHTML=ln,B=!0},p(t,[k]){const T={};k&33&&(T.$$scope={dirty:k,ctx:t}),_.$set(T);const z={};!g&&k&1&&(g=!0,z.state=t[0],V(()=>g=!1)),i.$set(z)},i(t){B||(G(_.$$.fragment,t),G(i.$$.fragment,t),B=!0)},o(t){H(_.$$.fragment,t),H(i.$$.fragment,t),B=!1},d(t){t&&f(n),t&&f(a),t&&f(r),t&&f(p),t&&f(u),t&&f(v),t&&f(m),W(_),t&&f(l),t&&f(e),W(i),t&&f(U),t&&f(R)}}}const Pn={file:"range.md",title:"Range",api:[{title:"range: number = 50",description:"Checkbox range",variables:"any number"},{title:"min: number = 0",description:"Checkbox range",variables:"any number"},{title:"max: number = 100",description:"Checkbox range",variables:"any number"},{title:"inline: boolean = false",description:"Checkbox range",variables:"true | false"},{title:"validity: Validity = null",description:"Checkbox validity",variables:"null | success | error"}],config:{range:{type:"number",min:0,max:100,size:10},min:{type:"number",min:0,max:10,size:10},max:{type:"number",min:10,max:100,size:10},inline:{type:"checkbox"},validity:{options:[null,"success","error"]}}},{file:Kn,title:tn,api:Sn,config:Ln}=Pn;function Tn(s,n,o){let a={range:45,min:0,max:100,inline:!1,validity:null};function r(u){s.$$.not_equal(a.range,u)&&(a.range=u,o(0,a))}function c(u){s.$$.not_equal(a.min,u)&&(a.min=u,o(0,a))}function b(u){s.$$.not_equal(a.max,u)&&(a.max=u,o(0,a))}function p(u){a=u,o(0,a)}return[a,r,c,b,p]}class Nn extends ${constructor(n){super();w(this,n,Tn,qn,x,{})}}export{Nn as default,Pn as metadata};
