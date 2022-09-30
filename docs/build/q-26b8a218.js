import{i as t,u as i}from"./q-c0df5510.js";const l={title:"Context",meta:[],styles:[],links:[]},r={title:"Context"};function o(n){const e=Object.assign({p:"p",ul:"ul",li:"li",code:"code"},n.components);return t(i,{children:[t(e.p,{children:"Use context to pass data to child components without explicitly passing it through components (known as prop drilling). Context is useful to share data that is needed throughout the application components. For example styling information, application state, or currently logged-in user."}),`
`,t(e.p,{children:"To use context you need three parts:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[t(e.code,{children:"createContext()"}),": this creates a serializable ID for the context. Make sure that this id is unique within your application."]}),`
`,t(e.li,{children:[t(e.code,{children:"useContextProvider()"}),": At a parent component call this method to publish the context value. All children (and grandchildren) that are descendants of this component will be able to retrieve the context."]}),`
`,t(e.li,{children:[t(e.code,{children:"useContext()"})," to retrieve the context and use it in any component."]}),`
`]}),`
`,t(e.p,{children:["In this example, we would like to pass the ",t(e.code,{children:"TodosStore"})," to the ",t(e.code,{children:"<Items>"})," component. Update the code to use ",t(e.code,{children:"useContext()"})," to retrieve the value."]}),`
`,t(e.p,{children:"Contexts typically are stores, and as such, they must be serializable."})]})}function a(n={}){const{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(o,n)})):o(n)}export{a as default,r as frontmatter,l as head};
