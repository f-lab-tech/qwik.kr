import{i as t,u as r}from"./q-c0df5510.js";const s=[{text:"Grouped Layouts",id:"grouped-layouts",level:1}],c={title:"Qwik City - Grouped Layouts",meta:[],styles:[],links:[]},i={title:"Qwik City - Grouped Layouts"};function n(o){const e=Object.assign({h1:"h1",a:"a",span:"span",p:"p",code:"code",pre:"pre"},o.components);return t(r,{children:[t(e.h1,{id:"grouped-layouts",children:[t(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#grouped-layouts",children:t(e.span,{className:"icon icon-link"})}),"Grouped Layouts"]}),`
`,t(e.p,{children:'Common purpose routes are often placed into directories so they can share layouts, and so related source files are logically grouped next to each other. However, it may be desirable that the directory, which was used to group similar files and share layouts, is excluded from the public-facing URL. This is where "grouped" layouts come in (also referred to as a "pathless" layout route).'}),`
`,t(e.p,{children:["By prefixing any directory name with two underscores ",t(e.code,{children:"__"}),", then the directory name itself will not be included in the URL pathname."]}),`
`,t(e.p,{children:["For example, let's say an app placed all accounts routes together in a directory, however, ",t(e.code,{children:"/account/"})," could be dropped from the URL for cleaner, shorter URLs. In the example below, notice that the paths are within ",t(e.code,{children:"src/routes/__accounts/"})," directory. However, the URL paths exclude ",t(e.code,{children:"__accounts/"}),"."]}),`
`,t(e.pre,{children:t(e.code,{children:`src/
\u2514\u2500\u2500 routes/
    \u2514\u2500\u2500 __accounts/                    # Notice the double underscore prefix
        \u251C\u2500\u2500 layout.tsx                 # Shared account layout
        \u2514\u2500\u2500 profile/
            \u2514\u2500\u2500 index.tsx              # https://example.com/profile
        \u2514\u2500\u2500 settings/
            \u2514\u2500\u2500 index.tsx              # https://example.com/settings
`})})]})}function d(o={}){const{wrapper:e}=o.components||{};return e?t(e,Object.assign({},o,{children:t(n,o)})):n(o)}export{d as default,i as frontmatter,c as head,s as headings};
