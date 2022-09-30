import{i as n,u as s}from"./q-c0df5510.js";const o=[{text:"Route Parameters",id:"route-parameters",level:1},{text:"Retrieving the Route Parameter from the URL",id:"retrieving-the-route-parameter-from-the-url",level:2}],c={title:"Qwik City - Route Parameters",meta:[],styles:[],links:[]},l={title:"Qwik City - Route Parameters"};function t(a){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",code:"code",ul:"ul",li:"li",pre:"pre",h2:"h2"},a.components);return n(s,{children:[n(e.h1,{id:"route-parameters",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#route-parameters",children:n(e.span,{className:"icon icon-link"})}),"Route Parameters"]}),`
`,n(e.p,{children:"Route Parameters are parts of the URLs that are extracted into parameters."}),`
`,n(e.p,{children:["Imagine that you have a page with the following URLs where ",n(e.code,{children:"[skuId]"})," can be any of the thousands of products that you have in your database. It would be impractical to create a route for each product. Instead, we need to define a Route Parameter (a part of the URL) that will be used to extract the ",n(e.code,{children:"[skuId]"}),"."]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"https://example.com/sku/[skuId]"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Will match: ",n(e.code,{children:"https://example.com/sku/1234"})]}),`
`,n(e.li,{children:["Will match: ",n(e.code,{children:"https://example.com/sku/xyz-567"})]}),`
`]}),`
`]}),`
`,n(e.li,{children:[n(e.code,{children:"https://example.com/sku/[skuId]/details"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Will match: ",n(e.code,{children:"https://example.com/sku/1234/details"})]}),`
`]}),`
`]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{children:`src/
\u2514\u2500\u2500 routes/
    \u2514\u2500\u2500 sku/
        \u2514\u2500\u2500 [skuId]/
            \u251C\u2500\u2500 index.tsx         # https://example.com/sku/1234
            \u2514\u2500\u2500 details/
                \u2514\u2500\u2500 index.tsx     # https://example.com/sku/1234/details
`})}),`
`,n(e.h2,{id:"retrieving-the-route-parameter-from-the-url",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#retrieving-the-route-parameter-from-the-url",children:n(e.span,{className:"icon icon-link"})}),"Retrieving the Route Parameter from the URL"]}),`
`,n(e.p,{children:["Once we have ",n(e.code,{children:"[skuId]"})," in the URL, we need a way to retrieve it. This can be done by using ",n(e.code,{children:"useLocation()"})," API."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-typescript",children:[n(e.span,{className:"token keyword",children:"import"})," ",n(e.span,{className:"token punctuation",children:"{"})," useLocation ",n(e.span,{className:"token punctuation",children:"}"})," ",n(e.span,{className:"token keyword",children:"from"})," ",n(e.span,{className:"token string",children:"'@builder.io/qwik-city'"}),n(e.span,{className:"token punctuation",children:";"}),`

`,n(e.span,{className:"token keyword",children:"export"})," ",n(e.span,{className:"token keyword",children:"default"})," ",n(e.span,{className:"token function",children:"component$"}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:")"})," ",n(e.span,{className:"token operator",children:"=>"})," ",n(e.span,{className:"token punctuation",children:"{"}),`
  `,n(e.span,{className:"token keyword",children:"const"})," location ",n(e.span,{className:"token operator",children:"="})," ",n(e.span,{className:"token function",children:"useLocation"}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:")"}),n(e.span,{className:"token punctuation",children:";"}),`

  `,n(e.span,{className:"token keyword",children:"return"})," ",n(e.span,{className:"token punctuation",children:"("}),`
    `,n(e.span,{className:"token operator",children:"<"}),"div",n(e.span,{className:"token operator",children:">"}),`
      `,n(e.span,{className:"token operator",children:"<"}),"h1",n(e.span,{className:"token operator",children:">"}),n(e.span,{className:"token constant",children:"SKU"}),n(e.span,{className:"token operator",children:"<"}),n(e.span,{className:"token operator",children:"/"}),"h1",n(e.span,{className:"token operator",children:">"}),`
      `,n(e.span,{className:"token operator",children:"<"}),"p",n(e.span,{className:"token operator",children:">"}),"Pathname",n(e.span,{className:"token operator",children:":"})," ",n(e.span,{className:"token punctuation",children:"{"}),"location",n(e.span,{className:"token punctuation",children:"."}),"pathname",n(e.span,{className:"token punctuation",children:"}"}),n(e.span,{className:"token operator",children:"<"}),n(e.span,{className:"token operator",children:"/"}),"p",n(e.span,{className:"token operator",children:">"}),`
      `,n(e.span,{className:"token operator",children:"<"}),"p",n(e.span,{className:"token operator",children:">"}),"Sku Id",n(e.span,{className:"token operator",children:":"})," ",n(e.span,{className:"token punctuation",children:"{"}),"location",n(e.span,{className:"token punctuation",children:"."}),"params",n(e.span,{className:"token punctuation",children:"."}),"skuId",n(e.span,{className:"token punctuation",children:"}"}),n(e.span,{className:"token operator",children:"<"}),n(e.span,{className:"token operator",children:"/"}),"p",n(e.span,{className:"token operator",children:">"}),`
    `,n(e.span,{className:"token operator",children:"<"}),n(e.span,{className:"token operator",children:"/"}),"div",n(e.span,{className:"token operator",children:">"}),`
  `,n(e.span,{className:"token punctuation",children:")"}),n(e.span,{className:"token punctuation",children:";"}),`
`,n(e.span,{className:"token punctuation",children:"}"}),n(e.span,{className:"token punctuation",children:")"}),n(e.span,{className:"token punctuation",children:";"}),`
`]})})]})}function i(a={}){const{wrapper:e}=a.components||{};return e?n(e,Object.assign({},a,{children:n(t,a)})):t(a)}export{i as default,l as frontmatter,c as head,o as headings};
