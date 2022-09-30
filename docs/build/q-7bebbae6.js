import{i as e,u as t}from"./q-c0df5510.js";const l=[{text:"Components",id:"components",level:1},{text:"component$()",id:"component",level:2},{text:"Props",id:"props",level:2},{text:"Using components",id:"using-components",level:2},{text:"Re-rendering on Reactivity",id:"re-rendering-on-reactivity",level:2},{text:"Lazy Loading",id:"lazy-loading",level:2},{text:"Mental Model",id:"mental-model",level:2},{text:"API Overview",id:"api-overview",level:2},{text:"State",id:"state",level:3},{text:"Styles",id:"styles",level:3},{text:"Events",id:"events",level:3},{text:"Lifecycles",id:"lifecycles",level:3},{text:"Other",id:"other",level:3},{text:"Components",id:"components-1",level:3},{text:"See Also",id:"see-also",level:2}],i={title:"Overview",meta:[],styles:[],links:[]},o={title:"Overview",fetch:"https://hackmd.io/@mhevery/H1Rzr30l5"};function s(a){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",h3:"h3"},a.components);return e(t,{children:[e(n.h1,{id:"components",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#components",children:e(n.span,{className:"icon icon-link"})}),"Components"]}),`
`,e(n.p,{children:"Components are basic building blocks of Qwik Applications. Qwik components are unique in that:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Qwik components automatically get broken down into lazy-loaded chunks by the Optimizer. (See Optimizer discussion)"}),`
`,e(n.li,{children:["Are ",e(n.a,{href:"/docs/concepts/resumable/",children:"resumable"}),". (A component can get created on a server and continue its execution on the client.) (See resumable discussion)"]}),`
`,e(n.li,{children:"Can render independently of other components on the page. (See rendering discussion)"}),`
`]}),`
`,e(n.h2,{id:"component",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#component",children:e(n.span,{className:"icon icon-link"})}),e(n.code,{children:"component$()"})]}),`
`,e(n.p,{children:"A component is a small, reusable piece of code that can be used to build a UI."}),`
`,e(n.p,{children:["In Qwik, they are declared using the ",e(n.code,{children:"component$"})," method:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," component$",e(n.span,{className:"token punctuation",children:","})," useStore ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'@builder.io/qwik'"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token comment",children:"// Qwik components can be asynchronous"}),`
`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"const"})," MyCmp ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token keyword",children:"async"})," ",e(n.span,{className:"token punctuation",children:"("}),"props",e(n.span,{className:"token operator",children:":"})," MyCmpProps",e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token comment",children:"// Declare local state"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," state ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"useStore"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"}),`
    count`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"0"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token comment",children:"// Returns JSX"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:e(n.span,{className:"token punctuation",children:"<"})}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"span"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
        Hello, `}),e(n.span,{className:"token punctuation",children:"{"}),"props",e(n.span,{className:"token punctuation",children:"."}),"name",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token plain-text",children:" "}),e(n.span,{className:"token punctuation",children:"{"}),"state",e(n.span,{className:"token punctuation",children:"."}),"count",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"span"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"Times: "}),e(n.span,{className:"token punctuation",children:"{"}),"state",e(n.span,{className:"token punctuation",children:"."}),"count",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"button"]}),`
        `,e(n.span,{className:"token attr-name",children:"onClick$"}),e(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
          `,e(n.span,{className:"token comment",children:"// This will update the local state and cause a re-render."}),`
          `,e(n.span,{className:"token comment",children:"// Reactivity is at Qwik's core!"}),`
          state`,e(n.span,{className:"token punctuation",children:"."}),"count",e(n.span,{className:"token operator",children:"++"}),e(n.span,{className:"token punctuation",children:";"}),`
        `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"})]}),`
      `,e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
        Increment
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"button"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
    `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:e(n.span,{className:"token punctuation",children:"</"})}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:e(n.strong,{children:"NOTE"})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["For an explanation of ",e(n.code,{children:"$"})," see lazy-loading and Optimizer discussion."]}),`
`,e(n.li,{children:"For a detailed discussion of props, see Component/props discussion."}),`
`]}),`
`]}),`
`,e(n.h2,{id:"props",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#props",children:e(n.span,{className:"icon icon-link"})}),"Props"]}),`
`,e(n.p,{children:"Props are used to pass data into the component. Props are declared as named arguments of the component."}),`
`,e(n.p,{children:["In this example a component ",e(n.code,{children:"Item"})," declares optional ",e(n.code,{children:"name"}),", ",e(n.code,{children:"quantity"}),", ",e(n.code,{children:"description"}),", and ",e(n.code,{children:"price"}),"."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword",children:"interface"})," ",e(n.span,{className:"token class-name",children:"ItemProps"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
   name`,e(n.span,{className:"token operator",children:"?"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token builtin",children:"string"}),e(n.span,{className:"token punctuation",children:","}),`
   quantity`,e(n.span,{className:"token operator",children:"?"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token builtin",children:"number"}),e(n.span,{className:"token punctuation",children:","}),`
   description`,e(n.span,{className:"token operator",children:"?"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token builtin",children:"string"}),e(n.span,{className:"token punctuation",children:","}),`
   price`,e(n.span,{className:"token operator",children:"?"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token builtin",children:"number"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),`

`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"const"})," Item ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),"props",e(n.span,{className:"token operator",children:":"})," ItemProps",e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token operator",children:"..."}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.h2,{id:"using-components",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-components",children:e(n.span,{className:"icon icon-link"})}),"Using components"]}),`
`,e(n.p,{children:"Qwik components can use other components."}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword",children:"const"})," Counter ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),"props",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"{"}),"step",e(n.span,{className:"token operator",children:"?"}),e(n.span,{className:"token operator",children:":"}),e(n.span,{className:"token builtin",children:"number"}),e(n.span,{className:"token punctuation",children:","})," initial",e(n.span,{className:"token operator",children:"?"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token builtin",children:"number"}),e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token operator",children:"..."}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"const"})," MyApp ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:e(n.span,{className:"token punctuation",children:"<"})}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"Single: "}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Counter"})]})," ",e(n.span,{className:"token punctuation",children:"/>"})]}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"Dozens: "}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Counter"})]})," ",e(n.span,{className:"token attr-name",children:"step"}),e(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token number",children:"12"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:"/>"})]}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
    `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:e(n.span,{className:"token punctuation",children:"</"})}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.p,{children:["The above example shows how the ",e(n.code,{children:"MyApp"})," component can use the ",e(n.code,{children:"Counter"})," component. The second example shows how one can use binding to pass values to the ",e(n.code,{children:"Counter"})," component's props."]}),`
`,e(n.h2,{id:"re-rendering-on-reactivity",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#re-rendering-on-reactivity",children:e(n.span,{className:"icon icon-link"})}),"Re-rendering on Reactivity"]}),`
`,e(n.p,{children:"Qwik components are reactive on the component level. Component props, as well as stores, are proxies. These proxies track reads as well as writes."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["A proxy-read during OnRender method execution lets Qwik know that the OnRender method depends on a given property. A read creates a subscription on that property. In our example, OnRender reads",e(n.code,{children:"{store.count}"}),", which creates a subscription that tells Qwik that whenever the ",e(n.code,{children:"store.count"})," changes, the component should be invalidated."]}),`
`,e(n.li,{children:"A proxy-write notifies Qwik that all associated subscriptions should be invalidated."}),`
`]}),`
`,e(n.p,{children:["When components get invalidated, they are added to the invalidation queue, which is flushed (rendered) on the next ",e(n.code,{children:"requestAnimationFrame"}),". This acts as a form of coalescing for component rendering."]}),`
`,e(n.p,{children:"For a detailed discussion of reactivity, see related discussion."}),`
`,e(n.h2,{id:"lazy-loading",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lazy-loading",children:e(n.span,{className:"icon icon-link"})}),"Lazy Loading"]}),`
`,e(n.p,{children:"The component also serves an important role when breaking parent-child relationships for bundling purposes."}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword",children:"const"})," ",e(n.span,{className:"token function-variable function",children:"Child"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"span"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"child"}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"span"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"const"})," ",e(n.span,{className:"token function-variable function",children:"Parent"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
  `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"section"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
    `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Child"})]})," ",e(n.span,{className:"token punctuation",children:"/>"})]}),e(n.span,{className:"token plain-text",children:`
  `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"section"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
`,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.p,{children:["In the above example, referring to the ",e(n.code,{children:"Parent"})," component implies a transitive reference to the ",e(n.code,{children:"Child"})," component. When the bundler is creating a chunk, a reference to ",e(n.code,{children:"Parent"})," necessitates bundling ",e(n.code,{children:"Child"})," as well. (",e(n.code,{children:"Parent"})," internally refers to ",e(n.code,{children:"Child"}),".) These transitive dependencies are a problem because it means that having a reference to the root component will transitively refer to the remainder of the application\u2014something which Qwik tries to avoid explicitly."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword",children:"const"})," Child ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"span"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"child"}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"span"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"const"})," Parent ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"section"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Child"})]})," ",e(n.span,{className:"token punctuation",children:"/>"})]}),e(n.span,{className:"token plain-text",children:`
    `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"section"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.p,{children:"In the above example the Optimizer transforms the above to:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword",children:"const"})," Child ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"componentQrl"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token function",children:"qrl"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:"'./chunk-a'"}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token string",children:"'Child_onMount'"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"const"})," Parent ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"componentQrl"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token function",children:"qrl"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:"'./chunk-b'"}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token string",children:"'Parent_onMount'"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"const"})," ",e(n.span,{className:"token function-variable function",children:"Parent_onMount"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token function",children:"qrl"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:"'./chunk-c'"}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token string",children:"'Parent_onRender'"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"const"})," ",e(n.span,{className:"token function-variable function",children:"Parent_onRender"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
  `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"section"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
    `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Child"})]})," ",e(n.span,{className:"token punctuation",children:"/>"})]}),e(n.span,{className:"token plain-text",children:`
  `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"section"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
`,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.blockquote,{children:[`
`,e(n.p,{children:[e(n.strong,{children:"NOTE"}),`
For simplicity, not all of the transformations are shown; all resulting symbols are kept in the same file for succinctness.`]}),`
`]}),`
`,e(n.p,{children:["Notice that after the Optimizer transforms the code, the ",e(n.code,{children:"Parent"})," no longer directly references ",e(n.code,{children:"Child"}),". This is important because it allows the bundler (and tree shakers) to freely move the symbols into different chunks without pulling the rest of the application with it."]}),`
`,e(n.p,{children:["So what happens when the ",e(n.code,{children:"Parent"})," component renders and ",e(n.code,{children:"Child"})," component has not yet been downloaded? First, the ",e(n.code,{children:"Parent"})," component renders its JSX like so."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"section"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
    `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"section"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
`,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
`]})}),`
`,e(n.p,{children:["As you can see in the above example, the ",e(n.code,{children:"<div/>"})," acts as a marker where the ",e(n.code,{children:"Child"})," component will be inserted once it is lazy-loaded."]}),`
`,e(n.h2,{id:"mental-model",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mental-model",children:e(n.span,{className:"icon icon-link"})}),"Mental Model"]}),`
`,e(n.p,{children:"The Optimizer splits Qwik components into the host element and the behavior of the component. The host element gets bundled with the parent component's OnRender method, whereas the component's behavior is something that gets lazy-loaded on an as-needed basis."}),`
`,e(n.h2,{id:"api-overview",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#api-overview",children:e(n.span,{className:"icon icon-link"})}),"API Overview"]}),`
`,e(n.h3,{id:"state",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#state",children:e(n.span,{className:"icon icon-link"})}),"State"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"useStore(initialState)"})," - creates a reactive store"]}),`
`,e(n.li,{children:[e(n.code,{children:"useRef$(initialState)"})," - creates a ref"]}),`
`,e(n.li,{children:[e(n.code,{children:"createContext(contentName)"})," - creates a context"]}),`
`,e(n.li,{children:[e(n.code,{children:"useContextProvider$()"})," - creates a context provider"]}),`
`,e(n.li,{children:[e(n.code,{children:"useContext$()"})," - use a context"]}),`
`]}),`
`,e(n.h3,{id:"styles",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#styles",children:e(n.span,{className:"icon icon-link"})}),"Styles"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"useStyleScoped$()"})," - creates a scoped style"]}),`
`,e(n.li,{children:[e(n.code,{children:"useStyle$()"})," - creates a global style"]}),`
`]}),`
`,e(n.h3,{id:"events",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#events",children:e(n.span,{className:"icon icon-link"})}),"Events"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"useOn()"})," - creates an event listener"]}),`
`,e(n.li,{children:[e(n.code,{children:"useOnWindow()"})," - creates a window event listener"]}),`
`,e(n.li,{children:[e(n.code,{children:"useOnDocument()"})," - creates a document event listener"]}),`
`]}),`
`,e(n.h3,{id:"lifecycles",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lifecycles",children:e(n.span,{className:"icon icon-link"})}),"Lifecycles"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"useMount$()"})," - creates a post rendering"]}),`
`,e(n.li,{children:[e(n.code,{children:"useServerMount$()"})," - creates a post rendering"]}),`
`,e(n.li,{children:[e(n.code,{children:"useWatch$()"})," - creates a watch"]}),`
`,e(n.li,{children:[e(n.code,{children:"useClientEffect$()"})," - creates a post rendering"]}),`
`,e(n.li,{children:[e(n.code,{children:"useResource$()"})," - creates a resource"]}),`
`]}),`
`,e(n.h3,{id:"other",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#other",children:e(n.span,{className:"icon icon-link"})}),"Other"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"$()"})," - creates a QRL"]}),`
`,e(n.li,{children:e(n.code,{children:"noSerialize()"})}),`
`,e(n.li,{children:e(n.code,{children:"useErrorBoundary()"})}),`
`]}),`
`,e(n.h3,{id:"components-1",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#components-1",children:e(n.span,{className:"icon icon-link"})}),"Components"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"<Slot>"})," - creates a slot"]}),`
`,e(n.li,{children:[e(n.code,{children:"<SSRStreamBlock>"})," - creates a stream block"]}),`
`,e(n.li,{children:[e(n.code,{children:"<SSRStream>"})," - creates a stream"]}),`
`,e(n.li,{children:[e(n.code,{children:"<Fragment>"})," - creates a fragment"]}),`
`]}),`
`,e(n.h2,{id:"see-also",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e(n.span,{className:"icon icon-link"})}),"See Also"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"/docs/components/lite-components/",children:"Lite components"})}),`
`]})]})}function r(a={}){const{wrapper:n}=a.components||{};return n?e(n,Object.assign({},a,{children:e(s,a)})):s(a)}export{r as default,o as frontmatter,i as head,l as headings};
