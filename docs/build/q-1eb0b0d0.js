import{i as e,u as t}from"./q-c0df5510.js";const l=[{text:"$ Boundaries",id:"-boundaries",level:1},{text:"Rules",id:"rules",level:2},{text:"Serialization Boundary",id:"serialization-boundary",level:2}],i={title:"Serialization & Serialization Boundaries",meta:[],styles:[],links:[]},o={title:"Serialization & Serialization Boundaries"};function s(a){const n=Object.assign({h1:"h1",a:"a",span:"span",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",pre:"pre"},a.components);return e(t,{children:[e(n.h1,{id:"-boundaries",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-boundaries",children:e(n.span,{className:"icon icon-link"})}),e(n.code,{children:"$"})," Boundaries"]}),`
`,e(n.h2,{id:"rules",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rules",children:e(n.span,{className:"icon icon-link"})}),"Rules"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Only serializable data can cross a ",e(n.code,{children:"$"})," boundary."]}),`
`]}),`
`,e(n.h2,{id:"serialization-boundary",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#serialization-boundary",children:e(n.span,{className:"icon icon-link"})}),"Serialization Boundary"]}),`
`,e(n.p,{children:["A serialization boundary occurs whenever you cross a lexical scope of a function that is converted into lazy loadable form. It is always denoted by ",e(n.code,{children:"$(...)"})," (or ",e(n.code,{children:"____$(...)"}),") See example:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," component$ ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'@builder.io/qwik'"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"const"})," topLevel ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token builtin",children:"Promise"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token function",children:"resolve"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:"'nonserializable data'"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"const"})," Greeter ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token comment",children:"// BEGIN component serialization boundary"}),`

  `,e(n.span,{className:"token comment",children:"// Referring to top level symbols that are exported is always allowed."}),`
  `,e(n.span,{className:"token builtin",children:"console"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token function",children:"log"}),e(n.span,{className:"token punctuation",children:"("}),"topLevel",e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"})," ",e(n.span,{className:"token comment",children:"// OK"}),`

  `,e(n.span,{className:"token keyword",children:"const"})," captureSerializable ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token string",children:"'serializable data'"}),e(n.span,{className:"token punctuation",children:";"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," captureNonSerializable ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token builtin",children:"Promise"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token function",children:"resolve"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:"'nonserializable data'"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"button"]}),`
      `,e(n.span,{className:"token attr-name",children:"onClick$"}),e(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
        `,e(n.span,{className:"token comment",children:"// BEGIN onClick serialization boundary"}),`

        `,e(n.span,{className:"token comment",children:"// Referring to top level symbols that are exported is always allowed,"}),`
        `,e(n.span,{className:"token comment",children:"// even if the value is non-serializable."}),`
        `,e(n.span,{className:"token builtin",children:"console"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token function",children:"log"}),e(n.span,{className:"token punctuation",children:"("}),"topLevel",e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"})," ",e(n.span,{className:"token comment",children:"// OK"}),`

        `,e(n.span,{className:"token comment",children:"// Capturing a non-top-level variable is allowed only if:"}),`
        `,e(n.span,{className:"token comment",children:"// - declared as `const`"}),`
        `,e(n.span,{className:"token comment",children:"// - is serializable (runtime error)"}),`
        `,e(n.span,{className:"token builtin",children:"console"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token function",children:"log"}),e(n.span,{className:"token punctuation",children:"("}),"captureSerializable",e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"})," ",e(n.span,{className:"token comment",children:"// OK"}),`

        `,e(n.span,{className:"token comment",children:"// Referring to captureNonSerializable will pass static analysis but"}),`
        `,e(n.span,{className:"token comment",children:"// will fail at runtime because Qwik does not know how to serialize it."}),`
        `,e(n.span,{className:"token builtin",children:"console"}),e(n.span,{className:"token punctuation",children:"."}),e(n.span,{className:"token function",children:"log"}),e(n.span,{className:"token punctuation",children:"("}),"captureNonSerializable",e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"})," ",e(n.span,{className:"token comment",children:"// RUNTIME ERROR"}),`

        `,e(n.span,{className:"token comment",children:"// END onClick serialization boundary"}),`
      `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
    `,e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      click
    `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"button"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
  `,e(n.span,{className:"token comment",children:"// END component serialization boundary"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]})}function r(a={}){const{wrapper:n}=a.components||{};return n?e(n,Object.assign({},a,{children:e(s,a)})):s(a)}export{r as default,o as frontmatter,i as head,l as headings};
