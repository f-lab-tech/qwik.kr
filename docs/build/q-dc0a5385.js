import{i as e,u as a}from"./q-c0df5510.js";const o=[{text:"Prefetching",id:"prefetching",level:1},{text:"Collecting Used Symbols",id:"collecting-used-symbols",level:2},{text:"Prefetching Strategy",id:"prefetching-strategy",level:2},{text:"Prefetching Implementation",id:"prefetching-implementation",level:2},{text:"Request/Response Cache and Service Workers",id:"requestresponse-cache-and-service-workers",level:3},{text:"Link rel",id:"link-rel",level:3},{text:"Web Worker Fetch",id:"web-worker-fetch",level:3},{text:"Frequently Asked Prefetching Questions",id:"frequently-asked-prefetching-questions",level:2}],c={title:"Prefetching",meta:[],styles:[],links:[]},s={title:"Prefetching"};function i(n){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",em:"em",h2:"h2",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li"},n.components);return e(a,{children:[e(t.h1,{id:"prefetching",children:[e(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prefetching",children:e(t.span,{className:"icon icon-link"})}),"Prefetching"]}),`
`,e(t.p,{children:["Prefetching is a way for applications to begin downloading modules in a background task, before the user may actually require these modules. The ideal solution is to only prefetch the smallest amount of code that is highly likely to be executed from a user's interaction, but avoiding any JavaScript that's ",e(t.em,{children:"couldn't"})," be used."]}),`
`,e(t.p,{children:"Only downloading and executing a minimal amount of JavaScript is an area where Qwik applications excel. And since Qwik is able to understand how individual components are used (and what's not used), it can also best decide which bundles should be prefetched."}),`
`,e(t.p,{children:["Remember, the ",e(t.a,{href:"/docs/concepts/resumable/",children:"difference between resumability and hydration"}),", is that resumability allows Qwik applications to avoid executing JavaScript just to restore the event listeners, component tree, and application state. By fundamentally breaking apart a component's event listeners, render function, and state, the amount of code to prefetch is also significantly smaller than from a traditional approach."]}),`
`,e(t.h2,{id:"collecting-used-symbols",children:[e(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#collecting-used-symbols",children:e(t.span,{className:"icon icon-link"})}),"Collecting Used Symbols"]}),`
`,e(t.p,{children:[`When Qwik renders an app, it's able to collect which "symbols" were used during the render. A symbol includes various parts of a component, which are `,e(t.a,{href:"/docs/advanced/optimizer/",children:"extracted by the optimizer"})," in order to break apart the application. Individual event listeners, component state, and the component renderer itself are examples of different symbols that could be extracted."]}),`
`,e(t.p,{children:'For example, a product page may have a click listener on the "Add to cart" button, and when this button is clicked, the user should immediately get feedback to show the product added to the cart. In this example, the Qwik optimizer would be able to understand that the only symbol a user could interact with is the "Add to cart" button click event listener.'}),`
`,e(t.p,{children:`For our "Add to cart" example, the optimizer would collect the symbols for only the click event listener, and the renderer for the add to cart widget. It would not, however, have to download, hydrate, and re-render any of the other parts of the application, since it's not even possible to re-render other sections of the page.`}),`
`,e(t.p,{children:"Since Qwik understand what's possible, it's able to prefetch the code only for the event listener rather than all the JavaScript for the entire application or route. This is in contrast to the traditional approach, where prefetching is used to load the entire application or route, and framework code, just in order for the application to add the click event listener."}),`
`,e(t.h2,{id:"prefetching-strategy",children:[e(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prefetching-strategy",children:e(t.span,{className:"icon icon-link"})}),"Prefetching Strategy"]}),`
`,e(t.p,{children:["The prefetching strategy is the logic which decides which JavaScript, if any, Qwik should prefetch in the background. By default, Qwik will prefetch any visible listeners on the page. To configure the prefetching strategy, use the options argument of the ",e(t.code,{children:"renderToStream()"})," function, often found in the ",e(t.code,{children:"src/entry.ssr.tsx"})," source file. Providing optimal prefetching strategies is an area Qwik will continue to research and experiment with."]}),`
`,e(t.pre,{children:e(t.code,{className:"language-ts",children:[e(t.span,{className:"token keyword",children:"export"})," ",e(t.span,{className:"token keyword",children:"default"})," ",e(t.span,{className:"token keyword",children:"function"})," ",e(t.span,{className:"token punctuation",children:"("}),"opts",e(t.span,{className:"token operator",children:":"})," RenderToStreamOptions",e(t.span,{className:"token punctuation",children:")"})," ",e(t.span,{className:"token punctuation",children:"{"}),`
  `,e(t.span,{className:"token keyword",children:"return"})," ",e(t.span,{className:"token function",children:"renderToStream"}),e(t.span,{className:"token punctuation",children:"("}),e(t.span,{className:"token operator",children:"<"}),"Root ",e(t.span,{className:"token operator",children:"/"}),e(t.span,{className:"token operator",children:">"}),e(t.span,{className:"token punctuation",children:","})," ",e(t.span,{className:"token punctuation",children:"{"}),`
    manifest`,e(t.span,{className:"token punctuation",children:","}),`
    prefetchStrategy`,e(t.span,{className:"token operator",children:":"})," ",e(t.span,{className:"token punctuation",children:"{"}),`
      `,e(t.span,{className:"token comment",children:"// custom prefetching config"}),`
    `,e(t.span,{className:"token punctuation",children:"}"}),e(t.span,{className:"token punctuation",children:","}),`
    `,e(t.span,{className:"token operator",children:"..."}),"opts",e(t.span,{className:"token punctuation",children:","}),`
  `,e(t.span,{className:"token punctuation",children:"}"}),e(t.span,{className:"token punctuation",children:")"}),e(t.span,{className:"token punctuation",children:";"}),`
`,e(t.span,{className:"token punctuation",children:"}"}),`
`]})}),`
`,e(t.h2,{id:"prefetching-implementation",children:[e(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prefetching-implementation",children:e(t.span,{className:"icon icon-link"})}),"Prefetching Implementation"]}),`
`,e(t.p,{children:['Browsers offer numerous ways to "implement", or apply, a ',e(t.a,{href:"#prefetching-strategy",children:"prefetching strategy"}),", and Qwik can be configured to prefer one implementation over another, each with their pros and cons. Depending on the configuration, the generated HTML content will include the prefetch implementation."]}),`
`,e(t.pre,{children:e(t.code,{className:"language-ts",children:[e(t.span,{className:"token keyword",children:"export"})," ",e(t.span,{className:"token keyword",children:"default"})," ",e(t.span,{className:"token keyword",children:"function"})," ",e(t.span,{className:"token punctuation",children:"("}),"opts",e(t.span,{className:"token operator",children:":"})," RenderToStreamOptions",e(t.span,{className:"token punctuation",children:")"})," ",e(t.span,{className:"token punctuation",children:"{"}),`
  `,e(t.span,{className:"token keyword",children:"return"})," ",e(t.span,{className:"token function",children:"renderToStream"}),e(t.span,{className:"token punctuation",children:"("}),e(t.span,{className:"token operator",children:"<"}),"Root ",e(t.span,{className:"token operator",children:"/"}),e(t.span,{className:"token operator",children:">"}),e(t.span,{className:"token punctuation",children:","})," ",e(t.span,{className:"token punctuation",children:"{"}),`
    manifest`,e(t.span,{className:"token punctuation",children:","}),`
    prefetchStrategy`,e(t.span,{className:"token operator",children:":"})," ",e(t.span,{className:"token punctuation",children:"{"}),`
      implementation`,e(t.span,{className:"token operator",children:":"})," ",e(t.span,{className:"token punctuation",children:"{"}),`
        `,e(t.span,{className:"token comment",children:"// custom prefetching implementation"}),`
      `,e(t.span,{className:"token punctuation",children:"}"}),e(t.span,{className:"token punctuation",children:","}),`
    `,e(t.span,{className:"token punctuation",children:"}"}),e(t.span,{className:"token punctuation",children:","}),`
    `,e(t.span,{className:"token operator",children:"..."}),"opts",e(t.span,{className:"token punctuation",children:","}),`
  `,e(t.span,{className:"token punctuation",children:"}"}),e(t.span,{className:"token punctuation",children:")"}),e(t.span,{className:"token punctuation",children:";"}),`
`,e(t.span,{className:"token punctuation",children:"}"}),`
`]})}),`
`,e(t.table,{children:[e(t.thead,{children:e(t.tr,{children:[e(t.th,{children:"Option"}),e(t.th,{children:"Description"})]})}),e(t.tbody,{children:[e(t.tr,{children:[e(t.td,{children:e(t.code,{children:"prefetchEvent"})}),e(t.td,{children:["Dispatch a ",e(t.code,{children:"qprefetch"})," event with detailed data containing the urls that should be prefetched. The event dispatch script will be inlined into the document's HTML."]})]}),e(t.tr,{children:[e(t.td,{children:e(t.code,{children:"linkInsert"})}),e(t.td,{children:["Insert the ",e(t.code,{children:"<link>"})," element into the document. When using ",e(t.code,{children:"html-append"}),", it will render each ",e(t.code,{children:"<link>"})," directly within the html, appended at the end of the body. Using the ",e(t.code,{children:"js-append"})," option, it will instead insert some JavaScript, which creates the elements at runtime and appends them at the end of the body."]})]}),e(t.tr,{children:[e(t.td,{children:e(t.code,{children:"linkRel"})}),e(t.td,{children:["This option is used to define the ",e(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types",children:[e(t.code,{children:"rel"})," attribute"]})," of the ",e(t.code,{children:"<link>"})," element. When the ",e(t.code,{children:"linkInsert"})," option is used, the default is ",e(t.code,{children:"prefetch"}),". Other options include ",e(t.code,{children:"preload"})," and ",e(t.code,{children:"modulepreload"}),"."]})]}),e(t.tr,{children:[e(t.td,{children:e(t.code,{children:"workerFetchInsert"})}),e(t.td,{children:["Prefetch urls by calling a ",e(t.code,{children:"fetch()"})," for each module, with the goal that it populate's the network cache."]})]})]})]}),`
`,e(t.h3,{id:"requestresponse-cache-and-service-workers",children:[e(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#requestresponse-cache-and-service-workers",children:e(t.span,{className:"icon icon-link"})}),"Request/Response Cache and Service Workers"]}),`
`,e(t.p,{children:["The preferred caching strategy used by ",e(t.a,{href:"/qwikcity/prefetching/overview/",children:"Qwik City"}),", is to use a Service Worker to populate the browser's ",e(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Cache",children:"Cache"}),". Qwik itself should be configured to use the ",e(t.code,{children:"prefetchEvent"})," implementation, which will dispatch a ",e(t.code,{children:"qprefetch"})," event. Next, Qwik City will listen for this event and communicate with its service worker to persist the Request / Response object pairs so they are cached in long-lived memory."]}),`
`,e(t.p,{children:"By using a service worker to intercept fetch requests from the browser, this approach allows fine-grain caching control, along with preventing multiple-requests for the resource."}),`
`,e(t.h3,{id:"link-rel",children:[e(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#link-rel",children:e(t.span,{className:"icon icon-link"})}),"Link ",e(t.code,{children:"rel"})]}),`
`,e(t.p,{children:["Using the ",e(t.code,{children:"<link>"})," element with the ",e(t.code,{children:"rel"})," attribute is a common approach by today's frameworks, and Qwik can use this method by configuring the ",e(t.code,{children:"linkInsert"})," and ",e(t.code,{children:"linkRel"})," options. The challenge with the link rel approach is lack of support on ",e(t.em,{children:"all"})," devices, at least at the time of writing. Additionally, during development, it can be misleading that it works everywhere; while on mobile devices it is not easily visible that link prefetching is working correctly."]}),`
`,e(t.p,{children:["For example, Safari (the browser powering iPhones and iPads) does not support ",e(t.code,{children:"modulepreload"}),". This is significant because mobile devices maybe benefit the most from module preloading. Next is Firefox, which does not support link rel ",e(t.code,{children:"prefetch"})," when on ",e(t.code,{children:"https"}),"."]}),`
`,e(t.blockquote,{children:[`
`,e(t.p,{children:"Prefetch is a feature that's supposed to help make our visitor's experiences faster but with the wrong combination of browser and CDN / server it can actually make experiences slower!"}),`
`,e(t.p,{children:["- ",e("cite",{children:e("a",{href:"https://andydavies.me/blog/2020/07/08/rel-equals-prefetch-and-the-importance-of-effective-http-slash-2-prioritisation/",children:"Rel=prefetch and the Importance of Effective HTTP/2 Prioritisation"})})]}),`
`]}),`
`,e(t.p,{children:["Additionally, it may be possible to fire off a multiple requests for the same resource. For example, let's say we want to prefetch ",e(t.code,{children:"module-a.js"}),", and while that's being downloaded (which may take a short time, or a very long time), the user interacts with the app, which then decides to actually request and execute ",e(t.code,{children:"module-a.js"}),". At the time of writing, browsers will often fire off a second request, which makes matters worse."]}),`
`,e(t.h3,{id:"web-worker-fetch",children:[e(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#web-worker-fetch",children:e(t.span,{className:"icon icon-link"})}),"Web Worker Fetch"]}),`
`,e(t.p,{children:["A prefetching approach that can work is using a web worker to ",e(t.code,{children:"fetch()"})," a JavaScript file, with the goal of priming the browser cache with the module. By using a web worker, the fetch and logic lives on another thread. Next, the fetch response should have an ",e(t.code,{children:"immutable"})," or long cache-control header, so the browser doesn't make a second network request."]}),`
`,e(t.p,{children:"The downside is the fetched response is thrown away, and it's only at the browser level that hopefully caches the file."}),`
`,e(t.h2,{id:"frequently-asked-prefetching-questions",children:[e(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#frequently-asked-prefetching-questions",children:e(t.span,{className:"icon icon-link"})}),"Frequently Asked Prefetching Questions"]}),`
`,e(t.p,{children:[e(t.strong,{children:"QUESTION"}),": ",e(t.em,{children:"Is lazy loading on user events slow because the user must wait for the code to download?"})]}),`
`,e(t.p,{children:"Yes, that would create a noticeable delay, especially on slow 3G networks. This is why code prefetching is an important part of Qwik applications."}),`
`,e(t.p,{children:"Prefetching code ensures that all of the necessary code for running the application is fetched immediately on navigating to the page. This way, when the user performs an action, the code for that action comes from the prefetch cache rather than the network. The result is that the code execution is instant."}),`
`,e(t.p,{children:[e(t.strong,{children:"QUESTION"}),": ",e(t.em,{children:"Doesn't code prefetch results in the same behavior as existing frameworks that download and execute all of the code eagerly?"})]}),`
`,e(t.p,{children:"No, for several reasons:"}),`
`,e(t.ul,{children:[`
`,e(t.li,{children:["Existing frameworks must download and execute all of the code (",e(t.a,{href:"/docs/concepts/resumable/",children:"hydration"}),") before the application can be interactive. Typically the download of the code is a smaller time cost than the execution of the code."]}),`
`,e(t.li,{children:"Qwik code prefetch only downloads but does not execute the code. Therefore even if Qwik prefetches the same amount of code as the existing frameworks, the result is significant time cost savings."}),`
`,e(t.li,{children:"Qwik only prefetches the code which is needed for the current page. Qwik avoids downloading code associated with components that are static. In the worst case, Qwik prefetches the same amount of code as the existing frameworks' best case. In most cases, Qwik prefetches a small fraction of code compared to the existing frameworks."}),`
`,e(t.li,{children:"Prefetching of code can happen on other threads than the main thread. Many browsers can even pre-parse the AST of the code off the main thread."}),`
`,e(t.li,{children:"If the user interaction happens before the prefetch is completed, the browser will automatically prioritize the interaction chunk before the remaining prefetch chunks."}),`
`,e(t.li,{children:'Qwik can break up the application into many small chunks, and these chunks can be downloaded in the order of probability that the user will interact with them. Existing frameworks have trouble breaking up applications into small chunks, and there is no easy way to prioritize the chunk download order because hydration requires a single "main" entry point to the application.'}),`
`]}),`
`,e(t.p,{children:[e(t.strong,{children:"QUESTION"}),": ",e(t.em,{children:"Who is responsible for knowing what code to prefetch?"})]}),`
`,e(t.p,{children:["Qwik can automatically generate the prefetch instructions as part of the SSR rendering. By executing the application, Qwik has runtime knowledge of which components are visible, which events the users can trigger and what code will need to be downloaded. The result is that the prefetch is an ideal set of files for this page. No action on the developers' part is required other than configuring the ",e(t.code,{children:"renderToStream()"})," with prefetching strategy."]})]})}function h(n={}){const{wrapper:t}=n.components||{};return t?e(t,Object.assign({},n,{children:e(i,n)})):i(n)}export{h as default,s as frontmatter,c as head,o as headings};
