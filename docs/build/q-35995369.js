import{i as e,u as s}from"./q-c0df5510.js";const o=[{text:"Rendering",id:"rendering",level:1},{text:"JSX",id:"jsx",level:2},{text:"Rendering child components",id:"rendering-child-components",level:2},{text:"render() is async",id:"render-is-async",level:2},{text:"DOM update buffering",id:"dom-update-buffering",level:2}],i={title:"Rendering",meta:[],styles:[],links:[]},l={title:"Rendering",fetch:"https://hackmd.io/@mhevery/HJTWrnCl5"};function t(a){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ol:"ol",li:"li",ul:"ul",strong:"strong",code:"code",pre:"pre",h2:"h2"},a.components);return e(s,{children:[e(n.h1,{id:"rendering",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rendering",children:e(n.span,{className:"icon icon-link"})}),"Rendering"]}),`
`,e(n.p,{children:"Rendering is the process of updating the DOM based on"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:"Changes in the state of the application"}),`
`,e(n.li,{children:"Component templates"}),`
`]}),`
`,e(n.p,{children:"Qwik is unique because it knows how to render templates out-of-order and asynchronously."}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.strong,{children:"Out-of-order"}),": this means that Qwik does not require that the parent component or child component must also be rendered when rendering a component."]}),`
`,e(n.li,{children:[e(n.strong,{children:"Asynchronously"}),": this means that Qwik's ",e(n.code,{children:"render"})," function understands that it may need to download child components, and therefore the rendering operation is asynchronous."]}),`
`]}),`
`,e(n.p,{children:"Simple counter-example:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword",children:"const"})," Counter ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," store ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"useStore"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"})," count",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"0"})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"button"]})," ",e(n.span,{className:"token attr-name",children:"onClick$"}),e(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," store",e(n.span,{className:"token punctuation",children:"."}),"count",e(n.span,{className:"token operator",children:"++"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token punctuation",children:"{"}),"store",e(n.span,{className:"token punctuation",children:"."}),"count",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"button"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.p,{children:"Once rendered, the HTML fragment may look something like this:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-html",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"button"]})," ",e(n.span,{className:"token attr-name",children:[e(n.span,{className:"token namespace",children:"q:"}),"obj"]}),e(n.span,{className:"token attr-value",children:[e(n.span,{className:"token punctuation attr-equals",children:"="}),e(n.span,{className:"token punctuation",children:'"'}),"123",e(n.span,{className:"token punctuation",children:'"'})]})," ",e(n.span,{className:"token attr-name",children:[e(n.span,{className:"token namespace",children:"on:"}),"click"]}),e(n.span,{className:"token attr-value",children:[e(n.span,{className:"token punctuation attr-equals",children:"="}),e(n.span,{className:"token punctuation",children:'"'}),"./chunk-a.js#Counter_button_click[0]",e(n.span,{className:"token punctuation",children:'"'})]}),e(n.span,{className:"token punctuation",children:">"})]}),"0",e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"button"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
`,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"div"]}),e(n.span,{className:"token punctuation",children:">"})]}),`
`]})}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["For an explanation of ",e(n.code,{children:"$"}),", see ",e(n.a,{href:"/docs/advanced/optimizer/",children:[e(n.code,{children:"$"})," and optimizer rules"]}),"."]}),`
`,e(n.li,{children:["For an explanation of ",e(n.code,{children:"q:obj"}),", see ",e(n.a,{href:"/docs/concepts/resumable/",children:"serialization"}),"."]}),`
`,e(n.li,{children:["For an explanation of ",e(n.code,{children:"on:click"}),", see ",e(n.a,{href:"/docs/advanced/qwikloader/",children:"qwikloader"}),"."]}),`
`]}),`
`,e(n.h2,{id:"jsx",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#jsx",children:e(n.span,{className:"icon icon-link"})}),"JSX"]}),`
`,e(n.p,{children:"Qwik uses JSX to express the component's template. JSX discussion is outside of the scope of this document, but Qwik JSX should feel very familiar if you have used JSX with other frameworks. For this reason, let's focus on how Qwik JSX is different."}),`
`,e(n.h2,{id:"rendering-child-components",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rendering-child-components",children:e(n.span,{className:"icon icon-link"})}),"Rendering child components"]}),`
`,e(n.p,{children:"Qwik lazy loads components on an as-needed basis. To minimize the number of components to download, Qwik only descends into child components if the component's props have changed."}),`
`,e(n.pre,{children:e(n.code,{className:"language-tsx",children:[e(n.span,{className:"token keyword",children:"const"})," Parent ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," store ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"useStore"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"})," count",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"0"}),e(n.span,{className:"token punctuation",children:","})," step",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token number",children:"1"})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:e(n.span,{className:"token punctuation",children:"<"})}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"button"]})," ",e(n.span,{className:"token attr-name",children:"onClick$"}),e(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),"store",e(n.span,{className:"token punctuation",children:"."}),"step ",e(n.span,{className:"token operator",children:"*="})," ",e(n.span,{className:"token operator",children:"-"}),e(n.span,{className:"token number",children:"1"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"direction"}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"button"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"button"]})," ",e(n.span,{className:"token attr-name",children:"onClick$"}),e(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),"store",e(n.span,{className:"token punctuation",children:"."}),"count ",e(n.span,{className:"token operator",children:"+="})," store",e(n.span,{className:"token punctuation",children:"."}),"step",e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"})]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token punctuation",children:"{"}),"store",e(n.span,{className:"token punctuation",children:"."}),"step",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"button"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:`
      `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),e(n.span,{className:"token class-name",children:"Greeter"})]})," ",e(n.span,{className:"token attr-name",children:"name"}),e(n.span,{className:"token script language-javascript",children:[e(n.span,{className:"token script-punctuation punctuation",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token string",children:"'World_'"})," ",e(n.span,{className:"token operator",children:"+"})," store",e(n.span,{className:"token punctuation",children:"."}),"count",e(n.span,{className:"token punctuation",children:"}"})]})," ",e(n.span,{className:"token punctuation",children:"/>"})]}),e(n.span,{className:"token plain-text",children:`
    `}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:e(n.span,{className:"token punctuation",children:"</"})}),e(n.span,{className:"token punctuation",children:">"})]}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"const"})," Greeter ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),"props",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"{"})," name",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token builtin",children:"string"})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"<"}),"span"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token plain-text",children:"Hello "}),e(n.span,{className:"token punctuation",children:"{"}),"props",e(n.span,{className:"token punctuation",children:"."}),"name",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token tag",children:[e(n.span,{className:"token tag",children:[e(n.span,{className:"token punctuation",children:"</"}),"span"]}),e(n.span,{className:"token punctuation",children:">"})]}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.p,{children:"In the above example, there are two buttons:"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:["Clicking the first button changes the direction of the counter (",e(n.code,{children:"store.step"})," flips between ",e(n.code,{children:"+1"})," and ",e(n.code,{children:"-1"}),"). Changing the ",e(n.code,{children:"store"})," requires that the component's ",e(n.code,{children:"OnRender"})," function executes. The resulting JSX updates the DOM to show ",e(n.code,{children:"+1"})," and ",e(n.code,{children:"-1"}),". However, changing the direction will not change the props on ",e(n.code,{children:"<Greeter name={'World_' + store.count}/>"}),". For this reason, Qwik will not descend into the ",e(n.code,{children:"<Greeter>"})," component, and therefore the ",e(n.code,{children:"Greeter"}),"'s template does not need to be downloaded or executed. Such aggressive pruning allows Qwik to minimize the amount of code that needs to be present to render a component."]}),`
`,e(n.li,{children:["Clicking the second button increments (or decrements) ",e(n.code,{children:"state.count"}),". This in turn causes the props on ",e(n.code,{children:"<Greeter name={'World_' + store.count}/>"})," to change. A change in props means that Qwik will also descend and render ",e(n.code,{children:"<Greeter>"}),". However, it is possible that Qwik does not have a reference to the child component. In that case, Qwik will lazy-load the component and continue the rendering once the component's render function is available."]}),`
`]}),`
`,e(n.h2,{id:"render-is-async",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#render-is-async",children:e(n.span,{className:"icon icon-link"})}),e(n.code,{children:"render()"})," is async"]}),`
`,e(n.p,{children:["The above example demonstrates why the rendering process must be asynchronous. It is important that the rendering pipeline can lazy load child components. Lazy loading is an asynchronous operation; therefore, rendering needs to be asynchronous. In practice, this means that the ",e(n.code,{children:"render()"})," function returns a promise."]}),`
`,e(n.p,{children:["Most current-generation frameworks have a synchronous ",e(n.code,{children:"render()"})," process. Synchronous rendering can't easily deal with asynchronous code loading, so synchronous rendering necessitates that all dependant components are eagerly present before rendering can commence."]}),`
`,e(n.h2,{id:"dom-update-buffering",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#dom-update-buffering",children:e(n.span,{className:"icon icon-link"})}),"DOM update buffering"]}),`
`,e(n.p,{children:["The asynchronous nature of ",e(n.code,{children:"render()"})," means that users may see an intermediate rendering of the UI as components download. Seeing an intermediate state is undesirable; therefore, Qwik will buffer all DOM updates and only flush the DOM operations once all of the components have been downloaded and their JSX functions executed. The result is that the UI will update as an atomic operation, and the user will not see the intermediate steps."]})]})}function r(a={}){const{wrapper:n}=a.components||{};return n?e(n,Object.assign({},a,{children:e(t,a)})):t(a)}export{r as default,l as frontmatter,i as head,o as headings};
