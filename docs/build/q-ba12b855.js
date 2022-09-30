import{i as e,u as s}from"./q-c0df5510.js";const o=[{text:"Nested Layout",id:"nested-layout",level:1}],l={title:"Qwik City - Nested Layout",meta:[],styles:[],links:[]},r={title:"Qwik City - Nested Layout"};function t(a){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},a.components);return e(s,{children:[e(n.h1,{id:"nested-layout",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nested-layout",children:e(n.span,{className:"icon icon-link"})}),"Nested Layout"]}),`
`,e(n.p,{children:"Most times it is desirable to nest layouts into each other. A page's content can be nested in numerous wrapping layouts, which is determined by the directory structure."}),`
`,e(n.pre,{children:e(n.code,{children:`src/
\u2514\u2500\u2500 routes/
    \u251C\u2500\u2500 layout.tsx           # Parent layout
    \u2514\u2500\u2500 about/
        \u251C\u2500\u2500 layout.tsx       # Child layout
        \u2514\u2500\u2500 index.tsx        # https://example.com/about
`})}),`
`,e(n.p,{children:["In the above example, there are two layouts that apply themselves around the ",e(n.code,{children:"/about"})," page component."]}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:e(n.code,{children:"src/routes/layout.tsx"})}),`
`,e(n.li,{children:e(n.code,{children:"src/routes/about/layout.tsx"})}),`
`]}),`
`,e(n.p,{children:"In this case, the layouts will nest each other with the page within each of them."}),`
`,e(n.pre,{children:e(n.code,{children:`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       src/routes/layout.tsx                    \u2502
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502
\u2502  \u2502    src/routes/about/layout.tsx           \u2502  \u2502
\u2502  \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502  \u2502
\u2502  \u2502  \u2502 src/routes/about/index.tsx         \u2502  \u2502  \u2502
\u2502  \u2502  \u2502                                    \u2502  \u2502  \u2502
\u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502  \u2502
\u2502  \u2502                                          \u2502  \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502
\u2502                                                \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/routes/layout.tsx"}),`
`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,e(n.span,{className:"token operator",children:"<"}),"main",e(n.span,{className:"token operator",children:">"}),`
      `,e(n.span,{className:"token operator",children:"<"}),"Slot ",e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"})," ",e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token comment",children:"/* <== Child layout/route inserted here */"}),e(n.span,{className:"token punctuation",children:"}"}),`
    `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"main",e(n.span,{className:"token operator",children:">"}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/routes/about/layout.tsx"}),`
`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,e(n.span,{className:"token operator",children:"<"}),"section",e(n.span,{className:"token operator",children:">"}),`
      `,e(n.span,{className:"token operator",children:"<"}),"Slot ",e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"})," ",e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token comment",children:"/* <== Child layout/route inserted here */"}),e(n.span,{className:"token punctuation",children:"}"}),`
    `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"section",e(n.span,{className:"token operator",children:">"}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/routes/about/index.tsx"}),`
`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token operator",children:"<"}),"h1",e(n.span,{className:"token operator",children:">"}),"About",e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"h1",e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.p,{children:"The above example would render the html:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"main"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"section"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
    `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"h1"]}),e(n.span,{className:"token punctuation",children:">"})]}),"About",e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"h1"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"section"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
`,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"main"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
`]})}),`
`,e(n.p,{children:["The default is that a page will create its layout stack by climbing up each directory until it gets to the ",e(n.code,{children:"src/routes"})," directory. If at any point it should stop climbing up the directories you can use the ",e(n.a,{href:"/qwikcity/layout/top/",children:"top layout"})," feature."]})]})}function i(a={}){const{wrapper:n}=a.components||{};return n?e(n,Object.assign({},a,{children:e(t,a)})):t(a)}export{i as default,r as frontmatter,l as head,o as headings};
