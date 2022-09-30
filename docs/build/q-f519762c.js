import{i as e,u as t}from"./q-c0df5510.js";const i=[{text:"Custom Build Output Directory",id:"custom-build-output-directory",level:1},{text:"Wrong Way",id:"wrong-way",level:2},{text:"The Right Way",id:"the-right-way",level:2}],o={title:"Custom Build Output Directory",meta:[],styles:[],links:[]},l={title:"Custom Build Output Directory",fetch:"https://hackmd.io/@ImBIOS/r1qaqsca9"};function s(a){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p",code:"code",h2:"h2",pre:"pre"},a.components);return e(t,{children:[e(n.h1,{id:"custom-build-output-directory",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-build-output-directory",children:e(n.span,{className:"icon icon-link"})}),"Custom Build Output Directory"]}),`
`,e(n.p,{children:["By default, the build output directory for Qwik is the ",e(n.code,{children:"dist"})," folder in the root folder of the project."]}),`
`,e(n.p,{children:"In certain cases, sometimes we need to make the build output directory different from the default package."}),`
`,e(n.h2,{id:"wrong-way",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wrong-way",children:e(n.span,{className:"icon icon-link"})}),"Wrong Way"]}),`
`,e(n.p,{children:"Usually with Vite.js we do it like this:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:[e(n.span,{className:"token comment",children:"// vite.config.js"}),`
`,e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," defineConfig ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'vite'"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," qwikVite ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'@builder.io/qwik/optimizer'"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," qwikCity ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'@builder.io/qwik-city/vite'"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," resolve ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'path'"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token comment",children:"/* VITE_IMPORTS */"}),`

`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"defineConfig"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," pagesDir ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"resolve"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:"'pages'"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
    `,e(n.span,{className:"token comment",children:"/* VITE_CONFIG */"}),`
    `,e(n.span,{className:"token literal-property property",children:"build"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
      `,e(n.span,{className:"token literal-property property",children:"outDir"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:"'../resources/'"}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token comment",children:"// This will be overrided to `dist` by qwikVite() setting"}),`
    `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token literal-property property",children:"plugins"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"["}),`
      `,e(n.span,{className:"token function",children:"qwikCity"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"}),`
        pagesDir`,e(n.span,{className:"token punctuation",children:","}),`
        `,e(n.span,{className:"token literal-property property",children:"layouts"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
          `,e(n.span,{className:"token keyword",children:"default"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token function",children:"resolve"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token string",children:"'src'"}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token string",children:"'layouts'"}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token string",children:"'default'"}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token string",children:"'default.tsx'"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
        `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
      `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
      `,e(n.span,{className:"token function",children:"qwikVite"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token comment",children:"/* VITE_QWIK */"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
      `,e(n.span,{className:"token comment",children:"/* VITE_PLUGINS */"}),`
    `,e(n.span,{className:"token punctuation",children:"]"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.p,{children:["However, it will be overridden by the settings of QwikVite() so nothing happens and the build output directory is still in the ",e(n.code,{children:"dist"})," folder"]}),`
`,e(n.h2,{id:"the-right-way",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-right-way",children:e(n.span,{className:"icon icon-link"})}),"The Right Way"]}),`
`,e(n.p,{children:"So instead of changing the settings in Vite.js directly, we just need to change the settings in QwikVite() like this:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:[e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," defineConfig ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'vite'"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," qwikVite ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'@builder.io/qwik/optimizer'"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"import"})," ",e(n.span,{className:"token punctuation",children:"{"})," qwikCity ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'@builder.io/qwik-city/vite'"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token keyword",children:"import"})," tsconfigPaths ",e(n.span,{className:"token keyword",children:"from"})," ",e(n.span,{className:"token string",children:"'vite-tsconfig-paths'"}),e(n.span,{className:"token punctuation",children:";"}),`

`,e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"defineConfig"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
    ssr`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"{"})," target",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:"'webworker'"}),e(n.span,{className:"token punctuation",children:","})," noExternal",e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token boolean",children:"true"})," ",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
    plugins`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"["}),`
      `,e(n.span,{className:"token function",children:"qwikCity"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
      `,e(n.span,{className:"token function",children:"qwikVite"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"{"}),`
        client`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
          outDir`,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:"'resources/'"}),e(n.span,{className:"token punctuation",children:","})," ",e(n.span,{className:"token comment",children:"// This is the right setting"}),`
        `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
      `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
      `,e(n.span,{className:"token function",children:"tsconfigPaths"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token punctuation",children:"]"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})}),`
`,e(n.p,{children:["So that the output build directory becomes ",e(n.code,{children:"resources"}),", please rename this folder name as needed."]})]})}function r(a={}){const{wrapper:n}=a.components||{};return n?e(n,Object.assign({},a,{children:e(s,a)})):s(a)}export{r as default,l as frontmatter,o as head,i as headings};
