import { _ as __nuxt_component_1$1 } from './Divider-C6An9iiu.mjs';
import { _ as __nuxt_component_4, a as _sfc_main$2, b as __nuxt_component_0 } from './Button-dMKeKNO-.mjs';
import { defineComponent, mergeProps, useSSRContext, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { a as useAppConfig, b as useHead } from './server.mjs';
import './index-BsMjTRAY.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'tailwind-merge';
import '../_/nitro.mjs';
import 'lru-cache';
import 'devalue';
import 'node:http';
import 'node:https';
import 'consola/core';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:path';
import 'nuxt-site-config/urls';
import 'ipx';
import './nuxt-link-DI51IVC8.mjs';
import './useButtonGroup-B6Q5lGA8.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UCard = __nuxt_component_4;
  const _component_NuxtImg = _sfc_main$2;
  const _component_UButton = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-start justify-center gap-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_UCard, {
    class: "w-80 sm:w-80 md:w-[350px] lg:w-[414px] xl:w-[414px] h-100",
    ui: {
      body: {
        padding: "px-0 py-0 sm:p-0"
      }
    }
  }, {
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4${_scopeId}>Madrid Corner Sofa</h4><p class="currency"${_scopeId}> Price: 12,000.00 TK. </p><div class="pt-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UButton, {
          icon: "material-symbols-light:add-shopping-cart",
          size: "sm",
          color: "green",
          variant: "solid",
          label: "Add To Cart",
          trailing: false
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("h4", null, "Madrid Corner Sofa"),
          createVNode("p", { class: "currency" }, " Price: 12,000.00 TK. "),
          createVNode("div", { class: "pt-3" }, [
            createVNode(_component_UButton, {
              icon: "material-symbols-light:add-shopping-cart",
              size: "sm",
              color: "green",
              variant: "solid",
              label: "Add To Cart",
              trailing: false
            })
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtImg, {
          class: "rounded-t-lg",
          src: "https://placehold.co/400",
          alt: "card-image"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtImg, {
            class: "rounded-t-lg",
            src: "https://placehold.co/400",
            alt: "card-image"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UCard, {
    class: "w-80 sm:w-80 md:w-[350px] lg:w-[414px] xl:w-[414px] rounded-none h-100",
    ui: {
      body: {
        padding: "px-0 py-0 sm:p-0"
      }
    }
  }, {
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4${_scopeId}>Madrid Corner Sofa</h4><div class="flex justify-between"${_scopeId}><p class="currency"${_scopeId}> Price: 12,000.00 TK. </p><p class="discount"${_scopeId}> Discount: 50% </p></div><div class="pt-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_UButton, {
          icon: "material-symbols-light:add-shopping-cart",
          size: "sm",
          color: "green",
          variant: "solid",
          label: "Add To Cart",
          trailing: false
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("h4", null, "Madrid Corner Sofa"),
          createVNode("div", { class: "flex justify-between" }, [
            createVNode("p", { class: "currency" }, " Price: 12,000.00 TK. "),
            createVNode("p", { class: "discount" }, " Discount: 50% ")
          ]),
          createVNode("div", { class: "pt-3" }, [
            createVNode(_component_UButton, {
              icon: "material-symbols-light:add-shopping-cart",
              size: "sm",
              color: "green",
              variant: "solid",
              label: "Add To Cart",
              trailing: false
            })
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtImg, {
          class: "cursor-pointer",
          src: "https://placehold.co/400",
          alt: "card-image"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtImg, {
            class: "cursor-pointer",
            src: "https://placehold.co/400",
            alt: "card-image"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_UCard, {
    class: "w-80 sm:w-80 md:w-[350px] lg:w-[414px] xl:w-[414px] bg-gray-300 dark:bg-gray-500 h-60 rounded-none",
    ui: {
      body: {
        padding: "px-0 py-0 sm:p-0"
      }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtImg, {
          class: "cursor-pointer object-cover w-full",
          src: "https://placehold.co/400",
          alt: "card-image",
          style: { "height": "150px" }
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="p-4"${_scopeId}><h4${_scopeId}>Madrid Corner Sofa</h4><div class="flex justify-between"${_scopeId}><p class="currency"${_scopeId}> Price: 12,000.00 TK. </p>`);
        _push2(ssrRenderComponent(_component_UButton, {
          icon: "material-symbols-light:add-shopping-cart",
          size: "sm",
          color: "green",
          variant: "solid",
          label: "Add To Cart",
          trailing: false
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode(_component_NuxtImg, {
              class: "cursor-pointer object-cover w-full",
              src: "https://placehold.co/400",
              alt: "card-image",
              style: { "height": "150px" }
            })
          ]),
          createVNode("div", { class: "p-4" }, [
            createVNode("h4", null, "Madrid Corner Sofa"),
            createVNode("div", { class: "flex justify-between" }, [
              createVNode("p", { class: "currency" }, " Price: 12,000.00 TK. "),
              createVNode(_component_UButton, {
                icon: "material-symbols-light:add-shopping-cart",
                size: "sm",
                color: "green",
                variant: "solid",
                label: "Add To Cart",
                trailing: false
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="w-80 sm:w-80 md:w-[350px] lg:w-[414px] xl:w-[414px] rounded-t-full flex flex-col items-center bg-gray-500 shadow-lg overflow-hidden"><img alt="card-img" class="cursor-pointer object-cover w-full h-64 rounded-t-full" src="https://placehold.co/400"><div class="flex flex-col justify-center items-center py-3 bg-gray-500 rounded-b-full"><h4> Madrid Corner Sofa </h4><p class="currency"> Price: 12,000.00 TK. </p><div class="pt-3">`);
  _push(ssrRenderComponent(_component_UButton, {
    icon: "material-symbols-light:add-shopping-cart",
    size: "sm",
    color: "green",
    variant: "solid",
    label: "Add To Cart",
    trailing: false
  }, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/Shape.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cards",
  __ssrInlineRender: true,
  setup(__props) {
    useAppConfig();
    useHead({
      title: "Card Page | Nuxt UI Design"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UDivider = __nuxt_component_1$1;
      const _component_CardsShape = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mt-24 md:mt-24 lg:mt-24 xl:mt-24 mb-20" }, _attrs))}><section><div class="pt-3"><h3>Card Shape #1</h3><div class="pt-2">`);
      _push(ssrRenderComponent(_component_UDivider, null, null, _parent));
      _push(`</div></div><div class="p-4 mt-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">`);
      _push(ssrRenderComponent(_component_CardsShape, null, null, _parent));
      _push(`</div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cards-RKeYpYm8.mjs.map
