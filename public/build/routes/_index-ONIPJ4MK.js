import {
  $6179b936705e76d3$export$ae780daf29e6d456,
  $f6c31cce2adf654f$export$45712eceda6fad21,
  $f7dceffc5ad7768b$export$4e328f61c538687f,
  ChevronIcon,
  EllipsisIcon,
  ForwardIcon,
  clsx,
  dataAttr,
  objectToDeps,
  pagination,
  range
} from "/build/_shared/chunk-OMZW5RCF.js";
import {
  $18f2051aff69b9bf$export$43bb16f9c6d9e3f7,
  $3ef42575df84b30b$export$9d1611c77c2fe928,
  $ea8dcbcb9ea1b556$export$9a302a45f65d0572,
  $ea8dcbcb9ea1b556$export$efa8c9099e530235,
  $ff5963eb1fccf552$export$e08e3b67e392101e,
  filterDOMProps,
  forwardRef,
  mapPropsVariants,
  useDOMRef,
  useProviderContext
} from "/build/_shared/chunk-FRWKYVEH.js";
import {
  require_prisma
} from "/build/_shared/chunk-6PTYQIIM.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  Link,
  init_dist,
  useLoaderData,
  useSearchParams
} from "/build/_shared/chunk-DVKALGLP.js";
import {
  createHotContext
} from "/build/_shared/chunk-PFNIM5UA.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/_index.tsx
var import_prisma = __toESM(require_prisma(), 1);
init_dist();

// node_modules/@nextui-org/pagination/dist/chunk-SDEB5NXU.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var PaginationCursor = forwardRef((props, ref) => {
  const { as, activePage, ...otherProps } = props;
  const Component = as || "span";
  const domRef = useDOMRef(ref);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { ref: domRef, "aria-hidden": true, ...otherProps, children: activePage });
});
PaginationCursor.displayName = "NextUI.PaginationCursor";
var pagination_cursor_default = PaginationCursor;

// node_modules/@nextui-org/pagination/dist/chunk-TEHPZN3P.mjs
var import_react = __toESM(require_react(), 1);
"use client";
function usePaginationItem(props) {
  const {
    as,
    ref,
    value,
    children,
    isActive,
    isDisabled,
    onPress,
    onClick,
    getAriaLabel,
    className,
    ...otherProps
  } = props;
  const isLink = !!(props == null ? void 0 : props.href);
  const Component = as || isLink ? "a" : "li";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const router = $ea8dcbcb9ea1b556$export$9a302a45f65d0572();
  const ariaLabel = (0, import_react.useMemo)(
    () => isActive ? `${getAriaLabel == null ? void 0 : getAriaLabel(value)} active` : getAriaLabel == null ? void 0 : getAriaLabel(value),
    [value, isActive]
  );
  const { isPressed, pressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled,
    onPress
  });
  const { focusProps, isFocused, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f({});
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled });
  const getItemProps = (props2 = {}) => {
    return {
      ref: domRef,
      role: "button",
      tabIndex: isDisabled ? -1 : 0,
      "aria-label": ariaLabel,
      "aria-current": dataAttr(isActive),
      "aria-disabled": dataAttr(isDisabled),
      "data-disabled": dataAttr(isDisabled),
      "data-active": dataAttr(isActive),
      "data-focus": dataAttr(isFocused),
      "data-hover": dataAttr(isHovered),
      "data-pressed": dataAttr(isPressed),
      "data-focus-visible": dataAttr(isFocusVisible),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        props2,
        pressProps,
        focusProps,
        hoverProps,
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        })
      ),
      className: clsx(className, props2.className),
      onClick: (e2) => {
        $ff5963eb1fccf552$export$e08e3b67e392101e(pressProps == null ? void 0 : pressProps.onClick, onClick)(e2);
        if (!router.isNative && e2.currentTarget instanceof HTMLAnchorElement && e2.currentTarget.href && !e2.isDefaultPrevented() && $ea8dcbcb9ea1b556$export$efa8c9099e530235(e2.currentTarget, e2) && props2.href) {
          e2.preventDefault();
          router.open(e2.currentTarget, e2, props2.href, props2.routerOptions);
        }
      }
    };
  };
  return {
    Component,
    children,
    ariaLabel,
    isFocused,
    isFocusVisible,
    getItemProps
  };
}

// node_modules/@nextui-org/pagination/dist/chunk-5E6ZQJ3X.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
"use client";
var PaginationItem = forwardRef((props, ref) => {
  const { Component, children, getItemProps } = usePaginationItem({ ...props, ref });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Component, { ...getItemProps(), children });
});
PaginationItem.displayName = "NextUI.PaginationItem";
var pagination_item_default = PaginationItem;

// node_modules/@nextui-org/use-pagination/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var PaginationItemType = /* @__PURE__ */ ((PaginationItemType2) => {
  PaginationItemType2["DOTS"] = "dots";
  PaginationItemType2["PREV"] = "prev";
  PaginationItemType2["NEXT"] = "next";
  return PaginationItemType2;
})(PaginationItemType || {});
function usePagination(props) {
  const {
    page,
    total,
    siblings = 1,
    boundaries = 1,
    initialPage = 1,
    showControls = false,
    onChange
  } = props;
  const [activePage, setActivePage] = (0, import_react2.useState)(page || initialPage);
  const { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  const isRTL = direction === "rtl";
  const onChangeActivePage = (newPage) => {
    setActivePage(newPage);
    onChange && onChange(newPage);
  };
  (0, import_react2.useEffect)(() => {
    if (page && page !== activePage) {
      setActivePage(page);
    }
  }, [page]);
  const setPage = (0, import_react2.useCallback)(
    (pageNumber) => {
      if (pageNumber <= 0) {
        onChangeActivePage(1);
      } else if (pageNumber > total) {
        onChangeActivePage(total);
      } else {
        onChangeActivePage(pageNumber);
      }
    },
    [total, activePage, onChangeActivePage]
  );
  const next = () => isRTL ? setPage(activePage - 1) : setPage(activePage + 1);
  const previous = () => isRTL ? setPage(activePage + 1) : setPage(activePage - 1);
  const first = () => isRTL ? setPage(total) : setPage(1);
  const last = () => isRTL ? setPage(1) : setPage(total);
  const formatRange = (0, import_react2.useCallback)(
    (range2) => {
      if (showControls) {
        return isRTL ? [
          "next",
          ...range2,
          "prev"
          /* PREV */
        ] : [
          "prev",
          ...range2,
          "next"
          /* NEXT */
        ];
      }
      return range2;
    },
    [isRTL, showControls]
  );
  const paginationRange = (0, import_react2.useMemo)(() => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
    if (totalPageNumbers >= total) {
      return formatRange(range(1, total));
    }
    const leftSiblingIndex = Math.max(activePage - siblings, boundaries);
    const rightSiblingIndex = Math.min(activePage + siblings, total - boundaries);
    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1);
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;
      return formatRange([
        ...range(1, leftItemCount),
        "dots",
        ...range(total - (boundaries - 1), total)
      ]);
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return formatRange([
        ...range(1, boundaries),
        "dots",
        ...range(total - rightItemCount, total)
      ]);
    }
    return formatRange([
      ...range(1, boundaries),
      "dots",
      ...range(leftSiblingIndex, rightSiblingIndex),
      "dots",
      ...range(total - boundaries + 1, total)
    ]);
  }, [total, activePage, siblings, boundaries, formatRange]);
  return {
    range: paginationRange,
    activePage,
    setPage,
    next,
    previous,
    first,
    last
  };
}

// node_modules/@nextui-org/pagination/dist/chunk-AOWPLK3C.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/compute-scroll-into-view/dist/index.js
var t = (t3) => "object" == typeof t3 && null != t3 && 1 === t3.nodeType;
var e = (t3, e2) => (!e2 || "hidden" !== t3) && ("visible" !== t3 && "clip" !== t3);
var n = (t3, n2) => {
  if (t3.clientHeight < t3.scrollHeight || t3.clientWidth < t3.scrollWidth) {
    const o3 = getComputedStyle(t3, null);
    return e(o3.overflowY, n2) || e(o3.overflowX, n2) || ((t4) => {
      const e2 = ((t5) => {
        if (!t5.ownerDocument || !t5.ownerDocument.defaultView)
          return null;
        try {
          return t5.ownerDocument.defaultView.frameElement;
        } catch (t6) {
          return null;
        }
      })(t4);
      return !!e2 && (e2.clientHeight < t4.scrollHeight || e2.clientWidth < t4.scrollWidth);
    })(t3);
  }
  return false;
};
var o = (t3, e2, n2, o3, l2, r2, i, s) => r2 < t3 && i > e2 || r2 > t3 && i < e2 ? 0 : r2 <= t3 && s <= n2 || i >= e2 && s >= n2 ? r2 - t3 - o3 : i > e2 && s < n2 || r2 < t3 && s > n2 ? i - e2 + l2 : 0;
var l = (t3) => {
  const e2 = t3.parentElement;
  return null == e2 ? t3.getRootNode().host || null : e2;
};
var r = (e2, r2) => {
  var i, s, d, h;
  if ("undefined" == typeof document)
    return [];
  const { scrollMode: c, block: f, inline: u, boundary: a, skipOverflowHiddenElements: g } = r2, p = "function" == typeof a ? a : (t3) => t3 !== a;
  if (!t(e2))
    throw new TypeError("Invalid target");
  const m = document.scrollingElement || document.documentElement, w = [];
  let W = e2;
  for (; t(W) && p(W); ) {
    if (W = l(W), W === m) {
      w.push(W);
      break;
    }
    null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
  }
  const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e2.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t3) => {
    const e3 = window.getComputedStyle(t3);
    return { top: parseFloat(e3.scrollMarginTop) || 0, right: parseFloat(e3.scrollMarginRight) || 0, bottom: parseFloat(e3.scrollMarginBottom) || 0, left: parseFloat(e3.scrollMarginLeft) || 0 };
  })(e2);
  let k = "start" === f || "nearest" === f ? x - T : "end" === f ? I + F : x + v / 2 - T + F, D = "center" === u ? R + E / 2 - V + B : "end" === u ? C + B : R - V;
  const L = [];
  for (let t3 = 0; t3 < w.length; t3++) {
    const e3 = w[t3], { height: n2, width: l2, top: r3, right: i2, bottom: s2, left: d2 } = e3.getBoundingClientRect();
    if ("if-needed" === c && x >= 0 && R >= 0 && I <= H && C <= b && x >= r3 && I <= s2 && R >= d2 && C <= i2)
      return L;
    const h2 = getComputedStyle(e3), a2 = parseInt(h2.borderLeftWidth, 10), g2 = parseInt(h2.borderTopWidth, 10), p2 = parseInt(h2.borderRightWidth, 10), W2 = parseInt(h2.borderBottomWidth, 10);
    let T2 = 0, B2 = 0;
    const F2 = "offsetWidth" in e3 ? e3.offsetWidth - e3.clientWidth - a2 - p2 : 0, V2 = "offsetHeight" in e3 ? e3.offsetHeight - e3.clientHeight - g2 - W2 : 0, S = "offsetWidth" in e3 ? 0 === e3.offsetWidth ? 0 : l2 / e3.offsetWidth : 0, X = "offsetHeight" in e3 ? 0 === e3.offsetHeight ? 0 : n2 / e3.offsetHeight : 0;
    if (m === e3)
      T2 = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o(M, M + H, H, g2, W2, M + k, M + k + v, v) : k - H / 2, B2 = "start" === u ? D : "center" === u ? D - b / 2 : "end" === u ? D - b : o(y, y + b, b, a2, p2, y + D, y + D + E, E), T2 = Math.max(0, T2 + M), B2 = Math.max(0, B2 + y);
    else {
      T2 = "start" === f ? k - r3 - g2 : "end" === f ? k - s2 + W2 + V2 : "nearest" === f ? o(r3, s2, n2, g2, W2 + V2, k, k + v, v) : k - (r3 + n2 / 2) + V2 / 2, B2 = "start" === u ? D - d2 - a2 : "center" === u ? D - (d2 + l2 / 2) + F2 / 2 : "end" === u ? D - i2 + p2 + F2 : o(d2, i2, l2, a2, p2 + F2, D, D + E, E);
      const { scrollLeft: t4, scrollTop: h3 } = e3;
      T2 = 0 === X ? 0 : Math.max(0, Math.min(h3 + T2 / X, e3.scrollHeight - n2 / X + V2)), B2 = 0 === S ? 0 : Math.max(0, Math.min(t4 + B2 / S, e3.scrollWidth - l2 / S + F2)), k += h3 - T2, D += t4 - B2;
    }
    L.push({ el: e3, top: T2, left: B2 });
  }
  return L;
};

// node_modules/scroll-into-view-if-needed/dist/index.js
var o2 = (e2) => false === e2 ? { block: "end", inline: "nearest" } : ((e3) => e3 === Object(e3) && 0 !== Object.keys(e3).length)(e2) ? e2 : { block: "start", inline: "nearest" };
function t2(t3, n2) {
  if (!t3.isConnected || !((e2) => {
    let o3 = e2;
    for (; o3 && o3.parentNode; ) {
      if (o3.parentNode === document)
        return true;
      o3 = o3.parentNode instanceof ShadowRoot ? o3.parentNode.host : o3.parentNode;
    }
    return false;
  })(t3))
    return;
  if (((e2) => "object" == typeof e2 && "function" == typeof e2.behavior)(n2))
    return n2.behavior(r(t3, n2));
  const r2 = "boolean" == typeof n2 || null == n2 ? void 0 : n2.behavior;
  for (const { el: i, top: a, left: l2 } of r(t3, o2(n2)))
    i.scroll({ top: a, left: l2, behavior: r2 });
}

// node_modules/@nextui-org/pagination/dist/chunk-AOWPLK3C.mjs
"use client";
var CURSOR_TRANSITION_TIMEOUT = 300;
function usePagination2(originalProps) {
  var _a, _b, _c2, _d;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, pagination.variantKeys);
  const {
    as,
    ref,
    classNames,
    dotsJump = 5,
    loop = false,
    showControls = false,
    total = 1,
    initialPage = 1,
    page,
    siblings,
    boundaries,
    onChange,
    className,
    renderItem,
    getItemAriaLabel: getItemAriaLabelProp,
    ...otherProps
  } = props;
  const Component = as || "nav";
  const domRef = useDOMRef(ref);
  const cursorRef = (0, import_react3.useRef)(null);
  const itemsRef = (0, import_react3.useRef)();
  const cursorTimer = (0, import_react3.useRef)();
  const { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  const isRTL = direction === "rtl";
  const disableAnimation = (_b = (_a = originalProps == null ? void 0 : originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const disableCursorAnimation = (_d = (_c2 = originalProps == null ? void 0 : originalProps.disableCursorAnimation) != null ? _c2 : disableAnimation) != null ? _d : false;
  function getItemsRefMap() {
    if (!itemsRef.current) {
      itemsRef.current = /* @__PURE__ */ new Map();
    }
    return itemsRef.current;
  }
  function getItemRef(node, value) {
    const map = getItemsRefMap();
    if (node) {
      map.set(value, node);
    } else {
      map.delete(value);
    }
  }
  function scrollTo(value, skipAnimation) {
    const map = getItemsRefMap();
    const node = map.get(value);
    if (!node || !cursorRef.current)
      return;
    cursorTimer.current && clearTimeout(cursorTimer.current);
    t2(node, {
      scrollMode: "always",
      behavior: "smooth",
      block: "start",
      inline: "start",
      boundary: domRef.current
    });
    const { offsetLeft } = node;
    if (skipAnimation) {
      cursorRef.current.setAttribute("data-moving", "false");
      cursorRef.current.style.transform = `translateX(${offsetLeft}px) scale(1)`;
      return;
    }
    cursorRef.current.setAttribute("data-moving", "true");
    cursorRef.current.style.transform = `translateX(${offsetLeft}px) scale(1.1)`;
    cursorTimer.current = setTimeout(() => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translateX(${offsetLeft}px) scale(1)`;
      }
      cursorTimer.current = setTimeout(() => {
        var _a2;
        (_a2 = cursorRef.current) == null ? void 0 : _a2.setAttribute("data-moving", "false");
        cursorTimer.current && clearTimeout(cursorTimer.current);
      }, CURSOR_TRANSITION_TIMEOUT);
    }, CURSOR_TRANSITION_TIMEOUT);
  }
  const { range: range2, activePage, setPage, previous, next, first, last } = usePagination({
    page,
    total,
    initialPage,
    siblings,
    boundaries,
    showControls,
    onChange
  });
  const activePageRef = (0, import_react3.useRef)(activePage);
  (0, import_react3.useEffect)(() => {
    if (activePage && !disableAnimation) {
      scrollTo(activePage, activePage === activePageRef.current);
    }
    activePageRef.current = activePage;
  }, [
    activePage,
    disableAnimation,
    disableCursorAnimation,
    originalProps.dotsJump,
    originalProps.isCompact,
    originalProps.showControls
  ]);
  const slots = (0, import_react3.useMemo)(
    () => pagination({
      ...variantProps,
      disableAnimation,
      disableCursorAnimation
    }),
    [objectToDeps(variantProps), disableCursorAnimation, disableAnimation]
  );
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const onNext = () => {
    if (loop && activePage === (isRTL ? 1 : total)) {
      return first();
    }
    return next();
  };
  const onPrevious = () => {
    if (loop && activePage === (isRTL ? total : 1)) {
      return last();
    }
    return previous();
  };
  const getBaseProps = (props2 = {}) => {
    return {
      ...props2,
      ref: domRef,
      role: "navigation",
      "aria-label": props2["aria-label"] || "pagination navigation",
      "data-slot": "base",
      "data-controls": dataAttr(showControls),
      "data-loop": dataAttr(loop),
      "data-dots-jump": dotsJump,
      "data-total": total,
      "data-active-page": activePage,
      className: slots.base({ class: clsx(baseStyles, props2 == null ? void 0 : props2.className) }),
      ...otherProps
    };
  };
  const getWrapperProps = (props2 = {}) => {
    return {
      ...props2,
      "data-slot": "wrapper",
      className: slots.wrapper({ class: clsx(classNames == null ? void 0 : classNames.wrapper, props2 == null ? void 0 : props2.className) })
    };
  };
  const getItemAriaLabel = (page2) => {
    if (!page2)
      return;
    if (getItemAriaLabelProp) {
      return getItemAriaLabelProp(page2);
    }
    switch (page2) {
      case PaginationItemType.DOTS:
        return "dots element";
      case PaginationItemType.PREV:
        return "previous page button";
      case PaginationItemType.NEXT:
        return "next page button";
      case "first":
        return "first page button";
      case "last":
        return "last page button";
      default:
        return `pagination item ${page2}`;
    }
  };
  const getItemProps = (props2 = {}) => {
    return {
      ...props2,
      ref: (node) => getItemRef(node, props2.value),
      "data-slot": "item",
      isActive: props2.value === activePage,
      className: slots.item({ class: clsx(classNames == null ? void 0 : classNames.item, props2 == null ? void 0 : props2.className) }),
      onPress: () => {
        if (props2.value !== activePage) {
          setPage(props2.value);
        }
      }
    };
  };
  const getCursorProps = (props2 = {}) => {
    return {
      ...props2,
      ref: cursorRef,
      activePage,
      "data-slot": "cursor",
      className: slots.cursor({ class: clsx(classNames == null ? void 0 : classNames.cursor, props2 == null ? void 0 : props2.className) })
    };
  };
  return {
    Component,
    showControls,
    dotsJump,
    slots,
    classNames,
    loop,
    total,
    range: range2,
    activePage,
    getItemRef,
    disableAnimation,
    disableCursorAnimation,
    setPage,
    onPrevious,
    onNext,
    renderItem,
    getBaseProps,
    getWrapperProps,
    getItemProps,
    getCursorProps,
    getItemAriaLabel
  };
}

// node_modules/@nextui-org/pagination/dist/chunk-MRXO6UUP.mjs
var import_react4 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);
"use client";
var Pagination = forwardRef((props, ref) => {
  const {
    Component,
    dotsJump,
    slots,
    classNames,
    total,
    range: range2,
    loop,
    activePage,
    disableCursorAnimation,
    disableAnimation,
    renderItem: renderItemProp,
    onNext,
    onPrevious,
    setPage,
    getItemAriaLabel,
    getItemRef,
    getBaseProps,
    getWrapperProps,
    getItemProps,
    getCursorProps
  } = usePagination2({ ...props, ref });
  const { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  const isRTL = direction === "rtl";
  const renderItem = (0, import_react4.useCallback)(
    (value, index) => {
      const isBefore = index < range2.indexOf(activePage);
      if (renderItemProp && typeof renderItemProp === "function") {
        let page = typeof value == "number" ? value : index;
        if (value === PaginationItemType.NEXT) {
          page = activePage + 1;
        }
        if (value === PaginationItemType.PREV) {
          page = activePage - 1;
        }
        if (value === PaginationItemType.DOTS) {
          page = isBefore ? activePage - dotsJump >= 1 ? activePage - dotsJump : 1 : activePage + dotsJump <= total ? activePage + dotsJump : total;
        }
        const itemChildren = {
          [PaginationItemType.PREV]: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ChevronIcon, {}),
          [PaginationItemType.NEXT]: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            ChevronIcon,
            {
              className: slots.chevronNext({
                class: classNames == null ? void 0 : classNames.chevronNext
              })
            }
          ),
          [PaginationItemType.DOTS]: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(EllipsisIcon, { className: slots == null ? void 0 : slots.ellipsis({ class: classNames == null ? void 0 : classNames.ellipsis }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              ForwardIcon,
              {
                className: slots == null ? void 0 : slots.forwardIcon({ class: classNames == null ? void 0 : classNames.forwardIcon }),
                "data-before": dataAttr(isBefore)
              }
            )
          ] })
        };
        return renderItemProp({
          value,
          index,
          key: `${value}-${index}`,
          page,
          total,
          children: typeof value === "number" ? value : itemChildren[value],
          activePage,
          dotsJump,
          isBefore,
          isActive: value === activePage,
          isPrevious: value === activePage - 1,
          isNext: value === activePage + 1,
          isFirst: value === 1,
          isLast: value === total,
          onNext,
          onPrevious,
          setPage,
          onPress: () => setPage(page),
          ref: typeof value === "number" ? (node) => getItemRef(node, value) : void 0,
          className: slots.item({ class: classNames == null ? void 0 : classNames.item }),
          getAriaLabel: getItemAriaLabel
        });
      }
      if (value === PaginationItemType.PREV) {
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          pagination_item_default,
          {
            className: slots.prev({
              class: classNames == null ? void 0 : classNames.prev
            }),
            "data-slot": "prev",
            getAriaLabel: getItemAriaLabel,
            isDisabled: !loop && activePage === (isRTL ? total : 1),
            value,
            onPress: onPrevious,
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ChevronIcon, {})
          },
          PaginationItemType.PREV
        );
      }
      if (value === PaginationItemType.NEXT) {
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          pagination_item_default,
          {
            className: slots.next({
              class: clsx(classNames == null ? void 0 : classNames.next)
            }),
            "data-slot": "next",
            getAriaLabel: getItemAriaLabel,
            isDisabled: !loop && activePage === (isRTL ? 1 : total),
            value,
            onPress: onNext,
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              ChevronIcon,
              {
                className: slots.chevronNext({
                  class: classNames == null ? void 0 : classNames.chevronNext
                })
              }
            )
          },
          PaginationItemType.NEXT
        );
      }
      if (value === PaginationItemType.DOTS) {
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          pagination_item_default,
          {
            className: slots.item({
              class: clsx(classNames == null ? void 0 : classNames.item, "group")
            }),
            "data-slot": "item",
            getAriaLabel: getItemAriaLabel,
            value,
            onPress: () => isBefore ? setPage(activePage - dotsJump >= 1 ? activePage - dotsJump : 1) : setPage(activePage + dotsJump <= total ? activePage + dotsJump : total),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(EllipsisIcon, { className: slots == null ? void 0 : slots.ellipsis({ class: classNames == null ? void 0 : classNames.ellipsis }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                ForwardIcon,
                {
                  className: slots == null ? void 0 : slots.forwardIcon({ class: classNames == null ? void 0 : classNames.forwardIcon }),
                  "data-before": dataAttr(isRTL ? !isBefore : isBefore)
                }
              )
            ]
          },
          PaginationItemType.DOTS + isBefore
        );
      }
      return /* @__PURE__ */ (0, import_react5.createElement)(pagination_item_default, { ...getItemProps({ value }), key: value, getAriaLabel: getItemAriaLabel }, value);
    },
    [
      isRTL,
      activePage,
      dotsJump,
      getItemProps,
      loop,
      range2,
      renderItemProp,
      slots,
      classNames,
      total
    ]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Component, { ...getBaseProps(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { ...getWrapperProps(), children: [
    !disableCursorAnimation && !disableAnimation && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(pagination_cursor_default, { ...getCursorProps() }),
    range2.map(renderItem)
  ] }) });
});
Pagination.displayName = "NextUI.Pagination";
var pagination_default = Pagination;

// node_modules/@nextui-org/pagination/dist/index.mjs
"use client";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1721037161861.812";
}
var meta = () => {
  return [{
    title: "\u5B66\u4E60"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
function Index() {
  _s();
  const loaderData = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-12 flex flex-col gap-4", children: [
    loaderData.posts.map((post) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { prefetch: "intent", to: `/posts/${post.id}`, className: "text-xl", children: post.title }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-400", children: post.created_at }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this)
      ] }, post.id, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 60,
        columnNumber: 16
      }, this);
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pagination_default, { page, total: loaderData.pageCount, onChange: (page2) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("page", String(page2));
      setSearchParams(newSearchParams);
    } }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_s(Index, "GtufL2hJPhwc1eOpDIQWjVJoL6E=", false, function() {
  return [useLoaderData, useSearchParams];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-ONIPJ4MK.js.map
