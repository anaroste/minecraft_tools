import '@/assets/styles/index.scss'

import { createApp } from 'vue'

import App from '@/App.vue'
import store from '@/store'

import { vSubmit } from '@/directives'

const app = createApp(App).use(store)

app.directive('submit', vSubmit)

app.mount('#root')
