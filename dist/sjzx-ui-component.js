import { defineComponent as o, openBlock as l, createElementBlock as r, mergeProps as n, renderSlot as s, resolveComponent as d, createBlock as i, withCtx as f, createTextVNode as p, toDisplayString as x, createCommentVNode as _, createElementVNode as c, normalizeClass as y, ref as m } from "vue";
const z = /* @__PURE__ */ o({
  __name: "Layout",
  props: {
    type: { default: "vertical" }
  },
  setup(t) {
    return (e, a) => (l(), r("div", n({ class: "i-layout" }, e.$attrs, {
      class: ["i-layout-" + t.type]
    }), [
      s(e.$slots, "default")
    ], 16));
  }
});
const T = /* @__PURE__ */ o({
  __name: "FlexRow",
  props: {
    vertical: { default: "center" },
    horizontal: { default: "start" },
    gap: { default: "none" },
    full: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (e, a) => (l(), r("div", n({ class: "i-flex-row" }, e.$attrs, {
      class: [
        "i-flex-row-vertical-" + t.vertical,
        "i-flex-row-horizontal-" + t.horizontal,
        "i-flex-row-gap-" + t.gap,
        t.full ? "i-flex-row-full" : ""
      ]
    }), [
      s(e.$slots, "default")
    ], 16));
  }
});
const k = /* @__PURE__ */ o({
  __name: "FlexColumn",
  props: {
    horizontal: { default: "center" },
    vertical: { default: "start" },
    gap: { default: "none" },
    full: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (e, a) => (l(), r("div", n({ class: "i-flex-column" }, e.$attrs, {
      class: [
        "i-flex-column-vertical-" + t.vertical,
        "i-flex-column-horizontal-" + t.horizontal,
        "i-flex-column-gap-" + t.gap,
        t.full ? "i-flex-column-full" : ""
      ]
    }), [
      s(e.$slots, "default")
    ], 16));
  }
});
const w = /* @__PURE__ */ o({
  __name: "Board",
  props: {
    title: { default: "" },
    bordered: { type: Boolean, default: !1 },
    full: { type: Boolean, default: !1 },
    focusFull: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (e, a) => {
      const u = d("Text");
      return l(), r("div", n({
        class: ["i-board", { bordered: t.bordered, full: t.full, "focus-full": t.focusFull }]
      }, e.$attrs), [
        t.title ? (l(), i(u, {
          key: 0,
          class: "i-board-title",
          size: "xl",
          bold: ""
        }, {
          default: f(() => [
            p(x(t.title), 1)
          ]),
          _: 1
        })) : _("", !0),
        s(e.$slots, "default")
      ], 16);
    };
  }
});
const v = {
  key: 0,
  class: "page-panel-header"
}, g = /* @__PURE__ */ c("div", { class: "page-panel-header__rest" }, [
  /* @__PURE__ */ c("button", null, "delete"),
  /* @__PURE__ */ c("button", null, "edit"),
  /* @__PURE__ */ c("button", null, "edit")
], -1), h = [
  g
], C = /* @__PURE__ */ o({
  __name: "PagePanel",
  props: {
    title: null,
    full: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (e, a) => {
      const u = d("Layout");
      return l(), i(u, n({ class: "page-panel" }, e.$attrs), {
        default: f(() => [
          t.title ? (l(), r("header", v, h)) : _("", !0),
          c("div", {
            class: y(["page-panel-content", { "h-full": t.full }])
          }, [
            s(e.$slots, "default")
          ], 2)
        ]),
        _: 3
      }, 16);
    };
  }
});
const $ = /* @__PURE__ */ o({
  __name: "Text",
  props: {
    size: { default: "md" },
    align: { default: "left" },
    color: { default: "current" },
    italic: { type: Boolean, default: !1 },
    truncate: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 },
    bold: { type: Boolean, default: !1 },
    uppercase: { type: Boolean, default: !1 },
    underline: { type: Boolean, default: !1 },
    content: { default: "" },
    truncateTooltip: { type: Boolean }
  },
  setup(t) {
    const e = t, a = m();
    return (u, b) => (l(), r("span", n({ class: "i-text" }, u.$attrs, {
      class: [
        e.italic ? "i-text-italic" : "",
        e.truncate ? "i-text-truncate" : "",
        e.block ? "i-text-block" : "",
        e.uppercase ? "i-text-uppercase" : "",
        e.underline ? "i-text-underline" : "",
        e.bold ? "i-text-bold" : "",
        "i-text-" + e.align,
        e.size === "current" ? "" : "i-text-" + e.size,
        e.color === "current" ? "" : "i-text-color-" + e.color
      ],
      ref_key: "text",
      ref: a
    }), [
      s(u.$slots, "default")
    ], 16));
  }
});
const F = /* @__PURE__ */ o({
  __name: "TextHoverable",
  setup(t) {
    return (e, a) => (l(), i($, n({
      class: ["i-texthoverable", [
        e.$attrs.color !== "disabled" ? "" : "i-texthoverable--" + e.$attrs.color
      ]]
    }, e.$attrs), {
      default: f(() => [
        s(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  w as Board,
  k as FlexColumn,
  T as FlexRow,
  z as Layout,
  C as PagePanel,
  $ as Text,
  F as TextHoverable
};
