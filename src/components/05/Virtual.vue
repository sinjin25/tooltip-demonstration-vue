<script lang="ts" setup>
import { createPopper, type Instance, type VirtualElement } from '@popperjs/core';
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import usePopper from '@/composables/03/use-popper';

let popper: Instance | null = null
const tooltipRef = useTemplateRef('tt')
const up = usePopper()

const generateGetBoundingClientRectFunc = (x: number, y: number) => {
    return () => {
        return {
            width: 0,
            height: 0,
            x: x, // left alias
            left: x, // origin
            right: x, // 0+0 = 0
            y: y, // top alias
            bottom: y, // 0+0 = 0
            top: y, // origin
            toJSON() { }, // not used
        }
    }
}
const virtualElement: VirtualElement = {
    getBoundingClientRect: generateGetBoundingClientRectFunc(0, 0)
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
            @mouseenter="() => up.showTooltip(tooltipRef)" @mouseleave="() => up.hideTooltip(tooltipRef)">
            <div class="basic-btn">Hover near me</div>
            <div class="tooltip" ref="tt">
                This is a tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>