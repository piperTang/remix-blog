import {
  button_default,
  input_default,
  require_node
} from "/build/_shared/chunk-IXEJRRRG.js";
import "/build/_shared/chunk-OMZW5RCF.js";
import "/build/_shared/chunk-FRWKYVEH.js";
import {
  require_prisma
} from "/build/_shared/chunk-6PTYQIIM.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  Form
} from "/build/_shared/chunk-DVKALGLP.js";
import {
  createHotContext
} from "/build/_shared/chunk-PFNIM5UA.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/signup.tsx
var import_prisma = __toESM(require_prisma(), 1);
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\signup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\signup.tsx"
  );
  import.meta.hot.lastModified = "1721045542291.1772";
}
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-12 flex flex-col gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { label: "\u7528\u6237\u540D", name: "username" }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { type: "password", label: "\u5BC6\u7801", name: "password" }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { type: "submit", color: "primary", children: "\u6CE8\u518C" }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c = Page;
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default
};
//# sourceMappingURL=/build/routes/signup-ROWMPS66.js.map