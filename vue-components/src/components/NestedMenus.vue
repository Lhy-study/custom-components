<template>
        <nested_menus_item :data="data">
            <nested_menus_item :data="data"></nested_menus_item>
        </nested_menus_item>
</template>

<script lang="ts" setup>
import nested_menus_item from "./nested-menus-item.vue";
import menu from "../types/nestedMenus"
defineProps({
    data: {
        type: Array<menu>,
        required: true
    },
    menu_item: {
        type: String,
        required: true
    }
})
</script>

<style lang="less" scoped></style>