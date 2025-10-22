/// <reference types="C:/Content/Vue Scratch/vue-popper/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import { createPopper } from '@popperjs/core';
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import usePopper from '@/composables/03/use-popper';
const anchorRef = useTemplateRef(__VLS_placeholder);
const tooltipRef = useTemplateRef(__VLS_placeholder);
let popper = null;
const up = usePopper();
onMounted(() => {
    if (anchorRef.value !== null && tooltipRef.value !== null) {
        popper = createPopper(anchorRef.value, tooltipRef.value, {
            placement: 'bottom',
            modifiers: [
                { name: 'offset', options: { offset: [0, 8] } },
            ]
        });
    }
});
onUnmounted(() => {
    if (popper !== null)
        popper.destroy();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "work-space-outer" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "work-space-inner" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ onMouseenter: (() => __VLS_ctx.up.showTooltip(__VLS_unref(tooltipRef))) },
    ...{ onMouseleave: (() => __VLS_ctx.up.hideTooltip(__VLS_unref(tooltipRef))) },
    ...{ class: "basic-btn" },
    ref: "anchor",
});
/** @type {typeof __VLS_ctx.anchor} */ ;
// @ts-ignore
[up, up, anchor,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "tooltip" },
    ref: "tt",
});
/** @type {typeof __VLS_ctx.tt} */ ;
// @ts-ignore
[tt,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "tooltip-arrow" },
    'data-popper-arrow': true,
});
/** @type {__VLS_StyleScopedClasses['work-space-outer']} */ ;
/** @type {__VLS_StyleScopedClasses['work-space-inner']} */ ;
/** @type {__VLS_StyleScopedClasses['basic-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['tooltip']} */ ;
/** @type {__VLS_StyleScopedClasses['tooltip-arrow']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
