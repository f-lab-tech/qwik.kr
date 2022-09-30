import{i as n,u as l}from"./q-c0df5510.js";const r=[{text:"Cloudflare Pages Middleware",id:"cloudflare-pages-middleware",level:1}],c={title:"Qwik City - Cloudflare Pages Middleware",meta:[],styles:[],links:[]},i={title:"Qwik City - Cloudflare Pages Middleware"};function s(a){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},a.components);return n(l,{children:[n(e.h1,{id:"cloudflare-pages-middleware",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cloudflare-pages-middleware",children:n(e.span,{className:"icon icon-link"})}),"Cloudflare Pages Middleware"]}),`
`,n(e.p,{children:["Qwik City Cloudflare Pages middleware allows you to connect Qwik City to ",n(e.a,{href:"https://pages.cloudflare.com/",children:"Cloudflare Pages"}),"."]}),`
`,n(e.p,{children:"Below is an example of using the built-in middleware within a user's app."}),`
`,n(e.pre,{children:n(e.code,{className:"language-typescript",children:[n(e.span,{className:"token comment",children:"// entry.server.tsx"}),`
`,n(e.span,{className:"token keyword",children:"import"})," render ",n(e.span,{className:"token keyword",children:"from"})," ",n(e.span,{className:"token string",children:"'./entry.ssr'"}),n(e.span,{className:"token punctuation",children:";"}),`
`,n(e.span,{className:"token keyword",children:"import"})," ",n(e.span,{className:"token punctuation",children:"{"})," qwikCity ",n(e.span,{className:"token punctuation",children:"}"})," ",n(e.span,{className:"token keyword",children:"from"})," ",n(e.span,{className:"token string",children:"'@builder.io/qwik-city/middleware/cloudflare-pages'"}),n(e.span,{className:"token punctuation",children:";"}),`

`,n(e.span,{className:"token keyword",children:"export"})," ",n(e.span,{className:"token keyword",children:"const"})," onRequest ",n(e.span,{className:"token operator",children:"="})," ",n(e.span,{className:"token function",children:"qwikCity"}),n(e.span,{className:"token punctuation",children:"("}),"render",n(e.span,{className:"token punctuation",children:")"}),n(e.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,n(e.p,{children:["The compiled middleware can then be used anywhere in the cloudflare pages ",n(e.code,{children:"/functions"})," directory."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-typescript",children:[n(e.span,{className:"token comment",children:"// export the compiled middleware where cloudflare pages can find it."}),`
`,n(e.span,{className:"token comment",children:"// for example use /functions/[[path]].ts or /functions/_middleware.ts"}),`
`,n(e.span,{className:"token comment",children:"// to have qwik city handle all requests."}),`

`,n(e.span,{className:"token keyword",children:"export"})," ",n(e.span,{className:"token punctuation",children:"{"})," onRequest ",n(e.span,{className:"token punctuation",children:"}"})," ",n(e.span,{className:"token keyword",children:"from"})," ",n(e.span,{className:"token string",children:"'../server/entry.server'"}),n(e.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware/cloudflare-pages/index.ts",children:"Cloudflare Pages Middleware Source"})}),`
`,n(e.li,{children:n(e.a,{href:"https://developers.cloudflare.com/pages/platform/functions/",children:"Cloudflare Pages Functions"})}),`
`]})]})}function o(a={}){const{wrapper:e}=a.components||{};return e?n(e,Object.assign({},a,{children:n(s,a)})):s(a)}export{o as default,i as frontmatter,c as head,r as headings};
