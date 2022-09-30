import{i as t,u as i}from"./q-c0df5510.js";const a={title:"Serialization Graph",meta:[],styles:[],links:[]},s={title:"Serialization Graph"};function r(n){const e=Object.assign({p:"p",a:"a",blockquote:"blockquote",strong:"strong",code:"code"},n.components);return t(i,{children:[t(e.p,{children:"Stores are serializable as the application is paused on the server and resumed on the client."}),`
`,t(e.p,{children:["Data in a store isn't required to be free of nested references. Qwik is perfectly happy serializing stores that feature data ",t(e.a,{href:"https://wikipedia.org/wiki/Directed_acyclic_graph",children:"cycles"}),"."]}),`
`,t(e.p,{children:["Stores can also include ",t(e.a,{href:"https://qwik.builder.io/docs/advanced/qrl",children:"Qwik URLs (QRLs)"}),"."]}),`
`,t(e.p,{children:"There is no limit to how many stores can be created per component, nor to where they are passed. While the best practice is to implement top-down data flows, Qwik doesn't require this design philosophy."}),`
`,t(e.blockquote,{children:[`
`,t(e.p,{children:[t(e.strong,{children:"Your task"}),": Insert a few items into ",t(e.code,{children:"parent.children"})," to create a circular reference between the parent and child stores."]}),`
`]}),`
`,t(e.p,{children:["This example also shows how to attach and invoke closures to a store using ",t(e.code,{children:"$"})," and ",t(e.code,{children:"QRL"}),"."]})]})}function c(n={}){const{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(r,n)})):r(n)}export{c as default,s as frontmatter,a as head};
