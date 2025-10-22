/// <reference types="C:/Content/Vue Scratch/vue-popper/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import { createPopper } from '@popperjs/core';
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import usePopper from '@/composables/03/use-popper';
let popper = null;
const tooltipRef = useTemplateRef(__VLS_placeholder);
const workspaceRef = useTemplateRef(__VLS_placeholder);
const buttonRef = useTemplateRef(__VLS_placeholder);
const up = usePopper();
let dragging = false;
const generateGetBoundingClientRectFunc = (x, y) => {
    // this shouldn't run
    if (!workspaceRef.value)
        return () => {
            return {
                width: 0, height: 0, x: 0, left: 0, right: 0, y: 0, bottom: 0, top: 0, toJSON() { }
            };
        };
    // if not dragging, just use the button's
    if (!dragging && buttonRef.value)
        return () => {
            return buttonRef.value.getBoundingClientRect();
        };
    // dragging start
    const rect = workspaceRef.value.getBoundingClientRect();
    const clampedX = Math.min(Math.max(x, rect.left), rect.right);
    const clampedY = Math.min(Math.max(y, rect.top), rect.bottom);
    return () => {
        return {
            width: 0,
            height: 0,
            x: clampedX, // left alias
            left: clampedX, // origin
            right: clampedX, // 0+0 = 0
            y: clampedY, // top alias
            bottom: clampedY, // 0+0 = 0
            top: clampedY, // origin
            toJSON() { }, // not used
        };
    };
};
// at this particular moment, refs are not loaded so it will fallback to 0,0,0,0,0,0,0
const virtualElement = {
    getBoundingClientRect: generateGetBoundingClientRectFunc(0, 0)
};
const followEvent = (e) => {
    console.log("follow event");
    const clientX = e.clientX;
    const clientY = e.clientY;
    virtualElement.getBoundingClientRect = generateGetBoundingClientRectFunc(clientX, clientY);
    if (popper)
        popper.update();
};
const startDrag = (e) => {
    console.log('start drag');
    dragging = true;
    document.addEventListener('mousemove', followEvent);
    document.addEventListener('mouseup', stopDrag);
};
const stopDrag = (e) => {
    document.removeEventListener('mousemove', followEvent);
    document.removeEventListener('mouseup', stopDrag);
};
onMounted(() => {
    popper = createPopper(virtualElement, tooltipRef.value, {
        placement: 'bottom',
        modifiers: [
            { name: 'offset', options: { offset: [0, 8] } },
        ]
    });
    // we can replace the virtualElement's getClientBoundingRect now that the dom is loaded
    virtualElement.getBoundingClientRect = generateGetBoundingClientRectFunc(0, 0);
    up.showTooltip(tooltipRef.value);
    popper.update();
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
    ...{ class: "work-space-outer no-select" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "work-space-inner" },
    ref: "workspace",
});
/** @type {typeof __VLS_ctx.workspace} */ ;
// @ts-ignore
[workspace,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "basic-btn" },
    ref: "button",
});
/** @type {typeof __VLS_ctx.button} */ ;
// @ts-ignore
[button,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ onMousedown: (__VLS_ctx.startDrag) },
    ...{ class: "tooltip" },
    ref: "tt",
});
/** @type {typeof __VLS_ctx.tt} */ ;
// @ts-ignore
[startDrag, tt,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "tooltip-arrow" },
    'data-popper-arrow': true,
});
/** @type {__VLS_StyleScopedClasses['work-space-outer']} */ ;
/** @type {__VLS_StyleScopedClasses['no-select']} */ ;
/** @type {__VLS_StyleScopedClasses['work-space-inner']} */ ;
/** @type {__VLS_StyleScopedClasses['basic-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['tooltip']} */ ;
/** @type {__VLS_StyleScopedClasses['tooltip-arrow']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
