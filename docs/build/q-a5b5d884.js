import{i as n,u as r}from"./q-c0df5510.js";const s=[{text:"Best Practice",id:"best-practice",level:2}],c={title:"Passing Stores",meta:[],styles:[],links:[]},d={title:"Passing Stores"};function o(t){const e=Object.assign({p:"p",code:"code",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",h2:"h2",a:"a",span:"span"},t.components);return n(r,{children:[n(e.p,{children:"The previous tutorial introduced you how you could pass primitives and objects to components. In this tutorial, we will learn how to pass stores to components, which is way more efficient in terms of rerendering."}),`
`,n(e.p,{children:["When you click on the ",n(e.code,{children:"+1"})," button, the ",n(e.code,{children:"<App>"})," is re-rendered to update the ",n(e.code,{children:"<Display>"})," bindings. The re-rendering of ",n(e.code,{children:"<App>"})," is needed to update the props of ",n(e.code,{children:"<Display>"}),", but this process doesn't update to what the user sees, so it is a waste of resources."]}),`
`,n(e.p,{children:["A better approach is to only re-render ",n(e.code,{children:"<Display>"})," component by passing in the ",n(e.code,{children:"CountStore"})," rather than the ",n(e.code,{children:"count"})," value. Since the store reference never changes, the ",n(e.code,{children:"<App>"})," component doesn't need to re-render."]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Your task"}),": Change the code to pass in ",n(e.code,{children:"store"})," rather than ",n(e.code,{children:"store.count"}),"."]}),`
`]}),`
`,n(e.p,{children:"Two benefits emerge by making the above change:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["The ",n(e.code,{children:"<App>"})," component doesn't need to be downloaded or re-rendered."]}),`
`]}),`
`,n(e.h2,{id:"best-practice",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#best-practice",children:n(e.span,{className:"icon icon-link"})}),"Best Practice"]}),`
`,n(e.p,{children:"A best practice to follow in Qwik features passing a store to child components rather than individual primitives. When you use primitives, the parent component needs to rerender just to pass in the new value. When you pass in a store, the parent component doesn't need to rerender."})]})}function a(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(o,t)})):o(t)}export{a as default,d as frontmatter,c as head,s as headings};
