import{i as n,u as o}from"./q-c0df5510.js";const r=[{text:"Progressively",id:"progressively",level:1},{text:"Current state-of-the-art",id:"current-state-of-the-art",level:2},{text:"Solution",id:"solution",level:2},{text:"Optimizer",id:"optimizer",level:3},{text:"Lazy-loading",id:"lazy-loading",level:3},{text:"Optimizer and $",id:"optimizer-and-",level:3}],s={title:"Progressively",meta:[],styles:[],links:[]},l={title:"Progressively"};function a(t){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",h3:"h3",code:"code",pre:"pre"},t.components);return n(o,{children:[n(e.h1,{id:"progressively",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#progressively",children:n(e.span,{className:"icon icon-link"})}),"Progressively"]}),`
`,n(e.p,{children:"Progressively is about downloading code as the application needs, without having to download the entire codebase eagerly."}),`
`,n(e.p,{children:["This connect with Qwik's ",n(e.a,{href:"/docs/think-qwik/",children:"core tenant"})," which focus on delaying ",n(e.strong,{children:"the loading"})," and execution of JavaScript for as long as possible. Qwik needs to break up the application into many lazy loadable chunks to achieve that."]}),`
`,n(e.h2,{id:"current-state-of-the-art",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#current-state-of-the-art",children:n(e.span,{className:"icon icon-link"})}),"Current state-of-the-art"]}),`
`,n(e.p,{children:[n(e.a,{href:"https://www.builder.io/blog/dont-blame-the-developer-for-what-the-frameworks-did",children:"Existing frameworks suffer of two problems"}),":"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Lazy loading boundaries are 100% delegated to the developer"}),`
`,n(e.li,{children:"Frameworks can only lazy load components that are not in the current render tree."}),`
`]}),`
`,n(e.p,{children:"The issue is that the frameworks need to reconcile their internal state with the DOM. And that means that at least once on application hydration, they need to be able to do a full render to rebuild the framework's internal state. After the first render, the frameworks can be more surgical about their updates, but the damage has been done, the code has been downloaded. So we have two issues:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Frameworks need to download and execute components to rebuild the render tree on startup. (See ",n(e.a,{href:"https://www.builder.io/blog/hydration-is-pure-overhead",children:"hydration is pure overhead"}),") This forces eager download and execution of all components in the render tree."]}),`
`,n(e.li,{children:"The event handlers come with the components even though they are not needed at the time of rendering. The inclusion of event handlers forces the download of unnecessary code."}),`
`]}),`
`,n(e.h2,{id:"solution",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#solution",children:n(e.span,{className:"icon icon-link"})}),"Solution"]}),`
`,n(e.p,{children:"Qwik architecture takes full advantage of modern tooling to automate the problem of entry point generation. Developers can write components normally, while the Qwik optimizer will split the components into chunks and download them as needed."}),`
`,n(e.p,{children:"In addition, the framework runtime does not need to download code that is not required for interactivity, even if the component is part of the render tree."}),`
`,n(e.h3,{id:"optimizer",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#optimizer",children:n(e.span,{className:"icon icon-link"})}),"Optimizer"]}),`
`,n(e.p,{children:["Optimizer (described in-depth ",n(e.a,{href:"/docs/advanced/optimizer/",children:"here"}),") is a code transformation that extracts functions into top-level importable symbols, which allows the Qwik runtime to lazy-load the JavaScript on an as-needed basis."]}),`
`,n(e.p,{children:"The Optimizer and Qwik runtime work together to achieve the desired result of fine-grained lazy loading."}),`
`,n(e.p,{children:"Without the Optimizer, either:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"The code would have to be broken up by the developer into importable parts. This would be unnatural to write an application, making for a bad DX."}),`
`,n(e.li,{children:"The application would have to load a lot of unnecessary code as there would be no lazy-loaded boundaries."}),`
`]}),`
`,n(e.p,{children:"Qwik runtime must understand the Optimizer output. The biggest difference to comprehend is that by breaking up the component into lazy-loadable chunks, the lazy-loading requirement introduces asynchronous code into the framework. The framework has to be written differently to take asynchronicity into account. Existing frameworks assume that all code is available synchronously. This assumption prevents an easy insertion of lazy-loading into existing frameworks. (For example, when a new component is created, the framework assumes that it's initialization code can be invoked in a synchronous fashion. If this is the first time component is referenced, then it's code needs to be lazy-loaded, and therefore the framework must take that into account.)"}),`
`,n(e.h3,{id:"lazy-loading",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lazy-loading",children:n(e.span,{className:"icon icon-link"})}),"Lazy-loading"]}),`
`,n(e.p,{children:"Lazy-loading is asynchronous. Qwik is an asynchronous framework. Qwik understands that at any time, it may not have a reference to a callback, and therefore, it may need to lazy-load it. (In contrast, most existing frameworks assume that all of the code is available synchronously, making lazy-loading non-trivial.)"}),`
`,n(e.p,{children:"In Qwik everything is lazy-loadable:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Component on-render (initialization block and render block)"}),`
`,n(e.li,{children:"Component on-watch (side-effects, only downloaded if inputs change)"}),`
`,n(e.li,{children:"Listeners (only downloaded on interaction)"}),`
`,n(e.li,{children:"Styles (Only downloaded if the server did not already provide them)"}),`
`]}),`
`,n(e.p,{children:"Lazy-loading is a core property of the framework and not an afterthought."}),`
`,n(e.h3,{id:"optimizer-and-",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#optimizer-and-",children:n(e.span,{className:"icon icon-link"})}),"Optimizer and ",n(e.code,{children:"$"})]}),`
`,n(e.p,{children:"Let's look at our example again:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:[n(e.span,{className:"token comment",children:"// the `$` suffix for `component` indicates that the component should be"}),`
`,n(e.span,{className:"token comment",children:"// lazy-loaded."}),`
`,n(e.span,{className:"token keyword",children:"const"})," Counter ",n(e.span,{className:"token operator",children:"="})," ",n(e.span,{className:"token function",children:"component$"}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:")"})," ",n(e.span,{className:"token operator",children:"=>"})," ",n(e.span,{className:"token punctuation",children:"{"}),`
  `,n(e.span,{className:"token keyword",children:"const"})," store ",n(e.span,{className:"token operator",children:"="})," ",n(e.span,{className:"token function",children:"useStore"}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:"{"})," count",n(e.span,{className:"token operator",children:":"})," ",n(e.span,{className:"token number",children:"0"})," ",n(e.span,{className:"token punctuation",children:"}"}),n(e.span,{className:"token punctuation",children:")"}),n(e.span,{className:"token punctuation",children:";"}),`

  `,n(e.span,{className:"token comment",children:"// the `$` suffix for `onClick` indicates that the implementation for"}),`
  `,n(e.span,{className:"token comment",children:"// the handler should be lazy-loaded."}),`
  `,n(e.span,{className:"token keyword",children:"return"})," ",n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"<"}),"button"]})," ",n(e.span,{className:"token attr-name",children:"onClick$"}),n(e.span,{className:"token script language-javascript",children:[n(e.span,{className:"token script-punctuation punctuation",children:"="}),n(e.span,{className:"token punctuation",children:"{"}),n(e.span,{className:"token punctuation",children:"("}),n(e.span,{className:"token punctuation",children:")"})," ",n(e.span,{className:"token operator",children:"=>"})," store",n(e.span,{className:"token punctuation",children:"."}),"count",n(e.span,{className:"token operator",children:"++"}),n(e.span,{className:"token punctuation",children:"}"})]}),n(e.span,{className:"token punctuation",children:">"})]}),n(e.span,{className:"token punctuation",children:"{"}),"store",n(e.span,{className:"token punctuation",children:"."}),"count",n(e.span,{className:"token punctuation",children:"}"}),n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"</"}),"button"]}),n(e.span,{className:"token punctuation",children:">"})]}),n(e.span,{className:"token punctuation",children:";"}),`
`,n(e.span,{className:"token punctuation",children:"}"}),n(e.span,{className:"token punctuation",children:")"}),n(e.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,n(e.p,{children:["Notice the presence of ",n(e.code,{children:"$"})," in the code. ",n(e.code,{children:"$"}),` is a marker that tells the Optimizer that the function
following it should be lazy-loaded. (For a detailed discussion see `,n(e.a,{href:"/docs/advanced/optimizer/",children:"$ and Optimizer Rules"}),`.)
The `,n(e.code,{children:"$"}),` is a single character that hints to the Optimizer and the developer to let them know
that asynchronous lazy-loading occurs here.`]})]})}function c(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(a,t)})):a(t)}export{c as default,l as frontmatter,s as head,r as headings};
