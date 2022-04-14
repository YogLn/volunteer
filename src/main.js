import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

import router from './router'
import store from './store'
import { setupStore } from '@/store'

import '@/assets/css/reset.css';
import 'element-plus/dist/index.css';

import { registerTime } from '@/utils/format'

setupStore()
createApp(App).use(store).use(router).use(ElementPlus).use(registerTime).mount('#app')
