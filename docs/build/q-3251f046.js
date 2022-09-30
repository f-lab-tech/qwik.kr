import{i as e,u as a}from"./q-c0df5510.js";const r=[{text:"Getting Started Qwikly",id:"getting-started-qwikly",level:1},{text:"Prerequisites",id:"prerequisites",level:2},{text:"Creating an app using the CLI",id:"creating-an-app-using-the-cli",level:2},{text:"Run the Qwik CLI in your shell",id:"run-the-qwik-cli-in-your-shell",level:3},{text:"Running in development",id:"running-in-development",level:2},{text:"Commands",id:"commands",level:2}],c={title:"Getting Started",meta:[],styles:[],links:[]},s={title:"Getting Started",fetch:"https://hackmd.io/@mhevery/S1_pV3Cl9"};function t(i){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre",code:"code",ol:"ol"},i.components);return e(a,{children:[e(n.h1,{id:"getting-started-qwikly",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started-qwikly",children:e(n.span,{className:"icon icon-link"})}),"Getting Started Qwikly"]}),`
`,e(n.p,{children:["Qwik is a new kind of framework that is ",e(n.a,{href:"/docs/concepts/resumable/",children:"resumable"})," (no JS and no hydration), built for the edge and ",e(n.a,{href:"/docs/cheat/qwik-react/",children:"familiar for React developers"}),"."]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://qwik.new",children:"Stackblitz Qwik + Vite"})}),`
`,e(n.li,{children:e(n.a,{href:"/examples/reactivity/counter/",children:"Examples playground"})}),`
`]}),`
`,e(n.h2,{id:"prerequisites",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prerequisites",children:e(n.span,{className:"icon icon-link"})}),"Prerequisites"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.a,{href:"https://nodejs.org/en/download/",children:"node.js v14"})," or higher"]}),`
`,e(n.li,{children:["Your favorite IDE (",e(n.a,{href:"https://code.visualstudio.com/",children:"vscode"})," recommended)"]}),`
`,e(n.li,{children:["Start to ",e(n.a,{href:"/docs/think-qwik/",children:"think qwik"})]}),`
`]}),`
`,e(n.h2,{id:"creating-an-app-using-the-cli",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creating-an-app-using-the-cli",children:e(n.span,{className:"icon icon-link"})}),"Creating an app using the CLI"]}),`
`,e(n.p,{children:"The first step is to create an application. Qwik comes with a CLI that allows you to create a basic working skeleton of an application. We will use the CLI to create a blank starter so that you can quickly familiarize yourself with it."}),`
`,e(n.h3,{id:"run-the-qwik-cli-in-your-shell",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#run-the-qwik-cli-in-your-shell",children:e(n.span,{className:"icon icon-link"})}),"Run the Qwik CLI in your shell"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-shell",children:[e(n.span,{className:"token function",children:"npm"}),` create qwik@latest
`]})}),`
`,e(n.p,{children:"The CLI will guide you through an interactive menu to set the project-name and select one of the starters:"}),`
`,e("script",{id:"asciicast-514542",src:"https://asciinema.org/a/514542.js",async:!0}),`
`,e(n.p,{children:"After your new app is created, you will see an output like the following in your terminal:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-shell",children:[`\u{1F4AB} Let's create a Qwik app \u{1F4AB}

\u2714 Project name \u2026 qwik-app
\u2714 Select a starter \u203A Blank
\u2714 Features \u203A Prettier

\u2B50\uFE0F Success`,e(n.span,{className:"token operator",children:"!"})," Project saved ",e(n.span,{className:"token keyword",children:"in"}),` qwik-app directory

\u{1F916} Next steps:
   `,e(n.span,{className:"token builtin class-name",children:"cd"}),` qwik-app
   `,e(n.span,{className:"token function",children:"npm"})," ",e(n.span,{className:"token function",children:"install"}),`
   `,e(n.span,{className:"token function",children:"npm"}),` start

\u{1F4AC} Questions? Start the conversation at:
   https://qwik.builder.io/chat
   https://twitter.com/QwikDev
`]})}),`
`,e(n.p,{children:["At this point, you will have ",e(n.code,{children:"qwik-app"})," directory, that contains the starter app."]}),`
`,e(n.h2,{id:"running-in-development",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#running-in-development",children:e(n.span,{className:"icon icon-link"})}),"Running in development"]}),`
`,e(n.p,{children:"Once the application is download."}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:["Change into the directory created by the ",e(n.code,{children:"npm create qwik@latest"}),"."]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-shell",children:[e(n.span,{className:"token builtin class-name",children:"cd"}),` qwik-app
`]})}),`
`,e(n.ol,{start:"2",children:[`
`,e(n.li,{children:"Install NPM modules:"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-shell",children:[e(n.span,{className:"token function",children:"npm"})," ",e(n.span,{className:"token function",children:"install"}),`
`]})}),`
`,e(n.ol,{start:"3",children:[`
`,e(n.li,{children:"Invoke the dev server"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-shell",children:[e(n.span,{className:"token function",children:"npm"}),` start
`]})}),`
`,e(n.ol,{start:"4",children:[`
`,e(n.li,{children:"You should see a server running with your To-do application"}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-shell",children:[`
  VITE v3.0.2  ready `,e(n.span,{className:"token keyword",children:"in"})," ",e(n.span,{className:"token number",children:"140"}),` ms

  \u279C  Local:   http://localhost:5174/
  \u279C  Network: use `,e(n.span,{className:"token parameter variable",children:"--host"}),` to expose

`]})}),`
`,e(n.ol,{start:"5",children:[`
`,e(n.li,{children:["Visit ",e(n.a,{href:"http://localhost:5174/",children:"http://localhost:5174/"})," to explore the app."]}),`
`]}),`
`,e(n.h2,{id:"commands",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#commands",children:e(n.span,{className:"icon icon-link"})}),"Commands"]}),`
`,e(n.p,{children:["Here are some useful commands to get you started. For a complete list please refer to ",e(n.code,{children:"package.json"}),"."]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"npm start"}),": alias to ",e(n.code,{children:"npm run dev"})," (this currently defaults to running dev.ssr)"]}),`
`,e(n.li,{children:[e(n.code,{children:"npm run dev.client"}),": starts the dev server in client bootstrap mode"]}),`
`,e(n.li,{children:[e(n.code,{children:"npm run dev.ssr"}),": starts the dev server with SSR"]}),`
`,e(n.li,{children:[e(n.code,{children:"npm run build"}),": builds the application for production"]}),`
`]})]})}function d(i={}){const{wrapper:n}=i.components||{};return n?e(n,Object.assign({},i,{children:e(t,i)})):t(i)}export{d as default,s as frontmatter,c as head,r as headings};
