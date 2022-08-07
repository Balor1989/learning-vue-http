(function(){"use strict";var e={2329:function(e,t,r){var n=r(9242),o=r(3396);const i={class:"container"},a=(0,o._)("h1",null,"People list",-1),l={class:"form-control"},s=(0,o._)("label",{for:"name"}," Введите имя",-1),c=["disabled"],u={key:0},p={key:1},d={key:0,class:"card"},f={key:1,class:"card"};function h(e,t,r,h,m,v){const g=(0,o.up)("AppLoader"),b=(0,o.up)("PeopleList"),y=(0,o.up)("ErrorIndicator");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("form",{class:"card",onSubmit:t[1]||(t[1]=(0,n.iM)(((...e)=>v.createPerson&&v.createPerson(...e)),["prevent"]))},[a,(0,o._)("div",l,[s,(0,o.wy)((0,o._)("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>m.name=e)},null,512),[[n.nr,m.name,void 0,{trim:!0}]])]),(0,o._)("button",{class:"btn primary",disabled:!m.name.length},"Создать",8,c)],32),m.loading?((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(g)])):((0,o.wg)(),(0,o.iD)("div",p,[m.error?((0,o.wg)(),(0,o.iD)("div",f,[(0,o.Wm)(y,{error:m.error,onClose:t[2]||(t[2]=e=>m.error=null)},null,8,["error"])])):((0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(b,{people:m.people,onLoad:v.loadPeople,onDelete:v.deletePerson},null,8,["people","onLoad","onDelete"])]))]))])}r(1703);var m=r(7139);const v={key:0},g={class:"card"},b=["onClick"],y={key:1,class:"card center"},w=(0,o._)("h3",null,"Данные отсутствуют",-1);function _(e,t,r,n,i,a){return r.people.length?((0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("ul",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.people,(({id:t,firstName:r})=>((0,o.wg)(),(0,o.iD)("li",{class:"item",key:t},[(0,o.Uk)(" First Name : "+(0,m.zw)(r)+" ",1),(0,o._)("button",{class:"btn danger",onClick:r=>e.$emit("delete",t)},"Delete",8,b)])))),128))])])):((0,o.wg)(),(0,o.iD)("div",y,[w,(0,o._)("button",{class:"primary btn",onClick:t[0]||(t[0]=t=>e.$emit("load"))},"Загрузить")]))}var k={emits:["load","delete"],props:["people"]},D=r(89);const O=(0,D.Z)(k,[["render",_]]);var P=O,j=P;function C(e,t,r,n,i,a){return r.error?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,m.C_)(["error",r.error.type])},[(0,o._)("h3",null,(0,m.zw)(r.error.title),1),(0,o._)("p",null,(0,m.zw)(r.error.text),1),(0,o._)("button",{class:(0,m.C_)(["btn",r.error.type]),onClick:t[0]||(t[0]=t=>e.$emit("close"))}," Close ",2)],2)):(0,o.kq)("",!0)}var E={emits:["close"],props:["error"]};const L=(0,D.Z)(E,[["render",C]]);var x=L,N=x;const T={class:"loader"},Z=(0,o._)("h2",null,"Loading...",-1),$=[Z];function z(e,t){return(0,o.wg)(),(0,o.iD)("div",T,$)}const S={},W=(0,D.Z)(S,[["render",z]]);var A=W,F=A,I={components:{PeopleList:j,ErrorIndicator:N,AppLoader:F},data(){return{name:"",url:"https://learning-vue-http-8cd67-default-rtdb.asia-southeast1.firebasedatabase.app/people.json",people:[],error:null,loading:!1}},mounted(){this.loadPeople()},methods:{async createPerson(){try{const e=await fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:this.name})}),t=await e.json();this.people.push({firstName:this.name,id:t.name}),this.name=""}catch(e){console.log(e.message)}},async loadPeople(){try{this.loading=!0;const e=await fetch(this.url),t=await e.json();if(!t)throw this.loading=!1,new Error("Список людей пуст");this.people=Object.keys(t).map((e=>({id:e,firstName:t[e].firstName}))),this.loading=!1}catch(e){this.loading=!1,this.error={type:"danger",title:"Error",text:e.message}}},async deletePerson(e){await fetch(`https://learning-vue-http-8cd67-default-rtdb.asia-southeast1.firebasedatabase.app/people/${e}.json`,{method:"DELETE"}),this.people=this.people.filter((t=>t.id!==e))}}};const M=(0,D.Z)(I,[["render",h]]);var U=M;(0,n.ri)(U).mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,i){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],i=e[u][2];for(var l=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],l=n[1],s=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var u=s(r)}for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=self["webpackChunklearning_vue_http"]=self["webpackChunklearning_vue_http"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(2329)}));n=r.O(n)})();
//# sourceMappingURL=app.c1492acd.js.map