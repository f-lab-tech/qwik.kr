import{i as n,u as o}from"./q-c0df5510.js";const i=[{text:"Why not inline styles?",id:"why-not-inline-styles",level:2},{text:"Example",id:"example",level:3}],l={title:"Styling",meta:[],styles:[],links:[]},r={title:"Styling"};function a(t){const e=Object.assign({p:"p",code:"code",h2:"h2",a:"a",span:"span",pre:"pre",ol:"ol",li:"li",ul:"ul",h3:"h3"},t.components);return n(o,{children:[n(e.p,{children:["Styling is an important part of the design of a web application. Qwik is responsible for loading the style information when a component is mounted. Use ",n(e.code,{children:"useStyles$()"})," to tell Qwik which style should be loaded."]}),`
`,n(e.h2,{id:"why-not-inline-styles",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-not-inline-styles",children:n(e.span,{className:"icon icon-link"})}),"Why not inline styles?"]}),`
`,n(e.p,{children:"A naive way to ensure that a component has the correct styles loaded is to inline the style information into a component like so."}),`
`,n(e.pre,{children:n(e.code,{className:"language-typescript",children:[n(e.span,{className:"token keyword",children:"export"})," ",n(e.span,{className:"token keyword",children:"const"})," ",n(e.span,{className:"token function-variable function",children:"MyComponent"})," ",n(e.span,{className:"token operator",children:"="})," ",n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:")"})," ",n(e.span,{className:"token operator",children:"=>"})," ",n(e.span,{className:"token punctuation",children:"{"}),`
  `,n(e.span,{className:"token keyword",children:"return"})," ",n(e.span,{className:"token punctuation",children:"("}),`
    `,n(e.span,{className:"token operator",children:"<"}),n(e.span,{className:"token operator",children:">"}),`
    `,n(e.span,{className:"token operator",children:"<"}),"style",n(e.span,{className:"token operator",children:">"}),n(e.span,{className:"token punctuation",children:"."}),"my",n(e.span,{className:"token operator",children:"-"}),n(e.span,{className:"token keyword",children:"class"})," ",n(e.span,{className:"token punctuation",children:"{"})," color",n(e.span,{className:"token operator",children:":"})," red",n(e.span,{className:"token punctuation",children:";"})," ",n(e.span,{className:"token punctuation",children:"}"}),n(e.span,{className:"token operator",children:"<"}),n(e.span,{className:"token operator",children:"/"}),"style",n(e.span,{className:"token operator",children:">"}),`
      My Component
    `,n(e.span,{className:"token operator",children:"<"}),n(e.span,{className:"token operator",children:"/"}),n(e.span,{className:"token operator",children:">"}),`
  `,n(e.span,{className:"token punctuation",children:")"}),n(e.span,{className:"token punctuation",children:";"}),`
`,n(e.span,{className:"token punctuation",children:"}"}),`
`]})}),`
`,n(e.p,{children:"The problem with this approach is that we will load styles twice."}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"The styles are inserted into the HTML as part of the SSR."}),`
`,n(e.li,{children:"Then when the component is invalidated and needs to be re-rendered, the styles are loaded again because they are inlined."}),`
`]}),`
`,n(e.p,{children:["What is needed is to load the styles independently from the component. This is what ",n(e.code,{children:"useStyles$()"})," is for. There are two scenarios:"]}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:["The component is rendered on the server and the styles are inserted into ",n(e.code,{children:"<head>"})," as part of the SSR.",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Adding a new instance of a component to the application does not require that we load the styles as they are already included as part of SSR."}),`
`]}),`
`]}),`
`,n(e.li,{children:["The component is rendered on the client for the first time. In that case, the new component does not have styles in the ",n(e.code,{children:"<head>"})," as the component was not part of SSR.",`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Adding a new component that was not part of SSR requires that styles are loaded and inserted into ",n(e.code,{children:"<head>"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"example",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example",children:n(e.span,{className:"icon icon-link"})}),"Example"]}),`
`,n(e.p,{children:"This example contains two components:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[n(e.code,{children:"<Sibling>"}),": The ",n(e.code,{children:"<Sibling>"})," component is pre-rendered on the server. Because it is pre-rendered, it has styles in the ",n(e.code,{children:"<head>"})," as it was part of SSR. Adding additional ",n(e.code,{children:"<Sibling>"})," components does not require any styles to be loaded."]}),`
`,n(e.li,{children:[n(e.code,{children:"<Child>"}),": The ",n(e.code,{children:"<Child>"})," component can be added by clicking the ",n(e.code,{children:"toggle"})," button. Because it was not part of the SSR pre-rendered, it does not have styles in the ",n(e.code,{children:"<head>"}),". Toggling ",n(e.code,{children:"<Child>"})," requires that styles are loaded."]}),`
`]})]})}function c(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(a,t)})):a(t)}export{c as default,r as frontmatter,l as head,i as headings};
