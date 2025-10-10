<script setup lang="ts">
import { ref } from 'vue';
import AnchoredTT from './components/01/AnchoredTT.vue';
import Navigation from './components/Navigation.vue'
import HoverTT from './components/02/HoverTT.vue';
import Many from './components/03/Many.vue';
import Composables from './components/04/Composables.vue';
import Virtual from './components/05/Virtual.vue';
import Clamp from './components/06/Clamp.vue';
import XClamp from './components/07/XClamp.vue';
import ManualUpdate from './components/08/ManualUpdate.vue';
import NoManualUpdate from './components/08/NoManualUpdate.vue';

const exampleToShow = ref('/')

type Page = {
    text: string,
    href: string,
}

const pages: Page[] = [
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
]
</script>

<template>
    <Navigation :pages="pages" :active="exampleToShow" @change-page="(e) => exampleToShow = e"></Navigation>
    <template v-if="exampleToShow === '/'">
        <anchored-t-t></anchored-t-t>
    </template>
    <template v-if="exampleToShow === '/hover'">
        <hover-t-t></hover-t-t>
    </template>
    <template v-if="exampleToShow === '/many'">
        <Many></Many>
    </template>
    <template v-if="exampleToShow === '/composables'">
        <Composables></Composables>
    </template>
    <template v-if="exampleToShow === '/virtual'">
        <Virtual></Virtual>
    </template>
    <template v-if="exampleToShow === '/clamp'">
        <Clamp></Clamp>
    </template>
    <template v-if="exampleToShow === '/clamp2'">
        <XClamp></XClamp>
    </template>
    <template v-if="exampleToShow === '/update'">
        <div class="work-space-outer">
            <NoManualUpdate></NoManualUpdate>
            <ManualUpdate></ManualUpdate>
        </div>
    </template>
</template>

<style scoped></style>
