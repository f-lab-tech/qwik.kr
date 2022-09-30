import{i as n,u as t}from"./q-c0df5510.js";const s=[{text:"Middleware",id:"middleware",level:1},{text:"Build",id:"build",level:2},{text:"Advanced",id:"advanced",level:2}],l={title:"Qwik City - Middleware",meta:[],styles:[],links:[]},r={title:"Qwik City - Middleware"};function i(a){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre"},a.components);return n(t,{children:[n(e.h1,{id:"middleware",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#middleware",children:n(e.span,{className:"icon icon-link"})}),"Middleware"]}),`
`,n(e.p,{children:"Qwik City middleware is a glue code that connects server rendering framework (such as cloudflare, netlify, etc.) with the Qwik City meta-framework."}),`
`,n(e.p,{children:"Qwik City comes pre-bundle with:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"/qwikcity/middleware/cloudflare-pages/",children:"cloudflare-pages"})}),`
`,n(e.li,{children:n(e.a,{href:"/qwikcity/middleware/netlify-edge/",children:"netlify-edge"})}),`
`,n(e.li,{children:n(e.a,{href:"/qwikcity/middleware/node/",children:"node"})}),`
`]}),`
`,n(e.h2,{id:"build",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#build",children:n(e.span,{className:"icon icon-link"})}),"Build"]}),`
`,n(e.p,{children:["Use Qwik City vite cli ",n(e.code,{children:"--ssr"})," to specify the SSR entry"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:["vite build ",n(e.span,{className:"token parameter variable",children:"--ssr"}),` src/entry.MIDDLEWARE.ts
`]})}),`
`,n(e.p,{children:["default output directory is ",n(e.code,{children:"./server"})," and it is configurable by setting ",n(e.code,{children:"qwikVite"})," plugin option"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-typescript",children:[n(e.span,{className:"token comment",children:"// file vite.config.ts"}),`
`,n(e.span,{className:"token keyword",children:"import"})," ",n(e.span,{className:"token punctuation",children:"{"})," qwikVite ",n(e.span,{className:"token punctuation",children:"}"})," ",n(e.span,{className:"token keyword",children:"from"})," ",n(e.span,{className:"token string",children:"'@builder.io/qwik/optimizer'"}),n(e.span,{className:"token punctuation",children:";"}),`

`,n(e.span,{className:"token keyword",children:"export"})," ",n(e.span,{className:"token keyword",children:"default"})," ",n(e.span,{className:"token function",children:"defineConfig"}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:")"})," ",n(e.span,{className:"token operator",children:"=>"})," ",n(e.span,{className:"token punctuation",children:"{"}),`
  `,n(e.span,{className:"token keyword",children:"return"})," ",n(e.span,{className:"token punctuation",children:"{"}),`
    plugins`,n(e.span,{className:"token operator",children:":"})," ",n(e.span,{className:"token punctuation",children:"["}),`
      `,n(e.span,{className:"token comment",children:"// ...other plugins"}),`
      `,n(e.span,{className:"token function",children:"qwikVite"}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:"{"}),`
        ssr`,n(e.span,{className:"token operator",children:":"})," ",n(e.span,{className:"token punctuation",children:"{"}),`
          outDir`,n(e.span,{className:"token operator",children:":"})," ",n(e.span,{className:"token string",children:"'CUSTOM_DIR'"}),n(e.span,{className:"token punctuation",children:","}),`
        `,n(e.span,{className:"token punctuation",children:"}"}),n(e.span,{className:"token punctuation",children:","}),`
      `,n(e.span,{className:"token punctuation",children:"}"}),n(e.span,{className:"token punctuation",children:")"}),n(e.span,{className:"token punctuation",children:","}),`
    `,n(e.span,{className:"token punctuation",children:"]"}),n(e.span,{className:"token punctuation",children:","}),`
  `,n(e.span,{className:"token punctuation",children:"}"}),n(e.span,{className:"token punctuation",children:";"}),`
`,n(e.span,{className:"token punctuation",children:"}"}),n(e.span,{className:"token punctuation",children:")"}),n(e.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"advanced",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#advanced",children:n(e.span,{className:"icon icon-link"})}),"Advanced"]}),`
`,n(e.p,{children:["The ",n(e.code,{children:"requestHandler()"})," utility is what each of the above middleware bundles uses in order to translate their request/response to a standard format for Qwik City to use. This function can be used to provide middleware for specific server frameworks."]}),`
`,n(e.p,{children:["If there's middleware missing and you'd like it added, take a look at how the ",n(e.code,{children:"requestHandler()"})," utility is used to handle requests for each of the middleware source-code above. Better yet, we'd love to have your middleware contributions! ",n(e.a,{href:"https://github.com/BuilderIO/qwik/tree/main/packages/qwik-city/middleware",children:"PR's are welcome"}),"!"]})]})}function d(a={}){const{wrapper:e}=a.components||{};return e?n(e,Object.assign({},a,{children:n(i,a)})):i(a)}export{d as default,r as frontmatter,l as head,s as headings};
