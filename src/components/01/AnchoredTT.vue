<script lang="ts" setup>
import { createPopper, type Instance } from '@popperjs/core'
import { onMounted, onUnmounted, useTemplateRef } from 'vue';

const anchorRef = useTemplateRef('anchor') //anchorRef.value
const tooltipRef = useTemplateRef('tt')
let popper: Instance | null = null

const showTooltip = () => {
    if (popper === null) return
    if (tooltipRef.value === null) return
    // tooltipRef is a ref. tooltipRef.value points to an HTML element (or null)
    tooltipRef.value.setAttribute('data-show', '')
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
    <div class="work-space-outer">
        <div class="work-space-inner">
            <div class="basic-btn" ref="anchor" @click="showTooltip">Click me</div>
            <div class="tooltip" ref="tt">
                This is a tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>
</template>
