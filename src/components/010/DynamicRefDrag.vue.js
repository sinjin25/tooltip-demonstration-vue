/// <reference types="C:/Content/Vue Scratch/vue-popper/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import { createPopper } from '@popperjs/core';
import { nextTick, onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import usePopperInstance from '@/composables/10/use-popper-instance';
let tooltipId = 0;
const tooltipRefs = ref([]);
const buttonRef = useTemplateRef(__VLS_placeholder);
const workspaceRef = useTemplateRef(__VLS_placeholder);
const onClick = () => {
    // create a new popover
    const newTT = {
        ref: null,
        instance: null,
        ve: {
            // but we don't have a usePopperInstance ready yet
            getBoundingClientRect() {
                return new DOMRect(0, 0, 0, 0);
            }
        },
        text: `This is tooltip #${tooltipId}\n(Drag me)`
    };
    tooltipRefs.value.push(newTT);
    tooltipId++;
    /* console.log('onclick ran', newTT, tooltipRefs.value) */
    nextTick(() => {
        // wait for dom to be ready
        if (newTT.ref === null)
            throw Error('expected new ref to not be null by now?');
        if (workspaceRef.value === null)
            throw Error('expected a workspace ref to exist');
        if (buttonRef.value === null)
            throw Error('expected button ref to exist');
        newTT.instance = createPopper(newTT.ve, newTT.ref, {
            placement: 'bottom',
            modifiers: [
                { name: 'offset', options: { offset: [0, 8] } },
            ]
        });
        const up = usePopperInstance(newTT.ref, newTT.ve, buttonRef.value, workspaceRef.value, newTT.instance);
        newTT.up = up; // messy
        up.showTooltip();
        setupEvents(up);
    });
};
const setupEvents = (up) => {
    up.$tooltipRef.addEventListener('mousedown', up.startDrag);
};
const assignRef = (el, item) => {
    item.ref = el;
    return el;
};
onUnmounted(() => {
    // since usePopperInstance is run after component initialization, you can't hook into onUnmounted to destroy the popper instance and remove the drag event listener (so we need to do it here)
    for (let i of tooltipRefs.value) {
        try {
            i.up.destroy();
        }
        catch (e) {
            console.log(e);
        }
    }
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
    ...{ onClick: (__VLS_ctx.onClick) },
    ...{ class: "basic-btn" },
    ref: "button",
});
/** @type {typeof __VLS_ctx.button} */ ;
// @ts-ignore
[onClick, button,];
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.tooltipRefs))) {
    // @ts-ignore
    [tooltipRefs,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "tooltip" },
        ref: ((el) => __VLS_ctx.assignRef(el, item)),
    });
    // @ts-ignore
    [assignRef,];
    (item.text);
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "tooltip-arrow" },
        'data-popper-arrow': true,
    });
}
/** @type {__VLS_StyleScopedClasses['work-space-outer']} */ ;
/** @type {__VLS_StyleScopedClasses['no-select']} */ ;
/** @type {__VLS_StyleScopedClasses['work-space-inner']} */ ;
/** @type {__VLS_StyleScopedClasses['basic-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['tooltip']} */ ;
/** @type {__VLS_StyleScopedClasses['tooltip-arrow']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
