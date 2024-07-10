import '@/assets/styles/index.scss'

import { createApp } from 'vue'

import App from '@/App.vue'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { vFocus, vSubmit } from '@/directives'

library.add(fas)

const app = createApp(App).use(i18n).use(router).use(store)

app.directive('focus', vFocus)
app.directive('submit', vSubmit)

app.mount('#root')
