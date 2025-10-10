<script lang="ts" setup>
import { createPopper, type Instance, type VirtualElement } from '@popperjs/core';
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import usePopper from '@/composables/03/use-popper';

let popper: Instance | null = null
const tooltipRef = useTemplateRef('tt')
const workspaceRef = useTemplateRef('workspace')
const up = usePopper()
const buttonText = ref('The tooltip will get messed up')

const swapText = () => {
    if (buttonText.value === 'The tooltip will get messed up') {
        buttonText.value = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima facilis delectus explicabo vero id. Totam enim ad, eius iste repellendus quos ipsam ea iure`
        return
    }
    buttonText.value = 'The tooltip will get messed up'
}
let interval: ReturnType<typeof setInterval> | undefined = undefined

onMounted(() => {
    popper = createPopper(
        workspaceRef.value!,
        tooltipRef.value!,
        {
            placement: 'bottom',
            modifiers: [
                { name: 'offset', options: { offset: [0, 8] } },
            ]
        }
    )

    up.showTooltip(tooltipRef.value)

    interval = setInterval(swapText, 3000)
})

onUnmounted(() => {
    popper!.destroy()

    clearInterval(interval)
})
</script>

<template>
    <div class="work-space-inner">
        <div class="basic-btn" ref="workspace">{{ buttonText }}</div>
        <div class="tooltip" ref="tt">
            This is a tooltip
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>