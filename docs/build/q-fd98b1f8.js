import{i as n,u as a}from"./q-c0df5510.js";const r=[{text:"File Layout",id:"file-layout",level:1},{text:"The routes directory",id:"the-routes-directory",level:2},{text:"Sample routes directory example",id:"sample-routes-directory-example",level:2},{text:"Sample Component",id:"sample-component",level:2}],s={title:"Qwik City - file layout",meta:[],styles:[],links:[]},c={title:"Qwik City - file layout"};function o(t){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",code:"code",pre:"pre"},t.components);return n(a,{children:[n(e.h1,{id:"file-layout",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#file-layout",children:n(e.span,{className:"icon icon-link"})}),"File Layout"]}),`
`,n(e.p,{children:"The core responsibility of Qwik City is to provide a simple, intuitive, and efficient way to create content for your site. Qwik City achieves this through file-based routing. In a nutshell layout of your files determines the structure of your site."}),`
`,n(e.h2,{id:"the-routes-directory",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-routes-directory",children:n(e.span,{className:"icon icon-link"})}),"The ",n(e.code,{children:"routes"})," directory"]}),`
`,n(e.p,{children:["All file-based route information is placed in ",n(e.code,{children:"src/routes"})," directory. This is the only directory where file naming conventions have implications for your site. (In all other folders, the names have no meaning to Qwik City.)"]}),`
`,n(e.p,{children:["(the ",n(e.code,{children:"src"})," folder also typically contains ",n(e.code,{children:"components"}),", but the name and location have no meaning to Qwik City.)"]}),`
`,n(e.h2,{id:"sample-routes-directory-example",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sample-routes-directory-example",children:n(e.span,{className:"icon icon-link"})}),"Sample ",n(e.code,{children:"routes"})," directory example"]}),`
`,n(e.pre,{children:n(e.code,{children:`src/
\u251C\u2500\u2500 components/                # Put your reusable components here.
\u2502    \u2514\u2500\u2500 counter.tsx
\u2514\u2500\u2500 routes/                    # Put your route specific components here.
    \u251C\u2500\u2500 docs/
    \u2502   \u251C\u2500\u2500 overview/
    \u2502   \u2502   \u2514\u2500\u2500 index.mdx      # https://example.com/docs/overview
    \u2502   \u2514\u2500\u2500 index.mdx          # https://example.com/docs
    \u251C\u2500\u2500 index.tsx              # https://example.com/
    \u2514\u2500\u2500 layout.tsx             # All nested pages use this layout
`})}),`
`,n(e.h2,{id:"sample-component",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sample-component",children:n(e.span,{className:"icon icon-link"})}),"Sample Component"]}),`
`,n(e.p,{children:["Qwik City expects that ",n(e.code,{children:"index.tsx"})," files that are in the ",n(e.code,{children:"src/routes"})," folder have a ",n(e.code,{children:"default"})," export."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-typescript",children:[n(e.span,{className:"token keyword",children:"import"})," ",n(e.span,{className:"token punctuation",children:"{"})," component$ ",n(e.span,{className:"token punctuation",children:"}"})," ",n(e.span,{className:"token keyword",children:"from"})," ",n(e.span,{className:"token string",children:"'@builder.io/qwik'"}),n(e.span,{className:"token punctuation",children:";"}),`

`,n(e.span,{className:"token keyword",children:"export"})," ",n(e.span,{className:"token keyword",children:"default"})," ",n(e.span,{className:"token function",children:"component$"}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:")"})," ",n(e.span,{className:"token operator",children:"=>"})," ",n(e.span,{className:"token punctuation",children:"{"}),`
  `,n(e.span,{className:"token keyword",children:"return"})," ",n(e.span,{className:"token operator",children:"<"}),n(e.span,{className:"token operator",children:">"}),"Hello World",n(e.span,{className:"token operator",children:"!"}),n(e.span,{className:"token operator",children:"<"}),n(e.span,{className:"token operator",children:"/"}),n(e.span,{className:"token operator",children:">"}),n(e.span,{className:"token punctuation",children:";"}),`
`,n(e.span,{className:"token punctuation",children:"}"}),n(e.span,{className:"token punctuation",children:")"}),n(e.span,{className:"token punctuation",children:";"}),`
`]})})]})}function l(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(o,t)})):o(t)}export{l as default,c as frontmatter,s as head,r as headings};
