var v=Object.defineProperty;var m=(n,t,a)=>t in n?v(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a;var h=(n,t,a)=>(m(n,typeof t!="symbol"?t+"":t,a),a);import{d as S,o as _,h as f,w as d,i as O,c as x,t as w,u as E,a as B}from"./index.2c781f82.js";const M={class:"observer"},D=S({__name:"observer",setup(n){_(()=>{});let t=f({a:{b:{c:123}}});a(t,r=>{console.log(r,"\u6570\u636E\u6BD4\u7EB3\u6E56a")});function a(r,e){d(()=>{e(r.value)}),O(r.value,s=>{e(s)},{deep:!0})}t.value.a=22,setTimeout(()=>{t.value=55},1e3);class y{constructor(e){h(this,"pObserver",()=>{});h(this,"watcherMap",new Map);h(this,"watcherSet",new Set);this.pObserver=e}initProxy(e){let s=this;return new Proxy(e,{get(o,l){return o[l]},set(o,l,g){return s.watcherMap.has(JSON.stringify(o))&&(console.log(g),s.triggerObserver("set",o[l],o,g)),o[l]=g,!0}})}triggerObserver(e,s,i,o){this.watcherMap.get(JSON.stringify(i))&&this.watcherMap.get(JSON.stringify(i))(o,s)}createWatch(e,s){this.watcherMap.set(JSON.stringify(e),s),this.watcherSet.add(Symbol(JSON.stringify(e)))}}let p=new y((r="set",e,s)=>{new Map([["getFN",function(){console.log(`\u83B7\u53D6\u4E86 ${e} \u503C\u4E3A ${s}`)}],["setFN",function(){console.log(`\u8BBE\u7F6E\u4E86 ${e} \u503C\u4E3A ${s}`)}]]).get(r+"FN")()}),u=p.initProxy({a:10});p.createWatch(u,(r,e)=>{console.log("\u6570\u636E\u6539\u53D8",r,e)}),u.a=20,u.s=20,setTimeout(()=>{console.log(1111),u.a=30},1e3);let c=f("1");return console.log(c,"\u6570\u636E"),setTimeout(()=>{console.log(c),c.value="123"},1e3),(r,e)=>(B(),x("div",M," \u89C2\u5BDF\u8005 "+w(E(t))+" "+w(E(c)),1))}});export{D as default};
