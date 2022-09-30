import{i as e,u as t}from"./q-c0df5510.js";const c=[{text:"Layout",id:"layout",level:1},{text:"Example",id:"example",level:3},{text:"Component implementations",id:"component-implementations",level:3}],l={title:"Qwik City - Layout",meta:[],styles:[],links:[]},r={title:"Qwik City - Layout"};function s(a){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p",code:"code",h3:"h3",pre:"pre"},a.components);return e(t,{children:[e(n.h1,{id:"layout",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#layout",children:e(n.span,{className:"icon icon-link"})}),"Layout"]}),`
`,e(n.p,{children:"When implementing routes, different routes usually share a common header, footer, and menu system. We call the common parts a layout."}),`
`,e(n.p,{children:["The developer could extract all of these into ",e(n.code,{children:"<Header>"}),", ",e(n.code,{children:"<Footer>"}),", and ",e(n.code,{children:"<Menu>"})," components and manually add them to each page component, but that is repetitive and error-prone. Instead, we can use layouts to automatically reuse common parts."]}),`
`,e(n.h3,{id:"example",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example",children:e(n.span,{className:"icon icon-link"})}),"Example"]}),`
`,e(n.p,{children:"Let's say we would like our site to look like this:"}),`
`,e(n.pre,{children:e(n.code,{children:`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 Header                                            \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Menu    \u2502 <ROUTE_SPECIFIC_CONTENT>                \u2502
\u2502 - home  \u2502                                         \u2502
\u2502 - about \u2502                                         \u2502
\u2502         \u2502                                         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Footer                                            \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`})}),`
`,e(n.p,{children:"We can define the above with these files."}),`
`,e(n.pre,{children:e(n.code,{children:`src/
\u251C\u2500\u2500 components/
\u2502   \u251C\u2500\u2500 header.tsx         # Header component implementation
\u2502   \u251C\u2500\u2500 footer.tsx         # Footer component implementation
\u2502   \u2514\u2500\u2500 menu.tsx           # Menu component implementation
\u2514\u2500\u2500 routes/
    \u251C\u2500\u2500 layout.tsx         # Layout implementation using: <Header>, <Footer>, and <Menu>
    \u251C\u2500\u2500 about/
    \u2502   \u2514\u2500\u2500 index.tsx      # https://example.com/about
    \u2514\u2500\u2500 index.tsx          # https://example.com
`})}),`
`,e(n.h3,{id:"component-implementations",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#component-implementations",children:e(n.span,{className:"icon icon-link"})}),"Component implementations"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/components/header.tsx"}),`
`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:">"}),"Header",e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/components/footer.tsx"}),`
`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:">"}),"Footer",e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/components/menu.tsx"}),`
`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,e(n.span,{className:"token operator",children:"<"}),"ul",e(n.span,{className:"token operator",children:">"}),`
      `,e(n.span,{className:"token operator",children:"<"}),"li",e(n.span,{className:"token operator",children:">"}),"home",e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"li",e(n.span,{className:"token operator",children:">"}),`
      `,e(n.span,{className:"token operator",children:"<"}),"li",e(n.span,{className:"token operator",children:">"}),"about",e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"li",e(n.span,{className:"token operator",children:">"}),`
    `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"ul",e(n.span,{className:"token operator",children:">"}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/routes/layout.tsx"}),`
`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:">"}),`
      `,e(n.span,{className:"token operator",children:"<"}),"Header ",e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"}),`
      `,e(n.span,{className:"token operator",children:"<"}),"Menu ",e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"}),`
      `,e(n.span,{className:"token operator",children:"<"}),"Slot",e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"})," ",e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token comment",children:"/* <== This is where the route will be inserted */"}),e(n.span,{className:"token punctuation",children:"}"}),`
      `,e(n.span,{className:"token operator",children:"<"}),"Footer ",e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"}),`
    `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/routes/index.tsx"}),`
`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:">"}),"Home",e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/routes/about/index.tsx"}),`
`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:">"}),"About",e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]})}function p(a={}){const{wrapper:n}=a.components||{};return n?e(n,Object.assign({},a,{children:e(s,a)})):s(a)}export{p as default,r as frontmatter,l as head,c as headings};
