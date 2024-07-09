import '@/assets/styles/index.scss'

import { createApp } from 'vue'

import App from '@/App.vue'
import i18n from '@/i18n'
import store from '@/store'

import { vSubmit } from '@/directives'

const app = createApp(App).use(i18n).use(store)

app.directive('submit', vSubmit)

app.mount('#root')
