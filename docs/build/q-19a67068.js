import{i as t,u as o}from"./q-c0df5510.js";const i=[{text:"Named Layout",id:"named-layout",level:1}],r={title:"Qwik City - Named Layout",meta:[],styles:[],links:[]},c={title:"Qwik City - Named Layout"};function a(n){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},n.components);return t(o,{children:[t(e.h1,{id:"named-layout",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#named-layout",children:t(e.span,{className:"icon icon-link"})}),"Named Layout"]}),`
`,t(e.p,{children:"At times related routes need to have drastically different layouts from their siblings. It is possible to define multiple layouts for different sibling routes. A single default layout and any number of named layouts. The child route can then request a specific named-layout."}),`
`,t(e.p,{children:["Qwik City defines the convention that layouts are within ",t(e.code,{children:"src/routes"})," and the filename starts with ",t(e.code,{children:"layout"}),". That's why the default layout is named ",t(e.code,{children:"layout.tsx"}),". A named layout also starts with ",t(e.code,{children:"layout"})," followed by a dash ",t(e.code,{children:"-"})," and a unique name, such as ",t(e.code,{children:"layout-narrow.tsx"}),"."]}),`
`,t(e.pre,{children:t(e.code,{children:`src/
\u2514\u2500\u2500 routes/
    \u251C\u2500\u2500 contact/
    \u2502   \u2514\u2500\u2500 index@narrow.tsx      # https://example.com/contact (Layout: layout-narrow.tsx)
    \u251C\u2500\u2500 layout.tsx                # Default layout
    \u251C\u2500\u2500 layout-narrow.tsx         # Default named layout
    \u2514\u2500\u2500 index.tsx                 # https://example.com/ (Layout: layout.tsx)
`})}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[t(e.code,{children:"https://example.com/"}),`
`,t(e.pre,{children:t(e.code,{children:`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       src/routes/layout.tsx                      \u2502
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502
\u2502  \u2502    src/routes/index.tsx                    \u2502  \u2502
\u2502  \u2502                                            \u2502  \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502
\u2502                                                  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`})}),`
`]}),`
`,t(e.li,{children:[t(e.code,{children:"https://example.com/contact"}),`
`,t(e.pre,{children:t(e.code,{children:`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       src/routes/layout-narrow.tsx               \u2502
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502
\u2502  \u2502    src/routes/contact/index@narrow.tsx     \u2502  \u2502
\u2502  \u2502                                            \u2502  \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502
\u2502                                                  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
`})}),`
`]}),`
`]})]})}function s(n={}){const{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(a,n)})):a(n)}export{s as default,c as frontmatter,r as head,i as headings};
