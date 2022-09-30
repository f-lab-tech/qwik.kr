import{i as n,u as i}from"./q-c0df5510.js";const r=[{text:"Containers",id:"containers",level:1},{text:"Containers vs. Components",id:"containers-vs-components",level:2},{text:"What do containers solve?",id:"what-do-containers-solve",level:2},{text:"Routing",id:"routing",level:3},{text:"Micro-frontend",id:"micro-frontend",level:3}],s={title:"Containers",meta:[],styles:[],links:[]},c={title:"Containers"};function a(t){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",ol:"ol",h3:"h3"},t.components);return n(i,{children:[n(e.h1,{id:"containers",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#containers",children:n(e.span,{className:"icon icon-link"})}),"Containers"]}),`
`,n(e.p,{children:"Containers are a way to break up an application into smaller parts. We call these parts containers. Containers brings several benefits. Each container on the page can independently be:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"resumed"}),": Each container can be resumed independently from all other components on the page. Independent resumability further reduces the amount of state which resume deserializes."]}),`
`,n(e.li,{children:[n(e.strong,{children:"updated"}),": Each container can be updated/replaced at any point using ",n(e.code,{children:"innerHTML"}),". This allows a portion of the page to update without forcing a full re-fetch of a complete HTML document without downloading or executing JavaScript."]}),`
`,n(e.li,{children:[n(e.strong,{children:"compiled"}),": Each container can be compiled and deployed separately from other containers. Separate compilation is especially useful for large-scale applications and large-scale teams working on the applications."]}),`
`,n(e.li,{children:[n(e.strong,{children:"versioned"}),": Each container can run a different version of the Qwik framework. Allowing for the composability of the website from many small containers."]}),`
`]}),`
`,n(e.p,{children:"Containers can be nested in a tree and can communicate and share data. The inter-component communication requires that the components have well-defined boundaries, which we call container protocols."}),`
`,n(e.h2,{id:"containers-vs-components",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#containers-vs-components",children:n(e.span,{className:"icon icon-link"})}),"Containers vs. Components"]}),`
`,n(e.p,{children:"Containers sound very similar to components; what are the differences? You can think of a container as a more restricted component. However, components can do a few things which containers can't."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Containers can only have read-only properties passed into them. This restriction is because container inputs may need to be serialized for SSR requests."}),`
`,n(e.li,{children:["Containers don't understand ",n(e.a,{href:"/docs/components/projection/",children:"projection"}),"."]}),`
`,n(e.li,{children:"Containers can't modify the state which has been passed into them."}),`
`]}),`
`,n(e.p,{children:"Components have restrictions:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:"Components must be compiled together and, as a result, share the same bundle artifacts and same Qwik version."}),`
`,n(e.li,{children:"On pause, all of the components in the container are serialized together (and then they are resumed together)."}),`
`]}),`
`,n(e.h2,{id:"what-do-containers-solve",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-do-containers-solve",children:n(e.span,{className:"icon icon-link"})}),"What do containers solve?"]}),`
`,n(e.p,{children:"Containers allow multiple independent Qwik applications to run on the page and behave as a single application to the user. There are two most common use cases:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"Routing"}),`
`,n(e.li,{children:"Micro-frontend architecture"}),`
`]}),`
`,n(e.h3,{id:"routing",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#routing",children:n(e.span,{className:"icon icon-link"})}),"Routing"]}),`
`,n(e.p,{children:"A typical site is composed of two logical parts:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"The navigation that tends to stay constant across many pages."}),`
`,n(e.li,{children:"The outlet, which is the part of the page that changes based on which route the user navigated to."}),`
`]}),`
`,n(e.p,{children:"We can model the two parts as two navigation and outlet containers. When the user first navigates to a route, the server responds with HTML, that contains containers for both the navigation and the outlet. Once the user navigates to the second route, there are three ways to solve the navigation:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"The simplistic approach is to make a full round trip and download an entirely new page. The main downside is that the application loses all of its states on the client."}),`
`,n(e.li,{children:"The classical approach is to treat any further navigation in JavaScript. We replace the current outlet component with the new outlet component and let the new component render. The disadvantage is that we need to download and execute the JavaScript."}),`
`,n(e.li,{children:"The Qwik approach treats the navigation and the outlet as two different containers. The first navigation downloads HTML representing the full page (with both containers). The subsequent navigation fetches the HTML only for the outlet container. This approach is the best of both worlds. The navigation is fast (no JavaScript download or execution), and the application keeps its state in the parent container."}),`
`]}),`
`,n(e.h3,{id:"micro-frontend",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#micro-frontend",children:n(e.span,{className:"icon icon-link"})}),"Micro-frontend"]}),`
`,n(e.p,{children:"When an application gets very large, it becomes impractical to think of it as a single application. A better mental model is that many applications work together to give the user the impression of a single application."}),`
`,n(e.p,{children:"For large apps, the teams also become large. Large teams usually have different goals and, as a result, different release schedules."}),`
`,n(e.p,{children:"Containers allow a large team to break up the application into many smaller parts and treat each part as a unit with a separate deployment, testing, and version upgrade schedule."}),`
`,n(e.p,{children:"Teams break up the application into containers and clearly define protocols between the containers. As long as the protocols are satisfied, each team can deploy the two containers independently."})]})}function l(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(a,t)})):a(t)}export{l as default,c as frontmatter,s as head,r as headings};
