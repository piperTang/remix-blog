import {
  button_default,
  input_default,
  require_node,
  textarea_default
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
  Form,
  useActionData,
  useNavigation
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

// app/routes/posts.new.tsx
var import_node = __toESM(require_node(), 1);
var import_prisma = __toESM(require_prisma(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\posts.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\posts.new.tsx"
  );
  import.meta.hot.lastModified = "1721027737051.908";
}
function Page() {
  _s();
  const actionData = useActionData();
  const errors = actionData?.errors;
  const navigation = useNavigation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 p-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl font-black", children: "\u53D1\u5E03\u6587\u7AE0" }, void 0, false, {
      fileName: "app/routes/posts.new.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { isInvalid: !!errors?.slug, errorMessage: errors?.slug, name: "slug", label: "slug" }, void 0, false, {
      fileName: "app/routes/posts.new.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { isInvalid: !!errors?.title, errorMessage: errors?.title, name: "title", label: "\u6587\u7AE0\u6807\u9898" }, void 0, false, {
      fileName: "app/routes/posts.new.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(textarea_default, { isInvalid: !!errors?.content, errorMessage: errors?.content, name: "content", label: "\u5185\u5BB9" }, void 0, false, {
      fileName: "app/routes/posts.new.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { isLoading: navigation.state === "submitting", type: "submit", color: "primary", children: "\u53D1\u5E03" }, void 0, false, {
      fileName: "app/routes/posts.new.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts.new.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/posts.new.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/posts.new.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_s(Page, "e3rMULficn7ldQYYArv00m53mwQ=", false, function() {
  return [useActionData, useNavigation];
});
_c = Page;
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default
};
//# sourceMappingURL=/build/routes/posts.new-B2SDJJFR.js.map
