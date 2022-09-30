import{i as e,u as a}from"./q-c0df5510.js";const c=[{text:"Top Layout",id:"top-layout",level:1}],s={title:"Qwik City - Top Layout",meta:[],styles:[],links:[]},l={title:"Qwik City - Top Layout"};function n(o){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",code:"code",pre:"pre"},o.components);return e(a,{children:[e(t.h1,{id:"top-layout",children:[e(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#top-layout",children:e(t.span,{className:"icon icon-link"})}),"Top Layout"]}),`
`,e(t.p,{children:["The default is that a page will create its layout stack by climbing up each directory until it gets to the ",e(t.code,{children:"src/routes"}),' directory. If at any point it should not continue climbing up the directories you can use the "top" layout feature.']}),`
`,e(t.p,{children:"A top layout means that the layout is always at the very top of the nested layout stack, and doesn't keep collecting parent layouts, even when there are parent directory layouts."}),`
`,e(t.p,{children:["A top layout is specified by ending the layout filename with ",e(t.code,{children:"!"}),", such as ",e(t.code,{children:"layout!.tsx"}),"."]}),`
`,e(t.pre,{children:e(t.code,{children:`src/
\u2514\u2500\u2500 routes/
    \u251C\u2500\u2500 layout.tsx              # Root layout
    \u2514\u2500\u2500 docs/
        \u251C\u2500\u2500 layout!.tsx         # Docs layout
        \u251C\u2500\u2500 index.tsx           # https://example.com/docs
        \u2514\u2500\u2500 api/
            \u2514\u2500\u2500 index.tsx       # https://example.com/docs/api
`})}),`
`,e(t.p,{children:["In the above example, there are two layouts in the parent directories of ",e(t.code,{children:"src/routes/docs/api/index.tsx"}),". By default, the ",e(t.code,{children:"/docs/api"})," page would be nested inside both layouts (the Root and Docs layout)."]}),`
`,e(t.p,{children:["However, since the ",e(t.code,{children:"src/routes/docs/layout!.tsx"})," filename ends with ",e(t.code,{children:"!"}),", then this layout becomes the very top layout and the Root ",e(t.code,{children:"src/routes/layout.tsx"})," layout is not a part of the stack."]})]})}function d(o={}){const{wrapper:t}=o.components||{};return t?e(t,Object.assign({},o,{children:e(n,o)})):n(o)}export{d as default,l as frontmatter,s as head,c as headings};
