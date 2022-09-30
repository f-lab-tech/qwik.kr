import{i as e,u as i}from"./q-c0df5510.js";const a=[{text:"Static Assets",id:"static-assets",level:1}],o={title:"Qwik City - Static Assets",meta:[],styles:[],links:[]},r={title:"Qwik City - Static Assets"};function n(s){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",code:"code",pre:"pre"},s.components);return e(i,{children:[e(t.h1,{id:"static-assets",children:[e(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#static-assets",children:e(t.span,{className:"icon icon-link"})}),"Static Assets"]}),`
`,e(t.p,{children:["Use ",e(t.code,{children:"/public"})," folder to store all static assets such as images, fonts, etc."]}),`
`,e(t.p,{children:["All static assets are served from your server's root (",e(t.code,{children:"/"})," as in ",e(t.code,{children:"https://example.com/"}),") folder and superimposed under your routes (routes have priority.)"]}),`
`,e(t.pre,{children:e(t.code,{children:`public/
\u251C\u2500\u2500 favicon.ico           # http://localhost:3002/favicon.ico
\u2514\u2500\u2500 images/
    \u2514\u2500\u2500 logo.png          # http://localhost:3002/images/logo.png
`})})]})}function l(s={}){const{wrapper:t}=s.components||{};return t?e(t,Object.assign({},s,{children:e(n,s)})):n(s)}export{l as default,r as frontmatter,o as head,a as headings};
