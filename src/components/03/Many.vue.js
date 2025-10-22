/// <reference types="C:/Content/Vue Scratch/vue-popper/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import TT3 from './TT3.vue';
const source1 = 'Lorem ipsum dolor sit amet consectetur, adipisicing'.split(' ');
const source2 = 'elit. Illum, error? Vel, quia fugiat voluptate ullam'.split(' ');
const arr = [];
for (let i = 0; i < source1.length; i++) {
    arr.push({
        btnText: source1[i],
        tooltipText: source2[i],
    });
}
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
    ...{ class: "container" },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.arr))) {
    // @ts-ignore
    [arr,];
    /** @type {[typeof TT3, typeof TT3, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TT3, new TT3({
        key: (index),
    }));
    const __VLS_1 = __VLS_0({
        key: (index),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    const { default: __VLS_3 } = __VLS_2.slots;
    {
        const { default: __VLS_4 } = __VLS_2.slots;
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
        (item.btnText);
    }
    {
        const { tooltip: __VLS_5 } = __VLS_2.slots;
        (item.tooltipText);
    }
    var __VLS_2;
}
/** @type {__VLS_StyleScopedClasses['work-space-outer']} */ ;
/** @type {__VLS_StyleScopedClasses['work-space-inner']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
