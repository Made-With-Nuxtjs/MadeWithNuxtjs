import { u as useUI, _ as __nuxt_component_1$1 } from './Divider-C6An9iiu.mjs';
import { defineComponent, toRef, computed, useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { m as mergeConfig, d as appConfig, b as useHead } from './server.mjs';
import { u as useInjectButtonGroup } from './useButtonGroup-B6Q5lGA8.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-BsMjTRAY.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'node:http';
import 'node:https';
import '../_/nitro.mjs';
import 'lru-cache';
import 'devalue';
import 'consola/core';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:path';
import 'nuxt-site-config/urls';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const badge = {
  base: "inline-flex items-center",
  rounded: "rounded-md",
  font: "font-medium",
  size: {
    xs: "text-xs px-1.5 py-0.5",
    sm: "text-xs px-2 py-1",
    md: "text-sm px-2 py-1",
    lg: "text-sm px-2.5 py-1.5"
  },
  color: {
    white: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
    },
    gray: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"
    },
    black: {
      solid: "text-white dark:text-gray-900 bg-gray-900 dark:bg-white"
    }
  },
  variant: {
    solid: "bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",
    outline: "text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",
    soft: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",
    subtle: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.badge, badge);
const _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    label: {
      type: [String, Number],
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("badge", toRef(props, "ui"), config);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const badgeClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color)
      ), props.class);
    });
    return {
      attrs,
      badgeClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.badgeClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate(_ctx.label)}`);
  }, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.19.2_change-case@5.4.4_magicast@0.3.5_rollup@4.28.0_vite@5.4.11_@types+node@22.10._agcqop7e4jafidp34rzmheek44/node_modules/@nuxt/ui/dist/runtime/components/elements/Badge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "typography",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Typography Page | Nuxt UI Design"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDivider = __nuxt_component_1$1;
      const _component_UBadge = __nuxt_component_1;
      const _component_ui = resolveComponent("ui");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mt-24 md:mt-24 lg:mt-28 xl:mt-24 mb-20" }, _attrs))}><section><h1>Typography</h1><div class="p-3 mt-3 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"><div class="flex justify-start items-center"><div class="w-36"><h3>HTML Tag</h3></div><div><h3>Front View</h3></div></div>`);
      _push(ssrRenderComponent(_component_UDivider, { class: "py-2" }, null, _parent));
      _push(`<div class="flex justify-start items-center"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`h1`);
          } else {
            return [
              createTextVNode("h1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><h1>Headline 1</h1></div></div><div class="flex justify-start items-center py-2"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`h2`);
          } else {
            return [
              createTextVNode("h2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><h2>Headline 2</h2></div></div><div class="flex justify-start items-center py-2"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`h3`);
          } else {
            return [
              createTextVNode("h3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><h3>Headline 3</h3></div></div><div class="flex justify-start items-center py-2"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`h4`);
          } else {
            return [
              createTextVNode("h4")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><h4>Headline 4</h4></div></div><div class="flex justify-start items-center py-2"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`h5`);
          } else {
            return [
              createTextVNode("h5")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><h5>Headline 5</h5></div></div><div class="flex justify-start items-center py-2"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`h6`);
          } else {
            return [
              createTextVNode("h6")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><h6>Headline 6</h6></div></div><div class="flex justify-start items-center my-3"><div class="w-36"><h3>HTML Tag</h3></div><div><h3>Front View</h3></div></div>`);
      _push(ssrRenderComponent(_component_UDivider, null, null, _parent));
      _push(`<div class="flex flex-row justify-start items-center py-3"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Default`);
          } else {
            return [
              createTextVNode("Default")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-96"><div></div></div></div><div class="flex flex-row justify-start items-center py-2"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`div`);
          } else {
            return [
              createTextVNode("div")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-96"><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur.</div></div></div><div class="flex flex-row justify-start items-center py-2"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`P`);
          } else {
            return [
              createTextVNode("P")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-96"><p>Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos.</p></div></div><div class="flex justify-start items-center py-2"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`li`);
          } else {
            return [
              createTextVNode("li")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_ui, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li${_scopeId}> Home </li><li${_scopeId}> Home </li>`);
          } else {
            return [
              createVNode("li", null, " Home "),
              createVNode("li", null, " Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-row justify-start items-center py-2"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`span`);
          } else {
            return [
              createTextVNode("span")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-96"><span class="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur.</span></div></div><div class="flex justify-start items-center my-3"><div class="w-36"><h3>Class Name</h3></div><div><h3>Front View</h3></div></div>`);
      _push(ssrRenderComponent(_component_UDivider, { class: "pb-2" }, null, _parent));
      _push(`<div class="flex flex-row justify-start items-center py-2"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`currency`);
          } else {
            return [
              createTextVNode("currency")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-96"><p class="discount">50,000.00</p></div></div><div class="flex flex-row justify-start items-center py-2"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`discount`);
          } else {
            return [
              createTextVNode("discount")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-96"><p class="discount">50%</p></div></div><div class="flex flex-row justify-start items-center py-2"><div class="w-36">`);
      _push(ssrRenderComponent(_component_UBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`strike`);
          } else {
            return [
              createTextVNode("strike")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-96"><p class="currency-strike">50,000.00</p></div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/typography.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=typography-B7oPCVfG.mjs.map
