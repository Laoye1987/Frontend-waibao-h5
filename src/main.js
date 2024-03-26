import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'
import i18n from './locales/index.js';
import api from './api/index'

import 'vant/lib/index.css';
import './assets/css/default.css'
import './assets/css/public.css'
import 'amfe-flexible/index.js'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.provide('api', api)
app.mount('#app')
