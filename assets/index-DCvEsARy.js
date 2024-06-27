import{j as e,c as s}from"./index-CKuzEZT2.js";import{A as i}from"./index--XoUEj4u.js";import"./atom-one-light-B1cH31dZ.js";import"./Preview-B-0qojbv.js";const t=`function Layou2t() {
  const $ = _c(3);
  if ($[0] !== "af424edd0cc2f0a8b6bcc96ea18b6e0ad26e18b67ffafe80bf321ad9ef551a1f") {
    for (let $i = 0; $i < 3; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "af424edd0cc2f0a8b6bcc96ea18b6e0ad26e18b67ffafe80bf321ad9ef551a1f";
  }
  let t0;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxDEV(NavHeader, {}, void 0, false, {
      fileName: "/Users/yangbo/develop/react19feature/src/App.jsx",
      lineNumber: 20,
      columnNumber: 10
    }, this);
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxDEV("div", { children: [
        t0,
        /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
          fileName: "/Users/xxx/develop/xxx/src/App.jsx",
          lineNumber: 27,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
      fileName: "/Users/xxx/develop/xxx/src/App.jsx",
      lineNumber: 27,
      columnNumber: 10
    }, this);
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  return t1;
}
`;function c(r){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"我们对 React Compiler 期待已久。"}),`
`,e.jsx(n.p,{children:"自从从它第一次在 React Conf 2021 亮相。到现在 React Conf 2024 正式开源，已经过去了三年之久。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"以前叫 React Forget，现改名为 React Compiler"}),`
`]}),`
`,e.jsx(n.h3,{children:"背景"}),`
`,e.jsxs(n.p,{children:["要了解 React Compiler，这还需要从 React 的更新机制说起。",e.jsx(n.strong,{children:"React 项目中的任何一个组件发生 state 状态的变更，React 更新机制都会从最顶层的根节点开始往下递归对比，通过双缓存机制判断出哪些节点发生了变化，然后更新节点"}),"。这样的更新机制成本并不小，因为在判断过程中，如果 React 发现 ",e.jsx(n.code,{children:"props、state、context"})," 任意一个不同，那么就认为该节点被更新了。因此，冗余的 ",e.jsx(n.code,{children:"re-render"})," 在这个过程中会",e.jsx(n.strong,{children:"大量发生"}),"。"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"对比的成本非常小，但是 re-render 的成本较高"}),"，当我们在短时间之内快速更改 state 时，程序大概率会存在性能问题。因此在以往的开发方式中，掌握性能优化的手段是高级 React 开发者的必备能力"]}),`
`]}),`
`,e.jsx(n.p,{children:"一个组件节点在 React 中很难被判断为没有发生过更新。因为 props 的比较总是不同的。它的比较方式如下。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{} === {} // false
`})}),`
`,e.jsx(n.p,{children:"因此，高级 React 开发者需要非常了解 React 的默认优化机制，让 props 的比较不发生，因为一旦发生，那么结果必定是 false。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"事实上，对 React 默认优化机制了解的开发者非常少，我们在开发过程中也不会为了优化这个性能去重新调整组件的分布。更多的还是使用 memo 与 useMemo/useCallback 暴力缓存节点"}),`
`]}),`
`,e.jsxs(n.p,{children:["在这样的背景之下，冗余的 ",e.jsx(n.code,{children:"re-render"})," 在大量的项目中发生。这也是为什么 React 总是呗吐槽性能不好的主要原因。当然，大多数项目并没有频繁更新 state 的需求，因此这一点性能问题表现得并不是很明显。"]}),`
`,e.jsxs(n.p,{children:["如果我们要解决冗余 re-render 的问题，需要对 React 默认优化技能有非常深刻的理解，需要对 ",e.jsx(n.code,{children:"memo、useCallback、useMemo"})," 有准确的理解。但是普通的 React 开发者很难理解他们，有的开发者虽然在项目中大量使用了，但是未必就达到了理想的效果。React Compiler 则是为了解决这个问题，它可以自动帮助我们记忆已经存在、并且没有发生更新的组件，从而解决组件冗余 ",e.jsx(n.code,{children:"re-render"})," 的问题。"]}),`
`,e.jsxs(n.p,{children:["从使用结果的体验来看，React Compiler 被集成在代码自动编译中，因此只要我们在项目中引入成功，就不再需要关注它的存在。",e.jsx(n.strong,{children:"我们的开发方式不会发生任何改变。"})," 它不会更改 React 现有的开发范式和更新方式，侵入性非常弱。这一点对于老项目来说，非常非常重要。"]}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"1"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"检测"})}),`
`,e.jsxs(n.p,{children:["并非所有的组件都能被优化。因此早在 React 18 的版本中，React 官方团队就提前发布了严格模式。在顶层根节点中，套一层 ",e.jsx(n.code,{children:"StrictMode"})," 即可。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</StrictMode>
`})}),`
`,e.jsx(n.p,{children:"遵循严格模式的规范，我们的组件更容易符合 React Compiler 的优化规则。"}),`
`,e.jsx(n.p,{children:"我们可以使用如下方式首先检测代码库是否兼容。在项目根目录下执行如下指令。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx react-compiler-healthcheck
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"该脚本主要用于检测"}),`
`,e.jsx(n.p,{children:"1、项目中有多少组件可以成功优化**：越多越好**"}),`
`,e.jsx(n.p,{children:"2、是否使用严格模式，使用了优化成功率更高"}),`
`,e.jsx(n.p,{children:"3、是否使用了与 Compiler 不兼容的三方库"}),`
`]}),`
`,e.jsx(n.p,{children:"例如，我的其中一个项目，检测结果如下"}),`
`,e.jsxs("div",{style:{color:"rgb(23, 163, 74)"},children:[e.jsx("div",{children:"Successfully compiled 38 out of 40 components. "}),e.jsx("div",{children:"StrictMode usage found."}),e.jsx("div",{children:"Found no usage of incompatible libraries."})]}),`
`,e.jsx(n.p,{children:"每一项都基本上通过了，那我就可以放心的在项目中引入对应的插件开始体验了。"}),`
`,e.jsx(n.h2,{children:e.jsx(n.em,{children:"2"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"在项目中引入"})}),`
`,e.jsx(n.p,{children:"官方文档中已经明确表示，由于 JavaScript 的灵活性，Compiler 无法捕获所有可能的意外行为，甚至编译之后还会出现错误。因此，目前而言，Compiler 依然可能会有他粗糙的一面。因此，我们可以通过配置，在具体的某一个小目录中运行 Compiler。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const ReactCompilerConfig = {
  sources: (filename) => {
    return filename.indexOf('src/path/to/dir') !== -1;
  },
};
`})}),`
`,e.jsx(n.p,{children:"React Compiler 还支持对应的 eslint 插件。该插件可以独立运行。不用非得与 Compiler 一起运行。"}),`
`,e.jsx(n.p,{children:"可以使用如下指令安装该插件"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm i eslint-plugin-react-compiler
`})}),`
`,e.jsx(n.p,{children:"然后在 eslint 的配置中添加"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`module.exports = {
  plugins: [
    'eslint-plugin-react-compiler',
  ],
  rules: {
    'react-compiler/react-compiler': 2,
  },
}
`})}),`
`,e.jsx(n.p,{children:"Compiler 目前结合 Babel 插件一起使用，因此，我们首先需要在项目中引入该插件"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm i babel-plugin-react-compiler
`})}),`
`,e.jsx(n.p,{children:"然后，在不同的项目中，有不同的配置。"}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["添加到 ",e.jsx(n.code,{children:"Babel"})," 的配置中"]}),"，如下所示"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`module.exports = function () {
  return {
    plugins: [
      ['babel-plugin-react-compiler', ReactCompilerConfig], // must run first!
      // ...
    ],
  };
};
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"注意，该插件应该在其他 Babel 插件之前运行"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"在 vite 中使用"})}),`
`,e.jsxs(n.p,{children:["首先，我们需要安装 ",e.jsx(n.code,{children:"vite-plugin-react"}),"，注意不用搞错了，群里有的同学使用了 ",e.jsx(n.code,{children:"vite-plugin-react-swc"})," 结果搞了很久没配置成功。然后在 vite.config.js 中，添加如下配置"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export default defineConfig(() => {
  return {
    plugins: [
      react({
        babel: {
          plugins: [
            ["babel-plugin-react-compiler", ReactCompilerConfig],
          ],
        },
      }),
    ],
    // ...
  };
});
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"在 Next.js 中使用"})}),`
`,e.jsxs(n.p,{children:["创建 ",e.jsx(n.code,{children:"babel.config.js"})," 并添加上面 Babel 同样的配置即可。"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"在 Remix 中使用"})}),`
`,e.jsx(n.p,{children:"安装如下插件，并且添加对应的配置项目。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm i vite-plugin-babel
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// vite.config.js
import babel from "vite-plugin-babel";

const ReactCompilerConfig = { /* ... */ };

export default defineConfig({
  plugins: [
    remix({ /* ... */}),
    babel({
      filter: /\\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"], // if you use TypeScript
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
  ],
});
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"在 Webpack 中使用"})}),`
`,e.jsx(n.p,{children:"我们可以单独为 Compiler 创建一个 Loader. 代码如下所示。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const ReactCompilerConfig = { /* ... */ };
const BabelPluginReactCompiler = require('babel-plugin-react-compiler');

function reactCompilerLoader(sourceCode, sourceMap) {
  // ...
  const result = transformSync(sourceCode, {
    // ...
    plugins: [
      [BabelPluginReactCompiler, ReactCompilerConfig],
    ],
  // ...
  });

  if (result === null) {
    this.callback(
      Error(
        \`Failed to transform "\${options.filename}"\`
      )
    );
    return;
  }

  this.callback(
    null,
    result.code
    result.map === null ? undefined : result.map
  );
}

module.exports = reactCompilerLoader;
`})}),`
`,e.jsx(n.p,{children:"我们可以在 React 官方了解到更多关于 React Compiler 的介绍与注意事项。具体地址如下"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://react.dev/learn/react-compiler",children:"https://react.dev/learn/react-compiler"})}),`
`,e.jsxs(n.p,{children:["引入成功之后，我们可以在开发者工具中的 ",e.jsx(n.code,{children:"Sources"})," 面板的 ",e.jsx(n.code,{children:"Page"})," 目录中查看编译之后的代码，长得跟右侧代码差不多就表示编译成功了。"]})]})}function a(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}const o={"App.js":t};function j(){const r=s.c(1);let n;return r[0]===Symbol.for("react.memo_cache_sentinel")?(n=e.jsx(i,{files:o,hidePreview:!0,renderArticle:l=>e.jsx(a,{components:{code:l}})}),r[0]=n):n=r[0],n}export{j as default};
