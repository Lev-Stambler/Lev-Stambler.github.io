import{S as t,i as e,s,e as l,t as a,a as r,b as n,d as c,g as o,h as i,j as f,k as h,y as g,p as u,q as m,z as d,A as p,c as $,f as v,m as j,l as w,n as x,o as b,B as E,w as _,v as A}from"./client.4d7c30fb.js";import{H as D}from"./Tags.f5679b9d.js";function I(t,e,s){const l=t.slice();return l[1]=e[s],l}function V(t){let e,s,u,m=t[1]+"";return{c(){e=l("span"),s=a("#"),u=a(m),this.h()},l(t){e=r(t,"SPAN",{class:!0});var l=n(e);s=c(l,"#"),u=c(l,m),l.forEach(o),this.h()},h(){i(e,"class","tag")},m(t,l){f(t,e,l),h(e,s),h(e,u)},p(t,e){1&e&&m!==(m=t[1]+"")&&g(u,m)},d(t){t&&o(e)}}}function y(t){let e,s,$,v,j,w,x,b,E,_,A,D,y,B,H=t[0].date_published+"",N=t[0].title+"",P=t[0].short+"",S=t[0].tag_list,k=[];for(let e=0;e<S.length;e+=1)k[e]=V(I(t,S,e));return{c(){e=l("a"),s=l("div"),$=a(H),v=u(),j=l("h1"),w=a(N),x=u(),b=l("div");for(let t=0;t<k.length;t+=1)k[t].c();E=u(),_=l("p"),A=a(P),D=u(),y=l("div"),this.h()},l(t){e=r(t,"A",{href:!0,class:!0});var l=n(e);s=r(l,"DIV",{class:!0});var a=n(s);$=c(a,H),v=m(a),j=r(a,"H1",{});var i=n(j);w=c(i,N),i.forEach(o),x=m(a),b=r(a,"DIV",{class:!0});var f=n(b);for(let t=0;t<k.length;t+=1)k[t].l(f);f.forEach(o),E=m(a),_=r(a,"P",{});var h=n(_);A=c(h,P),h.forEach(o),D=m(a),y=r(a,"DIV",{class:!0}),n(y).forEach(o),a.forEach(o),l.forEach(o),this.h()},h(){i(b,"class","tags"),i(y,"class","flex-container svelte-1xwiejl"),i(s,"class","card svelte-1xwiejl"),i(e,"href",B="/blog/"+t[0].slug),i(e,"class","svelte-1xwiejl")},m(t,l){f(t,e,l),h(e,s),h(s,$),h(s,v),h(s,j),h(j,w),h(s,x),h(s,b);for(let t=0;t<k.length;t+=1)k[t].m(b,null);h(s,E),h(s,_),h(_,A),h(s,D),h(s,y)},p(t,[s]){if(1&s&&H!==(H=t[0].date_published+"")&&g($,H),1&s&&N!==(N=t[0].title+"")&&g(w,N),1&s){let e;for(S=t[0].tag_list,e=0;e<S.length;e+=1){const l=I(t,S,e);k[e]?k[e].p(l,s):(k[e]=V(l),k[e].c(),k[e].m(b,null))}for(;e<k.length;e+=1)k[e].d(1);k.length=S.length}1&s&&P!==(P=t[0].short+"")&&g(A,P),1&s&&B!==(B="/blog/"+t[0].slug)&&i(e,"href",B)},i:d,o:d,d(t){t&&o(e),p(k,t)}}}function B(t,e,s){let{article:l}=e;return t.$set=(t=>{"article"in t&&s(0,l=t.article)}),[l]}class H extends t{constructor(t){super(),e(this,t,B,y,s,{article:0})}}function N(t,e,s){const l=t.slice();return l[1]=e[s],l}function P(t){let e;const s=new H({props:{article:t[1]}});return{c(){$(s.$$.fragment)},l(t){v(s.$$.fragment,t)},m(t,l){j(s,t,l),e=!0},p(t,e){const l={};1&e&&(l.article=t[1]),s.$set(l)},i(t){e||(w(s.$$.fragment,t),e=!0)},o(t){x(s.$$.fragment,t),e=!1},d(t){b(s,t)}}}function S(t){let e,s,l;const a=new D({});let r=t[0],n=[];for(let e=0;e<r.length;e+=1)n[e]=P(N(t,r,e));const c=t=>x(n[t],1,1,()=>{n[t]=null});return{c(){$(a.$$.fragment),e=u();for(let t=0;t<n.length;t+=1)n[t].c();s=E()},l(t){v(a.$$.fragment,t),e=m(t);for(let e=0;e<n.length;e+=1)n[e].l(t);s=E()},m(t,r){j(a,t,r),f(t,e,r);for(let e=0;e<n.length;e+=1)n[e].m(t,r);f(t,s,r),l=!0},p(t,[e]){if(1&e){let l;for(r=t[0],l=0;l<r.length;l+=1){const a=N(t,r,l);n[l]?(n[l].p(a,e),w(n[l],1)):(n[l]=P(a),n[l].c(),w(n[l],1),n[l].m(s.parentNode,s))}for(A(),l=r.length;l<n.length;l+=1)c(l);_()}},i(t){if(!l){w(a.$$.fragment,t);for(let t=0;t<r.length;t+=1)w(n[t]);l=!0}},o(t){x(a.$$.fragment,t),n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)x(n[t]);l=!1},d(t){b(a,t),t&&o(e),p(n,t),t&&o(s)}}}async function k(){const t=await this.fetch("/content/articles.json");return{articles:await t.json()}}function q(t,e,s){let{articles:l}=e;return t.$set=(t=>{"articles"in t&&s(0,l=t.articles)}),[l]}export default class extends t{constructor(t){super(),e(this,t,q,S,s,{articles:0})}}export{k as preload};