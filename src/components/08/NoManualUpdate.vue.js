/// <reference types="C:/Content/Vue Scratch/vue-popper/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import { createPopper } from '@popperjs/core';
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import usePopper from '@/composables/03/use-popper';
let popper = null;
const tooltipRef = useTemplateRef(__VLS_placeholder);
const workspaceRef = useTemplateRef(__VLS_placeholder);
const up = usePopper();
const buttonText = ref('The tooltip will get messed up');
const swapText = () => {
    if (buttonText.value === 'The tooltip will get messed up') {
        buttonText.value = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima facilis delectus explicabo vero id. Totam enim ad, eius iste repellendus quos ipsam ea iure`;
        return;
    }
    buttonText.value = 'The tooltip will get messed up';
};
let interval = undefined;
onMounted(() => {
    popper = createPopper(workspaceRef.value, tooltipRef.value, {
        placement: 'bottom',
        modifiers: [
            { name: 'offset', options: { offset: [0, 8] } },
        ]
    });
    up.showTooltip(tooltipRef.value);
    interval = setInterval(swapText, 3000);
});
onUnmounted(() => {
    popper.destroy();
    clearInterval(interval);
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
    ...{ class: "work-space-inner" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "basic-btn" },
    ref: "workspace",
});
/** @type {typeof __VLS_ctx.workspace} */ ;
// @ts-ignore
[workspace,];
(__VLS_ctx.buttonText);
// @ts-ignore
[buttonText,];
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
/** @type {__VLS_StyleScopedClasses['work-space-inner']} */ ;
/** @type {__VLS_StyleScopedClasses['basic-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['tooltip']} */ ;
/** @type {__VLS_StyleScopedClasses['tooltip-arrow']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
