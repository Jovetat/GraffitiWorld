import App from './App.vue'
import { createApp } from 'vue'
import router from '@/router/router.js'
import './styles/index.less'

createApp(App).use(router).mount('#app')
