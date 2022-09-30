import{i as e,u as s}from"./q-c0df5510.js";const c=[{text:"Netlify Edge Middleware",id:"netlify-edge-middleware",level:1},{text:"Get started",id:"get-started",level:2},{text:"Usage",id:"usage",level:2}],l={title:"Qwik City - Netlify Edge Middleware",meta:[],styles:[],links:[]},r={title:"Qwik City - Netlify Edge Middleware"};function t(a){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li"},a.components);return e(s,{children:[e(n.h1,{id:"netlify-edge-middleware",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#netlify-edge-middleware",children:e(n.span,{className:"icon icon-link"})}),"Netlify Edge Middleware"]}),`
`,e(n.p,{children:["Qwik City Netlify Edge middleware allows you to connect Qwik City to ",e(n.a,{href:"https://docs.netlify.com/netlify-labs/experimental-features/edge-functions/",children:"Netlify Edge"}),"."]}),`
`,e(n.h2,{id:"get-started",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#get-started",children:e(n.span,{className:"icon icon-link"})}),"Get started"]}),`
`,e(n.p,{children:["Create ",e(n.code,{children:"src/entry.server.tsx"})," using the built-in middleware within a user's app."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," qwikCity ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'@builder.io/qwik-city/middleware/netlify-edge'"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"import"})," render ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'./entry.ssr'"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"const"})," qwikCityHandler ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"qwikCity"}),e(n.span,{className:"token punctuation",children:"("}),"render",e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," qwikCityHandler",e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.p,{children:e(n.code,{children:"vite.config.ts"})}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," defineConfig ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:'"vite"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," qwikVite ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:'"@builder.io/qwik/optimizer"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," qwikCity ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:'"@builder.io/qwik-city/vite"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"import"})," tsconfigPaths ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:'"vite-tsconfig-paths"'}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token operator",children:"+"}),e(n.span,{className:"token keyword",children:"import"})," netlifyEdge ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:'"@netlify/vite-plugin-netlify-edge"'}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"defineConfig"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
    plugins`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"["}),`
      `,e(n.span,{className:"token function",children:"qwikCity"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
      `,e(n.span,{className:"token function",children:"qwikVite"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"}),`
`,e(n.span,{className:"token operator",children:"+"}),"        ssr",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
`,e(n.span,{className:"token operator",children:"+"}),"          outDir",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"netlify/edge-functions"'}),e(n.span,{className:"token punctuation",children:","}),`
`,e(n.span,{className:"token operator",children:"+"}),"        ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
      `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
      `,e(n.span,{className:"token function",children:"tsconfigPaths"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
`,e(n.span,{className:"token operator",children:"+"}),"      ",e(n.span,{className:"token function",children:"netlifyEdge"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"}),`
`,e(n.span,{className:"token operator",children:"+"}),"        functionName",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"entry.server"'}),e(n.span,{className:"token punctuation",children:","}),`
`,e(n.span,{className:"token operator",children:"+"}),"      ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token punctuation",children:"]"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.p,{children:["Configure ",e(n.code,{children:"netlify.toml"})]}),`
`,e(n.pre,{children:e(n.code,{className:"language-toml",children:`[[edge_functions]]
path = "/*"
function = "entry.server"
`})}),`
`,e(n.h2,{id:"usage",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:e(n.span,{className:"icon icon-link"})}),"Usage"]}),`
`,e(n.p,{children:"Along with client build, run vite command to perform SSR build"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:["vite build ",e(n.span,{className:"token parameter variable",children:"--ssr"}),` src/entry.server.tsx
`]})}),`
`,e(n.p,{children:["Now you can use Netlify CLI to preview or deploy. ",e(n.a,{href:"https://github.com/BuilderIO/qwik/blob/main/starters/servers/netlify-edge/README.md",children:"Read the full guide here"})]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://github.com/BuilderIO/qwik/blob/main/packages/qwik-city/middleware/netlify-edge/index.ts",children:"Netlify Edge Middleware Source"})}),`
`]})]})}function o(a={}){const{wrapper:n}=a.components||{};return n?e(n,Object.assign({},a,{children:e(t,a)})):t(a)}export{o as default,r as frontmatter,l as head,c as headings};
