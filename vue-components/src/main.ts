import { createPinia } from 'pinia';
import { createApp } from 'vue'
import App from './App.vue'
import vResizeOb from './directive/vResizeOb';
createApp(App).directive('resize',vResizeOb).use(createPinia()).mount('#app')
