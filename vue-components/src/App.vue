<script setup lang="ts">
import ShowMsg from './components/showMsg';
import MenuClick from './components/MenuClick.vue';
function hanle(data: any) {
  // console.log(data)
  alert(data)
}
</script>

<template>
  <div>
    <MenuClick :list="[
      { label: '查看评论' },
      { label: '分享' },
      { label: '收藏' },
      { label: '播放' }
    ]" @select="hanle">
      <div 
        style="width: 100vw;height: 600px;background-color: cornflowerblue;"
      >
      </div>
    </MenuClick>
  </div>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
