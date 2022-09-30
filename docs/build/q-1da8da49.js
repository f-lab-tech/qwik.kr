import{i as n,u as o}from"./q-c0df5510.js";const a=[{text:"Serialization",id:"serialization",level:2}],c={title:"Storing State",meta:[],styles:[],links:[]},s={title:"Storing State"};function i(t){const e=Object.assign({p:"p",ol:"ol",li:"li",code:"code",blockquote:"blockquote",strong:"strong",h2:"h2",a:"a",span:"span",em:"em"},t.components);return n(o,{children:[n(e.p,{children:"Applications need to store state to be useful, otherwise they're just static pages."}),`
`,n(e.p,{children:"Qwik tracks application state for two reasons:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:"To serialize data when the application pauses on the server, and deserialize as the application resumes on the client."}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:"To create subscriptions on stores so that Qwik knows which components to re-render. If Qwik didn't track subscriptions, it would have to re-render the whole application - which would defeat the purpose of lazy-loading."}),`
`]}),`
`]}),`
`,n(e.p,{children:["The component on the right doesn't work yet because ",n(e.code,{children:"counter"})," is just a plain object with no subscriptions. As a result, Qwik doesn't know when ",n(e.code,{children:"counter.count"})," changes, and therefore doesn't know to re-render the ",n(e.code,{children:"<App>"})," component."]}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Your task:"})," Wrap ",n(e.code,{children:"counter"})," in ",n(e.code,{children:"useStore()"})," to enable dependency tracking and automatic re-rendering."]}),`
`]}),`
`,n(e.h2,{id:"serialization",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#serialization",children:n(e.span,{className:"icon icon-link"})}),"Serialization"]}),`
`,n(e.p,{children:["Open the ",n(e.em,{children:"HTML"})," tab to see what information is serialized by the server. Look in the ",n(e.code,{children:'<script type="qwik/json">'})," block for serialization information and notice that:"]}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[n(e.code,{children:"{count: 0}"})," is in the serialized state."]}),`
`,n(e.li,{children:["At the end of the serialized state are ",n(e.code,{children:"subs"})," which contain ",n(e.code,{children:'"count"'}),". These subscriptions tell Qwik which component to re-render as the state changes."]}),`
`]}),`
`,n(e.p,{children:"Qwik state is in no way tied to the component that created it. The state can be passed to any component in the application and Qwik creates the needed subscriptions and re-renders only the affected components."})]})}function d(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(i,t)})):i(t)}export{d as default,s as frontmatter,c as head,a as headings};
