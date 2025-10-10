<script lang="ts" setup>
import { createPopper, type Instance } from '@popperjs/core'
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import usePopper from '@/composables/03/use-popper';

const anchorRef = useTemplateRef('anchor')
const tooltipRef = useTemplateRef('tt')
let popper: Instance | null = null
const up = usePopper()

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
            <div class="basic-btn" ref="anchor" @mouseenter="() => up.showTooltip(tooltipRef)"
                @mouseleave="() => up.hideTooltip(tooltipRef)">Hover me
            </div>
            <div class="tooltip" ref="tt">
                This is a tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>
</template>
