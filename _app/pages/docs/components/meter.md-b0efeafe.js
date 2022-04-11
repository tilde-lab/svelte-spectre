import{S as Q,i as U,s as V,C as j,e as v,c as y,a as w,d as o,G as q,H as _,g as c,z as W,E as K,M as R,O as $,a2 as ee,a3 as ae,t as A,k as z,w as B,h as G,m as T,x as I,b as se,I as L,y as O,A as te,a4 as ne,q as D,o as F,B as J}from"../../../chunks/index-84d7811f.js";/* empty css                                                            */import{K as pe}from"../../../chunks/_knobs-9328925d.js";import"../../../chunks/Col-75f921e3.js";import"../../../chunks/_media-5db5d977.js";import"../../../chunks/index-c0a56774.js";function re(n){let a,p=[n[8],{class:"meter"},{value:n[0]},{min:n[1]},{max:n[2]},{low:n[3]},{high:n[4]},{optimum:n[5]}],i={};for(let s=0;s<p.length;s+=1)i=j(i,p[s]);return{c(){a=v("meter"),this.h()},l(s){a=y(s,"METER",{class:!0,min:!0,max:!0,low:!0,high:!0,optimum:!0}),w(a).forEach(o),this.h()},h(){q(a,i),_(a,"striped",n[6]),_(a,"animated",n[7]),_(a,"svelte-jr4kw7",!0)},m(s,r){c(s,a,r)},p(s,[r]){q(a,i=W(p,[r&256&&s[8],{class:"meter"},r&1&&{value:s[0]},r&2&&{min:s[1]},r&4&&{max:s[2]},r&8&&{low:s[3]},r&16&&{high:s[4]},r&32&&{optimum:s[5]}])),_(a,"striped",s[6]),_(a,"animated",s[7]),_(a,"svelte-jr4kw7",!0)},i:K,o:K,d(s){s&&o(a)}}}function ie(n,a,p){const i=["value","min","max","low","high","optimum","striped","animated"];let s=R(a,i),{value:r=0}=a,{min:h=0}=a,{max:k=100}=a,{low:m=26}=a,{high:b=51}=a,{optimum:f=90}=a,{striped:u}=a,{animated:g}=a;return n.$$set=t=>{a=j(j({},a),$(t)),p(8,s=R(a,i)),"value"in t&&p(0,r=t.value),"min"in t&&p(1,h=t.min),"max"in t&&p(2,k=t.max),"low"in t&&p(3,m=t.low),"high"in t&&p(4,b=t.high),"optimum"in t&&p(5,f=t.optimum),"striped"in t&&p(6,u=t.striped),"animated"in t&&p(7,g=t.animated)},[r,h,k,m,b,f,u,g,s]}class oe extends Q{constructor(a){super(),U(this,a,ie,re,V,{value:0,min:1,max:2,low:3,high:4,optimum:5,striped:6,animated:7})}}function le(n){let a,p,i,s,r,h,k,m,b,f,u,g,t,d,X=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Meter <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token literal-property property">striped</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">animated</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">low</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token literal-property property">high</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token literal-property property">optimum</span><span class="token operator">:</span> <span class="token number">90</span>
    <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Meter</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span> <span class="token operator">...</span>state <span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,M;const P=[n[0]];let S={};for(let e=0;e<P.length;e+=1)S=j(S,P[e]);m=new oe({props:S});function Y(e){n[1](e)}let C={config:me};return n[0]!==void 0&&(C.state=n[0]),u=new pe({props:C}),ee.push(()=>ae(u,"state",Y)),{c(){a=v("h1"),p=A(N),i=z(),s=v("p"),r=A("Meters represent the value within the known range."),h=z(),k=v("p"),B(m.$$.fragment),b=z(),f=v("p"),B(u.$$.fragment),t=z(),d=v("pre"),this.h()},l(e){a=y(e,"H1",{});var l=w(a);p=G(l,N),l.forEach(o),i=T(e),s=y(e,"P",{});var x=w(s);r=G(x,"Meters represent the value within the known range."),x.forEach(o),h=T(e),k=y(e,"P",{});var E=w(k);I(m.$$.fragment,E),E.forEach(o),b=T(e),f=y(e,"P",{});var H=w(f);I(u.$$.fragment,H),H.forEach(o),t=T(e),d=y(e,"PRE",{class:!0});var Z=w(d);Z.forEach(o),this.h()},h(){se(d,"class","language-sv")},m(e,l){c(e,a,l),L(a,p),c(e,i,l),c(e,s,l),L(s,r),c(e,h,l),c(e,k,l),O(m,k,null),c(e,b,l),c(e,f,l),O(u,f,null),c(e,t,l),c(e,d,l),d.innerHTML=X,M=!0},p(e,[l]){const x=l&1?W(P,[te(e[0])]):{};m.$set(x);const E={};!g&&l&1&&(g=!0,E.state=e[0],ne(()=>g=!1)),u.$set(E)},i(e){M||(D(m.$$.fragment,e),D(u.$$.fragment,e),M=!0)},o(e){F(m.$$.fragment,e),F(u.$$.fragment,e),M=!1},d(e){e&&o(a),e&&o(i),e&&o(s),e&&o(h),e&&o(k),J(m),e&&o(b),e&&o(f),J(u),e&&o(t),e&&o(d)}}}const ue={file:"meter.md",title:"Meter",api:[{title:"value: number = 0",description:"Current numeric value",variables:"any number"},{title:"min: number = 0",description:"The lower numeric bound of the measured range.",variables:"any number"},{title:"max: number = 100",description:"The upper numeric bound of the measured range.",variables:"any number"},{title:"low: number = 26",description:"The upper numeric bound of the low end of the measured range.",variables:"any number"},{title:"high: number = 51",description:"The lower numeric bound of the high end of the measured range.",variables:"any number"},{title:"optimum: number = 90",description:"This attribute indicates the optimal numeric value.",variables:"any number"},{title:"striped: boolean",description:"Striped indicator.",variables:"true | false"},{title:"animated: boolean",description:"Striped animated indicator.",variables:"true | false"}],config:{striped:{type:"checkbox"},animated:{type:"checkbox"},value:{type:"number",min:0,max:100,size:5},min:{type:"number",min:0,max:100,size:5},max:{type:"number",min:0,max:100,size:5},low:{type:"number",min:0,max:100,size:5},high:{type:"number",min:0,max:100,size:5},optimum:{type:"number",min:0,max:100,size:5}}},{file:_e,title:N,api:ve,config:me}=ue;function ce(n,a,p){let i={value:25,striped:!0,animated:!0,min:0,max:100,low:26,high:51,optimum:90};function s(r){i=r,p(0,i)}return[i,s]}class ye extends Q{constructor(a){super(),U(this,a,ce,le,V,{})}}export{ye as default,ue as metadata};
