<script lang="ts" setup>


const emit = defineEmits<{
    (e: 'change-page', to: string): void
}>()

const props = defineProps<{
    active: string,
    pages: {
        text: string,
        href: string,
    }[]
}>()
</script>

<template>
    <div class="nav">
        <div v-for="(item, index) in props.pages" :key="index" class="nav-btn"
            :class="item.href === props.active ? '--active' : ''">
            <div :href="item.href" @click="emit('change-page', item.href)">{{ item.text }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.73);

    &-btn {
        border-left: 2px solid black;
        border-right: 2px solid black;
        padding: 0 4px;
        cursor: pointer;
        color: white;

        &.--active {
            color: orange;
        }
    }
}
</style>