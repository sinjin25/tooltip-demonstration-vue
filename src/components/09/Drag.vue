<script lang="ts" setup>
import { createPopper, type Instance, type VirtualElement } from '@popperjs/core';
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import usePopper from '@/composables/03/use-popper';

let popper: Instance | null = null
const tooltipRef = useTemplateRef('tt')
const workspaceRef = useTemplateRef('workspace')
const buttonRef = useTemplateRef('button')
const up = usePopper()

let dragging = false

const generateGetBoundingClientRectFunc = (x: number, y: number) => {
    // this shouldn't run
    if (!workspaceRef.value) return () => {
        return {
            width: 0, height: 0, x: 0, left: 0, right: 0, y: 0, bottom: 0, top: 0, toJSON() { }
        }
    }

    // if not dragging, just use the button's
    if (!dragging && buttonRef.value) return () => {
        return buttonRef.value!.getBoundingClientRect()
    }

    // dragging start
    const rect = workspaceRef.value.getBoundingClientRect()
    const clampedX = Math.min(Math.max(x, rect.left), rect.right)
    const clampedY = Math.min(Math.max(y, rect.top), rect.bottom)
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

// at this particular moment, refs are not loaded so it will fallback to 0,0,0,0,0,0,0
const virtualElement: VirtualElement = {
    getBoundingClientRect: generateGetBoundingClientRectFunc(0, 0)
}

const followEvent = (e: MouseEvent) => {
    console.log("follow event")
    const clientX = e.clientX
    const clientY = e.clientY

    virtualElement.getBoundingClientRect = generateGetBoundingClientRectFunc(clientX, clientY)
    if (popper) popper.update()
}

const startDrag = (e: MouseEvent) => {
    console.log('start drag')
    dragging = true
    document.addEventListener('mousemove', followEvent)
    document.addEventListener('mouseup', stopDrag)
}

const stopDrag = (e: MouseEvent) => {
    document.removeEventListener('mousemove', followEvent)
    document.removeEventListener('mouseup', stopDrag)
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
    // we can replace the virtualElement's getClientBoundingRect now that the dom is loaded
    virtualElement.getBoundingClientRect = generateGetBoundingClientRectFunc(0, 0)
    up.showTooltip(tooltipRef.value)
    popper.update()
})

onUnmounted(() => {
    popper!.destroy()
})
</script>

<template>
    <div class="work-space-outer no-select">
        <!-- DO NOT put mousemove on work-space-inner because the event can stop before reaching the clamp-->
        <div class="work-space-inner" ref="workspace">
            <div class="basic-btn" ref="button">The tooltip is draggable</div>
            <div class="tooltip" ref="tt" @mousedown="startDrag">
                This is a tooltip
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.no-select {
    -webkit-user-select: none;
    /* Safari */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE 10+ */
    user-select: none;
    /* Standard syntax */
}
</style>