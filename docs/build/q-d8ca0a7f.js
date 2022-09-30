import{i as t,u as r}from"./q-c0df5510.js";const i={title:"Recursive Store",meta:[],styles:[],links:[]},l={title:"Recursive Store"};function o(n){const e=Object.assign({p:"p",code:"code",ol:"ol",li:"li",blockquote:"blockquote",strong:"strong"},n.components);return t(r,{children:[t(e.p,{children:["This example features a store that contains other objects rather than just primitives. The ",t(e.code,{children:"store.counter"})," property is an object literal."]}),`
`,t(e.p,{children:["The example doesn't work as is, because by default the ",t(e.code,{children:"useStore"})," function only watches top-level properties."]}),`
`,t(e.p,{children:"To make the example work, you need to do one of two things:"}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:[`
`,t(e.p,{children:["Wrap ",t(e.code,{children:"{count:0}"})," in another ",t(e.code,{children:"useStore()"})," call (which is a bit cumbersome)"]}),`
`]}),`
`,t(e.li,{children:[`
`,t(e.p,{children:["Allow ",t(e.code,{children:"useStore"})," to recursively apply reactivity to all properties by passing the additional argument: ",t(e.code,{children:"{recursive:true}"}),"."]}),`
`]}),`
`]}),`
`,t(e.blockquote,{children:[`
`,t(e.p,{children:[t(e.strong,{children:"Your task:"})," Update the sample with the ",t(e.code,{children:"useStore()"})," function."]}),`
`]}),`
`,t(e.p,{children:"Note that stores are not tied to any single component. In fact, you can pass stores from one component to another."})]})}function s(n={}){const{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(o,n)})):o(n)}export{s as default,l as frontmatter,i as head};
