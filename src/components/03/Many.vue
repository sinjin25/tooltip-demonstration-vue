<script lang="ts" setup>
import TT3 from './TT3.vue'
type BtnAndTooltip = {
    btnText: string,
    tooltipText: string,
}
const source1 = 'Lorem ipsum dolor sit amet consectetur, adipisicing'.split(' ')
const source2 = 'elit. Illum, error? Vel, quia fugiat voluptate ullam'.split(' ')
const arr: BtnAndTooltip[] = []
for (let i = 0; i < source1.length; i++) {
    arr.push({
        btnText: source1[i]!,
        tooltipText: source2[i]!,
    })
}
</script>

<template>
    <div class="work-space-outer">
        <div class="work-space-inner">
            <div class="container">
                <TT3 v-for="(item, index) in arr" :key="index">
                    <template v-slot:default>
                        <div>{{ item.btnText }}</div>
                    </template>
                    <template v-slot:tooltip>{{ item.tooltipText }}</template>
                </TT3>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.container {
    display: flex;
    gap: 10px;
}

.work-space-inner {
    width: auto;
    padding: 10px;
}
</style>