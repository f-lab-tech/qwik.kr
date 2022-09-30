import{i as n,u as i}from"./q-c0df5510.js";const o=[{text:"Understanding the Runtime",id:"understanding-the-runtime",level:2}],s={title:"Event Listeners",meta:[],styles:[],links:[]},l={title:"Event Listeners"};function a(t){const e=Object.assign({p:"p",code:"code",h2:"h2",a:"a",span:"span",blockquote:"blockquote",strong:"strong",pre:"pre",ol:"ol",li:"li",ul:"ul"},t.components);return n(i,{children:[n(e.p,{children:"A key feature of any framework is making it easy to listen to user events."}),`
`,n(e.p,{children:["Qwik can listen on a variety of events by placing an ",n(e.code,{children:"on<Eventname>$"})," attribute on an element that subscribes to the corresponding browser event."]}),`
`,n(e.p,{children:["Your task is to add a ",n(e.code,{children:"click"})," event on the ",n(e.code,{children:"<button>"})," element. Start by adding the ",n(e.code,{children:"onClick$"})," property and bind it to a function that calls ",n(e.code,{children:"alert('Hello World!')"}),"."]}),`
`,n(e.h2,{id:"understanding-the-runtime",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#understanding-the-runtime",children:n(e.span,{className:"icon icon-link"})}),"Understanding the Runtime"]}),`
`,n(e.p,{children:"So far this may look like a normal framework behavior, however Qwik does things very differently from other frameworks."}),`
`,n(e.p,{children:["Every time you see a ",n(e.code,{children:"$"}),' you should be thinking, "lazy-loading happens here".']}),`
`,n(e.p,{children:"As you open the browser's developer tools, notice that no JavaScript is loaded until you click the button."}),`
`,n(e.p,{children:"If JavaScript is required to subscribe to browser events, how does Qwik achieve this interaction without loading JavaScript?"}),`
`,n(e.p,{children:"Consider the following simplified HTML of the application below."}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"Tip:"})," Click on the ",n(e.strong,{children:"HTML"})," tab to see actual HTML produced by the server."]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"<"}),"html"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
  `,n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"<"}),"body"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
    `,n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"<"}),"button"]})," ",n(e.span,{className:"token attr-name",children:[n(e.span,{className:"token namespace",children:"on:"}),"click"]}),n(e.span,{className:"token attr-value",children:[n(e.span,{className:"token punctuation attr-equals",children:"="}),n(e.span,{className:"token punctuation",children:'"'}),"chunk-abc.js#App_onClick",n(e.span,{className:"token punctuation",children:'"'})]}),n(e.span,{className:"token punctuation",children:">"})]}),`
      Click Me
    `,n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"</"}),"button"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
    `,n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"<"}),"script"]})," ",n(e.span,{className:"token attr-name",children:"id"}),n(e.span,{className:"token attr-value",children:[n(e.span,{className:"token punctuation attr-equals",children:"="}),n(e.span,{className:"token punctuation",children:'"'}),"Qwikloader",n(e.span,{className:"token punctuation",children:'"'})]}),n(e.span,{className:"token punctuation",children:">"})]}),n(e.span,{className:"token script",children:n(e.span,{className:"token language-javascript",children:[n(e.span,{className:"token operator",children:"..."}),n(e.span,{className:"token punctuation",children:"."})]})}),n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"</"}),"script"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
  `,n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"</"}),"body"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
`,n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"</"}),"html"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
`]})}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:["APIs contain the ",n(e.code,{children:"$"})," so the Qwik optimizer can transform your code for lazy-loading."]}),`
`]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["The ",n(e.code,{children:"$"})," is a signal to the optimizer to extract the code for lazy-loading."]}),`
`,n(e.li,{children:["The ",n(e.code,{children:"$"}),' is a signal to you that lazy-loading "magic" happens at this point.']}),`
`,n(e.li,{children:["TypeScript rules ensure you don't skip any places where the ",n(e.code,{children:"$"})," should appear."]}),`
`]}),`
`,n(e.ol,{start:"2",children:[`
`,n(e.li,{children:["The optimizer looks for the ",n(e.code,{children:"$"})," and extracts the function wrapped by ",n(e.code,{children:"$"})," into a separate ",n(e.a,{href:"https://qwik.builder.io/docs/advanced/optimizer",children:"lazy-loadable chunk"}),"."]}),`
`,n(e.li,{children:["As the server renders the page, the JSX is executed and notices that there is a click listener. The click listener is serialized into the ",n(e.code,{children:"<button>"})," element as ",n(e.code,{children:"on:click"})," attribute. Qwik then knows how to hook this event back up on the client."]}),`
`,n(e.li,{children:"Qwikloader scripts get inlined into HTML. The Qwikloader script sets up a global listener for all events in the browser. Qwikloader is about 1kb and executes in about 1ms."}),`
`,n(e.li,{children:["When a user clicks on the button, the Qwikloader intercepts the event and looks for an element with ",n(e.code,{children:"on:click"})," attribute."]}),`
`,n(e.li,{children:["The ",n(e.code,{children:"on:click"})," attribute contains:",`
`,n(e.ul,{children:[`
`,n(e.li,{children:["The URL to download the associated code.",`
`,n(e.ul,{children:[`
`,n(e.li,{children:"To avoid delays between click and execution, Qwik prefetches the code related to the given component."}),`
`]}),`
`]}),`
`,n(e.li,{children:"A symbol that is exported by the downloaded chunk that contains the function to execute."}),`
`]}),`
`]}),`
`,n(e.li,{children:"Once the code is downloaded the function is executed."}),`
`]}),`
`,n(e.p,{children:"The above behavior is what gives Qwik applications their instant-on property (resumability) without eagerly downloading and executing code and performing hydration which is expensive."}),`
`,n(e.blockquote,{children:[`
`,n(e.p,{children:[n(e.strong,{children:"NOTE"}),`
To avoid delays between user action and response, Qwik prefetches code in the background.`]}),`
`]})]})}function r(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(a,t)})):a(t)}export{r as default,l as frontmatter,s as head,o as headings};
