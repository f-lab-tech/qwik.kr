import{i as t,u as a}from"./q-c0df5510.js";const r=[{text:"Resumable vs. Hydration",id:"resumable-vs-hydration",level:1},{text:"Introducing Resumability",id:"introducing-resumability",level:1},{text:"Listeners",id:"listeners",level:2},{text:"Component Trees",id:"component-trees",level:2},{text:"Application State",id:"application-state",level:2},{text:"Serialization",id:"serialization",level:3},{text:"Writing applications with serializability in mind",id:"writing-applications-with-serializability-in-mind",level:2},{text:"Other benefits of resumability",id:"other-benefits-of-resumability",level:2}],s={title:"Resumable",meta:[],styles:[],links:[]},l={title:"Resumable",fetch:"https://hackmd.io/@mhevery/rkYkHhCxq"};function i(n){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ol:"ol",li:"li",img:"img",strong:"strong",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul"},n.components);return t(a,{children:[t(e.h1,{id:"resumable-vs-hydration",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#resumable-vs-hydration",children:t(e.span,{className:"icon icon-link"})}),"Resumable vs. Hydration"]}),`
`,t(e.p,{children:"A key concept of Qwik applications is that they are resumable from a server-side-rendered state. The best way to explain resumability is to understand how the current generation of frameworks are replayable (hydration)."}),`
`,t(e.p,{children:"When an SSR/SSG application boots up on a client, it requires that the framework on the client restores three pieces of information:"}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:"Listeners - locate event listeners and install them on the DOM nodes to make the application interactive."}),`
`,t(e.li,{children:"Component tree - build up an internal data structure representing the application component tree."}),`
`,t(e.li,{children:"Application state - restore the application state."}),`
`]}),`
`,t(e.p,{children:"Collectively, this is known as hydration. All current generations of frameworks require this step to make the application interactive."}),`
`,t(e.p,{children:[t(e.a,{href:"https://www.builder.io/blog/hydration-is-pure-overhead",children:"Hydration is expensive"})," for two reasons:"]}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:"The frameworks have to download all of the component code associated with the current page."}),`
`,t(e.li,{children:"The frameworks have to execute the templates associated with the components on the page to rebuild the listener location and the internal component tree."}),`
`]}),`
`,t(e.p,{children:t(e.img,{src:"https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F04681212764f4025b2b5f5c6a258ad6e?format=webp&amp;width=2000",alt:"Resumable vs Hydration"})}),`
`,t(e.p,{children:"Qwik is different because it does not require hydration to resume an application on the client. Not requiring hydration is what makes the Qwik application startup instantaneous."}),`
`,t(e.p,{children:["All other frameworks' hydration ",t(e.strong,{children:"replays"})," all the application logic in the client. Qwik instead pauses execution in the server, and resumes execution in the client."]}),`
`,t(e.h1,{id:"introducing-resumability",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#introducing-resumability",children:t(e.span,{className:"icon icon-link"})}),"Introducing Resumability"]}),`
`,t(e.p,{children:"Resumability is about pausing execution in the server and resuming execution in the client without having to replay and download all of the application logic."}),`
`,t(e.p,{children:"A good mental model is that Qwik applications at any point in their lifecycle can be serialized and moved to a different VM instance (server to browser). There, the application simply resumes where the serialization stopped. No hydration is required. This is why we say that Qwik applications don't hydrate; they resume."}),`
`,t(e.p,{children:"In order to achieve this, Qwik needs to solve the 3 problems (listeners, component tree, application state) in a way that is compatible with a no-code startup."}),`
`,t(e.h2,{id:"listeners",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#listeners",children:t(e.span,{className:"icon icon-link"})}),"Listeners"]}),`
`,t(e.p,{children:"DOM without event listeners is just a static page; it is not an application. Today's standard for all sites is quite a high level of interactivity, so even the most static-looking sites are full of event listeners. These include menus, hovers, expanding details, or even full-on interactive apps."}),`
`,t(e.p,{children:"Existing frameworks solve the event listener by downloading the components and executing their templates to collect event listeners that are then attached to the DOM. The current approach has these issues:"}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:"Requires the template code to be eagerly downloaded."}),`
`,t(e.li,{children:"Requires template code to be eagerly executed."}),`
`,t(e.li,{children:"Requires the event handler code to be downloaded eagerly (to be attached)."}),`
`]}),`
`,t(e.p,{children:"The above approach does not scale. As the application becomes more complicated, the amount of code needed to download eagerly and execute grows proportionally with the size of the application. This negatively impacts the application startup performance and hence the user experience."}),`
`,t(e.p,{children:"Qwik solves the above issue by serializing the event listens into DOM like so:"}),`
`,t(e.pre,{children:t(e.code,{className:"language-html",children:[t(e.span,{className:"token tag",children:[t(e.span,{className:"token tag",children:[t(e.span,{className:"token punctuation",children:"<"}),"button"]})," ",t(e.span,{className:"token attr-name",children:[t(e.span,{className:"token namespace",children:"on:"}),"click"]}),t(e.span,{className:"token attr-value",children:[t(e.span,{className:"token punctuation attr-equals",children:"="}),t(e.span,{className:"token punctuation",children:'"'}),"./chunk.js#handler_symbol",t(e.span,{className:"token punctuation",children:'"'})]}),t(e.span,{className:"token punctuation",children:">"})]}),"click me",t(e.span,{className:"token tag",children:[t(e.span,{className:"token tag",children:[t(e.span,{className:"token punctuation",children:"</"}),"button"]}),t(e.span,{className:"token punctuation",children:">"})]}),`
`]})}),`
`,t(e.p,{children:["Qwik still needs to collect the listener information, but this step is done as part of the SSR/SSG. The results of SSR/SSG are then serialized into HTML so that the browser does not need to do anything to resume the execution. Notice that the ",t(e.code,{children:"on:click"})," attribute contains all of the information to resume the application without doing anything eagerly."]}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:"Qwikloader sets up a single global listener instead of many individual listeners per DOM element. This step can be done with no application code present."}),`
`,t(e.li,{children:"The HTML contains a URL to the chunk and symbol name. The attribute tells Qwikloader which code chunk to download and which symbol to retrieve from the chunk."}),`
`,t(e.li,{children:"Finally, to make all of the above possible, Qwik's event processing implementation understands asynchronicity which allows insertion of asynchronous lazy loading."}),`
`]}),`
`,t(e.h2,{id:"component-trees",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#component-trees",children:t(e.span,{className:"icon icon-link"})}),"Component Trees"]}),`
`,t(e.p,{children:"Frameworks work with component trees. To that end, frameworks need a complete understanding of the component trees to know which components need to be rerendered and when. If you look into the existing framework SSR/SSG output, the component boundary information has been destroyed. There is no way of knowing where component boundaries are by looking at the resulting HTML. To recreate this information, frameworks re-execute the component templates and memoize the component boundary location. Re-execution is what hydration is. Hydration is expensive as it requires both the download of component templates and their execution."}),`
`,t(e.p,{children:"Qwik collects component boundary information as part of the SSR/SSG and then serializes that information into HTML. The result is that Qwik can:"}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:"Rebuild the component hierarchy information without the component code actually being present. The component code can remain lazy."}),`
`,t(e.li,{children:"Qwik can do this lazily only for the components which need to be re-rendered rather than all upfront."}),`
`,t(e.li,{children:"Qwik collects relationship information between stores and components. This creates a subscription model that informs Qwik which components need to be re-rendered as a result of state change. The subscription information also gets serialized into HTML."}),`
`]}),`
`,t(e.h2,{id:"application-state",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#application-state",children:t(e.span,{className:"icon icon-link"})}),"Application State"]}),`
`,t(e.p,{children:"Existing frameworks usually have a way of serializing the application state into HTML so that the state can be restored as part of hydration. In this way, they are very similar to Qwik. However, Qwik has state management more tightly integrated into the lifecycle of the components. In practice, this means that component can be delay-loaded independently from the state of the component. This is not easily achievable in existing frameworks because component props are usually created by the parent component. This creates a chain reaction. In order to restore component X, its parents need to be restored as well. Qwik allows any component to be resumed without the parent component code being present."}),`
`,t(e.h3,{id:"serialization",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#serialization",children:t(e.span,{className:"icon icon-link"})}),"Serialization"]}),`
`,t(e.p,{children:["The simplest way to think about serialization is through ",t(e.code,{children:"JSON.stringify"}),". However, JSON has several limitations. Qwik can overcome some limitations, but some can't be overcome, and they place limitations on what the developer can do. Understanding these limitations is important when building Qwik applications."]}),`
`,t(e.p,{children:"Limitations of JSON which Qwik solves:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:"JSON produces DAG. DAG stands for Directed Acyclic Graph, which means that the object which is being serialized can't have circular references. This is a big limitation because the application state is often circular. Qwik ensures that when the graph of objects gets serialized, the circular references get properly saved and then restored."}),`
`,t(e.li,{children:["JSON can't serialize some object types. For example, DOM references, Dates, etc... Qwik serialization format ensures that such objects can correctly be serialized and restored. Here is a list of types that can be serialized with Qwik:",`
`,t(e.ul,{children:[`
`,t(e.li,{children:"DOM references"}),`
`,t(e.li,{children:"Dates (not yet implemented)"}),`
`,t(e.li,{children:"Function closures (if wrapped in QRL)."}),`
`]}),`
`]}),`
`]}),`
`,t(e.p,{children:"Limitations of JSON that Qwik does not solve:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["Serialization of classes (",t(e.code,{children:"instanceof"})," and prototype)"]}),`
`,t(e.li,{children:["Serialization of ",t(e.code,{children:"Promise"}),"s, Streams, etc..."]}),`
`]}),`
`,t(e.h2,{id:"writing-applications-with-serializability-in-mind",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#writing-applications-with-serializability-in-mind",children:t(e.span,{className:"icon icon-link"})}),"Writing applications with serializability in mind"]}),`
`,t(e.p,{children:"The resumability property of the framework must extend to resumability of the application as well. This means that the framework must provide mechanisms for the developer to express Components and Entities of the applications in a way which can be serialized and then resumed (without re-bootstrapping). This necessitates that applications are written with resumability constraints in mind. It is simply not possible for developers to continue to write applications in a heap-centric way and expect that a better framework can somehow make up for this sub-optimal approach."}),`
`,t(e.p,{children:"Developers must write their applications in a DOM-centric way. This will require a change of behavior and retooling of web developers' skills. Frameworks need to provide guidance and APIs to make it easy for developers to write the applications in this way."}),`
`,t(e.h2,{id:"other-benefits-of-resumability",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#other-benefits-of-resumability",children:t(e.span,{className:"icon icon-link"})}),"Other benefits of resumability"]}),`
`,t(e.p,{children:"The most obvious benefit of using resumability is for server-side-rendering. However, there are secondary benefits:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:"Serializing existing PWA apps so that users don't lose context when they return to the application"}),`
`,t(e.li,{children:"Improved rendering performance because only changed components need to be re-rendered"}),`
`,t(e.li,{children:"Fine-grained lazy-loading"}),`
`,t(e.li,{children:"Decreased memory pressure, especially on mobile devices"}),`
`,t(e.li,{children:"Progressive interactivity of existing static websites"}),`
`]}),`
`,t(e.p,{children:"Reactivity is a key component of Qwik. Reactivity allows Qwik to track which components are subscribed to which state. This information enables Qwik to invalidate only the relevant component on state change, which minimizes the number of components that need to be rerendered. Without reactivity, a state change would require re-rendering from the root component, which would force the whole component tree to be eagerly downloaded."})]})}function c(n={}){const{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(i,n)})):i(n)}export{c as default,l as frontmatter,s as head,r as headings};
