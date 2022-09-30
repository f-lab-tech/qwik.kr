import{i as e,u as s}from"./q-c0df5510.js";const o=[{text:"Menu",id:"menu",level:1},{text:"File Structure",id:"file-structure",level:2},{text:"Declaring Menu Structure",id:"declaring-menu-structure",level:2},{text:"Retrieving Menu Structure",id:"retrieving-menu-structure",level:2},{text:"Using ContentMenu in a layout",id:"using-contentmenu-in-a-layout",level:2}],r={title:"Qwik City - Menu",meta:[],styles:[],links:[]},l={title:"Qwik City - Menu"};function t(a){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ol:"ol",li:"li",code:"code",h2:"h2",pre:"pre",ul:"ul"},a.components);return e(s,{children:[e(n.h1,{id:"menu",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#menu",children:e(n.span,{className:"icon icon-link"})}),"Menu"]}),`
`,e(n.p,{children:"Menus allow you to describe the site navigation structure in a simple declarative way. Menus come in two steps:"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:["Defining a ",e(n.code,{children:"menu.md"})," file that contains the menu structure for the directory it's in."]}),`
`,e(n.li,{children:["Using the ",e(n.code,{children:"useContent()"})," function to retrieve the menu structure in a template for rendering. ",e(n.a,{href:"/qwikcity/api/use-content/",children:"Read more here"})]}),`
`]}),`
`,e(n.h2,{id:"file-structure",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#file-structure",children:e(n.span,{className:"icon icon-link"})}),"File Structure"]}),`
`,e(n.p,{children:"First layout files as follows:"}),`
`,e(n.pre,{children:e(n.code,{children:`src/
\u2514\u2500\u2500 routes/
    \u2514\u2500\u2500 some/
        \u251C\u2500\u2500 menu.md
        \u251C\u2500\u2500 layout.tsx
        \u2514\u2500\u2500 path/
            \u2514\u2500\u2500 index.tsx  # https://example.com/some/path
`})}),`
`,e(n.p,{children:["Navigating to ",e(n.code,{children:"https://example.com/some/path"})," activates:"]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:[e(n.code,{children:"src/routes/some/path/index.tsx"}),": This component will be used for rendering the page content."]}),`
`,e(n.li,{children:[e(n.code,{children:"src/routes/some/layout.tsx"}),": This layout will be used to provide content around the ",e(n.code,{children:"src/routes/some/path/index.tsx"}),". Internally the layout can use ",e(n.code,{children:"src/routes/some/menu.md"})," to render the menus."]}),`
`,e(n.li,{children:[e(n.code,{children:"src/routes/some/menu.md"}),": This file will be used to declare the menu structure which will be rendered by ",e(n.code,{children:"src/routes/some/layout.tsx"}),"."]}),`
`]}),`
`,e(n.h2,{id:"declaring-menu-structure",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#declaring-menu-structure",children:e(n.span,{className:"icon icon-link"})}),"Declaring Menu Structure"]}),`
`,e(n.p,{children:["Use ",e(n.code,{children:"menu.md"})," to declare the menu structure."]}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Use the headings (",e(n.code,{children:"#"}),", ",e(n.code,{children:"##"}),", etc..) to define menu depth"]}),`
`,e(n.li,{children:["Use the bulleted list (",e(n.code,{children:"-"}),") to define menu items."]}),`
`]}),`
`,e(n.pre,{children:e(n.code,{className:"language-markdown",children:[e(n.span,{className:"token comment",children:"<!-- File: src/routes/some/menu.md -->"}),`

`,e(n.span,{className:"token title important",children:[e(n.span,{className:"token punctuation",children:"#"})," Docs"]}),`

`,e(n.span,{className:"token title important",children:[e(n.span,{className:"token punctuation",children:"##"})," Getting Started"]}),`

`,e(n.span,{className:"token list punctuation",children:"-"})," ",e(n.span,{className:"token url",children:["[",e(n.span,{className:"token content",children:"Introduction"}),"](",e(n.span,{className:"token url",children:"introduction/index.md"}),")"]}),`

`,e(n.span,{className:"token title important",children:[e(n.span,{className:"token punctuation",children:"##"})," Components"]}),`

`,e(n.span,{className:"token list punctuation",children:"-"})," ",e(n.span,{className:"token url",children:["[",e(n.span,{className:"token content",children:"Basics"}),"](",e(n.span,{className:"token url",children:"/docs/components/basics/index.mdx"}),")"]}),`
`]})}),`
`,e(n.h2,{id:"retrieving-menu-structure",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#retrieving-menu-structure",children:e(n.span,{className:"icon icon-link"})}),"Retrieving Menu Structure"]}),`
`,e(n.p,{children:["At runtime, any component can retrieve the menu with ",e(n.code,{children:"useContent()"})," hook. The type returned is ",e(n.code,{children:"ContentMenu"}),"."]}),`
`,e(n.p,{children:"The example above will return:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-javascript",children:[e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token literal-property property",children:"text"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"Docs"'}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token literal-property property",children:"items"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"["}),`
    `,e(n.span,{className:"token punctuation",children:"{"}),`
      `,e(n.span,{className:"token literal-property property",children:"text"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"Getting Started"'}),e(n.span,{className:"token punctuation",children:","}),`
      `,e(n.span,{className:"token literal-property property",children:"items"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"["}),`
        `,e(n.span,{className:"token punctuation",children:"{"}),`
          `,e(n.span,{className:"token literal-property property",children:"text"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"Introduction"'}),e(n.span,{className:"token punctuation",children:","}),`
          `,e(n.span,{className:"token literal-property property",children:"href"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"/docs/introduction"'}),`
        `,e(n.span,{className:"token punctuation",children:"}"}),`
      `,e(n.span,{className:"token punctuation",children:"]"}),e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token punctuation",children:"{"}),`
      `,e(n.span,{className:"token literal-property property",children:"text"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"Components"'}),e(n.span,{className:"token punctuation",children:","}),`
      `,e(n.span,{className:"token literal-property property",children:"items"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token punctuation",children:"["}),`
        `,e(n.span,{className:"token punctuation",children:"{"}),`
          `,e(n.span,{className:"token literal-property property",children:"text"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"Basics"'}),e(n.span,{className:"token punctuation",children:","}),`
          `,e(n.span,{className:"token literal-property property",children:"href"}),e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token string",children:'"/docs/components/basics"'}),`
        `,e(n.span,{className:"token punctuation",children:"}"}),`
      `,e(n.span,{className:"token punctuation",children:"]"}),e(n.span,{className:"token punctuation",children:","}),`
    `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:","}),`
  `,e(n.span,{className:"token punctuation",children:"]"}),e(n.span,{className:"token punctuation",children:","}),`
`,e(n.span,{className:"token punctuation",children:"}"}),`
`]})}),`
`,e(n.h2,{id:"using-contentmenu-in-a-layout",children:[e(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-contentmenu-in-a-layout",children:e(n.span,{className:"icon icon-link"})}),"Using ",e(n.code,{children:"ContentMenu"})," in a layout"]}),`
`,e(n.p,{children:["While ",e(n.code,{children:"useContent()"})," can be invoked from any component that is part of the current route. It is typically used in a layout component (or a component used by layout) to render the menu. An example usage is shown here:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:[e(n.span,{className:"token keyword",children:"export"})," ",e(n.span,{className:"token keyword",children:"default"})," ",e(n.span,{className:"token function",children:"component$"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"{"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," ",e(n.span,{className:"token punctuation",children:"{"})," menu ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"useContent"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
  `,e(n.span,{className:"token keyword",children:"const"})," ",e(n.span,{className:"token punctuation",children:"{"})," pathname ",e(n.span,{className:"token punctuation",children:"}"})," ",e(n.span,{className:"token operator",children:"="})," ",e(n.span,{className:"token function",children:"useLocation"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`

  `,e(n.span,{className:"token keyword",children:"return"})," ",e(n.span,{className:"token punctuation",children:"("}),`
    `,e(n.span,{className:"token operator",children:"<"}),"div ",e(n.span,{className:"token keyword",children:"class"}),e(n.span,{className:"token operator",children:"="}),e(n.span,{className:"token string",children:'"menu"'}),e(n.span,{className:"token operator",children:">"}),`
      `,e(n.span,{className:"token punctuation",children:"{"}),`menu
        `,e(n.span,{className:"token operator",children:"?"})," menu",e(n.span,{className:"token punctuation",children:"."}),"items",e(n.span,{className:"token operator",children:"?."}),e(n.span,{className:"token function",children:"map"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),"item",e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
            `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:">"}),`
              `,e(n.span,{className:"token operator",children:"<"}),"h5",e(n.span,{className:"token operator",children:">"}),e(n.span,{className:"token punctuation",children:"{"}),"item",e(n.span,{className:"token punctuation",children:"."}),"text",e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"h5",e(n.span,{className:"token operator",children:">"}),`
              `,e(n.span,{className:"token operator",children:"<"}),"ul",e(n.span,{className:"token operator",children:">"}),`
                `,e(n.span,{className:"token punctuation",children:"{"}),"item",e(n.span,{className:"token punctuation",children:"."}),"items",e(n.span,{className:"token operator",children:"?."}),e(n.span,{className:"token function",children:"map"}),e(n.span,{className:"token punctuation",children:"("}),e(n.span,{className:"token punctuation",children:"("}),"item",e(n.span,{className:"token punctuation",children:")"})," ",e(n.span,{className:"token operator",children:"=>"})," ",e(n.span,{className:"token punctuation",children:"("}),`
                  `,e(n.span,{className:"token operator",children:"<"}),"li",e(n.span,{className:"token operator",children:">"}),`
                    `,e(n.span,{className:"token operator",children:"<"}),`a
                      href`,e(n.span,{className:"token operator",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),"item",e(n.span,{className:"token punctuation",children:"."}),"href",e(n.span,{className:"token punctuation",children:"}"}),`
                      `,e(n.span,{className:"token keyword",children:"class"}),e(n.span,{className:"token operator",children:"="}),e(n.span,{className:"token punctuation",children:"{"}),e(n.span,{className:"token punctuation",children:"{"}),`
                        `,e(n.span,{className:"token string-property property",children:"'is-active'"}),e(n.span,{className:"token operator",children:":"})," pathname ",e(n.span,{className:"token operator",children:"==="})," item",e(n.span,{className:"token punctuation",children:"."}),"href",e(n.span,{className:"token punctuation",children:","}),`
                      `,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:"}"}),`
                    `,e(n.span,{className:"token operator",children:">"}),`
                      `,e(n.span,{className:"token punctuation",children:"{"}),"item",e(n.span,{className:"token punctuation",children:"."}),"text",e(n.span,{className:"token punctuation",children:"}"}),`
                    `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"a",e(n.span,{className:"token operator",children:">"}),`
                  `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"li",e(n.span,{className:"token operator",children:">"}),`
                `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:"}"}),`
              `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"ul",e(n.span,{className:"token operator",children:">"}),`
            `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),e(n.span,{className:"token operator",children:">"}),`
          `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:")"}),`
        `,e(n.span,{className:"token operator",children:":"})," ",e(n.span,{className:"token keyword",children:"null"}),e(n.span,{className:"token punctuation",children:"}"}),`
    `,e(n.span,{className:"token operator",children:"<"}),e(n.span,{className:"token operator",children:"/"}),"div",e(n.span,{className:"token operator",children:">"}),`
  `,e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`,e(n.span,{className:"token punctuation",children:"}"}),e(n.span,{className:"token punctuation",children:")"}),e(n.span,{className:"token punctuation",children:";"}),`
`]})})]})}function i(a={}){const{wrapper:n}=a.components||{};return n?e(n,Object.assign({},a,{children:e(t,a)})):t(a)}export{i as default,l as frontmatter,r as head,o as headings};
