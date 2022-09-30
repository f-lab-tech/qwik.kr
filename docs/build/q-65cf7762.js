import{i as n,u as o}from"./q-c0df5510.js";const a=[{text:"Routing",id:"routing",level:1},{text:"Directory-based Routing",id:"directory-based-routing",level:2},{text:"Implementing a Component",id:"implementing-a-component",level:2},{text:"@qwik-city-plan",id:"qwik-city-plan",level:2},{text:"Advanced routing",id:"advanced-routing",level:2}],c={title:"Qwik City - Routing",meta:[],styles:[],links:[]},s={title:"Qwik City - Routing"};function i(t){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",code:"code",pre:"pre",strong:"strong",ul:"ul",li:"li"},t.components);return n(o,{children:[n(e.h1,{id:"routing",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#routing",children:n(e.span,{className:"icon icon-link"})}),"Routing"]}),`
`,n(e.p,{children:"Routing is a way to map public URLs for a site to specific components declared in your application."}),`
`,n(e.p,{children:"Qwik City uses directory-based routing. This means that the structure of your routes directory drives the public-facing URLs that the user will see for your application. However, it differs slightly from traditional file-based routing, which we will discuss shortly."}),`
`,n(e.h2,{id:"directory-based-routing",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#directory-based-routing",children:n(e.span,{className:"icon icon-link"})}),"Directory-based Routing"]}),`
`,n(e.p,{children:"Qwik City supports the following filetypes for routes"}),`
`,n(e.p,{children:["In the Qwik City routes directory, ",n(e.code,{children:"folder-path"})," plus an ",n(e.code,{children:"index"})," file map to a URL path. For example, if the user sees ",n(e.code,{children:"https://example.com/some/path"}),", the component exported at ",n(e.code,{children:"src/routes/some/path/index"})," (either ",n(e.code,{children:".mdx"})," or ",n(e.code,{children:".tsx"}),") will be shown."]}),`
`,n(e.pre,{children:n(e.code,{children:`src/
\u2514\u2500\u2500 routes/
    \u2514\u2500\u2500 some/
        \u2514\u2500\u2500 path/
            \u2514\u2500\u2500 index.tsx       # https://example.com/some/path
`})}),`
`,n(e.p,{children:["Note that the leaf file at the end of the route is named index. This is ",n(e.strong,{children:"important"}),". In other meta-frameworks you may be familiar with, there is a distinction made between ",n(e.code,{children:"pages"})," and ",n(e.code,{children:"data endpoints"})," or ",n(e.code,{children:"API routes"}),". In Qwik City, there is no distinction, they are all ",n(e.code,{children:"endpoints"}),"."]}),`
`,n(e.p,{children:["To define an endpoint, you must a define an ",n(e.code,{children:"index.[filetype]"})," where [filetype] can be one of ",n(e.code,{children:".ts"}),", ",n(e.code,{children:".tsx"}),", ",n(e.code,{children:".js"}),", ",n(e.code,{children:".jsx"}),", ",n(e.code,{children:".md"}),", or ",n(e.code,{children:".mdx"}),"."]}),`
`,n(e.p,{children:"While the following directory structure:"}),`
`,n(e.pre,{children:n(e.code,{children:`src/
\u2514\u2500\u2500 routes/
    \u251C\u2500\u2500 contact.tsx
    \u251C\u2500\u2500 about.tsx
    \u251C\u2500\u2500 store.tsx
    \u2514\u2500\u2500 index.tsx
`})}),`
`,n(e.p,{children:"may work in other meta-frameworks that use file-based routing, Qwik City will not register a route for any non-index files. In Qwik City, the equivalent file structure would look like this:"}),`
`,n(e.pre,{children:n(e.code,{children:`src/
\u2514\u2500\u2500 routes/
    \u251C\u2500\u2500 contact/
    \u2502   \u2514\u2500\u2500 index.tsx          # https://example.com/contact
    \u251C\u2500\u2500 about/
    \u2502   \u2514\u2500\u2500 index.tsx          # https://example.com/about
    \u251C\u2500\u2500 store/
    \u2502   \u2514\u2500\u2500 index.tsx          # https://example.com/store
    \u2514\u2500\u2500 index/
        \u2514\u2500\u2500 index.tsx          # https://example.com/index
`})}),`
`,n(e.p,{children:"At first, this may seem like extra work, but there are advantages to this approach. One advantage is being able to define component files in a route directory without them being rendered. Consider the following:"}),`
`,n(e.pre,{children:n(e.code,{children:`src/
\u2514\u2500\u2500 routes/
    \u251C\u2500\u2500 index.tsx                     # https://example.com/
    \u2514\u2500\u2500 some/
        \u251C\u2500\u2500 index.tsx                 # https://example.com/some
        \u2514\u2500\u2500 path/
            \u251C\u2500\u2500 index.tsx             # https://example.com/some/path
            \u2514\u2500\u2500 other_component.tsx   # this file is ignored and not mapped to any URL because it is not an index.
`})}),`
`,n(e.p,{children:["The ",n(e.code,{children:"other_component.tsx"})," file can be imported and used inside of ",n(e.code,{children:"path/index.tsx"}),", but is otherwise ignored by Qwik City."]}),`
`,n(e.h2,{id:"implementing-a-component",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#implementing-a-component",children:n(e.span,{className:"icon icon-link"})}),"Implementing a Component"]}),`
`,n(e.p,{children:["To return HTML for a specific route you will need to implement a component. For ",n(e.code,{children:".tsx"})," files the component must be exported as ",n(e.code,{children:"default"}),". Alternatively, you can use ",n(e.code,{children:".mdx"})," extension discussed ",n(e.a,{href:"/qwikcity/content/mdx/",children:"later"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-typescript",children:[n(e.span,{className:"token keyword",children:"export"})," ",n(e.span,{className:"token keyword",children:"default"})," ",n(e.span,{className:"token function",children:"component$"}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:")"})," ",n(e.span,{className:"token operator",children:"=>"})," ",n(e.span,{className:"token punctuation",children:"{"}),`
  `,n(e.span,{className:"token keyword",children:"return"})," ",n(e.span,{className:"token operator",children:"<"}),n(e.span,{className:"token constant",children:"H1"}),n(e.span,{className:"token operator",children:">"}),"Hello World",n(e.span,{className:"token operator",children:"!"}),n(e.span,{className:"token operator",children:"<"}),n(e.span,{className:"token operator",children:"/"}),n(e.span,{className:"token constant",children:"H1"}),n(e.span,{className:"token operator",children:">"}),n(e.span,{className:"token punctuation",children:";"}),`
`,n(e.span,{className:"token punctuation",children:"}"}),n(e.span,{className:"token punctuation",children:")"}),n(e.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,n(e.h2,{id:"qwik-city-plan",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#qwik-city-plan",children:n(e.span,{className:"icon icon-link"})}),n(e.code,{children:"@qwik-city-plan"})]}),`
`,n(e.p,{children:["Qwik City stores route information in files on disk. This is great for developer ergonomics but not useful for creating bundles and chunks. Additionally, in some environments - such as edge functions - there is no file system that can be accessed. For this reason, it is necessary to serialize the route information into a single file. This is done through the ",n(e.code,{children:"@qwik-city-plan"})," import."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-typescript",children:[n(e.span,{className:"token keyword",children:"import"})," cityPlan ",n(e.span,{className:"token keyword",children:"from"})," ",n(e.span,{className:"token string",children:"'@qwik-city-plan'"}),n(e.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,n(e.p,{children:["The ",n(e.code,{children:"@qwik-city-plan"})," import is synthetic, meaning that it is created as part of the build step. It contains all of the information in the ",n(e.code,{children:"/src/routes"})," folder in JavaScript format. The synthetic import is provided by the ",n(e.code,{children:"qwikCity()"})," vite plugin available from ",n(e.code,{children:"@builder.io/qwik-city/vite"}),"."]}),`
`,n(e.h2,{id:"advanced-routing",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#advanced-routing",children:n(e.span,{className:"icon icon-link"})}),"Advanced routing"]}),`
`,n(e.p,{children:"Qwik City also supports:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"/qwikcity/routing/route-parameters/",children:"Route Parameters"})}),`
`,n(e.li,{children:n(e.a,{href:"/qwikcity/layout/overview/",children:"Nested layouts"})}),`
`,n(e.li,{children:n(e.a,{href:"/qwikcity/content/menu/",children:"Menus"})}),`
`]}),`
`,n(e.p,{children:"These are discussed later."})]})}function d(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(i,t)})):i(t)}export{d as default,s as frontmatter,c as head,a as headings};
