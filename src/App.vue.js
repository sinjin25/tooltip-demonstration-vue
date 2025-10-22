/// <reference types="C:/Content/Vue Scratch/vue-popper/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import { ref } from 'vue';
import AnchoredTT from './components/01/AnchoredTT.vue';
import Navigation from './components/Navigation.vue';
import HoverTT from './components/02/HoverTT.vue';
import Many from './components/03/Many.vue';
import Composables from './components/04/Composables.vue';
import Virtual from './components/05/Virtual.vue';
import Clamp from './components/06/Clamp.vue';
import XClamp from './components/07/XClamp.vue';
import ManualUpdate from './components/08/ManualUpdate.vue';
import NoManualUpdate from './components/08/NoManualUpdate.vue';
import Drag from './components/09/Drag.vue';
import DynamicRefDrag from './components/010/DynamicRefDrag.vue';
const exampleToShow = ref('/');
const pages = [
    {
        href: '/',
        text: '01 Popover'
    },
    {
        href: '/hover',
        text: '02 Hover'
    },
    {
        href: '/many',
        text: '03 Many'
    },
    {
        href: '/composables',
        text: '04 Composables'
    },
    {
        href: '/virtual',
        text: '05 Virtual'
    },
    {
        href: '/clamp',
        text: '06 Clamp'
    },
    {
        href: '/clamp2',
        text: '07 X-Clamp Only'
    },
    {
        href: '/update',
        text: '08 Force Update'
    },
    {
        href: '/drag',
        text: '09 Drag'
    },
    {
        href: '/dynamic-drag',
        text: '10 Dynamic Ref Drag w/ composables'
    },
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {[typeof Navigation, typeof Navigation, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Navigation, new Navigation({
    ...{ 'onChangePage': {} },
    pages: (__VLS_ctx.pages),
    active: (__VLS_ctx.exampleToShow),
}));
const __VLS_1 = __VLS_0({
    ...{ 'onChangePage': {} },
    pages: (__VLS_ctx.pages),
    active: (__VLS_ctx.exampleToShow),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
const __VLS_5 = ({ changePage: {} },
    { onChangePage: ((e) => __VLS_ctx.exampleToShow = e) });
// @ts-ignore
[pages, exampleToShow, exampleToShow,];
var __VLS_2;
if (__VLS_ctx.exampleToShow === '/') {
    // @ts-ignore
    [exampleToShow,];
    /** @type {[typeof AnchoredTT, typeof AnchoredTT, ]} */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(AnchoredTT, new AnchoredTT({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
}
if (__VLS_ctx.exampleToShow === '/hover') {
    // @ts-ignore
    [exampleToShow,];
    /** @type {[typeof HoverTT, typeof HoverTT, ]} */ ;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(HoverTT, new HoverTT({}));
    const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
}
if (__VLS_ctx.exampleToShow === '/many') {
    // @ts-ignore
    [exampleToShow,];
    /** @type {[typeof Many, typeof Many, ]} */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(Many, new Many({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
}
if (__VLS_ctx.exampleToShow === '/composables') {
    // @ts-ignore
    [exampleToShow,];
    /** @type {[typeof Composables, typeof Composables, ]} */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(Composables, new Composables({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
}
if (__VLS_ctx.exampleToShow === '/virtual') {
    // @ts-ignore
    [exampleToShow,];
    /** @type {[typeof Virtual, typeof Virtual, ]} */ ;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(Virtual, new Virtual({}));
    const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
}
if (__VLS_ctx.exampleToShow === '/clamp') {
    // @ts-ignore
    [exampleToShow,];
    /** @type {[typeof Clamp, typeof Clamp, ]} */ ;
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(Clamp, new Clamp({}));
    const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
}
if (__VLS_ctx.exampleToShow === '/clamp2') {
    // @ts-ignore
    [exampleToShow,];
    /** @type {[typeof XClamp, typeof XClamp, ]} */ ;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(XClamp, new XClamp({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
}
if (__VLS_ctx.exampleToShow === '/update') {
    // @ts-ignore
    [exampleToShow,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "work-space-outer" },
    });
    /** @type {[typeof NoManualUpdate, typeof NoManualUpdate, ]} */ ;
    // @ts-ignore
    const __VLS_35 = __VLS_asFunctionalComponent(NoManualUpdate, new NoManualUpdate({}));
    const __VLS_36 = __VLS_35({}, ...__VLS_functionalComponentArgsRest(__VLS_35));
    /** @type {[typeof ManualUpdate, typeof ManualUpdate, ]} */ ;
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(ManualUpdate, new ManualUpdate({}));
    const __VLS_40 = __VLS_39({}, ...__VLS_functionalComponentArgsRest(__VLS_39));
}
if (__VLS_ctx.exampleToShow === '/drag') {
    // @ts-ignore
    [exampleToShow,];
    /** @type {[typeof Drag, typeof Drag, ]} */ ;
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(Drag, new Drag({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
}
if (__VLS_ctx.exampleToShow === '/dynamic-drag') {
    // @ts-ignore
    [exampleToShow,];
    /** @type {[typeof DynamicRefDrag, typeof DynamicRefDrag, ]} */ ;
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(DynamicRefDrag, new DynamicRefDrag({}));
    const __VLS_48 = __VLS_47({}, ...__VLS_functionalComponentArgsRest(__VLS_47));
}
/** @type {__VLS_StyleScopedClasses['work-space-outer']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
