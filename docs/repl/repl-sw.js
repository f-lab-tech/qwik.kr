const w="@builder.io/qwik",k="2.75.6",b="2.7.1",y="5.14.1",S="QwikReplDeps",E="QwikReplResults",h=async(t,s,e,r)=>{const n=z(s,e,r),o=await t.match(n);if(o)return o;const l=await fetch(n);if(l.ok)return n.url.includes("localhost")||await t.put(n,l.clone()),l},v=async(t,s,e,r)=>{const n=await h(t,s,e,r);if(n)console.debug(`Run: ${n.url}`),new Function(await n.clone().text())();else throw new Error(`Unable to run: ${L(s,e,r)}`)},P=async t=>{var r,n,o,l,d;const s=t.version,e=await caches.open(S);if(await Promise.all([h(e,w,s,"/core.cjs"),h(e,w,s,"/core.mjs"),h(e,w,s,"/core.min.mjs"),h(e,w,s,"/optimizer.cjs"),h(e,w,s,"/server.cjs"),h(e,"rollup",k,"/dist/rollup.browser.js"),h(e,"prettier",b,"/standalone.js"),h(e,"prettier",b,"/parser-html.js")]),!R((r=self.qwikCore)==null?void 0:r.version,s))if(await v(e,w,s,"/core.cjs"),self.qwikCore)console.debug(`Loaded @builder.io/qwik: ${self.qwikCore.version}`);else throw new Error(`Unable to load @builder.io/qwik ${s}`);if(!R((n=self.qwikOptimizer)==null?void 0:n.versions.qwik,s))if(await v(e,w,s,"/optimizer.cjs"),self.qwikOptimizer)console.debug(`Loaded @builder.io/qwik/optimizer: ${self.qwikOptimizer.versions.qwik}`);else throw new Error(`Unable to load @builder.io/qwik/optimizer ${s}`);if(!R((o=self.qwikServer)==null?void 0:o.versions.qwik,s))if(await v(e,w,s,"/server.cjs"),self.qwikServer)console.debug(`Loaded @builder.io/qwik/server: ${self.qwikServer.versions.qwik}`);else throw new Error(`Unable to load @builder.io/qwik/server ${s}`);if(((l=self.rollup)==null?void 0:l.VERSION)!==k)if(await v(e,"rollup",k,"/dist/rollup.browser.js"),self.rollup)console.debug(`Loaded rollup: ${self.rollup.VERSION}`);else throw new Error(`Unable to load rollup ${k}`);if(((d=self.prettier)==null?void 0:d.version)!==b)if(await v(e,"prettier",b,"/standalone.js"),await v(e,"prettier",b,"/parser-html.js"),self.prettier)console.debug(`Loaded prettier: ${self.prettier.version}`);else throw new Error(`Unable to load prettier ${b}`);if(t.buildMode==="production"&&!self.Terser)if(await h(e,"terser",y,"/dist/bundle.min.js"),await v(e,"terser",y,"/dist/bundle.min.js"),self.Terser)console.debug(`Loaded terser: ${y}`);else throw new Error(`Unable to load terser ${y}`);e.keys().then(f=>{if(f.length>30)for(let a=0;a<5;a++)e.delete(f[a])})},z=(t,s,e)=>new Request(L(t,s,e)),L=(t,s,e)=>`https://cdn.jsdelivr.net/npm/${t}${s?"@"+s:""}${e}`,R=(t,s)=>!(!t||t!==s&&!t.includes("-dev")&&!s.includes("-dev")),M=(t,s)=>({name:"repl-resolver",resolveId(e,r){return r?e==="@builder.io/qwik"||e==="@builder.io/qwik/jsx-runtime"||e==="@builder.io/qwik/jsx-dev-runtime"?"\0qwikCore":e==="@builder.io/qwik/server"?"\0qwikServer":{id:e,external:!0}:e},async load(e){const r=t.srcInputs.find(n=>n.path===e);if(r&&typeof r.code=="string")return r.code;if(s==="ssr"){if(e==="\0qwikCore")return x("qwikCore");if(e==="\0qwikServer")return x("qwikServer")}if(e==="\0qwikCore"){const n=await caches.open(S);if(t.buildMode==="production"){const l=await h(n,"@builder.io/qwik",t.version,"/core.min.mjs");if(l)return l.clone().text()}const o=await h(n,"@builder.io/qwik",t.version,"/core.mjs");if(o)return o.clone().text();throw new Error("Unable to load Qwik core")}return null}}),x=t=>{const s=self[t];if(!s)throw new Error(`Unable to load Qwik runtime bundle "${t}"`);const e=Object.keys(s);return`
    const { ${e.join(", ")} } = self.${t};
    export { ${e.join(", ")} };
  `},$=t=>({name:"repl-css",resolveId(s){return s.endsWith(".css")?s.startsWith(".")?s.slice(1):s:null},load(s){if(s.endsWith(".css")){const e=t.srcInputs.find(r=>r.path.endsWith(s));if(e&&typeof e.code=="string")return`const css = ${JSON.stringify(e.code)}; export default css;`}return null}}),Q=t=>({name:"repl-minify",async generateBundle(s,e){var r;if(t.buildMode==="production")for(const n in e){const o=e[n];if(o.type==="chunk"){const l=await((r=self.Terser)==null?void 0:r.minify(o.code,A));l&&(o.code=l.code)}}}}),A={ecma:2020,module:!0,toplevel:!0},B=async(t,s,e)=>{var f,a;const r=performance.now(),n={target:"client",buildMode:t.buildMode,debug:t.debug,srcInputs:O(t),entryStrategy:t.entryStrategy,manifestOutput:i=>{e.manifest=i},transformedModuleOutput:i=>{e.transformedModules=i}};console.debug("client opts",n);const o=t.srcInputs.find(i=>i.path.endsWith("app.tsx"));if(!o)throw new Error('Missing client entry "app.tsx"');const l={input:o.path,cache:self.rollupCache,plugins:[$(t),(f=self.qwikOptimizer)==null?void 0:f.qwikRollup(n),M(t,"client"),Q(t)],onwarn(i){var m;const c={scope:"rollup-ssr",code:(m=i.code)!=null?m:null,message:i.message,category:"warning",highlights:[],file:i.id||"",suggestions:null},u=i.loc;u&&u.file&&(c.file=u.file,c.highlights.push({startCol:u.column,endCol:u.column+1,startLine:u.line,endLine:u.line+1,lo:0,hi:0})),e.diagnostics.push(c)}},d=await((a=self.rollup)==null?void 0:a.rollup(l));if(d){self.rollupCache=d.cache;const i=await d.generate({sourcemap:!1});e.clientBundles=i.output.map(U).filter(c=>!c.path.endsWith("app.js")&&!c.path.endsWith("q-manifest.json")),await Promise.all(e.clientBundles.map(async c=>{const u=new URL("/repl/"+e.clientId+"/"+c.path,t.serverUrl),m=new Request(u.href),q=new Response(c.code,{headers:{"Content-Type":"application/javascript; charset=utf-8","Cache-Control":"no-store, no-cache, max-age=0","X-Qwik-REPL-App":"ssr-result"}});await s.put(m,q)})),s.keys().then(c=>{if(c.length>500)for(let u=0;u<25;u++)s.delete(c[u])})}e.transformedModules=e.transformedModules.filter(i=>!i.path.endsWith("app.js")&&!i.path.endsWith("entry.server.js")&&!i.path.endsWith("root.js")),e.events.push({kind:"console-log",scope:"build",start:r,end:performance.now(),message:["Build Client"]})},O=t=>t.srcInputs.filter(s=>D.some(e=>s.path.endsWith(e))),D=[".tsx",".ts",".js",".jsx",".mjs"],U=t=>{const s={path:t.fileName,code:"",size:""};return t.type==="chunk"?s.code=t.code||"":t.type==="asset"&&(s.code=String(t.source||"")),s.size=`${s.code.length} B`,s},H=async(t,s)=>{var d,f;const e=performance.now(),r={target:"ssr",buildMode:t.buildMode,debug:t.debug,srcInputs:O(t),entryStrategy:{type:"inline"},manifestInput:s.manifest};console.debug("ssr opts",r);const n=t.srcInputs.find(a=>a.path.endsWith("entry.server.tsx"));if(!n)throw new Error('Missing SSR entry "entry.server.tsx"');const o={input:n.path,cache:self.rollupCache,plugins:[$(t),(d=self.qwikOptimizer)==null?void 0:d.qwikRollup(r),M(t,"ssr")],onwarn(a){var u;const i={scope:"rollup-ssr",code:(u=a.code)!=null?u:null,message:a.message,category:"warning",highlights:[],file:a.id||"",suggestions:null},c=a.loc;c&&c.file&&(i.file=c.file,i.highlights.push({startCol:c.column,endCol:c.column+1,startLine:c.line,endLine:c.line+1,lo:0,hi:0})),s.diagnostics.push(i)}},l=await((f=self.rollup)==null?void 0:f.rollup(o));if(l){self.rollupCache=l.cache;const a=await l.generate({format:"cjs",inlineDynamicImports:!0,sourcemap:!1});s.ssrModules=a.output.map(U),s.ssrModules.push({path:"q-manifest.json",code:JSON.stringify(s.manifest,null,2)})}s.events.push({kind:"console-log",scope:"build",start:e,end:performance.now(),message:["Build SSR"]})},K=async(t,s,e)=>{var C,I;const r=e.ssrModules.find(p=>p.path.endsWith(".js"));if(!r||typeof r.code!="string")return;const n=performance.now(),o={exports:{}};new Function("module","exports","require",r.code)(o,o.exports,F);const d=o.exports,f=typeof d=="function"?d:(C=d.default)!=null?C:d.render;if(typeof f!="function")throw new Error(`Server module "${r.path}" does not export render()`);const a=console.log,i=console.warn,c=console.error,u=console.debug;console.log=(...p)=>{e.events.push({kind:"console-log",scope:"ssr",message:p.map(g=>String(g)),start:performance.now()}),a(...p)},console.warn=(...p)=>{e.events.push({kind:"console-warn",scope:"ssr",message:p.map(g=>String(g)),start:performance.now()}),i(...p)},console.error=(...p)=>{e.events.push({kind:"console-error",scope:"ssr",message:p.map(g=>String(g)),start:performance.now()})},console.debug=(...p)=>{e.events.push({kind:"console-debug",scope:"ssr",message:p.map(g=>String(g)),start:performance.now()}),u(...p)};const m="/repl/"+e.clientId+"/",q=m+"build/",j=await f({base:q,manifest:e.manifest,prefetchStrategy:null});if(console.log=a,console.warn=i,console.error=c,console.debug=u,e.html=j.html,e.events.push({kind:"pause",scope:"ssr",start:n,end:performance.now(),message:[]}),t.buildMode!=="production")try{const p=(I=self.prettier)==null?void 0:I.format(e.html,{parser:"html",plugins:self.prettierPlugins});p&&(e.html=p)}catch(p){console.error(p)}const T=new URL(m,t.serverUrl),N=new Request(T.href),_=new Response(j.html,{headers:{"Content-Type":"text/html; charset=utf-8"}});await s.put(N,_)},F=t=>{console.debug(`require() not available from REPL SSR, path: ${t}`)},J=async(t,s)=>{const e={type:"result",clientId:t,buildId:s.buildId,html:"",transformedModules:[],clientBundles:[],manifest:void 0,ssrModules:[],diagnostics:[],events:[]};try{await P(s);const r=await caches.open(E);await B(s,r,e),await H(s,e),await K(s,r,e)}catch(r){e.diagnostics.push({scope:"runtime",message:String(r.stack||r),category:"error",file:"",highlights:[],suggestions:null,code:"runtime error"}),console.error(r)}await W(e)},V=t=>{if(t.data){const s=JSON.parse(t.data);s.type==="update"&&J(s.clientId,s.options)}},W=async t=>{const s=await self.clients.matchAll();for(const e of s)if(e&&e.url){const n=new URL(e.url).hash.split("#")[1];if(n&&n===t.clientId){e.postMessage(t);break}}},X=async t=>{const s=new URL(t.request.url),e=s.pathname,r=e.split("/"),n=r[1],o=r[2];if(!(n!=="repl"||e.includes("/~repl-server")||e==="/repl/repl-sw.js"))return t.respondWith(caches.open(E).then(async l=>{var f;const d=await l.match(t.request);if(d){if((f=d.headers.get("Content-Type"))!=null&&f.includes("text/html")){const i=G(o,await d.clone().text());return new Response(i,{headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store,no-cache,max-age=0","X-Qwik-REPL-App":"ssr-result"}})}const a={type:"event",clientId:o,event:{kind:"client-module",scope:"network",message:[s.pathname+s.search],start:performance.now()}};return W(a),d}return new Response("404 - "+t.request.url,{headers:{"Content-Type":"text/plain; charset=utf-8","Cache-Control":"no-store, no-cache, max-age=0","X-Qwik-REPL-App":"Not-Found"},status:404})}).catch(l=>console.error(l)))},G=(t,s)=>`<script>${`
(() => {
  const sendToServerWindow = (data) => {
    try {
      parent.postMessage(JSON.stringify({
        type: 'event',
        clientId: '${t}',
        event: data
      }));
    } catch {}
  };

  const log = console.log;
  const warn = console.warn;
  const error = console.error;

  console.log = (...args) => {
    sendToServerWindow({
      kind: 'console-log',
      scope: 'client',
      message: args.map(a => String(a)),
      start: performance.now(),
    });
    log(...args);
  };

  console.warn = (...args) => {
    sendToServerWindow({
      kind: 'console-warn',
      scope: 'client',
      message: args.map(a => String(a)),
      start: performance.now(),
    });
    warn(...args);
  };

  console.error = (...args) => {
    sendToServerWindow({
      kind: 'console-error',
      scope: 'client',
      message: args.map(a => String(a)),
      start: performance.now(),
    });
    error(...args);
  };

  window.addEventListener('error', (ev) => {
    sendToServerWindow({
      kind: 'error',
      scope: 'client',
      message: [ev.message],
      start: performance.now(),
    });
  });

  document.addEventListener('qsymbol', (ev) => {
    const symbolName = ev.detail;
    sendToServerWindow({
      kind: 'symbol',
      scope: 'client',
      message: [symbolName],
      start: performance.now(),
    });
  });

  document.addEventListener('qresume', () => {
    sendToServerWindow({
      kind: 'resume',
      scope: 'client',
      message: '',
      start: performance.now(),
    });
  });

  document.addEventListener('click', (ev) => {
    try {
      if (ev.target && ev.target.tagName === 'A') {
        const anchor = ev.target;
        const href = anchor.href;
        if (href && href !== '#') {
          const url = new URL(anchor.href, origin);
          if (url.origin !== origin) {
            anchor.setAttribute('target', '_blank');
          }
        }
      }
    } catch (e) {
      console.error('repl-request-handler', e);
    }
  }, true);
})();`}<\/script>${s||""}`;self.onmessage=V;self.onfetch=X;self.oninstall=t=>{self.skipWaiting(),t.waitUntil(Promise.all([caches.open(S),caches.open(E)]))};self.onactivate=()=>self.clients.claim();
