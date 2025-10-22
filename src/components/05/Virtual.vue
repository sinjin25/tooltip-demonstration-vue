<script lang="ts" setup>
import { createPopper, type Instance, type VirtualElement } from '@popperjs/core';
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import usePopper from '@/composables/03/use-popper';

let popper: Instance | null = null
const tooltipRef = useTemplateRef('tt')
const up = usePopper()

const generateGetBoundingClientRectFunc = (clientX: number, clientY: number) => {
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
        }
    }
}
const virtualElement: VirtualElement = {
    getBoundingClientRect: generateGetBoundingClientRectFunc(0, 0) // running a function that returns a function which will be used to update the position
}

const followEvent = (e: MouseEvent) => {
    const clientX = e.clientX
    const clientY = e.clientY

    virtualElement.getBoundingClientRect = generateGetBoundingClientRectFunc(clientX, clientY)
    if (popper) popper.update()
}

const showTooltip = () => {
    if (popper === null) return
    if (tooltipRef.value === null) return
    // tooltipRef is a ref. tooltipRef.value points to an HTML element (or null)
    tooltipRef.value.setAttribute('data-show', '')
}

onMounted(() => {
    popper = createPopper(
        virtualElement,
        tooltipRef.value!,
        {
            placement: 'bottom',
            modifiers: [
                { name: 'offset', options: { offset: [0, 8] } },
            ]
        }
    )

    showTooltip()
})

onUnmounted(() => {
    popper!.destroy()
})
</script>

<template>
    <div class="work-space-outer">
        <div class="work-space-inner" ref="workspace" @mousemove="followEvent"
            @mouseenter="() => up.showTooltip(tooltipRef)">
            <div class="basic-btn">Hover near me</div>
            <div class="tooltip" ref="tt">
                This is a tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tooltip {
    // since this is a child of work-space-inner, the transition means you might be still in the mouse over state while leaving the bounds of work-space-inner DOWNWARD
    pointer-events: none;

    &[data-show] {
        pointer-events: none;
    }

    // YOU CANNOT move it outside (as a non-child) because then anytime it moves under your cursor it will stop the hover event, causing the movement to be jerky
    // this is partially an effect of the transition css on transform, which means the movement isn't instant
}
</style>