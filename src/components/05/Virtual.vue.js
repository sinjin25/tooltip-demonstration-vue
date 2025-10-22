/// <reference types="C:/Content/Vue Scratch/vue-popper/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import { createPopper } from '@popperjs/core';
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import usePopper from '@/composables/03/use-popper';
let popper = null;
const tooltipRef = useTemplateRef(__VLS_placeholder);
const up = usePopper();
const generateGetBoundingClientRectFunc = (clientX, clientY) => {
    // have access to a variable called clientX and clientY
    return () => {
        return {
            width: 0,
            height: 0,
            x: clientX, // left alias
            left: clientX, // origin
            right: clientX, // 0+0 = 0
            y: clientY, // top alias
            bottom: clientY, // 0+0 = 0
            top: clientY, // origin
            toJSON() { }, // not used
        };
    };
};
const virtualElement = {
    getBoundingClientRect: generateGetBoundingClientRectFunc(0, 0) // running a function that returns a function which will be used to update the position
};
const followEvent = (e) => {
    const clientX = e.clientX;
    const clientY = e.clientY;
    virtualElement.getBoundingClientRect = generateGetBoundingClientRectFunc(clientX, clientY);
    if (popper)
        popper.update();
};
const showTooltip = () => {
    if (popper === null)
        return;
    if (tooltipRef.value === null)
        return;
    // tooltipRef is a ref. tooltipRef.value points to an HTML element (or null)
    tooltipRef.value.setAttribute('data-show', '');
};
onMounted(() => {
    popper = createPopper(virtualElement, tooltipRef.value, {
        placement: 'bottom',
        modifiers: [
            { name: 'offset', options: { offset: [0, 8] } },
        ]
    });
    showTooltip();
});
onUnmounted(() => {
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
    ...{ onMousemove: (__VLS_ctx.followEvent) },
    ...{ onMouseenter: (() => __VLS_ctx.up.showTooltip(__VLS_unref(tooltipRef))) },
    ...{ class: "work-space-inner" },
    ref: "workspace",
});
/** @type {typeof __VLS_ctx.workspace} */ ;
// @ts-ignore
[followEvent, up, workspace,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "basic-btn" },
});
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
