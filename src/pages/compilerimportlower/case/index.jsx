import { c as _c } from "/src/mycache.js";
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=f1f30d19"; const useState = __vite__cjsImport4_react["useState"];
import reactLogo from "/src/assets/react.svg?import";
import viteLogo from "/vite.svg?import";
import "/src/App.css";
function App() {
  _s();
  const $ = _c(13);
  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 13; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }
  const [count, setCount] = useState(0);
  let t0;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxDEV("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ jsxDEV("img", { src: viteLogo, className: "logo", alt: "Vite logo" }, void 0, false, {
        fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
        lineNumber: 19,
        columnNumber: 55
      }, this) }, void 0, false, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 19,
      columnNumber: 10
    }, this);
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  let t1;
  let t2;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxDEV("div", { children: [
        t0,
        /* @__PURE__ */ jsxDEV("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ jsxDEV("img", { src: reactLogo, className: "logo react", alt: "React logo" }, void 0, false, {
            fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
            lineNumber: 27,
            columnNumber: 63
          }, this) }, void 0, false, {
          fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
          lineNumber: 27,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 27,
      columnNumber: 10
    }, this);
    t2 = /* @__PURE__ */ jsxDEV("h1", { children: "Vite + React" }, void 0, false, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 28,
      columnNumber: 10
    }, this);
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  let t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => setCount((count_0) => count_0 + 1);
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== count) {
    t4 = /* @__PURE__ */ jsxDEV("button", { onClick: t3, children: [
        "count is ",
        count
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 44,
      columnNumber: 10
    }, this);
    $[5] = count;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxDEV("p", { children: [
        "Edit ",
        /* @__PURE__ */ jsxDEV("code", { children: "src/App.jsx" }, void 0, false, {
          fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
          lineNumber: 52,
          columnNumber: 18
        }, this),
        " and save to test HMR"
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 52,
      columnNumber: 10
    }, this);
    $[7] = t5;
  } else {
    t5 = $[7];
  }
  let t6;
  if ($[8] !== t4) {
    t6 = /* @__PURE__ */ jsxDEV("div", { className: "card", children: [
        t4,
        t5
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 59,
      columnNumber: 10
    }, this);
    $[8] = t4;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxDEV("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" }, void 0, false, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 67,
      columnNumber: 10
    }, this);
    $[10] = t7;
  } else {
    t7 = $[10];
  }
  let t8;
  if ($[11] !== t6) {
    t8 = /* @__PURE__ */ jsxDEV(Fragment, { children: [
        t1,
        t2,
        t6,
        t7
      ] }, void 0, true, {
      fileName: "/Users/yangbo/develop/r18-with-compiler/src/App.jsx",
      lineNumber: 74,
      columnNumber: 10
    }, this);
    $[11] = t6;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  return t8;
}
_s(App, "7rNyFrw5FVpFFCFYkWAjQci0NUk=");
_c2 = App;
export default App;
var _c2;
$RefreshReg$(_c2, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/yangbo/develop/r18-with-compiler/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
