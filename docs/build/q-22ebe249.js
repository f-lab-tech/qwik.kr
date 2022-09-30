import{i as n,u as r}from"./q-c0df5510.js";const c={title:"Light Component",meta:[],styles:[],links:[]},l={title:"Light Component"};function t(o){const e=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",code:"code"},o.components);return n(r,{children:[n(e.p,{children:"One of Qwik's super powers lies in its lazy-loading features."}),`
`,n(e.p,{children:"Qwik lazy-loads:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Independent of hierarchy"}),": Components can be loaded out of order. For example, the code for a child component can load before its parent code."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Based on interaction"}),": Code loading is deferred until a user interacts with a component."]}),`
`,n(e.li,{children:[n(e.strong,{children:"More than just components"}),": Qwik lazy-loads any closure including components, event listeners, effects, and behaviors."]}),`
`]}),`
`,n(e.p,{children:[n(e.code,{children:"$"})," marks a closure as lazy-loadable. For example ",n(e.code,{children:"component$()"})," method makes the component lazy-loadable. When you see a ",n(e.code,{children:"$"})," in Qwik code, you're crossing a lazy-loading boundary and have to be aware of special rules:"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["any lexically scoped variables must be declared as ",n(e.code,{children:"const"})]}),`
`,n(e.li,{children:["a captured variable/symbol must be either:",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"serializable"}),`
`,n(e.li,{children:["importable (Either from a different file as ",n(e.code,{children:"import"})," or from this file using ",n(e.code,{children:"export"}),")"]}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:"If you want to ensure a component loads with another component, you create an inline component. Inline components load as a part of the parent component and are equivalent to how most other frameworks deal with components."}),`
`,n(e.p,{children:["In this example, the ",n(e.code,{children:"<App>"})," and a ",n(e.code,{children:"<Greeter>"})," components are prepared for you. The ",n(e.code,{children:"<Greeter/>"})," component is declared using the ",n(e.code,{children:"component$()"})," method and is a Qwik component. Remove the ",n(e.code,{children:"component$()"})," to convert ",n(e.code,{children:"<Greeter>"})," to an inline component."]}),`
`,n(e.p,{children:["Open the ",n(e.code,{children:"Symbols"})," tab and notice that the ",n(e.code,{children:"<Greeter/>"})," component is no longer an independent export, but instead is bundled as part of the ",n(e.code,{children:"<App>"})," component."]})]})}function a(o={}){const{wrapper:e}=o.components||{};return e?n(e,Object.assign({},o,{children:n(t,o)})):t(o)}export{a as default,l as frontmatter,c as head};
