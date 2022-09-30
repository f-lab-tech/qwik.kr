import{i as t,u as r}from"./q-c0df5510.js";const s={title:"Qwik Tutorial - Store",meta:[],styles:[],links:[]},c={title:"Qwik Tutorial - Store"};function o(n){const e=Object.assign({p:"p",code:"code",ol:"ol",li:"li",blockquote:"blockquote",strong:"strong"},n.components);return t(r,{children:[t(e.p,{children:["Use ",t(e.code,{children:"useStore()"})," to store the state of the component. The store's purpose is to:"]}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:"store the state of the component"}),`
`,t(e.li,{children:"present the state as a proxy that can observe read/writes to the store"}),`
`,t(e.li,{children:"serialize the state of the store into JSON on application pause."}),`
`,t(e.li,{children:"observe which properties of the store are used in a component template and create subscriptions to the store. The subscriptions are then used to automatically update the component template if a store changes."}),`
`]}),`
`,t(e.p,{children:["Stores are declared inside the component's function using the ",t(e.code,{children:"useStore()"})," function. Wrap the ",t(e.code,{children:"github"})," assignment in the ",t(e.code,{children:"useStore(...)"})," function call to create a store."]}),`
`,t(e.blockquote,{children:[`
`,t(e.p,{children:[t(e.strong,{children:"NOTE"}),`
In this example, the store never changes. Therefore there is no way to observe automatic template re-rendering. In the next example, we will add a listener to the `,t(e.code,{children:"<input>"})," to demonstrate automatic template re-rendering."]}),`
`]})]})}function a(n={}){const{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(o,n)})):o(n)}export{a as default,c as frontmatter,s as head};
