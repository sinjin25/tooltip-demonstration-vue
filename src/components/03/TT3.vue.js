/// <reference types="C:/Content/Vue Scratch/vue-popper/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import { createPopper } from '@popperjs/core';
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
const anchorRef = useTemplateRef(__VLS_placeholder);
const tooltipRef = useTemplateRef(__VLS_placeholder);
let popper = null;
const togglePopover = () => {
    if (popper === null)
        return;
    if (tooltipRef.value === null)
        return;
    if (tooltipRef.value.hasAttribute('data-show')) {
        tooltipRef.value.removeAttribute('data-show');
    }
    else {
        tooltipRef.value.setAttribute('data-show', '');
    }
};
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
    ...{ onClick: (__VLS_ctx.togglePopover) },
    ...{ class: "basic-btn" },
    ref: "anchor",
});
/** @type {typeof __VLS_ctx.anchor} */ ;
// @ts-ignore
[togglePopover, anchor,];
var __VLS_0 = {};
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "tooltip" },
    ref: "tt",
});
/** @type {typeof __VLS_ctx.tt} */ ;
// @ts-ignore
[tt,];
var __VLS_2 = {};
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "tooltip-arrow" },
    'data-popper-arrow': true,
});
/** @type {__VLS_StyleScopedClasses['basic-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['tooltip']} */ ;
/** @type {__VLS_StyleScopedClasses['tooltip-arrow']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_3 = __VLS_2;
const __VLS_base = (await import('vue')).defineComponent({});
const __VLS_export = {};
export default {};
