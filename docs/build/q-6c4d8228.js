import{i as n,u as i}from"./q-c0df5510.js";const l=[{text:"Qwikloader",id:"qwikloader",level:1},{text:"How does it work",id:"how-does-it-work",level:2},{text:"Events and qwikloader",id:"events-and-qwikloader",level:2}],o={title:"Qwikloader",meta:[],styles:[],links:[]},c={title:"Qwikloader",fetch:"https://hackmd.io/@mhevery/H1YxH2Cg5"};function t(a){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",pre:"pre",ol:"ol",strong:"strong"},a.components);return n(i,{children:[n(e.h1,{id:"qwikloader",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#qwikloader",children:n(e.span,{className:"icon icon-link"})}),"Qwikloader"]}),`
`,n(e.p,{children:"Qwik is designed for fine-grained lazy loading of your application. To achieve lazy-loading, Qwik requires a tiny piece of JavaScript to load at the beginning that knows how to download the rest of the application on an as-needed basis. We refer to that JavaScript as Qwikloader."}),`
`,n(e.p,{children:"Qwikloader is:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"small: about 1 kb minified."}),`
`,n(e.li,{children:"fast: it executes in less than 5ms even on mobile devices. (Initial cost, not per event cost.)"}),`
`]}),`
`,n(e.p,{children:"How is it delivered:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Because of its size, we recommend delivering Qwikloader as inlined ",n(e.code,{children:"<script>"})," tag. This way, the browser does not have to pay for the cost of creating another connection to the server."]}),`
`]}),`
`,n(e.p,{children:"What is the purpose of Qwikloader:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"register global browser events."}),`
`,n(e.li,{children:"if an event occurs, search the DOM for the corresponding event attribute pointing to the QRL to lazy-load."}),`
`,n(e.li,{children:"Lazy-load the event handler and execute it."}),`
`]}),`
`,n(e.h2,{id:"how-does-it-work",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-does-it-work",children:n(e.span,{className:"icon icon-link"})}),"How does it work"]}),`
`,n(e.p,{children:"Below you can find a simple HTML with Qwikloader and a button with associated behavior."}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"<"}),"html"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
  `,n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"<"}),"body"]})," ",n(e.span,{className:"token attr-name",children:[n(e.span,{className:"token namespace",children:"q:"}),"base"]}),n(e.span,{className:"token attr-value",children:[n(e.span,{className:"token punctuation attr-equals",children:"="}),n(e.span,{className:"token punctuation",children:'"'}),"/build/",n(e.span,{className:"token punctuation",children:'"'})]}),n(e.span,{className:"token punctuation",children:">"})]}),`
    `,n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"<"}),"button"]})," ",n(e.span,{className:"token attr-name",children:[n(e.span,{className:"token namespace",children:"on:"}),"click"]}),n(e.span,{className:"token attr-value",children:[n(e.span,{className:"token punctuation attr-equals",children:"="}),n(e.span,{className:"token punctuation",children:'"'}),"./myHandler.js#clickHandler",n(e.span,{className:"token punctuation",children:'"'})]}),n(e.span,{className:"token punctuation",children:">"})]}),"push me",n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"</"}),"button"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
    `,n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"<"}),"script"]}),n(e.span,{className:"token punctuation",children:">"})]}),n(e.span,{className:"token script",children:n(e.span,{className:"token language-javascript",children:[`
      `,n(e.span,{className:"token comment",children:"/* Qwikloader */"}),`
    `]})}),n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"</"}),"script"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
  `,n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"</"}),"body"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
`,n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"</"}),"html"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
`]})}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"The browser downloads the HTML and executes the inlined Qwikloader script. The Qwikloader sets up global listeners for all browser events."}),`
`,n(e.li,{children:["The user clicks on the ",n(e.code,{children:"<button>"}),". The browser generates a ",n(e.code,{children:"click"})," event that bubbles up the DOM until the Qwikloader's global listener intercepts it."]}),`
`,n(e.li,{children:["The Qwikloader retraces the event path and searches for ",n(e.code,{children:"on:click"})," attribute on the elements."]}),`
`,n(e.li,{children:["The Qwikloader uses the ",n(e.code,{children:"on:click"})," and ",n(e.code,{children:"q:base"})," attributes along with the ",n(e.code,{children:"document.baseURI"})," to build a full URL for fetching the lazy-loaded handler. Assuming the original page was served up from ",n(e.code,{children:"http://localhost/"})," the fetch URL becomes ",n(e.code,{children:"http://localhost/build/myHandler.js"}),"."]}),`
`,n(e.li,{children:["Qwikloader retrieves the ",n(e.code,{children:"clickHandler"})," symbol, exported from ",n(e.code,{children:"http://localhost/build/myHandler.js"})," and invokes it."]}),`
`]}),`
`,n(e.h2,{id:"events-and-qwikloader",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#events-and-qwikloader",children:n(e.span,{className:"icon icon-link"})}),"Events and qwikloader"]}),`
`,n(e.p,{children:"The registration of the listener creates two problems in the context of the SSR/SSG that Qwik needs to solve. (For context, remember that Qwik is resumable, that is, it can continue executing the application from where the server paused without being forced to download and execute code eagerly.)"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"listener location"}),": Qwik needs to know where the events are in the HTML which came from the SSR/SSG."]}),`
`,n(e.li,{children:[n(e.strong,{children:"listener code"}),": Qwik needs to know what code should run if the event is triggered."]}),`
`]}),`
`,n(e.p,{children:"Without the above information, Qwik would be forced to download the component template and execute it so that the listener location and closure can be recovered. This process is known as hydration, and Qwik explicitly tries to avoid hydration."}),`
`,n(e.p,{children:["Qwik serializes the event listeners into DOM in the form of ",n(e.a,{href:"/docs/advanced/qrl/",children:"QRLs"}),". For example:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"<"}),"div"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
  `,n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"<"}),"button"]})," ",n(e.span,{className:"token attr-name",children:[n(e.span,{className:"token namespace",children:"on:"}),"click"]}),n(e.span,{className:"token attr-value",children:[n(e.span,{className:"token punctuation attr-equals",children:"="}),n(e.span,{className:"token punctuation",children:'"'}),"./chunk-a.js#Counter_button_onClick[0]",n(e.span,{className:"token punctuation",children:'"'})]}),n(e.span,{className:"token punctuation",children:">"})]}),"0",n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"</"}),"button"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
`,n(e.span,{className:"token tag",children:[n(e.span,{className:"token tag",children:[n(e.span,{className:"token punctuation",children:"</"}),"div"]}),n(e.span,{className:"token punctuation",children:">"})]}),`
`]})}),`
`,n(e.p,{children:["The critical thing to notice is that Qwik generated an ",n(e.code,{children:"on:click"})," attribute, containing the value ",n(e.code,{children:"./chunk-a.js#Counter_button_onClick[0]"}),". In the above example the ",n(e.code,{children:"on:click"})," attribute solves the listener location problem, and the attribute value solves the listener code location problem. By serializing the listeners into the HTML Qwik-applications do not need to perform hydration on startup."]})]})}function r(a={}){const{wrapper:e}=a.components||{};return e?n(e,Object.assign({},a,{children:n(t,a)})):t(a)}export{r as default,c as frontmatter,o as head,l as headings};
