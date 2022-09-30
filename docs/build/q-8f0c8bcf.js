import{i as t,u as o}from"./q-c0df5510.js";const a={title:"Binding Expressions",meta:[],styles:[],links:[]},d={title:"Binding Expressions"};function i(n){const e=Object.assign({p:"p",code:"code",ul:"ul",li:"li"},n.components);return t(o,{children:[t(e.p,{children:["The purpose of components is to merge data with the JSX template. You use the ",t(e.code,{children:"{expression}"})," to inject data into a template. Expressions are placed either as a text node or attribute on an element."]}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["Bind ",t(e.code,{children:"data.name"})," to the ",t(e.code,{children:"value"})," attribute of ",t(e.code,{children:"<input/>"}),"."]}),`
`,t(e.li,{children:["Bind ",t(e.code,{children:"data.description"})," to the content of ",t(e.code,{children:"<textarea/>"}),"."]}),`
`]})]})}function r(n={}){const{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(i,n)})):i(n)}export{r as default,d as frontmatter,a as head};
