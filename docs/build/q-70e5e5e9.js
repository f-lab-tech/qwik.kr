import{i as e,u as t}from"./q-c0df5510.js";const c=[{text:"Components",id:"components",level:1},{text:"Importing other components",id:"importing-other-components",level:2}],r={title:"Qwik City - Components",meta:[],styles:[],links:[]},l={title:"Qwik City - Components"};function s(a){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p",code:"code",pre:"pre",h2:"h2"},a.components);return e(t,{children:[e(n.h1,{id:"components",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#components",children:e(n.span,{className:"icon icon-link"})}),"Components"]}),`
`,e(n.p,{children:["Page content can be created using Qwik components. The component representing the content should be exported as a ",e(n.code,{children:"default"})," export."]}),`
`,e(n.p,{children:"Let's assume you have your routes set up like this:"}),`
`,e(n.pre,{children:e(n.code,{children:`src/
\u2514\u2500\u2500 routes/
    \u2514\u2500\u2500 some/
        \u2514\u2500\u2500 path/
            \u2514\u2500\u2500 index.tsx              # https://example.com/some/path
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/routes/some/path/index.tsx"}),`
`,e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," component$ ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'@builder.io/qwik'"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token comment",children:"// Notice the default export"}),`
`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token operator",children:"<"}),"h1",e(n.span,{className:"token operator",children:">"}),"Hello World",e(n.span,{className:"token operator",children:"!"}),e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"h1",e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"importing-other-components",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#importing-other-components",children:e(n.span,{className:"icon icon-link"})}),"Importing other components"]}),`
`,e(n.p,{children:["You can build complex views by composing multiple components within each other. To do that import other components into your ",e(n.code,{children:"index.tsx"})," file."]}),`
`,e(n.pre,{children:e(n.code,{children:`src/
\u251C\u2500\u2500 components/
\u2502   \u2514\u2500\u2500 heading.tsx
\u2514\u2500\u2500 routes/
    \u2514\u2500\u2500 some/
        \u2514\u2500\u2500 path/
            \u251C\u2500\u2500 index.tsx              # https://example.com/some/path
            \u2514\u2500\u2500 sub_component.tsx
`})}),`
`,e(n.p,{children:["Inside ",e(n.code,{children:"index.tsx"})," you can create a component that is exported as ",e(n.code,{children:"default"})," export. Content is created by writing a template with ",e(n.a,{href:"https://reactjs.org/docs/introducing-jsx.html",children:"JSX"}),"-Syntax. Every component-function returns the template that should be rendered on the screen. If you want to learn more about the component anatomy, please see ",e(n.a,{href:"/docs/components/overview/",children:"components documentation"}),`.
The following component will be rendered at `,e(n.code,{children:"https://example.com/some/path"})," according to the directory-structure, we have set up above."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/routes/some/path/index.tsx"}),`
`,e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," component$ ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'@builder.io/qwik'"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"import"})," Heading ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'../../../components/heading'"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"import"})," SubComponent ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'./_sub_component'"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:">"}),`
      `,e(n.span,{className:"token operator",children:"<"}),"Heading ",e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"}),`
      `,e(n.span,{className:"token operator",children:"<"}),"h2",e(n.span,{className:"token operator",children:">"}),"Hello World",e(n.span,{className:"token operator",children:"!"}),e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"h2",e(n.span,{className:"token operator",children:">"}),`
      `,e(n.span,{className:"token operator",children:"<"}),"SubComponent ",e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"}),`
    `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/components/heading.tsx"}),`
`,e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," component$ ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'@builder.io/qwik'"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token operator",children:"<"}),"h1",e(n.span,{className:"token operator",children:">"}),"Site Heading",e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"h1",e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/routes/some/path/_sub_component.tsx"}),`
`,e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," component$ ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'@builder.io/qwik'"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token operator",children:"<"}),"div",e(n.span,{className:"token operator",children:">"}),"Other component content",e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"div",e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]})}function p(a={}){const{wrapper:n}=a.components||{};return n?e(n,Object.assign({},a,{children:e(s,a)})):s(a)}export{p as default,l as frontmatter,r as head,c as headings};
