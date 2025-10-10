<script lang="ts" setup>
import { createPopper, type Instance, type VirtualElement } from '@popperjs/core';
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import usePopper from '@/composables/03/use-popper';

let popper: Instance | null = null
const tooltipRef = useTemplateRef('tt')
const workspaceRef = useTemplateRef('workspace')
const up = usePopper()

const generateGetBoundingClientRectFunc = (x: number, y: number) => {
    if (!workspaceRef.value) return () => {
        return {
            width: 0, height: 0, x: 0, left: 0, right: 0, y: 0, bottom: 0, top: 0, toJSON() { }
        }
    }
    const rect = workspaceRef.value.getBoundingClientRect()
    const clampedX = Math.min(Math.max(x, rect.left), rect.right)
    const clampedY = rect.bottom
    return () => {
        return {
            width: 0,
            height: 0,
            x: clampedX, // left alias
            left: clampedX, // origin
            right: clampedX, // 0+0 = 0
            y: clampedY, // top alias
            bottom: clampedY, // 0+0 = 0
            top: clampedY, // origin
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

    up.showTooltip(tooltipRef.value)
})

onUnmounted(() => {
    popper!.destroy()
})
</script>

<template>
    <div class="work-space-outer" @mousemove="followEvent">
        <!-- DO NOT put mousemove on work-space-inner because the event can stop before reaching the clamp-->
        <div class="work-space-inner">
            <div class="basic-btn" ref="workspace">Fancier movement lock</div>
            <div class="tooltip" ref="tt">
                This is a tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>