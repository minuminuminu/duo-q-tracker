var S=Object.defineProperty;var b=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var p=(e,t,o)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))k.call(t,o)&&p(e,o,t[o]);if(b)for(var o of b(t))j.call(t,o)&&p(e,o,t[o]);return e};import{W as O,U as C,s as r,j as x,u as y,R as w,A as I,a as F,b as N,r as u,c as z}from"./vendor.e4beda62.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}};L();const M=O`
  *{
    margin:0;
    box-sizing: border-box;
    font-family: 'Be Vietnam Pro', sans-serif;
  }

  body{
    width:100vw;
    height:100vh;
    background-image: url("images/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`,A=C`
  from {
    opacity:0;
    transform: rotateY(-10deg)
  }

  to{
    opacity: 1;
    transform:rotateY(0)
  }
`,B=r.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000028;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;

  animation: ${e=>e.loaded?A:null} 0.75s;
`,E=r.div`
  width: 40vw;
  height: 150px;
  background-color: white;
  box-shadow: 0 0 5px white;
  margin: 30px;
  z-index: 1;
`,P=r.div`
  width: 100%;
  height: 100%;
`,J=r.div`
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
`,T=r.div`
  border: 1px solid;
  width: 99%;
  height: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > * {
    margin: 2px;
  }
`,R=r.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  flex-direction: row;
`,U=r.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,W=r.div`
  display: flex;
  align-items: center;

  & > * {
    margin: 4px;
  }
`,D=r.button`
  padding: 8px 28px 8px 28px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  background-color: #76f076;
  transition: background-color 0.2;

  &:hover {
    background-color: #72e672;
    cursor: pointer;
  }
`,n=x.exports.jsx,c=x.exports.jsxs,v=x.exports.Fragment,Y=e=>{const{register:t,handleSubmit:o}=y(),a=i=>{i.checked==!0?(e.setOnloadMessage(!1),localStorage.setItem("onload",!1)):e.setOnloadMessage(!1)};return w.createPortal(n(v,{children:e.modal?n(B,{loaded:!!e.modal,children:n(E,{children:c(P,{children:[n(J,{children:c(T,{children:[n("div",{children:"NOTE: The data is stored in your browser. The track of your Duo-Queue Games is being kept on each machine individually."}),n("br",{}),n("div",{children:"e.g.: You won't see the track from your PC browser on your mobile browser."})]})}),n(R,{children:c(U,{onSubmit:o(a),children:[c(W,{children:[n("input",h({type:"checkbox",name:"checkbox",id:"checkbox"},t("checked"))),n("label",{htmlFor:"checkbox",children:"Understood, don't show again."})]}),n(D,{children:"Close"})]})})]})})}):null}),document.getElementById("alert"))},$=r.div`
  width: 100vw;
  height: 100vh;
`,G=r.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,q=r.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`,K=r.input`
  border: none;
  width: 11vw;
  border-radius: 6px;
  margin: 15px;
  box-shadow: 0 0 10px -5px;
  font-size: 20px;
  text-align: center;
  padding: 10px;
  transition: all 0.3s ease-in-out;

  &:focus {
    width: 20vw;
    box-shadow: 0 0 20px -10px;
    transform: scale(1.1);
    outline: none;
  }
`,Q=r.button`
  width: 8vw;
  height: 31px;
  border: none;
  border-radius: 8px;
  background-color: #5aeb5a;
  transition: background-color 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background-color: #4fe04f;
  }
`,V=e=>{const{register:t,resetField:o,handleSubmit:a}=y();return n(G,{children:c(q,{onSubmit:a(s=>{s.entry===""?alert("You need to enter a valid name!"):(e.setLocalStorage({[s.entry.toLowerCase()]:{wins:0,losses:0}}),o("entry"))}),children:[n(K,h({type:"text",autoComplete:"off",placeholder:"New Duo Entry"},t("entry"))),n(Q,{children:"Add Tracker"})]})})},H=r.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`,X=r.div`
  margin: 18px;
  background-color: #ffffff37;
  height: 15rem;
  box-shadow: 0 0 15px -10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Z=r.div`
  position: relative;
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  text-transform: capitalize;
`,_=r.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 5px;
  padding: 6px;
  background-color: #e72c2cb9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #d82525c0;
  }
`,ee=r(I)`
  font-size: 25px;
`,te=r.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`,ne=r.div`
  background-color: #55e755bf;
  border-radius: 8px;
  height: 3em;
  width: 3em;
  margin-left: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #45d345bf;
  }
`,oe=r(F)`
  font-size: 40px;
`,re=r.div`
  height: 100%;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: 300;

  & > div {
    margin: 2px;
  }
`,ie=r.div`
  background-color: #f14242bf;
  border-radius: 8px;
  height: 3em;
  width: 3em;
  margin-right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #da3131c5;
  }
`,se=r(N)`
  font-size: 40px;
`,ce=e=>{const[t,o]=u.exports.useState("---");return u.exports.useEffect(()=>{e.wins===0&&e.losses===0&&o("---")},[]),u.exports.useEffect(()=>{const a=e.wins+e.losses;if(e.wins===0&&e.losses===0)return;const s=e.wins/a*100;o(s.toFixed(2))},[e.wins,e.losses]),c(X,{children:[c(Z,{children:[n("div",{children:e.name}),n(_,{onClick:()=>e.removeFunc(e.name),children:n(ee,{})})]}),c(te,{children:[n(ne,{onClick:()=>e.methods.win(e.name),children:n(oe,{})}),c(re,{children:[c("div",{children:["Wins: ",e.wins]}),c("div",{children:["Losses: ",e.losses]}),c("div",{children:["Winrate: ",t,"%"]})]}),n(ie,{onClick:()=>e.methods.loss(e.name),children:n(se,{})})]})]})},ae=e=>n(H,{children:e.users.map((t,o)=>n(ce,{name:t[0],wins:t[1].wins,losses:t[1].losses,removeFunc:e.removeFunc,methods:e.methods},o))});function le(){const[e,t]=u.exports.useState(localStorage.getItem("onload")?localStorage.getItem("onload"):"true"),[o,a]=u.exports.useState([]),[i,s]=u.exports.useState(JSON.parse(localStorage.getItem("names")));return u.exports.useEffect(()=>{t(e==="true")},[]),u.exports.useEffect(()=>{if(localStorage.getItem("names")===null)return;const d=JSON.parse(localStorage.getItem("names"));a(Object.entries(d))},[i]),c(v,{children:[n(Y,{modal:e,setOnloadMessage:t}),c($,{children:[n(V,{setLocalStorage:d=>{const l=h(h({},i),d);localStorage.setItem("names",JSON.stringify(l)),s(l)}}),n(ae,{users:o,removeFunc:d=>{let l=h({},i);delete l[d],localStorage.setItem("names",JSON.stringify(l)),s(l)},methods:{win:d=>{const l=[...o];l.map(g=>{if(d===g[0]){g[1].wins+=1;let m=JSON.parse(localStorage.getItem("names"));m[d].wins+=1,localStorage.setItem("names",JSON.stringify(m)),s(m)}}),a(l)},loss:d=>{const l=[...o];l.map(g=>{if(d===g[0]){g[1].losses+=1;let m=JSON.parse(localStorage.getItem("names"));m[d].losses+=1,localStorage.setItem("names",JSON.stringify(m)),s(m)}}),a(l)}}})]})]})}w.render(c(z.StrictMode,{children:[n(le,{}),n(M,{})]}),document.getElementById("root"));
