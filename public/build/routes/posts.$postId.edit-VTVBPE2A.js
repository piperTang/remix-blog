import {
  require_session
} from "/build/_shared/chunk-D52ASTK7.js";
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
  useFetcher,
  useLoaderData,
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

// app/routes/posts.$postId.edit.tsx
var import_node = __toESM(require_node(), 1);
var import_prisma = __toESM(require_prisma(), 1);
var import_node2 = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\posts.$postId.edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\posts.$postId.edit.tsx"
  );
  import.meta.hot.lastModified = "1721048534171.4036";
}
function Page() {
  _s();
  const loaderData = useLoaderData();
  const navigation = useNavigation();
  const deleteFetcher = useFetcher();
  const isDeleting = deleteFetcher.state === "submitting";
  const isEditing = navigation.state === "submitting" && navigation.formData?.get("action") === "edit";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { label: "slug", name: "slug", defaultValue: loaderData.post.id }, void 0, false, {
        fileName: "app/routes/posts.$postId.edit.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(input_default, { label: "\u6807\u9898", name: "title", defaultValue: loaderData.post.title }, void 0, false, {
        fileName: "app/routes/posts.$postId.edit.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(textarea_default, { minRows: 10, label: "\u6B63\u6587", name: "content", defaultValue: loaderData.post.content }, void 0, false, {
        fileName: "app/routes/posts.$postId.edit.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { isLoading: isEditing, type: "submit", color: "primary", children: "\u66F4\u65B0" }, void 0, false, {
        fileName: "app/routes/posts.$postId.edit.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/posts.$postId.edit.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.$postId.edit.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(deleteFetcher.Form, { method: "POST", action: `/posts/${loaderData.post.id}/delete`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(button_default, { name: "action", value: "delete", isLoading: isDeleting, type: "submit", onClick: (_) => {
      if (confirm("\u786E\u5B9A\u5220\u9664\u5417\uFF1F")) {
        deleteFetcher.submit(null, {
          method: "POST",
          action: `/posts/${loaderData.post.id}/delete`
        });
      }
    }, color: "danger", children: "\u5220\u9664" }, void 0, false, {
      fileName: "app/routes/posts.$postId.edit.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.$postId.edit.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.$postId.edit.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts.$postId.edit.tsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}
_s(Page, "TgpSx+od0RvY9r7R5RmSS1PFMZY=", false, function() {
  return [useLoaderData, useNavigation, useFetcher];
});
_c = Page;
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default
};
//# sourceMappingURL=/build/routes/posts.$postId.edit-VTVBPE2A.js.map
