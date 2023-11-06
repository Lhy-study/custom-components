<template>
    <template v-if="data">
        <div v-for="item in data" key="item">
            <p>{{ item.name }}</p>
            <div v-if="item.children">
                
            </div>
        </div>
    </template>
</template>

<script lang="ts" setup>
import menu from "../types/nestedMenus"
defineProps({
    data: {
        type: Array<menu>,
        required: true
    }
})
</script>

<style lang="less" scoped></style>