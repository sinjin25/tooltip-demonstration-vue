<script lang="ts" setup>
import { createPopper, type Instance, type VirtualElement } from '@popperjs/core';
import { nextTick, onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import usePopperInstance from '@/composables/10/use-popper-instance';

let tooltipId = 0
const tooltipRefs = ref<{
    ref: HTMLElement | null,
    instance: Instance | null,
    ve: VirtualElement,
    text: string,
    up: ReturnType<typeof usePopperInstance> | null
}[]>([])
const buttonRef = useTemplateRef('button')
const workspaceRef = useTemplateRef('workspace')

const onClick = () => {
    // create a new popover
    const newTT: typeof tooltipRefs.value[number] = {
        ref: null,
        instance: null,
        ve: { // we need to replace this IMMEDIATELY
            // but we don't have a usePopperInstance ready yet
            getBoundingClientRect() {
                return new DOMRect(0, 0, 0, 0)
            }
        },
        text: `This is tooltip #${tooltipId}\n(Drag me)`,
        up: null,
    }
    tooltipRefs.value.push(newTT)
    tooltipId++
    nextTick(() => {
        // wait for dom to be ready
        if (newTT.ref === null) throw Error('expected new ref to not be null by now?')
        if (workspaceRef.value === null) throw Error('expected a workspace ref to exist')
        if (buttonRef.value === null) throw Error('expected button ref to exist')
        newTT.instance = createPopper(newTT.ve, newTT.ref, {
            placement: 'bottom',
            modifiers: [
                { name: 'offset', options: { offset: [0, 8] } },
            ]
        })
        const up = usePopperInstance(
            newTT.ref,
            newTT.ve,
            buttonRef.value,
            workspaceRef.value,
            newTT.instance,
        )
        newTT.up = up // messy
        up.showTooltip()
        setupEvents(up)
    })
}

const setupEvents = (up: ReturnType<typeof usePopperInstance>) => {
    up.$tooltipRef.addEventListener('mousedown', up.startDrag)
}

const assignRef = (el: any, item: typeof tooltipRefs.value[number]) => {
    item.ref = el
    return el
}

onUnmounted(() => {
    // since usePopperInstance is run after component initialization, you can't hook into onUnmounted to destroy the popper instance and remove the drag event listener (so we need to do it here)
    for (let i of tooltipRefs.value) {
        try {
            i.up.destroy()
        } catch (e) {
            console.log(e)
        }
    }
})

</script>

<template>
    <div class="work-space-outer no-select">
        <!-- DO NOT put mousemove on work-space-inner because the event can stop before reaching the clamp-->
        <div class="work-space-inner" ref="workspace">
            <div class="basic-btn" ref="button" @click="onClick">Click to create a new tooltip that is draggable</div>
            <template v-for="(item, index) in tooltipRefs">
                <div class="tooltip" :ref="(el) => assignRef(el, item)">
                    {{ item.text }}
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </template>
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