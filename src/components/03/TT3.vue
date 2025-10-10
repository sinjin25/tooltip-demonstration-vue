<script lang="ts" setup>
import { createPopper, type Instance } from '@popperjs/core'
import { onMounted, onUnmounted, useTemplateRef } from 'vue';

const anchorRef = useTemplateRef('anchor')
const tooltipRef = useTemplateRef('tt')
let popper: Instance | null = null

const togglePopover = () => {
    if (popper === null) return
    if (tooltipRef.value === null) return
    if (tooltipRef.value.hasAttribute('data-show')) {
        tooltipRef.value.removeAttribute('data-show')
    } else {
        tooltipRef.value.setAttribute('data-show', '')
    }
}

onMounted(() => {
    if (anchorRef.value !== null && tooltipRef.value !== null) {
        popper = createPopper(anchorRef.value, tooltipRef.value, {
            placement: 'bottom',
            modifiers: [
                { name: 'offset', options: { offset: [0, 8] } },
            ]
        })
    }
})

onUnmounted(() => {
    if (popper !== null) popper.destroy()
})
</script>

<template>
    <div class="basic-btn" ref="anchor" @click="togglePopover">
        <slot></slot>
    </div>
    <div class="tooltip" ref="tt">
        <slot name="tooltip"></slot>
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
</template>
