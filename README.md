# rollup-xferno-import
Reproduction for issue

```
[!] Error: 'createVNode' is not exported by node_modules/xferno/dist/xferno.js, imported by src/AppView/index.jsx
https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module
src/AppView/index.jsx (1:9)
1: // import * as xferno from 'xferno';
            ^
2: 
3: export function AppView() {
Error: 'createVNode' is not exported by node_modules/xferno/dist/xferno.js, imported by src/AppView/index.jsx
    at error (/home/adubinin/Git/rollup-xferno-import/node_modules/rollup/dist/shared/node-entry.js:5400:30)
    at Module.error (/home/adubinin/Git/rollup-xferno-import/node_modules/rollup/dist/shared/node-entry.js:9824:16)
    at handleMissingExport (/home/adubinin/Git/rollup-xferno-import/node_modules/rollup/dist/shared/node-entry.js:9725:28)
    at Module.traceVariable (/home/adubinin/Git/rollup-xferno-import/node_modules/rollup/dist/shared/node-entry.js:10163:24)
    at ModuleScope.findVariable (/home/adubinin/Git/rollup-xferno-import/node_modules/rollup/dist/shared/node-entry.js:8770:39)
    at FunctionScope.findVariable (/home/adubinin/Git/rollup-xferno-import/node_modules/rollup/dist/shared/node-entry.js:3065:38)
    at ChildScope.findVariable (/home/adubinin/Git/rollup-xferno-import/node_modules/rollup/dist/shared/node-entry.js:3065:38)
    at Identifier$1.bind (/home/adubinin/Git/rollup-xferno-import/node_modules/rollup/dist/shared/node-entry.js:4403:40)
    at CallExpression$1.bind (/home/adubinin/Git/rollup-xferno-import/node_modules/rollup/dist/shared/node-entry.js:3152:23)
    at CallExpression$1.bind (/home/adubinin/Git/rollup-xferno-import/node_modules/rollup/dist/shared/node-entry.js:6719:15)
```
