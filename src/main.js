import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

import router from './router'
import store from './store'

import '@/assets/css/reset.css';
import 'element-plus/dist/index.css';

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
