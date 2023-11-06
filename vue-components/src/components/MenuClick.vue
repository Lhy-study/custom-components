<template>
    <div class="container" ref="menuRef">
        <slot></slot>
        <Teleport to="body">
            <div 
                class="menu-click" 
                v-if="showMenu" 
                :style="{ 'top': offset.top + 'px', 'left': offset.left + 'px' }"
                v-resize="handleResize"
            >
                <div v-for="item in list" @click="handleClick(item)" class="menu-click-item">
                    {{ item.label }}
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import useContextMenu from "../hooks/contextMenu";
import view from '../hooks/viewContent';
import { computed } from "vue"
let menu = reactive({
    width: 0,
    height: 0
})
const offset = computed(() => {
    let left = 0, top = 0
    left = x.value < view.x - menu.width ? x.value : x.value - menu.width
    top = y.value < view.y - menu.height ? y.value : y.value - menu.height
    return {
        left,
        top
    }
})
const menuRef = ref<HTMLDivElement | null>(null);
const emit = defineEmits(['select']);
const { x, y, showMenu } = useContextMenu(menuRef!);
defineProps({
    list: {
        type: Array<{ label: string }>,
        required: true
    },
})
function handleClick(item: { label: string }) {
    emit('select', item)
}
function handleResize(size: { width: number, height: number }) {
    menu.width = size.width;
    menu.height = size.height;
}
</script>

<style scoped>
.menu-click {
    position: fixed;
    background-color: antiquewhite;
}

.menu-click-item {
    cursor: pointer;
    max-width: 200px;
    width: 150px;
    padding: .5rem;

    &:hover {
        background-color: aqua;
    }
}
</style>