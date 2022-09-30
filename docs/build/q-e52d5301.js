import{i as e,u as o}from"./q-c0df5510.js";const c=[{text:"MDX",id:"mdx",level:1},{text:"Importing other components.",id:"importing-other-components",level:2}],r={title:"Qwik City - MDX",meta:[],styles:[],links:[]},l={title:"Qwik City - MDX"};function t(a){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p",code:"code",pre:"pre",h2:"h2",strong:"strong"},a.components);return e(o,{children:[e(n.h1,{id:"mdx",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mdx",children:e(n.span,{className:"icon icon-link"})}),"MDX"]}),`
`,e(n.p,{children:["An alternative way to author content is using ",e(n.code,{children:".mdx"})," files (",e(n.a,{href:"https://mdxjs.com/",children:"Markdown JSX"}),"). These files are authored as Markdown, but they are compiled down to Qwik components. In addition to Markdown syntax, ",e(n.code,{children:".mdx"})," files can also refer to other components."]}),`
`,e(n.p,{children:"Let's assume you have your routes set up like this:"}),`
`,e(n.pre,{children:e(n.code,{children:`src/
\u2514\u2500\u2500 routes/
    \u2514\u2500\u2500 some/
        \u2514\u2500\u2500 path/
            \u2514\u2500\u2500 index.mdx    # https://example.com/some/path
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-markdown",children:[e(n.span,{className:"token front-matter-block",children:[e(n.span,{className:"token punctuation",children:"---"}),`
`,e(n.span,{className:"token front-matter yaml language-yaml",children:[e(n.span,{className:"token comment",children:"# File: src/routes/some/path/index.mdx"}),`
`,e(n.span,{className:"token key atrule",children:"title"}),e(n.span,{className:"token punctuation",children:":"})," Hello World Title"]}),`
`,e(n.span,{className:"token punctuation",children:"---"})]}),`

This is a simple hello world component.

`]})}),`
`,e(n.p,{children:["The above component will be rendered at ",e(n.code,{children:"https://example.com/some/path"}),"."]}),`
`,e(n.h2,{id:"importing-other-components",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#importing-other-components",children:e(n.span,{className:"icon icon-link"})}),"Importing other components."]}),`
`,e(n.p,{children:[e(n.a,{href:"https://mdxjs.com/",children:"MDX"}),' is a creative opportunity for you to come up with new content quickly ("Qwikly" \u{1F642}) and if you need more interaction on your page you can seamlessly integrate your Qwik components like so:']}),`
`,e(n.pre,{children:e(n.code,{children:`src/
\u251C\u2500\u2500 components/
\u2502   \u2514\u2500\u2500  counter.tsx
\u2514\u2500\u2500 routes/
    \u2514\u2500\u2500 some/
        \u2514\u2500\u2500 path/
            \u2514\u2500\u2500 index.mdx    # https://example.com/some/path
`})}),`
`,e(n.pre,{children:e(n.code,{className:"language-markdown",children:[e(n.span,{className:"token front-matter-block",children:[e(n.span,{className:"token punctuation",children:"---"}),`
`,e(n.span,{className:"token front-matter yaml language-yaml",children:[e(n.span,{className:"token comment",children:"# File: src/routes/some/path/index.mdx"}),`
`,e(n.span,{className:"token key atrule",children:"title"}),e(n.span,{className:"token punctuation",children:":"})," Hello World Title"]}),`
`,e(n.span,{className:"token punctuation",children:"---"})]}),`
import { Counter } from "../../../components/counter/counter";

This is a simple hello world component.

`,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"Counter"]})," ",e(n.span,{className:"token punctuation",children:"/>"})]}),`

`]})}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token comment",children:"// File: src/components/counter/counter.tsx"}),`
`,e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," component$",e(n.span,{className:"token punctuation",children:","})," useStyles$",e(n.span,{className:"token punctuation",children:","})," useStore ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'@builder.io/qwik'"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"const"})," Counter ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," store ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"useStore"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"})," count",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"0"})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,e(n.span,{className:"token operator",children:"<"}),"button ",e(n.span,{className:"token keyword",children:"class"}),e(n.span,{className:"token operator",children:"="}),e(n.span,{className:"token string",children:'"counter"'})," type",e(n.span,{className:"token operator",children:"="}),e(n.span,{className:"token string",children:'"button"'})," onClick$",e(n.span,{className:"token operator",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," store",e(n.span,{className:"token punctuation",children:"."}),"count",e(n.span,{className:"token operator",children:"++"}),e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token operator",children:">"}),`
      Increment `,e(n.span,{className:"token punctuation",children:"{"}),"store",e(n.span,{className:"token punctuation",children:"."}),"count",e(n.span,{className:"token punctuation",children:"}"}),`
    `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"button",e(n.span,{className:"token operator",children:">"}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.p,{children:[e(n.strong,{children:"Note"}),": A key difference between Qwik City and many current meta-frameworks is directory-based routing. Every route needs to be defined as ",e(n.code,{children:"a-directory/index.(tsx,ts,js,jsx,md,mdx)"}),"."]}),`
`,e(n.p,{children:["In other meta-frameworks you're used to ",e(n.code,{children:"about.mdx"})," will render a route ",e(n.code,{children:"http://example.com/about"}),". However, this will not work in Qwik City. You must rename the file to ",e(n.code,{children:"about/index.mdx"})," for Qwik City to know to render it."]})]})}function i(a={}){const{wrapper:n}=a.components||{};return n?e(n,Object.assign({},a,{children:e(t,a)})):t(a)}export{i as default,l as frontmatter,r as head,c as headings};
